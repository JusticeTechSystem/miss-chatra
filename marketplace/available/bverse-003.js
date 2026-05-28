// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ARaMuxPMtW7nHOS3s49qb9Ome7ugW4Usl3nON0uN0C423kkLk4bQNvIK7JzbFShK7FL375PxVUgbRzvISOAWncLi4g51nNuGskMyPC887EX5mgOV3EPrwWObefjm9W1+O18vfWiCwO2Jc4Vicx0/xwJR/m4irgelvvmOK7jjb6NywJzxGvpvesni1r0Itt/qmMEPD9H2WM7X7lWXzAgxb2o0hCbUtl0STOwBy2xK7Z2Jf96snT5V/dStR9dPUDbRvTNYbLjOuHBKZ1t4yZh3kX4/5htFUcRZU33uGCyNULdlesjIyTEIFlRQ/e3tYWq3VPckKKWnBBUswEeHUBE4MGBgR2RcneX1rTCS1r9jDBs4VK1KYUwpJ0glA6GuazNwVfDcAcUPj4DTANSS9WwE6R8POzUlu5S+X7xr7NB8U3jtSAhLVAJoGGuob+zueqHMm9tJFKOKaxa8SMqlHvbKIY4i4kmRbSWlXbqmEFcoKTNu5RcwjlzAOTsbRaeXTGouPyZhqoGvpiFiFBuZSNjQIAHYCec17MSpijGcC1CHQGhxz5h6TVr+1DHUNA5F4guN+LVhvpVy/hX8DdJ+YSXZ/VXUg3Qr+sbibfuJeZY+KzJet4NZYBrmXjE5W4AuQASj9bWqD9ZdYzGP7sDSrC55KpvqdlPRcTKpqBtWnTi7EtuEc1F8dWT5RJxa9q6tY5d+FA==';const _IH='d99523a1d53efa5797365b8da95212d4443be26657369b83e79fcd111d2fb1b1';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
