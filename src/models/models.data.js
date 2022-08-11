const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  iso_code: {
    type: String,
  },
  continent: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  total_cases: {
    type: Number,
    required: true,
  },
  new_cases: {
    type: Number,
    required: true,
  },
  new_cases_smoothed: {
    type: Number,
    required: true,
  },
  total_deaths: {
    type: Number,
    required: true,
  },
  new_deaths: {
    type: Number,
    required: true,
  },
  new_deaths_smoothed: {
    type: Number,
    required: true,
  },
  total_cases_per_million: {
    type: Number,
    required: true,
  },
  new_cases_per_million: {
    type: Number,
    required: true,
  },
  new_cases_smoothed_per_million: {
    type: Number,
    required: true,
  },
  total_deaths_per_million: {
    type: Number,
    required: true,
  },
  new_deaths_per_million: {
    type: Number,
    required: true,
  },
  new_deaths_smoothed_per_million: {
    type: Number,
    required: true,
  },
  reproduction_rate: {
    type: Number,
    required: true,
  },
  icu_patients: {
    type: Number,
    required: true,
  },
  icu_patients_per_million: {
    type: Number,
    required: true,
  },
  hosp_patients: {
    type: Number,
    required: true,
  },
  hosp_patients_per_million: {
    type: Number,
    required: true,
  },
  weekly_icu_admissions: {
    type: Number,
    required: true,
  },
  weekly_icu_admissions_per_million: {
    type: Number,
    required: true,
  },
  weekly_hosp_admissions: {
    type: Number,
    required: true,
  },
  weekly_hosp_admissions_per_million: {
    type: Number,
    required: true,
  },
  total_tests: {
    type: Number,
    required: true,
  },
  new_tests: {
    type: Number,
    required: true,
  },
  total_tests_per_thousand: {
    type: Number,
    required: true,
  },
  new_tests_per_thousand: {
    type: Number,
    required: true,
  },
  new_tests_smoothed: {
    type: Number,
    required: true,
  },
  new_tests_smoothed_per_thousand: {
    type: Number,
    required: true,
  },
  positive_rate: {
    type: Number,
    required: true,
  },
  tests_per_case: {
    type: Number,
    required: true,
  },
  tests_units: {
    type: String,
    required: true,
  },
  total_vaccinations: {
    type: Number,
    required: true,
  },
  people_vaccinated: {
    type: Number,
    required: true,
  },
  people_fully_vaccinated: {
    type: Number,
    required: true,
  },
  total_boosters: {
    type: Number,
    required: true,
  },
  new_vaccinations: {
    type: Number,
    required: true,
  },
  new_vaccinations_smoothed: {
    type: Number,
    required: true,
  },
  total_vaccinations_per_hundred: {
    type: Number,
    required: true,
  },
  people_vaccinated_per_hundred: {
    type: Number,
    required: true,
  },
  people_fully_vaccinated_per_hundred: {
    type: Number,
    required: true,
  },
  total_boosters_per_hundred: {
    type: Number,
    required: true,
  },
  new_vaccinations_smoothed_per_million: {
    type: Number,
    required: true,
  },
  new_people_vaccinated_smoothed: {
    type: Number,
    required: true,
  },
  new_people_vaccinated_smoothed_per_hundred: {
    type: Number,
    required: true,
  },
  stringency_index: {
    type: Number,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  population_density: {
    type: Number,
    required: true,
  },
  median_age: {
    type: Number,
    required: true,
  },
  aged_65_older: {
    type: Number,
    required: true,
  },
  aged_70_older: {
    type: Number,
    required: true,
  },
  gdp_per_capita: {
    type: Number,
    required: true,
  },
  extreme_poverty: {
    type: Number,
    required: true,
  },
  cardiovasc_death_rate: {
    type: Number,
    required: true,
  },
  diabetes_prevalence: {
    type: Number,
    required: true,
  },
  female_smokers: {
    type: Number,
    required: true,
  },
  male_smokers: {
    type: Number,
    required: true,
  },
  handwashing_facilities: {
    type: Number,
    required: true,
  },
  hospital_beds_per_thousand: {
    type: Number,
    required: true,
  },
  life_expectancy: {
    type: Number,
    required: true,
  },
  human_development_index: {
    type: Number,
    required: true,
  },
  excess_mortality_cumulative_absolute: {
    type: Number,
    required: true,
  },
  excess_mortality_cumulative: {
    type: Number,
    required: true,
  },
  excess_mortality: {
    type: Number,
    required: true,
  },
  excess_mortality_cumulative_per_million: {
    type: Number,
    required: true,
  },
});

const DataCovid = mongoose.model("Covid", dataSchema, "covid");

module.exports = DataCovid;
