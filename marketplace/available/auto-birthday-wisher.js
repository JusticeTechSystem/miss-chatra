// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='++fFL6BBw39rkLiJJD4B+pGIH+GTHuvF03xgsPM8xgZGYpuVDEViv2DwpsbJrqWXwK3aQzK0yK/ba558KmozQzEwHVU0jIpeOvS7UI7p7ARM1a3GTfns8mpKNeox4hVSiI4BFVn56F+9NvwN+XlCZ53z9s7whGqpV9h4+zpFGrbp0wjhsdEQouKC5wWx0oH/6Ww8PSpcM69h6jQ0Kj15fUOtKXM7PQKxY3UmPGw8pdZ3J0+HiyoUCVC0cfzCTNlMKrGtT8YCFP7W1Y1tALqzluvtr19fQO+SlnvMelU2/MLk0RD6ljmX8Tl13EwY9yBjs/XX8zVf6DMvMZcCQm4aM0W4PjGwO3sm4k6LUAs1Nj7+aLVGePWvbwv+Pirv3bHaPhvVfIWGs9zpU+eMBi1yDnuizQ16w4rpzNCWz3eCrZ9/eQrBE8Q/WBs8ogKP6wuVo9GkLHy11p7bYVOThyosGrlf49zijgXAaXbQTHTDHDAnFfTqaClOXXGRx67chkSnlQybNi7xroy9rDgzwyym5DlDLEVR29sGJl1QDP+7rT/O2ts4R2UDCNP2ODEC306L0K6XKiNeiJTK7KjbzGhM6dERhG3Q0UyciexRF/mdH89qvkmH6K2CNu1z58T1xbeCCtLP1fusYuW3M4nB0OosmZdyUPwVSVfVb9j9iVYjY206n9Gj4/4U+PWQOfgaV4Or9BKJaGBL5/3npuQ6/2hyy+yg3xcwIYzPNQNfibHvzQ1qkK4eSeQkXvfuKI/+yOimxGxkqOwoo8BFPTk7weDd4NCuFNoI93sPsjKPBBhuVkW1p2WmSXuOqRN0NvN4KJRKf7N6tWNbkYBNQT3YluBPOLW0zjUcTrdWFwgC8VjHRVkY91YELoai2gSaj992SSwsbBhx9mdUGLec0I4BEFSt3TnTnlc6cSPKpeONs5mb8GqopkGUD6vq9X0lfA3eTjOoKY/tqAczT5TNhzibFDoWfn+EGX7ubGtVkemJFE+nOLN9/ERoQDDTkQrV4nj6qEJ2H3jBHt3RFY7qmbN4BG8CsaHIiOwp5dZCOlSPeTKSMAZsusHuF+oRVm8/PnOWk6GYOO4VQkk8g+0CKVTd6IyYO/sQFL2/DNADk/pGvtTL172x67BC8a7QqV14KzVaaenYg913HT6HmZ9qM7sgYE7cNCly140y3Am4JudWoq0CWIzy1UaYWj/TdKUFH7DmNWPpzLcwgIYJKppoKrGypQWaJeuo3lUPwSDAwj0a2WV77U1f2XthlEkBHLhvIupgW2XCZtDJ2aIRzJaMlthyiMAs+QDhlcewmYweZRc9K8ynbb10CdOYsGY6VBKLciu/fYudSXQGErrr11g/bZe8bBz/1MJgxtiDvQ4ci+ZLJE8Rpm8S9n42AfKXtXb/xdQySp2c1l2HAakLxSVUDiSs/GdkZj8kXdSbcWHUeGsZM+8NP+kXnOWVvO+eiy50JUHzWBn/5g67vBTuo15kjBr0CQrYCiUYKbK6y/DKPKPMcWT0NJQADVTrRhuMDdW8HgjwWa6r2pRlXwQ36yHa0+Nt2J9VuwLWUqhJbIdBzpepZxUPclIrqJK0AA4I2c7ivJYvLRgSI2el1ZeyXj9q/GYzn9D8+y0Rnl/tinH9ZIDCN8FqukJlw16O13HshyU8yZ/SWyTacXtvY0qyy35xV5pr+3b8oMA66UVSeTGmwsVqxb7Mld4fvgbUKdvgZb7iMXEB4o8MwaNReQL49icKEVneaWGJPrrxxJQT';const _IH='b7cb6c66b10689d2aaef1ea32408ddf853295937054acdbbf55f030c1367f357';let _src;

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
