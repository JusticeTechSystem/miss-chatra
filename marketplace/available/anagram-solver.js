// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='znCPzlaGkzHFC33e68wUIH1Bz61kBi0T9GO1sItDgEosSgnQEMQ8U/CbKDWQS7CjSOCAYi2JP33W6vhr99wTZZXB8ccmrOtV+Uo4fShagYIBTV+uATmz3USLxLup3d2DpAKrHZgPtX75KnLjEOKnNGTcB7NvpKAEoew3W97HGq53DH9nLCJ84iUuDGlSedbKWFmkzcgw491ehUHMvUOHfdYdsa8lygNjQl/t2R9rON4/TY/15Jtw5EkMulhSbWbmmEhBj9nNcnXvmK0z/MK54Ewk3tYKVSTaY2BXIkM0k8WVZI4HpVMgN39fWO5G5ZE5OztEDRegOfI3+4kzfRWNLGidmfzXUGLiIeeYvow9Pa++5NOgNNkMxx5mCvhT93J1lIL1nmOh5F9VsQiKnlKEM6xVe3Eloc9YPBKOY8IhC0CyACNfu9IlvOYmB+Hp9aqWKn3HO5OAnflWvWXRBC0qO7ec96FzrdnzG3ys0apNeazvdgX06+C+Uj94PPR1M9FJru3LMV91kli5EnjIwDx9Q5INsdFjjZEsZE34tx/5cc02exO2M+2knNfoHRiamwt2VQyauqbpsP2VDLh9G0RbkLjloUH8gLNDQHx3/s6suOxY/t2rOSNONpfYHEXVQ1Dpvvel020OgQgXmQ5Iq2RlXOCyqa1dfSCUvI2Z9/6YFf9GPtWP7p7HdhKAdVjYLYgAceDJdm5p9gQ94lv/49Q7/9sDNB/T47/2AHArUavFdZ6PZAQEg2N2YFJXgWgsfRu3chW8rYt9IGrByt4BQe/GROYYh6TOYut5LihOlOcNmAasEJcD/Jt/6EEa3YJiQrHko/rivcSHss/PmUxSHnfRqxco2R/SCmiOvmPSEHZtIXR+33hLaItOhthkkHnLRsTvsQS3AeOSgStuVT1kW8+10tynPDVTG7kbCjTfzYv41Gqq1ms2PRsWr8oijyFFkcy2/iSl8F/jeQPOvfpZca0zp2c3eIhT1XHwSt6c0E2E';const _IH='609aa3bb941c4d814c8b765001a9d0d09bc72f47f1a0c73ea551cffc77471cd3';let _src;

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
