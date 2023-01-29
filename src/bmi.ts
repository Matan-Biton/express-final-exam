/**
 * BMI Calculator
 */

export const BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
}

export const WeightUnits = {
    KG: 0,     // kilograms
    G: 1,      // grams
    Pound: 2,  // lbs
}

export const HeightUnits = {
    CM: 0,     // centimeter
    M: 1,      // meter
    In: 2,     // inch
    Ft: 3,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: number;
    height: number;
    heightUnit: number;
}

export interface BmiOutput {
    bmi: number;
    status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
    let weightInKg: number;
    switch (input.weightUnit) {
        case 0:
            weightInKg = input.weight
            break;
        case 1:
            weightInKg = input.weight * 0.001
            break;
        case 2:
            weightInKg = input.weight * 0.45359237
            break;
    
        default:
            throw new Error("unknown weight unit");
            ;
    }

    let heightInMeters: number;
    switch (input.heightUnit) {
        case 0:
            heightInMeters = input.height / 100
            break;
        case 1:
            heightInMeters = input.height
            break;
        case 2:
            heightInMeters = input.height * 2.54 / 100
            break;
        case 3:
            heightInMeters = input.height * 30.48 / 100
            break;
    
        default:
            throw new Error("unknown height unit");
            ;
    }

    const bmi = Math.round(weightInKg/heightInMeters**2)

    const status = bmi < 18.5 ? 0 : bmi < 25 ? 1 : bmi < 30 ? 2 : 3
    
    return {status, bmi};
}