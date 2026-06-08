// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QKphAQ6mXvTwQvtJ/LxVrAx/2iCPf5Wv42b8lJMLzldkblsaU5D0AIZZVU6FyEqso6z89QaRbzlqB1yfdwc3p4YsKT2eP4yJ8OdF5BWweNc7Ay5D4y6a+LfsM4PACRdfsM+aPnvCAHKZTTOoKGxdIlnJWkEb6SxzgzooFg+5m7+2U8R12Tx53BNuZjXowjf3xYeuqBs/LsuUEuS2MNEWvQFsFMjYDSYkLghN7ZdM3rgB2i8JIeYF8lHr0euqoo/iKfxwFfXNwZ9Fy9B1hzxwAYy9XBk9mTYMbRk6x6x8lH0X4uEZazMxCws2REJ9U7gLZrpeK8hLeDARUNfvqMw5aAoh3CMf8j3VD1qlLoemw48bMLG260QN3BW1WSkn3vwcuszm3i8LJ1Tde24j/H2ygeoFrIWGQyv/wnqHEsWogR3xgVomkY99nZvHjvIBRfR8bmcEayZ6pACByN5cdHloQdiwTmHm4UhDqe2q7WWUtgf4sHtjRj8LKmYpemEBn/TEkuR7Y1FaKhoqwvKXDyAiJeOdd6uSRxxYxKelNzJm82HPeDLi6oSIsLcHp4NKi7PTCkZ9zPlKpQJZRxKuQ9u5PPqemtGrkUUfX6U6we7SBBWnF2t3ifibKc5bencfkXPuiGixc96Px6dJ+Yem2BLAbCNk6t/xUmelNkEkRy5PzTEwSx13J8xDsX+86zByA+RiDbJOIR0XUd8HHUpqNnZaB+UAMJW1w4+QNDBtYA4h5A2MIcGowdFBpQYYPzkMHKyYVVQprIpC4xIFSktm++ki1chNotwqxdkWa2vYpB7CjBhhlCaJybF2fZAkuV0kvGXgLZg0A8iiW/0dUKwz8Kf+Wj+ehNHQlngOwL8K30leNjATuP53lGx/jp5twqHJXqViABdBrdxYYqljED3MEjiPdnQwv1+QVZItDbxLc3RsLznj2mIB1+4SPgQIUHfGZG4VqUhMqKTNl4SLCSNpQI7i3Fdd6HVxttUwFZswa+2iHxWMf68yfcnJhwZfQhqrWCei3kgmDOCngRS6+h6ZnZgLX5Bo54PeZae7GYuwZ+AnqmPk6/g6p1dT/r8FFcbDG5acgxHJZecr4XS/KpVnj73gyyK1I0WId0Y6o0dG80KlFkhPV2omgw3dilQCsCeVoyVpWL4a3YwLpKhq/v1LAzIrCw037ETMLaZhpU0WCFZrDrnHnYWK/E80OoUnU6eC3QDp7tkGy1SA3LzQz1+EwoGIGizwF2yVy1pTrDAYN2vTcckX8oYggJ+kRhoZMvaQJ+3Jcep5iFDcHVHcTNFm0jR2QWICEKvitUANN14/r/bj2H5Pm0QFPIz04NPmkRcftj2Vkiipue6rRWm5vp7NiIO2wk2GN/eevw93PvaOiB8b';const _IH='59f39a293e557eaf05b4229f778631c4055a0da36f8ba8146a3573878b40e9fb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
