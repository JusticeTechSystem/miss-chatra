// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XkwHr82ObrAOAdHdVTt9qIwDbj1KraViAdNSGMrccSS1U8LJmcjQHCVx3BLYuJWwdSsAYojPIpW8HVY0eKH4ML50WK2zl//BHTcPPfuySSajqvHfR/pz4WukADHrMJMPEMzyEwcTQWskyz/JwOOl8Xlmz3RlPLx7CUc5bFdp8ktJCuRGvvRkTvJ0gHwjCg0TH6mUETshXTirwiNsgzl2zaoq2QJALHxCBBLWCGqzZZpy4U+QR8sGqACbN+9DUXPsHSlQ3cUrzcKybqFi2c6DBpc1vBrZVdTtTkiwLwKO0ja6WoZShKP4Tqoqk1+Tpqg/rDKQg3f5Q10TS+bSUctyBvTsM9vB/BrvFuVbsgMIL7rI9Ywgvhy9kYAup3cPyYTW0wciAyg/O+FERytXBE4LzDYhdb1hhLgdj565kFyeJa8ujKob/37X6RNCtfPTVx34Ng42pT7BHSVPRmrLb/2z5tPm/8mX3igeuGkDMiYS5TiCUxOq0RkFIn3xKB3/BhgnM20NVCQlFfGLjA6ioq/UZsSfrn59c2wgIEVN5JCSJRnDzgu3OvFw3LMZK/jtXVm5b/Md1En5biTqboENoXFTAtEOtwwSfe3q88rJVlOEIMe9ApMvoC2n/VSAq21CK6ukq1sIzB0cmkra0x6lBTXHlmrEmi80Jwp6TeZIzazvNkXrNHCzbjI846bbsjYDrwnCnSvc+fgqtdztUjZNtMScgoD75s/h6f53jlm6+de0ixRXgUn97LA/7hgKHTMTe4MJQ1ALerf/pS+NnHz+wu7Dw4ttYsgD6PDI629xqPBnmx/JGoz0H+iXWHbC/CdkTF19U8IRAXJv/9Moq5D8Mm9X5bba+6mCElxWHqTssvom1eCWWwnXechJ+lqDvhDffPa33J2sa/1eZ7NC1ME4A43MV8dmct+PtGai0Y81qX9IkyKx7i/ivptC7AeDDlNP/q9DO7YrQizW4V13XMe7uEU/oMMPdvEzkbPJrol5m64fG0IY+87LXXYLs9hdJXNBB1AzMzVdrQGcE2LdBqRUxT5AJ08u3qdWNGUm2SInmW43MAmIT7wOS1PcO4hD8U6QCw7XpakNNGjiev035cNkmQubleCyN29coOskm1aiS5y0/62hkhBx1qzQGIlpKymxdSHX3Fv3ZJsUeYFap96NDcvn427JKswlNKUUmdnl4cIgzu0H7t4mCNHCg/cn2q1o1VYwAX3UiDup+KfVP/tZruBSPywMO858XYZCunGu0R0PTSg3PgZefsHjYE/QDjt8cHBk9yj4fHVD/HyMPSn2VFhBCVdof0Zu02gLJnZ9g6pW/6LedtyowJI9cOr10fTZa8RTmaFYHTOXHlsgFuD04vSrYR6WqdNduLYsZbdOuBRbtBW4FOGKeXacAQ==';const _IH='547dd696f9158988b9fd5a4a6ede56e0819a6f2151201d46875991aa54d0db1d';let _src;

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
