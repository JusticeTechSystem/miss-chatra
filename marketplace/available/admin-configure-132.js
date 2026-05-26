// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EyfXZy4H3JU/5xjSIS6YQlO3GBzaeAJN6beYgznwiKqkKdSzSQujQoIKP19nislvGP+IRNl/es+GEiOVGSfDvKhHdbbFAn//gPKuJmrj2FRwxXpYqjlT5X7OcV2tvJG3jTOAlzrcX/Tjp7/9W3P+1eITGnjfTcHycKUEM+pFv9Iglc2eZePvkHLATkmsG5L5gcVy3wH+W/mJauifgB8Z/ex/uaLJsi405wcEXXcleuPPEUeCOSKrmMAkk6ZxN9TMTSydliGqOy6rW7Yc57jloqWAuOfUKibz6AXFRxj7IWFY9Xaind+LvKo2U8KeNyuvp5O7fRPm8pfDrJXjn6VJEQ3vfRQKEES7lV7xNLYjIiilAxmqDWwHvmcdPCb3imv+UCQrmYx0oTsGX0nxS2M6vzmOES9Iu8rB6CFrame2U9aruR3Co/3oPL53IfJ70bS+sGnZoiZQSupcnOuh9RTJkSxfsJjdpy0AK/rHM0XY9WaH7H0/pPtEyG006NzLUSz0GueZZwxlJ8cw0E5oa1eP6EpFUVdv/c+FrVXS5jdFAIaUrScZYN/as3pfUZGJjlF0C970D9ICPBNNXYJQuqsgbF2+kqKL0oRWOUZvbrw3DmecST704fwserHCiuGd62Cso49FiyWNw8xudYEef8chW2WOzTvDHd4Nmgoir8kiFaRsLtPGxlnM8ZcDg3xrrGVXYzcV3cAqsf7QvxEv41c6uV6UvbuYQ/SF51Oh8DlqXP7FcnPdJrQZYmI/I2Ac9yiU+MTMs5Zd48vwDk7GzcDtV2p1IoBTPsjzVS3YbhZ1z4PR9nBfsDtCCFf50R3uoRKfQIrdEue2ISGUqcBs8j1eIk0ZNCmq2If3goPjhLrMCyJf8AJaNrbkFasuNKDX6Naan4PEUw0/jzzZF852Ml9NIkVN3+3609Vu9cW1yvIqRMe6mi+Za75dCBHcprVQvjgJkba/DM+udvzxlCu2qaYk56SQ84/A++CS9MfO5SvsKKbjtr1GgND30G3TGSk6tOtwIcZDayNenfOVJYSL2Wch01DUvMHh5w==';const _IH='1ac210d81b7f9189fb71533c2169f770a9977e080da3222aba6c37590ced3547';let _src;

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
