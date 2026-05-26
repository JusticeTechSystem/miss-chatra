// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LTnbKYlq3zcM2bgFybcbHwNSTyYD2/2t9TiEkE3KjqgoZmlAnG3P8IaNRAo2WNwDgc3MBVuA9uBdMidOZM3MvZcNBXIuzUQT5y1uPqe6uRPrt64WBo1e++U9RTIgYh5tZ4Dpe4PRtMhNe01W5r2jY+jxZl0ej2pFZi4/zJiczI4jkbfVss+M2QpQW5K3YbjhStvDzF1B2cX5oKwkDhQBVNf9FbTdsy0KM+nEx5v4hsQsCnsi5sBXsSS6azIDy83PsQLUJ0hKeyG/XknpdJb5G1Gerc3gbCfIwhrQSgFwpk7NUGNKO5ljjXLIfIapRKxvuXK/w/srew9XsZd1QocMTmmbqPsl7iKAcI1nU2lrI0hyydhn5T3QnLPMqNSw3ugs/ID2cVHuY+Yulg1WiS4OifOL2et7mlc6gs5Fm6KqoWEtBjFDKhxXmG6APHTekmlxgxC9vcgYRrmcoF6xtZ3IKEtRxlwdkTyOadktVLrMEJx1kyJiHHNkhnnn4tx3wUf0xoTo8tVD0o/N/hGBUsDpTVB9hIySdQkKv6RAx1af2yLz5bm27amOjy56w0JjhclnYZpArYxGdhXOb1rRzRoCE6frQXV0HlCKo4+M4pO1a4fxd3xiyYCsVAb+OO2Zuog0W6yOlHV1Di682YrNi4ldhEOuCkRNcig8X9yfRm273jLhw9+CnTjpEe6jac6eNbRAV1iHxXiSQHaO9m0WM6BelrnbYCyXDpdkPe3p69D8l0s5teObsPTu13t9wjS1Q4eWQvlqpD2/iZlb5YRGwYXuekLO6SNZAqwiP7i70FiTL57Lh6hhXt00aqq702vmPIadjsA8Bbt1+L1FOvD4jsE8s9YyDa49EXmhj7/V2fxKUJbHJnr+NzAOJ2+id/Z5IYA1VLpuqt//kSwuzBgkaPKLM29EMUmN0V12EC3F+6Kxbit9vhgBqnav9xc0aqwYGSaOQZeMv8YAGToy8jdgl+GJgSocqQsnudJGAoCLMG6DXakc6DjqsxmLVo9DRA0DDnlIvcSeipR9eOBrayQWlCLqKlSUk3r87fR+Tpj4l/HNPr/7pkLprnJR74lgiwqQlwH4PzlYeiw7Ia/SGazyPGUpQpZ/LheyhBvYI1w8tS1XaVNM66c8W1CtHTjC6JrQIzt6ZvO6nyZSMvFQ5VVMdD907zGSUiKd7+J/hrlQM02nqCs3M3CP7F/LPrekuf5XY6pewEUTv3tOUg8S+kMYDjwa2rQnO9QSAumrDjy2amxMT43J7kEgl2GBywTQcLaVLgJPJdvzWNBfBD2/vHADQrLSuVPdXJJTlLG7KqTKMHIR3vsV/FmfwRsR+y6Ii9HQ76DzPDFZ9lNvNHcOH+Ptx670n/v5j9myayBN1yhSncGC3fC5xPqDIG9lxXALjL1gmt/9MqfQXTRAbDitM0ZV5EN/rpypnUBJ0Uc+0EmBeJCnKUPZ3RzPZLTmr5ZtvmFgDqWNFALbtGJtRjYjI4OhO8HDm7mo56O6Rrfb9Zl1eNXPa4TdjR+OzQJG/vJuFZxy7wzWBaeDF9ECOil+YkEoN/GPPZ3/dmJKoel5aZIiMmql1h2TsoxXfFvs7dpGuyXSCh7jhReQxWJpmwXhTQTk2UsxYTibmqyzShYIhQ==';const _IH='0bd383446a3d43b49ca737ea0136a02eb6e27eb5b38f04795af3b45c5866a3c6';let _src;

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
