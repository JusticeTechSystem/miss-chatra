// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LKk2CXKNvwECI+0D8jBmcTjCt/JehO+/WTnswp7GeJgRSZGaAXz1hpOdiVhYR2KKjrEif2PIbaSMHom/2YuK6Gjxurqohe5YSUmlsJNYfrpMLB2hw0PL7y/tRvaTSb81CvhLsi4KFLcwJ2V0L+6zKuAgElJfiqqcSTKeK8GCl2KR8bebx7gwuJ5jelLpfDkTbeKKRmOcjd/nn2sbV1cJnpEFY3m3nfg1KP7HQAORmP1o0YbjLlCAJmYH/nOyOYoL52nuWC+1DbEae5UA9kgr6mSU6xw4qIIwGpjNLCba9XnR8Nil/jTjZhaudgA+FFP4pU4f8kqC5vm5sN5MIox89JmPl7mITVQdisKSuRZeROc/FdSkXtOHhczuTYbM18Kjainim1CwFX4KTXhZ5nTKhhf39iv6IoacEsjgorMloIthR6akV0RTxdnwbGuByCEJQDGLTq7/w15qrZ2DN7s2NjMAnodRmsVysWHZPQO4SUrTUhJsMfU17jzc/J4iAk7I3MDUajPCxEJEU2kuFLbWa4VmxfuLtwUyVo5q6tMAFAxz49QLmyXEAHO+yoljAzREbh5cny3XhdAZF3mgr5oH2IaD+LRfBtLK68DaxuezeJEu8s0oNTWTrHaupIraBmlqdEV8t3W80kuJ0b6etryTIiTro1qepCjqrwvIWTx86z6I0/ZGFZveeesQYbjR389O6QRsYr0QYGdXqOAUmg74jWVR2750iJeC2qM/092wfg==';const _IH='87d7725e9a3d411c093a18aea5d0b10e6aed4dadefea82d6d6dc58971705b4bb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
