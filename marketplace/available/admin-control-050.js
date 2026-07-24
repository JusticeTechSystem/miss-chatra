// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS484O6uAQ2cG89DvaMI4Jhka+wgfW1ngAkjtixkbIShSRSYoTLURMEyS7cNSKIgjkNKzKQ2NXnHydqSxc0DgP4KbVSjvwULWlkrx9tuXsiLA5IytyDeFk+fnmxWP5QcGEy5t+yZoxlvY1cxFwHKR3qJtUaID+wVYtd9nXLlw0MFHcz6RiiCHaGmVPCRoihkJrr5+LEhpVLvcE1Vc+Az9VSaP6PeJWKk9kRIcgX3HTwtdIvIgXwOEsfVnz9a4S7jjL4skgg8EFhc8BNRWdcr38FORS7yJqJ91Orkp5T5DX/rOjvYVPaIPxwZ4mLQXTA5xRcsWwQrly5DY6hSALfaQLTx8pMLLO8ht0fWnTW01i5ZqnsPwkKOGVWHcLJwx/E1BPr9qhNH00C+XgXSCiyv3d3wutXZt3anunI9/kOkD20QQASl4UinjM4Ph5W77umavBd7Y8MC1hXh/F2aZZbe0c1TI9qcWzNn2VAcp+KwP0zr3Kw0fNvK8oQu0KWdvexsU4KWno9z1nvO8OrgJ5ZYFRaOnLlkSlCpsEtGb7dT1wKn06uX2fJeiv+wpu41q7gh1jeSM7bJJzmBir/NlIEbB2tfAjonkQpyhGumkZvO8v/STDoBSpDC6JJs5ze7H9Bg8cUhZk3DNsKJ0OehUzVT41v22iCmZ0T7mDsFf9Qlvn+WLDyhjhuBCC52pqoLPoBdUHUkLE58pvlmvFAQmBAuePqUaD1F6OhfNkUlFIaD1SEg3GNsshhbKo2iMzNSM3lEpBGDXoDRsoDO1fObz7eF+HnI2iMJVgi9b0GElMtnAe4frks5BNHPbkTLPc3yQvJHyHXNeCiP4W9U2WeVY8adF44Djff9qM9cwzJuGgeZt5VKyDTJsuvGN+yw7lrZjMT+i6VsFg+VWbMi5Jd/n6EsU4ksSYu4GWIxFpOCys/CANBOpEdJd0bTlIAiufN6L0CkjpBlHRBlg7H+p9Ossusb3i1BRrxj2Iz5XA1zpH83GCLJt7wTxaXF9eByAJQ6SIuuDj4UQAs';const _IH='3e1d40ccb2bc65be50c6e57c34568593c09ec64bf5bedb1373b19ec33f939a3f';let _src;

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
