// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4r/g9zAluEEItSLuZnP872F8s428+9rGlK5JMOvHe2mFmzfaZ3gYnCsmvhnT9QTrvi8Bn0Wxkpr6P0BX5ctsJR0q6phTnAbzFCeZyynoc6lqvvJGGkGONbhuKDFjm0eaVixSY3lffjtnktWJjOzNsYh0uqARBjw+xaBwUQ3tKrgpHO5hGg0rX7y/tOvcipisSGnDMQLe2agI+7NpZsGXfwmya3biyjg42PLyyijwpzcQsbr40GGEJqGPndzepm4cdnp+ZNqK8sHt0EGxa4AGzRcU3EATqej4H5QVrAxan5eT1u2rHpJDieUnVgXRWbRnTIbhei9adLNCem/jaPxiYoRj1sk10CCPknm1Mu5FPMUCJ5+clgdomAUKu94HJmBhEoeeEmtMDTXf7XKc/KHyQhH5vVnF5Y4E3N05NXDV3T81oINJYRg0Kx8n7wS5zKY56g+vtfV4pbjv5EcSWSKzCM+FHTnFLvy+eCrDe6t/hjLAc+pfcMLK1z35mIGa38KaDTiIxwqcUL63xMg7ph6J7S3J5MPgiTcaDeL5vJBdZRqfcx0a13kwIklbnCpzhQEWaGsi1cwNlGIdj9mQmbDzo0tRyzUsIKGTPWbQd7qWxClTtGxTKGUEs4zbT5yB7O6nM+o4HklBVdw05vxBXi514ztfp2XIbTNHzPSFhXMzRLdCpGmCTAZinZ5WG3+3vW9uFHIBJAMwNd33qfl9zX3uwjGFStCuXQd0iSfvxd1G9rXS1y2TpzBFBESy8AsXcK49GPGg46kyIUWJe49tK/CfbzKwyFtBsS5u02A5MUrhA2hTRaoZjQK4qujD/GlmAIXZyliJ8FdYzG+aU6XKbX/PBuJrSl866gjlIRTdnGLvemF2ebEDy6ZW/ARbR9+FQIKAr80vXP3Y7yKpysTYy4Wth2tcJORn1CCA0kaoCgFkGptgS18KHXKjv35ZdecJoRIYykO0djGbwnIdlwIFg4MVpd39BGVaMf8z14Zu/6E3Nqa3g7BcVYLYVXo+123vHmeLGPwRMrpcUoh1+YlaS4+0JwmHGGBwVY1j3OBveDHRqL6g8VlzZRYXuwe7ZWyqzpjOBtH31ZGcqpx1ZMko4mjf89ZG8k/w8DqIst5GoRDYRfU2A88doCBsmLRck876qemUmpsBHbduizsR9pQ5dDtlRTPi0oXIfjPQYoatAUruwRnhdyngRjq8q4V2YKZx25PRnrpK1pZp477YfhRRR6xCPO1h+dHNTYZq3SQUgLUarD4xyI3F0qFfNsAmUlZjdMXH+D23YQ4HwNfOCG3QeUZPcuMLnIRL7S9rrk08lj742c/DSvHes36WhGJFDLNaAdHI4YpzKv6+GMzAp9obJ0G25OFjMqCF3o4E36+fj0hN';const _IH='32e206cddf5b2df417087daeb7c3af5331ead1031f51a20cb85ea32d94df971d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
