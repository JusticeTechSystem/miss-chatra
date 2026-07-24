// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIYHAgvfhuoaEbQlS6RXVDboqWEPxGBbnLJqAu363w/YT8yBM/TJaBfTc7ipvAOXqfHE7V7O0UI8/qfqmous7k6eB/qoALxn1T0Jp+gJD4AoiIIcGnvMGUSRi+mPCMbELj9W1Do+umZ+BKulPZWi9yWhKnIzzYxf+CmqBwXSj5zgS05MS9BTL2dGim8dFEp1DbMunPPS7M4wL79bAro6WrUPDWtImbhdpN0nRoRBP5Do5QFtOGEVyfO16BeM1yl7iZYXuTCCTOW0M+A+LteEo457o8Ixv+/CsF5RFpAhGyes1RQbKaIqV7ISX7OOwQB1xVzMVII6h8cLwFUGM8G4ECYeIq/JtTdT0uO6uNrdk/Ux2ujSpkfahpYUXgmkSMiWNpd4XlM1Oy9JNcf3+8yzQOBzEyzVi0ku3QBZ5xyVe6BL420Q04MK0X/BnkY6l45fj0Co7UoKITIFcBFWjjfsex9ci7iWD/ebg/7xkwOpdbj54pnTmkbxCLiu1lv2GlfpIS0QxZJQMOtYamBvYL42RpREq6LQLH/oNiFmAlV1qSASPtaST3gMN+NUn+nkmuCmhpS5ICcc1zsainbw==';const _IH='e50bbc4a6691c7064da69ad8e8c82dd2d4bc4b3d7e14647511720ce6897d9122';let _src;

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
