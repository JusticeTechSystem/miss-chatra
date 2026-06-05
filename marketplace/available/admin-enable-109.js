// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fMPpTPqV5Q4XRuP3bBS+5B++Ms51nQ1zspla2HnG/xEcf8ndwEzP2KxX4ATkc1PC+ziGkLlea7vFhbYKb8QNzvDWNH5IFj8AetaNl/miufKjTLYpjHIs++5bmXwhkoeCX4Qh0VBKp6qrGg7QC2YAemTt09MYVYMx/qRJLT8G9GYJle+BnlypcpCCFH7FiZsvwwS3LxV78B4bIHNiiFmFey+vd8X55gMrU0ETFCr9Z+6K4GpjWSc6R5ttmPWI+XIJ9g9uaduHkTKhhgaYpN6XuIkxNvFli1nhS45jLfPgnvGuvV50j7QMj7TMhLYWAZWFQ47PuJghnIl3HG52jrHNTYkhVAc6ibIKB0i+idckVQ09oHcfoxTPedrGwc+xxhZrqJPtRyOcpefDF0CcCDVzempl+iO+JgxUnbuPWrM9MhqboV8TeB9ZsnDWo8DXbkVShH6d92J27x4bKmBjanoFbKlo4OBUqk0iMD8IfHsMyj6WjvxFqipxVY+DvZIkHoOCcgHcSQXROM3bf3kSs+mCi3dmU4DPmFWJDZp7N5UybtEQszy+Ig1DZTdJCyOiUdGATBslUx7ClodAGqBiYjqu8nvuuJYkU5pUjrurZxwIkTswmeCCaBqG6eGBwmtVe7wORiGXTi72NTzAEAgC6YanVKC6zo2w9OOaqJdvsUO/eziTTa7qkDLC4MVRvIQ8LLlio7GMtLbtibjkY3uMh0AlVNQSAzRQPQ/aVp48MZ8OJZmhFdqDE2yM9n+8V5UzZzSxpDzdoRi/VTf0O5uiN38XiGOE9EXB8lK6qiBdH3/8el98aS+XlvYsTkzypuj+4KyHwCUC1yJUXFYn5F+P6mWnEm7T4k5jBuUv80MB/Zuh7j0Itvin1BY6+1NARJYQl6D93PB/Yvtvup/TYCC4Ed+D5nJ8WjTvIysC8TiRGjPHbwEro5KhBWCfiQZJ7mPRrXiKOsgtpEV42HreOMg4GzR4BBBvgQ1zGnGZRqwIqLrjFp1EIvU4rPousb+a/EYN83HNTQ==';const _IH='1069c0112dbe814835d03f5bbb8a7f48e0519690b9df5ff390899448d44f1f6b';let _src;

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
