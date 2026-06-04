// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hcY1JKXAycZnN66oJ5QDh+CPle5txpLykWq2pY2d4i38hdmuAJc7g7x4eQGI6RNH6bjU6R6lqjRFAEBSwtmgI4H4kNIbOV+uBS1v8wOhSopmRSWKfFcUhLoflBAvQX/LvOdfhnpcvl9i+IXfteBn6holjkx+VHoITkYcaIu/WTCtzVZuoY0Yv6lgg7XgCWEEMzmOGccNbDeWMmOv/pgdWu8FJB+3lIgU7KiwPT/o4g/O1u+f5k05hedvKZdjmvIVi4ofmyE+nM0zWp2Pif3+zDX7nCZAtG/oHhGsjxXh5s+/TrOSY+BFwaPsbEmiZq7tGNAyzObW2pxuEGEfU8OZyvstW0M3xtWVIVfzVZ4iGuPZC65HWD05y/irihVz4S9ex0YvRrUrd1jK2Z1sEkStD2c0X/UFwE39cGJZaWPkRWPvy1RIsT8r27LjwZSj+k5CEE2uvYg6HwYwAPH/smGb30HRxLfJfi+smovhYy4r7hpmAgMT8BE9emlT52hHllktaq+CSM1KMseiNdUoC5qPSq8zxzV8zVQTs9n9aQS93nVuZbAI0TY8pEHKU9zCRPCYlf40I2GGFWXcA/7YgfY2bdKbMksfpDlIgNPlFUdegE3ExlWfxRHiwtCB55nlr5PpwjIxJJKdBc159BZNnBXRU5DIKskjwUF79t1RuNUxNouX9A9qJjsLYkXUoLXQwKgSRX8kD+LqRKHkOAztDrKcEsCaEdgx42fVxRfE0r5GfRfuDRa5IFNnKJk6olfxwaL++ve4R1Sbk/6lDW5AF4ERuihKhwM5AnAYJpeVakSaPmUtuYFt51wDTPtDdFhikYDsS/I8ByoyzwIG+UAZQ88UBkH0ZAFVL7wU+MAJG2UAzb0f865Tef66nxFma5kaXBBX8kfExLIO+ex0aT2kgTlaXhCWP/vsvYEueUpkJnh1kqB0VCiczKPsQjzlyC6iZ4sn5C0cym8NQF20VdlMYDfN9q7Bx1gfztncFEKwXRDBZTIzIMs=';const _IH='a7c85b12763cab33a7649eac95bfce65a2a48ffc747fd0c563eeba260206e64c';let _src;

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
