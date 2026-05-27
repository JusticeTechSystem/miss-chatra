// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i7rue7EThOEQxMIoGlF7O7FJsHDBYIex75w6gLqNgwQqF1tYvcR17MsdxSpne7q9yWS0WE3miRO1Ml9Pys6vRdvmVjSFdP0OS4en4UP+yWnlXF1LrNuHhautp2gF8JSDa0xWzEHoEwN1/bMe11a9OzHYctSUyaGTXmHG9F1prtR8/IsX4yfhahl8kLQqUq60lEweX2d92YMCjrN1u43+UQ1YR6TLd1VlhDsmHggkwWie9XPitzlc9/PFS/ufULvCdTHOWzuU2o5hbCwe4vlkcx8RTOHPF54VR8c2bqeTwG6/zZ+eQ/XICA+zM8vmmU+Od71taCajQjLApvgrPicOiPpC65WTQMmLy8X1DPERu3CiaZF6z53MSS/lvGZEpOHoOT5qFNcqc39wyGHELV1HBB4pH7fNEKSI3k08gJ0jfrqvsXe2eYIiJYwf4RCAhoTqMxgoOHXBKWl5j8CKliKsZpOCGVtpdBoiPwq+ymKj+a9nDuHwj1wIAfJeYlUzZrD2WRMs0hKmDGbfaa1xw0nPQ1DZKMaTV/zkqsxXVKOKwkyWx1McYwxsXfhinoHcgjfngytO7xtGLqOGPpVD7sljfswyMiNGVnheuTZt6MzorH1xx4Z1H0y1NKS8hbIzb0TQCwmSdLO4VKH6WxI=';const _IH='043d03309beacdee1a34f55dbd4de895714c7cb27a326c822e581590949477f2';let _src;

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
