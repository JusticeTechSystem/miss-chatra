// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CR+T0Fm1u+C96fNrpcjc3ZSG8Mqy4outU2rH0ANS78u+JnwZx+5QOA3KB/fcxU6iMvAPU+oVxQiQ3GEqEysZPKMwatZns2nTftwjpfaYABOYfWfpRAcE+R4b3KDGkBbMeQXReW1BV3Ts3lj8HzjKVQn9+q2YB/vdo7UbJ5cadjWXBuQFVfoORFOG/a0kQ4C3CoXW7xq9vMmRD/v/KC++Cl87Vved28+VToyy0usDVIcSzVPanhvX8h6DO8l1vsfm7pzelbiUt61+OPZfApb/r5jKbfsW/xC1qxAgg9x2vUK0ew56m5v+GQWEm6UZ7No4CpQ2P8XrQKhkOX+JvUzbpq44xPjhW4//jN+gT8umEL94yKa86Pq8u55d+0DGXIj47EIMM3Mw3hyVf7Ej859Uc7ppVCpRpfsBqC9Wniai/LgHyCjgZpCOHZ00LgTA5y4S6ExTCvfrpI8SaxMzvWopotZkO71nvhO13IVLfgwaMXrPZzjAEQNvcZ0QnmGt1zSDsgDuiFlPgmW6kf2iAZge5PL107y0pmY9e4qmOg4mLP9JrBmiJx/zl2+H3uasUqPGFSE7v+nJAVnAgAGAdDJKpPdNgb9b3DHjDVusrEIbdjEnxxeSJ2yy9xR6SwV0mZGykay0S/tve1WCJjEdET4INZNF4w61TkWTRwlPPaBuJAkNi96f5DiYdwB4crgezLW5XXOb6EpEI27hyrS15yEK0zFmn+WXGtGCVie0vAtZ8O1y32UCc46kB/ujzQIF/PKtdCQHwZLjlqhEG47kocMYGgE7Of0c5gbvSaGKiKQbCvr+E/92E2tfrL6uoUczBzCPyXc9LwBuCK8WZw7eUY1W9wDdRBtSK4W6UjWaUf1O/2t8h9IZ+B7eOhhHhnx0cqUikAf7QH5oO8R9DFovraAyiSHcbxdvckj0PrUU0nLoozWqSX4kAPn2mk3Bp9GqT4u2U1pcefwAE7mXcoxPw2NJ4fpP1PzxCQ1wFTgbFrM7AsyTIZPGkOPP3qzqCzyxAFoDtMLjUYytfVsFHI+Sqs+i603ZCoH/i9EHWLsEUZgg5uZ6GfOiW2Yz8/r43Hrf2cqlT6Zlvm2eZAfpi6RTv+EtvX5DCq6eVt6KzzemSfd52zuVH7RT5vnb4n7pj6C0k2EuIFRzMw1Jo6S9I2dwg+abOXgsaDhnVPqs3Nb0nSt0n81GSlJb/hLmb53UySGPgSWAuF7HEqhcLGqTFx06ODuRkCmKonfj/ktofzs93cZMScR58g8eT3qyzTWZYUbqHDVO3i6pMRfqL6aQCNaCAXJg4fzV9MeqFYK1xXlitomqEQdL/vIgT7dBMJX5O9IwANosaA9R65I=';const _IH='f4282eb86ceb3135ae2ed9267eb088c53a366549b68791b50d93d4bc041f329f';let _src;

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
