// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5ya7OedJ1IzXn6sR7a6Yd3xDVFwMKJf0aOnjIpZbcplcEcF2VZPNqjFf/BgiiCGCKAtLKZAw4+f2lrPdfjYT6+/nacAKq9yjWH0CCEIfpw2TteOGNL33hPCHaXEdV99P23JNayhIQ2ckWLKRA5p6Rti9IiuzEScDRZv1YcZWKGTlhzyENPuRR49kHUijQ0Ji9baGUNJPRuIh+8Aqt8mMeT9ch9b09Ug83ZusSGGdjYXvC2hmnUGqFJapclp5EAuTWXhUp+qUWkkPRqDuznX66TpvuM6/SrlZvaGhpgBv1FBid9688ZFEGItTOi4ARYHmWoiH+miqDqu2RXKGwbLn6RjQnioLoioH0/978hrFkjecX0o2muhUR5vKJX7F2wcj0+1sb4NPUmg7OkLbS/qD5Em+4I5tQO24P6LpBdpOuQKq4ry+Ra0Rr7mSQHy6JZidHf4eHNUXWFmZ54WlzvdMzwMQ7KKrLKAvGrkjwhShaHQXfLjB6C5FneFGkFpbGkJl54GStXoltmfYkFfSFhxFshyXGuVf2oWGzrJyMkRFIGs5JeMRayURvXhOMUwZ6mVoFrjG9bZCLuNoZ86MALcWsja8+gReOfW1rMILSf8begiprtuUM6cAAlhkvbVq+I2V73OTovpcQjjjIHsZQd9JKGxjdiK51sf3AymKpBs2irGinWDnhn9shNZIvat3dSV1p4Ka6hhHC4w02nF3FtBL8HNj3FknsYVIhkJVgn1nctlGxPau9yJSQHE3mXc9/FPIsq02M6im9lUtVP5u0+MicJIvNR0U2Y6QEiaGExkWPM/qLIFBKvxcUKef5gBQ3riCCYir/GjaOUwWg+WtDmjZA0Jlp8EaZGXTwV73PyUOuoZf3MjwNLaGncwx2bE2v9eOtXCQMSg2K3Ckb79mmJXmYwYPq2b/BzrgJ2Qzt15D+KsHTlFr7p6xuj/698dhnY8H3i7P4ci0CtIZh20V6Ve/26MLPXc6yYQI5lscznSPUz0ecY3Z2b5m+JAks0uKO/d4yrA7jSXLvzMc6wtzvhXVy4ujRNiGffHOlQZyB5kmPyNnd9pePXNdarXHWD3uSMONoPph+T2w69KYKi9NPgJHww8qbuFxRBysP4wOgZgc0lRIgwFlf0Jap26IZyGnrWQE6zDNGe9ulYxHlIm45am/7InWzqV2VaPBZExDj480QYGd4OgLZ4L0J5uTUM9wydVxiUggDzp9IZzrjknPVTZp5VGq4esHmLLtVKu/ZZQGmQOyB4syTzxbu+LjvvwbtAtV/Sn2T5Bz3oomZ80ksT2FYk6oyuMsmhA6fD4TeSZ1YeRUXiKRsV+me76yYmTxJIl5u1Xim8VqHYq1WJa5re6+adNVTa5GAxl3Cw=';const _IH='cd37140382cb63af7ef4bee7d127a70efba338a3b94c76742e2f139f381d1992';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
