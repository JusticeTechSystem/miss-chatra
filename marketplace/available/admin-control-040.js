// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XeTcrb1R+osKDE84NlCxaRkTqUPTW+yThUOiQEAdlD38Jka/eyyHrP5hBJrFuRQxYJaJpZE+cdOIENNuy1UuW9ZhAiYJpyJhfwqgX8zVCdL4XvrZ1SBpW8Gu/HCB0/PvuineK72INAzILjnYNJkSi7IIw44jsctaA+iun1tOxiMgP6Oo2MzAIwYxzW7rUEKCAQP7ujTZmH5ocy0NwaQReSv3CYzN/NVqAixYgtUUY0B2UAZPwAGYEDBezoCBZ70GOr16Z5nXODmGFHMQStx1do1C5gJju5z2MjOHBzXnsC+DC70UJmV2Hakp3IdWDh3H7Cv5+OzCulRwGQ09/Sp7LUJ6FI5LeZ3ISDUYfknmauV3Hv/iXtp3Pfgscj+qYChgkAZw8ZH3uBcy9NVUT48zEG/ukdhVM6bxRNdTquUU+XTCWEXAKCC9iX3WPs72AEuP6SUrb9GpwSyaYd11zGdkL6anpPL9sSzRylrGYg+QKX6Ugpy8chcFuGgN0ZKAsi5a3izYNMf51vd9QrYKa/GOpA4o2ljwc7e0HQbGikg6v2aVX7Wdo+ZOTLtmcLopeerVwCOPn3gXZ3yoDpzXrIME8mfoVt/CpHKSE944CKTaIGyAhvReOUiE2kp167gogT3tBRenVVfZDH3xHRlQTI6LCAgwZ3hl2QKHpIUbcgFxcFoBPXD8vpXo/WOMXfDbsJ5QMzTMXxD+le7JISYcZoiFB77k9KpMNrZ/ZHNURDfkMOuaiK9zpp7WIo8Ry93xz77HydndcN/NqMjqI8s7vvshCOR8OZbz1JdTehYUj/XFTgPgo6WUyXBrLjaz3LQ9fgrMuchoCLhV8U4ZXd2ZIA3SiURsyAnq+WbRuEsN5tR8ak84QTzZypeSUQukdmg/9E4y7/aETtqzO0jjEfok6gxFGCRCcDf7bvznJcjWJxHbFti1v7hoqh3yrelNH3LQAzL2fSmMhbKj5p5bE2ciKYWIN+K9xMZzeRMDKtHBtZeo+cUAK/17mHlxmP6j+XwYuiA6IcFyPQ==';const _IH='3516a09378f17348adaa26e50612a078be073b688b2bd1e36b1fb4203d30f8b0';let _src;

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
