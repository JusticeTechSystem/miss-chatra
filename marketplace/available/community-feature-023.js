// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTsWL5eFCeIrWfyN3i5Wc6aUrJf12RnXEjsxtvtcyWm45SGd4hfnoLFKrw7UfJnx/n92E5kkJxaTWZ8VH8/w3nrqSrevJO6G1jCWQbp5qBxQRXj++Kjoq6m1hlOfqaDuSBNIZQmfcYP6X0gIhpBpqZKHkTO5Zn+IYQrGUYAvYdzmo/Z2Fq0bWzjeXenteo+VOHZxWHOKbueYBMT2KSXkuZuXldw1pzV7Dg0yscfBx5VcP82z8TTbuUPsPCT5HBd1f/ZrKS+UEnLulFIXBEGhiHMrNVYBh10C/Fp10V5tTkBzMrRZgyEUsKhorWhsss8OVyWPHo3zkc9F8INFKycPR+Ht4xpP2mCHOI0uQRoxixwO5m8xSXpgLlBRtgdS2/+YdCpij+V7I7Y/AW7q1BvGtRFMOsa4zPaUsCIGRoT/JP7PHL1Ao6oKXsEzIoBCh120RaeLX2U/iF/AIB8cTaTsWwzkyD3f62sjXE9tb+COg/gMIuMYh3zxZfhW00Z8zhoYZwevAWx044AcZbJMN2bd/trT/7hefRTsm19sl61hi0H7bIYkgugtK0DMZuxq79Fe1MC5LvR4YrFanIdoEaIx1uR1hqhV5OlAeBXAa6/Z4frK/XHVo0ZX+62RYbMZ9a3OHI+/KGHrumh0tmgN+BNcMomNBdtMyAHuCL+S7jOsKIe4WKdtrcC7Z62cwkviEKE98GJ6NJkp5b5nr3auX4gM3w6fe3DHUj0hXFS';const _IH='fc5cbbc6781879e5fbde0d601ce9f5e3db1e51960c3ad2c2599924083283512c';let _src;

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
