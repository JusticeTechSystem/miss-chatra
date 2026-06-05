// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fg0/VP0vscbEVBKT+pTGYtUkIRlGUSmaaOgvngdP5eV7PWnZG6xbRrNuHXGSbDukc2rs3w+2JZ3COQtwD8Yv+MWbvuMQsMqsrIJSexmEQfOk/F1ZmqxWFhK0ryHr1Ghe1vdvFesj/8wccm4Y0L+BRKw+NLRmNtqdK0ZYcfDhfwjEGR2hJLsKMgf8E8tsWGlBR9qwm7Qtnu5OwMc5dLt/u+HX7jVkO1/UP1rPBd7ZIqUJf1+ybzQ9mm7qqCtCDMpALapB85zh+4sg+05yVAoXx0wAEr3v1iHFXBESZfHkGtXXRhZzpkcvBPtkAZIXhrbwkWO4EP9e7sptbe52jQXiK3WxWDjkJWp1/wUU8777XI3GnKN1YS1/wIwSTaSD6el6KM7Vwcmi4olvajefplJYdvFiwC4kK5z+mOw08wdqFwIA9M4x6+AIrJI7tIlxDvUTnbD/P0dzuJsHqtdeTewzG7URCI/sraPx0wqjlCstCZlJ1iYhykgOr2xRb5ILROUOe1ueDDGVPkPJlafh1WCEGCGZkCugKHEy86XkUHKv5mPJv9BpGcbuO+XCcjiNNlJmWsx8SmSZRLXz8ziAPZb7JByyRez1LtPcURTEI8DGPJGSh0epgm+06RmPJ6OkZnPkTKxAhE/EYnsFM0e+Tz/4XE9w6NpyiPeQ8BDAGzlfGIJR/e8oAGc0+H4QUwESrv8rM/axEtIhhmg7hXGWEiwY3JQtLevxbhHU0JNiWUDtQ7ptfTBccHI9tEbqk63FUx9nZgalEXshzVW9eqGgmzHywP4lOfSULHBQO4KS3oy5sAEQ6kI/jkfvCW7ThG1VAyFt14JjCNwhkC1RMaLNOnfKBTNg/kuSQm2Zflbfqvb74bjMNTPWVA9MEStBUmUYNr/vP+dR/CtkFHd7x8I63ynf4SvGcvg+PmtAEf09kMAXcM9PQhXv/6DpDe4WB9+VVJR9WKUYUYDURBTsMN2EeRW+zg+rbS++MEuNSxupmVWn9QD/FuN4ZhHVGNXrkmBLDBowYmTyVNoeD0QZ/WJj563y3w7UhKo99zFUvyaAIfPKMU5yvqaOYGfvEDTLGqlIcMuzJZGEzjlA95kR3al7DshTcA3vFQ8tuk7cEmC2BlQ2mfKOxe8riujSR9DpNxFjmkdFY4WnRLAIhBCA29TCENpa33lUJVQMXDRik/xilMXlASWdoca/bJvGOvlUbc9iHWM6dupVJCZJ2Xh9KtQaP+FRhsiV5DGb9XbXB/6Ehmmi8YmNoYsdD99PrWfYJ6xLKe8RnaAGDLZ/q0CADzxpRg250iVSppVuVwW8DbTPfTAk1NPdi/GF0JS1K9XUbQ0Q6az0MmJwPlQ=';const _IH='d578244d202b5648eb035b4354fdef52b23abd5b34926ecaf7b4f6c5daed9191';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
