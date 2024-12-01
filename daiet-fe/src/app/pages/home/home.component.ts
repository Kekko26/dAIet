import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsAddEvent, ChipsModule } from 'primeng/chips';
import { AsyncPipe, JsonPipe, KeyValuePipe } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
  AutoCompleteSelectEvent,
  AutoCompleteUnselectEvent,
} from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DietTableComponent } from './diet-table/diet-table.component';
import { DropdownModule } from 'primeng/dropdown';
import { BehaviorSubject, debounceTime, finalize, of } from 'rxjs';
import { TypologicalService } from 'src/app/core/services/typological.service';
import {
  DiseaseDTO,
  MedicationDTO,
} from 'src/app/shared/model/typological.model';
import { DietGeneratorService } from 'src/app/core/services/diet-generator.service';
import {
  DietPlan,
  UserParameters,
} from 'src/app/shared/model/diet-generator.model';
import { ButtonModule } from 'primeng/button';
import { ConversationComponent } from './conversation/conversation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    ChipsModule,
    InputTextareaModule,
    AutoCompleteModule,
    InputNumberModule,
    SelectButtonModule,
    DietTableComponent,
    DropdownModule,
    ButtonModule,
    ConversationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private formBuilder: FormBuilder,
    private typologicalService: TypologicalService,
    private dietGeneratorService: DietGeneratorService
  ) {}
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  goals = [
    { label: 'Lose weight', value: 'weight_loss' },
    { label: 'Keep weight', value: 'weight_maintenance' },
    { label: 'Gain weight', value: 'weight_gain' },
  ];

  dietPlan: DietPlan | null = null;

  sesso = [
    {
      label: 'Man',
      value: 'man',
    },
    {
      label: 'Woman',
      value: 'woman',
    },
  ];

  scrollDown() {
    if (!this.scrollContainer) {
      return;
    }
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer?.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Could not scroll to bottom', err);
    }
  }

  chatbotForm: FormGroup = this.formBuilder.group({
    allergeni: [''],
    farmaci: [[]],
    patologie: [[]],
    vitalSigns: this.formBuilder.group({
      altezza: [''],
      peso: [''],
      eta: [null],
      sesso: [''],
      goal: [''],
    }),
    richiesta: [''],
  });

  patologieList: DiseaseDTO[] = [];
  filteredPatologie: DiseaseDTO[] = [];

  filterPatologie(event: AutoCompleteCompleteEvent) {
    this.filteredPatologie = this.patologieList.filter((patologia) => {
      return patologia.disease
        .toLowerCase()
        .includes(event.query.toLowerCase());
    });
  }

  farmaciList: MedicationDTO[] = [];
  filteredFarmaci: MedicationDTO[] = [];
  filterFarmaci(event: AutoCompleteCompleteEvent) {
    this.filteredFarmaci = this.farmaciList.filter((farmaco) => {
      return farmaco.name.toLowerCase().includes(event.query.toLowerCase());
    });
  }

  farmaciMap = new Map<number, string>([]);

  get farmaci(): string[] {
    return this.chatbotForm.get('farmaci')?.value;
  }

  updateFarmacoDetails(event: Event | HTMLInputElement, farmacoId: number) {
    const inputEvent = event as Event & { target: HTMLInputElement };
    this.farmaciMap.set(farmacoId, inputEvent.target.value);
  }

  removeFarmaco(event: AutoCompleteUnselectEvent) {
    this.farmaciMap.delete(event.value.id);
  }

  ngOnInit() {
    this.typologicalService.getDiseases().subscribe((diseases) => {
      this.patologieList = diseases;
    });
    this.typologicalService.getMedications().subscribe((medications) => {
      this.farmaciList = medications;
    });

    if (sessionStorage.getItem('diet.plan')) {
      this.dietGeneratorService
        .generateDiet()
        .subscribe((res) => (this.dietPlan = res));
    }
  }

  isLoading: boolean = false;
  submit() {
    this.isLoading = true;
    this.chatbotForm.disable();
    if (this.dietPlan) {
      sessionStorage.removeItem('diet.plan');
      this.dietPlan = null;
    }
    this.dietGeneratorService
      .generateDiet({
        age: this.chatbotForm.get('vitalSigns')?.get('eta')?.value,
        weight: this.chatbotForm.get('vitalSigns')?.get('peso')?.value,
        height: this.chatbotForm.get('vitalSigns')?.get('altezza')?.value,
        goal: this.chatbotForm.get('vitalSigns')?.get('goal')?.value.label,
        gender: this.chatbotForm.get('vitalSigns')?.get('sesso')?.value,
        allergens: this.chatbotForm.get('allergeni')?.value,
        diseases: this.chatbotForm.get('patologie')?.value,
        medications: this.chatbotForm
          .get('farmaci')
          ?.value.map((farmaco: MedicationDTO) => {
            return {
              ...farmaco,
              frequency: this.farmaciMap.get(farmaco.id),
            };
          }),
      } as UserParameters)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.chatbotForm.enable();
        })
      )
      .subscribe((fetchedDiet) => {
        this.dietPlan = fetchedDiet;
        sessionStorage.setItem('diet.plan', JSON.stringify(fetchedDiet));
      });
  }
}
