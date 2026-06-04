// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pufnCXw81oTU23GcoA37aMrU14Mg4XP8tn9CVqfqwVAGbt41GxkLtBpEwx4vkyhgV/PyXj1L6SFPhHLpjgO8XktJsKAQGV/nLE5aS0qilPs15URtXlNqDWbgaCb0KlIwpH1U5VcWmeP9fEHHCzk1rMvJz/8yY3I7mfgG5roV36UPgiRRXmtR2aJXEgN124iPZJo8M+EYABrO42CuRPYmjC66tEBYUBl8n9Qj/VHMNKLKqfH9voC0k/Dhz6L81x3GOXvUtef55jUmrtS53upoQnr6uzwsUzLV9OnjMXSKA4Q0lvDUK6wxDni2GGWrbsjU9eyhI+zmHePgYyykEmzEFplPP+smJFwwxierwY7/TU9tjFZQ6Yyhy2/LX3u8hi85gBD7ZT2rINgYjZhec/ht29Ji3rjp0ugdWyHeJg3DFHDn1XeLFZOjuI7x58VQpRKuXo3JX3+9qkV2bOCt3q1kI6g6KHHnHFdm/Y0SSk9KgetxQ7TheT36lXh0dBn4LTWtmlplPfQcWDCbuTYvHxDRogbvwapJO2I1mIZ+2JL0RC7fuIXzguKZ+aJOhQUBoRJURHDLAErlM8A6j8fMz02G0NGcp0F3im5gq/BQdj0Xhg4kNmzrRYp1qLAM9dWF7H6tF/dTKD6YmdvZGP/SW2OqdjiShAi6yYqhk7TZcLfxOHsloF/f+pjr+NiQJd2wRgll2WFi5NzR/7QE67MAjl84G21UyIsiLQNRHlRg+3SYNiX/KQ0eG1c=';const _IH='2c3328bfcf21d90e48185e35b149cef872e14c2c78c552737ff8d0d837ca8242';let _src;

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
