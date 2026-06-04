// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MEB7OqdCooim48Uaqg5rFewrjeRDuP0BR5yao7e46+M1AieQeBZpOhHfDmmn2DW0y5gCNpajasB+nLtQM7KfHeKsutNpCeleP0Abj/CBW3+FfGpI6kpeG8lza6WQfTK+egy9XaOFBFbM64V+wCDKdjFYNIKWP/FLhLtrHj3s8yLkeBcNaX3cPMHK8pZPdihRYyxFpRYBk88k+gPdmjpq19ZE6zR+NUt4SsVNK0jBg2mbb7rppW7F00TrFitrqpm9C51qm+FnISba1Xfj4QO/r4MVVjKM7v/CADmMTaNCWkN7QBlcXSPCbm8eAUFwnQPdqoLLiH0VB9oYEORrZPVWjmnTiKS9vRTw3MsI2fjn+Nrk4o5w/sjh/ggK5sIccV/xt3f2lFQhpyhl/2uBHuRju/6JwOVPnshPJ+UyCC2OobL0772YvyXZGTCSyHOOev2I+JUtIY1pdpgoays+Al0uTnY/rbBXj3vFSWShIyf99joXeonc4u4ASnn2gGpU79W9Vrbz9/As1qs1OJQ2QQa9SBbBRAwrKsPkWb9PVXlsKXDF8kZ6GKAoLF+RQIbqoGH7DD+uD/kWGD0Y0rF2LIWWSLzluC84IG8TZVDbK+NZH9pUemk9yASfuiv/ADniDA9dfW1Vo5ChNCiwE6dPYA/X6Xefi3PGc2aD0UweQNYrvEjemA52VJ2Oa5BABCdTzOCT5JgML0ZEouF3Z65sL5xA7sfw7mW5pilEQLfiawJCyKaPAlNQCyQAaP0HpQ5DDsvZCkCAMYoLB87+s9ecoEYTbAzPOm9tKPbW+EtvFO4ge+cVjWP6S4k2fuYS9MC+ZMjD9fKDVpn87ZMFHwrrXamislhaCKd3rR+DQaX0YUGpyutO380XIUJ+Fk7GgkrQee/YNbVVB6jIXZNpMStqer9DMehHgWA/MiaUKXCqjfP0QRS15no3YWddRh0CpvCbgAFlAfZSL8X3E8MLTMy2Z7jSyw46noEXs1s5KRwTbS0ntVH6WeMd+g==';const _IH='0e6a1b7b9e2f4032c1c6119100f602daaf87c20a71c571b0d3923b678145c70f';let _src;

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
