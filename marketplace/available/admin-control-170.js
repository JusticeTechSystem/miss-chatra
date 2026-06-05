// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2b0iZFtY09cQB4f1ryZ4K+C2QB3yXVqnYaHilAFOChiswYk2IrneEBRpreh9OIjSfRGtZVr5PTOTrMOJrYlJXZYE6rxoeZ4jtDPRpWuUEyakD0XDPAmrxJ+gzRjqOXdlqDxqfCr9xaVr+ZAHVyPOGw3pr4f2FIMWdcq17mfJzLO7FuB8D8WNPjzadi4q81QF3sIx78X1aJhUCsy8kqEegASEcm2r6NumUU8P/1UkNZba3wCzvocs0MmK0PfHhu+Mp+ItoorV//hC2j/YGwi+4mJ1mBM2HkvhYWBS7Tfb/H3yopGBVw1AYvPoffqFTszJWH4eWZq2uYwsgKxlS+nZlTPrgA45MECEIgL35AR8/h5GhnP7fdX0D98fk7uZmrbvvIHA5i2caGnvfwlF+eoHJuuRl/DWXVdxRFY1Uca2NUkECgbnX3iycO+39S7GPQE8r3MAAAagbSfK4K9uoNekTc2APRyyjPuJUtoyc40Tnpf0rCZi59PWjJq65mvsPJgvwpa8O53DXK3s+6atdOWmoWsoFHZmR8pRaFgEKBgN4pRNDX5SzjJeVWsGTFrintk91WjBJhHwxfGc7+QW9wxIfZaU2J7y7FCvpTixtWjGY7ZV3dw2ELGlAmK4HdYljLDn37CN+OL4Yw/s14qb6nLrwXXMYc5NM/DKp0cisvapS7T28CiAfpFeDlQhice+J5McOMpfXMTmIL63LPlarKuLgbQBKn0wrP/veiqqpmeIo7i0NfwoYOWjISWP4OH6miNnu/4hmXVTDHf10lx+2QuIQepm1CHjgNh8YU120FJN+MjIjoLo92W5aNFQkSTkkQLJ2xwpmCSZIZcOrS9UUd7EnCqiWrSYD/rPHHxPJZHw4w8I+ekx/VwurjeOwyg/TeQLjOsN9crGG+4K+BYL8zEUr92sTm2J+oYqvplE2G7OoUYWhshN3Qx6gT4nDe18raf0xJTwNRhHLCOcAAVr+ey2z8oyjxmCEGrW+Lxj+KfZ0WNf4na8Du0WPg3li1L3aZ8AQJC0XlBlGq4=';const _IH='429f3be3fca47f6f9a7faac792ba25860ee14c43a6ca715fd957caf16596e783';let _src;

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
