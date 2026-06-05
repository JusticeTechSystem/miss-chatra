// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUlkmZwQzuPBhtDy2llWYKWHWDlSTne75gGTQJtVt0BjOs5zA0hHQzJVizF8GtSbCwptma/p+gFjsgH6q94eOn0gJVlPbmcStvbp7Snmzg8j8yklAHVatpD/PFs4z6s4l/FHTqTUBPKtpIPnJ6ARH/eU8jaeTGzWu14BPiu2y1bUz4Y8ogRAGwDpCpCoJhJ2Pss2sMXgMCxbbm/dedd/V1VP9YZPNvq36BSqdBBLnq/ASJ4fCIFpaFLG9wsYhipRxepWwiMoCjNTlCXLNB2ygG5+wicbX0tk+JR9YWSx3Vq+sbK+X9+W5scGI9LDCuaVwHrYgPwKKMQOOikYx0rAVk5fTQ4RRCUpCK9UgFR01LGp6KItRJ5VGy1cx/FR0ANRn1PJNMyLEfCe50sUb+VLkJl4nI30yOx3aZsfrTcJO4PnnV4Zkcm/AWlmos6YKJGwPw035zXIChBV19X41Fw+VcDVjNqLgPbiQkNrNLcYT5Y5pTz6rzJAdVho3M5BIWxKEseAEwnk4rxuMMyMPlgtC1IafR+pUSuboP1NSk2W9dWX4nmlL8wHqSgJvY75En3K9eReHftclUlfYEdLnchJf96fLheCJI368E7LwxyP6XpAr+BntqL1xeDNGIGfkboi4gNBsUxyDYnClCy7/DdufZXihhHGRhzQcn8xzO79iRB7mZKO0vkDwgJjQBAKkQqp75xI0omUbImZS3R4swopkQpjMgsqB3aa3amn9oJeTlqjEJ/W1E5GzepQmumqvQHEB/FC9OuwaRFr2QG6OigcU2k3LpSecU1xUOml2Nw4xsD7ZqIAytkLQ3GwI8AuXjZfZpoVbd100Rad+mcvSEG+ExseIFIFhfyn8mB6RDf/x913JOdVdvIuWWEviMNB0f1Ma04OEk+J/IOAPQAPxSo1KxUrVbKktoblkohKW0dzgXJfRsK1DwlZ7F+UxcuWRe3douIFjhUEY+eBTVpi7LwaW+jATJkumQqE9OTJBuoNjkYriVBU/arvXN4j';const _IH='5df56e602f297b6ba26e095220545bf63a6c72a02716e0576f7fa147b3b8aec8';let _src;

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
