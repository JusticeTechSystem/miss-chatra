// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSh7oaiNsSunCn0939bF4fd6Svh4P5od0WDfdvd6ZI7qJSDqfugrcWDkuz0IMjtjsqbl0xMsJ2Sysn2vzKWFt9DHiFaofA406tzn4lfTLrCQGkGqFGPOB+CtEbOm2JOalZ5LNS0ke4L3Vcrv2N5b/cyM7VxH41HQHsZs4nVlgEE4akNRUv/94t1gKfwRdqLGuUZp2xUO/OCj4UZoWh+p580+SJEarULEvrtcHdBBq+zqRkv7vKZsGZXFi5pk3+OrQUx8BT8If15hCIZIB62T1mgMlXRovsf0V1FV1uzf0Uuuq1f/Xeq112jY4hxoZS7EIALBQjfF+HBL3ufRA6JMw+dsDbwLEYNWqhKunNmQ08/7Ur9xELl7zL21HPP1JCSumtCJ+UeXpckxQA61qsd/28cgna1dtbyHiKx8RRXuOzIzj3XKqY/eNlDBrQPQw3yi3BSrJoTGvL+Xy8qaxOhZN4T0WnpzvqZFC/NH8yH3CseQMZS+z0/2OrcryCxGYIciaGiwn2GC//Lb/kZhL0w8fx5rOYSZXrV0oXdPOy0EIG7JfLwgjXkSU6Fz0znQjxuZ01UzS5KEUO4gZPeA4+vDl2dtAgk9QyclfwOqgTRXxn2bha0XOLcrfY77MvuTUGTnLgt583+9nbqN9iANqop0eJuWK8kNV0125OcL61T+XX7VHpo708vYwvLISKnIilkaNMGMl3H0hMikXh+TLvuyokhpbeIN8s6/3FhqpPikmBWWgSNeBBxsaqaMJd2Z4N6Tb3qmWZD7KpD+N2/9gGgqaffxK6HJkTNb0PephDT/j4JyqgvhfBz17DzUu7tMyRns1/4G1M9Y+5dGSLCRare36nKia97qxWF3G541D9OzaZExaNrTrmunCAyG+FwWuadRXejQWPl2kooft7rhC4fFoxGP6U2cOlgGkVYw80eflk128zJC7vUU3ncMwB4h8RYTj8luFY4ZdkxJ6b/5IE5ybCTL20DCe8+LG2j/PtqRTTsmGds77nyRp66HiAcECgNYIAUqGKI';const _IH='ed1db4d44253d0387403ed38a4776528f1e597530cc790acac57aa4849e76487';let _src;

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
