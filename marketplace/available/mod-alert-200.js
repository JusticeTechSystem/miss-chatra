// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nvKDasS6D97f8icbM+TZNa8druHBIbFJd6tw+kA394wi9TEkmEJVL3zKrNVbETM7LqVJ8DL+t2JXIJLF+Jy439ObdRvQqlZzTHO2mAUCGVyKjxyiIir1+8U7kn6RnVf9V7PWo6mIXwTo8E8yzimLG/eetpBcOMMD3YPlPCiAdKMMUm+Lz7hPYURnz4oyaWpdrq6iX3J0R22rJjBKz8WzHTpGPCUuXTqKeVBz48sqODUU4nXwnuFoiDmD+3rSFIlFVVv6M+oavxYVbNAQGSuzOC5447Y4mPDLkS5P3qH55Yokcniks1AhRc4PL9L85GzRIx30FxLiVT42TGvagWzJEBmszV5vZkrZxVMqXZXtKoahsOsH2WXKIiv/k5TpsALcKdPVoBUTnpNZORJM29HzRaX+1JF8WM7UhZpMzQtIqByYfAKqSEaLcOdFzzbgyb7MNbj4nFiWmIXOuXhkiY4wHwnQNCvp0JKcrsz4J08xAKZm/jWJ8uQJTP1ThHjCUeye8RSZXAP1hRNB+bksXLbHj/FvFIar1rqb1z31yr8GTtAkTGiNqKD/qtBOiDU4bAPc7faPUNl/00zeZbBYYBjVZ+rCiksY43jI4P4MgofC3Hpm9l3mG2hMvIq8b+/XlyLqRqi/J60v2EsBv5BX13nOuI6dEmU/RIC9C9JdsavGMK58vqk8/Q90gx9e3RgEZ4hqHcqlWgT6NSpXVdJZCG7lNiwLjRBoEHjkmYTykmt0x+8oa2CVQVyxdrMcRgkzXRidtfSlMbB8eo5MavyghI5z2VtZIHTqBp9tGK8ttscqQAPrVSwGk9b9ZssUDDaF2LTD2O+6C7A6PklffwpdXJCfzQAldV2787zPoN5ekahoZqfrAta9z4kaKhkp/02RO8NAJbMaK0Du+YEgW/tOWEUoZaqD+XfUA89nbjEwXakwg0Rr5TgP6oQyJaFZIOCQ0I0rxEkgt6xcmPrN0Hjux1iLL0Y/EuAwN07CO34gpCbmyzuE7FfsG1QYJElasb4GW2HG5i1BHwerL3W0ZgxGw92lTLefEdz0kyGvd8NSb1/siehkNlqoLdVcJDx7UMZUOpGFeZJWaU8ZbE9LB8OpPm4IrL18A56t5NpcGJQxV59VIj9PWgXgrl4GtA1rcCHSDPIQKc9xz46fCUChxGl5JOnyHa63lR+DjpuHoSjJED+TSyIQmyk0xcR+XDa+iM/ah6s108TfN1rOlo7JQg0G+z5fkCoCihT+RB3V1Qrzxcj3mbzss5CaQa4Bb2RNq2fy1aITO/GAwMLPSKEHaK48hynK9561WlIe+QfV/0Kujg0mk93WMhpiNZwMlUuzRvX5Cdk93RhNmI4qyKc1NM+foe7ff/QT0roVHerlEPOsauIT';const _IH='7cc3c119da46025c34e3f8c34f4c9c7dee98e9b665236f666ed2558a39727e3b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
