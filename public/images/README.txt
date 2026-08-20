Every image on this site is a real photo of real work. There are no stock
photos and no AI-generated images anywhere, by design.

WHERE THINGS LIVE
  /public/images/ba/            before/after tiles, 640x640 square
  /public/images/cover-*.jpg    service cover, 16:10 for the card
  /public/images/cover-*-tall   same shot at 4:5 for the service page
  /public/images/gal-NN.jpg     gallery grid, 4:3
  /public/images/job-NN.jpg     on-the-job strip, square
  /public/images/peek-N.jpg     homepage sneak peek strip, 4:3
  /public/images/hero.jpg       homepage hero, 16:9
  /public/images/owner.jpg      Keonte, 4:5
  /public/images/about-*.jpg    about page pair, 16:10
  /public/images/area.jpg       city pages, 4:3

SERVICES WITH NO PHOTOS YET
  Mulching, sod installation, leaf removal, snow removal, tree trimming.
  Their photo is null in src/lib/site.js, which renders a Coming Soon
  panel on the service card and the service page, and swaps the
  before/after section for a Coming Soon band. To turn one on, add the
  two cover crops and set photo + photoTall.

ADDING A BEFORE/AFTER PAIR
  Crop both shots SQUARE at 640x640, quality ~74, save as
  ba-NN-before.jpg and ba-NN-after.jpg. Add the pair number to the right
  service in BEFORE_AFTER and write its label in PAIR_LABELS.
  Currently: lawn-maintenance has 11 pairs, bush-trimming has 7.

SIZING RULE
  Resize to the slot aspect ratio first, then export JPEG at quality
  ~76. A photo straight off a phone is 4-6MB and will slow the page.
