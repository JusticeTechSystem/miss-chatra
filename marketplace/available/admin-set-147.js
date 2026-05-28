// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CorjUF0MsvX5KqKUUZiTbgXVzrIhT9aLhctI14AYwEHxTGH1IvQtMVFcCjCMjBa9mMH9X4yIu8cfqxFXROCAIltvIgijpD+A3HadNsnh2ZqCwpfqDuKWWrbcj85eLvs14rA/dwvumbKErliWkXjNbl9AZIuSs2u5MgTEVIZPfLbzsTTAN1Z3/22GeD/7Tmpt4CVmfGR/yRyygGzEwX0AOZh2k+3SQ7X8dqEh6Ab6TA6X9+L018Lcu753KYBheQWu5ZpY9yGSX0AQn+1SLaVeTXZBdJuLy9Xh5YtUDlrnnfPm5WQhckipxMTQ9+/IJ6M9RAhdlgCZtnLE/GyYGipIA/Wd9t26Hncgr9Ys6z1EromvHS98b6dT7djom2LOfv4bFYx0IvqzHw1bY/J036X34loz301xwpXyRGUAhgLT5vM7aQR3Lp9BEzWzzGDQnUYH5xrzlcdmapPQWW27+YmmtArET8WLq8Mo8h83t2OybxwGEtqiCH+bRj44V+tELYZajDDcl9oJTqRMGwOO5Frs05mZQH7Gzm7DYPoH3u4ktz5TxquRnnWQasnLOueI2y1gdljx81yfyAM0TVGg3s7KZeUy+76wsfK9Ih6fCVZqRNxvMvndGn8StwQ/jUK6IbEerUysKQJ180azhQ4kAReMCt/30y9WfH7fkuc0eN5Z0wX0HbzMHUdV+EUXdbYnPGZb/5mS8/ZVwEZL53YrPL7uq3+7JuHqqk2tOW78Kyp42fYL+oy4WBwR55vGYZUGzlcsPXczJda9BwVIT9GJ/5EPl/FIg+pAIJVPWE2MlJ1mqPxsrm+GjKUmO4LV2YfJrhgby+HbQPTBBdmuGMLKI9XbBw76XGmmQ1/ono6CjZxnJ9GgbLBIfMU1oMgKCG8JpXMqcg0DxdVRVc0iUjqe8jtIHRaC8q64BYdxd1tGTFMKdisMlD08+KjScILpG3w2sTIddzDRt94ZbKcitCAmjH0GctQdnEkqgENYu70xwg==';const _IH='ec286393d35282e5c14742f2d18797f7df239ca6d7728170d21456d8b97e7408';let _src;

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
