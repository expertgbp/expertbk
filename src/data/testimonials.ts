/**
 * Real, permissioned video testimonials from Global Book Publishing's own
 * YouTube channel (globalbookpublishing.com/home/), confirmed via YouTube's
 * public oEmbed API — title/author_name both verified before use here.
 * `bookTitle` is populated only where the published video title itself
 * names one; never invented for the ones that don't.
 *
 * This is the site's real proof bank, replacing the placeholder
 * TestimonialCard slots in the homepage Results section (see BRAND.md /
 * CLAUDE.md hard rule: real permissioned testimonials replace placeholders
 * the moment they exist).
 */
export type VideoTestimonial = {
  youtubeId: string;
  name: string;
  bookTitle?: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  { youtubeId: "bWiP6zlPIxM", name: "Dana Monette" },
  { youtubeId: "F6fEzTgmRJU", name: "Annette Dhanasar", bookTitle: "Upward Ever" },
  { youtubeId: "wp_pjolLuOo", name: "Gavin Black", bookTitle: "Crop Burner" },
  { youtubeId: "RHHcipe2iSg", name: "Jay Wijesundara" },
  { youtubeId: "D6JEHpLIBhM", name: "Marilynn Khasnabishh" },
  { youtubeId: "UTyHmnS1RV0", name: "Penny Belfetto", bookTitle: "Pauly Panda & Jesus Kinda Day" },
  { youtubeId: "cMo5qO3HqmA", name: "Elizabeth R. Wangmo" },
  { youtubeId: "W77YJqQggSI", name: "Ted Hill" },
  { youtubeId: "sDfe7jqrASU", name: "Kalpana Vaze" },
];
