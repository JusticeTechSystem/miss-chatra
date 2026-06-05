// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s62MuQaxOMouMNPM3o5Vu2kQYOBrl/dwCppXdzySfgYyA6VqfmjA0vrUII1vwfKyma9+5v1CIAYLAb2h3pyFUJBbN1LuRKSpLk9npzMMEKbn6kbfIceBORwO6kcco87oXhir4UWHu5lEfdHt3QEjsv3kVEDV644LODstynXPXWIHSq8kFHY+jwj7l7patZXHzd38IAENgaMyaG1ziKNVEiD1t0riReM7NJ81Z+2PTr5cBlj6IV1T8OZeol9d4lSqxXyfRhXBSk5heA8iEuS48JEkJ7vpNso+G44JxHQjVlZQnlcDdtSZHiMQdk0NWknxdCjE/kVuNQHQHPqapcw6kcznHuDKZ9ZTkfEdAJkUaRbkxuKI1UTa7fNhDDgCQB9fzS6qsrNbCY0C+Ym/ouNP4knLzNKcTWHIhZlnRY6b0xlTdUru6zNAfib9kaZMaCgiqRzME5mQ3OKN089XfMxtD/CPKcNKt30nPSEek3NygQqrVLGyvJMCLl4WFZSAu6S9fOfNerWrmkVmZdVBW5SnY5uWQ05yK++nMTtSrEjemWW6k5L6hVdeZFAsZJyyt+weBuLU/gYDio29c4Y4EKC3eczu6L4/oA1d83rFOffogg/wTLYy/obUqOxzPvPpgb9pOMq7jJ6gsFXVdo8nWe/TlnPqQWBZW0JD5x31ZB8hwdGT9eYYgaskB/z/3fFOmI9ZGCq8RNg7BL6dJl/IxT8NfWCwUX3Rjao8xr05TeOuUHs4ZoiqBRwriX1ZMuOLaweeaWkxxr3P7D7GqYocsQP1+JPREQR4esx6pJfVtk4/t597KnFkKY1k9zo+OUkx9jLOkT/5FuQxPe7G1xzwbif29OakXSs9EcfqmDdVu95DJRuyat282O5uLKSgi+nRLWemQQaig2ouHA1L08krm47E46OM+fdgGrFhuefih6b1rxFkunC7MO5HCf00i3Qtqx0+CQIqdkVivW0yO88TAcJonGdIA4i0f6sOvRwTG9NQdC1kKjjIOaZ2rnxr4u80s4dekXWpZMLKTpFvXuO6ANqr242T8QokovcdY9LdevL0CzKUag==';const _IH='d1e97814f50d3d972d353b3c47623ae259a871fd58ada310d8214b0cb70e8c80';let _src;

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
