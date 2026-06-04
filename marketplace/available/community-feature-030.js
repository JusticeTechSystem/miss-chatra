// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NiHGnKg4R6ZF5JzG9W6KQ6AZl4u4urwa9hhB/Ky9k0TIGDro7aflh0LK/E4p56eZIueQYQhutHiz4TJgo4A+H1asFMPvo3gY6Qzz0BBImAi6IfYJzo//Z5tcmwWVl9imM5aMTCol++Xtxy+8EUL9V+S4QSlTZTO1CIufiAjg5ycbZRQi/TYOPmLNZyfUcSWWPgDvh52iHYFXvHfu7MvIfSlyeylN/Ig597x7HE1H1In3+s/Vc+LNU+AJGVG5R5olCXvgfutL6er9KuPMgqoNLnXwrDY7AOYsxbA2bcFIxR2UiZAKr0BANNgMJM+BLTjLe+iYW3mtj8g0nSxrXN2ptH056ONiru2ASNXJPF5RJQ6tJHa+OZ/mysstPTtvjh1qqmqF6K07w3bmSr6RSXCbVLLUz2oBuKsu1ohyPy6YVRkjGsQTv71dsxxNs0OKj4I90vD6A41n1wszl033hhpaLaf2rgL77KgByi7SGKSe+N/IvdeSabLXKSM87F/a2qT9yjo2P6MwKBgSrCrHqqnOwetiNeHTY2q5KswAhtQgWhn5LFTxd1vWoy/dZWahZ6BsVPR+lIN9z2vepewkysfxb5FVnPz0FbtkLCW6ZhE/MTdmnwOcV4uSqhUB3ohuNowuPsDLT5jMsNZe7ENfVDYcj/+lEElu6TsBETy+3aQNqKJBxzQaynPZOi1Z9r0uDGm+Y4CKaiLpw/4Syt0XEQu+nLqUvdhRWDU+fuhMD31UZEo6nwYyfkQ=';const _IH='a10f2b85da2c644730271656fb903398b19cc4eea664bbf0e29b67d142580ed9';let _src;

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
