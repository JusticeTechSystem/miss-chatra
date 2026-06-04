// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r9LRG7pve1mdSgjTargE/aI1j5RNIE+rdOCBiJdc4cLW+DcPEs7GqlnqFcKElEzi41OZiod3iZz7OKIX12p6kMX4IYHqjOdVF7p6FJB/RskgRtrLkS/D45KXQc0p6vk4UvSdaRxvOYaWxCEKX2CKXyDzUbj4XG5JrJZhKd9CewNokqFCfMXsoT7xBbvqSq6DTpLrcmDaK9Z+czP+DfH4VJFXivwDvm8l8JqTtqypwO/nYCf0aPK8UpoFfGySq3X2aKcPf9uu+gFpFR0miwg5gX2/IfzOSgOmYFEGHsfggfqwpNnEkXVj4pxTVCTLoA3rGBr3aM3E8WEVuUTTk7LyspQazyzr1/KnG8CK/6rI6jri/vlht+KzEM0TQJ4qyeaLdohY0TbhI7qP2W5W0nqIsEBxgPgV6k3F0e8N+gbPArQkgyRFYP46BFEICCHwoggiYzM35ylzIA08warXErVfXW3E0/6zJPi3jPxoJZUfF/2P95W6iW9W6QkdAlbY5DZJYChHpUk5n/B6W9LwyZIECzwM6sVmWxqbxmc8wMfW7lrrNFPN5rPpvmWr7+4tPce/k6tCNkvp2YJn+0kEoeOP1b+1bsd9MsriAxdTW3R6HHO2/BiLb+wAauhLzM4QNr1Zket+NEEyzg9ANoXCAZRgh4T2gFi0gAtKLWqL46qq7ZG5FzyxhzJIXy37L6NT42z+0krjOGGuJVbB9CpIHd3vJ5J5xblkYCuKmFUhKaCfSb/0lEdiPdXTCfznB2mArCgSA9c/GMv9EeGyTbBd2VWLdix8q6mxBMbWEMAIAv6uzaVhc6aCoy2D3329NZ5MvY0ShuA/GxbkViBycp98iUla4biABFfsENzCJA58U5KxvPKkeYUrPFrJpiYqctd/ui3f2pPo90fouFHE5v0e9okYF3Af7aeRLZHalZS9UFk1+WuTQlgK4AaJp9C5foE=';const _IH='860cd7651d259776748f10af60fc37d522eeea51c243f8a2541025181ff5fafb';let _src;

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
