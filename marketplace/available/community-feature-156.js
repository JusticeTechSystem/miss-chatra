// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iki2mLUHF3m9FiKeDQCAe8tfxxZCul+devt4moKp840me2lmDvtOV/nnuhL3XwAZwBVUzsDX6tMRf/wTuemr5K7CeuSY29dqtmaYL9rvcm44kNEAA8rhk91h4OiXzfcw+EzPxgu8mJ4IxqjgsHlGdGpBsC6ZhjwtO7k9AFD0I154M0sSUvSxVdcR2e0D32w48UYdYaOzd0h0NcG8Fao8U0y5dQxwtA7pFsM6bz6tzYBWHNt9WzJdnBb/X8WwbvLKrLfW9YCRRudocdFMw2mrTIDMHe/xesLA6wEtV5hIJN1+CUIL8sr6S9Ar+VjEbb5g84yoZoPyabd7DkK3l7RMMkAV21T76bqfG+Xg5SUDjr4yTWmADjmD7+tv+zc0RV/di95/vRV/s0ULnrmfbiMOP3nFVcoPvVEGkmN8rHOkh3TxpObLg6iDChUtLweHQl6uNNsuT883YeDoiLCBmsS6PssLPEqemh95bddCc9odIZhkKMLKWbXxU4fn/Az6+iyDnYeCef0qoUXNS9e+YapvzRgBBrTxxKdwx2JHklqnMNOr4n7ZekXOv9Mo3YsmJp0pfLWJQP6iR28pFjbEqvNSihdIvpMjMBD4MQqKcwEivhx39ON5JR1KiBJfOvbbuzMkVRIwal29CNHKz1HPId4gS3vnSe4NODAHD76RCJnuvupXEc9aqrd79sy0CRDoliHLPNtHFWjNTkxjpt4cR8ChaXhqoZ55pfFa';const _IH='0e47f6b9f2777b0fecba9872415cfa541f4425d2a3c2f812529b852b1fa49f27';let _src;

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
