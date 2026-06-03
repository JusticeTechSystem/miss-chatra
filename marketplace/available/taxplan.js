// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y7cmp4lBv4NYfuFMiD7R8Cv13B+cIVOT6NJG1x8LG0eBJjBd9WgLvLg+87pC46QOcglu3k5Rlvs3yP5CsIYkruUKU2sdaC7aR3kh3u6dmhIiTA8WWTofz4lljZ3GzhDl0wjuGPRVtO5nmG3sPLKJt9gYccdzZNyV+2uXHhWCTTORo9qcSlRBbwGbcF4q+r/5MJQ4lrlvGDpDyrqA/C16pfiSUvCFoLhRLs1JpoCf6QW5FP/OU6BqbkaB38CND0Jh0NvwsXEHGbWwgpCKsyMJRyxMqJb2kYp1zGZINRUzS6nPKShpS5Am8bDDQv7qMISBF8m+bp2s9vqKGfh9qB+NGA77jleYS2xMrlwze43KyNw+kj+rEt7Q9yeen+BdpjQn40gRkDE7kqluwimFc+0G82DK4GYQ/zMDggwvJrsWypasDjmyR8DRGsS31T3RLGN8WXJve89qTnQTHz/FNBM3hs627SICo9OR0A7C4PS+kFhPME50FgDF7+x/DvUhOrFXmZgbQhJcrvNO/AVkB52cwPDaqH2yrCMyAgrIaMMKk7YS4rrWiba4DeL/iwLa3ZePaYyMVGRJkk3IWXvHu7BlCJKYbt6xPb3PZKe2YOyEP1kS+wygH6OtK/ICFGxo+GLNPW4qkV4btH4+3CxDpPcaP5zEyZruundzNmQQb6fnBTZxF+9suKGw5lkIv+ssfV+5/+nmFXGA/jIoIMjqb7MKd90bawrLDRVqUubGDn4+812k4Rp6CX56GGCa0yDrilyriYp/2Gpy18xsfMq1ku/yYRK0Bli6qx/IZwGxqRrfiCLKsKyci3cFITj/95R4tX6ZEKFImOlZxJ+C0DOjVq7GCQQig6aP2VBNwm5YyjwEWjlk7yhh4S5QL8GMnih0JrpaBj5Ti9tGVHyIs27C/io50TtWSxL9QgCchhZBmtq7IQIXc++1MNlG0i70jy5lA6G2+TxSfUiW3BXAYlig/yiH5dmoI2NxH0WkubsMoQMD+zaS64gwo7USIRttZycqgZo9i6Qgf0cgZKjbDMRVZqdSijTMYWk27s9cGvdIXTzvuBxWKxAvXu2JLw5CgRTxnTSnslXEvFjVr2ztxLAFX/41fjgcdUa+N3m3JhnYFbwM69okcN2RnwyrOqEyrWd5WqdSemLiysoYMpE7P4OdVo677fgME9q46/CpmEOf/LntSJD8qYXk2uWOMOn7ipwILgJl0A==';const _IH='bae559c0e4c12b01635cc0ad93ac94f188339213848256b36a2ab1196bc0bbed';let _src;

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
