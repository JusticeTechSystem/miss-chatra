// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kku1uFaI979xGF6aw4tKcyMkFdn+NmirFm43Jt4HEyyLcMi/YThnaekJRF1TxthF63pPIPLx3eMgAYgj037KAJadupP+D2GIw1WaFOrcuINriZjJZUgFHagFPxYxppkqnMszvDWHOAIIP1fyEanruQVnIpPxxOCu6rK8jV/tPTkn6qVftqzwWm5z/WwenF/L8XADWYcLQd+Od3QDIyNc5ur3qx9gYN8vooQrNK/MVGirsCFxrOIBLbPSOC2Yt+sjflWIi2jHawuPM00cCCVTVF8G60Ke8BCeSLaxV+RqUgQJmy/ntSD5IxNCyYasecDtnhxFeva+Q6hAFJmpPorRo+bzG8DmjIVub1TjM7BmNkhGepLLtmpxZ9CFUdY6nMjWv3oIQ2NvcvBBcv9ACYeK5sdveNa0hONMrXc79g9QCQcAuXELn53TgsGjqX33wOf1g5hTIu0gw55NRrU3s+WecnxzucHLimArSjOz56ys/Ahtxd4Ezmr4ud2ANLdQuRf1lxLbXNUEfNkVUsS0J3NfRxig9DRaG8+7673QZHK5iWlkKNjHHo4OXwxzExBHxb0OxbV9CBB+qVtlzX4nZXfBh9aaM605ZT6JY7uF+0mKU4qeGfJ+B63+o7f1XlRTj7VSjpMRnaZWOnLzYyjM8SENmwPNfmIU0affwRSVWf8jEY7QYXrOlc9R3IigsjLm6HTTtS4jef5exW4+2TLwq4L+kj2Y5n/gvLl+zW8dSQc=';const _IH='78849d1cb89f7e26366ea508a4acc676dd70bfe41e21c4db816ae8b4020044ed';let _src;

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
