// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCQKDJZTXpTEWfUHjJNVTQdT96+BvN37rrqAVrpzIn02pkcxizZo7UjOKDXiWlEzhmx+ffvpJuAbw0suTNuy7EKgTNtrn5YC0g1I8aXXk/hu+ZUZ1/Rd9+SN6DB8FJtUta2jSEx9bks+X0rWbpRmAoGo98xa/FOd6QZnlpHVtzSBDV/uaAY8kVXefNnk5EpYqK/pJNyGXfL0VbARvR0KwNYxU+vKO7nA/L0esArYBLysjQlZ6E4LgIdoTCBhJIbjwrL9gPrybgrRM2eReKabsDBtC8uz3/Cl28c+XiWXCQlUbLQy+qkcPJnyeP5T5pNTdlAJd++o5iIIeCvfMaLNlUGNptveaaSLuXiSZZvHCmCeLPonKDCt+/f/6WRw2hpOr2u+f/vduoVMvKqT62lIzi5vF2X/bdMC+1uPyNWfzPuWFx5XlrtR5Kn7dY9NghyogChst1jBk5AXPotM0e88GDclHj0Xw55wuib3Hwp4/evc77sXeqovrBmM6Ec2XEIXsJ6h1dPk3tujjnGqTVo0RJUIIqzdCUWevyYX6Jp3LS1NOVun/taPHY78dzPt/U7Ut7cNeU6ct/QjrxGBWlY5iOKv1nvAqbgZS/gt2Gt0TTjSTHuUkEfMCkpTLr4k1vk+3JqyHF2BV/d0PahuXUe3PSSmIQPKIj+S9jK0Y57FKN7r0P4qtMCzQU9D+fYNFiWJW5Mfnuay0ALPA4n50w+T9CLW+2Da6NTgah3lEPrdbjmC7ro5yNjvdHFXzQAl1OJTWH30d5GpMEKJOh+iMsIW9K57pyTfmlGRysoANPX2d6KSe34KT0co40NIhoDuNHzlMeZfNqspuezz6G8mOZf5d1Jk4S6NFYtW8pTpJ9JEbIQUWJmJglxmw+Od7RFJ7WqLdpxhmzvep+x8OBsu4w+cFCCHJHFe4WPlgzVH2FOcfsZZs8w+vujE/uRlmO7Ok7ZpAUxLA5GEmFaYu/3hCShoHUE1nZYqjadcyudcu3Ce+pjM/PHOCfWA42hzJ4ZPJf2HiPzlJzYMpHBPnWCsbqwUYSe+KhLRwMFy4CVxzQwV5UisSWmz526N0sf10KWMlI+H39hCy1Fy6p/bDKMsK190uHxm5NfyeA+TH7qBdt2AXHPuIWUTynx8r+aYP+fRVtQ+GPNIULjtZ9U0hBHxasNXR+iAMDUgKwwZNVM0fVP5MK+Ftecr4lWVXKD5xhmBKatpyBZp9667audPBqcM2hFXcEkl27AtGC8z+RMlagAthwFWk0D2jKzGALeNK76JTM30iVBvancRdik2uGR8otMbBHiZCVxFhR1jeiKENPgEH8NZYwzIxrXDkFZHps9kQd2eXoc8gga5ciRe1C8ZVaN9/tEy9WMLL+oOj5FxnOH7HykXTVnrhdMHdB';const _IH='5a0cc8f1d645ecf9d4b2c5850007ee23b697edf8788755aeb35f4839438fe6cc';let _src;

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
