// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g23FFXS6KVaFt6w5jCtgE/6WGjVRt1ycduDjL42L46neEWJpXBIVgh7OZTYQM60mjal3sM39OabtGkhisqHvb1AdpvYMUHL9athJeSnIgGGMUOBKWm99I287079Vk20qOsLeq4qp8kRvi10u6x9jNaogFLaDsPuEIoOCtfhl1kSD0oHKatc0kDGzfRZ6+vEyrpae4CCk+oIDu0wC2M3xBVkcOZxJKnAcnnKC8L3ImG+UF++2s1JaKIwChok/xU4LwcjvYYsGI5Y3OP7l1esgBWyC3LJsJsbURssc+Ijhae8KERgX7T9b8evaAthMX35sR6EGRIG2gsQsQyTqXxrn4wEZdZ6avvTMonBx5SiOumy1hYJftZjxjRqytxPDNeaPVGjIvLsgBc/7eXdP3IQ4mlDulzS8XYOHhB0NSQ5Kof+r6ObEq197S8ZP+ppxITPs7BJgL6M9aOGeV682jUPgm7i0k0Gzj9vCsEfeJC/yYD6r3NLC+tiSfMbC4RIVbhERJIkZwLeVC/n6WUPhLK96qXqKRh5UQBUp8IaWP1XUoGfTOj9cBX+Kt37qLvENdOFXe8DQrkaxU1LqkAS8LtzJrXeiU9QButabbfGb+1Lq752+vqKoWuraxubv4FymbD0R+14q+fUXHvvrkvyDjXWoP2dhiMk43ZyRqDrzG1s3cG3GfCTRfw+np8jrad9gO3AvjDq4CV9sBEqWA3+1l1iy26zKXUKPhjCkBnbPnu8dip2ckaff//bqAw6Tr+gWvJW9IKQ6MEOmHzlBk5oMnu9avSq7ezqXmJqJM83dmxkTzftyFzpOaIrQL/bb/e38pM0/5W1nw/1y7TbB3U6HY30vqoXaPHULJG5QrkRshIUI9S0EzJISGrmAN+eG9JTqCrCFrjrfM/P1rTLvdmWWWxu1/TWKqei8XlTzI3F6gw3owKfuKYiyRxea/DJRvPqs0OeUf4Zis3i23i9dzOORUokGH5rB1V0xz7gK381AheEI6CUv2Yg1FCqIc8paJb3d9+d3FSmB3uzZoqVLhjdCfYHXfjiyq/He546XOaLlyvcnhw71p8rAOzEh5kiUoqF9tRyk1sSx1lLPfdUE8WNV/WdAwarlFH77Qd+iSFxS8+ACMtbatcAthTOOv/RUsEvHqKNyOvSBLd2Yk0nLr4OTT5erWa5aIXnuLeD9uwEyP8wxJJUEht7WUyJG7U4mp1/pPLk+ZhIRXunwBmjZWwAn2jUv1H7AmPVP5WMnxyCHVuaW+U8CT0jYTDMA8zL43+YaQSFyLdBAX8vBDa9HfE0KHA5fH3QdXHair17KU9I4cNt7P25agL17eEfYJE49QtphiHNU37Etj/bXIQ6n6k72FNKrvnQXGalRcL1DcAWhgCYB';const _IH='dbe6a97472cba9c429d5a542bd18a0d03b0da3a5652a87244d8ef8a6e2997885';let _src;

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
