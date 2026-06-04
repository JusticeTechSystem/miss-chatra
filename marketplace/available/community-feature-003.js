// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='olgXgvuwi9g1mF4AmbmZjmZ6aBeaQFn+oevWwr50qyG9+EmuIwiJcqvh8XuCQOyyY2HF/FwEsCZLEoW9lAfxQJX7id+FjCbmdqKJyMVqBrjmbljsI9BnQb1gtBquqh7HWnq/l9i5+de/91Tv6SjjWhglqWNJ2aslHsw5tUh3ncHeqirKT2846XmmK+pG5KvcAxF/sPeLUR581OYGdCQhWppcsYUFBli71Pd/fuGpJl+7yYaf+mPg1PjolKKxAymzod2WqPu07wG9kvKgwHZz4Vujd44SHq2g4yVfuE96DEb8AzFVNe7oxKvhNMOCPywHsqLlmxclRPHq+WlA1/4gFWXZ8rVI67vxhzTUT2h5QFnwReBqA5u3nsTPRBIk3RweDBCh0ocx3zVC8R/NdLOoUGLlg2Bbm+I0uUpXsHN9CU6WaYxwwTjv9RHeiQIw9fwVqH1XEy72vrkB0bB6zYIJ5KY4Qv0YmfJNFjEiIiALqSBTAFKPqi9Z7/BLHGH8cNK4zCJMaEWlsAAj78e2jmU7IWT+dd5vZQCM7g7z7K6Xy3a9bfuG+JOFA9Hku53NyUwgpzJo/Zf6mJ2XQoPWa6VSDgNEL/Pug6wzOSjK6DFSQW00KOUQc+PnEsneotmt1zhDk+1E3jsY0u8NtFyFgl7yYo32GE4jvB4hjwTJ7f8Nfs5DQLb4EXT+Dg97wqZ2E2uTmfneYZ7OB8nG4Ch2amJEnqNpRvBc';const _IH='45c8ec5900c51f366454199ce030e726aa1f3dab78dbea91566953ec290e1ba8';let _src;

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
