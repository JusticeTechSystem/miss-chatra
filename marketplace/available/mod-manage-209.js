// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRa8+KNYl6tUKC1rLvWyIllmPoP421fxN5+968ipbOEfKs+7Wfo28F1I2GymvRwjtkds7HGPBjxQaLdUOCExvFJq+5Jis99tfmBR3navLR3vcoP5AMcwzUAvojiRR+XnOnYpl/5Us5a+QqKvI3wlB/PtrkYbWaqEMdvuazf0BT+OAIvZXwTse2zolACC8boLZh/bDdAY2cd4/I0yvpuGUA2sPohp908QIVXOBj2jcGgFJvBCD5IzOG7Sz821aE/gTYpjYGS3XN1eucQEsvtyw/z0hlDv8GSjNGx4aZy4lHNArd7uEVA/a04RYAKYCZudMl4q1Wvd8XyHgfZEgg1BDs6sNse0Fdj90qUsEOmy+pQ+oSyGPFjuzqNGq9CnnxWI7+5ZHjzy1BFlYbK0WzCrCSrWpJlGMWv7l1UsfTqOD5gwvhb7+piaynFZhes4X0c4BR3/cLw3YGbM4FcP4/MebP0CwC8ldgwUiJesJp+/Fqyi4uDWmt5ineLCQUjy6IH90RHMwNP/iWdDqBjqZ24dUNiK67AmP++XYjzdBJacGpyiKFTA1Lx6O7Wa3R+3O1vnZKvrWWHrB1KmOMjKBmJMbaoYO1B9SMxavd21+sm5Z2lucGT5qvrbTu2KR5U8mtz7eNiai9v+kHDZixHHSKJSYw9dBwsQZeX6ot9hiBhkBl4nZ47pGtm+ch9nUz5f3VtgmVAPa43uHgxau0O2Ztxf7zMN5qFh4NyCdZ3o2O3dgLgudphQCbR78meiwHmMp5srsSYnhNW0Gnxd5e8TyJa812LBfb8cxmwhPdVwlh4dkL3zR2lxkEfZ881YYHAfs3faMlXgaY4q4IUj6cGwhQ0UMK2HcY0UIM+kh24I0gBDujKccXc6oj9/K3w9W8W9laQgPsppaacV7XJBuKPNJjlYBpFbvCFKICSWu+TZLl0IZiznBDTuAbxciPhyxhfmwDmxYDAyF/tTarYd7fO+TVl0p5+ENEpZ70Bpfpym5zVMJGda4FHSmpiK5NBFotiTGKGx5R7TYiSqFRbmQsa2Sl7SilqTgxwvCa6n0PMETUmEogqsj52V3tz9EQH7jGISQl8aGs7FBf14XkuSzDUHw1ezsUYVNQVr4fYGROswZ6G1MROeIXQkGHg20QY8DLKEpRb4QgNUxybx/QgXQI7TZIBu2nQe1Go5Ywi8ktnEPuCXd9cScmEWSg264+BvB2dJ+7EeBlGNoT7Lm5s7/tjZwKJbIfOMK/ew2lVMrj5ZVHMqJ8qjJqLNMz3NLJXsg3ciFcQI7xEyCBdHggzNSylhZXPSsSnMzzskjwwtW5inLxENhxq9iymmWZQasI2OyffMhWcZVipLza/8kjFGRa5mAVlT1ZNxc83soFuYV76AiRqkrZDBfaT0Bz0n2fB';const _IH='b9590a95373a0b3e8baf927edf621b3f59bf4091840c81fd2890c6fb72202318';let _src;

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
