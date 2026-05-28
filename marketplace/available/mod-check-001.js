// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+/DgMHzRGwpJZazYpxZbPq4ZkNbDQQiKK0GVWxIfyhO1dFtSIU1pBmDR4aNnx/NdVJRA6xglW/A8YoWQAc0K5qdWiEIQ/bPuAGRb5Cfhzl16Jo3KDj/8xpaCEAciQg1jcBZbb6LkZA19cxe5bwDQhPz2qwDPwk5rd7bdemIL9vI4IaNE2arkCvxDAZrjMc/NBjQT3zl8oyVcpV+TB/JF4lL6Xl/mVrAvOUCSxWmDbA45vRek1a9kLNMA25esk8aBWOQdfxTAATKFdGSe+4TkQ05oKcurwgkINzDD2oYkPzYcZD4qfEBmS8oz0RKpha/GfSkjC/+feN3z9rrOfzLyIOyUAzW5WjEUbgXCIz88jvcl1mXvJlV+gZ+CvlTKuaNZoRGm3WeQ12HmhYYmlXiDgYPHuhKk8kOQVqJBzUMpNjlJ8pJpdYDY3jii82uz/Np/jaD96gg5VbZY7PkTbSYQF6vv5SaCobi7ywmuCt+7aJtUSBy9Yd4qbdFPg+S0o32iMxP+K5v8ajULHn1d7P1Bum8N8v+gcBcl0FuyXNK/NiNtKzcuRbrGsqpU/8yGH8iAQBMf+lO4N+c3SrZ2zmIQpOVmf1+PGX1XTT96WXDB8vli3SYpNLlpGdrJI0KDInbMIxDo3qrYAD97pWOouo5H11LqTsY+x8G0vxTwvWX4ujTiQldqZSTR1HvBVGRiAn7cIeVUCy19uSHIZgdF2MzJLp2RatFUVHiXXKWEaATda87GsUMfcFnMfTkRPEb+MughkQRZFdDbPZB+yeTFhC5dA3IQRUzMlU3T87G947+sZzKTRrIxTpQzEvWOWmavPVgwvAH9/kUPZWrpiVDCi63mfWPFlFgwdja5Zv2bSGnAmICwTRXTDGTvvZmjsF6gUbD4EiM7JlwW7TYFsQO8Xz0XvRBhBfYUR9VkQCYWDksDO2en7YLoOgKHzQH1Gr+wAVWmbgMF+4o/seUTuh9VdwCWB1ld5ZuiahQfX9nECcr9LpfOOtv2OPT/PrNVYU6rlAz+Yi9AMdkE9v9GWhrcaEH45Zd+oKpazpW7tE7sRkE0f5XUewc2WcLKBfHnZZxGqEqliB4IRCtdhr7rjSu9KBm5+2j4qyrvOGrWYqw8/AKTeRsPm5rOVzKXoB94Fb7S64BwFmSjyWy471tJl2GCxMlPizScirvTeycKnD5SRmkDt+gQ5duv62dV9ivRUnmxrHMxf2+9Dof+fXtB9sbEFuGctTZSNizRikModbGOWTWNh1e5FXtTZUw7n+8miWqiqZYHhoILVdI/q8IHtYRL25GNM7FnfZtMjkm/53BbKbPHKkZJMwe77iJrflWsX/FYCX1zKUcjAP28UkAJ6AL+ZVzHOW/9/5E=';const _IH='749b0c4b36232561db35a39e9f97e17634fb01ace538386f630208e3bbb787b4';let _src;

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
