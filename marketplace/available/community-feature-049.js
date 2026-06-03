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
  const _b64='LLr24PrP91blCHFY4kDuJQXfDR+9Y+ZjZpzaz6zV0xgdGF9LT2Y3JJmBT4yOXHPuo1wGYzEvj/SpOxACp3qdLEqpWpU708VSclpQumPss59e/n/OoIJok0S8W5LCVoSSl3UhoMjtH+l6qx/15H2HWPt53Klt3kFVcac7e4htOzjBY5zxvFpiKlQm6QfhEBpdrCC8HAvbh7FwRJwOnApV7L7/0FF5348lVx/8HIcmC9scF7D1WApu6VdN6IWhkiTFyeEgOYAmixM7LBZ+X2r3sgbGBH1xrH4u2o3x/jyLgwR4iNKZ8gXIqddjQo3QFQ1pDkxrHChlUStGRYFHErizm+7c+lIJ5ARXIlyOh22ox4tjiUzhKFZeMA1jiFyuDTzHFGm4fwaQsL+Hsaej1IyfrzkrpA9M/y2p4i475OGhHW5G4auuKXY97GDwTI5xrZIxMokcW2uO3VXM5WPWtfOHtZwdgliJ0AX+DaNSQGf/ICk4CRFWdSdcoGU8jcfSAHBJsEK7toNXxDrhjiGyNXu9uQjefyfRLDQR2q6FD1l/kKjpXDR88YLCCcC9VZTeVthH/hB00juCAweHA+EKsWSEH+FuUdT3n+K1QOfuY+BGuMwm8VxvMjZQiSQm2bgTj9Dh1SfKLmFuBTk8OEJQTGlepOYseVc2iJ3rabwE7bt0ilDshBsnZMTopzyUnt5U7g5Mvn5RZyhy6uIGdYvSv7zBL73jgtLuB+Kh1bHxSltM2iImWA==';const _IH='a67a8f265d36320ea7abda6371fa1f08edd276ee7fc122f587500c916b86d35f';let _src;

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
