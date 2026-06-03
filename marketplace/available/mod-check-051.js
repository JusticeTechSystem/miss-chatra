// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LrhGdx704yMA5R29DdS79zzBPpUwxmTiX1HZIdSqOgviaj1NuP9FVZTwKolmxm+3+Lgfpw/B4oDKs94xD99pj9pco1bDXUup8h1L8MOucMf+Ht7pgFtukPoSZGhIonEb2TyOfSP+o7oFjoDeRK/vZdf00Qv2OEmQQmJOudY8DRZul5BzhRyT1Xg+WITzfVFPDzHJ6KTXa/id6+V6jgiIWJZ32fjdDi8zvou3Q6yew8MI5FnfXAVrBHdF+VnzMO7BFYo+gUeeMGNk8oPVS3HpoxdwB5mkQ6t+uPFgpGA/R6M6Wm3Kjx4IyRhoORiAc98ztw85cWXX9Rbb0GnIdiNEqkDwi4Ow/mrPuckPeWhhP1Z9DtQaY6o65nZ7lbuZZKq8RnUt7OQH2ej6Mtdy5vwCXNYPtv5QKlBm/JRY8pQKoieC/zCKyhdzyrQN4apqn0/0b0BJSG4eCqroxrtsVT5QKysT7thIFy3eJp8zeCDj9snnHs27IsBb7ohqC1PBwYoNXMFLVeXlPpWOFyegmk5JBPrGsSdpKVpUtS9uJsBnUguy5i0QMzU6cw3Vu+CVDBQ0+QhAKZuLc0hZFMKaz6B4d48JITKbeA1lVx7oKKVA8zokQPCU4MR2LYRI/cO3obFacdssQSKTgQYQh51zSYL6O+Z/jV17msySdRIT4lPQ7FFucvgSYrR+wkQ3SBXxB1S20ZvLzZxhk+PXi90CLrNVOuZLQgHnakUixZwSa8MONbCM3aey9pymQJGYYJ5Q7MK+HPAemwU7HH0+zTQ4PfitNoc77awThN9MMhHMDw9tzAldhfdEUfjYads9gjOdLqjh/xDRwjpO1BuQwsdhDygINnCfJe1eO9yHdNN4TwIpjIpmlXXhpE5NXw8BINLRzhz6U3EIVx6MF390iHHZDQgv6PKD9E0CjRWZtLgwCrYqFmJHAYZgGLBKViEaA3/d1sxNwzHMR3rgNXEUWY295QzW4mjCRodbfVqOaEhQ8kYRsoKdtNJ+GIFWE6IvMR693lNRSyILCDcN/2Gwo15yYNXRM41Ka4r0i4YOVnmbu6E4+/xIUH1wxG7vFxg7l4sf+o2I5V/V0wIvDxiMLnFLSEbOcaI8Di8a3huIDpYyUCCz4vxbV4PnxyDgJXBdXaO+KT57c8AwJZLV9ye8N1zBRilFHAC0xTkk1EED160kcITnD0HJvApTB8pshj0cdhPEUJ/7YzJNWwFwkbHyQnwD7qWtv8fsEWneNMVJtfo77GtsfOX+kbtQzO8qila0px6CIuURhvNZMQA1z+JunTNSKYWYADrzq3qEcWp6dH7C9Cs4eQS27lWrchP6aj/376Iz0LmH2DUrl8GIVgs2nLMYmLsCrmvfW8CtPaCiHA==';const _IH='9b881da5076845ff9dc858b3b0f1d8d1bd572c3662e7d4753ee82610ff60dc11';let _src;

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
