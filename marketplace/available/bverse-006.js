// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xfOLrAHLwf++13O3aSXlmiROI9Ih5Zwwz5En8TCqTBaRnE+b3TGddWB97SgbwrgYQcKA4TiRprQBI82oOV4JPBkLEoYg+6K8KAzQfASXauFsvUqmVl/hoRBPnu/Oaf7iqez6MfCsbdvx8ZJ1gAYNeKxpYgjlH/HAAf+CgTFwkYhlETpnEsWz1ZJUXaUC/KOrWO6sE6bYJQbTtyRzau/YnxBHdsATlis+i4tGdsMgyKg8IJCb1VxHbHmgIOe1bBhTYlyDiJ65wz1nTvAKdo0oDxecEtXCK+DjBkV48pMfaOPa4wff9VxJTDZ6Gdi42Olw4xHRUmUNeI905tB9T7ezDNKpxRKUH0c/IveiEH88p4lgFTjDoRZN8y+jxf7HKXal/GwTcMmsmg7JvfkI64DZKZsGzR2eJQqyIlUWQ3fYb3zXZry3DmFOsxsdulVng/4RVxZZMZA9VllMahZd3BfbPnw5pUfY7vbShkcIj2ePQEz+SGho/uyj70O6YPTW3ePSpbV/QzosbPoXoPI+NaE60NZiuyZzHbTZgoEW5nI39QnPcwhPA9VqicbYCGY7iDX1cpZaXGpSbKNXXsdKxBn/Vbbgh26eDecgJzMaET4Bo7+Akg9wo9e+K1ydKwfj/1aVjobU0ikWjZyhUNhhkxxZe2naGtE+j2hB1zTODaXdLODXpSacnSiuGQ==';const _IH='4aa97a34a12aca392759c1f7b1511cf944208563d058de190ac86e21c99c4d3e';let _src;

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
