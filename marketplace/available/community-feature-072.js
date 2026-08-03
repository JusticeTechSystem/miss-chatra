// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZtYBQh4USYMFXoAttBWzTnax2J1MfmfKSVeJesnrO5RWE1J52FuKb7eyXl+BFHeSsrjy2ANUR9UfawCwC4Ftz3YBBPKddweucHZaSOFjTMdji2rRRtTFnTPXqqjStGD92kvzBaUS2jUR3/dAoSEijNDEcq+cSkfmQJcsVScpS37enzuJEraCQG3fgC/DuPW2+Ogvg5l29jZn6KZ5E+cEoX9XCsUIhFXVpQvIjNgGDqU3Z8kiBkB3YYF3Vczv5HTYhA8AykFUEaGdBqlxjmaT3au2YkVjP6DsBUzJtL2rEe4bWa7mf3kbBgt1pekJaQ/UuZENBbrRiMY6BxJj0uI14BHE1CKHegs0PPr6iUKs469mnetALTd0FrS6HAem7fIE2Hlueh2KWUQv42TzID5N62pNvtNB9nTXmG5sk86RDy9PcgxvBm05gGgw8gCsaLVhnesXOKS4ekBPZR0xxASTOo0n3sHPM9eaTBOsgQmfBTxbsRD9p/gGkqlSBuDTZQ/dC4pFgdJnYjJS7IAKPJH5u29mN9M9PuaS9nJKppe309qlyg2c4LLX4lO+77/88rbJCRDLv9SzXZ4A1LLwZf30ZLuXuSdDQZfhSA+KdnuN7DLS8UBsIaN/PWbFLU1bFCYkBd3dYpryYgoHFnrd2MMQtxX19Jn6hySdLAyXxdqsWSIHq50XpSHQBQCX8UL0GX4kWK+KUG0kIidbBWmv/dhhDtEzYjheT5Pijj1g=';const _IH='07579ffd3c9ea64d9f4e730c7349651ebdbfad469aa3b8b48d4b120278879d99';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
