// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FyUIaPmeueMKacJp9Y8y+wLlY2prz1t8zh9UL59v8ME2YI+JfRHvMJlRbm434+FPAadEAmfiYSfGHejT/ycDALlKEMtr3mSiZzpbptMAdEw9uZwNt+codw9Wy3uyS1kTNVvxLAFj0l7bw7gCtof9BZSmAWGvbJmvVeGuqLiLMKqJgXyRjsF5WXfwW8E5tBCnKUrXskkp2e5++wm4psNB5zcFnC/XMhJuVV1EXC6E6d5pCZroMBmDtYRlc4KnZZMwZzLhAAOxn1ZvPmcayhEM65qvg7MsOEQEvdb1Q46MXXP6qZenJOeWHpBLsIUy2rgRZFcDL4lTnzmguCeorwYjAzkvK9YNj583yKkcTSEhogJ3QQyzI1NJbopNpkYzD8M0j2DGetpnL3+j+hoLTMYAr2pvd0QIc2Rim4jxtx9YhC0NOkpn56U0PKuHkILd0VIf9ZpzHc22LwHa9di9Rb4LaNe3qxzX9/seXxaRbGIegqTF/PAzNnQ5UiESI83MevWRMzMd9tzxMBc7X5poPBtrLTpmdDXZCVLO1kCIv9ZA471OV6dLknH/IJH6XK1cTSKsau845PGkmSo5eO3tPOS1CJdIWCuCuCxDBvt77z1pvw+wtpIwgoqjdkDbhuGnFAlrUYE5ZG3TvIn39s6e+rNw+C1RG7h9tgXsH1EhZJQ3dlPw2l3ozPiDvtNgEPXWHYlke+IPo4xa4tkVVwTt5lJCpO6wtCDvf5W7Esd0bOWzDnK6nTjvf/r3bI8bGugW1hj7qzNVfu0AONeb+972nR9OdPf9J/TleogXuUbXwXX/Lw8kq4VzbPd8KZB0DYt+gq5r0vtfAV68mPjcSpotr6h5xVxDu6bOZw2LmjWrC80fIrmYapqwRd66yHh5YAz4fwtTCjejjMwo4S28Usk6oNNByV6Iz4awvzIlS3IGGAYNHKQks/B1ENJAo/CWJxBiibBTSzC2XLxyofglxAbkVvysZrrWPGoKfk7UaBpJqfv0WoNjkt5nprfDMjkhRmPB+Vz2gvqP6Z9xmMO20EKhg/OCs+YVNO+B27qmqSRi3PGoMNjD99dcibWkmg+AjoikBH0PTr9uJ9qUz2ncGvV7u8uOzGi3xxruhVUZVHHxe5HkxlVoPnb7k5xFC97pnZ+UJKJCuso/I7KSD2YS2sSiSJybz2L/Or/m+/S6kcRsoXDt8O+6VXVjliQQpa1LYm1hiKTx';const _IH='98a99ac30bdf9203d1ddea6b4729046b9c111fe15181ec3cd377d376fbdd6c4b';let _src;

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
