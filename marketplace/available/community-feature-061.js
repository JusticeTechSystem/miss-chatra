// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQYtGWmrnlpAqCq+NhzjSG+QPMLyK3LprzLuKsgBFTiA+GQ406UC5vstIGvrSukDGT+vHAHsaQHWEWjXqbkgLe6kTlfhGz/J2ki/wqJ3a8e2k07Ey61VY/gL9IWK6HO1XyT5urPD9R5CC+QeabDbvhJ9kP/Tnrf13F6zI5Vb7KxbVxhYhXL1Qgg/ZmJY9z87pjpvGcyNs2i2g5aSLHJ49bNIKS632DuCB83oAtk5ch8J3CrsbLsHg3u8lXYo5y66BvfGN8at1L5nldJNxxFtjhWmV6lnAnkOnBI7hchVyHsr8egw9Da4DbzZzvEl+Xb73qTf/jvZmyDlLILS3VMrkSrYlm0eGtRnD8e9vuiZQHoGGbqLva0Pv4gntGdggFlZnEGi+7Fiqa889FBQZudFUNa6Rvn2TTtsyrnuxVh6U3SN7tUhTzUEEMenxMSJ1W2YnVjyH1wYABnhviuTRtDDz3omwo3Tp8uHYrg9a2JIiPdtArfRWRjOo/ZUourvXempOlYMZsXSpMbIwT84s/ih5+PVQltjnjZEQn3rENIpiVixC/OWF97veM4OyNfEemeyOcvJpEd0mqPoFZhkQ95t1s/Cy0Nwz1JvaeSz0fd3h6AZ4CJLlukCVzo55OeO/Toj+KltfRP29R8AyPavtO+RduprGN5kJyvH2GbrIa0WbsBOhf8o6nFbC9Ij8nPBKU/NlKHLOvaHXIdwQ+vjnpZd3xmUW+1w==';const _IH='4f731adae07deb956718c578d2cfba0833bf3f114a2e13f09335f041bc3dad5d';let _src;

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
