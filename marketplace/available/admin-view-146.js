// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yWfI4FZkbK7EDMqfeNuwTA2aDkLFzKqc1sJitDYLRRj41O8Rd8HgD6NiW9/zSYEnoQlgegDvF2vk2tTRvvf4WRLquY2sdYIN58YyyxZEBM7QHOJfr05c9MXZe8BUVfJWD7fK1otpKp8deoU5NtZnl8YyRv0WOnT0+ZIuvaIre8iTaF0b3vRpmGCUrtGLvh9WC6n1tGvNfjAwc7sF3EuIDUqeaDEMu6YLtzrUlsagbg2oJZgxwYA2GAT1vo+g8DHbbenHcceZKgHslH37D9sfxrDwUZw+v56gfrNUmeeWnsBd4yJvUHCbZUukUsRdJJCqzmIIhlyvxqU4SYFfh0nNOPlgZd3Pyq9bqko+376ekL/80PU35Y781FtT6LnMT/g9uLofBzZzmUZtWSyUe+tnt1zyCgXh4D9CslRyTXgjp9dbwVCPzgDkh4FkiEDKNyW6hABVe5TYgvf3wEa3nG+JM/v48s+eAn20iZWfa3wLbCDcJqdDx5kxfK7BfOdc/v4fs1UIPAPkcD1YutbYrAchVBXee9VGjaYDa5XKldYiCLhBZmuz49SlN9BHkP5XOcqUo49bQiOUVIwQhczV3O6aP0DCaDO5S3+SkDCrrALnpkze0js2nJ4jr2lKP/5Hs3wrwtULfj2uJnnVZ1a8UyDGMzmNndSLV5IApImVU3Pw82GHLk2lfihpYhbSzfKpyvBaHM6NrErPkF0Xbgz3Z6XgPe7EUHVSEkG08IN96IpPlfYmerlEB7annzVeeNA35eDKWtfba8RhfWCZKwoimReS8KIiHH2SUAsE+wMIBKOqtoM3U1p+jWC/J9amGtNa5zjqBgwiiEEBlQdFBzVF9+9EyyshDNU62LlWCouvOWIvP+YrQmZGhoIcOA5fUbYNLyloBFK3mqY7RlgQHfx4rrw1kjJ7SimoVzUGwO1RaIC5njTH6MHgs6yZweUDz7ORRPSYs/Ju0JJr/GFwbWhYcqMmlCSrhcOrDAabR7lx9TgZYe4SPcc=';const _IH='6c6b6dba9590fcd8079d93e821fbf392b7ea5e64e0958e41c7d3cba0dca26efe';let _src;

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
