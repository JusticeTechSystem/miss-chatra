// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQf8ktSDHDGrqKxTthf7Km0txbpjjGsh1+xl1HnV4uOIPgi6vZQjUrJW8k4zzpbGhQK4CFnk0yRFTDSxMLVfbkIZuVe0/tdVZPOS4F2OC5ZxcJRNRe0IjDRTFVtHQOMlJ1n+t+dsUrVmZoPpHzdrprTYUynKyay2J71sFDywBoPch9UbOTCC3pEfp1znadhPKeFXhSKxCWCfN6bqI6IKiizv+w0hS53yQiU03hFBCgNga7uLIKnpbXSV5PGplrht+9JsJJtDGaKRQcBBwm7QVz47TKR+u4evT/nVYgsV85S57AtsxAYDas5OIZ9vnPl867zJdXetb/IOyIaXnZ6uCN3NV3bj0gA0iv+arFvo0m9szce9Pc/Pnm1odBAEu7JPvkvso6qVBVDcoyy+6N1KBOle0yYKj6NvVyHy+kVebkKzBE0bkB0E5EDEoY8+7hRlbCO4c710Yt0ettyIo95oVDTez5PxmmYsimFsIyLsa7iRTDte0QunNgKLwG3hjPG3PvowFy5C+JtqMMtKJDIAGTpWNz9Y1pyZfPnnBjFI+R5UrDh6LO3+qGLTYpel5aVQDp9eTYckxd+cAOvSas+MMomN1NyahPSLsaP3Jba/sZiWC+p9Y1FeYFfOVoqAqVOuINcpkJG5cSAdW+3ztYWyQEEeFSjUog3Z5+nA7b9qzCIRX8ykAO1oM4EltsbWIPFuPCYTkIyoEExjeBRT8fvECr9/il1dURJxi0ZwsbzrGy2RbtPMXlNCRGBJHHIRCOuwxK0aDr86BAw2D/CRx6x8ZgRyf1UfrA+J+A60eZ0nVYvFPLwKiFbbV6jDVTo2Hjnio34to2QMlHtUMLY77xH+TQ2FF1r4G8a7rsDA6lXP8okGKZT9+lTBI2icK4QiTxyxhdAA1cDruk1fdfK+a8oFg0dgBHNJQ/ClYgRAn79HBMc2imJrUIuYN3B/wi/aQ==';const _IH='a27e8d143ec1a184a679ab2789f84633bae709bf68d1f440a5bf3978de1b6adf';let _src;

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
