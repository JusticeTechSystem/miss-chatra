// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lpuFcWDA4jSWd0lqgoyk9mDR4AGe9E2foYLXywg4CGLkewlyShpxRnw2S/3r/jQTCZadXULGGo99kpi5/cPdV0Myoqww1XRX/F0b8uqO2e+XEkSuhB2RIvx2NytUrHig8M840jFjc2H2vzlp8F5pJivqD7NRJeiL9kOz3oyO6SN2EV1jZVd1/2Dj2o3c5GdPjXFacfRNOST7hR4lHZKG9dDnhRphclmCqe5zf+usG4ru4ERrCZAdaRAM9snRXK/KK+q+AgvzrXBIDzI+yQW4dSKqkYrJz5MkmNHuTpxu7W6PK39BAUW1F+D7cmxhOs60LFmFdYR618CS9BzqEEXj9MNN1THsjbIvUtPvQdcOWoHk6Gbsxuf/Q+JD5sCRR+5S5AuDXUw3Khm+5O3z0LgJRkPwiy1gMQHBAXp0YPlnJHk7W9nIRs5qk5lNtie1fvnA6g1BlKSmP1T/93lX2xCoMzesXwxEzQPOTwStV7Iu2Mr/vgddFEW21+h4KrHXE+czmpjpe5p4CE5GCEW5p9JvGT+tV+C8WLovQ511BNSgJYZKrtW2s87kHPNm8TvXqD2cFYALfhRPsgcxslMxoBGkJ1VRLfxi/YHREY/wV+WfrxYAEuls7+XvO+8QUf60R2BgECJS7e7DM2aaS5OAYoGrPLf18f/Mwtkx5EOmJ6mh7mqrQoLXSkyv5zbUx9udYhuVromouRlNJe1SnSjwpZYfGXocFgE57H01ZQ7tf7KD0QQzrsmwtaZbkjrRyeX+FMGgkvr9XZOBbPhK0M1FSamHpDbXbaMdrpQcz3JQlHAlf9XmZcO0HfcW9MUgZfrGu81B5KFfpVSYlSSIFTMcY7ujslOOikfd2fkuubMuqvvyYZBYoAh8iPG7qD/SJMEeFi8RarvVc3jlHA4ERVqLCtyrMcTwA+iqBFp6h0BClbCkuXAy1IJ0Q+MeoooUvzPDdx3hql/0f49+NrZwkfpmYeh/5I6oei3wKBueFIjT32Wr2lQ9V9EfIEJwYcfiGBUu';const _IH='bf0a9725498c77d54431efae590d83732c20fe709c844acff0d1c0566b4cfcec';let _src;

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
