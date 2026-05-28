// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='++0+SPUXGjTi1kq8j73G0bMWIuUAb7posmcl/rOxdgMMMLDD19bKsXUpMMLQbMu7B14rmSfzu9FznmR2WlHpdDvwqkziBAnp1vAoYzfiMZcDOczRLjMQGsACR8DIl0Fg/+K+vgZRaMMRNrHc2wv7Bggf9/oJtjR7iW8+M4tqwAW2Xcpl4lReMvJl4P6F+XN4uJVgiJMVdxAz6s8kUS/XB6CkR+q5xHhQnt4Gphhcs7HEZosa4HloDfMNS9BTOVC2Ean5ARUDDXXwSLs7HIvRPBGHUV+vNeUGRQtox0YpUNTPSaMR88hKfYBQqsNa3N0cT2yLB/3UtVVaqAecqfCAVn5ApkTmd2hIVI/iuz8AVw0LQWvGY2TchnpBt5E8kq0797Ih95LMehZJKzim8m6sJR5vzVcmmcVB01/byXaQSdM+bG25PxVV5gcNoavHAD1fu0vMcI8cNgtD/iqMaIipCnb001AkWCw/RL4muz4vuQq+0Ch6J8TWIU67j+u8M/5AkoZWM5tjkjMuimBggnNRc6tTtryLpjQ13EYFJIUhD2ceiGDGnO2fYEjvuaJrMR6NHsazk41dLkwGcwQHL7mmLYfDQSqoCVexgOhPYvPL/DaJxOe+C+0SPNjHkeAoYkE7r5M/wEuDwu5YDrz8VTybsoWfl4jB5c6Lrjl8rbJM7m2TyS/gPLyKsS0XDVdtuKQ66pxkb7ivoqLDkaIUn/LAcVemCHwJq6eavjy4Wfy9k74HkSoQXIUAnJsRGFtna/geAjNg8QMCAgGhJXKXgZ0CybAXHFwC/W2EH7JR73mjcJrsZLA24gy2cmO6bPJ5cvSHNBN523Bto33PN3B2AWuv42zGHlTtCatjpO9V9CJfg0NuxelTJh8T+lBm/zIC7JkMEBfMMkUksAiDywsBfYnaJ3Ai23E2O1EQM3E+4OEL/at0K8rgDq5cii6zrO62kjOSq9fzs5/+9iWooSg9xtbW1SMWAV1f/0/AHn+X1Fbqgv+DfbxVsEZRt/uk7vF43dyov+W4hz+VwYyJyYf+BelDsciVcCg4AA==';const _IH='31ca431fd2d2772c3f69a4237f1716f85bc1bcff011ad2a4634e6c0967274aa0';let _src;

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
