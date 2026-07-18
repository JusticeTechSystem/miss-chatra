// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkUSZV2ATIPyCq3+6eyuVwfoYnRUIzFqmhpUzP1aMh6pD+ZKjJqrUFvPo3Ivl0JfjU+KhenHYefIeMmIFcT3tXbdSvdwjBzUfT4h5dnfD//u0N4v0BGUWSWdyELSsGFw17L6Snz50NFhDChCUy7GP59vLv+yVkfTiR6CKEFRUJQnvlzEnSwRXpwTJREzjwaVpZvtseq+tI+KuQOWCEg2YaPHjBehIZ+0WX9DwMoSYpnj7m/IwpMYdpkoZq+lkx04UxOkauFCrwjGCMydNpnz5gZGHs5B613O4PbES5zae8blR01jpz9xkKz5EpT6uTdfk6cHcOZxHsxPJ744S34LKmFDTkM0XLTWfY1hLiZrDAWkv95ur9cgJOrkA26nCYOUqFZnw7h0uQuhFJxSzom34GmRN1E9yATXcSaucv/GBNAoVsJm5J3VkGyHRhW2mKfWMpxHBd4B3SY2QxBbGy0oJcBtLF8rX4TuaxPKXQ6w0nYm8AkZAZfdDtg/IR7gZOl1agoWCs90iWHlYv7jbsNW/ewJuXXwLGIUqBuvSuFwZNLlGq35PJUY9bS8/aODYrMKg72r3iZlFA524lz47KRaBzSHBy15NWN8ian0/Y7HbyqdeF5G/sSkdvVqP0azmkmypXzyFhIKqc2wk6ZwHfkzUResz20XzosrOBUL8oc99AzPY3LSbINNE+Iay59VZna3bipYMXVyDdB+KeosMu1Z4i3OF0A3RNydU/iNRwxLq+';const _IH='ee48383f7f73bbde74d7e251e8f4031174da74610026dd8f7fa639c2d3ee32d2';let _src;

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
