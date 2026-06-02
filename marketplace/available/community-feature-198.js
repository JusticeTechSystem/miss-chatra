// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='91sJ4w8QwbaAIO/NRMNR4P3S71JPqcfLkrAUAy18Qr8aAYKUp8h2iw/ZHaqq39QhLttGO3B+UNbyf9R/0hdCuodxZ/yj7baFTTT4pLXJsBn/ByajwchMfG9mNUYOp8eUbUGPW/Lga20Noy7u0kzpICVwJ6/GuBSRZGBlTnX6fvdZJWkGYoecOh58CSaLKQeD/TcAtmd0Deu7TGvavuHOL0yumNvccPDV1VrzOnquKsGQS/Stn4KDCmup8uGLX50xFRQUynpghL4J+syAAcSlXQmlSO8108vowubgpkalyVvz+6Le25iYZkve44fnmXu84ELkfZlNAAzNNYyBqBXViqKgTHQ4b/MNmXMBQrxyqnQi5sZTvuOPSJZ9z4DAUz7pCsJcI2lliMcz+aAgHApyj0c7iOLfxK8iYtzbhdpARzNsIrdUCtSOxiZ22VrHVxXTwwlrTqMz36sJApowFstZvTOqLN0E8oBdTnofUy7io3drSJi4JS69ar7Y0476PVC45aBSstbQjRh8WhYGcvXiT896epJJcGLlWbLomt8YuKuandt03tiYwlFaghWp4Z0Zi/s3cH866TEMIyVwK/gRkmLv2+sqcpFDHWdC9Obag3cnpL8bCKcdCxQGZQSWmPEofZtTnjgpiCbykXRzHiEoHrD4yzgSsvmp3O+T6U8PuLpvRqh7y5Kl7Om2a+Hc7D8qMJEoqvnkQVhO4UEltOfoMTYDg8sbZShuXsCrJdY=';const _IH='ecc5ad0fe21269db7d1b29412026d5baf8ae02ce57087cf99a50e049a3afa382';let _src;

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
