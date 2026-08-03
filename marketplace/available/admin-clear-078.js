// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRerYN7rQUs8DsXanmkVr9KiLKCzfccGO1FHh4a8RHWFd/zHCzHQxAHPSiHbytaP2mpmIgmaOwq5YlrxoDxPPW3cjY6tcRcpiNWCMU/8DIY3/tRZ9fp9WiI78/Hb9XThTWNzKGElTUmcvHmCk6xysw5cpmoHFr+ugrUB4TfXUv7ay/l5xFYpxU4ojUocRNLnNwa5NnO3NHEVewe0gCuf19frUxs58LfCsHRTbeZVx9uuck/c3av7Ftpq7Bc/NwSw9euf+3jWNmdk3BV74DRlPej3X6N6iThYopDi7gDxAztbX0dZ3c017X8dQDlJ/ILKh3zF0TkADIFToJqtMTCnbSAe5+Z/lpSUhZnitRCiOcUdYgboS7IywZyvaxyBQet+eP1rs3dTOcVdKfhFprXmx276Az9j3PrmjHTpUuI6EP1soyIK3uQtsgmhQGCNABK5Xn2A9MpgwwIJy4PJsB3OGyblTXLoYIZm3D27J0tlGNJ3SgJ/B6z2tTzQ5rDYO9H5LZF3PzUasGBkTFnREIaBy+piqu5SoRvwvKGIuTJALeOV8UhFsczNG5zIGQdHwBu7PzcbO1Jtwmmik8Wp/FMBj+QwF5G4t6oc5KbBMdJmLCz5WzOSYJIDTWh+s4oh1dE3Uee565gF7UpgqCwHZkeIcldG/lVL7Id76I5O8rdQW5FS2w03pSE2QqI1XMi/tvrGY6V1YMp+4v1BX6s0sQIuu0J0HjYgluoA+e/MmNZCMGwHBQ8yzow8LTYI55SY+ekTftKQ1IZvnwhoGKnEd9TtF6/XK7pKWjh54wuevxDE1Hd0eEKH6J8uAwTyDlgFEw+TrfiIiuDeEsCbkP+nRbagjwlwXUGQt34GhS7hvxlsWpRErKaPEy8Px2uzBi+ALfbc+EXey2BmqSSXKpXihDnVdAO6TfpUQ6WteIs5s6cqRxlXNgTKxTqX3tx9i6VXAfUOWuuicRgTGrpg3NbxejKUPrmt/myNO+xi9fQmV10jO19krDtvzk=';const _IH='43eb6ad0f0f25e5bbe1b213f5699bb368627699f05d61170716e4f44cc6f2a40';let _src;

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
