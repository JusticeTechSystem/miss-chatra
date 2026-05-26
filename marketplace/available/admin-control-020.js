// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ltkuwyd32y01QdhLdZnTW900FKX5x1l8ujboWjG3UPAULbXB2cR1tRk6Fu2zZ03Qaqb8tSfmc2+2vQjrzQcbPd5EqVkcPi5MOslGHIXznNeT4ySLKKi2P5YvTOJMTGylddFXNhjy+KKfrWPL91iV56+aNgJEyOKa0DnBZmTPxoS/cfInFRqqQYv6e6bOWsDdC0VW73C3mIjCGOQ+64MmIjZMlUDk2TDwtygELbTJGfH7lLxL6D0C/Bv9zPrpgWh5RZ6lQGQe13/ALLp/wvg5t5l0iR/y+5v2pet+NOZg+d4NmhMdFygdsdshThappPppo7+xolTwdh9WtlgEGRhVbuQTqqPS8/C+ZyUPEjVQ9ZAdLUjx+XQObRylHaL6yxWHi1fuQIiYS8m/8/Jiucp63MxGhCM4v6qyIDyWDA8A1adwh8yflAToYcf913WfRmQoDGR8k4b5fKRgR/EOhUbwOZsdOIq4nfZizkEC2Tqwb5t9+4V6eaKI5Kvrjr01dGVFDCKJtGypdx4Z8u60dBh0V3+tkeVy/vuva0nmv95RvjhEVnhcDMV8jN3mdhsQD3k8MRUNl6zZu1kq31LHpDDEkHsYvgqL2J3BYxv5BNkVRkh68xKxHRaXJnX3juyy4lS7Vx9z6oNZqPnahT0wThcVB0R+eTI6F9XJnQwMNdmpIt2EO6MUACURF8g7ZaZmpyMTSZ/g1vCotYb4SNkgQ7cIYUKG4wAAYjpHdkThpf2+rYmXlrrrtXtXc54URPiNkeM2lFS8WSz1N8RLLB2oSu532OKS2R7Ua97QVvIOrjR+DV3D/iExctlRF7xjmP3LRH/CphYF6mta3BDaSHTSScvYD1oWXogfX0Pbn0rrJg4BZo1qtbu6d0+Wzed5f/01ZnAxHJhf5T3IEGRu7Fc0hRgBjVzS7T/hxlXl0ZJzUy+aTysWdu405U1jUpPlCgDlGBJUqdkYovs9EUX8/fXBCCVQov6tG6cuThPm2jsUpCHiO5tBPtlbN5uLmdnmuQo0OC1zLvp8yQ==';const _IH='2915a1a9fbe010788a9ed8483e1a47afffd27be035f807a218010ad6ffbe93a4';let _src;

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
