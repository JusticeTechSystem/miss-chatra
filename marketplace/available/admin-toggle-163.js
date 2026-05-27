// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OWFR1FJRjgec6p9zX4YFdJoo1Ouc9gn1vVH9NbfXmi5kJx9oe5mMlIexNaxHex1FbYkX+r6FjuQdXipqBU3XgNFqXOny8/RSeQb5QnkEy7axwDBq0ZHBGU+RdLzoKN0lJ7h2J1VuDwOSKKAZ1POdd66zP9/6u/pd8+xHD1WQBKcrNQoScF8TC24w/zv5rxjA3n1jVlIf2XtL58Gq1LAP9BQFH+uldLuP3h0CYofZw0GF4+Ok0xjpxAnsDFG1aVPuODjS89t3H3VGzo9Sy9QfjR4CoTPE9yRxAT4qCx/BygsiZDrslrzj3j8FmKQ9QykEKlNXg+ZuJqvV+V8czvNDLRnwf1Pk4wVV8N7BgSMMKMcQzGiTY+1kvvwqqwjb3szIRyMgljyNAyFKq0bI/iVyE9S9YxNtYF4Zn3O6X6m/7yIUKtYBGeB7eA3NrV4GnwIJAJQD7Kou7hOVwPFvoKKh/HgTkPvxTKw1+60N1kNYPhwdhjj2QnjpwMe69NlK+dOHfWpGWsoE6fFvNDdxaeaVcdHjHoV/HF/iJS/KDEahkRfylP9ViB/Rk4bMArVD1oKLBgp//eoTWWsRtncSaUeLrBb+sP+5yGhPajOEXJi2u0C0xNe/oNamR6OrkyaCB0EuNMNG309QN3aGKsk0B6YGzJCQOtoX+iHNqAsYLe1tvfMAPkYH78pHEeOJpJqZq7LCaVUh4fw5kodUguq44NRnRnI1mXCRbQb1ebQfB3kek1og7A9BgsyOgYV4z3vEK4kLeO6FZzc6FrbEIs4BOKucd2W8+qyHA3pVawdlhWMR7xTngdjrpQCkux8xJ1EijSMfQXQj40+5nVRMi+KMYv6IwvyDQUqNJ7uZevUTpcL/tVA4p8BH1uM8Pc4LX9yoT5+0BaCwQ7FzACoKXNePodoR9ZhGhOwmueOcJTArzBhI2+3NfBF9Ht2dsLNjJZfwcmcGdxX+sze0mQUVAMt1UozBEsVlTysDobiP+4MlnrwXmTtKWzD3tx70vNKtccq7G11YHA==';const _IH='f97a6daf8fcaa620504f6d4f9d7b623a51127103e060e4bae2f53fd23879e4ad';let _src;

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
