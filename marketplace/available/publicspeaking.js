// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KFje+2vNDFuVcGlYT0D+nr3XrNd7SehmTGpp/YnLLZhvwJDUbXpxFUlQwUNwCUAiFPNLvrSZ6NTyhvXw+FlL0piVx639XQq+fVQrmroO86BBzbc2YysxuCqiQv5K4Dvq2qGuQRX+3PkuBNRDrfuFfpyfrMfZWJyCuqh7rZ2rpIlTo4hhafvOJqu8c8u50zeHl8XrQ0xZF0u7DZYElwF01IW+VsIEr6w42D3sCQvyYi4yN/1OEiE1rIpqmaGbre5Lf1tkFYwn1hrYi7oZW1rhDx+GsQKNpW/zogomycSEuhRCdxc8+91T2IkX+bLSELSvLlVn0KAg0PpqrTFaPobKtH6uNfsie7lLwvZeIfQWtLC/l3RD2+HZd/2GHPTZj7FKClxaTGaSb1IwE/EzEtnuw4sNHZ8VCV29+wzlSMGXpjyAUNevxv2JwiLRjBrv/Bc4FsepWVhsXJ+ySlw7BOncVeBJY4x7ZKlujGMSi3UNhMOqaZtFjOUkJwgJwEP8WUfp3apjPWP1qzKYk/TJIHaqNtt3SeRU+m39c5825mCdS07cKRSo2Q6S9WO045hdUk3XRR8gctTLCI/l6jiIQgwdZ290C69V8Pc/ECdg1wJD962vdFeKW/JQ2IxlW1LyOgJA2gkve+2Rf+OYf6Pm3lUN1Q6TiJsPgBcJtW32/AqZEHRz1CjyybKjQpEmYViGvYThj9lVXIS7/WNMd2pGowGqIu3bVR8/LuHtYH2KEwILkvYbpjzlSwqwnPhQpS/ZoXWtKh1T+c0kHBfb0x75jxEIELcPxlMdCb0OSixaqDW7VDFli6CUVHA8F7OyNpeya93lm7PpzR8f9ocHPUX+zt7Vqw24+8L4x9ogpsSosiKtsDGHC+RrUPkSTdbhlw0IxFmR4KG/L7yWeGR8W+9Fy1avZwwJzt4RTvWSYWcHGxBZc8q6sg2IIpqGzBWed7Ud5NjhijRBui/WQByCBxsE1FOTxWv70U4gSRNX2MrB+D6DCv37h9aqnVrVlAmoz4fJ0GqxDxgYAQv/XyAZpXdBPDhNnpB1pTtxxEWRnrzHAuXbm95run1y1dDU1oHFu6syiSenX7QpYUB9M8jyoiTOHhK7Vg6yWEbmn7nBRLp5i3mOCbhYHJlYuHBH7cqF5fxTKvTVZTdW+ksMIaXFxPo2RpwtZ0yEAdSfP+3ekljK2pdR8dL8vkJ3q6Ez7/dQdZbr39jUFRK0tlYQdpKXajTpq8Y7UaQv';const _IH='7d096bac7aab5d77ed420af1a9a8f15e7dbeb43c45d4e58cd021337f62108a46';let _src;

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
