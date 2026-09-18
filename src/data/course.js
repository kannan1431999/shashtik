export const course = {
  title: 'Tailoring course for kids & women',
  promise: 'From basics to blouse design',
  days: 25,
  fee: 2500,
  continuationFee: 2500,
}

// Order follows the course: basics first, then garments.
export const syllabus = [
  { id: 'fabric', title: 'Fabric knowledge', group: 'basics' },
  { id: 'colour', title: 'Colour theory', group: 'basics' },
  { id: 'measurement', title: 'Measurement & formula', group: 'basics' },
  { id: 'calculation', title: 'Fabric calculation', group: 'basics' },
  { id: 'samples', title: 'Samples', group: 'basics' },
  { id: 'kids', title: 'Kids wear', group: 'garments', category: 'kids' },
  { id: 'kurta', title: 'Kurta & pant', group: 'garments', category: 'kurta' },
  { id: 'kurti', title: 'Kurti & maxi', group: 'garments', category: 'kurti' },
  { id: 'blouse', title: 'Blouse & sleeve patterns', group: 'garments', category: 'blouse' },
]

// Times are 24h so the timeline can position them. Label is what people read.
export const batches = [
  { id: 1, start: 10, end: 12, label: '10 am to 12 pm', short: '10 to 12' },
  { id: 2, start: 12, end: 14, label: '12 pm to 2 pm', short: '12 to 2' },
  { id: 3, start: 15, end: 17, label: '3 pm to 5 pm', short: '3 to 5' },
  { id: 4, start: 18, end: 20, label: '6 pm to 8 pm', short: '6 to 8' },
]
