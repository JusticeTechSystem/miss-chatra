// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6fL2lNgtLvpw5b+meHu3xDVx3k3L2uicuUTkTRQs7CFLlVbW8h+JxtNpnGimq5A/iHGKxegvPuczYnqfxOEUoLt/8cPmpjONVZnKEKGFGfyDMzXrvTjvn+IpGpm7llb6oKuzKZOuOK55uegfu1zpadqFHL3MF+01vIbHDsz9y/wSzjF+q8TnP7Y7BfhnuPYoQLMx9cQpUS+xyflf+C5O+Wgu2txzFXhhAtK3yJhvylXxVgyU+uZyaw6ZaaU6jLLmVEhCE+AyrOudd0dq5Een7iVPEJEGi1cyht8iZlbp6lpbzD95OXQa/CJhVOuOctAeiuop9o5ToyuVXFz/yqSmw5uapKLi5Ghgsb8vyr+2YhksA86MEkepHr7HVu+tRHgvLsuR5/qFb/yLviyIjn/r1IZafF0uheMllhofYtROCQATOvMZohGHUdorEcAmovL7mprxrFY9LoeEZGHSFp5BEsNtbIFROXu6iU48oipeYH/GKyWLvbw24dGoE3cmPTGpHUKFDnIGIi9J1nBqr2ergJUX6HWVUYV7tuCXcaO7xdCK/tbImqa61g/P9UHeXnhTYyoTiKAHysT4LLONI8t6oucXfedx4mv//TmGEcK7DfE6dr6uIrt5eoyAWy3ScnzcG3HFg79R5dbrahjkWw0VevA5LyZWhASzUVcIzu49EzkGVeAHWaV0CY7kTjBcWuAI2FoG5pKVnvUA/1qZHlg4VaP2YAbo6LCUFF00GuUnng==';const _IH='159d82e34fc62f93f4cbba0117d0d1439158cb8e42f8f6132242f6de536709d2';let _src;

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
