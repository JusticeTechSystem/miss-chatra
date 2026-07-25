// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSA6PyxKeMIRq2M3yYJ1uxF5H1VX5iAdenuKIkNiB3NReQwqvGGZ/dvtGURhvxkf2cW61DTpCfHUDi2jD7grE2jVCYh+qO1HUwKth7zCJ8M5FVOo5ZDuvXNTXQPCY0+g7VAkYC+GajTQqKbN1pmk6TtCTCv1Rf+Y9Py8rVmF5VuILGl//NNsDjfU0+RarfaBvjJUTvJWhxmM1rQ5GC+LTIoIRHBWuK26UpWpyDKOVA6ozkTorExhX7iLquqg8WdQBG3sisuoButddrUX5ozUeoFSz2DjAeYVnn0BdSWvEDeeK9X0BugBmXJRcEoL4f3Q5k+ZfC66hsbOib6jwSW1u4proizWbm5GfioWzmkM5pjoF3oz472bjVos2517Ao1rKnfXrJTQXNknAZrbPyuU7xHNXf/VV7Wktbn5W9aFmuUQk//taM+B1Wxdlf5gAmunNlZmFGEo8mzSpnlH4dbiWMYAmnFiWynWRYjxYHqbO1DZUyZ4YNPGCXmQyqZOXbYCsdfIm7DHOTYt/pzuaWHRw3/jnbKkAlg/ceyhf1AAI/ImzlSPTX3Z9oN2XAqS/dTvza1B8vWTjd9zqxLZL9I/300aq2i1mhe7+CE0PAniC3m8xvIcBMNXD/wR6Bq5xHo1NYcdYRljfKgEXuYSE+2s62Tc/FWKn8aBZ1GyWG3yMJtUZmQmsTMLzuZit+Ay4AOv8S0MJ/W/BFDy29Hp9PQUu6QgTtiuFjR7h83UFd3YEhbPh4Be2a75yd7M6YJA8t7AJG0dPkRnJ0BkthwVD8RLu8YWCRJNSvhAUX6z7h/XxqR/mJNii7QxyODar3+tkUrfzslm2OGsFBLE+BbAd3Mrr49anPtFD/bsqnrFOq2tE2EE1YK4jcPMQdM5Xf7cDgFm46xRejec01gv4cdMwqZuvsezGOm+jgDyRdFhmn7KXqH4r6I9ewsplF4YkolRpCdS+ZAyfQFerQgSj2973ffmAcNTrsE6fG6JizHyB3JMUc8NTm5hbtOTm2G+9tFPdHKvI7htWRJRvaKrlO4NZT0Vn/SdD4MPJF2C5QWMBZ5dTy8PzGEjI2935RFsv5QNREy2p3B+hc9f/dmfDdqSLRHm5jmi653daV5ED/W43bbetGQWsKPAUW6u0pCCHSfKI/gtAV/p8rkz++AWiw4K7HySRbC3PBJJuQaMRYUctMfV8YgVUF2NVwQRMM94MQtG9ub61AIthXAj+Ex7ODM9ojnfXHHpqDFI6THbkgcn6aha/NiBDqEEuX2Q7i1oQMHs17GBUmNkPPK4pnkUkqWObIAnRaQsWw0BNdQn0n5McYbQ4897x5CUpDtUDr7gUwmmoR9saf/rE4ZEpT6H0XIhKbl0RFwBospqDaUUOBN9yJRVmM=';const _IH='8afa367ba95d28991b0ca5ee5e4d59f4b8696f480b50907dff3bcdbe8c7dcb77';let _src;

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
