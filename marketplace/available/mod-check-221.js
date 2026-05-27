// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p/ruu/WHuJ+OEfam3infEc5nQguYKEBoBZd6LZslVJu6PNtIyZyCFuQI4/110IDlmIkNddbyKr2IMluNsvQ+jOZjqdG8EoYemPsATIraEIjszAOD3GzuQbu9CFjjQKco0M6GfBxgCi8iF+F2mocORv3brCEDPjsYHM2vBwTD4ToC5pbgQ/tmnKwy3cw0+7Z2YolYUJTFew9rx31oLUijPeSQ/uQBeY+Zm+wxe8RHBtu4SiNr6IFvG4Lb0NHk8CTRujZ2ek7ISmqPLG28BHlcEUJilEYdDKX9WwCViD5zDp4EFTyxH4WSsHoRzs3kjDuseIIZlfMkaK+95IbxmHjethn1Fd8Ru6qyibX0kVQO2JCnncr/eFNNW/L5ZdsTEoGyeJ4e+aJHs1aQ6ejzWY03GiPGVxL29YJPru9uPmb+v2XdKE4+AfDpabwNAuy7InEXJIL4rwEt+y4+6D3rbxcVfoWYxsN6lGRFFNZVrNllqnf2CA2u3yQc0Fzs9q/BOajY0wMvnQGxNyxML1rsvRQ6M+NrS3b2NPbC6ddS17i67obBe6g9dJeVYlE2ZI3rMa0f0BrwSfjjUP0pIQOdqCiLX7vBJQe37Hvo7kkHEHdahedDovldjpQ2z2seyjSsx97zLkRc1FzKLAbN9XrM9qYrHsozg+IjbYmgpl800w6BzM9NxLWR5bgxSWBJ298uX1vof88PXgsVucBG5J59gC7cwfayk2Gx/0w/T+6+dAVEl5xH2pqEB21GmSRJN2o5+u/KqfcKtJs5SgcvchERRVIml3TCE1q/y7DYipye68E3NG66X/D+oepHJc1bgkH1n8CKfkMe6V0kG4MqVWLZjWFaQjOWexxohkBEpSXDnOzpkLs42gtDIre95v1bSub0nOJ8iH5Ngf4f2yHXZaCSbTIdiISjegoPSgkjC6u3fcQpa7TVnCLW9sxiSPzsb+rCSppBCo+X8AzZBOGr+N2yWGgofckKL4f90gOeEC8dqLm55QrE+5f6nF8l255O7kDaveIJZorwMf6D2Ys8apGBG40cSJ0pFCrjMAWbDN1W8TptwVBx8U31KRHVOXF5Ra3DG9tNhTW8AyRXanB7RZERasuOMxJYv/MHdm+JA+5eXiLV46ZElnyGK6S7XJob6kLdbD4QwEnZNtFmVAa/ryxiq2nCdWd1bBUpfHqzmrjY8UGdTwQj4KaJGfdtC2fzm/K/04JScrUOCH2Od/Bj/HamJv1uuujtdsePPWHGFHG0H0ejtyTn4WY1ONq3lvOKGL0o9ltONVnMgPi4Zb3PmgIvIOHE+WGPrsfQ4IXef55Coobrlok7xCiTfds+rQeBSyLvjOLq/azDchbb1ycSFsPbJFxfQEkw+b3GGWM/fTIgyR8f';const _IH='116f00573949beb631c8843678f637cf5cf9f57a186125157033ab304aefe464';let _src;

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
