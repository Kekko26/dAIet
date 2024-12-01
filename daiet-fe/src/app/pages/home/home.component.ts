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
import { BehaviorSubject, debounceTime } from 'rxjs';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private formBuilder: FormBuilder) {}
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  goals = [
    { label: 'Lose weight', value: 'weight_loss' },
    { label: 'Keep weight', value: 'weight_maintenance' },
    { label: 'Gain weight', value: 'weight_gain' },
  ];

  // TODO: testo simulato
  testoSimulato = new BehaviorSubject<string>('');

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

  // TODO: variabile tabella
  isTable = false;

  scrollDown() {
    console.log(this.scrollContainer);
    if (!this.scrollContainer) {
      return;
    }
    try {
      console.log(this.scrollContainer?.nativeElement.scrollHeight);
      console.log(this.scrollContainer?.nativeElement.scrollTop);
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer?.nativeElement.scrollHeight;
      console.log(this.scrollContainer?.nativeElement.scrollHeight);
      console.log(this.scrollContainer?.nativeElement.scrollTop);
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
    this.isTable = true;
    this.testoSimulato.next(
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam tempore ipsum, quod eligendi praesentium aut accusamus possimus eos adipisci reiciendis doloribus optio esse sed ad unde at! Perspiciatis minus quidem odio, aut delectus ipsam recusandae dolores consectetur ullam. Corporis, earum consectetur sequi deserunt nobis nam consequatur? Magni quisquam, soluta consequuntur debitis cum dolorem aliquam quasi, tenetur laboriosam exercitationem aspernatur velit nostrum totam sed natus vero. Doloremque vel vitae quasi quam magnam nostrum porro odit odio voluptatibus officia commodi, quis perferendis qui fugit hic recusandae et ea, eius ullam minus minima, praesentium sunt veritatis optio? Reiciendis quos dicta ipsam architecto sint enim officia ullam laborum in nobis, quaerat sit id eligendi praesentium, quasi voluptatem! Blanditiis doloremque laborum non dicta quia error officia placeat itaque. Et ea officiis adipisci voluptate sapiente suscipit consequuntur laboriosam dolorem sed, quibusdam magni omnis culpa illum magnam totam sint blanditiis id necessitatibus? Numquam provident soluta dolor eum dolorem esse distinctio similique molestias ullam aliquid! Enim, totam perspiciatis aliquid, adipisci libero expedita perferendis provident voluptatum doloremque ipsum possimus ducimus voluptates iste natus quia. Quam recusandae ducimus repudiandae impedit asperiores id vitae illo placeat. Unde ea ipsum sint. Veritatis nostrum consequuntur doloremque est quae repudiandae architecto ut alias exercitationem?'
    );
  }

  ngOnInit() {
    this.testoSimulato.pipe(debounceTime(400)).subscribe((value) => {
      setTimeout(() => {
        this.scrollDown();
      }, 300);
    });
  }

  retreivedJson = {
    patientProfile: {
      weight: 70,
      height: 175,
      age: 30,
      goal: 'weight loss',
    },
    dailyCaloricNeeds: 2500,
    caloricIntakePlan: 2000,
    macronutrientBalance: {
      carbohydrates: 55,
      proteins: 30,
      fats: 15,
    },
    mealPlan: {
      mon: {
        meals: [
          {
            meal: 'breakfast',
            hour: '07:30 AM',
            main: 'Scrambled eggs with spinach',
            side: 'Whole grain toast',
            vegetables: 'Tomato slices',
            dessert: 'Greek yogurt with honey',
            nutritionalValues: {
              calories: 350,
              carbohydrates: 30,
              proteins: 25,
              fats: 15,
            },
          },
          {
            meal: 'mid-morning snack',
            hour: '10:30 AM',
            main: 'Apple slices with almond butter',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 20,
              proteins: 4,
              fats: 8,
            },
          },
          {
            meal: 'lunch',
            hour: '12:30 PM',
            main: 'Grilled chicken salad with olive oil dressing',
            side: 'Quinoa',
            vegetables: 'Cucumber and bell pepper',
            dessert: 'Mixed berries',
            nutritionalValues: {
              calories: 450,
              carbohydrates: 40,
              proteins: 35,
              fats: 20,
            },
          },
          {
            meal: 'mid-afternoon snack',
            hour: '03:30 PM',
            main: 'Carrot sticks with hummus',
            nutritionalValues: {
              calories: 100,
              carbohydrates: 15,
              proteins: 5,
              fats: 10,
            },
          },
          {
            meal: 'dinner',
            hour: '07:00 PM',
            main: 'Baked salmon with steamed broccoli',
            side: 'Brown rice',
            vegetables: 'Steamed carrots',
            dessert: 'Fruit salad',
            nutritionalValues: {
              calories: 500,
              carbohydrates: 50,
              proteins: 40,
              fats: 20,
            },
          },
        ],
      },
      tue: {
        meals: [
          {
            meal: 'breakfast',
            hour: '07:30 AM',
            main: 'Oatmeal with banana and honey',
            nutritionalValues: {
              calories: 300,
              carbohydrates: 40,
              proteins: 10,
              fats: 10,
            },
          },
          {
            meal: 'mid-morning snack',
            hour: '10:30 AM',
            main: 'Greek yogurt with mixed berries',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 20,
              proteins: 15,
              fats: 0,
            },
          },
          {
            meal: 'lunch',
            hour: '12:30 PM',
            main: 'Turkey and avocado wrap',
            side: 'Mixed greens salad',
            nutritionalValues: {
              calories: 500,
              carbohydrates: 40,
              proteins: 30,
              fats: 25,
            },
          },
          {
            meal: 'mid-afternoon snack',
            hour: '03:30 PM',
            main: 'Hard-boiled egg and cherry tomatoes',
            nutritionalValues: {
              calories: 100,
              carbohydrates: 5,
              proteins: 6,
              fats: 5,
            },
          },
          {
            meal: 'dinner',
            hour: '07:00 PM',
            main: 'Grilled chicken breast with roasted vegetables',
            side: 'Quinoa',
            nutritionalValues: {
              calories: 400,
              carbohydrates: 30,
              proteins: 40,
              fats: 15,
            },
          },
        ],
      },
      wed: {
        meals: [
          {
            meal: 'breakfast',
            hour: '07:30 AM',
            main: 'Avocado toast with scrambled eggs',
            nutritionalValues: {
              calories: 350,
              carbohydrates: 30,
              proteins: 20,
              fats: 20,
            },
          },
          {
            meal: 'mid-morning snack',
            hour: '10:30 AM',
            main: 'Cottage cheese with cucumber slices',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 5,
              proteins: 20,
              fats: 0,
            },
          },
          {
            meal: 'lunch',
            hour: '12:30 PM',
            main: 'Grilled chicken breast with mixed greens salad',
            side: 'Whole grain crackers',
            nutritionalValues: {
              calories: 400,
              carbohydrates: 20,
              proteins: 40,
              fats: 15,
            },
          },
          {
            meal: 'mid-afternoon snack',
            hour: '03:30 PM',
            main: 'Rice cakes with almond butter and banana slices',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 25,
              proteins: 4,
              fats: 8,
            },
          },
          {
            meal: 'dinner',
            hour: '07:00 PM',
            main: 'Baked cod with roasted asparagus',
            side: 'Quinoa',
            nutritionalValues: {
              calories: 400,
              carbohydrates: 30,
              proteins: 35,
              fats: 15,
            },
          },
        ],
      },
      thu: {
        meals: [
          {
            meal: 'breakfast',
            hour: '07:30 AM',
            main: 'Greek yogurt with mixed berries and granola',
            nutritionalValues: {
              calories: 300,
              carbohydrates: 40,
              proteins: 15,
              fats: 10,
            },
          },
          {
            meal: 'mid-morning snack',
            hour: '10:30 AM',
            main: 'Hard-boiled egg and cherry tomatoes',
            nutritionalValues: {
              calories: 100,
              carbohydrates: 5,
              proteins: 6,
              fats: 5,
            },
          },
          {
            meal: 'lunch',
            hour: '12:30 PM',
            main: 'Turkey and cheese sandwich on whole grain bread',
            side: 'Carrot sticks',
            nutritionalValues: {
              calories: 500,
              carbohydrates: 40,
              proteins: 30,
              fats: 25,
            },
          },
          {
            meal: 'mid-afternoon snack',
            hour: '03:30 PM',
            main: 'Apple slices with peanut butter',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 20,
              proteins: 4,
              fats: 8,
            },
          },
          {
            meal: 'dinner',
            hour: '07:00 PM',
            main: 'Grilled shrimp with roasted bell peppers',
            side: 'Quinoa',
            nutritionalValues: {
              calories: 400,
              carbohydrates: 30,
              proteins: 30,
              fats: 20,
            },
          },
        ],
      },
      fri: {
        meals: [
          {
            meal: 'breakfast',
            hour: '07:30 AM',
            main: 'Omelette with vegetables',
            nutritionalValues: {
              calories: 250,
              carbohydrates: 10,
              proteins: 20,
              fats: 15,
            },
          },
          {
            meal: 'mid-morning snack',
            hour: '10:30 AM',
            main: 'Greek yogurt with mixed berries',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 20,
              proteins: 15,
              fats: 0,
            },
          },
          {
            meal: 'lunch',
            hour: '12:30 PM',
            main: 'Grilled chicken breast with mixed greens salad',
            side: 'Whole grain crackers',
            nutritionalValues: {
              calories: 400,
              carbohydrates: 20,
              proteins: 40,
              fats: 15,
            },
          },
          {
            meal: 'mid-afternoon snack',
            hour: '03:30 PM',
            main: 'Rice cakes with almond butter and banana slices',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 25,
              proteins: 4,
              fats: 8,
            },
          },
          {
            meal: 'dinner',
            hour: '07:00 PM',
            main: 'Baked chicken breast with roasted broccoli',
            side: 'Quinoa',
            nutritionalValues: {
              calories: 400,
              carbohydrates: 30,
              proteins: 40,
              fats: 15,
            },
          },
        ],
      },
      sat: {
        meals: [
          {
            meal: 'breakfast',
            hour: '08:00 AM',
            main: 'Avocado toast with scrambled eggs',
            nutritionalValues: {
              calories: 350,
              carbohydrates: 30,
              proteins: 20,
              fats: 20,
            },
          },
          {
            meal: 'mid-morning snack',
            hour: '11:00 AM',
            main: 'Greek yogurt with mixed berries',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 20,
              proteins: 15,
              fats: 0,
            },
          },
          {
            meal: 'lunch',
            hour: '01:00 PM',
            main: 'Grilled chicken breast with mixed greens salad',
            side: 'Whole grain crackers',
            nutritionalValues: {
              calories: 400,
              carbohydrates: 20,
              proteins: 40,
              fats: 15,
            },
          },
          {
            meal: 'mid-afternoon snack',
            hour: '04:00 PM',
            main: 'Apple slices with peanut butter',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 20,
              proteins: 4,
              fats: 8,
            },
          },
          {
            meal: 'dinner',
            hour: '07:30 PM',
            main: 'Baked salmon with roasted asparagus',
            side: 'Quinoa',
            nutritionalValues: {
              calories: 400,
              carbohydrates: 30,
              proteins: 35,
              fats: 15,
            },
          },
        ],
      },
      sun: {
        meals: [
          {
            meal: 'breakfast',
            hour: '08:00 AM',
            main: 'Omelette with vegetables',
            nutritionalValues: {
              calories: 250,
              carbohydrates: 10,
              proteins: 20,
              fats: 15,
            },
          },
          {
            meal: 'mid-morning snack',
            hour: '11:00 AM',
            main: 'Cottage cheese with cucumber slices',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 5,
              proteins: 20,
              fats: 0,
            },
          },
          {
            meal: 'lunch',
            hour: '01:00 PM',
            main: 'Turkey and avocado wrap',
            side: 'Mixed greens salad',
            nutritionalValues: {
              calories: 500,
              carbohydrates: 40,
              proteins: 30,
              fats: 25,
            },
          },
          {
            meal: 'mid-afternoon snack',
            hour: '04:00 PM',
            main: 'Rice cakes with almond butter and banana slices',
            nutritionalValues: {
              calories: 150,
              carbohydrates: 25,
              proteins: 4,
              fats: 8,
            },
          },
          {
            meal: 'dinner',
            hour: '07:30 PM',
            main: 'Grilled chicken breast with roasted bell peppers',
            side: 'Quinoa',
            nutritionalValues: {
              calories: 400,
              carbohydrates: 30,
              proteins: 40,
              fats: 15,
            },
          },
        ],
      },
    },
  };
}
