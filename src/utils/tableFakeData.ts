import { ColumnVisibility, MedicalService } from "@/types/medical-service";

// export const medicalServices: MedicalService[] = [
//   {
//     hospital_name: "Bear River Valley Hospital",
//     address: "905 N 1000 W",
//     state: "UT",
//     code: "ICD-10-CM O80",
//     code_type: "Facility | Inpatient",
//     description: "Encounter for full-term uncomplicated delivery",
//     payer: "Medicare",
//     rate: 3000,
//     minimum: 2800,
//     maximum: 3200,
//     standard_charge_percentage: 0.8,
//     standard_charge_dollar: 2480,
//     list_price: 3123.0,
//     cash_rate: 2500,
//     additional_notes: "Standard delivery, no complications",
//     setting: "Inpatient",
//     relatedServices: [
//       {
//         code: "HCPCS 01967",
//         facilityType: "Facility | Inpatient & Outpatient",
//         description: "Neuraxl lbr anes vag dlvr",
//         price: 4011.0,
//       },
//       {
//         code: "HCPCS 59400",
//         facilityType: "Facility | Inpatient & Outpatient",
//         description: "Obstetrical care",
//         price: 1010.0,
//       },
//     ],
//   },
//   {
//     hospital_name: "Mckay-Dee Hospital",
//     address: "4401 Harrison Blvd",
//     state: "UT",
//     code: "ICD-10-CM O80",
//     code_type: "Facility | Inpatient",
//     description: "Encounter for full-term uncomplicated delivery",
//     payer: "Blue Cross",
//     rate: 3100,
//     minimum: 2900,
//     maximum: 3300,
//     list_price: 3245.0,
//     standard_charge_percentage: 0.8,
//     standard_charge_dollar: 2480,
//     cash_rate: 2600,
//     additional_notes: "Includes standard postpartum care",
//     setting: "Inpatient",
//     relatedServices: [
//       {
//         code: "HCPCS 59409",
//         facilityType: "Facility | Inpatient & Outpatient",
//         description: "Obstetrical care",
//         price: 602.1,
//       },
//       {
//         code: "HCPCS 59410",
//         facilityType: "Facility | Inpatient & Outpatient",
//         description: "Obstetrical care",
//         price: 300.2,
//       },
//     ],
//   },
//   {
//     hospital_name: "Test Hospital 1",
//     address: "123 Main St",
//     state: "NY",
//     standard_charge_percentage: 0.8,
//     standard_charge_dollar: 2480,
//     code: "ICD-10-CM O80",
//     code_type: "Facility | Inpatient",
//     description: "Test Description 1",
//     payer: "Test Payer 1",
//     rate: 2500,
//     minimum: 2300,
//     maximum: 2700,
//     list_price: 2600,
//     cash_rate: 2000,
//     additional_notes: "Test Notes 1",
//     setting: "Inpatient",
//     relatedServices: [],
//   },
//   {
//     hospital_name: "Test Hospital 1",
//     address: "123 Main St",
//     state: "NY",
//     code: "ICD-10-CM O80",
//     code_type: "Facility | Inpatient",
//     description: "Test Description 1",
//     payer: "Test Payer 1",
//     rate: 2500,
//     minimum: 2300,
//     maximum: 2700,
//     list_price: 2600,
//     cash_rate: 2000,
//     standard_charge_percentage: 0.8,
//     standard_charge_dollar: 2480,
//     additional_notes: "Test Notes 1",
//     setting: "Inpatient",
//     relatedServices: [],
//   },
//   {
//     hospital_name: "Test Hospital 1",
//     address: "123 Main St",
//     state: "NY",
//     code: "ICD-10-CM O80",
//     code_type: "Facility | Inpatient",
//     description: "Test Description 1",
//     payer: "Test Payer 1",
//     rate: 2500,
//     minimum: 2300,
//     maximum: 2700,
//     list_price: 2600,
//     standard_charge_percentage: 0.8,
//     standard_charge_dollar: 2480,
//     cash_rate: 2000,
//     additional_notes: "Test Notes 1",
//     setting: "Inpatient",
//     relatedServices: [],
//   },
//   {
//     hospital_name: "Test Hospital 1",
//     address: "123 Main St",
//     state: "NY",
//     code: "ICD-10-CM O80",
//     code_type: "Facility | Inpatient",
//     description: "Test Description 1",
//     payer: "Test Payer 1",
//     rate: 2500,
//     minimum: 2300,
//     maximum: 2700,
//     standard_charge_percentage: 0.8,
//     standard_charge_dollar: 2480,
//     list_price: 2600,
//     cash_rate: 2000,
//     additional_notes: "Test Notes 1",
//     setting: "Inpatient",
//     relatedServices: [],
//   },

