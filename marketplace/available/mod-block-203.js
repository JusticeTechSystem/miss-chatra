// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzjKF3IkX1/fUzqi7M17skW9MZvjBF8Dm8NITHUN2UEOHUBJbzC2ZGpkgJXsFuJ6ZAvoEwQboJOETDDSA0t6TttPIUeH8nEhgH2eiU3HnKO2Lp5QR+TAKF2synVgRgQI+N7azwRhZ1qkGWR1ehunZMbYQmUgX2xR2eCjtcOSXdGT1GO51Gai7jtmgS97jeJFeNkB9gF3jYISsk6VPD9j9Bx8qzAUBLzcMFdm7bFmNY44MVSjLmN1vegzeiBdyJj3dYDl/o8PhqJ5+78eDKYijg0Cb/lE1pfbccItS62S1Dnyy4XSCNQ9bhA6KeosIN6aqrfID4q4LPolbjZxXHpRmNzRO2WMUykYOY+ClHJWcelzoSfG5DAVCKl6qVW38j9TiD04ya8FC9UGyugTHL0ircAR8gzmiOeLJVawmcSCqdQeiOHHoKoPiRLN4thshVNma4zWkdMnC59gh/dRYjC/YQ79wEDp2ZVx5eJBO+IGGk0+ks2c1uWpufIbZPlH7r7kbdHZmcqTirY8AkzasqsaxDlo4ACT8DM7QEmGhbr1TKjY3RKPChvpOP4iFq3zplSZLD4WGnf7rYXHaYuEpbGeOGNrC8yJx/+TYl/wn5zcJqErTBDghonRIBf2V0QUj0JPL44acNp/+hdDeNE7BSipynwXNgci7UBU1uIDqi6sBi4lFdoA7X+arKHlW9aATN6ebkZblETd69WVYmAgLlKbYGYDIFNrMBJLTUyNplnKeZZKpxEsPBcyEmwX8GbV/L/4mh+nkfk4J1Lt7SjXKfS7tbRD0rLHTpJEPEPEhpulb8OmEPRzc9LrGI7at22OPSLQ+Lyc9BJ4FAREvG7I7vIY3ZsJaxdawFrymsL8EQ+toEorTJWY1kaYMjAfzw9lV6v3XHvx5Ybfth7ECMGbIlt40TbEYdupXQ7xIh2/CNASmk1rg9Ej72+DXteKBbUh9/V6Gq+VBZZdo3LYyUVEloREux20V5XIWBXHQHTC3FRJZeRmBFagL4KfomyhhP7g5hTBEDF9jGnDXtSixDgWYXVcg6zc2v0tj/Md+0nm7V1ChLm0/YSTEygycBoyws+hsIhj3KATbiEfohrUiM3Wbo2yywbgvPTCjIS1H2GuX2i2yTjYYw5krP7AFSTa7gkJEg5+yaVOVYlgZT+4eM3bOOsf0Hg+fgXVHlqLpQNMaf+leqIj9ygK0iZHK3JsNZCsAStj2ZVHwjDsg4hwfVuOsVnf6FNpXb+/dlEXLUZwfOPmlV2qhR4/Dr1k/7lpgPE81m5MfNgLxJFF3VEKJMVxja33TEY9Kg1p8awEwt+JQj6WX+DySpmnxDqDCTM14mMCkKUQFAe3g9mrTwwZgDh/xUCUPllfieoeMC8WqVCmbif3o=';const _IH='58d409c1027ad9d9c089a1634fbdcd95227adf2c7062b21e727c923bf4b3719e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
