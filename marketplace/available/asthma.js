// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IOK2EcgGcqmsHSencVshV08eLhHp4TjONKUyCSROJaUD85NrL6h27KfiB1hgTBxh/8JLyW+3HtcdnBw1i+XO+mGnVOTJG613rUM/P4lr0BGNAcZd9Lc9Kr+mJIUODFvxc+z5Hv5S0BoSw/9B5dY/geEsuXPIEhj6bpF0GaOhiF6RBjkotBNjEtUb9aqNmjzXnLF/l7sAEKIlD0ZtGkAd8D3oFnfmuiAyQCG8+oWX8FlTFnV74Zv+VUvBUaV2VqYZxyZR5DYv87EV72liy4oi2dlSzD22y9LL3qyhKIsl8s1JVsps4rUN/rYgRt4nBMkhLid3yu36e2MgvtA6MLOsF1KfeG/ozyPOiET1rfaMYiR1bXSPSedW7ySUjXv6bxdXpn0hWrVp61HphgZnPTrRyoWR3UY3ZRE4dxnHfUVUExe1wiHZQTyS5wDwathZmBirz4y4LavqSsz5w4fVbd4W+MqCUqWgjxs0w7JkiMCcJaRzGu4rrJCfT0ShkCHqTao8ZA+vZ5RFyzvD9yS9UPSYPi5o2uEfBCmnvA8KGTw+1hVMT6h6EqPuxjqNit0ZlZGCPWq3kzbTAtk0lHad5g7nl86v0AxvOpjo/z/c6peEcRX1gndvJ8au4a0YHiRhX0Sm42cgLRjkHfKCxnwqQwnRfzQs/aCx/GR5nMgS/N5SzfgPxGcaaMBvDbGNHB5lD1oKp9zMqzYTjbhdyfrdHQuurvcy+7FoTGq7QKNfpGTHnzcC31DsZ4kJKalGVWj0K2JpnKfiplZNiJpjoTiWJC4lr5/9s/TXNgMa7PMJG1MY6UDsjeY52FbL+iEr+e7MHMxma9lDzRPa1T/ywdXz//flGEyaP5j/pmeLzJ+ynhaVCUGWsbOJ8PRc7tbCrYY9NdL7umBtwnp8WzsoS5l9x59JRpKqg0c4VGPEnDykeHIOYyR4Pb90vCbwqF7GWWZyaPLxlWQ86DS7qORvoRvPxW54qa/S49ZQY+SrkxoBxinlxKZQ0MOPMII69AFzWs7QfdvcpcnJAp3uKOkOeHenzTvnFsFHZa6KHA7LnSDbrW3EaWrs84F29yfaOqQ6CmAwVTQ6pSNsA+fmUTvJH2kw3EfeZodOggtfww29Yna1vEDx+LzB7OGVgPQgt4nD389VhXo8FXFmb6wmyRHw8dTrCOabk/Ck2tZDCFIng9OpUmC9oOm6OI7o4PgyOQ73GpRn0m8=';const _IH='c852e8d3f89d760f5ad80982727ba118bb9cb00ea68e0def18ce002ecab78af8';let _src;

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
