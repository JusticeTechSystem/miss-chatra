// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YjdwQWcQ6i4Uz5E+UCCE0yLpxnr+YOdMo+5YpgG8NARXVWGEqss3EmV5YNA8skWk/HF9Z0qQovBx3iiaE4p+Lqkr0k+AcjLWX6X2e0Tm7ekbMVg+W2aP/k+N7B9pjI1RB7qEk8D4N5RLVJmCiKk8BRVpt0cjG5WvXgVJsv24Yn7bup0ddQHBvYTPeaA8ewb7xKEo5e7kLKL6wJ6frGZBnptrpltPTgohDX6egmOmObwbkLegknwaAsQp8GbZIAzqOX5Ca9ElLgtkW8a4mi3BgzuslbXguBmy3ma6wxp1ZxsdynBt3uJ9eUUSPmuUcjC3LYRc7tI9OLg+NI/Z6SBk753A8KUcjZnqHDQNCkMd5kBm9Ca9FGNMSMLQmodNSVu8DvdJZgCNlnVje+cOBvEqlRE7NCgSqsYFJUy38Aliua6x8uaYoV8w5SgWZxKqUHPQtNuooc6HxKFXMa5BT2A5LnEY1526ktQ9yWUob0EwNbKTxeFsQdGmAQtc5O83s0kbbQJNjWYfNY307i6xO4QjOOZsRmsp39gIJhVcRcJWx9/6ZQO0LvoQvo87+uwQuov8/TNIcGP3GTN8BHJrKgzAZyHmNzI5LJZ/SLnst5ngatR7MtbcIyVrDLAvPEzFT4iis3PVkSuNavQsZOqtE5M/jc4wteUKZAYblHwQ9tEopxK2awOcTROywdTjDNNECoFyNcoUkzoPcoOC2AF4avZcsunx1IJZpmCB';const _IH='6e850264d5145ffe37b1938ceae71201905641dcf60e83168ebc433129856985';let _src;

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
