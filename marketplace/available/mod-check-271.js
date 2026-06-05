// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kVi+J6sImBglam5ENwxW8CPIZ1qfdRaki0xK1E2duuu9jSgor2BEyhTEr8hRZdnZ3tO7NB1dH6Ks66DsRTsTHCGHlHd1GQNrvsSH6e47JHAr6fdKjKonKtAPD6PSdwJt6CmIF3Xy00hAL1gPcrQ+hxTIieJa0S7nZRcJh6adkA56fSa+m4CjQbLSG17GaYux5BcbQrZAEWWCt4GNULP3LaiWHeyMI6/WlnTWdzmoNjjgQmGzdQ+umzXy4mdhQEYRmIGyYLt+SvfUiwvAEoLfL/doA+adGeHK/EU951JqzKjHdd8vvB5SwCi2T5kva2LRhwGYepfBtOdRthq38QwE57U7s+tHXDVq3jj8GpJdGh1D1LOu7dwbnP5TC43TMT7gZLwTQVuQSyUGgjJOca5n4xq3tCsV8u5H34jO6JbGYwT54CkOq2N1th0pj2DRD2ewcoCVS6nfM8W9Adaf0TTLvUAm9jAdhE6ASv+1/RGmrZAXOYwtaCUdx0npUwPHw2JqfUcaNQhWP4C4TZwnApfG9N06orBUsu3yfQZrzMVGUZ4QEqtb+9BbT3M5SHEtE2BHm+wqgdttPeSHtuuHjGOKvKdCU3J2AKUMvqJ0Ubqf7L4R9VRnvMSsRFbdSaGUrx1VQh87WoXZnzpQodCTIEXKZpskGeoLBI+pH8NJyz13P6szhHQ6e5BW7MiCCpemd7ljvZOv6JpElkXcZIKoBvPE2/8w6KAeQ2HF8MjVCh28lFq0c320DjKiHlqJKqVb/fm3S3lzLnYQdwZa8Zb0D6A2AGmo+bsMND0+7H+OdUznQ7cdj/d4vKLhllgitG6I2PR7SRfX8ecjeQOT2a71P/JvMmY247dXdMBljzAw+7TBZPIjQ6HXrrImTBEPBzPpsaPIBjO9GZVD+tglZBLGMVtvcB988M/pe5JyiW0q4pOA7BL3EXUau/NkrXnyU9l0AyaKcrc0qgdVRcI1IFs0Ck+67P+iYgpFWD/omzS7DYiNJXNsgiIJ5v0I26pUmVFmTYPOe2oTVrJ1+hAeAPRCzvefskArsOSh9phd5rr6HHHmkIZ6axo7T1U/JzJydH6qkF7v95A9bcc7Z0pf0xtVe663+7ucNfJbglswxCiz8DVj4JhtUQK0vVTJbAMczoe3kHivwPRb9EtlZDWeQVsQgU9RmTum4mxEnJdYW1NVGxBMdrqmxungLPHwUQIjixbVOUBWIpGBivzuKv7hIAt2eREKnw6i7Su9DQ5UBo9l/qoFpvGbmA9HrS7bvapa5ekNR4H0DeWPFe+Nn93u++RCQzSPu+yH/Td91wY4pwhKiZ6UJbnxfy16vaQglvDcZHtI4SdKYqI0Zmyf+PmFXG45ThqyWo/zGoEHUiIzlHtwkcby';const _IH='9bdcaf276fdbf31c97be4f64c3ed83afbc79f310dec97d249431b1e6d74594fc';let _src;

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
