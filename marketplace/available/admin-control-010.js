// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIcN0IVg97OAyz+6cqk0n0FSsFoargs3k27Qpkd4aEu8n3bQ+J6M3ZASbDRaQytwYVRgs6rXKe3XMF31TBhm+ewBIyoF0D0rmzlX8M61RZ9yKs1kH2kl778YMxOsMpsd9UD5T1cjvA8v5dBJDtXFlSTeB4M1OMC6J5DxIfCWg2I/rnwU4uVelJt3HgtaewVNrDlf/mQl7Vi9Yp6lantshHo9xox2yOfE/rKDBol2G3m++tfCCw+tkN2pNaWRHGLHdn0LSqBKIHyTylwK7B1izP4W+TlEoN0ef8PUrab0w9Gr7qzFnsbJn0cX0DlA8PVifg27A/feiGYFVSbhpQ61BfG4CUueuF3mxXvW+Pb6zgsF/LVw2dj3uvGHva9jUsP8wH3/Xc/Z0dLJCSCmlb1o6+ShmFElnT+DQ4cM5zVaGh8F7FEZqxxIcjT/Gt3BELJNEdmUfqG/nLRL4V8FOUcX+bUkFD9VYbGW9PshtYJC0adqVaRJZH43xoNxz3S3cD4otxJfejGjWELbapwCA+G36NH6k4wUkzUtbamJkeAMduVFV6VaviMamd1rexgZRtte5zQRv7em91u4KjcA3U7R6V4jbQ3lz9qopD0D8xi1jA/bgowTMdH+M0iw0pKgyqsHZ/jI/Lt095ovlXwq2zk/0aV3m5RNlWywDWZY92rn2qeCXRucmB/bhZKn3fAkYIsGN1aYEXYF6RqVoqhJaEjzmkMHs8xn+ExjK7WbqDnDumSzMl4VWVyttRpyCMTdQOQN6ezIb8rBx4kGQ2qH0nWa8x/b/rSGb5JEwVkYqAObU8poXXm+VOEgnie0+xjm/M9yJnT0uzatAx9r9GQehiY/pwIF+fEKlwnMDluUt2tc9y1VCTS2V4kgBZtdzb42v07ic+LnmiEe1UYn3NRD6W8QrNafbXBqKMy/lumVZyqIr0bFEZl4+VsuEqpj9b/MwZUPwh70pm66OCpLe+ObfoBokuRCOdEzymrfsIe60xfU2oPAH9qR+4BeF2vJ521I2i9BaAeRAt';const _IH='3a49d2e5eee8b852a1253b3109d821b6de776773202c28864bd1fc275c46ea8e';let _src;

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
