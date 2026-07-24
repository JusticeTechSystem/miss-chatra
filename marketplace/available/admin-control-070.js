// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSttQ9tCUSjfWPJc7WHEXOBkDqW+nndzqgTXjoJ+s/uieqMf9pN8bP2zwhEulRn7PVvLCfkZzQJIC3fDv57PW5ChNueLGe6jJmzXWDcZ6drZOulYQ1EBR0tcYhDbfPWrPv+DYYfuGRU4hB8j4ShoJ4NdF/kadRQxM1WesCwf1iio+H6JFQ9X/KRtbXOIfPOPfzqhkgrgaX08HgfBjYpNOlE46P1FtZvXm8lBQay4ANdU1x42CD8hWnMqH6sEkModwh/ljAbrlI/Cwu3kjvVu/sKa0tOfN9BZaKRH7gHCXNLG3zXjDfg4qcgqyDeucOkV3AvXQ2T+mtay2cKdLNUNI930QqoZ8cqrAageLaMLvpIbPacHcsY4l2T5stTtgeiyYThiS6e1fkmt8kqoBEiHF6yPaFfybMoDKskbAuL4i22P6I5NxD+/XXSF+0fkPebKZw3xP2bBUHOa4DDPmsViORFPwH1p1yXTpAVsmjeQKMWjRzq3dN6x9oR6NOh1x6nMekQDz8JUufKm1JR3is5OrovhlUMhuUdBC6LCCupzsSvp8RuYildlFxQuM+816wSQj0yY9jbL5P3i5lpO+qp8gVfuA5LE36oxWYfUFpRLKJAjg+xC4WOPbR9B1yrS6qs/ZDjjS71NQoDLBrBYJwQqwggVLV6c2IX2lH9ZX0AjtZ+mvaejmYdZgrwJSl7M0z23hPPIK6JatMMFs8OH1s/dAjrGMDM3P4WKiU1+BIuCia1TrH7CRUQ7odPry3A38qjMbbquPSvQe5a6zpmbUdDQEZCLwg6eStteJTEk+MX4HyzQ0Ktx5uBksHv6GCqRhfSXc6ELjLW3RRcXtMPzptkmWnVqeNRe20iv60nnvBqyUiBEPPKFWKciZDHTHEw/9M48cEl6JWLZc5MmyHSdGknEG2NIoKRv/7eJpXx97rKg7HI9Gfh0ZLd+bT7vr4T+zCTWUHafXSzsSrsPAX2lWIOi26y45veZZX8ybxWyFY2RqMLLqnT25tUoEEDIQtMgXr4Kea6JxYi';const _IH='a1ef6a95f4b84fb19f3d37daeaae0536564088b2d268bd28af90320f89c0bb49';let _src;

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
