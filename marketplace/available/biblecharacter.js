// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I1HOcpIuDY8buiZZ/uOWlQZh9IC3c0XlfSn0VNzOBR4iPX6R4uAWFSzN9z9/V7guxC6rhQDjJrFvhufW9fyY2g80mzyOnGXLHsRA4Y3MSa/uain6pohqpvcZwtOFMCYPKU6zBLDNe0cxEwy1r7ym8UblJm57DvguYKkHw4sM2Zu1V6USkHyO9nfxirjWy8uLQbhy9iPp4hGHwX1PSnyBsdqe6Bb8UeZk1qcuchJcxPrEnFL41nS5heTYv6LbwbpoHz3WALC6m1bsmMJCKoEN1HbGGAPFDGjF7cCOnWrOqxIQ+ZAs+DZadZnEJnExf8I/OmXv+h8BO12+bepfgUW4obPhoz7U4T32chazJCSl0M0ODinXhcJAVo9c5DVob6gfaOdDS+MFLrZj/uo4Ho3D043w+nmB8o3GwGnsXIx1DVCSyDZPIxRp+FBC3DfQ2CTB7XW4j5x+RBXAoxxNva5fRaDK59rxzRuMKiiFnPR3ZfvgDHF5P3LQE6Jc8oMpVYtlFbuYz/UNpgZPTJ21K0LDv8CjGvKFMDBpTotSWL4GeAzhTPC63f8nxESw6Ugut5DSSoqG//QyiEhfL3p3REiqwJeOr5/KxflOFJ86DKSUa+WMkkfxfG26vuu6P5opZPM8WBRvIF30E80mE/ObhyJuKNbK2jIP00e8wvDIYBGnbS8z72XL6NIQkhpnaasfIBIUxuf2mxzoyYp0gtENA/xbLk6G7iX+e9h2RfONmuifXcSnlYYANRJ3wSYG4da4P5I82//6Hm0fmf6vetFseTonUApzFb70/frPrckPk9FMJZeNRruqO9t6KGqIEhvT/5JrJewucGhhBJHGa8X+sBOaSXRQhDK+LyZ9n4TM+UWLA1356jOZ+9/Hk9j268jcsyJoA718n2ZC+IWNVCyOpP7EBn6FycChWl2PFpWz/TrXAfHqnNfdNDcvBj4ykCxKqscWOFb/17+HbaSUH6mSuFmsyMLIr/QyiI8xiYr8S2vo2FJWVowskN7FLhzBjofso+q81yHEmga0wjLqguuXO17mmoUiJBOhHhgwtf3sjJy6E3ilB1+pH/TO2/l7A+BVbfiDqA8SReXcy/N+++ceQ8dGRlzldUIVZ+AIL5wgbIe1gjb29xzaUbKSM5UGQ9owUSMc1JYT3F2MFtoYFNlt/iz7hM6Umth4LT9qmt0hnACaIWnafSv774sHP/kvolRC06xX6YfVOXhah630M7W9fQ==';const _IH='d7b073d65c1484463f79a8d6f5fb1f4069c799491637a62c791b0e68f1dca2cc';let _src;

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
