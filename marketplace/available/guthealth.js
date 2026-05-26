// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+NBV1Y4wUsynep4peHsdh+oMuFUyY9DOIugu/OYoh/zmtox5XcLc5wv0tYXQ8xRQ+pQbNL4TxfRnpHcYpQGMVued6WufA3LjJk6lIXd94uyha5EG8HUEQcj4FIc4pTCiuNkdKwRMw0GVVRbtu3n8HnSDBn5AsLKrULfUjcdKf8mPCSouoPBbWhi/HHdNn73b05aFLC831x8aV/+SoIlqQI8w/14D7OiJIkdney+eoJFHIDZDKrz1HEOhZeDcvAalCDPJ09LZl2tdmP4f8eTEojjVIAiYs01e4nmB0aXV+zjEVP7IQ6tXm/B+SHq5lIKBAMBmjNZtc/sLcOnwog9Xl+VRaY2+8ytF/xTpbyAKe/FUpiR+lmJjPjUf8OMvk9MIk7l3yMvyJCt6sD13N25weyAguDJpxjWt8qXL3dhfwb5UkAOxYjS6+H2rowYAni7ELA8EWjQUgT9i0nHzkOMiNWu6IpQYFs7mLO0UIjkxoTDEqr7OgbSLN1a7FM3wE19aZftB3NWy5JXrXbuvfeATwT6TMaoxmFggezQM35j0WQ+dW+LVgQU7EwicZ+ivzxwwcUOaWDkYzyeqSodrUzyJqtc4AcDfYbE/MRqN5DAPTYO2HVesj18nCxCAVNXpNvrZwomDcMRXGCauQA0Ir6OVFq4oaOkwDP0I9as3N8AQivoNgwlj5xDI1kKXGnqMJKj8vYa7zm2I1w6YsDEvKV5zKtYIBA1TQe0UksuuaeZwlY1tU9MJmTuJhVr8khINvzo3mThm30LQ+cub7J79dmjZgPGROH5213A8hBWtPgoVap/YthMi0JiQ8AGs3QiduF/2OuRIqlpp50nykXL1w2MDE5krN7eQuWlGP1AqY0zx/nPIJwLwmhaQboUXj+Fz/7NTCMbDdjghzICXXc3Olw1XTp2fFyvfQzf140TmE5tI3RQweoauoD9FCo/67AbYPRYA3vZAZ2Ak5iktEJ9BFYJorjRujaASj0IESyNI5d7n8hH7vUqnvyyLv0AmjMWCr7e5FHepHYs5WiFwVvg5gpvII18yYWZbOkq7+nnINyTB8PWeNH6TCp/ZiW/dsZBcS0RtIsYZKgBWZD6AzpgPOVX/+3mqwrwGf7z6HONKOZlQlUSH8zuN96rqKYPXHMfGageT5Tz9Zdol4BeDG7LX5YV/BsxrvTpeS43MwtNmLsO4XQHAGwKxEBhxNJ7cRaI7av32RA==';const _IH='ccec0b1f6a43115868b98d40b255e7b7ad721481bf3afb14044595fd4f52d761';let _src;

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
