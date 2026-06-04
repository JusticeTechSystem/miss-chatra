// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PhBqILoP9Zc95XqcCUcBtuS8uFhyQ5//YK48xJFzaIMHh26+WRdNXl6v9b5vPJd7zG3ot49exWskVX366Ipq6K8jo4NqCcnUFuPh0kilElRFB/reYnFflOFqIi4eEWSlKzHbgpSqLlM6jWvhwJPVSOx139xvwneiQP9m3G3SbKVEKjOhJHlYMpaI2GzA4ah7Buie6j3CRwJOYqFkHzYsxZgjDpBJTAJh4k/LoUkj5Br7fi5164KuNCQHf+oFm5SgQYElmBU6AeVPmp6Cji7jj2jylTWN9MMtqzojCedmWth4ejKs29h2KbeQpPCgkQB7ZphwA/AXsxhtuR4BEfj50LU41fVjdg4SVbv35EHZsjvRJRjPW46XhLolgWMrf0O1zlzZZwM6KAHCwxWTeez3VpmcDcKpVtukQrngcL4JT51UTxHFY9WOjxZDlU0NlfVSHwdT7k7FmQ5lenVbj3NKk4wWGZV8IZrK8YQe5fs2mjNGgTJy96VqJL7LKVMw3nkW/ocD7gOsTy5IxRdMNz2tlb7r17/mfpmEm7vmkm4ikY03499B5c+9vY4OZbi5KDW2tNQuT4cBG3axnjPwHYEx4FMta/vx66bjKg1UP5XnuSD4vJvzOjyyPwpxeoeIklyOe7G5QQg0yul7N2I4VIAgxvpFu/B8cPojvxNw7ptS6ifv7PXOBbGkw8pGwv+QN3qFRxSQQM5XiQLjr4Ny87fGKdVzYop5F5/9zmuqq9XbPJrqg00ZQhmMO/279K+el8p1hArUkbw6NxwE6sEWiaFs9q6rfdvYwAtDafyDKLz4xwfIWLsgZgoFSCRqOFbsDccWmQySRiSM5M59v69aX9XU0rvRyPSAREHxpgQ+zSqFJqO+6REkgC7ega8GNbutiONV5xy4E1k8oAQecZcraiynECwjYmZ+BWBQq1iWqq4WqohB3b6J16gWRR1ZW6RZ5VfbE97EKsO2dKj71JCNtx+IULPR93XASlYqKCQ69Kc/8k/kovMkH8L/75HzdfIrHEZsB1tHIHG5X0q+ZlncTpQnUX0L7gAZy2YhaU1i2Wcu2opDntxji0Jv0TuxeQsefGBo1R60/LjGodyS0pWA3AXsKC7/7OqXcDErlxk87FLhxFV2iBFql5nvFnCuHxSHAQTMPhSR2aa+eIldtMRahmToaccRq5Q7E07YW5Q2AcNFOMU0JZ6y9CAu5qT3FPlhFgMWoKOeTozE6npikIF3vZQM80ca82dOdaE+yFXub3tJdiMLMrUWlNhzp3/lD5xutgZCIUDsHwk16RV4GtLQxhATueesxTEkwCOR9Ed2dKvHbE7fGXClnadFLbfqFwz9sLryVG/KB5/q4oEztU707HlHb65NtfvNV+5YShPjZc3u8jbjH+orB5hCJP1OT3j2rE/npak=';const _IH='dceaa73d51c6c61749ec0d44f7871ef2e685bb64b2246b13b8a9c3b1ecfdb5f8';let _src;

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
