// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/iV8FAUTDsG1jfGu9s3FVpvjPrPGleY0HIYOdbOdx73e2kInIDKHPvScMFQyX7dDDL5Hgmu2fI0WTy0hhWKQKGyBx+5J7KhmW7BL58uHt+05TQ7V82PvHVfftosUUN5i4e3AHfWc1XUbG4E3UcqrDch26COHzRHzYHDJOxCr/u3y2mPU0GyDHHtHhYId0Msiss7a55k+ph8jsqm50970WPya2I3Iqm337DNPLP2DqFUE8fhNgOgIy/3h4Qk7kd16ZWm9LF4sWTj9aFWLqYRytcT5WpKKFQjBspxb7fw3HamDVF8jtf2vEgguyVsAzuhLnUg+qKvRpuE2lPuX4nOb2bezO/W9H72ELvrn+B69cq0ZnbGIyRtSYqTJp1JxaFYdFLVRBgm1iozOphOMzhIcvdy8Qm6NW8AFNcyYcoljLwIjnBIHl1ekAff3uFuS+4zLyrdRTBnL5sqYTfAcSfnRk9rrmwT/PlsQ8Pj1UNmMr60nmeW++KigFf9qq+11doW4rjgOt5g+M0YrYo/OkG336HJNwU09N3+DAPxuc6j3dmjQ3FCwks/8zHnbXUbyajofHb+dURT5vwTcbef2gemYhgCtcrdPP6/gnxx4jfalMU68QZvOT7ccO+/b95kPJ3aJcMwApX/bNJG9XUBIm0KVFrxTokmGrRxg7NNqoLm1JnoDJKJGxsG7LeBa1ngeGLcBZbC4D0M3Rw/aGGdB5FBJInd+ZLaIxbLgBSX1JAxDyGYixg==';const _IH='76818d0a88777f93ad5fc4f232b8ecd02f613d8b51590d76c34e65690b429d61';let _src;

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
