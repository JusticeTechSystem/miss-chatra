// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXkNQtM2+s2zXE8NQkutAEHo/K5/0ZwCp4LGujgTuVjwOBJo0N9bcotWP+ExMEb7HyigzTuIWWqtJlEUh5amIXeeA9kfaiD6ey4cv2ckGnJArVzSpkqQRL0nOIBDQIACn0eCOHWmdR9UUCOzVXVILx9lWP5sXlVXHDKrFWd5QjeJOLE5gwrpEgbvnJELd1qGtFM3WaQV4ivRZjGCQuL5w+q3EEvRowvMDc+FiUOvGOo6HH8ZpB6aSwRdoAUbC8pxJzJD3FqIp+0id37GJ0BRFlIgr4jHKNxi54mG4Q8Ms3FRd+O2XJCymOzscT+rUGn9n41Rapv2WFNm+TX1fftiUylJoQEnGEvjyn7eHP9e/pHBA9S7qfm4Fqq3ZiQfuKa97+kzrT8qwpY5XXcR67GABjUN/CqJvpMBsxvpT/gQ3BM8Id8x38U5jFkIZ3PngizvawIx1vmh5nto4BaJIY3TU/O+PtnG9D9k8PgwGxR5DwEnvbP9K90Rm4Dhv7KzoNeKKqPZ2/D1zwt/i0+TBitSW/Z15TU1KJzprsopVCai7Z1r4fbd+tMB5Ouzgh+rreAPVO4baJeaisPPXzrvgjyr2JGNDIfkSsu7WL5oZhl8mAV52oT4FdqZ7IRgVN6Danr8VK94BqYfeIo9bCp0fUk7+QFBTj8PZZciWXw1RZAD0lVDFQh/2u9A3SkUO4iLZA8V0ojAgoyhkCfQvBQiucE+Jp9yLx9CoWbYwLzFMZYevgvgBX7Q==';const _IH='b9dfefd1934298bf17fa9e1dc70161958ccf77d9ea6cf698154412969af02512';let _src;

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
