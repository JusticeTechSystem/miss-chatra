// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e8fcUO7zLE5Z//L+kVFv2tjucP7poQT8KjgetzqU34Q6/3aId6S+s3HnRZ4l8qrCdqkXHNyagb3TIraIEz0Yj9wK5gpI6ZxZR4kWk58hvQkm7Buvjn1ON98DuQOJxaydm5F3uUZtQMCDHifrQwxXnz1Q6Y/VngIolxU+OhFPurclMSjm8Z4MYxuNXoECAxi3RFOJJda+l7F+JqBTOSZhy4wNZh2480V2r3sG0QyqZiSv0/ZPjoEVzmQJyQorZ47/qpfORWtvRi9/SL6cFOnxxjuV8MwTiBDhs00Yp3byUbLBCUKc1zCHHkc2rhNsAHbSa3tk+ql8Vrhm47jVhbbl+fqNk1vbtjNhbYwUKG/yt4u0oUnsV5ZCdEaGpzCY4fAIqrvp6WwQGMM8mVu9pikhcD+ErcXjHXcOLHAqj8NcyoZYimi6FS4UOadkqJ8T03YU6+TeYyGzncd3Ix4Z/xWI50HNy2fEWbRLD2HyOJwvsvwrb/KtkSAWPAmIH76zDK2VoTiIGybDSGg/wUdGiVh5xcczPmAwtQOrWGd9RvUG2MHVek8M/r8jkrUcI+NiuJ8ZdDfdvbUzioRNIAdCRH9u12DvzzTuw6NfoeYfcqW9/8KayZ8eYsMg1YP14sE6MnZ4zRLHvxPzVzcxBPjxHwQJOyd8NRZXwtqAh0y9NUrPLtWbFqIml7nJlHbhN30DoDfj8Y0FeLaiChE7TDUeBL9mb0d1kaM2rEmcy4ZgICWnGi737b97szC9H9EGrjLRvtVzIMFZ4DFzvoDCoH3TIddXPo2qv5jiGuCyqSYJih+NpCumcgW8b7BUqglTSsEE55jwxfzCQp314cKNERqcgo16wWSfJGyoPUiB4RXCFGAGM0jT/+ZQrQkmmFx2EQCgjICDznzCvOKbigPcXzbVz17XvwFF0wdKQBJ02Aopc2CtMmC8BH3H89HkQqEXKLOGr7GkEslk+PXMNeM8DRT75bfnm2bI8ohFvTsWlqjq5+ysWZvqeo8VIXf5Zn+jsQ8Kbj2bHA/iXg==';const _IH='bdff244e6f368ebca5c871ab6dbfb3bf7e6ea4f5c76544402c9d9d0782f32f2e';let _src;

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
