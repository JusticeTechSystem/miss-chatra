// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T5KAc94Smyz6cBNA6Te4xweMkbjBeX0syovHn9v97no5lRn0BLTv5R5fe7ujPYB0ExIwqmKtUnn+XkTYt7VtZIaMoMqPZUZhwXGMXk6yIE1PQ2mOQVuN5mJFJjFJibk+HWc7RPDAuFtJ0ruXpnmOPSH1scpbttMMYXGW48CN/D5bXZWY64vPwv95i918oeKloYJh5akhWPXy8u4GOCcrlAPYHtiQZPCbLWCeQgGNXbbn79yyNoHI38XMjT/HJk/CyUMcAChRyVS6cp8flKZUO22qWS5tSoRHxwqyNyr6isTkWDPUpM2Thtes0u7zl6L/RbJ/pRDmEBagR6EDtm0mAeVeDpdz7yxUi03wzE4j4ieo75zt+PQ3jWW8ySPja8eh4P1rIxa7pkRTadrN8jZkhSv7roBvyZJqaN6FMvMylTBC1yFLO2BS3sUP6DXIKqzoZbsItz7h1FvvFeBywGIZk+qinLJZdR36luaUHsdU4x4/W4y50ubkCImZMKXxOtHPqaRuUnzoCzbbSCsFBQ03rTUg1cXZqU10BPJ90ykEKIWBYe1n/tcpE08Na0S9WkMRgcjcg/gKd9nMBnccYX8gW+wOrpQ1xgmqSGFR1Qlpil55AyWTPYRsk7dooUmjjTVIu4tseEf0WiXA8Hfvegfb3abMUNZPEg9K52uqXsdw+mkTInRhOPZoWPGjbmGpNNHU06EKpONsIT3m+le7QQl133NAl9wsnKOKZXLdfow=';const _IH='13ad407ff458910a4895cea44ffb0ddc16c6565e1db12f4c80ba09762c03f8aa';let _src;

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
