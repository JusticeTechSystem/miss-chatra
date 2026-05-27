// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qo3+X7n+XUbfk/NZNZkGB1PQFteoXQr34FASuYeuyRbWzMtCOfD8zCx3u+pdKEEAG+0MSD4WkpkjbuHFtFWjfuPjcJ9MAtpvwD6ghW/c9ci00rCBAeMOR77OmeQHvbA+e9rZ3V5XPVVU4TnKV+NbEWUBO8zXcxGAzEyTPeKd0+rDOrAYb/ovl4ABWHGU0Y2Q00gKGenh3poxC6QNZnhSq2A0bVwjBiUIS/KCKEnhVn2nZbbMsnmnK5gwlZLjG7tIijOo5CA+r13f4SxiKf6vRbbpDCpIlKfLe+cl1A6P+yJ+QH/n9Sn2XasstX7kqnQibEctZiUVf5kYg0g4nLIDRiqtt/1oJAHZlbgYorp4m1r4+qLMSky773jd6K6Z8buBqrRAyL2qhJUEO2s+FIwFbmrQvOeJcILSQSJQ1RV3XsIxnyiybXmdyjIeSihrTHHZgBI7OGV8fJF6VsuPcFWu/UkFpO0XSxr406rUveEltOyXSQd4BLI1uFhCDXWb79TJ6KVAT30qjtZkp8hag/ubdPc4wg6dWqDs+rko81oSNrkpGJT2I00FhZnjbK3cyK4M1ZJk3t1ybdGC0SCNUVuMyUvsx6Au1imvWzkNAqKI3gWoXHD/ycvbx3xqBO+35Cnx6/pkVwoX/6zLNmepnNTBRvhFeBVPv2ajtqyp1p2hjXyB1NEidrft3Hgzkahol4c+vvtNIVm+OqvAgCkrb6iJUJp9ouMIvTsPXX78iyMsRZfFb1V7Y90=';const _IH='57d8ba365e6f0508f9d89074a5e0c427bff83671924ab4875d6aaf55cde92d70';let _src;

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
