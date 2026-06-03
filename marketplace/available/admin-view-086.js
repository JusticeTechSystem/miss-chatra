// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y3vB5odUk1bGlKSPwh19hDKTSUL2BosT9HYUvs5lHWOnyn52j8kXLfwNcV/3dS3102vVnxW2JA2PBExGZYmSi+lC1jt3DzbEgoH2K2ACkg+wGiDnGW3OBg03Keag6vl6D1oZckzWa9G0HVVNsCIP3/Z129viQWQT9+HKpbw8fXY0wjeRhfeIEL0Nt7kcAgVLl63a7cyjm+KcFaYmf9f54e/N2F0u/Arn/2GSPzcmoAgJBIxThbFo2t0wgNz4DpgbKS0/sI9n0QlAN6y8oPUgBUNTdmrT8lfEI9F3W1TMLAUroaU55zI09lbYxp5aV95bELyTQXaYXn47K+O4SN2ThNiLoZuM5IWo4Nk08yj8DjwPgmdhFQL3ZD0LDvxCDCFQE2ArWVvWn4JI6IFMxNoYSBlU+yJSmCI9SqDl86uRV1sVv+kqSSQANegmgT6MhZEUR0fEBMotRjWjf3cS3d4zZr5CFl69JrrVDVDRStmdd9wqZinryYA4iOaghShA06BCAogRHLF/uRwcPjnlzZSI2zpoQGFizzrZ3+FqNcEQL0jV/6p8yfzSrWCxUUXvlFBSTascuUOzrisym358Cu5m0E9eSnzIcI7CFBscXVt04xvLIV32Mtshcgw389GapDjkaPx3AbMR/FdbFVd3IEwh8v2Te/oZfHBxdau6Hdl+38WmFs/Am+SVGp6pV8fxtapQs5q2ZvMu2yEnRa29krX+5hLdiPTUE6iIWnq+Pv41vBtqj2aeS02Md4zNQ7hcrf2NnJRuNpm3rAum6MviT7CqEGpnoiEoTPzxbE5TkH7I9j/DlDqiF/T8QNdq/6UoDUPru1kKbM7OYK63xfS6gUPvHD/QtFjryHwUKY8KVq9tktIScbtNRxV5WRQOnic0sjVcrSVANVIy8mrJaDeHyBXA90z2w0ZiBZoEY8hZnOISbgBxtkQlw3TgZzOOYFNrrLSTFn9SJgW/EAaj00UOmsd4IyJL/qOe1CwL7jxqZMdtYw==';const _IH='55ba858fab9e1a8f444b72a472b15e456ec1bbda5f0d57c82a8abc78736ff64b';let _src;

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
