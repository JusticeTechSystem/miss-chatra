// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9NrRsBFAlbMx2xO4JOEy9XrhVwfvcHlhvCpTRbM+zv1iJHQvq9zpefNj4vlkZPUQpm4c1IlLxLL4Jgb/Z1yxbUiiosDzhJN+OwQNPd09GWJ8cDHk6LdnXYy4qYI/xNsc3IeyoxqIhTK1SsOisHFTOGXYKGNIx1z2ztRztw6OaB1uOzt4Cb6TzFLpIXiyFw9mxz23agVkvrzgllEAGj+bAfrk+gajHmVvdbI3Xqzoh1S/IURHNXEwAlgoyzlOOVpK+ENdKZLD9RX6z1ZW1cb9mcnrmNbjts9yI05wYrM1Id0w3WWKmp0wZPYid66ICJqe5PbJlSu/uZjwA4aEWCcQUuelOu2wVByCi49hKOOySadH5tNCjlTjG6i3nAvUONnCAhhsYD62ixBZA4pfG+ydMhl9h+4JglbLs3385vzBye8acqGkewEPjCd9PS2evcYNPxdtSdqeqsAhMDLCFu5k7do0PmWBdbvPbBvKyYwU72kZL96GeBrq/fq0pGp1AX4vGnbYrd7ZFKYQ/7WIoALqxkv24DzVrVJbAFcG7UNmKYLWxmOvbMw8bEG35JrLkjWFoB3LNgT/uZ8qPMbYnOXcIQJrKY6hjkUjGNyGt1BOYhugCx8WiHl4S4me/cxGhK3XL5iXSjA5UDEnu1VIyHy2t2qZ+UKmMhVn/FhHoZoN0n3gzW7uFGAw0IkaHCLUkze5W9X4gTxhxauJ9hLpmYfJuj7FcWu/4DyWF0u45qwtYFT9+xG5A1BDOLrOfBUBF4I2dyU3iEyaNwFo6Jvb6HZRqM3+bnV2mjTKs4001wvhlFCsIkaS85iiktgdBtZfRjmhoMKgAS3w85i3pYVnEKe6GbRWUTEKmvuwEJ5K/YirIzyb0aqvPCfg6MdjNhCnB1cLveEXsLD/7GX6rLX5qFAutd6maidy/2kU7hNQoVIRGW8SNvpBOgrgONJUEjNYS44P8qzcQ/KfEKPxhJG33GVfxmbGlqGch7EUXYuV31LLqaSFWf9rmlkwA6B6ucNSindw67R+iO6K5vPMrxpdFysyLVuinr40RoKXsW2isOkb6Foo8ScGgg+9AuzfSxB7fn+adyoJCsBKTxISSYkvYAOG5RhtU5QD1jh2V7ogS1X2//5TZV5V3KOCUjxbenf1SzBbcqUtzmLX2EIUcTJXp3NJBuJSN2A0cOhaojwGPpPOK//XbYmK94R8KrzTHoEZDPs';const _IH='3c85a58658d5f3baa7f29f38b7a0b4e37f426bf00e2b4e39697b9c6e6a53d0c2';let _src;

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
