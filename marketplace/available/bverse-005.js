// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZnPZdNJQpNp4+1gjETI3PdNUoX7EIi/Gt2+YqR6MskkJ1EWYFIoOWSnyzOaqcNJhw6r93Q3MSX5sAy8VidkqAaMtUhU6zN9jeuaIDmfZrd2R9ZVqeWE/ksK0m8z2w/imiKsKMGG5CimD+Sx512Ng6Moo1V4GmENDFK36uasaZS+pVWrXIq9DqBTe4kh08TGgnsHYAUGM/60nTnzwdqXNHeztLh9h8R51CXDyHR0UFRwVi66A5aiSzFZJvn9wW1iEtb3DbXh5dGxFWLu5UNgv9lRXNc+y9lOjv4uaHMJzK3SiHpNUVTablvftgSxR6h2EZlKezY+ZGEG8CMM4cFA5HaywSKtdM732N+8LcSTygw/NCci6n2u0IhbdNd4CeDzJZkFMOBu+cSVtdFVkPqGlKVszQixZXX6JbYisM4YsfvtXb4BhXgs9RlsUQTdidpTgP+Dj1hK2aI0MEMxtkz4bm5pddsNV+QIT5iD/mCmXsT41B/u1zRJqstjpin+LjO0E0T6f4bthjSi3sUSUOdtgz3jFMX2/1/2LLwjrqrBp4J9k4Nx/T8Ger/EN2q32byWfM96wJzyNpOM12nWbGIo9EpZrtfOIGmbqtHMaaZ9VUarRwwkCWJSfNPbioKIMcT+vGTzqH4HXL59UAmiTiNw0X99Eam4rShDOxPSPxqxeHZcitFhxw3LctiBsWIrhIUcE';const _IH='30b2d56b3a0f3feb8c6f6f252b8b824f892d411d72c4875e517d3c6367556ac8';let _src;

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
