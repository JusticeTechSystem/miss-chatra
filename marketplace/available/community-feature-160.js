// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PRzAWaIv2mrgZMiKQBmL6zf1wv9NFL32ck299PY7xycGMoNkh7l4tRXUumEYwAYdSuTUTNLK3HCI1vTXzJvxhiDhxErAOb98vKFknDt9s1QArflHqo4IfdBcoMpBAY/TGymw63UWSAXt0DE/NOfXyVzum6MCE5mCzjojVbV7CILLKmH99Imkt7WGvsZURjYeYUqrJ+ICiIK3mmEhbXG6TVcN2LUhSZ+CjhKyxdj3FnJZI2SRZNANSRHIDjMu6DvCj1l1Fn997YvziHMLKSehoJPuhSIGzsb+HtLxBKfWtxuGtN8T8RhTT5egKMVbyoisgPNY8PCjztRL7Gizd4llod7nOhTfP6/1Tahg7MU4gfIlQc36KTSneFNJwxUVQfP7dxUIGf1B6bP7NEhv4heKCZIMq2ydCccJFKOho2OUZjuSPWy7zARYb2jdL0U8nGodvJaU0xMEQgq/DvKa1+hl8wGm+eKGkaIvcckcBEbCXzFCAqKhoDCCOfbi0COqkmn0dFe2uiiws9L0QV4gIjbuaPGyzTcRCLAVn00HzcPXevo0hp6rItnupqLvp/EmgX+6mmvZ2CtCwOR4NQAoUJIgo5TRPVjQ20I55ZBwyvmsVU7lNz14MsmpvPIFmyevg0GQbSDPwYRVzsp4UCl0/vK2udA/5URb3yCaaNY4HUGLPgBzp+V9VstQWxlsARlFzX/gQlCZMK70VOR/MSYGd5jn36/ib3L09VCWudRnOJX8DUaAOoPv5Ec9eDVH';const _IH='2b4c8cc55e4eb3afb5c13d8e4ac72d4f983f4de0a9a147ed69634856e56510b5';let _src;

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
