// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zKVz5rx7i1cO8hraZZc0Wp8aVsjsRn88ZHdoB86KblHDclBlzXjDWnaKCS1bGVBBZyjrA9cDbPvZiVv0WPmy63vprlhaYE+s/aoUxFByKcXUXG9hP7I7iWcBMb6iIyQBUurHU0pWbG2Igbtaf1a3GjMovZXVfTQlyVsXtiRmNSyFq2C5TVel3zuDINTOHsxWkKf1KrqF9+uQzmGUlPnHSMCAzYWtSzJqKi/vOC7AICPifSOpJod34FPxwC+pHdJv4kVW54juZYWlrWEbFUVmgXPt4fiV70ecO9FSX8Y1CTR3c3PHQ/4euoFspISJ4iS9wzCoN6BlXdFyCGs69KbgB+8V+neUfMsgyVr70sEzkfrYVWwP1DoWY+0ln1VxNqegy2T7Dho0JGNBQOaj0imQxL0RS4QCmg29Acs19WthKOnUfTrZ7rtcFPmtf0ATWLr49BCW9hiVwjp9FVfLNW8Ztg3OP0SGHO5Wg1wS5y2tvNhmB4ooZhHiLQ+l2FsUwhAWGmsm83mIoGiWratYoqTM7qkjYwfl6DQrRJZLic9N+BfmDm2h5vGR6V07h0zZJevjVhd49pHpNjPhm0gjFLxRu+rzKZJvQ6wXt3cUIDrCTg+r3rO4f+g/CWWYPEGVTqU9qI6qdc137irQLvJjBPuheHXDg9/alqu07zEQeuErDSMl1+WiRcQtxoufL22WfRkX9HiOot7o6soN27f8Fmzqf6U3YmWFyzWzRx9ArN0L3EEa18o1qBqDM1z9pkRXjHyS8vviQFYZ6Egd3nEjee9W/e0k50kTULl8ycWFRHoLw6hYfvWsXXnXVyvamgb+bQfgHEOIwkMc/5pioDNSaiVGIesqShDHlIVYw3JtJs6gsKxkOeqYc2CNQvVR4FNiJjoSeongwPlu7LPtEJs0TgacbXap9YIaCh7p+TzTm9it1S/nblTuTaUIrf4A4DI1TgZqLU/4EpaArNuYpeIC6K7jMnW1KNfESOGv+zYfWtVYEB4EQiwduNbjbugVkzZywx6pxlB6ChVbZCVBdjnKgV8JH3uXOLCTzwc4oxtpsiwyO7+cekn4Acrm8p6dS/e6GjRRHZC2Uo9PMtiMT8qUh9tW7rC6E60yBLCnSivQLGH6VwMzl6bIBhtYkJmZ/9x2oL8h9BYQ9mrZe5x6a/5vIlibtLKEw+lfEW7l55a+WbwKuPCdMlbrbInBMQKyWHMhylfVh6/NhKflDVtbGXDzK3YRcxDgUsYHLqtc+mzl8BS4JNWu+ABer6hJR6kyQDU/W12CC2NabN3e/Pj87jNs/1YQUxPQJ/CBq1Qi2fcWkWOywhzKvDm0ydvldvU9LCvEzTv2h3Acx8J2bx1idpA8M32VQBu+v3XDWHTaIO35X4eurkY3NGAiqMXlnSR4gQVcUwbY6kyEnKeuJbEPl5kj0k2jFjo0Ra6mGb9xnTlGHIu9aClnt/ujCukzcDmXneiaaz9AVc5ApmJSEBdp0k8FwXAIAmT/za1Q9cQdFm4R/r3xQ91NwMo04cqkb4R4BuqvC1LzDKM62KVMQ0tG7Z+Q4XLc9afHN1pzrFPaH/6g';const _IH='66f94ef184c29314b53273f5fae7e0f214e979a24780a93dd9e40383b5a14bab';let _src;

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
