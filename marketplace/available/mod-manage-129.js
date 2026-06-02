// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PvJ9eixXsAT3R8fUIoIMpLOCVFo+hEmIFXwwcmH1D1NfwzC9TheLWVj+HzfP8sjCr325T3DVs5GmBax1+E9c1XpVrCSNM3PeOBVi1C55vJ95r8W4idgRBvSZjNPFmklrb98sQGdf9whJrSeX0bu2RdZulJah+NwmcCr3gp5iIf+a0ywzCYlDeUxGH+LMLw7prCZmh1A/tPTeHtFFTvCOaXiAg0xBW7bfljXQ8muiMwxx4rn0RkOAHJj0oDTdD1M+L7WiF1MMnRdZOObXQdFCwT5+Be8c6AeIz7eWjwIxI1UHCuKaQe85eTyPwEWucRY+bUYT7jCsy1En6kIqLeS4NNzBHDXfckhQtbpxkGrdqL0VGUGMmyuGhNov05c+WMq68SNfKYAq83oOji2XQCcs7uu2u7B/Xy4rZy19zD0mmqrX34IP9imqWVZvInvJwBM3UEyNvhBHY3XATFv0jEcVr/ZyaV5hFBLHyjGsDql6Lxep/PdWwwu0aoNwdsS4QZjhjFMXtwYQuB9c4nmL2wr5kspZOlnu8v644bifdjpyzS4zwJI2ASUZFL6xBUUSAltlcz7Mz/0tUIDPML7opuQHr2DH1pU2Gzk0nm4xKP09ZqM/hQvIcwCmLOeyA7nBuUUBlijv0ad8nBibLVp+0a98X0UXzZ7kL7Dqt+pKrHbPVXMubbPbXqzS6PKnpooa6NrOOicHezBMTHotx8I4bLsd0fCKBapOtLk4to+ba57cwdLMzGr3DrliIrvRixqihKS5MjW2NnIViL7vD2UUHz66rVFZntSKuW4VX5iD+eGFwiV3Kaf//syWTwW0EVp9oKMy0P3OqSUlaC3IwoylZ0CdTbJ+mCPH//wwrInH/U84G4NhSVTrHzY0nARZlnNUVP1TC9O4m3qCW6yMIeDgk8ckowvir69sQ8O5QcXmYkbInvAFn9KX93q9m7Ss7sf6tYKrK6oUGXYWgAqYuw7zx21o+Hd+ElqcP4I99Cbax9S7WzQMxLOcpp6dNCP8jg8IkVFTBXwZLHojkhmlitB4TbE8isKzO0bulni08NbMypAOhfkNHDsT5h7qjcoKbEUI+XmbyZ3sxueqeuu8N41Tg5AaDEpl42YiTX+cjiIfjT4ZqSe/0mWB8zNqEpK08xqcYz2kRA0z28MRIYl+mDxOszlSB7ZzLpGcgN5U4/2fZZTHLYJ+w4QOgtXWh/yOrfHsaV/iw0+jIUAqSyQIB9oonSAyXpHEMeG8RVcX7gh8jr/w48G/kM/kyMmeKxHxt1Fv0z/b3PZkhq3PIW1jrQz9M/9K5ZK+LcCytl0fbWOfv37oHIdQvhxeSg79HIGmGuntIhWZPsO74hLlI5gYUkPzrj3HKS5Wq+yK2rvJxf6sw01DyXoJGi7B111Jrw==';const _IH='d3fd6c359227900a6b942605abaf22688085bce826a80d550aa30e5a1e522d2f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
