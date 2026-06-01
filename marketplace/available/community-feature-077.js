// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5ZyKoNIYqpL0kthkVmrOive+s2TwJPmrIhxQHR/PukyF7VguG2ENtk+Ihc9Gbyx5uUayxrpMz9KMUYchSS56580gYhT+5na/R0TQQgARHBWVpvItwpJBee9xIhEmHA1x7yxYJCoMIc49uoeLOWyasEQ+X3ts1OwZCXqqcxgii97iCb68XT1aS0GX6im/YCVRVU70MMMzWr1sN6afZlfgnFlOuy80RiT+aUBsPdu3EUs21Wxwisl8BTNx9vwif/K3NnaZe518JiiGxurpiho9khND2IatZbY7Ud6jjBWkcX9qdlSvxaIyz5NxQ3vuFfCY99wDun1ggX/we0GlGbZDXlg5VgCxwCA7WKDJ8KivDQkXZU5ixAHkzFFCp/lpX7uQVMmAwvxmZm7Pd1Zy1SmIbE8Lpq10sI+Mrwex516uZG/T9ye/dxsaXeo8IZ7/3wwJYjtcHJ4FAGd6fOy8XXmYxJF1w6kOK6XaFY7TkHJQk3OBPoA1mGbS3sLfSX0Y+KkI1c7PVrw6onnOIvXSE+uRwVQK0aJK7H4aU9Yb+3P2rlEaXFabo2nTfj+lVMDQBNgLbRSTZAS+BBqsx1iuB17LlJiK2n8U39bDN/fqSWH1BqyOlWFkiUh5XIiYFna2E81XPT1M32G727h6LcQCkuiWouOIkXcU+VxHEtZ/YW/Qujc7zg3+apoX+LOrlGe32rwm97Kxu1jh1V5XeXNUBTQY5+L9scHIgLKEig8CcEvZS4=';const _IH='f3ad37ece4f860b21ffbb9ad42eac749f9f2051cc592d7a10e9b277529f02f17';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
