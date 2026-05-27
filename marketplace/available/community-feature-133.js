// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/FvBb0Izg+UyTTEEz7+YJju5HJf7L4+/ccVTX25fZvBUobA8yy1aQrk5ifugxk+zCltjEVkoa+ESCBdv1KNw+lzBRSF0rWU3k1Xnc/p4uBXYw6WJMs4N+Zn0CxB8jBLbeMfEm0GyLJzKNHI0ry0S8Ka0Vgo0KcPHHM/Y0XhJw1yh31uGee3/bQHHdW2mE4ekd3zULIv/rhL/CJTs/QuFeP3GlwjoQ5JY1+68cNNllaIJ/wQMutljrqYwNMnz75R5FTKd+Nm1eYTWEDRDWDT/LmZraFzOT1XJ0EuKst2hyeGmEUFL7qtga4wXVUKAhvz6D6m7LWPUHHms11FLpQtzZob1Rsz/CikCj8pqkr4UGmkKjhyHYt6shK3CC0mpMWufQfSxLIYp7TjVxs/cpH6EKPflMSLCyqf7xtKzqEu/8/1TU1CnqqUQTk/qWhINU5vOwQ198J7pDBVtiIr4xGPHhssmlpG3SJMifaRCW31Lm3/vsHcemaADoKSatxlgV4kO1+mc6dEWacZ2thQiQ0CfPIZwy7yAaCTg5Y2yU7Yv5IUmLN+4jKkHRpt2b1684h7+gQET7ATUOqr1WIPR/dh9zvFUwoA/B+MYjFV2GCA2U1mUCJYSCzv0EpImQIIyRjyi+DG+gkGf5BqKqgL5OuWqXZvpn8hfHru4BX/KRACd9EEqZSUCDUdRESL3Vug89n24txfQ4c3gt/pY6hekyeE0eSuKmkQr4WEhNccolsI=';const _IH='732e514e4dd4e46576c8cdbddf5a03300ae9834b11ee8d9b5ab2ade08d2cd87b';let _src;

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
