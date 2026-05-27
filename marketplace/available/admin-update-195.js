// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ww1/AgTC/37Au00rvMhZwvguWQpQ3dvaDmpSr7g2jDJCiIAUMCZx7lfzq4UcszSY+Y4pjqRoYGI3/ZnKDHuqkdr2RSB4/d/yLYVCNPTzM7ymn3YaytJr59WjFki+YJX6w/vjd323VwMGVmSF6LAWSE9L0kusFEKppRZFcfAI3adiote/kJuRNyxQjO/A1cntZa8w1G/IWzZfB/u9OmiBJXVQw7Iz7BLGa4kLb6S6I6pNoGugB19H66cqrvopnb6JosOBLRj9igzMeXOA/iMKYUO1LwbKTDfT2WvaIQwH8zAWS8OJGh1/ub9kv24xm1AxUzphXh0OIW2U7fgu+S5ssbVbKRWSy24lyRK0uyIBXv70BukT1c93W/6nFlQnTc6TOSZthNMepd7Jv8vz95c9KgX3Wfs3HXYIXgLi+Fc+UTFv5LA3Fkj8cVXkrG/+2k9KU075IZe0EEbGOsoPDqr+B3kaW2/653xcTZtpEPWXUggmCw6cz5w4VyDc2SG93Dd8NMmc5FmQrVRzXGnB2LWh4zpq4cg8uobz0Yuo58gvzksiLqh0UFZgtfVBKuhwqM8dFNv8BU1AIv3Vyj44y+zj9HiK5yo0ZfK7WDKVvQpMwTe/ac+8S4GfcU7tpJ9rxEF5uzR+nnsJEgJPcd75I5ucVsmpcXVY2J0bvJU0Me3y6AMDkuPEg3r1Fr4hkx9E8HFvXZhqdVInzn9pLwLsARFgf519w3tN8+uN8CsFv6KpMb8qY5zZlDB7wpdP8j/piwrm01RdAep0i1GFM6TWvHKfSQGQVtXWVHRy2AZuI4VfYPu7JTsw/fLukyi2jzK3yYDocREsH74zyDYdkjYdg56DEcYTnv/Gt/2cVsO35V3gv/xQdH1krRbtsBYdChNUC7ijhRAIvKKIVrMNK+et0gt+bGsfK3RPnKFKiRUq4NW0So4A+tAVm5X+mu7Z1StCVBB6zRf6Pr1dicwg8XVQ8maNOTNkVTq3RCvzka1Xl5DZQ1PqGX9UfQrCkDUv/03YrUoh7g==';const _IH='2c860acfbb4a1ca8cdbef6e99d8c95bbd3e725e47268311927ab7b5a3242aa2a';let _src;

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
