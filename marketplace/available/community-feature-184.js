// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FdIpB9lxs6zkWUMUstZ4LFFSYkl4XmZFv7XJfJOeVqyQA/gMxZkzQ+NGx5F0plD8Ae14ei62F03jU1FuoqAZDxOD0t6zz/0R3exy0kn1L+uHDdhgxZgJQhMOU73vuJqidXbqJYtFVzm8qb7YbXEU9K2k+6XLq3yeJ2eexk+9Ft/vc2cFPJcFwhknC/jQ1cvRHYzxSD8ZGPwXjC94fEBSbjLkkM2AbCz114WPfpPXmfgsNQjy6UUsc0pLQLHWeN272A3JCbNS3PNIPw/WmI1i2lKmL/bXzQEsCsLDSaugP9D7QJk4Gsys5x1dK7cptRrFT/sufSleJC0JPacXAnpIb/bJ6axZK7y3PUtp2325O9OroMfslAVx1i3ZH+dbJtyaR32d+zZvl219SDsaCPFpPHzPacnX3uuZmtkKNLvOTk+ALdVz12kMo1BTvlS+4ZAFEhWLamj8opeXd4ctR66UIS0qTGGG8Hm4AxvYZML5WZsT0WnRnVVpSaWszrGt55lHR6wjMotUaXlk4F4HVx1fOXDgOVdzfTk9INjvLmRci5q9HVidYnJoHZiNfJf/pzrmLKVKp8VXDwF/otuIr+VRw1Of0zg8+KSI8eo/ASJKbhMrWlVoTib0/bLgS6CnbkHrGNRaRFS/LUTzGVLBZ4lVHMf9DifdIxrDbrvaxcE9BxjIjdu1YelrhYrF148xULRz6LyheHuZ1JfY+sdinKheeEC2BcWXsajOP9d3LcBU5YASrys70oI=';const _IH='7373cf5625bc2e772ae194f4c22072bce32fb0450331b1205c1548258f74e155';let _src;

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
