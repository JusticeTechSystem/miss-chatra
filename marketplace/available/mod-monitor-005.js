// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSNiHKP6I1v5czF/3NaMaCx5BawObCcn8KHeaofKVqIUL8vCMbrZZMQto+odbvRYUw7qTD/4fwsnrV4arkeO6TmlEKn3xXWD3myjJzkMK8Z3ZQQQttV/F6mejLpO3StM4dcBTINLsvgx/0NQfndkr/AIj4KylnqaVA3TEd21PoXLXSZprI2Xw3ll7KAVcY+NEq7NLjwiDyUCGEmJv1uP+JRo40BHGxxi6OMAH7GqvvFB2R0cm68QCbR8LGw5FY6s5ZawL3/yJqnXH9PSGv+2oqtxj8iSz0Wvu8WFZSk45gPYokYd3aXeckhyNsCjxSuux/ltQc2P1rOcsGuPANvGvDhLUCD1xIs3oyCJ50zvS/0CWax8J8acA91hZZLhamzgkm7E9x0odaAYbmP5Xw4G+FBD5UPE5idPo9lkCBuDcqq2CPby6psMEJq7bA74PUYI9TMazq3G1Jgn+TdmGEW4hflg6t3E/1aujL9uvWr07vBG7j7D4SxkIJyodJsMSZ1Z8d9ZsqOUZxNYhbDPpDegZJIyvC1OEItomK9mi8cluYZ8ihdTMRSRz9o8MPUDQYX3jePKIDmcakXZjIVBdbQ6nEYmWNg0aiaZYX5zvaebsl7v+3HtGayqg29sByKVHDziJinVnYuKM3Hwdc2kWKyo2//snYQH5fHZJmF87z6b1pyHPkl0N+QjZEBY3DOW+q3Xc4lbyGzvk5XTZoLCOMZ7Ud2eP4Aj+Stogmu+CyHrKz9iLaVZ2x1Ppkq8RIo3g1jmVKfWMwWoWeBrUbbjnw4BNLPkozVOIYins3vSRwtuKKIuoYrVLI8v+6IVYZCfJVP7veUB22MedbR+tiPz5rylmbR0h49aC5jI4ebUXDfvleLuyrKOl0aNF6vTGsUa+I144x6hmJYM74bEWTLuJ80KASItL0zJU3h6mVE11cVKsE4x1yfDYbicGfb3XqCgKJ/JJyNYQ2sKLhBHigl0hWvoBHB54Av0Zixgu/j7ifSvmkAkDkh3KPLFdNBM0RVZ/CWpaUq/E2w1NYKi91j8bfZghAEEYwTSJK4x6GUu0P5MvOl070R8osiNAQ9qzKrtTyJVgZY9vl+z42scV44Fqi6mQEhpn4pEpKiUqEFWcnqFrY/Ut/Uad+6DWVbHFlJ5MWA6SP68ttLAYTB0iFTymQvdTnGGn6XX8KAd8/mjy+Mm3e7s1IzL60ZDqiB3RmKlBe+TPIy8dRlgIQ4ty+v3DyLYMypfmGtORJbEHe91IKHeFB52Tgie+GFKEshiMMDTz9duhhuNZoWwoWfXCy2E+tWMVtW3Z1DbbuwrPTy8248FpnubS+4AxyoAOAMhso0VZsrr6+IXT/G5IGkPvOhWNcR1Miar1m1LxOgTWs3jI0hbi4pXS+UEpO';const _IH='a9416afb79347ff80a4a0b269bc939d2c4db0aa2aa62892510549c9d51aca728';let _src;

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
