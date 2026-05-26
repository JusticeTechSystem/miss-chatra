// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ejTDJNzSnMnUg/g9C8Mh2XfRm+NCBVH7wjR5S7AFkoU0OYkZWSaajqwicB2870TLMQKrdCwf3IFP6V660PXHG40zdCFTuJyjszYkcyOfd2QgA721cGRqK/QljPgBXZmLXgJtPDSNcihXNWq3iwSZR9sQITDMowKJYNCOv7mo40IWpKdiyLgPRUb34vk3w7e0eJXV1S/HEc3RWE7t6zLeqRIWqIHI6C+J3VEgE305quhaQcSWIHWekLCDykM6JINr9Ucinl/gI5SQzvH+ISSSiq7NTTtRWjCmAVfqfOaXNIEIc2gcjnO1VDMcQr3Sq5KA3zL/mUhx7+V94p+hNIvYOlP5os1UpjpbZ9e4o9qp3U3gcfUxR45DrmFtvaYLbyVtFPrifzE3Rbwzgbnf+Fs+DwYOsTPrP9oJLo6Cehyg/z41/tnp0RAX7te8/NM4j6JfnpaGfjbCKVKN8TO69rfwek19coxWso1AkNW/nW3JVEfnauPD7zDoAznXu9MZxtytVQJEedE52JRtxuNiNiQ6hSyGMrYPZ2BYl/WFX/vS74bOTENv+2ISJxoD3jr7wrgYoB6s+u37CUBnbjR5vzUX3aH2qtosNLsnbfbuIGSVGIIh6nq3K6+T89TVhy10L9ON+VvLV3qTMiR1rfATTwsXpdCh5ibQnZlDzJQLaosf+MOhUaEyi1Nf2PM2slyc5yDNYyMczX6bLSeFylQdPGxOH1HUco2OiVOzvVBdSieK2FwoZyEWde+oJkfjOpYshfjiTq1uO08Ad8BcqJ8HNJ9GsIOiVEDkkA8uWf3d7JxqS18oIYY0sSjQIqGklyt2kl8m36Uh8wKbHdlbIiO/WtIWlkRrv+xCwTrv2sjPgexa0v9uj6oOyUmLU10ziiAOHS9dgpwAkXzCdN3Uhopcok5xDK77td3VWoMpgAa/6A0NpGknuKoiMXWjyOapC91ieNGALj3KHd6ZPoEnInB2ik6ahXNy2Q47cZe89kgb9T2IfHJY1EF3RxOY7u8epV8Q33BOJWrXdLAMejmFbeb5m+3S8bF76f7sYThwPEoNF7UkGunD2292dTFDhCBCll488UMo+fY2J5wf0lTBrcfyo3eABmiw6u6IR13N9VXKLcwR+dyUViAe+zlecqd0sHwtsh4Ieo6P9M7UwlHH9FK0kmHLKcusKIgjVzmtXIwZ438e83jxNJfHy2ZOvDpUM30sA83tfMl0q6t9';const _IH='1df6c42cf16a2a6889faec509d5e54d9e6f99947c341cfdf97552d7bd12050e1';let _src;

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
