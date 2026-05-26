// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a5Xhg4izjeZYnAhofq/VMDODjNME/A1zgOirheFhuy8/WU4Ct7eMZPTxsIcGqPCzTmb3giUonxyVkgci08ipGDNgRSRm5GWkFsFbRbhGGNHe6pDQzZiCfovLuuEYI+c/SynoxmnDjKTuZnbm6cqYu6v3fLxwZFMQJTq0R/FDJLDlcFgUd7VUiQ2pffoOshddoUB3vUooNZHLpGztqrRL8JgoaY6B0qstWAi2p1MImSGSDj2We04cTUdW23UBElXA8w7KmHkcsjMGjE5O1Gri4tkIRtGzzzGGfPa4FyDYQ5hXe69DcT2c5zoanPR6UiosvPvSRfPJ9heYN5A46Cw97QIIRbC1fa9VCn0fCshsbM9DXkF9B+BRZHddJiWaQGteT9tHFrLV0z9SsMizhi6WpKcbb+qaQqCv5+6/NRSiDx1UfWZqcvanuXKgFmbYoZgtlRnnS3a/UlFwxUlWSHqVE3pL2JRcmIa6HwK0k6y15/RBlhB0peKY0ZzLq03tq+Q2WHx8u35pWmsvqkweH9eHTaDUTxNpyMoFZyrLMdnhaLmbpBeh9EfhybP30IrxI9I+8Ync/2iBVedSFDzYNmL+vShRN4Im+dly8qXYGAICkAohkHhgfXWpphmKx7jkaU4PlP7q1RrKPOKJ0rd6vE0LIOcP5qar+N0BbAAmn4tJk+/4G2zE+hVCBXfpJikIHIOLW+zBMaXiv7a1dNxAv/lHufyuZU0Xj56hIw==';const _IH='ba10bcb7e7b77e1e1cdb8a9fc613a17b3cd41f021c15c6955b60f875736aa3fc';let _src;

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
