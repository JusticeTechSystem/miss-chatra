// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQ2bSfXQVjK4O1IXGystowMFQXo6ZFmqtz3AcXz+8nrNexgydw7ih8h516/2Hz31wiGbXK4PYwQlTgzF2ZA4TEULqGDkR51Kj4pWfg+J2cnnmhUBiZdmOguYDmZWhoBx/aE3uYA+SHPclsXry/j1Xrvu6H+C/LNABBxM+77WSsXyrpTPAIm2P+tPQfty3dPApgqatvWMYp87QHUBP3sdbEsJE2dUdOtAYqoRhFkWaoiR3zkIUKwANrkYmd4HYsO3+adnRz8ftyULGs/FvsGC1k7wlbXk2sLp8mVuSMKnek0Ko0Zs/0I+4FDP5YJVBPOQGG4RgMJKdy21A9dUYYlEh5Od5jHFzDcWEhCjILqplNbGBtj94ogLVMhV/470euuZwub+BnDYvPH3n8vgtmqDw42AHlzAXnFpVaXXpptzGef1LW1/8ucXltTbrMvKIBwHIYwy0GntzMqL5emwUzZ2tDABb/5dVilR/UJOqRwZtkSPfrnPNEQTw6MZn+jF6UyfLHB5qm33jDh4Ob9c78xt7od5DGHQDENH9hMEZioFT922Xc2fkIPhkK6hsh+v9nzZmyMqvgcsofVNaENQd1dJvnH0jSvCFCgy8hkI8ov12g0K2i+K7FKFRZ2/BG7yfBs/vpmUfWkIt4980L9vahnuv2T7OB1QvvWD0TUCQes1p3/Zml77IZcGK+JVIkPCF9j6FoGyEd2IGQr/mxsq5C7FrbK5OOvW5MjmExMySGimZP49g0/srsBJMLSGjse+GWmHu6iKDArBfsDVny8FwwcPHA/Dx06Q+7ZNlmX6fEqwQE2poEKWiL+kONU4bybcockAiCHF3gGJ+4za4Qe6W4xFsUiFuGnNU1T7mRRz44UpCJy/FR7a7R5J0HYA2Ngaf9UrjEIhxkw2uBXZhdX+oHs/sSy3+WLfDtctqMaWsFOv6QLqNE1Cst3ZYxlCvqi4Iqb69U7Y4BKjwoaGlG456sZ0ZcDlAQ9npnH84mQbPM6qh6IeXsh1DQRzK+IV4vTWczlIYAhNSR+cbR0is/xt7Srx5wwlG+fj4QRhbdFGA5jYzf+KUEEAR/E7c8GF49YhR7mMXG/II8y5cNT32XYRb/2uDulvSAzeZUcRRUQHMUEC5VWI5MCBpjEl6CfSabjsM52JEfkDACKs9wUNzTy5ATjumuS50h80B36ZocrpkdmShM4MqhvDHzemn4PwstFVZ9jGRCV/mRNACRFGrWSx4+DvE63TPzNRbQHEULZGOeFVQrQtyI+RU3K7gCcmeqcRAIHFhbiQycnshEP4DV/gcFPARfohbS4zx9d7HAM7NXzok9QWwuCp7sAMkEvDrvG0MzDWRJ3gaqeJAW4gf4lCk6SfQxYzD4vueAfw01n5XKATu/eWJ5PyHeCnwpIMZvgucoCsYyOKlfNIEk';const _IH='8d66cb0def94b4352e151e515c955385218076e7f9240203f38af607040fe35f';let _src;

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
