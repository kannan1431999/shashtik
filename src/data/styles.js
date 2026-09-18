const images = import.meta.glob('../assets/styles/*.webp', { eager: true, import: 'default' })
const img = (slug) => images[`../assets/styles/${slug}.webp`]

export const categories = [
  { id: 'kids', label: 'Kids wear' },
  { id: 'kurta', label: 'Kurta & pant' },
  { id: 'kurti', label: 'Kurti & maxi' },
  { id: 'blouse', label: 'Blouse' },
  { id: 'sleeve', label: 'Sleeve patterns' },
]

const raw = [
  ['a-line-frock-1', 'A-line frock', 'kids'],
  ['a-line-frock-2', 'A-line frock', 'kids'],
  ['pleated-frock', 'Pleated frock', 'kids'],
  ['box-pleated-frock', 'Box pleated frock', 'kids'],
  ['gathering-frock-1', 'Gathering frock', 'kids'],
  ['gathering-frock-2', 'Gathering frock', 'kids'],
  ['circular-frock-1', 'Circular frock', 'kids'],
  ['circular-frock-2', 'Circular frock', 'kids'],
  ['layer-frock', 'Layer frock', 'kids'],
  ['three-tier-frock', '3 tier frock', 'kids'],
  ['pattu-pavadai-1', 'Pattu pavadai', 'kids'],
  ['pattu-pavadai-2', 'Pattu pavadai', 'kids'],
  ['pattu-pavadai-type-1', 'Pattu pavadai, type 1', 'kids'],
  ['pattu-pavadai-type-2', 'Pattu pavadai, type 2', 'kids'],

  ['short-kurti-kurta', 'Short kurti & kurta', 'kurta'],
  ['boat-neck-kurta', 'Boat neck kurta', 'kurta'],
  ['panel-kurta', 'Panel kurta', 'kurta'],
  ['angrakha-kurta', 'Angrakha kurta', 'kurta'],
  ['semi-collar-kurta', 'Semi collar kurta', 'kurta'],
  ['v-collar-kurta', 'V-collar kurta', 'kurta'],
  ['salwar', 'Salwar', 'kurta'],
  ['straight-pant', 'Straight pant', 'kurta'],
  ['palazzo-pants', 'Palazzo pants', 'kurta'],

  ['a-line-kameez', 'A-line kameez', 'kurti'],
  ['peplum-kurti', 'Peplum kurti', 'kurti'],
  ['alia-cut-kurti', 'Alia cut kurti', 'kurti'],
  ['saree-to-pleated-frock', 'Saree converted to pleated frock with princess cut', 'kurti'],
  ['circular-maxi', 'Circular maxi', 'kurti'],

  ['without-lining-blouse', 'Without lining blouse', 'blouse'],
  ['with-lining-blouse', 'With lining blouse', 'blouse'],
  ['piping-blouse', 'Piping blouse', 'blouse'],
  ['princess-cut-blouse', 'Princess cut blouse', 'blouse'],
  ['boat-neck-back-hook-blouse', 'Boat neck blouse with back hook', 'blouse'],
  ['potli-balls-blouse', 'Potli balls blouse', 'blouse'],
  ['patch-work-blouse', 'Patch work blouse', 'blouse'],
  ['back-boat-front-deep-neck-blouse', 'Back boat neck, front deep neck blouse', 'blouse'],
  ['pattern-blouse', 'Pattern blouse', 'blouse'],
  ['netted-blouse', 'Netted blouse', 'blouse'],
  ['semi-collar-blouse', 'Semi collar blouse', 'blouse'],

  ['sleeve-1', 'Contrast cuff with potli buttons', 'sleeve'],
  ['sleeve-2', 'Pin-tuck contrast cuff', 'sleeve'],
  ['sleeve-3', 'Puff sleeve with zari border', 'sleeve'],
  ['sleeve-4', 'Button placket sleeve', 'sleeve'],
  ['sleeve-5', 'Short puff sleeve', 'sleeve'],
  ['sleeve-6', 'Gathered puff with brocade band', 'sleeve'],
  ['sleeve-7', 'Fan pleat sleeve', 'sleeve'],
  ['sleeve-8', 'Contrast fan pleat sleeve', 'sleeve'],
]

export const styles = raw.map(([slug, name, category]) => ({
  slug,
  name,
  category,
  src: img(slug),
}))

export const styleBySlug = Object.fromEntries(styles.map((s) => [s.slug, s]))
