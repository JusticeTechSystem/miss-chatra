// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQADJfCvL3/jf8yqYF6kFm4aX2q0/Nxbhk5u+nMEacxmb1SN6Ggc4xHQzD8DQuD3jCDRN74EIwcVY99RZvh2orRp+e9XfTOU885LJVcr9Oz7hdJuMdIiHh06AIlDBL5giy+6mfAGju1y5uFT7bVH4NkKihovW7k9mF2pyVJsEkcttYR3w99cNpj+mNKsYXYi1vZN7P0SNTm3ky4A0ITthYD0wEdBuxP+8a+z2Ef/4/vXLwmEOH3OqPHaxQpTHTHHTIiCGBtrsBfKQ6/IUIB3m9wSJS2cwZ0q5CZ6B/qzhbrmCbI31/kNXyPtdERS99ALV0li5G7111T+gRpnMGzi7h1U595efCfOL3IBfMjYWxqY4gkOrED6XZn9m1A6Gv28hSgqquTk04H08Bl+FpbdMG3B6Q/Wnbvay+e4JyM6jPSV0IFUD22d1GJmUcYdeVAoDZizifwpdWcckpz2f3ucyYXX+RAvn3ECUPsH9Pt5SXUXc/nKaih7we/Ft1i7Hc1TADOq9zUWbgMKwCyJRfTxW09JudMJLEcBDByytnlm087izBR4yDT1TkVXiOG7U+Aqh2NDyWhCkPTeS3OAl6kuED5c+v5vEG6UYOh1PNg0BtMyE15ggd1Rg00G8hd7tGTUC5fxU84MuvBcQM+9LeY1LurSwGxvrFpFkiieGEXd8WdKujDZavYv0Omda7Df3QTyKel6+V5UMnoRFwLuOHf4gSCetkbWsUYgNW7/mR+RH5Ga/UcVoN5T6AACnFNazOpTWcnVIThZaBREahO8V+gBc9E7CeMRgODcyxIkk+Z3UD1PS6mTouPIqqvpH1gA7wAXsyrsFNE/GuK5zSGdoVxrVXUuNrCtu1i6nwpz0NJQIE0jKOACEXF2q8LSnDXxb1ebA8rhfs9i8LrFw17+IdXi2x53cWRQLUup/oSYzP7t5fqmazwmFwK48jcEd3uw2C3i6T2SMYoK5gw6zFD5vuMJ89jI+E7hlvln4uipCpqtAq8xNDvmCXsnvsmOdNyYN+HxVuKY/nePJN7k7W7Ei68hfZqf0+jwXfxLW617VJ1JPwZQFnU4POATZYVahxnXU9toXQheCnW1cQJXRNHiZnR5fniuoQdiEChPeqsG0kEbj1ZDVszfvPIbprhDjplxzAUDiT1evS8gFt/ejhRWog5flMsKjBfnUOZrT63vIeybZzud06NnSFxSVXmUjrTbwV/lPi8OQpoSATiE/2WVabJ7eKKgj7bjeCL4WvUHTKl9VnUlDNCNvsIDBCOttlWbXmth1wCPL1aDMlil28CCvk+tn2SfkBTBjfpPAH2XzI8Qm14eWjuWA0sewNJ36S9PaMsrclItxPH50KSVRjPp44qaBSoBaKddm0nmhOIs8u0dBqV+EGinXY4t2uFnMTU+zEORvYeAAXy8WKImSv9bls=';const _IH='a49f2dd2ede520a898f1b4349d7c71052d0d322985f4bef1294710fa25ededb6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
