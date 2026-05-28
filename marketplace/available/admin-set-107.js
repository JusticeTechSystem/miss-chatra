// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0JimzqV6diDDwDbCAXth7TqheXs2NHjOU/stOv0tZziArd2QNAljfHSFq+0OIRMPcY1qyRQe+VAm0pp3ZtkeEjlXyD9cPgGxGqoAFpe6e7SjH6tSFe5QYwhi0zplU0p8B/yvSDJoPKFBxY4L4VSuA4wMMCPEmLmjJ9+2SzIw3hTaC6SLUbwkuFBOjwpV+DX905zcssb/6l5LJ+gU8KefB2hM8GhuVo+OWhgagKf2ymsR6mYEJ48K+/Av7q8gVhOUy5irUUVaJGP2tUjNGu1kSm5m7iZTGb02NE9LPGzRTdgWJFnR+duDlY6h3+ucdjaadfA/rHQnmmztnRWNm5LsedQlnN6Y1PUcDTNs0uz5jC/dMImiZ3ZSc52R2CPhamxErE406FsLSzL2qpb9gbUiHssJldsOxePxOh/+gf6mhM07mhe6sLRbSSYtEVkmjaaa4D4AzGkQgGY2jGwQelQwcorwMQBa5on8J/Q4s6NO28KNG1E/SR3jfmr4+Y5tb7xvOKbh9pz0xkQogve86ea136v5Xzs+8WYMl9SGlLlvjFMWE85LIwYZh51mI+36W1lB3kS7DOqKj2KIIh+a4a4myeam4RUGR36VAtSxJL2nJKHFd/4virgTS5ejJSIuBoBqIG2rDG4fMU8A4R2pNu+0CDE71urMVUD2g5lW3rqzNsq/7aQmpiMZvwQZcCHALuX8mflP7P6XCO82ATUKOqhtqolY5bUjM42GMdLY/0DNuc2X4k6cgn1wcsx3WMfHtfvR3ECTjs1X5ERyh/xNChPlHzLyao3ztU9hBYKWaca6Eyb3x6xhuU3a6z7tTtNpAdnl0vh2H+lmBFv1K+uCDr3CGt0/dGJjX/9gCLYhZknazqrDDNBROM5SiuVHg2RFCN+d/q5ODF1b2ZtvNpQfuqhHvff7+h096g50OY7EMAq1rgguVVMvajuTGgDRpuRAETawZYPIQaUHp2hFJzndRik9hprMVz1RvCHV7QvwAA==';const _IH='8b96928ccbda81b466bf59065d2732703b5fa71b83ba20ce26074ae1fe6d6467';let _src;

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
