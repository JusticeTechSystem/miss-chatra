// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EURhKRZws+sh9bnBSYV1sq49lQz7o6WGE00n/uraGfATdvMcS8MAcihipq/cU7xMt+RkQWMrwmmjaNzQ9UTP/4K08ytBxAUG3V4AgZuTuj6dlq8sWDf5vOPWu5IogMg53JyEdoygrrv/BxNaGgP/CpOoKDNTUmiUMoRnkJWbk2W5GA/vLQ4mPaY/scvlFCtC2MnYa4kGW5DzdlFlJLICqNQs2Wz13/A1T3KNn0SPqI52PnKYaKfLSemBRIgHGSQuZrpRmlGJOckUtfkYHG5OAUgOQeRNhqWm2gQctL4WNOZVWlkFudyX+P/r+VZqYb2stz8gz1iaOdMsYlFuJnQ33DafuEcD6iVIXvo133frWreXb9gLciAW0xYHR4r5C0SHB8IcA0FCTlekv3w3nj+TBQt/1altRWe5rYcSK1w2/k2ZQxU36jgktbOWJ1dE7JTBhbg5Igm+H96eEbVSpTraxy30SptLya+OEb9ekTbp+ugp0/gIxIVrToxd+JEriPj6ThVtOKK3gMfmToFfAd6OA1UzbkVwDO5YmFOIW1T2CV8vx9hiSfR9kmJN+uBMjU9988Oh8Bh7WjHSkYWpb0CGhaedG0LvSCS6w4tzKHQciTvWCl345mzEYzYnIcaanFZgQkV4ZTFFf5SR9o3GAgBOfF6YYQ5j1cc1OKMMwy6/ZlJPZfR2fPRlPxhISEod2uyB7bB/dA1lHh7tCYgCDaKQYdzmPAxeuspm1BllW5icDZkYU+qz30VVBN730spGQKhibLht76TNfgFxAPdFE6bIPz5yXr3EYi/DT+JhI0ixS+njPtg09wz98cfm0jRgu6ln6cS6npKuvbgSX4MN+ztQGdWP4bw4OSnDoTAXAq0cqw/zM55/uaOIqBIVj5QAUUBV8OmLvfpWCr9RDDfHszGay3OfcmwAqp13J7Cc+sFL6SnU7gq0XJcWjwwWxz+Ko6AQy+UOhcNK5JVc7JTwBEUbDE56kywx9MuPcUCMSyArAs3oBgQMD4y9RTx7U7bdYRLFDGTRESH2QND1Xo136fGAuwP93N19TV4+pfMfZIj27MAu+3lA7upcDv1e3XAy1LunIto2sIGCAYdrJmWEwTZMNOBLwbsEP5P+gBsiZgsWk5hCaKVCQKM/uXuw6PrgtPu2HmDwF0JeKpUuTLo+8HtJpkB1ZvL3cDGDjVTiKX09QC0FgW1uaVcS+yfoCcz0uzhAaZW1W0MywL8=';const _IH='1f4e84c7b8819bcf5e1991298ec8bd1134857bceb93c905878b9fd41e51153cd';let _src;

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
