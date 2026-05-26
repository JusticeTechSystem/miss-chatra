// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SpH8hFu0wARBF1kJNf+7AfZF5CDUh208eQYEfTWo6P/GpSZOvEu6Ma2s513P6vAtCAPAMr/qRlVdT+WtsiQhaEB3ZG1Mh1OMx0DokG/LACBdpIZwCatL0mHSg5taf8F/yGCj1rfIPP+zok5axjcA3HpNJRtJluUMxRvJz2COvXIjDT6dGxRF8M+t9Dt1TrjuyWjc3hLGpUKGcaQsNHOCQojxCVGTVJ9Y6lYj4EaPRvSrpGW38LrK8EfgMOTuM/eOWLDjdwNA8/kgEjp/ZR9A6cf0mvmvCGxQIvqpFTCaGS6ZcADlM95nUaS+/bZY4nJEXikpM/3k61iL709WqVzrgiVYSA6jMCBJ57csm2j/UNwJe8BN0xc7vvyQVX6Mnh6BBhVVOdKpoxUdNVkKy/tslt/xaHXfQ4B8jDTKRO1NSswXzFll8Q1f1QFrmdxd/c2slFJ5JEgWUGare4bkn+/9LuaiLWC0R/Pg8O3Bu5V6O++PzGevs1bAbAFD1wTnL25ZLK3+BSVtRLyxKZwFBhte/S7nywacd0LATUd8qb3nBYw6PundZ9CsCK7/CM/yXYTxAzP+3lLahT2ZZIydTrmOjqFrRlgzg5ybGk4Xve6xgggvL+wt8u0PotCCaeRCqWnDKxXv3QckjD8n7MIhs0/SNxbyMWS6oXu+rvRwtpCt6cjSuKvX8oG2oWcJC5L0BL2fGdcLjbzhwR3B7evES95Iu2K3S7vevuzHmKO7LMyoO9Hp3BqUd1Y=';const _IH='f5854f0e24a0205a3e2fd7a284cfc2fcaf0ddb1815fd5c428da7747d85866613';let _src;

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
