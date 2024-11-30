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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    ChipsModule,
    InputTextareaModule,
    AutoCompleteModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private formBuilder: FormBuilder) {}
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  // TODO: testo simulato
  testoSimulato = '';

  scrollDown() {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Could not scroll to bottom', err);
    }
  }

  chatbotForm: FormGroup = this.formBuilder.group({
    allergeni: [''],
    farmaci: [[]],
    patologie: [[]],
    vitalSigns: [''],
    richiesta: [''],
  });

  patologieList = [
    { id: 1, name: 'Diabete', code: 'DIA' },
    { id: 2, name: 'Ipertensione', code: 'IPE' },
    { id: 3, name: 'Colesterolo', code: 'COL' },
    { id: 4, name: 'Obesità', code: 'OBE' },
    { id: 5, name: 'Anemia', code: 'ANE' },
    { id: 6, name: 'Tiroide', code: 'TIR' },
    { id: 7, name: 'Depressione', code: 'DEP' },
  ];
  filteredPatologie: any[] = [];

  filterPatologie(event: AutoCompleteCompleteEvent) {
    this.filteredPatologie = this.patologieList.filter((patologia) => {
      return patologia.name.toLowerCase().includes(event.query.toLowerCase());
    });
  }

  farmaciList = [
    { id: 1, name: 'Paracetamolo', code: 'PAR' },
    { id: 2, name: 'Ibuprofene', code: 'IBU' },
    { id: 3, name: 'Aspirina', code: 'ASP' },
    {
      id: 4,
      name: 'Amoxicillina',
      code: 'AMO',
    },
    {
      id: 5,
      name: 'Azitromicina',
      code: 'AZI',
    },
  ];
  filteredFarmaci: any[] = [];
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

  submit() {
    console.log(this.chatbotForm.value);
    console.log(this.farmaciMap);
  }

  ngAfterViewInit() {
    // TODO: simulazione ripsosta chat
    // setInterval(() => {
    //   this.testoSimulato =
    //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam tempore ipsum, quod eligendi praesentium aut accusamus possimus eos adipisci reiciendis doloribus optio esse sed ad unde at! Perspiciatis minus quidem odio, aut delectus ipsam recusandae dolores consectetur ullam. Corporis, earum consectetur sequi deserunt nobis nam consequatur? Magni quisquam, soluta consequuntur debitis cum dolorem aliquam quasi, tenetur laboriosam exercitationem aspernatur velit nostrum totam sed natus vero. Doloremque vel vitae quasi quam magnam nostrum porro odit odio voluptatibus officia commodi, quis perferendis qui fugit hic recusandae et ea, eius ullam minus minima, praesentium sunt veritatis optio? Reiciendis quos dicta ipsam architecto sint enim officia ullam laborum in nobis, quaerat sit id eligendi praesentium, quasi voluptatem! Blanditiis doloremque laborum non dicta quia error officia placeat itaque. Et ea officiis adipisci voluptate sapiente suscipit consequuntur laboriosam dolorem sed, quibusdam magni omnis culpa illum magnam totam sint blanditiis id necessitatibus? Numquam provident soluta dolor eum dolorem esse distinctio similique molestias ullam aliquid! Enim, totam perspiciatis aliquid, adipisci libero expedita perferendis provident voluptatum doloremque ipsum possimus ducimus voluptates iste natus quia. Quam recusandae ducimus repudiandae impedit asperiores id vitae illo placeat. Unde ea ipsum sint. Veritatis nostrum consequuntur doloremque est quae repudiandae architecto ut alias exercitationem?';
    //   this.scrollDown();
    // }, 2000);
  }
}
