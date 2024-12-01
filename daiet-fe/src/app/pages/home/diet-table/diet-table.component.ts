import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-diet-table',
  standalone: true,
  imports: [TabMenuModule, TableModule, TabViewModule, TooltipModule],
  templateUrl: './diet-table.component.html',
  styleUrls: ['./diet-table.component.scss'],
})
export class DietTableComponent {
  @Input() nutritionData: any;

  patientProfile: any;
  mealPlan: any;
  dailyCaloricNeeds: number = 0;
  caloricIntakePlan: number = 0;
  macronutrientBalance: any;

  days = [
    { key: 'mon', name: 'Monday' },
    { key: 'tue', name: 'Tuesday' },
    { key: 'wed', name: 'Wednesday' },
    { key: 'thu', name: 'Thursday' },
    { key: 'fri', name: 'Friday' },
    { key: 'sat', name: 'Saturday' },
    { key: 'sun', name: 'Sunday' },
  ];

  selectedDay: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.nutritionData.mealPlan);

    if (this.nutritionData) {
      this.patientProfile = this.nutritionData.patientProfile;
      this.mealPlan = this.nutritionData.mealPlan;
      this.dailyCaloricNeeds = this.nutritionData.dailyCaloricNeeds;
      this.caloricIntakePlan = this.nutritionData.caloricIntakePlan;
      this.macronutrientBalance = this.nutritionData.macronutrientBalance;
    }
  }

  calculateDailyTotals(meals: any[]) {
    return meals.reduce(
      (total, meal) => {
        return {
          calories: (total.calories || 0) + meal.nutritionalValues.calories,
          carbohydrates:
            (total.carbohydrates || 0) + meal.nutritionalValues.carbohydrates,
          proteins: (total.proteins || 0) + meal.nutritionalValues.proteins,
          fats: (total.fats || 0) + meal.nutritionalValues.fats,
        };
      },
      { calories: 0, carbohydrates: 0, proteins: 0, fats: 0 }
    );
  }
}
