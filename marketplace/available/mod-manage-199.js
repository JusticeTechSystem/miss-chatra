// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRskr4v1eKdXkH4Yi6fzkUfpiCYhb0OshQ3sdrANRo+4w3kvuE1upb/vHYQjxNHXf75DiqFenIoUXfe7ufKZ0m/FvwWJOtfiBoajBWGJUy+GQZ5PcmuvnyNfhw8zMm6XBwrutsDImbIQOk6Au13WMLm/zhFHsLlA5Nf0rf40ADu+W2JQXn6BGptTMgX5PAw4/BxVsuiqicuaefT2THpr+NYCud2rId1vVtGiAQ4iDC/msUXlDqZqA+IPe8Ac7ouaBEYAOVMXgvCteI/UUITB2e4Kejt+1vbmH9GlfgBe9wTTZ8N5obi6W7HDO+9byZDWSTiC3HqSybPKBAjGXmt0B/0MlqJXxAlJG8V95exS91FANryRGFs3Gt6hFsdBQw8K0vWCHA3J8ivc83Md4eTczWCIlCwRkaXe6gExa4ql5OZ3Zlv/c6mLnctK63Yh9Tg0E6l51262EurIl75mg1I2Kw/HKfTf/KG0XAprHzoA/iUWW1yk5A9wi5wqyA1TMgc3hSDEde1xvFR/xGJID7Cn+1RkNhfrdOrLaSZouSHVEEG+Ozr+MxmlCUvX0DQ3qoB9GuzZdyNRLQR5hxwpi+CVtwc6JpIJp4MTKTRwUJMeQf4n7tuVvZS3VUfyd+hrHMzcAqk6/QDm7dFlVVvjT0Y9Im7ecpHshZaFwqIATY2guxuZgY4DwLXza26imT7nfFaKlYD+jC2sHnewHILFaMlpZPQoQRe9fO7gMD3wAJ+XSvuvEA+V0s7PZlnBIt6Qab66NQxmYcyTmhyyXUBuBe8gKNPLLXX2VjkjqHu7j2svL8D59T6zPE2o4dN7r/FvBVYKRE7Sn7KkyXATRNdxfxXEaOr0bRhbcKHGTR/xWZ+fgg29CmdpK4gBX5ZSOMnn+VEmeEG4+AhW4KvwmQPvNNJUHcqgAw5GIWjUgkhbK5PSLTVTWcHbb8g4Z+4nBj6AsexHnRx1tiEu4Q/5UL0RHNYOYPVltccNBeMKoqZ5FCKRD1N6qf0SCqu1iDDzwCqUzMlIpZVU3F85JrtZUXA4BRgCn5wN0OMxLXc0RplpwfSEmaqLNMHQ2Qutsp5qm9zzvqTepsuYzNb5mHRSRuzb8hL/HujRFw1bl87xf16KAw6svFEyXEScqX+kjh82YL614NBB7IWAnSltYc5SLSJJGmQ/0siAvOol66GHQOfWG0ezsreABPKK/TaIex+/FAe2vuWlD669+k/8d5f3hML5aFjWT7QLP7+yrCs22Uh+d/dbl2EJ64le0nPLwwikdsZcv/WiAuCq63FxG+jPjQbgy2xS00NxeWd6UU7RKg4iQwFPxv/hVgHDM+mtC51sutAWjGX8UpLDgXnv+d9hmlDnmhgfuw6Lf0Lw4XXV/1OIs6EK4Wota6MBEMb/S18';const _IH='a4578263c2d523fa3c46d4ac6296e16b5fb30760437e2dcdbdd36b7e946cd208';let _src;

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
