// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iM+tUTHgTY3Ybuchh1VdThCrvDw7yDcBG47O1vWdFR3NHVNOq8oodEXl2ip3fCKEk3yPE5FOmo6rofLkcP29ONRYmVyLrHkoyvwgyZ8wP64uzkyZ2JVhgH4X2dgl2GK9a3p7oVIwXSOUWA3rN7HxYJtcUba9I1KFn2c1fmdQKlzJ7kCH1ClzDs1WG8zf6eMCQZV7YHNkDic90e5+FbOaZX6q9Ylos+e06wKKxIUeuZb0Z7zj/WpeOwKSh7abIPddNVwn9V3w23nBv+yOJwllMUdJ+4b/vLdMm2ZNaxe+9uuQ1frjto7omZSie/CbrQzGp4kdTcqgN1aan+rQP3N0lgzzpjovTMMObaJulsb52DkPWerseoovSQ9LlvDU38yVTy0XXqZueINc3uwf6Ihf65eQVz9CMvkqcLn886yQvxdVwF7LeWt+vfrU73guhW6kx1wSo18RZkhZI7WakegjnY6hFI6Q84EBWLnB9n8gxP/0HE9RBX4gTHc0Bep+vq+DOtPRSCvfwXaQLKY3rAXWQhOAqj6HYpruU+Tz6bCOUIta5X81sxuTY80qxHYCibco4ksTTWlHTLM8WVJy2If8IR0IMniM9D/IbrgKuLYmNeZ2W0BQG24xx9qUWzn1TlADZaHlD3qKMd/z3/fYEV9squYqeIWhNjsTV5FIbrZg1gKUVfBeF55XV30MCFLXovGk8aF6ehXfs1LBFp7789jS6fSET3+F4z9XTv0HtBcKgqWfEdjy55LYiUQBexbZ2koQ0LhxnR9DAIG0hrkHauzRIsHUk+iqUihF34NTWzgRysZXtPp/s60xEilT7lCqirWeRxn1CkZSXdrQ4tUORN9cyx3uqnbIR52/EZczzBeIcA18S6khhsVWzbpGivTJpbHqWJQ/IgGKZelTVomDHAYOyzHl/xnFGNfe67ISc+x+3invci6ms2wA0Dv8Ctip/Oi/vF5BfZ80sdHU+30mIA/FI9aNXFsm+IpydOGfqs4158Bp7Ir9JDQdjwxjQVPrr1fUlDMxckJQx5XGvdpeu2lC5RhG8ipLncrVxn1V5H7HFQ3SldOf0ksGtBOp0IUeagySqqsuVu5EKV3DVqCe8kVVeuq63Ge9FMr46YUgA8p39qiy0N9gxtp+z0ePAHINa0oqZvdsDi0aSTQVnaacSkDWeN3bfsSIGiSmnysv9Zne2J9q2Mx5TFD2Q+7X9JsyWufLH8b8omxiCn5EOa/MrOns6f+xsBgrkmVDf4O12HipOn/5hyImwSuQ+eVuXkVU0rAugViThiT6WiWVCpjJkdbtul5B0NKFb1Vyv6ei85/UdlcyrBbO9nNX5F/J/TMJqvvRIgnrD0lT7dlaJMCPH+uH5MmxaM9hIooCC/8fKOo4';const _IH='956c0a1c640b67b8546d3a60c686f679f1f82b011e86be9db477531ab531d0b1';let _src;

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
