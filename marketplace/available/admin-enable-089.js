// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tp4046A17n0OyNDUp9fuGUvCPicg/OCU6F0riEPg4id7Sd7wOK7Eem8LQ9RkHc1+TbcnU6ffMG16lWzQqaph7qBM9zpZwQyLI2u0+sdI+I+FiYqlzVJ926ImseLyBjkdvwM8uxFiyQQZV1EnPy7CYtYnnHW8rxG+pxXWHSG9Rz3S39KteYstDvIB3MjeHsVfOrYvNl/bFk2XyQKnd57Pz3LcEUcpxjeMW9nzO/HbdQHkyJfE18AYhWGq4LF+vhv+oPbH7RUF9yLKr7LO52BQtpz4L03KOYCdE7ZTZqRRssBvFi8pinYpDbY+86q40hLsGjzACTXLLKv6cslPvQE5ndQohyyar6xja2fZ93Oo+Fupq2A4n47uqOhl2UAmcXrYRAG+atIauchjkAGoUTxoVTSZNIVN1ZS0xEUWddCwfA9n+ZH5P7ip0MpuVq4qU4XOHKGJ34lCbx17p24+iQZ95qb0MRMR1MpJgbvBkMImzIpWV3kIPwlMZ1VJQfl2HN0XlQDHwXzWIS4Y2R5iN+plgFPyjO6TRb9stI7GNGBQym962c3jKgDpODtPAAzWrxdyHedHKhmBl9AGNXk/KKZxHLFw3U7jiegOGZEomYpM+9c2fwAfCTkJp4b/5aabzmaHLpYKoNwJOJa/ObQVZRcIfyVOIB1Ff4txTevLt6/9VDgzl/LKqTrvDw0b527gLahL2aOdAqUkyVHbvkqVa4QW8ysfd6zbXXI6Ze+8LkH9i6tgSTiJK2TSfziNQgfcWcNdg58ulliLD9Ui64OHfwOVyh6zUm4tJUExmqFBUUpM0+GqOFt9/VFJ+IVuQz+jcqPmC4MV+SR218etcMwxsTAzqrKOvDxT0EkZwc/3tP5/7G8scMxmm7VHMJumQIzcZc98l0a2BG0GCqx6B+0GydNS6sDX3ZetOQFRiq8pTM0CXOLaH/fVpUDafCTSryUHZDrYUMxmUsLl4tjv3Jq0wkYGnyP2iO9SuamPkqA/dtrESIhRcNrbKNZnFg1o9rHF';const _IH='d95a9946d0ecde1a70b34baad0898b8b4e6c39cab65a2733bdbe5570aef59a9e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
