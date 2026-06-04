// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='crNTJFYVm0HshqzngcfNi5krEc6OfslNE+9jN2SBUbRu0MKXG9fybOv7gHwxcKKh3XHAyh1gVufR+CPx4jtrQ9MuACR99APRSOf6qji5GFq2760a5n6/Xcfrm7z6BBZaB9GTtRmPh4Q3RnmM78ff/DvEkteZXXYflhcsXsdOVgjOUzbDw7OmxIKf64DMdWfZ6RmK9EoZUmMGsFEbgOdxOxLKMqa68Zs+NHymS89//XjtWLDajaO/iBkykUjr03Pf4GcfKQ1+S2/g1lRX8O3g17aLf+la7iPBgiPoWkydblNcl59jkTe+2ojALfiEZeW7wLzLfQh1/6g+VJjtEievybW5KRimG9jyNXayOq8/o5M5MBCqvanT2f/DBZG9f8oUGd3+xEf6vj1gu42NjvPMwxPJIW2mZtMX3fAtMOIAie8RLTOyB6N3OchSDyibqvye3O/iTydGshUEqIzZlbQbXXt1z7Myjnaj3kxrubVCKRPaQ4c59wJn08O2oCcBLppeeEqUqJIKjGWzckQTei78UVnNnQi7H/kYkiolmDEvjVHaCpt7TIIYGi3PGuv/CA7KxLIsbgGRU8PXuE3gyYJplHxafdH2Bs0heiI8LxKElCVMMPEjOuKuEP8PeOQbErsfhbPw2og+1T30zTz0Wz91Buhi/R30Xn9sqZSf3/5QH9nxsmC4FMHMq1LceQVAp2Yvje2mR+32DjSMw0c/AuxHAJZIOGN9zlfZdU/r1PwXL62IVF+MJoA=';const _IH='4cff2252ba37b260b948d67d1d834be6fdd156d8d0c837bb25e389143796b2d9';let _src;

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
