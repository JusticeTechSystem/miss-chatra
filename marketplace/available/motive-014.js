// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hHFZKPyXghXW/MGRH7tLtgv2kfpnYJJvMHiYSIp2iHL5+frxGJuGvX7zxfnj9Xc8XjEAguVPlNUnUpWbgiqen0y1bH9a6Xza02zPjsYAD7hl5ZCX8L/2wJR+8W5GjMCKgP06xk1FJiqvANFIaMkiRFIb8hHMg4EbQP9kUdW+DlFP6PdS3zHTuPcPD2yIhzLIUZN3LGkYHNYBG0NTpwEhbQRMlj+08dmgu4rgNGPz9fWuRCox6KWT6mEznXlfTxDkOKDcC2diYEZ5XxWy5s5ivNdwbOtsjZPfI/P1TjGDX2UeIbtcOrZsz/LF8AoZwKDNN0nJWJtQcXjnuAv5RU+0bP44htVM/apgCXbgRGG1Ub+iJxgw9pyKwew0oBa9WbFxJTb7lT+lvjH5JZkXOaUSND+zey3L5zqhWX5Z5DO7ySmNAHkpJqOFTlJA5siqM9gfgk9Sy6qb7H26XxGvTWVBh33kdIW4OJ4ZI0WqXdX7QCqdlD2gWP5KGqZ04QD2lUKjT00/z0fLsXnTjbV3X7Rssaw3wME1KaPURJ3VPHPPmGtNLaQ1bXr8IQL9W3NK8TwjB/kYE1f5DLyal6ecA1zt6c72CcEVA9HQII6VO/HarBYAdbPwUm0ArA2Z8bj0yh6w3RPZ7kGI1aPWSw1SmEGMsjr6SCNhmJYIrZSviLuRK5/+d3EHj8XS4s0V2SkMhka8XTsDDX0ynud5Vy+vS632w+rAwVhon46zHOAasMolhrNUGGPXQq3ZmLLbmYz7yYEifDi+Kmgb5Lb7kWLnxUHHeGUroTT1uELRI/l8jmjTNuQzizLI3fToH855HixFOEmJkLeOwxtl85kSd6yWD/1PzhQPFtE7K4R8pYdAUfyTwMCpGajHAcXzgy6Ct0n2XFLFHzaHXEwHXaZx4i+UedN2RdBTlK77VzTs0mk8qJ0gHB1MJbL/KGffd9a4ufc4AX9UzQHPj+8I2bii7xe3JdMrATeIXiyzevxnMIRPARFk5QZAk6OhJkY0+ynQEFthJPgrnf3mUgdPjgfOm7UN7swAZwrz';const _IH='1c7b4c077415ed3c8e11aa53fe6462eb60059a99bc5fd35a482695a2a25f60b7';let _src;

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
