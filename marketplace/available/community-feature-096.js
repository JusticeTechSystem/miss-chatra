// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vNMxupzIE9K8el9kAdj2vqqhapMplHlvgOnhVAHDCGhaXfyzrSgpjVOwhFVm7Fdt2XaP9bI3wJGFq8wmRLyAYN5H5cVcRjaBrSOLJ21LUmTqXRbE/akZ4g9X7wSRkN+RZ3kOPitUAeb2Y7naYYxTKvT3WCRasIleFyBlPiE4k/Hr+rYmtjwU4jcjjIleHL1mz2n+4/7kFeB3klRRphc417Pa/DUbYP6ZGx81jFCwEjliqNmxwhkOg5uWJ+R0mLTosNorSPXsS2HIim6ntJuaSwaOJvf/lC5xwESdxQTjof0Tw4YDrSEN8qjBz17xkZ28PhULrMNlnG2yld3x/+vwsCXT6lrZMCVnbrOI8VjGF942/m6jGq2YaBUNEtkSQTFNUv7EL4FjAuhrpcCZSl+TJJod9VFBgoYGDOL3aGJQP2kj71OAUGH+Idx7COH79jcbEloVZx3Xm7zRAJZe91n4NjDKEHAbjGpUrW5QKssNbeJhV3XhqOFOO4eYC21ThdPcaA4pwvDNT4IZv34tGd0HAXUsdxORXlzUYvjPozm/4KaWLRGIb//EF/DPumd6Wg7rubFT6WUqBUa7M5bbL2PIHqhlsD2xJ48/tSlWG8ckkkX8PQoxDtnjsPKQOoPuN7w7BrTrdY08rY6UujJE3/9HU3CImAnKO2QKz7GVHdOg+vXG3JimyDuZBi7UzeGU7wS3L60EL5oZY+8ZTKhAsC2/FkxqogI=';const _IH='e34acc03f4471cc2100a9993fb85629b530a1584afc03c794fff26b16ddf6977';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
