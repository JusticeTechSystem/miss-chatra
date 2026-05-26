// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kUXjIQICzzLs1fEJ1uZ2zcOT5EgWwi7VBOwL5k8VO5lhe8Ii3/2NbbCCTZTqUXRfGlE+T/R7rYbyBprr69UoXWHyO5rs9LjjZ2mZXko6dsgkJTTR0lXW/akOZPAkDskMJATmZAz1d6dYGK1L2GOO8kDPTcJX4X+RSpZcCcOrwGSDgvOjNuTF9r+dyVgBc4YHO0XMaND4iiQlzjF92oL5PcAM7DqQDGNiJlIaoN/ntMvSR0NXkbvjOLX1uz4GpbBdSDVM5xXb2N+ZtjrW7ZuM5+OUzkmTzp6E3zfIC3ec6VudfsD6DkuBhbPafwIhCfLUBEdjOp1c1L5fg6j2iY4/sG3c2DJJ0HVTMd86Acb+tVw+vbpCStuu+Da9rtMshs1AA2y58WAXEqwuE/T9R4jZfGjgDs/Q4glZ8Lza0xMLpip9o6XPzei+BlDz0+TPPpCrUstSseImiFSbxrnc90G94EUMbCrbOpiXOkXwgbCEVdZJnH0RvWiiWsu8gG8sHY7q9eOHSMVaiLNl0ZwauTNgTpv1xgzKbWKY29ZqmN/31+ms5mvWMEXQOE3wTqxWJ0cJOa9fi2pSFxcZxdbS5e16QG6YvA0SCmPV/baPLim92wTUrYl6z4oQsK4mNZaPdyp9/xUUS2/OVktgwrn/W6v9w2WJc0LTERgkEgvKlf4yulFL5WdkS9KWTCCzWUxWYAX/cb+5FgrfQI9jDIUMct6+k92iUcSGnR4i+qYKfQrgip95X5PNkuRhPxurLrAPPOB8li7kHigtpgx/z7Zc00C0FfMyzoNfWTBgvW557ZdPbVmamMwihpOV445MCa0vLrnBlh1XwrIR+EfuDiy8u0uV6cSXSI3il79h6cGbLtwB3MIGTMDotkcTDuP3m1+90rHHgQivR9gbQlkoyk+io9o+Tmgetha6PyT9kKV6gHrCnIC+uGtbfrGqPOW5XQY32TA3PQBjZrjHIvAe9rq0aHQ8cVwJyYc1upUNOIXWXesHbsn5lw1xecSUuUDQuU+mtfolhlqGjQjM0UWpI2vYe8m/ym4DORok3qyA10773BSbyQgBfhXkAe8Z4Up7IvRH4PuTwqQGmlyFvWxNgo1vSw5XVNe4Y7UYG8p5vAcl5GCGpsGiy/f+X7iuzRgsPHPUC6ok45A2RQo1tEkmfwdHapubD3VyhfKL5mVl9Jh4QyCgNYUQj6PI/Pt5hRy1fYV0iPtanNaoBaKbxwY=';const _IH='abca30f3ca4184da17e01d92adb43b4923505dca8201cb6b9b36895ef181cfe5';let _src;

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
