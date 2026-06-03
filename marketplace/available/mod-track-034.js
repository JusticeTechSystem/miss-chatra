// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dxZ+aJGYp0oPM1W9/hyUydIxBMsrm5nR7eYQ4jPaW/+bdwnBAWdo9AB/5ceHKlRSHILQTXglPoevcAuQtnlfMz1h0NgiYzAJV0oL8akyMfEzupTaHMJw/GTkr262qwDNHBcJDVgFCPc+fWFXLbog2OSJF4cT6YbfJqPLDREYXFDUi5OpDhlyVN5ZVATfw4RfC/56ggcjNv9pV3dQWVAYIxlQOTVYuUlB2xmp4fydHqVB4BxRCDwzMu4kgAhpbUfqgYfPpXI7eyeNpaZC5jR+CqO3fFag0Zgv9LjecfwE0A+vHnvuR3BjZB2xLlAH+6u4kBH24SCv9r5zlmSGIDULr+JSWg6Dkd/tuUqF+89JxJipnMCtQxJL7UUPwXLZnIvfMtYsDsawFaJM6uP134HQqjypSfPmHjsoSjC5UK9JD6sIxDg65w2cS9s6Afoj+5rQ147N7NiB86JesD/xnIgjzrcWlRuMkCB/AWHEh/gG/9tL0Jl47XIBgOUCTIpSZV8vSya3kALuQhDRMJ+bMW71IrlzZsQp+qggkqJ4rOZ2do3tlcNzW5j6bvnOqXWWonsaNJNRtjgx7IYWlbL7tmKyRMb1xuTvzb9KP1CVyVBYlm2s09iX6J/P2T5Ny50K2i3k2MQatSaku+w5Kajxmae0jkJjygFbJOQjIqWdSbpUqSkfzsV0MHDa0MlH6+2iIJHayd/VkMKo8fCDYiSiAwdprsyMkL70I22xSo8+yM/2YG1N624UHbQnf7pBkS0u5kSB+UXxp9wVArUhP2Jwlr4a77LKH/XIsD/0oUFncAsNbbwe5kAVRQXhCWcTLGaDARYWXj/CBduCB9nP//nypHgQ5vQhAmzwk4gY/MMgaBCeCNtyU/wZlYNkAuPjFadydY6rMfiz+r+2Sv3JlXjPDFpUuS4P0wcOEGAiSBUpMqWYN9cC5x8pMIb/mFjpuj2Ij297OKODJchJlrx1R9IcX9sTB51Rg4f7mkynl7/LOLEtzxrNHRbBMO8nVwtfCxThEfIo7A7V3iXa0RsYvcavWfsQuR1ZCrxnUIuLAeaS3Z0rnqWeQF7pB1Ob4DqQLyj5OerDlw/ju7cg/rhe2v/RNMfnNmlQ34ptaZmfxbIoVesJFtH8zUrebKZGtGS83vb3ES+L0GwWbNOr+FOxBG8CaTDmBTx5aQVuhzbLXoFT7EFiO5LRu06Wkw3KKRGKXuHUZ+Sy5uEEzdz8s5l6+DNfhhlXRf7wnk6qICg3Oy9S+DZRFL1cWphgcoUMVo6hfzTfnP1tAXs+e6W13IqHlcA08wAgKgIpsCxTQvlEQ8mgYaskct1Dgt8+ku+4kiJ9R3AKgdo1ukMfrKG2HLDZ4H3agWef0VZfHv8yf5c5Ng==';const _IH='216c25bcc5df77ea3b57b2d603b7cbaa93d847d743c3d1573a8e6bd3cae4880d';let _src;

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
