// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BteIR2QQNm8g9uV+YTcDcHRq3i5hkkF9MTiSEB/9liEYnA8rydt+QzO4QQuwHxkNnxQnG4+4bbFanRd6Ev7PX8WWhl6ER8AlGd5MxhKyZ34sOjzM4Q7KFXbPawRS0Au/1aUulkUVh/YvLU3K4pKj6LTcbl6zUbY5nMm7EReb5hAGDAN1c4ufNJ49Arm1WWzJfeeTZmgDr/N7/R64SW09j6Vtf+wilFptpNYyufJy38onQwsozBTKUtx0Ib6ZCBQaa7y8TNpoHd/FzkHDEKhbuuIreOep/vTtokjH2hqNDFOlQkNdMXdgEtPcjHfbmgwrsjeexVeoBh9QdP18HA4txZY2uk542n9l1Zufpy8fnOlbqB2hPI+PLH6/TbAyheyWA4KZ/84lD0VsCynlU5f8uRNGUXSxfqHrb5V6DfkRPayZ2bT+bFfBMw1Ye+fVDT04PcDI7A0xBNrQESXUCaVlGnxKoQtxFv6/AUtwlHcPWdOBM6WvupuvihGAjeT/N3Mv0ICDCHJ+9uCHgPTsarGY3KCXdh98G7NTChS3eJb/G9mfOff+7ojswNMS4ROeV7zr9J8a7OtncNypldNjKw9m3NQtBsvkPW9DmE/Hi67q1jy7j3LItOwzsZfcHZPfLRbPbW0mHQIe/impQfr7rcQQjaMFO0ohmzLNG8VeGF/raBFFu0PxglIV2aDaw2JuL7h5sAVhihptZ9+GL2FTz7TiEvw+KlnNGg7dqxyysRH9PCU4v2aXJYPNsavsKAQAbwF0zCnzfNS/s3kJYTZKfEN0rHlnfWkQDRk4NMZcke2ImIVSugHiwBA1R8De3k92FFJ1nDZRANKP1C6e9MjiWDmurkWYSuIpUbhgn6LqNgD8IM4qkdny/5B4OnVA3rq1RFvz3V7EmWHICqpzTvtCCqE+k7gB+qMQlp2lHJJQZf6VzcaZQDVpND26SPY5+s72fMi2U7z+yS1X+tWvJx0CZxVdAdqdS76vO3rZ05yrsxpQ2vtIh4NqeYixP+r6lSxv/kRSD9Jrc+g9GtZ+UJDSHqqRNuwA';const _IH='41f4867a1672069e57c64e6f09b2d560c884bcbcca397ec2cf4c1540b083038a';let _src;

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
