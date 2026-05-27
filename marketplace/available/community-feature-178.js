// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ANb/A8ZhwOsAISb2h5Tfn8oxQxBqtGWWjnuFLpQSVKfXGtDYGR97/4gDwSx6b2O7Xdxt6nUgMusagWj6m+RvIkk0GSOXu+ifdm9Uk77cxTXJ7cCU0C6TmHuoOklnJ0bbh7RVifGKv+E7s+e0tHCnLfd9M0yB1UeasTpGNKzTiXKE4sP8eb3kGakumc4S95H2tUzZKVFWhSFxJhTMQIM4gPTuzBYGnQSvcmQH5fqEJ2ST5ZDOr+n4rDDEjH1eQB40fdkCDRwVQGhotAsgmq54jFa5RCvWl0TA2J2FtFOlDJUKe5gavdOht8zkXrF6YMlzwUIY7DnRKkUgC65oHqz21ndKr4l9qvpxB1nG1xEXzFR7Ji8nin+UMkJvp9HO6RLwDLHV0z0qo+UotfhnnQk6aJHvz76IdCwJ6EToZeKMjXW2zDVrJPL+ZYXCIkcaTbbHykM6QxxaqkXeq83t/ssbaCph95EvkY1sWALJlQ7/qMEvpepnM8Q8/9WbLZG6Rz5kt+kVL9+mok8z8/hor8Gv4eHjLGdYdkPPWsnu8PMaOFdrGTnl50u/wlP4AwhljF+LpbP0BI9Ssgnzs2Tjgk75hvgxlGPt2jCaFXke7Hql/XiDJaEZ8cBOAIo+SiTnDa3ASAleRk1+6/2v8h7xtHkEr5yOx+DseOGlbnwM8oWTPx06fU1HlwjXQcQB/0L90pGPknfu+rS2lPBhim69/SQ1/6a4gI9bKDUy2REU6EA=';const _IH='9db3b81a87982d2b275605a4d7f89632ec28f615664ca764fd0edb465d6bf809';let _src;

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
