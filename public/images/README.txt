Real photos live here. To swap a placeholder: drop the file in this folder,
then open src/lib/site.js and change the matching src from the
picsum.photos placeholder to "/images/your-file.jpg".

BEFORE / AFTER PAIRS:
  Files live in /public/images/ba/ as ba-NN-before.jpg and ba-NN-after.jpg.
  Crop both shots SQUARE at 640x640, JPEG quality ~74, before adding them.
  Then add the pair number to the matching service in BEFORE_AFTER in
  src/lib/site.js, and write its one-line label in PAIR_LABELS.
  A pair can be listed under more than one service (pair 6 is on both
  lawn-maintenance and bush-trimming).
  Currently: lawn-maintenance has 7 pairs, bush-trimming has 4.

ALREADY REAL:
  /images/owner.jpg       -> PHOTOS.owner      (Keonte, used on Home + About)
  /images/owner-wide.jpg  -> PHOTOS.ownerWide
  /logo-mark.png          -> nav + footer wordmark
  /og.jpg                 -> social share card
  src/app/icon.png        -> browser tab + Google search icon
  src/app/apple-icon.png  -> iOS home screen icon

STILL PLACEHOLDER, in order of impact:
  1. Wide shot of a freshly cut and striped front lawn  -> PHOTOS.hero
  2. One clean action shot per service (7 total)        -> SERVICES[].photo
  3. 5 strong finished-property shots                   -> PEEK
  4. 12 candid on-the-job shots                         -> ONJOB
  5. 15 completed jobs for the gallery                  -> GALLERY
  6. Truck/trailer and crew shots                       -> PHOTOS.aboutTruck, PHOTOS.aboutCrew

Before adding a photo, resize it to roughly 1600px on the long edge and save
as JPEG at ~78 quality. Anything straight off a phone is 4-6MB and will slow
the page down badly.

Shoot notes: bright overcast or late afternoon light, shoot from the street at
chest height, avoid house numbers in frame, landscape orientation for
everything except portraits.
