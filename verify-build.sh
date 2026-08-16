#!/usr/bin/env bash
# Local build check. The sandbox cannot reach fonts.googleapis.com, so next/font
# is stubbed out for the duration of the build and restored afterward.
# Vercel reaches Google Fonts normally, so this is a sandbox-only workaround.
set -e
cp src/app/layout.js /tmp/layout.real.js
python3 - <<'PY'
import re
p='src/app/layout.js'; s=open(p).read()
s=s.replace('import { Archivo, Instrument_Sans } from "next/font/google";\n','')
s=re.sub(r'const display = Archivo\(\{.*?\}\);\n\n','const display = { variable: "f-d" };\n\n',s,flags=re.S)
s=re.sub(r'const body = Instrument_Sans\(\{.*?\}\);\n\n','const body = { variable: "f-b" };\n\n',s,flags=re.S)
open(p,'w').write(s)
PY
npm run build || true
cp /tmp/layout.real.js src/app/layout.js
