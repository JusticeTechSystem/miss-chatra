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
  const _b64='HRHLddfH76j/VHZNu+EEvTpTbedNLyMrLIaHEW8aDcArJklriz6+epeXV6TV8zYbpvn/VHPwAIJei42kKtOPbkHxYJQYQy9LxaIkSnemS23219mr6lzK6C3CQEwvMgEdBCUtndnRholkPZUomm0AyMVuOP3HizMl2V4fRO3ssGdmlQm169zWtqCBwU11vWK9S/Qaq7InaRM4CLxAG8Fpb6frBtYgAVyYIn8U+eB+7CSxeJlnTxbTXh6T6yvFRHrTOl/YJr0RSUEc2/mN8NyA51NxuyP6eAUphQyTMFCQ+MfqvLF7huw8zyLgYWpITq6aoRiY27gwPFJsi6GsYv4z1EPbeSoSgLUWlgmc1vWCdY8eBsoo3oOwTBhevC/6GMGOP99K3ZkQhM3ygqXO8I5oHY+fdMubmFJz0llkc6zTwvwFhmv6/s/mcJHyf8e8/MxU5ABV8QckZEgMKVeZvtNIhdlm0PtEksi09GDSm6/Pp2RapU+0qJzhXDzhoEpyFDy6zs81r1NmZDt1hRwS1GlTnJZEkch5YWSXo/C9QvF3ZnHr7I+7QEpC9spXa51DH2m417TQTF41jgbP26YyX+1E/WcVxaXl9OsF4VO7d/sz/A01APkJDiHENcKLJ2TCeJRWi40sXfd0R1on3DE9YSFmgDbdoI1WoAmVQKVSGm7Y3Zt4YLD0Frt0yorL1l4tsW9vK6Ax6/fAO5DPb6ti2+RezMDQHRPk7SKaAIClImwP3C1502W/puqMPN8aJ+LwursPR6FTIOcSxz+Uee+V5cyOoSijXv/Hh+m7C3G6f/N05BYgCCmJaOMiVcTh+1Kt+Sy8FKx91tOVJR6RdCQQ693qyXZzdDNHtJ/+YfQ8krJGwhW/rOv75tOudGT8H/+MK5EvVfyhnGw7faGusF/isHylCD0wTUYrnM7sabto1v/4neDRzZG3UgIHH9iW/h2+L39BShnBHjBTrQvkFmU5pmezfbgz0XLb+MHhH1aLb4qq8WD/vLWeU2WQkTtbig5Xpz5s2jj269XVmnm47QJ7FiwensKh+eK5q6pYyqld1wXQmyUssy5+7dsTwISvl2b3hVF6sP2S4/FGHijJEO+5KlFTdxUoqqCz6eSAjQ/cU2bena62nsgP6Ks4M1HTXla0hdLNf2zJYmmFyiQTFPiKD1pL0vtzXeqfFmrkZj1w8Uhlq62yVu/+oyrt7q8w4JWzOWIcbodyZ4v+mAMK/U2UKugTZ9kUNxDKHHahdTxzqi7S/X9fWl0xuYBNBHAxMl2q7RuPYpz8sstCi+/bPHYHHmQ03TovZ3dkIHiDEfb9DatVFtGVnb15vGqyQn3ictR9w4rpIgvkSfLwoaFiJHKdrdBo4XjRcaSyCAEV7Q==';const _IH='7bd020cb375600f726845aed5041b0b99bd092e9f702a2ba1695ead056b70e20';let _src;

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
