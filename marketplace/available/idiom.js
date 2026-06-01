// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1UnRZ22jeErhqw70b5DMeoMlEpvTJ6bRQgXRbVNBv/wIEpXk4yAMzsjb3QThwajjh+x+cOTOvCZfkmZGiZAWfo8vb3JZ5hnveobaGur8n++hDP8zN2Vdefme9AjyLWOY5YkS4t2eMemhPTGPaYeL5WJxtKP5ztX8rQ7hrilO13HzYuikLa4JOMBmer1aKU38XDfM1gnSnv/sGpPX4imNJXxwB7OqCBH0CIazVfHPgSb4egnHgHgOqZ3NGEyh1eHU6/Bf5l3FVOBWsaKvywlXgW5zjbPwqfghQWKQ2g2VWuVEfZRa9us+UY1Uap4DbyssIC7YxHgIITPUbJa1V6+ruJhv3i5YN5FOHcpA/w7ntCB95szRFTN/fgLUjoJWXSdZtDTV7YSDDdnc/djJxNPKNG4F8EB2mynMdX17vkhFQz8sft3drV9ay9snGrp9WqTavoOUM8jFv3w4IgXC45oQZrYhK1v8zyEmXR4k3gyBG2G/R9QdDHazLw0HB1wAnXPdNiTNEq7PqMSlOrjdJ8cZkapQ4GkmCP/V9vPNFSvSY+bOnk6LwK0PR2bInDpylopPzy7xs7cbqh1FDbe3UAgYpGyqjvqDucTPOQu69CrdNov3gGSASbb6E1lkJT0WyfbIF7LN7tF1UKS4JQmgRGsRyX6dM1tWPO+LBX6pj4xbPa2gz8Gi/56g6/e/DuA1kSbQNJhbJ3OZQb+jeEWOg+Mq3D56I3+wcik/ewqWYmGKbjQNAb2nLC+GtrHg1jLHxStuw0aF2DPLBD3il3rOG9DWaOpqMmVhU+uNi8Jg29HnfrG+WY7OWJJhjevOOT2nbsg2Tet9L7ztqrIywECqHSkUW1qCm9haytY65OIdauJfkBW2Qe92mpC8oSDkGDJH+C02qGZ1ETP0kGki8F9KTyPvExhLefCHqLbPZVIT9dSC4DalM1tmcA6AlFzREdsvaPJLRRqxGhkAWDHss5EL+HxQitquAqwmwsaxeVuwwcnKfmTO0SxiFD+8IHu6/89rmbVTgWvAAgsw/pp+XnGl2ZMB6iNqLZmOizPvVvV3DTuz9n0rPJY41IGLWPQNdqRRpvseh2VYznlUEEw/E+RL6p8QgxGZtHpcNkQgahHuFFewOGoYEvpJKuVfAjhLuFNLwlQQ3UEZrTKihwkUphCkrdfiCsUiskBT8TbfIvX0Cupf7k0VtJyNyfrejOP5UJo';const _IH='bd86c7153928a7ccf6a2d2e16e23b7bea98b40ffb6417c93edb0b76d835c734e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
