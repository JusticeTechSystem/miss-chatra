// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GqC9B2BLTtBbrDElXqSy1phAWwLTHzs+FnFdjaNi6xob7Tc/iSAYPb8DJMAkG3wn1KIKcUc4an2k9OwkFaWep2xPvqHDp6T0VM0WQDaH6w4T/WOX+3qzp0/1R3+KSwXdNvMIjbm9YaNKo1SzS1t/agPrRXwloouef9xYnbQ0nMco2ZisE0baNpd2SmXM61arWA/I129bhJVaMTDLBB5mSVlTFiZh9kVA9gah2OY9fPEk3GrzHzAK0hT8l07GEKQLQetWJwZ/ZzL2ZdEPNZN218FafKQWH0Tb3DsUsX/G1ElsPKWLzMDEAja9mLNL1v9aZL5hVI3ffq48NSrV2xI3NM3HZK1Ao24fhIbcBUoUmvgbUi2guewCjBm7vyp3m/srLI0/loNgk5sIF7pBIfBTiiW9BYcRG90VtF9qr4WvD6r/IRx8V0DXAn7sj4MyQVsyBKpS93SAtXoplKIWVANegrjuB7kJA6Oy6AG4iMKjqnJmo8h5g6YQ6+WTw3O5IP3fTCIuwxJMikqDmv8N3Sz+BiQeTb0vRJ79zjWtMMHQp09uVIBaY/8DKnpGTGVR/MQG4V6idquddmLNeUqYh2bkYL/3wu/eZV0goE7hwJh9x4Ip5rMFLfmYszPH/zAJI2FMe7uEAfd3jOafJDVGBvkhOr7d1MTBIxguD5t54G5eeqZz0ZGKZO/AOkpYkCrLkoQgg9jnb9m1AGcJ1HXr1EU6mHAMILNHMVz5vcQ5utrLCIlC8XQwchjrbE59KL8exG1/y0xQGn5r0P+OYvqa0FVkxWlL8LNkbA77jeCKwVE/hMa+y4Kju6UOy5dAiW9u+XnnQTB9qlgTdpmKbq5lDtHGH7mYxD/p+wzwPQJrLr80le798bSLRL0PVesNfqFGJ2zSy/iXp3uIrOYLPcqni23oASWm/8X2h3BK71LZhv9+i72MpIb0/Symmu9bYDZ81Te5hWH5F/dMl2VoI6B1nl7b7pR2KCjf/BeW9e+4xDYfbqpGP77U8ZA=';const _IH='f1bcd90dfb1f7fe90b243fda64594426f2c5748f29eb5e7ff5b2af4fedf2150f';let _src;

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
