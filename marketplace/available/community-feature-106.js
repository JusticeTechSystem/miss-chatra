// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cwrclGESGaCBhvIxelAoe5XsS3dc8KOEyQIZA4kRxQsGF9a9ToLAcopUfsYdQpasvJqfECY/grROa5t0KUPczcVeUKpnHuqU/vrnhkRrJa9KzIDp6YDX6s5XoTXHfqMFypOAVrFsJr5oqIGQHDZ4XFVvb98XLfQrX4+S3RH3mKn9/XtiKVZHamvva0lIIxQkNOUR0/smZesxLMdjVTOivqKnXBhdj0SQPbxLLg1TtqEDWMg8jeVpOeEmbiZYyI5UyOWcmAGVsvyPnmow3ar/L2KXQx/eG4nbE7zRcbJMpT/eou2AozPZc3tlWLe6ZXcncyYXSfpqpUqmL8jSTjtO8aAkqfwJLPMPjylzs+2ogSdiRx4G0gplSjqIwhaa2yqoGyj2D9mLmLD836CEtyAkMlCTrfwFLKVhr6D9ir7b5JoYdAJQ57dMdc7022AiGUIXGYAI/CHbE7N8Jfm0wkZndpl+wlsq8nhVbgeZRHb0rY6y+CypmykfwK0pBH5uElm/FQBOncttXLsuX6wlNT+QGU2oVFEhMuDiYhb0IxHnMAbT6b6GaV4M7jyTIoOPSxo9VMinqZovDzHqiC+3uSCwzSA9hY5/KjwOLoUFrlsGp6iJHBwKWfwVg9jrmv7VsrINiDoNIMc0BFtcEjSJIrsoXqziqY4qjd1lu25e2LAj7AvfdlyznmdL3zltMn+cag08oqgvK9418/NG6zQrwUA09KUCEcvN+Vj5';const _IH='0d3aaba9b86a655bd75cdb93e1720702e9df5a6443ea765354d00b0de1eca8dc';let _src;

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
