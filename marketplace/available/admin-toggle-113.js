// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='573vBiG0V6vPX1yv3hGN9FqSaDzkArtj9zpWySA1qEK5YjjLwU5rka5uwGCOqT8SbGmMN2AKYFi7V7MQtqcXtOKFoS2gZO8VCDV4DiMZfBwdODSGXWcedn+xsmf10khBH7ue4G+t3hx4jQPapwcQimhwxJxKjSFUxoFEj9J/XesBIAqG1zSU6qTDOiU/g3Bnezap+BBSV3uwvaPolCmlMzi5/JLvLuhl+JCmKED0zgP5B4bqXf4OZTflqWe2wfr9yUQysDPX3FzD8N1cP1Z1wYq6qfUcqiA0U1SkUzM2Zemha+tXBYaXgf/bRTXi9C05/UL3ChRIGtWd97+G7JjLOtxeWYu+FIIu9ZfLbEoW4/o5lO/gFnbhIC4YD6C1lYht3999xwca8Usyboe/ANze0vI6CSaaFYhkie6a/KR2H7eItLaXh+38gHRSRS41jBj2oI3KkZthdhK/sT2zU0+1fKuZR1QECQy1Ww73m0CJdugCZd+vDFDl6ZlAljB5G13EsTvTR2ctzkRJ0A9vaIjJVLnHp+GIp5tjBbYay5ly3cnRIYd89BfONxnpVT0yxLf8rlTlb4CvVNlZtqALJeQhwFONq1nnXvC7AuWZdYS8oZ25foVhyPda4kevXxjFF4uhDzIZk0pBUXUibhPU7ehfH65NR3h684emsUPMKGp1ITP3j2ft4CqfZqtEnGX1I5Jv6hmMDuW5GjzM1PltlTxy3LnFT5E+yQ4owHZ7VPP6BuE6SCky03llovgEHv1xhVOz3l54zc0rZ23a0I7pu2atnSCzU+ITG9jc84nIn5dMNseL2HJdOUsDGIubHHncB+qDK1glM8NHC16zKyjSPIejnOasQQXVRtjo2HqtVs+KSIVI5mdrKQ8kcL7V1hegrRaa/ruuQf7JCDrj1hBx/jg+ZzdCsYmvwXsi51d03xrhigb/C9ipuAi/JC1UpBULyexwb5eacbhi1mNc1+T4kauA9hoC+H3CgbR399AWz90tOlPyDQ++A8YF2IGyWeH0ErOTHA==';const _IH='8bd1f07a9512720a21334624efbb64ded3f1d629c962218950ecd1ed5226df25';let _src;

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
