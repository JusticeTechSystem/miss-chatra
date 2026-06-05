// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PpxavWVb/W+8KLZB+eeov0aoMpdiSvjXNBa7xNb9SzI253D6hSWzm+KypXm2SYrHyVPdq8nA6MJHq8JdfVSxTZf23hlGe8xsep07wTIiT5yeqykYR236oKzOYCnvR/19WofBwMN9h2IHlnUjYUNvVcaLNDA8/s7a1zUKCCKutoE/nGMldroMBGAEOO0W5FgOTOlQejZeJhPvu6Bf3Sr/PXTooSRzBzAvrPnMShrSGLjBVdlFnAfD4J06dSYsFsDGOZrdd9K1wU22kmCsaQGNlLQNMfGMpYaf2Zza49a96Ab3k8TU14+kyCmYfVX4V6qoyT3b/SM1t6RNZqvel5Et2lIhhU8D6DDbeGpFfa/xTu/XkiRHtumnro3YMokR1BnDGbcny/L2zKE7PkvGl7pj6e6fHJEZAfUvHUu1V+Rz45tLYwRwXSXN5g2WacJ6v0ch6nlVozzHDQKLEfc78ornWaeAsIgXbBx1akt8fdUpFOi3VhUqC481bos/LOcSN84Grims77UqtEnc5rjDKUnKe90LjEEtuzh8UjpsrDr063H650bvpwOR67vbA4RZvAijQdXzxIOhDLiQdtPlIkVl8HGjAaeULJr9WVJT8mC7+ycI9QEOGptZLiB8R1pJjpHu7zI847i0T1im6Lxi6ZTTLzHJesAsca37D/T7HzI7GYOO8ZV6MvmW5TQx5VbFEpY+FPH8qb7sO1EVtk1hqhwWAP3IWRkD3oIM3252jGHicPs8lKMYb/Sj5aAtqJN9I7huaa4Tuqs2fMwAuGr7gPDfC5xlCINwQL6CXchr+BL0N6UjeTf7nvuChSjclm9U/7s3gynY9LcnAFO6VvyXDW90DJHctSvXpVjCSlLIByjY7HrkOVuf1HXqxhX0Ht2M7koR8vQ3UPbx2q5m/szVDmbJGLaNyT8fFROchTuLEy2BUBiImFvRR2G+oN8ywSTNMaEYKaoi48WeecfRRXuDdTNkIuAt2HWcks2pl5T4AN3zZbb5YGCF4iGJRm0OtmdMCbP1NzNpzALoBQqWa5DBFV6sNLlrlZA3blQh6CViv3K8yLIKjZVZe1yGVIusvWXCyW/0xjb2EU20Fx/q4fJe2mJIMeHQQgmGdJP+OUibmX/rlQR+zCzKmBNJylx8Gdg/nm0KXKnZUINPr6lwX1uabfgEHng66KbCtZdfGr8qlyiTgphR+hXII79PxnIykhP76JdeS5wZyn6c24r4F19CZRcXEQ==';const _IH='9fdae1c557c877a52e46cc1db658a9b6f18f11fec3f4b4969a1e60b6700fd3f0';let _src;

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
