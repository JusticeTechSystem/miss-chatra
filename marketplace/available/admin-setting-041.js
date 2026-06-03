// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TKMvZvJIxflE9rNEHOBrQvPlbZQeMPdlJyhT2y6/ljlVMvbMUpB7byZxAAs9TSl+Bi4zpwIOnqHEiRbPhIczO2zCi1yRO6dLH4T34U3DhmGzufXvqA1xPFLmHHLZ2a/7uZuqVEdaLHtnSJmh5XycRD+PqimENFb/i4Kt4d+uP2atHkeubdxlV346oLApTAlEi8aDNPDhRVgSVtO955vNQMKKtmNki8PrNv2xV7Jo5j+nOdhEUck7pPlHbma4t3MokAhEg0+oomVh/MVcHQNofGUWfoLlDXmeyrP9Tw5v4uVaVEgEXwPTzUUdkdgdDfHOT50h2m1GZaxgpypk23Dl10AsrXQoimzRKn/FXJ76cKqXv3qW1y3UpHenf426J/u4n4XnaeudVWoabp2ULGDclKPnZdwy2FHbSV0txcWZSJvEK2h12P/TUn7DTiLZAx1nBY+pUdXk4PTG+xH64/blFDjIG4m7DgeVEOV2/pi9vmJaFR0C8NAdGcWygFJEkqUeGHfAJuAdIaHXuHw51kY0Z2zIOe2bjOjBoIRxNledQIfh/TIu4VYgm+M8hMwqNBh2qW5Xm2z4zbt52y8RTrayBZT3ApI912QD6LYzlo6mzJ7clNUXtjDU9l/b4fZxIOJyxRcZP4A53veuuY8JAdFgs4meHseM9AbhvwAvDX3alQ6yQgb3rE+npCPy/Fb8gzc1H4JB/BsL+8EPVsqPdYx5znhkvs1BgEizxUmTR2of5MYQPsZRdKkz2Jif1hUHkyhfDa92UTwi3Mk0H6hzL0LrHvvTEgHUBVl97Qr/nN9vDQh2F+km/fRz6C6L/5MRfIsXAt3qNRFegasZYjiDR0n/ap3hvTBFt1AZurm1qch23TE+uelKk+6dUs4RqjASTaYvm3wNjVGMkVpxV03mtBrh8MzcWXfaKLpMYwbzIkSSNt4BJhZkkz9a/xbLCDNp3PIApJ+dNAXuxKF7f6pbm9FmvevylH6LpQ0K4mwHv7OysJicOhLIy2hYeJR8bBqHOy+ku7tHaA==';const _IH='24d0475096b1bcfa04ccd5055fe91f31215731a15ac6eda003f9fea906475775';let _src;

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
