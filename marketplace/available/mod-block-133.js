// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PsYCN1fpgC3q+AvUbOnwmrMT41ogZNg0SPRwL8AgTr/rw5yfK805eL3Y9OME1Up7MIA0CmUGocbNqWJiCswF+oFhVXO8jfYKXDS645JKHUSornhBAuxdCFEhWmwPovGx9aQdu4uZ/Sgoo0zzQKLp/T82ZMHv423zyjqQB5uHLHUfD3+DR3Ca/yI3Q9KSeLFXvb2SdCwzxthToTsPzOpSWBxW2VmoqYmO0uf9W95133gNXsTXb45CKLsEzy/ncHLL5/XeL3vXG7akYAV1tU2LZ74pAdDDikTjxt+vzQtg+jV1uH0DYxoLzJjnfot5XUIOYFgacvjNT8+WaoQkOnsNsuhYOcrLI2SZb3hgIXkH8/jLKTQZ69zh84dougSc/JqbQiaPm0X7YtFwwMAwh73kerGQrucENK4Ehx0KNrY1j9cxFXBn7rqNspfpdRYPD91aLifgNxD0Us5ckv1Q8LBauCHo9mCEuPaDZ0Ymoawl1UPaIMHsLzM8yPWZl//u46xs85K3u/PnorQCU3w1IbDH5qlGZMeKj6W5DsqvoenOnpJPEDIdpvVXoWEqEmJ/lb7eNoUm0aokyBCN9o+qTkn0l4zXP2tOXfguho8HQ007FHQ+XhoBwspRmCyHPFGiJu0lKWv6aCpOObtF6wEgNI3n9KnTpyvXT0iVQFxg3yIvjKaLwqhxdkyEVfkQglIqEgwWYe8jtTqQBTa8cUmphQvyZbMXbZlTh/BxH80GGAg1S6WTSnuFSGTJHxZf117tsZ3HyRJA2iRj9+Iqhx0XRf7UEuly9Z9X0rX3UCeKtMYYf8A6vKjLizInDnjgi8K1MLiMXbRcH5aaEAll1g5vre9QUW8FFpCUg1XWutAe15xkWDeJ29T6w3neDg1fTcIFaVNx0ja5sEhXbp3hPwHKr137Mj5c9SJYVPk5zZqP5FKcc7wYaCzy+tAhM8hvy6K+fcTGWpbqcIwlhBmsC//Z1Gl6uyV7ocrXkD82/M3aO9RCKKOicGFAjwwlHtkFekoi4YcHvt6VvLbH+dmIxwb3WzEb45K/g9Ef7EvIRt4zmzIJrAZSHfH5vtHa1hedD4sS6bMSNKLkKW+x20Pj10SlMXD/FoXG8l/Y+ZY/lPARUPGON7L4RqI70BK8uitfWzTG5g4vhS7GBaQiPDrvKymtcmc1lbeAyoNREl9ZgYI1GT6+3EoD1hu2PmrRPX7Oxk/4g048pI7zXjhlS/kmtGnq3jYVDo4ktzEltczxjBBZsSp+38AgAPi6e2vkFCpgbgL4xXGUzdRKK8yE+oHo2ozinfM1A6WBNshJqFYq2UN3O5XNiW5nOc0nmH3hVDXzluitXu9phQ2VtfhMKGQIOGlZUAMEA8ZwYPKWjoQBcQ4dmStH';const _IH='687a209356eefb026240284d11496c317b49f7a3e79a060cbd77960ca725f9ce';let _src;

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
