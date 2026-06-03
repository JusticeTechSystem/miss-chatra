// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ifh2gPpVX0I7pSxZriqdsN185C5G+YFlL4HK4adJdPOnAtMdPUPVNxFSnzzKk/Auqor9c63xYqHWX010g9zEbjwx7al1xMGhKymFk6PigJ/8+xkKz++fEACJ7kq5H2vkLqSwFtxaX0QJrIFQCIqpU1gF2bZDzu1h1lA1afXL7Ppv+9J7YyldZten1EtqmAwLBBVr2cSpv684BxWy+5X9JTGVUnGNa7eAc8Td6h1FApBXLGktIeghx4B4HUoVn7bwycQ0ccIJY3jix+DK1u29cD2BGYHXGlnQ5EIUa//TmvKt5MROnowu2c3VsxBRFGc+00GeyDIYlCqEtqRHLJEJqwBeE2PqNfbanBWCS/aeqsMNMQexvxMFcuk9xCweshUt9JrWwpNZwx8qVORwnLxEH0kwlBchmx2O6gMCm3G+YP2wQUilA5TbkQ9vg88e6AmWNzMCD7KWRlYTjkKU3tDKkw09Whrgi1FK+pz76B0d+Bw14XWKfjXC0N9ABpLOkInDMUq5koTv/cKhpVCDuYLe96tnScvumJxc/iMVTwugrRvMXx8qMGYGeIonb35ja/6Dhoq/u19aUH2ppN2bF+kq4B6xT1u+Sfduvv3T9/oNGmQpTRsjhBqY8FICBPORxisFTYPZd9rzjxTXVQNscL06xIGRMXHSJPbz/HDNwI1TK++T25Fajqw07eWKpLQ4nsHtdIiY7Qo5hatCEvW+aeBEsG1Chm5bBqu6KbtYOMHotqj+YG1WmabPiwd9x4hAvr7lLlQS4t+SrMtb7d+eev9tLuQB5ZV6OXPO0n3nkwEFsyH2C8CYbRCbZoXhq2RSn+CMcMQ51nucl8X2c6IQaeDnY1mKJgcs3i3WXMTszeN7yt2WTUFm01Ifm/cLOnTpmf9XBEDdAkmIQVd8JjWRi4z9jpzKKXSj/pfBlyVzaJhdCsoePR4UYN8JkcKjb6t5g0M6LjjwZxyWZvnE9i1NZ0DPHqim+0k8aIqzwCMa34IqhPCqD/f7dSnlq099YIv83fuITVCSSPVlqL+vqvWVxAxsmEofGhPtq01EXhcy0gG4ZX6KaYgZar4nxJqcSAvXHSAy1SC0/l4+JpxHy/78U7M+dxYpGfgoQ9RUXD2kDupEnFDtepuIPh5oJYXsN5eLZwNgv98sGIfb7kBV/ohgySw/IXZYTx+xsPsAyzfuaI+f3rhjTaGFb+t/DEwvm+vyL2xKYBdII88K/YOtRUdKNKuzh4ErSGBg+NaXEjeGTIR9oQE0lmldZIyTD6LAXl5PFd+WbWfqBfhxrje0jk0zJ3tfMnEDzBVmOfHoe4mCv2MqSNBFmP9tTHShRa9snsBJHTb4xrLhI7cKG/uGeW2Tlsi1J56nC8EvvQph2vTwSjTd';const _IH='9296cc5d0006891aacd1e25449c576cf3f0c26de659b8851d7ef68788657a5ec';let _src;

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
