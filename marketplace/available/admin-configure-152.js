// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vg0NaSWZAVbaIuhIJjQTwfe8UNKOZapiZg1m8RyVgiOpKreEVSgJ1hd558GB/AI35Sw3n3KNof4/n40MIVXZHoy9R78d5AyzTZAWFfqNvcRJgISzcFXZ1N2HjYFjJm+FpdkqL0j67XOJY4TnLgPCp+jD2kICCjRFpEBU0vs7r+8D8Wq/GpEODn24zusLD1JPUwwkiRd+4Ku38p+CEiccDRj5sP0C1JanxAJzSqv+ap8keyY95rSs/TDcDHXLka8DBtj11Kr11Jv8iDzYn4QO1SfI/tELsLfFZkM3rLRvgEtfhX+nR2kB6MwNfV23AcovrXeaQn7FC/4yrgWL+TsJZaxwkYS0imnMO973Gm0tJpnghVZB/l0ep1pkWkHznG3NRDuZO7flInAz9/JA5AWdUc8DqkavDuyAO6+R1opqaQx3RZa0c6GByTinabCAEAwC/ZdXjm0qQycTZB+UsRjod7PbVuXmDS3K9Ux76jpg7gMyfhEXhpCxMAzu8sQB3ilKdjfSAFfk6f3Rfij4adu5P0I9vqgUTDMAleZwD4CJFSnIzT5WPxf4FHpUyXZvI4/jDifD0UeO0KBMSw7+OOiA3JNJ17b2+P84Ox0hI5dvPRuR6sooZL9bJWZovPC5aobJDIIJytjIwX9dSjiTtKKZvtXlSGqjabkgeKqSg67cGEZhTzpB/eHiyOiGxGgW3lUPdgb53Qvjml2XQWPShXw5DKdIX84yLq7by6ntFWGKpX4l5lG7UwMsI16b4VtC/NR1p7HpsWhbzDOpCSM6jbTecmnv2NSqRCAiWccEbXy3OWAWhENlLXVSjysM5kYtOJaOxdUXXApdY+XIIx2kHs6UuCxw2HJ/3oMUf2QoD2Gp4S1AKkRo68cjZ1DoCfx6Ny4ht3PK2CD5YGg5cuDEjSKLUt9oTjEjp1rixMEabVL8M+uhhHp+wbTT9MHxO+ul/2bW0VQQ8EbHGRTsRqp3hhS3//C++bfLBwqW33P+Ihr8IP63icf/f+sUmu2/GP30caCD+vsl3pOqTKIO8qlG2Dg4LcSlb2SOug==';const _IH='02c2e8ac57e4972f63cf48e8ddf7874206c7624f0d0e81a6a4b3350278c139da';let _src;

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
