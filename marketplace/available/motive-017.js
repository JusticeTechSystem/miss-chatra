// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ivM9UIW5nZs/2dK68iaxGuRdKZbnOmkm05b1fhm9bljOO7jzEYzOZ9i8Oj/TNbpHz/xe/DmNwqMJg7eP2Y3IpWPv2F6FzGnJVUhaP0dCX214ZpwO9GdL3POyJTXZxFl3qVt/YBbPaLOxYd9AOpeUZHXcHAaexe6NdcZqV1tSVskNvOhoR2gr8AFQ0OA1X1/FElk/j4Sp+lw16sS/sNHz0v5TWxpPi46zYc3hkZzJQCF1gicD+dUUyOZFEEITENh+uTRXzYtGgHgS4Gqewu3GSyRNzskw0GQPLL4uyrNY3eB1OJxwQfmt/sig2xSsd/403lJ8tF4m4Ywwfs6LqrxgKLcAdppA9xwKdvo3dyMZQvy8Vd9Z1PtCoqaat/fSckDFQHVkPDEjap9OpN04m3jGbm0lqzCs2UyUnhNTub7VZiKecwaQ37pW70bgxECI4RAiSKIr6oMEniJvgpUR0aTTvTir2O2qS/Csfa2kTzYLQ7Jft9qKK/mvp/jHUX9Ob7la/M3t25Zh+A6LXpjKEBuw2c0SPct3Hy5gGk38MBO3Qg2xsbtbBRyk7qMlJrMLbfqiux+kVhn+0YCi2nahw0Ol4IpYeFxOJ0YY3ehtg0mIfJtTvr0JlC2iRVGsilVSfhQ2sCI6CeHPTJzctSVjwJQid17rSiyZTYlS8Abtqt6LdkZUodTSJZPW747aNitzBEbbxF70m+3XAWtdzw1B4Z0zMIMcbeF8JaG7XvzIt/YfVmmePTAHu7im3J4xqq+NA8WBEnTQzzoW5p2oCJE9xG1tnwpHUJyLGmtYhJ1EVhRL6l7VSgQ9JVzcabJmVpYBgf9Qjfy9CChjcVcD9ctl8GQX5w64Sh4YSMCGDMsQbRJfIST7JViRGaAfPqezzrLIf1eKosCWULBTMI6+M00sb9cdc6N0qXh9TF9x6XG7zB5/0UTMG0fRz5jznLoNxk3v5CSeXb99QnDAIKaEq+lQ90o+rpmnT7/x0MbbxlHC8Agr5sN7xVWLsiAcPSFpo7KPzbuX1lo5WDcNKppxrG9lqM5Q5h0+';const _IH='cd0a6455fdb04e97959c6d6ec64806f4fd3ea8f440c4b9989e16c1cb674ec2fd';let _src;

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
