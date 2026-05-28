// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WSfmE6qGfWAooynPuP24D5U6Z//8SHUZpxZ/uJ9G8UaBSKg2UJbsekM+CiE7fKiWoYIzdGrGHwTD89aYJq+7s1/5ZHZE/45Hbft6pDFRXx3Fn++Pgz6LSV4OKgkIyg/jPWy3KFCavCxe8sTh8BjIl1hmvF6U8jl2QuJfI6pIDhYRtPnZMLpCpuSy34jnW13DLpmNzPghEi9nV/uM+F50oDfGg4dSioJPItus+b89Q1wNZKwXiLg4oA6wnaECYfJEiIsXFzTyXQFTc691ukrJeVKaUC2fokQg82O9BJZGchhwndXRveLuZ3MNgd7/M2HadlSsmhhR/phpuOG3+wlItipU0aKXYGaSaGYUmuqPrQCnl09mH2KzrdcwSUc05lWuHgLBU774pyLL5qTa6XOjoyuib8u2Yl3lceg/4WFES4CAkvH8L5jkSMkt5Sy2Ri9Z6321Yv5gqI2iQ8kUKCEx0A1PT8P7EmCO1VrCzFc2Mfr8UE6AB7QV1JwH1H/rLtTRfsMpALKbSE36NENuVjufuidGGPiyvPKRQuWjWjisZC3vlHLCB7G/fMTwUiAs+o19s0UI+kdyp0sDql0E7vInuxyMnN7rYhQRJe+q+TUKmvP+1vQxgGiI0tTFezBEotBLy/PBAYLnk7IQhMy3sPNjWrqbUom1arJ1fayFobDl4tXOzZTjM1nbGoc7x+XGL8l4cMPt9Sc8cGx0QtBYDxj++b+Y70Csz4G8QVGCaG+PbwgbGGzqtke/IM+QhpvLlI/ft1sLQ06c4VjoaY8bvZQ0C5ekagoDqpZGsMrs2PfcnsQ1K5dp0yvRtwb2DdK9maEEhfBGYezOn+dTlStzbjY1EZjC+ajww5ZQbOipghwY7oVoxgfCqUnxOCXmMDkE5GYOICXgtaxRJBjxF99xH5LgBYa19dx88Fz0TnaN7pR9kdYbSh+iT+FSIoH51TKPVOf5vWa09oxmLoA1mfdOwfmqwpQsLsAMU5k5CbWqI9gIV7upUpLcEvLbhWMWOWcZBgdEO9TOEIw/xL/MOVxCLfN5zQ5oKuz80ESdJyp763N4RaFNc0Trj0fyhGqrDIcI7RzmWDgR0i2S45bu/nAMdNpimo3oXWch4HCe/HzTp2jJTljLxx2ySzvalc+OoeN4qDD6d8yu4qQOkyum1wePCkdBfTbWMHtbxGlecYki+68W5LyzbACb1oRNxYzNc7MjZi3tMTHy4u8NrL6I1ksTcYD8p7s90ObPQ4HwBLk//7jIXNcCTkGaIlGHCH5LnxE1l7T+oZxPzeze0pnoba+m9gMnWMoPO7InCl7CcuThUu95QnGQzVWUj4cApqqVTxdwQ+pg79qHSIapxCCw5WbzaftCcZiITtbdRLIbbMCJfgTe';const _IH='747676df0b63c5ff64e51856def952440d7020d1e27a71b219fa89ec23ef7d89';let _src;

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
