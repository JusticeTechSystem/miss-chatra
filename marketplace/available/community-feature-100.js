// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZOAjzEG99SprP57hwLZczWXsysnX8FzabHn4Q9lDa4ewpzQv1Yuqp7L/MCchgsjNqnIQIqyVV5fwTMXRD/+lcYKE43R5bJwvGkKul7qFwhk/oBfdjbGnijGrHIF+iFk4JtgVYf979TuA4ON8upg5JZfos0U8Hm98zUD3sxp2Iu8RM7plql4EkvTqPNZGQmjGMCuBP6yqO9lydfM5IDs6HrXKr+ayl1GjeqZN4lLBCMCm/4PPcf+q5mS5eu6tJbhzI8CilhGLRkCNWUXp3cVSa6GAHUsdH5fTtRIjZCeJ43RJGJWROi8jGZYT51+ZLwI8FXD9uri5LaKH1gd6qtrfAnLKMCwhxsMxmWfcodhtzwOP0ISapEFw9IHtKMKDlgsoxUol/uwSEuHrIPAJBgLnwppagCak3VOrZ7UpdNU5/Nb+NYtoh4B6rIXmsXeNQVf+DpfREqPwlVJY77pwizi5YrKWfecJkQifkmNedRvQv6qtystmECUmjQjKzMlqO22E44By4r3Zl4CK6b6s7m91JpVElioJcKwv7d0d/MqSkUqodODzo8levKVKG7AdFn5XnKjN2S6qCfCjDrwo+57dAYDfUZ/RzabrUnmGS7aOXR2JfkvDqGwcHk+Nyc46wni3VIE6FTB5qt8DITHgXQxGhIL4jC2w3rxeJ5a07uTtaVQsvDrfr+4rwa871uhLJSFOKiwzYjXONikH2iw3SgbK7uACzjwg5UAZhRXfbRBHoKjCYhbqPXZkM2jO';const _IH='fa5b5cd7d55b02cc1bb772597af98c15b4bc6813294cfedc3cd6db09571d1941';let _src;

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
