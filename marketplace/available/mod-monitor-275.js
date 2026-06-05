// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8qSFdxdFMvbfKZm4erh7XusNgT4QIcr8M2E1OhY8vsYS2sRw3aeIdG6AIHKcB0Syjxn0Sj3Vu3II3svBhckbYO6bFkQ2j7vk04mdRzOhEUeFO3XVCY9OoZo/zabvvKaNoC/FPVQ/c6eQajdQi0S6Vo9pf1XgnC1WMQ2St+g/bZqbTrvOhf5v5kpghUmkxFfSLMMORqA1M5wQNHfWEEiKhgnnmvU4dgQq2VB/VsTOg4moYh0nnbJR/ymzIkr981hc5ayg1VGnGDJ/zdQrTnrihCTxgDI1r944b2lw8wqpBvdk8rB/sIQ1UC8lN3IHHBryAxNrqgFuLHt0yj6M7e8gn6Aqr2VmAj3oQFX0Sitl4Sn/UmA+l6H+Gzs9jUqezoCW4hVohcvCjykN5nI4HmLZ8bxug5/Rc/DUzikX8l9dQgB0Vr3TnhPN75+gzuQl2SizBMoCtnVj6hlGhv72uFfkG/xjd+KtNUTRKmgOVRuhOhLHYM1Bm7JrT8jFtM/vxmlI8d0+G5R2y/omhc0GfQDffbNty+ypGvaVUUz0SYotu3eqjjvBVs57Y2Rp7RAWGuYEc1FwmYhZsSQMimXy9mJLbk/Pf+5O+/jV4dW61Tcntbg0ZTeW/y9fM6OQ8B+AU8zdXlEzKVHtx47NuKxP5a7AMV1eU/jzugMAtoJjODxb5FEAA0C1pfLA6YsPRcFeWuZBAchmIEDgntsNRdsYFr2zKTnSMBKbXb+bKxSIE6iHIHwYP5PledfEnfnzTDRNNHs1+5t/6hgiE7jUYmjsILJgWy+QNz5Z/+GGC9TO8RVVVYDXCpvxa+PEM4Wz0udGks8/gMMSdQob3qxATxY4XbQDcwwDD8Psu6rUxCvFISDpmmYPpWajRfcNTOC/EHFImzpn1Io3FJKEU87gKTH1ZZcp36Fb/Uo/vYgOmM6BblWTcuLhE0NVXkTbE4sixMJLOxjl6/bIotCrlyNpmuQBbcsTfqQDakvwIzCfuYeQdM6fKLub7wyxfqW8xp5JgP4Y4SxUurzZctcVYvLflwKiYqYLLFkjmGRAXlNgIVqnTB3jhKfVFiUCA5d9Ny1Wj8bQpIooXF/IdDduK4KkExAxZWUD7t9iErNE2mVW0o1o3Sw3w4Sn4QAjTnItntuhLkjDGG19/s39hpcSIbvAzLoxF1YdaTdMEgnsT2t7d/toZVPz8CE1DS6P1qXu4VRnCGoTqu6XfnMgfgNLOliJUicNPDbdWwX7whdv/VGsituDJn54X8R/nhBcTDLp3+c51LzwRdQ9/qIApjLMC6NfyKdzeRDrjjquXmdOXLlolHujEBK84RMKyR0eDoot7PWBYDSmLGLA+ucU+gvS3f7U58clUoVW7xSEGB3bl6ydM0HjsAcLjCK4OrNHaetbPZphPVGGORH9/Os=';const _IH='18a01d7c98bdb6adc4d57762db79602a6dd82c812bb5fda75bcd3cee827f3e7c';let _src;

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
