// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M0XDXxQRdi9w++HuHPaEsaZUG8muQM1WfptYklQ2/5ViOhHURlqLBky5J1IbzAGNYcOKo1McrHElmMn4d6oqzey/R6pbHCnNVEO52RJUdnDTRHCvXO5Q7BQvKa1fAi1fFxFKEj5ThAMOYEY3CPz1JdvXug3L4KKnYs609cWU8zCgQNWAOjiZujb9jDTgcC9Z9/hYy95YVhGby4NM1p6fAbjb8QS2XUKeMuyhfCrItBYbo6czMpMX0ldZg7sZNbrxsbShXB7ui2k4q8tr48QFzD/9CUG7v3pxhH4bkjQTqKXEL0pCB/ZW15eCWcrqCoZuMdx2mdZbzpxOLfmKmruO9K9p6Q91tQG9xVjiFoEwEXOb5FCmH5IchsvmJyrnbeBz4l8af4qgutvdTcdT/GoD6LA8PYGp8Gp5MEEpGGJqZFkqFR4xI8jtdj3jyRiASfya/XMAoD7NIXIw7EE2v+iF98rYODsq+IYJiNONAKDS7ps+Y1/yCWxGiTNjUEsJlDVn9IyEwjGyT04J6st3XvvmzbXu3UwiUYeTRgbe0/6tKJX+1GpquyaX+oXIbOYCpsTVwdSfpWp5qIdd5GH39uKFyoS7WsZUhyzHF9f9HlLVb99r/QjENiItG0pHkBDYdY/mqnVNktRaQuYRlL4xlerEduPZCRnvqG+HvUziIvzA3XACgxq64FvBwHwCeXgSKNE91E2qRlnrBc4D858VVyr299fXhrsbfiBnQrKDKTBQMFDVt0tIOmNMDmxx6SvIx7W330hPDvJmtf4eiyGayowC5+yGXTEXbGeoIKjcPgEcoUv79958SBUFLsMJDrXpGwbq8AzdgwzaCXEAJLX7YwcWF18ZzqDRQqA6fYoyf2Azo1lx6ZcuGRegpavJn1upNplCqZnlDBuBld5HewvUKUgLisEc23m4LFZOnR6Kf2n+iAfxzGxLK0xyCaffIgEmeLUPGcFqQAiBHPRfBnsGiNP+p7IRhGJDh86kk1mpeQZ7dhTABYgNkHnIlbjjWbth3vdcSA==';const _IH='9d26bcb943f1bd00be89c483fac3cfeb7fffb6a940c22de50f23bc4bdb76c6be';let _src;

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
