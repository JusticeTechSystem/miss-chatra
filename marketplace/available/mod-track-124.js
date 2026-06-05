// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SneWKv9WUj3UAoUOIjqhWkjzFw74EBCgYdetEOjeFq/xu0dpYW471qKo0WLyKp5YBhH+rEy1SJN+g3rso3+VHYqz1MIfyuvuN7urFtg1C3H40pwqHcYWuoGFSAm6//IYRpOBJQcNcDeBvQJbpFaGb60zQE5dyPWqhwkT3iztiXL+UgCWMaeUyvMjNV34gmP6ZnMo+sxjRlKkWdgv62i1Jp1Xy3TTi0vVKY2cwnHT6Kz+CxxyQmDrqq3Q6Wq3SvO8ZKUNReIXZjISiN3UsP7ha3Er88gWQYCCrrP8qb7pO1y8rwdK1xrZtBGZUPF0D0OJ+cQqGbdawVkkOVTM0f3vj+sNQpJpWiqUktvTuwfQ5SCYrvf+/++Nt1GL6fv6ja00vPpXGFjBOq1aWtiFjC8/tlgp7F75VYKHOPgijC8CXvrAZI62aGqOi01CQzGWPGu142I4MTbzg5AKOwEn92Q5tsbwPF196NT3Jq+S6Va+QEzyWdOtuRB6eO7KCWvJpbbvCMeOYIcVvaVcag8EbYrdsA14UfFilQRPWAuGWSqYYCbd4FxA0vq6Mqfw3SZ899j97kNKJj5GHA8GJUeS7IFNJzEOKA/viVV45GRgUGaBxaohP7UmjVP2umbwx2efkBIYmIXvtEaYLjzCWFXewRwr4mSxAxzWo0Mhj9VKIl8N8Alt/Qm9wBzHskLgV94EqlkxyKAaeizBGuPTrHfiWFtHYHS8DoEoKwDD0Q0/UR+uCq20+K2HREpJmhwNVhZYOdqunxSX4IlvdMcb8iHgMmUH7mWAvqBH7p8gmOX6+V9hyvCK+BUFUWrTUbggOYUIlL+Yc1/un2Zw391ahmN6FL2BiKWO0tHjUDmo+zKJmnBN0DSP8u+rjaCGdqmVu5P73pR+lrialKreY3Ib5C43evgIvNNubPtmbh13YL1IqOv2ZnXzcyKvPnHFgD9E5iAHekG4ZeftxzFnt+5uXiTlqA+MrdVGpPQvycppB46y9hahIkDMOn2DQw4nJG/rLCYyvQ7KojGsS8XCmQ6paVzmnjzN8K2Gq7US9xxd1p5qRA9APYtko+ZQTVWcVktQEHXe0tWfMZOlASWLFfD+gJjrcb1mPjM3MXL+D7IAg4gqiVYUlewZ8eVlyqOcXD9phAbStzYXFSnnhKhh81q/nLCaIGjJCK1vPhMYRITN6AM+JIQE+TP9v9d5Lx8stBhwKNOD5s7e7BeJFKO2wfwk7lxJOCBeTAV/mZtSkqu+dpnkwb8z37/fibcNMIvaKceyYoqLgb+b630LWUPm6qB5BrU3fKM6eKM10rFMfEPLtrd1pjsRhtmOXvTY0z8iih05hGT43U714a1THJvKdZmf6ixp+dQOR0qMJfLOTZQ+8z9qhZGQ';const _IH='97a0302f0c919469d62d1e9e97e1a45ed1fbf7a7909d0182c4219985c2164445';let _src;

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
