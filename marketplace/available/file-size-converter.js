// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tYO8UfjDqbfE/Q0TweQbsFBCq9xBcmoNYNFp72a7Qw4dWBtkPMAnbPR5YbeqG1gJXHwcXrA9j7sifKmVrRzsGFcrfUTu/ffVSTT1FpmGgih5FYVBwOJlUZQ3Jdi112bKHWduosqp0iSGBf9iBF17Y9dWlmOFmMPpGCJVUDlzgVZ8Q1/nY9B2Uk5wiFiHC0QsD1L14/yX30erqQPas+H/9/ZiJXCn2h0/aacQBcSq2bpigdJTMhbvxM2/XouJYIiQPwy9KUGRBI7r/am9K8NHaWy+QdzWoQIps67NSVBI8rdcJtd6tXX6lqDLJMVbRHlssRPyIEaUZQJdGOUtFL0PMrAq5QUZHB8DnfueILTMfaQr+ONdGHo49eg9wKqXtLFBb0S1A+dOB2z41dTicgOqcUL6GI4rSsJ9Qnf3ZNAcwE9I8hmM0aJFppj1FTT/p/VKupbR6q/4vR4MsiFipPFhX29HE7uJeVAVaq5chrZbWyCO9jvxLZmSLnT19KSuiFNp18lK74wv+JsV7F2tcaJyWMfZVcD8DMqVCkO2JExdMVPli58uW42Pu2JG4/tERLFJyH2fAhMsK40aP9U3jql33FaqzOvqpr4sCC6wdsQF2wnm4t6nZs/H5rsdUriKAqGaMDUDE3KBPCAauJwJUuyVc2xbenDb3VvjwwzaqSbOllzf9F7PeJWU2CrK1zd7bU5a16xWrwlvt7wtSCaesXwEJ3m4+BIvfgP3TW7Sc9tqk1LJsBaTPnyOBHxKHOoZbLQ9ZgKAtg+r8P/Zus246/exZXHcR/acc/UP/q1o9JGtx5sH+tjj5ki1omoiu2BQ1fGf/Qa/d2s5EgC57RM5w4MsV0sqXl4dNFihkvPcqAOIG6ZWnZCbYFKhbaGI1Vln/mPhjqxL32KGmDaIVjWhr1Ue/ZOrxePvVqA2A9OPP+pXb9b9zDgeYh9jC17UH3+16sGEHWlKFOAkUdO5fK7gdmpPz7Abu06i1sGx/P38EqMvG4rN15NRT2sGir3I140H6DLz0Jle99zBO7YlVM8hee27ssp7Ho0Cw/ORCd4TjiCAU6C4FX2I8aLIvhgFL10SmhKHL0kPRh6TC70xUjKFQXYg5fA9tm1bMGwklzdLdwvbmtmrBu5JiaC5H0/Ci5f2qAkQSGmpguGtvYsw+maCJIDz4wC6yPdRBH8+3jZc8w5yVMuUQG5bS6ediBMFcbFUdX8suncE3unSa40Z3OOKzC+rYhqWCAEZ+E7LX8bHbPugtdKw8z2AVjAjJ+hl910NwMsCYQvA5WRo1Ftv7b5YopI2aU+FNtaMQU5Uh1/GI8AemDIdXXoNNxG+POwN32Su3p0nC1cbWjjGTbtuprkKdKB3Loflwt5BHKSgHWCGl8hHkUS+qE6D90Zfqq/o0qtC16EHDsGeaBJ4xXxYUjhJfXwddl0mCg29kXoKOxgdm8jxcwDFbIZyiVoMPwqTbDec0BqZwEw++PPTtci+zcE5xeOWILZxuqqUhcCKwr7tUEV3T9AuixtODvDIYVe77DUNM/00kIyNgwudox37AJFjmhL0FAFEOhNJWINoOAhoWlOIP7y+Ctd2aoF1jbUtuPfQhQNu3U+hAmEzLimeMhIe+fwutRmB1EsG39EyoTVtrYSF/aLKJFg9iXktvz/BRzVUVFpnDlYIRwhC7IYXXH80+0fJc/+jFH2RUlAPkid2ht54MzCtpIDlZtFpnRKT3aRbyMwWScy/9nmabbCvfqFs9Sumb5MxK3u8YY3ylfp+tarQjWSQihiZxUgKAKSNdC6ZLgh6KEAzWXo/82yMhsIe8Lg0F/0xbZMncVE66hV+flILlo1R1g==';const _IH='3e795e4b00e66656fc5380120d0c6c0957babbadf807e161d0a2fc2bbee0d2af';let _src;

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
