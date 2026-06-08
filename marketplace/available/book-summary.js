// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/wnNyX3eZU+h8B0p/QDWv67psiwGmKEh42ITUMqh0uhpMBKo45TrIgrVJU+AGTh8BWonRJUWz0xuHIvEZqAm8ajwZ2b3VDYDSD3Rp9M1hLuyqAHJwVKYN9Tu1Fo9GBnuWLqpcmtt6B68sVhRBNISQuw3yKxr5m/iwLkmvlPCYeRPwtNZgWEdwVH7MERBldkWAI6dkB2ZfZM2DeDXW4MAqJfydR+IiaanXEXKa/QrxdbFu6dBTgMYUDWhr5rKJxvqvgu5yD7XcU5hKUAne2s2rDZVtQdJBw44pQRzaZ3wNYGfyZo9BHka0p9aVZAhZ4ABdJn5iNCo1WWmhINKE+jn/7BUwqTC/ikeRUpiO6lUwjEIku4YVMfj0nd/eqvzfrSxTwlRcDY2+st/Oh9N498eIIygTX6i0iSkdE0JYz5nsLUxYpHS7FIrw+SYcwnc28TxpJ6wYoVJ3tzlnNMUMO/cfIvLcWkCg+8=';const _IH='0dae203c09b7cfcf40955ce00eb4dff39c0366c26a6a7c0af134271e5dee2612';let _src;

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
