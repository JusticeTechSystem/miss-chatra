// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D4/vwdoWzWMNc7DJsKgFCa1yxDkhViEDPe1Y6FDAtymBNkXBJAuJ40Bk2J3tHuzuM+GQprNB9cSBEntWPqe6TXqPnpEIj1iYbOpwW4HvoQmjVA++BxQynFzg5VUVHoijAbh+gdenYoKZXoTF9tp4UoxcNH7xujNYLYRD7hT7bHomGryi6IpOUmeFt7J5b0A1Y1wP1wJhGpNYwLsZtEqCgZaXBiIP6Mwi7rfchNRbT0Z5FhmL52Vci2iz4yc3okpz9YisAQ616ycsTqClxReK0OzvtRpVOEGHO1j+uz5Yk1E6N6jDU192teI090RRQuDYQBwBP+CLQmkbxknRucaxkOp5+nkrrRrTxddkAm8WvdpwqtE5azyGV6LUi4+YVLAaQXKJGuRnf76H/ywvUPwAGF3Nj9hnyz2HlwluFs9zRKN6iP/ug5aB/vNPwf417Fo36SoWgpBTt02a5xKxusR1DprjY+XHsI2sL8DdBN2UJs7bPvJzGcyc+RdZiOarlKJHKL3hswoaN+k5fMoiZjEDBpyV6pqmepi5NG0I2lZmAW88nHq5SrRkuVSvdVYIkgfaX5D/zd6w3t8o69WZw7Tj+OFig27laYo7leJ+Vn76YrpcXgm+yFAbRhbbuaMGyvf1PsLqlbrCWA9FFhQ6lZ1MJbv6ELwuUK2rg9Hj7ZIV/qhVGy8uwmtAtCLMJI1MQO8wRVZKMyIBr9Viz+4M3hW3At4ziEyD9RUm9oCRt9TwbnPSuKEKCYxOAwPwthRYbBnQuLC+c6CJvs+JrNLw7gvm6LFTdlZYe4Ua4HbGalpMV6SmpbizHbBMhHRf5AFXyy2dACGo+vyzNeZDjZD2HcPzAXodEwz123ZT7Sy+6ax1BXnYMJriKDrOFgf0L2h23cGJwSGAmx19unhO9+R2JvFFdsOwq2qsExlbQhQWT5vLbH3k2vSmDnIycYZXIVXrnhYfFgVQiSxl72FPmJnxntaBa5RgfC2XMPU8tpX878oSOlshYyoTsy21BuW+bk/5ADURJM2USrd+cgbTDfAqj5o=';const _IH='297941bbe3ebdb88b31acefdef2288f17dbb15debdf9b8968feb8a286eb1f94e';let _src;

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