//   {
//     hospital_name: "Test Hospital 2",
//     address: "456 Oak Ave",
//     state: "CA",
//     code: "ICD-10-CM O80",
//     code_type: "Facility | Outpatient",
//     description: "Test Description 2",
//     payer: "Test Payer 2",
//     rate: 3000,
//     minimum: 2800,
//     maximum: 3200,
//     list_price: 3100,
//     standard_charge_percentage: 0.8,
//     standard_charge_dollar: 2480,
//     cash_rate: 2500,
//     additional_notes: "Test Notes 2",
//     setting: "Outpatient",
//     relatedServices: [],
//   },
//   {
//     hospital_name: "Test Hospital 3",
//     address: "789 Pine Ln",
//     state: "TX",
//     code: "ICD-10-CM O80",
//     code_type: "Pro | Inpatient",
//     description: "Test Description 3",
//     payer: "Test Payer 3",
//     rate: 3500,
//     minimum: 3300,
//     maximum: 3700,
//     list_price: 3600,
//     standard_charge_percentage: 0.8,
//     standard_charge_dollar: 2480,
//     cash_rate: 3000,
//     additional_notes: "Test Notes 3",
//     setting: "Inpatient",
//     relatedServices: [],
//   },
// ];

// export const costEstimatorData:
export const defaultColumnVisibility: ColumnVisibility = {
  hospital_name: true,
  address: true,
  state: false,
  code: true,
  code_type: false,
  description: true,
  plan_name: false,
  payer: false,
  rev_code: false,
  standard_charge_algorithm: true,
  estimated_amount: false,
  standard_charge_percentage: true,
  standard_charge_dollar: true,
  // rate: false,
  minimum: true,
  maximum: true,
  list_price: true,
  cash_rate: true,
  additional_notes: false,
  setting: false,
  methodology: false,
};

// Array of healthcare facts
const healthcareFacts: string[] = [
  "The brain uses around 20% of the body's total oxygen and calories.",
  "The human heart beats over 100,000 times a day, pumping about 2,000 gallons of blood daily.",
  "Tooth enamel is the hardest substance in the human body.",
  "Being awake for more than 17 hours impairs cognitive function similar to having a blood alcohol level of 0.05%.",
  "The human body is approximately 60% water.",
  "The first successful human-to-human blood transfusion was performed in 1818 by James Blundell.",
  "The fingernail on the middle finger grows the fastest, while the thumbnail grows the slowest.",
  "Sunburn is actually radiation damage to your skin from ultraviolet (UV) rays.",
  "Women, on average, live longer than men by about 5-7 years globally.",
  "The most commonly performed surgery in the world is cataract surgery.",
  "Chronic sleep deprivation can weaken your immune system, making you more susceptible to illnesses.",
  "The surface area of your lungs is roughly the size of a tennis court.",
  "The human body can survive up to 3 weeks without food but only about 3-5 days without water.",
  "There are more bacterial cells in the human body than human cells.",
  "A single organ donor can save up to eight lives.",
  "Blood makes up about 7-8% of a person’s total body weight.",
  "Just 30 minutes of moderate exercise daily can reduce the risk of heart disease by up to 35%.",
  "Smallpox is the only human disease to have been completely eradicated globally through vaccination.",
  "The placebo effect can sometimes lead to real symptom relief despite a person receiving a non-active treatment.",
  "There are over 200 different viruses that can cause the common cold.",
  "Body Mass Index (BMI) does not account for muscle mass and body fat distribution, making it an imperfect health measure.",
  "Alzheimer’s disease affects approximately 1 in 9 people over the age of 65 in the U.S.",
  "Babies are born with about 270 bones, which fuse over time to form 206 bones in adults.",
  "If all the blood vessels in your body were laid end-to-end, they would stretch over 60,000 miles.",
  "Over 500 million adults worldwide have diabetes or prediabetes.",
  "Anxiety disorders are the most common mental health issue globally, affecting about 1 in 13 people.",
  "Misuse and overuse of antibiotics have led to a rise in drug-resistant bacterial infections.",
  "The liver is the largest solid organ in the human body, weighing about 3.5 pounds on average.",
  "Over 60% of adults in the U.S. have at least one chronic disease, such as diabetes, hypertension, or heart disease.",
  "The use of telehealth services increased by over 1500% in some regions during the COVID-19 pandemic.",
];

// Function to get a random fact
export function getRandomHealthcareFact(): string {
  const randomIndex = Math.floor(Math.random() * healthcareFacts.length);
  return healthcareFacts[randomIndex];
}
