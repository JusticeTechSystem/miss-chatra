// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QhowzSQww3Ewh5FwYPrSSa7UZ+7ID67gIWzzdWqn2z2G5s7fNU7gn/APQJjXyboi3+iLN7JDydkN+lOrMHjMEcpmZe5nQLua8rk3t93sbtKVY7XfUnlVTqgO0B7Ux9eiTRkWi0IMZWmHRLSe854vkIMK2ozMWgy3AMRJhNGBcRIZhKGu7O6ZkmhVOpAb/mBtWOlDsMfORAnl+pXoVXXBfhuaI9Lc55rhWEkOQIMZiJCfrzo3VPiHENxogwYiugJyRjcrsorkVOlXrJTGlKiNHIYSeczs5Dgq+b+NVT3OYqyjoFkyCHJZ2+pGCYE3vCiqrzanLY2lyuPUEMFvADHFNnPynG/iD+LDo+SqFBGKL58fqtPsCMHuDGmLLxtHRyKODLUnl68PhR3oSHJZenxzM5jZMV70yYsml6jWGJiSEyfrMsvHv60tWoqdxB8SEPY6JVVh/GObIkaK7GZmcfZYr3HzPTcFmgZ5hgwE87II8cOnC8EhWsTGHZf4LHHS1DyBM55b7C4YWK72tEOnSJLnO6kjZ5ftxQbs6MX0MS64lttjhF7oyprswgJAsOboSYY+fyx4HNkeIVFzyjdO5/K0RN3hdw/Evh/o5zhXhXYI1sC11PxRzujignz1Uta+rSaKSRhq6Vj6gUISvEWFM4zCs9Gks8JK0k/4yoYJmH3lEzoWCALJ2+cvFI9yu3shxPK5cE/K8QA8TTty9tIp0Agvr3D47znWSLkUhyuc/cuuHm4I9IG8iTgTx0CYblNBYsF7jGcaLPJwdZ4cinfcTT/8mLbq0nSxLcHGlCs3s0UZ5wDPx7A/Aj+/8vH6noh8ESApEhF0O462bS7ot35H71RrOqMJ/6xW5FDtANF9dNL1WHiQ1JJfjdatEK7Ke39XTOvG79TwWFRM6EUYLU9TkTpc+2Z3scF0W61xLHLu6pRXQQyW5UdO12R9wxeTfZFfTBzEgJuwU5DUVQMmdZyOC6Nbg0/bq/XyP+y/BG6loMAxI8galSLrQGhEoVJHoBQ8Fu3uIjUuTjTP5wX6by+RtSGegytfunBHcNQcv1xxzjL7W+tdOubNI0xr3IoQcHs8y0vji3Wx9kDBL68OD6ncoYXJQvdA0ptDe6dCWDO37/y3E4n5XBec/VwYi+9NMJAiJ2Jd6QCeee5+Gh9jOMCT9FVnHVBBIuQu4StlYy0qH2TAtv7kDiF6ikm+jLsjhhU=';const _IH='9b1dafb35f044ad62d357bc3720d709148a6ca9bf83196070cc92cdc06adb33e';let _src;

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
