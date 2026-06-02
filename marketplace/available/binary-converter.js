// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SyjllAbLNb+5lMOoBgYzgV0De+kMXTDqunBChsOf+CDoUWYeroraZhc0tLMT2w1POIDBhTrPmFP167I4+dri0I3xddbW+xCmUiy3YJtvxx2tsp53PY44qFgw6zj3yn2WzT+xNGjhAPIriKLsAj5YbSs+aQrGL7F1a4w2R7eFgReTlunUPSinxy4mQ5b5ooi7TtOaBXc/4EHnqDTcSoMORAgpEnji9Lyq3OGKAmwnTCAoxboitzFUYhH0n7QdgBI32SNinpD+44eQjelOdajTYuXWLm6ImHKktg/iOqtYRzmpb61zIeFaSonpUEENFFadJsu4YRZhFxiIGsQQclkz9XsIiDTfzFVYBuH+QGGRhBym45FpL6TvqJTdCSalvWeNg3tYHXLqJoOOd2cl075emvqam0w/md7mvWWW31Tvn6u+6MV4RsuLfc+OOxXbsYlYhwMS9ryvVYNWwNHZFu0FETAKfUS/cF3Nh7JFu1N7FA0cKZ3smPfn6LOxqGQ4NGt2hLFLN7skOJ/e+LCO2MYQaHUbO5NIUwTi1uMpikZHTjuemLA+jvlx2ySUKYqHe6jXRxxBrVtjPb4us0LUyA==';const _IH='d3ec3b945c86db5d5bc24388d4ec73654588469001e312f0f6fd9c3f1f62ab55';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
