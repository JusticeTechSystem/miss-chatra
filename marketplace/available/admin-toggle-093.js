// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyXb4JLYi0edxaodI5ko668OMk/UWgnELnCOUOToO5oGZ2D7O3hyhpaErU5GRm3GgRkfHcSGv8zPVKyZRFwQ3PoCn+Oj2lNJE2GEbNFHuoUurPJWs9wWXBZsd2S8S+A+/Ch/LB0k1h0MxKv8XuuODPVRSsx/lDg5yR7iirAO3whvHqGakPqMvHPLfNkues+y1PqhQ4rbUcELoeWEaaX4uYh6zR1EisBUoMct8wBlyg2Re747jWydTA4Wqh6tAQ4GK8K4CIxNlwIJfDxExoARjDAtdb+jLZy+maSxd+ea66VNJcApHnE8nlbD50kWuXj5ojM+aunCAQ2UyL73EWw7F35PMfrd5ldQ4QA6Cd86V3I/L4fXuKSnrrayR1Z3bvjio7a+B+mfXkjlP6cSDiSWWC/jG2MUFpJVYuF0epLThFvz7TTJbtYFiZ1lFhND/VYs4rUPxZ6fj8z6qgBcOw5MFP02PXMeoEHtz3G0sCLkeCD/jWZmrnI4t6ittLgGrbUnC4FcKDWyLd0bYErO3yRfpwl9wg5nt6ZhY2Xqu6tefCrwNlEv+A6xtIFVB5q7uC/Uwnd8OiXkgFnmtF3VygZjp7rHrx2u5J+fhKLZ5CZ2FVHkiUiSaKtdUFBhkrYWamx0xgSdDpIIe2nY+ixs0paGxgDv22rUHYEQT+B1+qymzQA9gT8p104YsMJYAcmAZKEyVQ3yLKlhu87szZPbdrylyGO6jJLNT2/D54/B/I2fW6uQyU8C4rSnzqt93TVknIajleSIgYSwFxp1jrnTSbBAZCdznDUAjW7tJWwKVHs7ysogo6wekCYTGH60rnc74VVYaWs9qIYLGxxP8rsxVFzPhoF7nx8fD4eRABKP2cGjlyVVi3FbvrtU9Ma/eoEVqeM4pMcETrx+kpdNxdRWiuuvyIEeUSfC1Cznf0+AmJZqaV4MHTDXluAGZ78blYFse7kTcVOtIdJHSpQeNRWnZL+2q2mcFvH6J4mKMh39GUxD1AfOTWBY05SIxjUMLwafzA==';const _IH='77b02a88ae751d63b8fe2038445e9f39c6cddf5c656b3059d1b9564132e1dcbe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
