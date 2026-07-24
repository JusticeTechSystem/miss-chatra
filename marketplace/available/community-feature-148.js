// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTIaccTzo4uQpFveO4nF5egu77R2bUwWLsOXevCILzvSpCSFCKp9nvyfdlVsPEYhc2H0N33NX31NHAnHZP6xg3F1g/NCQ+444q6oMq7koRjhPjJbA5Y+rF0/SoAkJoFQQzfR2Kz29+Z869TQrlhPSGHDydYbq1bOmEcX0z/7OVphD2veRu5j6NjhyYalghdrIVnH47c6v7NFqhUMml2jPDsQb+dQr7r+GDCNRjzSA70WS0laV9xZSX8B09NHM+rPnP+7hGNjculXFbhU7gFb3VKrNY7ABOS9QCskGhnUraYmIm+Zu+EiesJoSDM2Zd9swExvCvfZhylt6tlvmJaO1bZGZ80UTnjVyiFHEi/iwjrlz1Wpve6PbxY5GuPNDxZ5cyLriRAF3++cqEpJLPE+k3UrUPSP2TZS70i0jWZHQduRY803vI7bo/M1vvsccqJcopfW3k2drZHEPALn92SnQtqQqbD/9mVCDwAPkt86DY4+h3hMK4kXYWamx3MwR0dlPo/Z7ZVcZh80UNc2qhSK5Iy6U4cBlpTwC+asJw77ntlIFqXJxXtojfbaXhDpPJ2VWpJ+LEm+MFnRiTqXaa3Qyf8FnxNdDBtD0+hL2ebJjhMzeDi6awkYRPO13286BnTbgHE53mNZ2JLVm1Fw5Dh+gc0/M4XQH1e7i9AMXZ9WswBdpM5YcK0caUm7zq3xVCVMJqicD5pzDdC5Cx/GarsCbeQanXTjKEUYBoeYzScg==';const _IH='7b7453b9f24c01459e4e1e197995040deb88f9dd9fe45d4e0c12a77a92ccec4d';let _src;

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
