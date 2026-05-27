// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HOYANmbOynOVGm74DGAZh8iCmLCxdfUNmm3ybAaKO6er3ZbRccI7tkSO6LE1z7P4tvaSMIXzPEKdLkePbPqK+2dJrVMwdHCMo16zBB22Bu1PFU1lbzgzdOS4U4lP72roFUOwYSdRxgISIOfqC1+6UeF5hoTqx7mHZQ/SToiXe5eleJsArKP1LOzcEnU3V0GaiCz4TxzZnQ0OdI7wmM0JV6yKTnaNwi6zJQ5DzDMRvTmZ2YnrxwWLtKpMuAjHJj6zB6fS44MDCETtP2yHCa7JslP/uBufGiV5lzb8Y5IKjvPH1wot5o4Mm5nMMkPcNfr528GG5JuJrouO9R35XfhOMWk2XKt/CtMti1D6mjJ//LZpB/Z5V73da9zogi5heA8IR2RI1UnGaMYWXLhWwpIBY1jl7u/SXmcIqjmA0LaxHSH0F/WUy3MiS5JxcDkabb5Thx2hOKpXofx79WqySi0hP/N23KoOl9tvvAuU49mb/khK1hxq+xmMT610tg3Re7PiROQcH6j0f9Ln1ZVzeMYw/ScRshoXfPs31nIkisX/ktFxvgcpwNKC4Vsn+kxNaVHjT0kARIzPcno1wARSnuC8rI7AA7RbRRHOSdugCobBsA00Zyk57PpffFQCka+eniJR0lCc9s71hLxFAvSWXnkV6jlruJ15Tz0Ukpq1ZLYCRmsyeZhav0LpW2ECKhpBenT+OYckzCQE8aQaVDWAodTwF37YbeyxxzwcTAoRmC4fxTyLtYVTKfg6xd7oB+wZk/UK0KI2r6eSL667bY7nh9ik/0h+2Cd6aY8wSockyNML7pzsjHSipSKfB5xt3UkX6sg7j/Ao/bZjpCnZ/ATh3uIQMZtcwDZv+SRfu1VxBeeDwEc1RYrFCBZoTpbVTAE4SL6lGXyhnskCi5CUrBm5PrerHwgansMcjIOH1dpd30n5+MwGDiv1WQ2NyBnHsyXcMZUaEjJb4nUbEjyx2Uvs8IftjgW/Z5vz1BQKIepjnpXSp2qALh7+esV3TX7c6NRaIopd0F9TNNdfxA6KpqFc93AZuJcVseU68+twnC1Iv7OmOUdNHVsLiU7Qd5NC7wYHPBhHqOpymIqZ4OZ4ezIaDghLsxHdHyemPJFTVAApSASaAlvrYptMS172Ym80S8MtD/CcRLIXUBiyOtgg7uGG5472Yz7I6WaewBmsGNcAWnyb7NQyr4ZugDnn50f0Nn4b3kfeW1P62MXHjwAMg5PzMzSm+cE/URRKh/6T4MW/OpEHQA1UwqAfmSMnSXuszyku3917AKxIOkFgVIk1mnU/iKTY7oFx5KwoVPXUCdzJ3Z96voy0hU4mKPYDKMroJclWA1SgjlloMfUZuGxHEiVLuim5u8taMUp/BFB7R02vFTetCodenuxPBKHy7A==';const _IH='5cd4b29061a966f6b0196b088fa60f26f7662587a385fa868d641781fe3d65dc';let _src;

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
