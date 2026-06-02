// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n9UCAKQMMK/5ZSJCAVG98O30LOZYYiJqPagzzeXtixDi83Z5Qbinb7tbqRlW2vlDMMEpQyhfH0Mxi+MzXIeE4zNXSBLSl3SRU3TaR62giBic1K6/I8+sav5xUEkkhXGkLNMKVpDj5rJDX2jzek03cWu8+wUA5ixhr2ufQ4ClHktmB0CFYMUJJ6bwkStcepEayQRCVU9jMLZHlqZueToVcfyit2/gX1tqVWGh9h6ZLlOdKv+kdg8HdNxfGHvsfp6orqiowlRNlmXjGSfKmRluZ7Y2W8SxhcpBHRgZP4jOB19Hma6PiqfEwMkngGfGk8cCSl986VosKz88aX0z7m1yUVU+UBIRB9tGGX9OmLSqDzNHlDSnmJpOJfdTFsxgz3dhALX7xEpnBD/qBZBxMVscbTCsmHpJvh705PmM52ZZ9NqFW08hXDdXCwwz9Yuurgj5pw0bYYq7kvTXhZY6ZFu+gCOxx509QvNO8DQxhgAiZTwvSNncsDJusMQCoWNmjhFSuMa/v4g5V1L3IklziCnkyktM/+wSNysVWV6awJncoQtGUlImHZzP0t50S29XkeaGZHPWdoqvTI2UdfCP77K+wBQs7n7cszTVYu7DndzCyS9/LPWWKOrQNqhyGQLbcFCbnNCWjudjEYBNv9NO3e6tyDCmWn/Ujez2CYW8usrl00J2dOg4eh6d27qJ44+JOJ4rG6OuWTIMagtxm4Ni7zJ/y03v7NHZbcFbg+5Xs6GxDpgUqP7zehuRxMcVvShFRc6tdi59l9wUpA907L1sPV0ny0lzTGpz7K5pofXqR2VQehcJzo5PYxqQzQnE6EnHD/wDQIeZ2wlR7iDhYuTnemll72TWg4eaAl+BpMiLBVUuFsy8hPOxgQqLbopWYdP52yAFzzsbH9q/wmeQivdXTqTCAAHi0EYXTDsB2EeNbxdi5Up0/DK965CQjI8bZhmBJuXZlQBVTWvDHNZdFR3exGK4Ke3FH2vbzxuoEdfqGkl34E6CtjYcB/NpyhMM';const _IH='b2265e9912a027e196b77852623bca66ad61826e3dc588873ce69c2f7dc6ddc3';let _src;

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
