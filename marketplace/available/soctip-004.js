// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VyMmOsiUZSTE/TzZddp5yztuqF3KqB1lXAOyEwbqQPVEF13v8OgBpQ/HulFSV2UpI0SyY4WjsYCCvKHZiLUdjKSFK/A+6k/v9LA6De4MREyzefaqYV5kmCXeVCy13TWZz7nel5NjZDxhTyroAiBvH5JLIpXMRvXLFKT6/eQRKeyDKM3/Rb8l3BgG7QlGmxYuoU4NCB4HZyL8HblgPQn0X3g8PWsackTaPCfx1izGsL60l6syliFKL79+yywHU2dRlv/tr3vA5gk5LZUl8fHwozSdzBPmMb7tPcrb9RIaKGwfjrwJ851wFisn3+mypmIybXuMie8oSQ7BMQG9Y4qMcjfHw77JsVEtSksiNnnLZcK+FBZPofwr8Z0pp8FaUQ98QPrhvsZ4/Vn5VZCucyB1vGwKLuxStudDMK8BgR/T0APmomxvERMdXHPvE3CRsrhBFpeB5ZwkUMRuZ3DtPLoZ0hHfR/T4lR7534XEV3Bg1jwcBFT5S79mRRGsvNPGTT2vP10UO8ZfPq4hAZ8PMe9c/3u8Lgost8ETB4kUJtt8gk3jGgD4nbV5riFcuPJJa3sWCeji5NMtCf8dy2iOjaKRjWHYY0uT/mAsfT1KR/SDX0zFgv0H1ZTVSmAq1qJtA6p1xwHYPq5H9yffYrkZXM7wJE8ozpEX3lQTUkNoEqcTzjA+v3Vez23GM9nzgGn/3h0FwaDeKVInwQ+KNeqwCJzuk/C2HQMSjBsuj6eTFuJtu1ZsHezvpaAMrru21gb73GEsVvPNWe6HgIc8xxljYAVupbwXrbPbqKvL+l568Jk2v9snehhWCiY8HEBdlE0TOnNmyEVFt2moDaZW3oA6CwudTyM7YB4ESqB69/MK++CwBYbztEz3oCl859vqdOcpR21OMUZmUJ4hGK5GSqPAozrpFG1J6edV6B2dj+8c7auaG5ez4n/KhR9aErO5H1k3JUEgPlj7FYpckhJ7dCO8TIttULFc1GAeRZYeugmwndrju2Bpix3XZPvKZKF6N1pOMSD4Vx+qgkh3MMpWWvHT0wrAZfvsKzjzaM1OtFshnC14v22YDxSudQ+o6rhW5A8W/VfAG7t1h7MK09Hmyg0=';const _IH='0028a894b257583782f3db9b50545744cce4219e1b5b32298c35d69a68b3145c';let _src;

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
