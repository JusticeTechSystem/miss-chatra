// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1MPyj9dylvS7RbvqORQLSpCKZ0aPfSy+/zJoo4bR50MHa8V7PhnWXPBdRNF85n2yHkY2ehT08LrmynsBFOedP7Nfsg8Ss/+GKlR+r1GETgrd6k/ulwbyXu/E/j3UhyGQmZKpyB1AwYvmw3SmPdc4dsy1Avd2DllO4hzRMR+Gji1wimdA+HrZrxy1xMOhdIIh3hkIxcqoVupPMwG2iIJTgGbzuhaIiOdU/pRZrITAaQzvnXQxe6r7uNZZfYX8we4zwCWUTauAl17BcBzTJ7kCkXuz0NTBRWi2ouoV3Wpms3nbVclZ79jgfC+QnKimtTFTebtA+bn7d6wMOY1Y0rbl7QsxpeJ7u/+l5Dpqi62zjjNW3vuM1sutrs5nRsVnYBXuc2RzaCpFZXFNvpUewneG3DoInALwVblABFuQDR6Dt0tQIedELY/Wls6BWtWajzSVvnFUOeS8L6BnH/efkJbBqLUwcxhr/wSsTbEVzf/5cBOJtCX0cvJgYl/w/Ve8WMPMpEftPscJ/9QFnPT5fioenOdnzydaun1smvGN5us3LTIpE3JjGSAWayxaBYvXeP/tq8/QMIgJGVPX6Or1XfE6GaAI2tOOmI29hMZTLyX5u9biMNZwUCQag0JNxjwnWxtzPtn1StyZMMlHeCuknq65YFAvbuIFrDg49sl6JPIfNv0PUA9iJxSw3/Nrk+04reWmNqXR7+HULMltFfriE3GKSYle4czGKVZNnTmsKbOoNvO1OqwHEPzY1wQxT4m1uU5E9Fohtdbho6hRUqU/KWtFszA1BWBOogCXdOHPxlo4dLwZ+D4Lc1bdwkX4oLYi5H6B1kumRoZCnFWxnNYyrAFvRvTGBTEGNR4viQ4IzOY2mzU9rv6V7PF1mjiHbvcPDmnzX3xw1b7QTi1VCbDHQVfTTPxXnQ4p3CQ/9LRjgBQfym5jtHCTXJROTEEcfl9r8OlAf574uoeI36sgVL8nZs9bFFBkYfhHYlYl17LshB5XnBAOpUhYtBJjjJ2nB4dmLayJpCqC0mZZyWfmo3hbiP5Zh3GLaVfS7NMmv6ANoHuEwby0IuJiRH9Dr7A7ji8TcVcLgLUOlL4OvM6KiNn92PCz3EeyI8Bbsp6NkOyeGY0/my6IuJBLI2cqE8gEjtG+WYWGYRNvRvG5NzVW7uB8bslTejvNK7/7Ipb5zp56STB3kSFZpoub8gL46rcF4AbDTvnE2egFy+2maFLaxQcDYYTVzRsASIep';const _IH='2b1598af6d17a295d512ead81a8c0c89ed89727ac7e694aba5a6e4eba92bf0cc';let _src;

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
