// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yf+3n5YMkrjRcb92Fsgzxfs1D22slrqxCOh+0GA0S5PLisrbXIeYJn5vxx3B+PazAhns15EDpED+dnSpLzo+34OjVfElI6jrkNGfIaoU9OaR14HO0x+1aVwgfjIZyk7d/e7pznRFX8VeGogoLCbhc2piBne4aBCkQZ4YrUAEKGWP1wPG98QlrQfUhSG0jKs419luXi8fNxiZtV6K538cQmwpRIbEhK95xX1QV5Y3XGx0uSBXy56oTtgc81Ue29bJ7PP305IpSxp7X0f9qbz3p+9t+S8X7AmKnhDz6fp8RrFkpBGRWuxo3sSwOfKsterpFHjoOUOj03IlHEHHl7GAy+VlMhMg++BDyr8rVhM4KgcNCZpQgy4C99wgwttJldm2hq3s/BEegibNpN2znZJ54kaR/GyGDsoqz1aaINubATwqQjlGSMFhOjmuEsLB/XTfIlpj4ZNZN6UxHRKWmFUZJJMdsnmgZufFbbHK2SL92CJSso+/SnpngTiOwh3gM7sLNRGZrjtaT9Nd1hn6l2Czihrh8fg66r9OYeEegLGGfg8NHtM9ZRbXP5zugl1USbyFNIi9cL5sKrXLhsS6JlWpZTnYrKvHHvRHQnvpJwOftr0mQ31inN5gPKwMo4xtykW1BU/wT2SaPUVv0MnRWp2xi4tlRF8IJj/6wW+uwTC/effu6mZSiA1ae7JoY44KcR4or1k+Eu0CmYrNbQdroFgzNqCYFGHvf4Ce+Kx59IX2NAo53zY0q4Dj1pNL2ANQfrf3Mcc2TnIjSu4HCWLEj1dY88xaTRlvpTpH7PbfEs+iuvTg+IawYojle1H/AtsHxpriutAEXx26TZg37dz4YISvdxVvNAa1eHhhy5NRa7YrjCPr2PtFXgPIXxdzOjIr9nAqbpclTVxDRm1H110BKpb+72zPhRcZYfuSxCDoJOJGjL/VSQn0ywVttlxAatg/h3Tqgo4rD3roR+SeBMuLUcUZiGnAUtotHsbcH02srTLv0g==';const _IH='6deb48d59d60153028242db1eae333e0ffb87051e027d2c4e04054be4d33cb2b';let _src;

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
