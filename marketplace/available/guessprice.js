// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eyaQGs13ub68x1tHWkIKB2eOxAN8PvAfsn6hta+DdqTRxx2F47hFrYXAMFcfY7QDjjV9Dma0aB1u6jZOtKnJ3Wo7xVIJ9psltcvSa2jbzWlo4151SMs0wJSfAjuJOR5NlSHOYjK0LY6pMTN682H8YlmDbmW1+aLbwYn6LMeNcydeRkkKw1K1TIhnQztVX0rviCMqTuDuEkg1OBgoQCVKklJxTlLLuVR/0k6dsvbupr3OIYWytm5jPClKBNeVA171YFW5ForLZq4R9/X3VaOuCkQNLiUKlgjOtpfrvo+4ToFSJX5MssnRuy3vmBKPVVA/st2bQ2jd2nWl0Is1rkkEDiq+6Ci3X0xdLovnDbL+cYvHXqd23Yl9DBKRyoSgQbujYuMaZFsVkNKcz4n+SU0+olYqyDqQCAmYsV5O3w7EIyhT4FAZeSM1mCaw8Z0O0wF+7Xv6PqfIRvatHA/yUroaKLusorTQvmrT9YgOrslS3cZQTWbZ7Zwa0/PinukKAIaF012cnHUX3TIe/BZt+r8NNI4d2OgTeWZ3ZW4ESNDkw4yQ/c0SLkkULm0b+yxuteBwGea6ymsaL/HbvjW9tQ7M2rEz02aaUoKLzDglj4mm3qK7eaGEvgYtXzu+3qKaRUjUT7slqtqwXHM+CqV4a9emWhLbcHoz8j4EDG8HT3AbND8SMwLFuylOHenvdydRmnskBNQI9+WyEYsYwI9pcEMlhI1xfBAk8moXba6pRIaFk3XmxobtROa1UbMzENY0ARLtU5a+oQb8KVTkMvZ1+F/A0uKyM30nesdeQS6L0eOSoWvfESJk17QyV9dvVADrCAF7i0mk5vbLheH6qxqJT79+R+UPx44RMeDv2a/JhrObPS4sUrAX7BQMVEQc1/gnKN7Qo/18hugrTXSSxRMAseC9cihL12TgkerZqOhQ3cwevehRPknOp64pEP3chKWlV6Lw6Iw4vNZsGGWKcmBqhYODyOvR85MC7O3qmjEs+v0Aplpo9DLhhRHjDXTNYp4gnX8UoMUFC9/pKxyEpmATX7iuusUKxIvbCYt8HhfViA5NhpUuInG4umg85Oc9sDhO5t8mhGswrU6MogcoVFf9zeHkJqHwwaASl1/QGm68EuX3zFKsNHLQG/IBAwTRyEABUynxVbJgcG9JHG4UyCaxv197kFF/E74V56QITa9rDDwQfbq8edlI0+I3pyJ0HbEV8UQTAul4sqqL';const _IH='a473dec012cde44849839cbb91e6276bd5f20cf33d529ec17bf67879247ef20a';let _src;

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
