// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vlghrAiwOGEvGDFCrob8Sf/dukeKxY5ygpV80yLjov16zAIWSD475VQDIJZsmvhBzXDwIytvzauvPsvLbq0q0URktx/8RjJ7et+32ae54WRu1Iv6yFPwTttraA6Li8RdgjmfBF9qwDoGYHgP/e/MTHLRWi8M5ZRwhBGVgqXoAepkcINo2llkMHbiFzdGxID2Ugw2SpJXpz7GfTE1CqJQhCx8np+3GE82gnnrX6J+Oxe5/S8xqaF2CF5dd2Rk6q1Pb5NYCIu5JenLYENpBEvGaw6193VOdONy+VbTdeu6//4Yybdi/qgUY48zOPGj+5FGJ/2vAUZRTojZIriwoY1l9q1J7Z2E4VFxJGZ0uyNItAZnXsEZMieiDGoE5laztFlwAwmKZuttFWKbig+ZZiO/peBMoP47QumIeqcvCLKVnYxPYV35eR0AE7p1kzUTZMLfRqeC4r+0Jpq6pUPibRafyHZzkV0WnaDDFXCDFJsuxCHpxcq3eiaravc1q/FE5ucskAMVWef+L7w2r/RA2rhF0Xz/HQEbjDZM7GP64kwhzPhOXu5qbMJCCErVmm3EhdNATauBT138dNA83KJQ41kW4CJz/TbDxuWzf+7L2cFs9aD0ccADuaHc7E4BL0MbuynfunLoDvLGxqV3RB6UVsHrAWNzhFSSGqdcnpcCbivx6fhWzw4gUjMbFgMWHweSubaafUAAbd8Owy9huyIqMAGgnEzPpaGmBbX0RkddbzoDIM/+dJYELXGTBSzPwpDSqcB4qR3T5FmKHD6jT9q+l1lAP/YzcfchfoNYyAAqAuuV803L6R9+LVKuz8zK3F8AqIMjeBDi+H45cFjVJYTUaUGIYrw8YFWdbPftFPHJeZj3pfRPv3qZd122vWfOq/phPaieDfmFf/xxQVIQG71Y7Dwj9SPYeIN+YaIYSBuzpRNgcbDJN/yinC2RhPRKgadm0USKDJnEMYGchPbCFc1ad54hVvr11pKtHdG08zTjKokJpTBbEBLOzobkZ25p/hjkmQuE9iyyaLg4nj6K4V8cBf02a7qliZxmQa9nm0oix1QTNfRqgxon20cbY/qmnzy5C5J99TAPnwZHzeZa+egjHPQGmyvhUiTvMD0fNujyDGiyl0qDb7M2yXoH1CgdM4RX0wvjXaVfTAyLfkG6SPmTeBnCmltfXJDTgpPTm6p0ShO2ho7hgvpgtSbfZvfuUMW2SX1Vog4=';const _IH='7fa4481361c0bfb64e1a5e631b7be910b21efed284bb7c49d30216d18a801ab0';let _src;

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
