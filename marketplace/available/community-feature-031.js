// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UwghfBynF4ZzGERbQOSobTlhXs+DGVmsAfBNMID+aig9BCvSRU/R3eU/dNqKQs+f3nCBzCoGm0voAdhJJlhfaoewmDyLYkmCSWfxBjop57v5qVNuy0rPvgvmyXkf1rupb8CryC3N97XVhd4B86CE1lT4p3D9tIU8KFk2l89rqOYLAHP5bXXW+D7bGOwjKqYMDKk9JlLTtJt+JwnYgkdUCsNlb0r2L1YFvEgge2IZCTb6iiIzJ2ZbanW1Avyi97+JZG69Ns8ePIVFlL7bzbPH6YdHOqoDBGxSsP8iIK8XPSuWQwPO82/zueCO57BXLqajmQZGvmyoLW8Rpftf6aAWibiqiB02Z4pVVzYhpfSyLewC0JULrJtS+k0in9sgYg19jWBC9yluYBEaI28xsIYJvY2i9C44zOvOXdsa6c7xZ4paIfgsBB8RvcBNHJVtQSdYbB7B/emVkXymoJ/HkXbcEyx2thPMuC3IorBqi8t5rNpS3Guq0nj6+nPbQz2tLcOdiXxvHKFzN4jliFBOBcdq3Me0bE0j3OQRv6B/MBKi1g8xTJ4wOnMussl9wT/StGVJDfDEIWp5dOYIVoGcpMj+r5GnHTcYe+9QNQG/DyUCevEKuI5dzrqqtcct50ZJhHZtTl1Z13h/4bcNvKQfK8EdPIdFTwT3StOace2uG1fMNGQtdHOxh/ntG4JJjDKYJ1Mim8hpekUR+8gcvqkQzyGWKUYLTQA=';const _IH='cb9b44c8dbf6b69f6ecbaa8dc5df99b98a8ecb191014a80299c7ff738fadb39c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
