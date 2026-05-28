// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ONSE9mJ9J1dvWYdwgkJhS4AHE2gEhvVYvkovDxXxu0NNk/k1avHg1ADw97lFZs241REqIOo8QB7+uhnXFs7WQfg7vdWujd7uJ7sHxzbm3POXCHsjsYc4NdYubX7AZnrsSgG4h3Nv3NlAoaSjFJBhs2qm7t55+Xmy0QAvIIzbF88YvIIQmKgHuOk4UrdcxpVmT+oJScVX3biSqigMJC+4dHVWl7QqGrIdWGuu/mt8Z2rUgWebqJHc5ep+t9SGgzQPDORUhGq8j3TqmZZRR2tIoGRHnBRhauff4h19RDA31RhIVSbejsr2qTPl3rNvWahiEKihDSzqv5NUOZ/Gg0WbOAQkdONd+OFApCHyYRxP7Q02dgU9SNL5c8YeCsR4uiqLuHV2cjUpx6QhL3G/TI1IKdTnSfRMHpIctYPtD1BgrJXrViGFnnAvE/zRGSTzF61Rvh18TWMtfrF2udIBWpkUA7UHNCI4QIfeK0VhwTgcmkjPiB6Drypx9NudYnwB7AXT9AJK4qxAWQ4XpWUAa2uH4mk+Xzx5PtJ+k+FTxyXrVb0jdLDzEhEmART6cWxwn1HmMJNLMDp4QI72I6a5EUI7ina/g84z8+20hScaHNftqAjVHiGKMQAWxgzMURL0RcUc9jbOQyYrhovQeKZuvtrS24qsiiPk7uULJRQI87XfTBoYgbCw/jxUZAi/rvDc0Mqo8uXOvh7AQxu086LkDJ90PpZ5n3f+O0sihn3B79DZGsTFXAevw+Krq0104F/YOSzyRSKRh4Sy9srByfecBCTgjuM9As4YR42JTTgsWSuy/qjBE6qdAAHgLwUkYIEglFf4Q+rFLzrVT3pD6nhhq0Lg0qOJ/FB1oRTQ3xQwxnOjgZICMLS/+MOxYogOJE8eFwdGpRu9EAX/j/x2qo9KUZR9PPJrHEAMghGofAu8Vd11fCIjbegXREs8eR6MDOPSxpoGTskoI0ISUf3BDAkYHa2KwmTMy4sSI36nbLoU23y6qRccSAI=';const _IH='f0165097a12f7fb13471383ea881f84caf64ea03740d4811d2541507496dae7e';let _src;

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
