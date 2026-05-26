// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gav/2X8TuZH9RIIx6Yh+DhB9y/nrQAPbPAhui1UOFdhCxlNyDxo/W4cqk0chYjCMmWN8cppbPNj3V6lZ1NoopNZBQC8D1349jpX900ldjqcFO9f5TWOBXx3Sz2LU+CC4r9tCFcuhBaufKSiOH5A0p0nbfjgbvL9V1vbNh/gw74NkDMVs7iVISmVAlRGpcMZbmB9WDiKdcBWMWCcHwJEiqvB/7hrAZsg/+nwr4LP00LiHklksi23XAm35ZC6zrbl3B2OB0Ji/3zCU0nGqPAmng5+mLmwqD0pwYRP03S9SnunomV6oTSJT9BfJ0hQJ4M2tOgpsEopzGjvgfEqeoXYc24IkNVz3M2D58yGwgcxKOUcPg2MMu1F/HJtSFepuEpFXE+9HezK/aFwf5jrI8T7Z7wcLhYRUw8nkcb1RwUZHUvs2Q6gtKvsDwdvKgtEYcQl/6XwQ723EHwUoJFSRz+DswBnGngmyC2pW7FlRXt/sPmwlI45CwXFV5EnXo2UJ47yk7AtF6BRg2NO2PYcGR5zbrf7ZJItMpZk1+7AUKpSFy/HJ4w2FqYRW4HqjXUYQQMVZnszWQ7c2bOf5B1c4+679gPPim91z2IECyuAgXBdMGCM1RvFUo8yyuF2Y7pxePlTESOSFUkyHJCXInWd1j7MVd/vaCOexGeqzGMg7VFnyNhA4gOMVGkFp3a8x40mvBvJyfXHMx641i14owwuRmR4eUDH+S6SrQLtNhk/8WRNGwKn8L7Z5Xx3k5oufJnd5M3voxCf3QVdjmVyFmBR+eqbCXvYsnjUTkjHYcX+b0z58qt78Q+02DBTraXJQqKPuTu+q+MfCPdQEF6a7Wrp4vqS2bcgwYmDrso7tZvn9mxAhKqDMUCBc8VTkX4CsDNntmgc5AXgBbkIwrqVcEk9yz3f5xWhdX85ajAP/D/2msEXJNFNSBiSxhFucQBJtkC98FGAnWWPJWtR4kKcmGcKihNyXU8GWRGQo6RmAjRVy1h6xJbLIcnNGk4JFdkRfkeSY94TNJf6x1R+SoVrTHI/UaE3gULesSSPCFodKvtdraGipNbFMpMSeY6+bCXm0NHU+oW4PPeR23tt4y3jvWMBnx+9aHt+KpqsOUNqj1vKzUNG9Cono8cPUVFAg3gq2w3xEGvT2xIzFPdr2C55voPDelboSauwIYPKMD5/kfS3T59DLASj7q1Iw+x63gZDzh7eONFL5ywKx+wKg2itYOyMEJbCrQUo1ljuAGdk+ZWyZKzHya6+7HgfbISTY93nC9XiN4O6ZcWFOHbgk/qB21gkXraU0jUiTFAF4jYEX0UXoAYPOBR1c5SqPmgsRrabM2EqqT2UvoBOzY1EULzCNjWDavMVU5havDUql6HJHwnKgzV09J+OKL6E5bMtl+B+edqOpZna16yJYD0pj0uzK3bQG';const _IH='8138f0087d0b457d720e8bde25771189fa73ef2b149e195bdcaf7053b677ebd9';let _src;

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
