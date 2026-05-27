// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gS+lziF3lHLKqXlrvJ3JkJhe2syoYvbAlA0xhr72SixsUF6OaYfKT7/U5y5JZI8RYKpXzGT3UWVdF12ZvLpX/QeHbVlB7aIwpOotaa+1SC2RALks3HqkDD4T1PD1pUwLNK11uCC2LEXuno0FD3SpJv1e1uo2l12g3o1rtdMOWVuPzOrJgR5UVzZAsni+Ak4ysF8Ds1eo9eSTWVtVisIrUULwO5LX8QIWsaTYohDzNUVgjVurTRNQ1J1IKiPqrhCX4YlHxEh7pgKAVDOvzu/dpvumSIA1Rd6d9WM6vRUbwPXCyU/iPzBqEIg/WioSYBcX8dE/3g46j5oIE2xEcIQPQc/8b5QzF254kEf6g5OFQ/SednACYxzwf2cEaK3AIm1UtaDKnkQiA9AxPpWuB2I9Yjl35BOr9gU/0+5udvmry8QxuOceTyosJ4d7ZfByVZNLk3rivbC0xM1vf2Ft72MH7AIjkPSsdefqTniAk2XMZhZPR5EgFBfysILT4tt/5Bsvo90fwfOOUZHw+8mNNq/T/ke1MJTUCUd1uabOn/2U6LJROIho2Rtgbz/w6hbXJ5uzkEJm5sksB8qAVhY4mJlv8+eL7KX0imK+I+ddMn9Ev1r3rua9rZg0iAFouUj8UnLTE1Ht1DejwxkpPMHq1FHlyrg+DnYls9x8UlxJ337HIo1UYtvvc5iE9P6EUVw5ZBeV30ikEGOWmNlemXU0pHSchyn+rDECr1gcO+K8BQA+qYahWgzSVhcWJajw87z8HR+wiCUC0tg8mmOPRV09TZZcYs/jBXA23x1ROwx3gxtysmNJFRfDN+DwLt7ISYazLpsQqQWaaxjx/Ydj4R+1WxCbQIEpXZzlHfCHHfrKQOV3JFIXatxnn1SuZ51CTZ0FFyqKhNnsUaS1jVvlgLmmZwb71z2hXkXwpVGkPFVVDplT5DyOlOBbS61HOq9XLo/GXtPkKtfdt1bz1b7QDTz6GJdoh+nI0gv5l5+bVWyw7emnKkaPcpE=';const _IH='f39c612aa2e48c1fb6b37ad40ed9435bedf6981f2c13bc4681af063c1d0cc0f1';let _src;

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
