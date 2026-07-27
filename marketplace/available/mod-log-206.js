// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWG+2iALs4uA6UtVCu8g6aiAsunTd8v8DMwizASyuaPPJ7DcHV62fhI5hiCunDRSLav7v1Aw0FucI70aPjXmY9HTJvWUeKIWjdx9WlEOxixniLKAyoZHuMkcHsJ2Sr+SGtKxwgsbGH1+LGj3L1mP1jNsGGKPzHJHaqZ44lOB4hTQtYNXwOVavXpyQPenQrO4zbG9AYZnluUxW2d8urtWPXPj7NgWdfrosLNUzJPe3eAh4cOGwNW0UHEJdJjy78mrzMNWYhSOp294yP5xCTUdTGcjs430MsKslefAf7GN75qZ5SU+0fU1AlrYk7ZwB1QztRJChW+v4+m8RU+RvxgkXQHh9Lhv/JsYm2fOBzYAydM9ZMCqsVjRTn2oKeGpAB4fb+bAXrkoyitMLr1ybTlCqR9qZq0Pm8bMp8XgvZcUXW+uKSDSMcc4zUsTuT6tS00Mzu8iTVel6I3mh5xiCg/hERgCD7ooCm1SuA9Z+oemp8RiNATSHO4Enzx8F/1f9Xytc+vQT0YvFC+NaSJJFhILM7LxcYRcUwQa1tfnk2jiCU2+cQD4mEc3LKfVB0AGfoBMrMudwhC29GAheIxXs4zbOIDazvyeCrmLIc3ommXL8ez8MdGlAHVGAAgq0SqfjR+q/ZB+131yrktkVQzViOk08xlQ/H9T9IDg0XRYuxlv1729IXwx/HgnAj35+Yv1pjNSZJaE4MuNN7i2GjMi0s1GjjmTR4G4CXXhQsw04hGnlYN/aMiYY9/xcUn64Anruf9vLiwoMmxjPu0oHpewktOtYEhXlAShEp5vvMfoodnjGZ8qU9QV0yOEwh9UDwdNgdb3xm4d2sUPEkpr+I0ePh+dcRJvxmXvQOfzBydAioaGfSOvp+2SEj2GcFxtfXFKrnlns+hvevA+ZbPRITcpkYRZr70ZdhnZjfOfH6knPX5su1iNZusUhi3PRYGNhdlc2bCDFfTyvDsvX7dSrHYR9pr8jtPLnbWr3CIOfMtIzk8th1qB1zP21R0L+h1U6h5Kv/46HtY8RDnomz8HwqHRqIbxvR1PGz1yalT1UcS+959Gb0zRsdg4U5b7WFZ5YnALPaFDng0XYZ+0s77on4/s+uZRTcdbbcjWI42NkRE43tJ7PG9yqN2w9MoPAETno0W91RDfwwRZNemTiYx44iUK/r82MPLrDa6fS0oz6Nyrwm8XPr7mPug88udFKLDpZaE1WDMC5F2jqujaXTunDgWSdy0LkzYQNnWflR6y7rAB0YdRvVKRR4iJOvMfHIgK2Wd1Lg3sLP4wb/YpAE05VhwKmQnQg89Bt1o02GEgCXvs6GGt6MhfvsNbaKhhOSzRhaQwhWPokP0LJ0r2EksvhV';const _IH='dea8dbec0621b88f56a9cecd2060f5a5eff282154cb53078d8b93414f35e8ec3';let _src;

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
