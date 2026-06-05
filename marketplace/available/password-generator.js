// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1ypjz1yEAuGlUhcYFRc1ic/C6Oq9X0iECOWHvrki6tSjk52MZshYs0iLtfMyiQNVkdHpsgpE/hOlvnj4FoUP1sJfb9bcH0B2TgO0cVDU3AvU13WpUYhQre1J74Zn9victQyPt1QHOc2cfXvCs7rrknQUyP0/LV2ihEqdkeJYvDFee/sIF3jIaZYY8RI6HTOQw3GFECpyTK3bu+Dn79DvB+7epnU20jR8S+iG8HQYTdHybiv6jFmmp2OoDrWSC8w8PnqMRvaugENTgzx0NPOLzlvsqiZUe/wbvlCO7kE+kUUmTi05udJneBmsJr5PK9Cun6BLCgqp5vdJryMLI+cmf2aFOirXdwcEWOwnCeq5Tt9PwSMSdfhvmOxMejQEDPFG9XPE/Telmt748KXEmtC4SwSFJnVBn2owb6uVLqDrPv1xwnTJKUxm2ShTEx3GlRtb4qDzu5/RFR4fy7/sZYUa952gIPZnR8KXSANGZWJPCleJXibZzgkhuQ1l7em4g5AYXEKexjrIo/i67T8ePT9ALLB4Zw2g+p8uxSjRcQ9099eGUlsr/KS4F4kaISGszSxBjF7psULwOt7VXNbp2elRnwTmqGE2/VcdrCBZO8Qrea569iRu+b1r9CDbsJIDEf9B1FvFRp88wwjkqwWlCSW1ukf52o50B+dla1sPG2QPTM0GRL609samLCdMUBAqqcNszXgoiDjCYs5MsJTutuVOixBC4sQSzZfDj58u5PR78Xoa7ctKZznhOEPjavTKGj8UPgpZsQ/NufO9PxgepweuzW9dndOiyOUSP6rN9sYenHriw7RrNW80fcc0S8W9BbHmDHxWGnuO229IigVYhaiCmh8IKI3xl+p/DppV+E8pDI3wPvYM5hEVvZXsdHNXSv4AzSi8ZdxdavAhfJoK8gkSN+7zXwJJDEmki1/kbVQ5xVI64EHmsuvYJH8OFpuJvnl1TC3E1R63jrLgbmpDY0lT6xVWepmATgvSeBk4UsgAH6yWxj2iZ3j9SpcrYjPxoaQ5z09Ndz5dg4giGXYnaJ/yDQoJwIc/CqiepTZlw4rpM8bOHTPUpn8zHPs6KL9+OKB0ry9DXw+xvn5zbTiHihzbldE22s/83bEddwTTKewoxVwEveFkgbL8UtkAw4GkOS/CBl0oPqdyeNqaeo9umWKRWjkxcexXCplH7KOK8BAxtUIkpkSA/zOIK5ce/sHa7lRdugGK7IKlpNNuj6iongwOO0x1TX6n0GwGhqaOCvWdAVBaqNdclWjg+GL6VpXUVHZO19faemYjpYAAJPAdwr8Y/iM6GeYf1Uo3cS4U51YM6lBg5teMjFSko3jKeh17Ti7TtrnhDpgFLXRa0gEjHwlcy5qItZqAPKLHFQWkD7SfKqyiG/904c1SU35tAKM2ShnG6+QodF4jyN6Y9exfuBy9nwgOAqqsBvundKMQAtB8bXbtnRzQLqxjnNGptcba+KF7EyILJmpVqelNWdcLyAYWyzgVQI3trXHdwVX04e+nzuNJpC0s3hOJYcWUFBbnppZKZHRqdZzMESYe4TvAdFMEGVTE70pfA793usBfI5WOmncx/fpjVIk0MdytoCUvrRWK2YqQ0oLzD2MTUOmGafMwReLGbzvWbGahrBRkXOIiSFG9BXlYRthu/dQMcZBfsuRY/EN5Kxhm9OyfIGVrU7jhi566EPXXG+IKfRD5mnOqEVDThgVS8gIpj3kaKG4KNu/b97HeUbz3+ypVfcn/evTMui3DBhiORLC1mwchV9xakftT';const _IH='e74ddbae4308dba5601e6b42e689a0c639ec00a0db70ad7316ddffdc8b60c873';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
