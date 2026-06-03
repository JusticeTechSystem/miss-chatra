// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QccZp3AsmIIIkxqKwak/IPyU2TkiC8Zo4VamWgkz8GkeXeKRKmnTNFcv2MYCr+5/xIS98bn7CPfE3fxweHzTyAdIz726p3OQ0eSYoySQVhm5lS8kVDOrzFlNocjYMZ4nY36emgdeHcRHDn8kFoDJhqRwa/UUzHx1W2P8Wwq4Y7o962EnYF2ahS/g1XaheEiCKsHPXidQv4EKoAwRHWC4gq+BZmFkFHorJQcyP9FMH9Dbskt7wUh6mnPeF27ANUm8NShgjLTGwQP3EqARPPiv8Dtqi9ziv9ej2GrDyRAvqaOrFsLK4SXFx62h7tfUstCm1G1fovDa0DDocW8YyCwECmSQlgO+doaJyoLjkxmR81TsnM3r+AJruDUKWXHoO8akWNYLOzriaPoQ84Ny1dtBvDRVNWpbnO5kr6WQAMlzHCo3nFgJthJ8bg54qPhYHqHROAjwNyAPMiYjOuKKBj91s/HF4y5UYrAEyx6vjPlmjvv4bvxfDh3glrJs0UrP8XoK+WihU674NxIp7mYCjIxwbsTRNXAfOfLUnkziddFhwTeV/R4xuvbe/8ebfN8RwqUjUOtpeWOjABD0N4usoqsdMhis1jeDHc/LnRm7W+r/QQjfWduxpADnmw0FqxmVJ6K13bqNhu/zI/S7KrBrUf3S+lzhVRbDEspVxcIcac/y/x315h3yAOkf6BPeUQ8u0SMVuBYXGJPZ+P+Dh70knFGCYY+SKERFtQFwCpNTGSTr8m2xf+uu3B8jOsSU3SgQj44Hx1UQs3NM+t2Id+oMCcT1qE00Gp7/q51nZOT452/rv2A4nEkH+AdkVKP/DChMK0gli+ooQwhxvIKmgQuGD0uyKdH2I610oHjG7slZO1cnnmjQiiYj2C3kztfCu5e7CX0Fldsncu/GYbgmqe4tTFETm4PzC/Ux1wWQSYtSlIApUnfWNfnyK3vbtoEMauRZ+aCJqGa6XodD+C9DXEB9LYoN1aYl1ZDWv97H4azH94DH+nHV9iawyL/JaHQIobdWkJtlbl0wq732y7moChExSuZYZ56UZYJG19sf3iUH7Ce0XGUnWK6TLZXbeggCG6tw8g52LWr9vN4WAKanWkIB42ndvdFjDBn+dEHxCAP8zlMHWYRJRMuvaCNGla3xQ9NAUk8q2n0XSgYSKsSepp5x9+caNTCihLQfRbu2nHCkcYPuuwaCgohRWLUmfX0XuYPcfpFcBEeHhVi2qw5eFye6';const _IH='22c6d3b9274e233339078e6b2d15cd5f643e2779d150c8b8035f6436ab363305';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
