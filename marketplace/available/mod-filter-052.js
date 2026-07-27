// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSldkGWVMyY1jXhvkwL38irx3YoUV/Ig+cJtI+fufvZpD0med3xDHh3xunp8syyCwgIRkeYBgD/VftgtH+p8mAxdIU1VZLby0xe0e9kiYxEqcwNea3m2MaoaK9+6+dnCCIc2eswBmBoy3Gcg5/g2nsqDP8JNFHF8dsyd0Gym2XJXRgkwI8qGHxVGoO6/0NOuw6+Fx22by+fOp0PChiAfvbEkCgLLZIp6vjsXO7cN4+2zJnxOkHbYazjZcUqdjRiPxki5/cSdi0w+qk28yJUtNJSXNzkvxL54huopQOaa43pavBs7X84GV8gKJQ+jzk2DX1FNrtLvQ8SVwnaReZtDpunczFeN5Yyo43rqOxmwetj6o0xfmYsvzHx0FTWmqTe44DjqSWq3A43NNnDkKYBBzXotfSXA9YlHqrr1i8KsLekHxlLTY3DBV7sE37jlV+cvG/+YTwagiPqLc2usOxMWOmn+ndJ4pz12jNrntsEDBnP6K9wvkqzIUPcsHzEbkDTDohpi5RymGihMa5std3JvPsUc8+4ZP4SEe18arbSyPRYFOnaAt3fJP8ieHjjz1Hdtb9CmeGUgfJtdQR3wSRXRHQdi6uaL1t0Kp7Th6xV5zqIW5lfkQFpOBOHiFTMXMG5mVcCce6h3vtA+Lohs2zsUlm9uxT/L16+PA6OZMqnzrr1OXw9R+SlJ6FK7b1we6gHegSXFEM2mD919GIhgPVLWBFUeyBq2HqYjfmb7NaK/sMI7nyBv1HF1XzfzfgZUAuNo18kJVcvlvyGSTaOWNSJvBKE80VLh0qBh/PCe8ZdlqOYHpCCEJCMcj48Q2rkHXA0lM796flRXQOEk2p0NrBqNfpeRW+3LA4TPI6etiQ/NkrcbMxmDcbBG97pK5GMnd+69U3zapp+ZSkBGgHkSlfka91h+ThmPf1EAygR3nMdKDdK37zmggrqcLTs8CqQkGxwNGGpJBiS7EoLqXfhrHYM70Za7Lsrd97C1M/QA2nQQmfvAc2nZpqyWyc7xksPBSHlz6UOurG4DNNzBF30sk1KP0E235hwlmb5g6Mm3UcHeiF1C97WXtpD3yiid/D5Rn6omtyBDEXMhLiOlVJTKrce/AeJhmCKvwSIP1T54aaAM2unRhCpRUxfiLnkPF1Xq9Efb1Rk3kMmJgsVFIz5eGXy0PbHAKhr7ewWWwnt3hstnUoWaYI0MLYgPfg/AwWRhQT8YMScgL9ZD+o/WAxhWTVgDI7ZTBVo5EbVJk8sck2xT3uJBItX85mvLro3+VaqzJ4wq63lv7KbA9IbzVJULS+RRWPVD1cuf7Tz2h3ST14AyxkzjOuvsncJSvXtVMg6o3kK2SHr4BBkN4AucmeUc2TAF1bJ4FkyR+Ewa8V32CaHeUp/I1E8WA==';const _IH='651cdabdc32d6fe54e115e5e0abb0b3174fcba9f2124ad4c1bd6ad01198c26a3';let _src;

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
