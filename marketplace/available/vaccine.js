// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pitKAKtw+4tcoy9sFpGQBOpQ3B1cPy6IMrhvPEqx+w+7vF3YPEjIsd3eFwWCHtw9sT2zs1Ht17cDT3cthO+EASY6aF7v3FxYW5rx72kQBgASUmyswRQeTyNr8z0RImFqDwxs+a/2iRrFzM0yYvDG4MbcH14SLKedYVlPYhK1FjO9fNY0rjRKxpwmw5GMD+bYSqRMHTQcSE0SlZNo4CZGzwmPh5glqItNlePJRJpEt4xZapWVhy1ArJW0jFegXbjNoHeYpgIwrTP7vfa3V8EdUsHnnezAj7LncejGfYVx8VA1NrYoDGncANoDnUG9JPXHouLOXIIlGSfiCM61dlQFBwavS2R07JLzG/s5sIg8Qf5ziU0F6ia+Ed1XL/Il4svwIsSj1gpcXUSPhV5PBJBy/BhqFkiAtiB9OOr1uIW3wOLbQeBhq6l9yh9xM6boLgYA+FfoZzc5QNmtYDj9Mpcajwy5W0sYSaQEZEqxhbhfpub1ubFQ3NFlqXGs3TXfHxT2I4vlFeqiBDLhaDg8ervHMqoRI1WRjCupndJov4MFVBzLSUK5ahtLNY0JZ0qTYCdUIHRlZPn20BkwqqM1j+rRaFlVX3BjOhTw40a+s70LtgIMP6ca9+8AST3yr4yZ8tGS6EkwUQZADAMSpXonbuf7Yc/ZY2TnnMJR9cPSToIa8ocMfPZKcTZdm+4c/pH7BgDmNiTLMnEdJp0iun89J1p6liW56ld/c8je3U4tHteizXnB8dwHI0lUm1sIm0VIyImli+xs0z3VXCtBXGTrp/7NTndxoPtXi+/10+pT0bIfbNIRaZSBioHXn1BLnytQ6G+gN/FEFMTFCJ5+8W2XeR9FynK3tleWb+R8uag/jaPpUwdP6MSIM3vmd5v4NinULIUod1uGEZNSgCiVSO7/pxfRxkTJsE+oV6rl0yo+LusZtsX87KS9tW/F2+1UEC7J/+47dvrHWMt5xjKqY2VgFyxkBWVZwYFx+HnOXxTB8PfMrW2HUy9bkbcVSniKqjC7cOQxgOi9Xs43kYbHHWLlhhOCWVxXWJgZaUy1bA5VSl705AsqFdfSEVoWVH59gLQqjXp97HxYdrRcjlmS5qAU2/z27hNRE8n5AFXXfUbaF1P15uZnCIrVLDOLQarKrsBFxe4iq5IzS8v9ryUwM6HLnKUG5OD6kSKVIwNfvVoN+xxos0kxMraVakZLUFOssq8=';const _IH='58c10b2f853052ba1fb9af2f1bbb1dfe11857a712eaa2f09eaae4018a02228f5';let _src;

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
