// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zFuq7BBP+1jlXuaadG/v0U/TbEqrhx10BW8kMj/GhLeN7ouv87KEd8WqSj1xBhVZlkWMXJHJTj6HNnu55oeSmVw5qUvXeNx/EYzKcXt11A6Vt3R0QqCxBT7++43TBNdV3uOAuF/bt1KJvSxVjQzs72RsNTwrCh7xd8+La3rEVborNUuWuEHl//aRzmPEzD/0hA9rhEz5dinOWUd1GfRxZMAtJKVtZOIXKjFPNV3WYsA/79jbb0lzZ/3sYufdkf+ds/AX68ScvnCxjPj9WZxizQhTBKSsJl628c69/0tm639JZU9G14jiQUVdmItAi85mMi1dk99chn2fEub5NVocs++Li3yd8NsRpHEUZ6TFxtPJC77fCYYdFYceSMO7oeZIFJkV3arxy7sLAxVHDDtVT3CXf1ZBVgvUTdd401NafBHyxs62boFEOQQDiWMinD4VXZudlS9neQ3i4mqvDKZ7ZRGdejhZLlWafZ/p9UYuY7LNQzxQuHIENgz+g3AKcPMba084wkePtI3l5FS+b9DYFPuTch/Bd0LVPPZ1NPqE9tgbuys+7Kb8k7ic8xMpJ4O/9SNWqcKTPehm4uReVnmn+/q7TsctlvGt7B+8tloNIspIV/DL6onrAtThSq3bA8SlXD9rmqVJrFuLNMn2DCGt5jZNJWo1CzcTjw4RxJ0puuUbpVz3YtB8RqqrYkuR49A0BWLXBRIseey+l3n+y4nBPswwdfNMl56sJuWKqJNGCFCrhm45Hk+tnlTMGIW7SDmWW0yB4u5VHgMJu/IqalEiqHuApzKS5w1graj5mqNeItwBJseOF87l19f75sKJgRcdsta3w5qLBlHehvLvk679clSVvkI2A+DVgekiQY0Vn+YA3Zw4oQH2wLwOtXIJGxoP71z5lpl5+zNSmmUGdBIh9rY8qkHtcgu+PXUMBnDInx9Nt136n0VemvVsJJlJIbX8Ak/2EIeGFpK406lKf5r3dHjlco6RGj5AaKMTecuIbdvXJmh9KWt9NnOt2vZS';const _IH='9c83124b5c3abbd0662f2a5c3dfb537aab4945cefb672d63279d145e4c6092a5';let _src;

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
