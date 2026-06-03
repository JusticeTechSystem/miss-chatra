// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zpHYPbcYBIvxX7SQD+HJtSz8vLbsbK7rBWFGxLuMFO4178I/dzVOjihTNizHdqX156fpngTevUecqwtUScavv4zL7Brr4JcA7HmCP2jRDmMPW7UqWCmOg8IKQqPsL9u5P2LKcurZUSUBF8D2XA0V6kVEDD5XHqOud6PZhgm4GNtf1qeXFRq6L54HLYGuugjGRy3ssrX/3MKNXjpkLnrNuk9GOKR3UQnnBxShALSUa3MRPOt2spBlClrB7wdtvSfixaXzkg94WbTCAt4yNU6IMJ1qRPjdE3Yn8/mfOMLVssl2dR42UFgd9DHsj+ZfRoH3jNTm7ac/Tj8dglvhwTeRUX+WnelmZEL8aqB8dzeUDPD2Qwq4SW8uaziR8DK3uUdAe3SXlBF7HBnbADxgDIinmWbqJapRNfv8bu/y5GLchDKo1eW0pzqp0QfPpyg7B13ea5w13vlXvOfGePr05Dl49EnMKDjeVsmmzVkYalxG2NBDajTRxDw+lCKWR4rmgebFVETuN1MfBVFsqapclwPHf/k31GA11Y0lhw9EgjVQZ8KLQ2CSz8oFQQnF0xfQB8LHK0La2S9Kx0R6IQOwSdP8OZOwjr9lwb3CPy/DYum8LzPLg0ObiYLr5jPANnbxi30Q8VOwC/24KgmTvMP3pp7ldsrBvpSZKjT2V50eycuJZO4Bv2HKqpCE7GqjZ4IPOp5TW3k3xcRXKPaPkQO7wILSMrbyzumIOQdTy2BTP9hA06wOohb/3+vd1SS+e82NLQpyA/1yptOKLf3a7reQuNR24Gdv/caqsF/OvGoPUOvys4lqY0PLZ/nHkPAACLXyQLt1TVq/CH4LfiC+bGhv5inwNkRw+QiMgyRKKy91zEMqK7t7/UYfvchp8GZgaeRbNeqb2rsscpay3kNOW6KL3DeCqL4A43khJiHkJqDPdfH2GHzVJ+hc5BsAJydOsL9gQuE5aS+v2hRtfeYG/ck0xhe6TbtRe6hHoCi5V8KJgHtR5aW35NdYspOSQRvx1hGaJAfUVF9JaL6aPf3RCYts7z67HnZjEEjr3zi0pwMXlywni4b84kGXZMS19ZSDzFz3R8JlcU52lKGFDlDtFPK8mSDk5AFuujjGCGBajdrLaRWyI1q7k30OhxK63cpt8rB6UVypaznaOuPOFBwDAs+iYLzTXCXKH71GF3asMTB973bpwCQ3IrLKo9jrJyxOvE2kIYCqdlhQmdiiEbnwPQuSs/JzktetU9DV6p6EEIazb2NnYelHXZtoCeZhxltDC5Tx4UMSr6hn6xMaAbW8vHSp9rxZ2saOtkYuEPQnS4VgD9QRgCPmhnkhCqk7wiFMt3SdKMmtQOW5hL/LF9Lzcf4tKTjDZvXGt50l2IRK5ODMi+m+2s6puTfgXlnuR8o4rr68+i4G390=';const _IH='a0fa154ed3c7fd62355143ed12727858d865a54905cdd77fd011deaa176cac49';let _src;

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
