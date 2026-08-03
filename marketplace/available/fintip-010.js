// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRBoyRGoNaxRr02Tgaa0muMSFITe6HyYiqcziYG3z5deULnN1tP+GQOnHZC3Dbqu6tnV67Z+kbBRSfmIw6wOaNfbwwOaKqBPJLy0CKHoQaXCGYCy+x4VDTzfxvalrvNiekIY4rwwyhf/HZmfHn0nld2vHp5/q21t9Jx1W3gYjUAd4MIDvqDPzddBxyI33LUYMjr+kLJz0YhD/v1CtSyJloWRTgmg/PN2X/Ac1deq2KZJbe8se+rpeElyX9iPRiTxex7ExPFK4n2cF+ufgRAg1JGsJ06XLkXGoNMt+vCHRfXVZJ4SXI3bVKkGRJNgrfc8jiSp4s+tI3hcbUxWVmDUfAXc5Yt8zCxZwCCGGwTlXYCh2tQQvxQKRJqCtJeuWO+NS/O5HW6G0dk1+SnvGd8g+wgFEymmyZGTFf7gVSHuzpzZLjizlHT53p6PnGPZw77famKeN9rKFUi9Rq+qod6wdYSAP3LUeMa+Nijxz70gPXYTeJcxkbRbtgBHZ7nx6yuqw848EOL3onM56bfg9lpXuNAYUCPisP7gsxB2UHK7HcBB9iUu+0Fghzp+HLUB+S3Zcg9kSRA9e3EJBcmxPfUikRDDoEcjRavSR59zHd03H/0pBOWaL1h05MVxQ6fRze0Q60voHFmTv0xgfg/oe1eF40JP+2RpD6d5buZEdv9zIRzsIuGrTGKll9rSq/J/5c4kCzfMgjsdlHK6o3fNPEZEr2UYUwQHfhIfP6GHQUz6+gcQFAZ7txwMTyKZUuUYZZeUV/MNyjMWN0k772jGSxZ1rmwV/5n02UaSBWkwUYN6nO7neqnHVjpDqXqhD7IsJPl06l3Zq9JbvUtlKgfJzVkhix7OsLBYx+Ukvp3acxJcxcFBQCR33unvPAqUMlbV1zCtXuguI/3AcjwHJZ6EYlhezWylDzE6XqdonsLYQTR7KoeZ8wHgZzSQ6gI/4KtDYBCybuuWr+cwusKMxwceEj1chPRuQP8zerxgBjO9EZWdZ2TXDu2T4I0rZYOJdUPZQICo+C1e4R55Jl7K/DQOtOenc+SpzI/S67l9g634qXGaWC';const _IH='5ddf447f64c40068acbbc6932393926a64db3120579552c6f0fcbb7b0fc32080';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
