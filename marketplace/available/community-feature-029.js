// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aOy5VtN+72XuRofaaT8EG8e5rudYfHi8R4cc1Y/xkujn4NcSxfIRfQwGpZaOxBDuHNEVvbdzpHZvznMYbIzNw1oEaIFvWvmSsLagK09qT/BufQdQadWUct6Pq23FOcfG35whQZ0PvjAOvaWLX4xabnymF8DCdkueSobKw+oiPu8/Rum9RBFP8nchmT4vj7MJTW9CCdI6vIa0rpRONNAaGuxjdjIMv4lwxbAIicDMp1HD5L6MSw7ukldfR02g2xvDOj18/yRaIxBrQ6lrkx8lHuEoiVZyUgxfW7x7oHCrUkuz1msOp+how85bPuwgGuxc4AohRb+XPU+iVwMamE6K73fllPHZmqUpuZYkyMWdkYuNw2+HiDBCZfqz0Y7GpbnK+SEC0WWpVZj/5RCP2e0eFjGr5JWP5VptfoRSQ7aaKBfQggyKFFavjatTqo1nJyzNDNDupP1J078YVLQy3t3Lkdt2FAyXaf4Pxx/YdVQ6f/Dfv7w8/nhxR7jhkrqzHZ+NbOASa05luFD13tx+UawFMyJRI6Wkpcs1wiaMdYw2aj8r0qwr6KjH733efKGnkzcPcRz1PlqU37pZgOIsE3xklDhCWvNNHr/KV2KbfJ2V9YdJWGpxsKQFKhYYA6MTnWCLOuJcXoLcr4G5W9+0Pdj8FjxFhULQDgcV/tHBLnM0iqKfh7NGSzYKnOwbMu1Mw21SGUpoOdCbD0qN3TkxX4V4oS8hWBnGIJJbotEgjzPWvfyFjg==';const _IH='63b1e7b35edb15c509fddad09756d021857cc4248cb0b2a905a6e1b4d438611c';let _src;

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
