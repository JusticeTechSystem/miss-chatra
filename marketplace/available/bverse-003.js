// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S/nlbcJkxfkvkdu6inykSsgKzJ4Jk2e3HM8Q3peXtG0GAH4szi9PoJppci+Jg8bno42EodWrBDttRDKiJi0D2g0HXUoVJJMWhed5jwN6sjq+90zJ00h9FpNr4/s3MJ5p3tg8xc6UYwf+vZRrIDqQ9wGvxHgS/49fB7TYkRvUcM6PatdMSgrqNpxTtp7tfFU+SGYSPj3RQsyj9FTZ0RtA/YYU6AXvau940X2q76CbKqOYCgS3iivcCNnj3GU3anEUWSsQWnJHf/OJ/eXcpQOHHnPilCo2XocHLzCMM6zdAQj07gKRSF3D45+mowlVXBz5KZYWB3aFiN2DbvMH5U34Ai55upi5POeBMOxSMBJZKb59pAi+NSLag/V2mQQRhYkU3Ctra5LDXb+/ELAOkNxBjZP2FV+wWo+BiBVOlCgE5ZguPKt4ecc31QU4yL5/aAV4QDrEJVgGeKgaerVVtByNQ5zH6vpiDRtyPpy+h+O9taFxvBnf6+ZKbGNJSta4DcPLxGHoVycn/84cpVP4coXzGo++NpnnBv5tHEHgWnyzmwjYp2lxus0cOApPT0DzdsVlO8SGk6pIwF2+CYoFvY7g0ubHj+1PYo2V4i8TmWr21jr5dnj2UwAGXT450Ic46Wl8zDkBy+P/+gecX8lKkLer/VlaRm0iKtQ0IcqJIh+mdpo1JXO4768vqiYrH7IjKw+WeQ==';const _IH='e42bc97c5a1a52710ac223029766529132c0ae6209669d9ca4e995d024cd0d5f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
