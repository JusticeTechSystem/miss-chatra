// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlVGcSt4vm/yy0AHN9d4DUa1UPoQo1fLxNT6yRmJ1Eu49wa//DV7qiVHwaxYsMLD96IrvnTgUE07TOkji7jrjeDW9tHcodSBsOAoE7YHL5RhRYvJCd2UTV9ZKlQ2ymQodwpErTszn/qMoPox2+b9pIrBpaHxRZPhG6xifJX4xgFUJ9isl34AQepk14XHXePQ2S4xuD2Q82bldwRfM+vK/qKqGdtONfQ4CePSPkj0DDNKcVKCBDnWoYqD5WbprKw4bBWqrN8NQEiDlxWbzAKTkz1tgRTfwp1+Zow9E2/nQPDYbGW+hssc8YRWEs+Cxxwmk6zf5mPwKyoCBHrYmcettDsBNNw3cuQXXKWA7O6Qbtac9Hd7FPFjMSGxCzJD6eDcgg2AcstUV+kyWoee8yxPQruEN3tEZhasfbQvjFMXJ4TTpnw2d9/ctomRcTOhTszt1zVg2acI678qCXF5j6kPSRRQOiG87B4+XoUffRpRndyr2Rcuq7gk+9spdVUC3fwLuJ3wHcs7QHTY0y/CGTKeh3EoZuSCPYp7Df5iCXZHuB/RFH/7aWpSfxkn1gPU/ZMO+gBIbtWa8iyUVPQ77QDruS3ezlsJcjvOQ/+QvjSTfyvKjYeon8MdX2tAFxhpFaFSyf90oyw7dz192fToVsGfNGKEX6pJgmBkKsdBHE4IFwTDZA54pWJw8+igbSb71yJPmvWkG+PpOllX9qnmrvVA74k10U1eGA0paQEv7qS2AMwkw46oCtcw==';const _IH='dbb77e1fa56efd06a0ec16ebd6489cb08564cd0cc849153e17809fafad2ed08a';let _src;

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
