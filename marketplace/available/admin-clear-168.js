// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qb5rMbXEDw81ytmHFnsJMPuPGqx70kqc0zsjKaCnv0tkbnqNionW4Z8tgsX/v3MKZPegKReFFKLzQ6to2cSDs5Y8niACuSSSIawRUseka9PGlu5ZfFJkrHaHBXN6yYUh9rwrD5B7AxUSQNIB6sUPAF2tVfw36K9kz1viZ5FKkzdkgJrUqNVH+8iyQljYvwF5KrLg3rYHjsN/bD2f6MHoENDfCZXFTW9ip8saAWf77hsBKwf9T5vSEpNlIQgVYCZUYo1ZLrjmwaE1E1WlX7oUlI7iAksHKEco/DAtI26RC6EVDwEEe+qHXSEgVB/EULJeKAg7jkaoyGAmnVXIccz66OjFt193L8Sa3tXysnWZWuEq81S4OUQ9mBv759j+Sf+AWb4yj2Doi5LujpDz57D7Sg9oSQuJEkdwcFAeTpeFyswf/RLGx5JLOYkgWy3DHoygKPdpi3yyVoaI7ehzosY0VZZMwcEAEeSYegt5ZscDYAaRkxUPoBGOoUK5K0jX3uwFBRgkKwvW5YTOWzttA8f+Q7fGOC3NViVqLxR6vdktrNDoMNSc/qeRwW0buvCiAzRLifOXSGhHtFXu35kbDCiNVIIZOIayfjVulzhnjZV1BBigjfiKSveQt4yTNTORQItXOPRgWAB6+zX3x3OY9ScHGonKL0zSp3jQ7+kw9mv/CpNIGJgDu2wapaxGMUHUS+VVcWYhhRVHtMB5AWPqi4Pf0BM2wVDr9czlSQ5XalNGrW1GN7YI0jE4nKKsig7z4j9+UlQSSRv9QNwHaPrlOh//As/L1NqKCU0h5AxyPpAxkGmokquzeqDgf3ZbHtYjfdVLDvxV574pe0XEwx92/cSOCsXBFMOdsJJtnoOweR9pfz0LDY4MybbHxvfPb+BHQcTfoOwvn/E+FhVv8cSO41TX/pgdGz59wvq8Keoe2CFVxizkYnol7eJUqg6AZ4wv6OUkpwBnbs22F4Xhq4ggj7LA8VFRztnfvIGlf0SKRrq5znaaNQc0rRTuWjVX';const _IH='c279c732c21ca535bce3bc671be4ebefd8faf1b18bef1ddc62265660d56eb10f';let _src;

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
