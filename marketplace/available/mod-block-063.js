// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WBceN1Hb5IeVU1ncKFB/megHMZgGi/Cy1YUe9dldorCBm15c5DHvDkAxNve0miwPttmxg/GfnhbwJoQZuQ9nrssW9ELAYEKgy55Nm407p7xcx3dtRaTyR/RmJcYzrKqwIrWzKwvFRk0s0EjY706qFHFx+f6qSVOxU4tOItj7WJJoKmKPP1J9Z1Bi0q0LykZPk238VIut/WXv8KmsTDJt+BguOOVgoNPlA4c64fqaAIsAgIQFUQjKCoolKg+1XGy9wrd5n1sz6zulY4mAg2+nrfWnQI4b3BdQSakWGEqLIBEWo0ZsBX/wolN+CuFKXQztVEo1GW5yhXHFvZ7iZPWlHJgQlOpfUC7XtLC6Audy5b8QlBNnkMh3ipCRYBUUkOKUMi2bL5CRbB5BDEOPDnFZixcywS169d/S6jZp2GxgkmALrhUCl4XB3l4DKgF5Fu7IxvHyM/hRiJR7mzw/4XfZGGCprxCKl/A99Zsc5gA6ppo4w5Nob4bojIXMvvO01551JAgfeCSJrjttXbUkPcL9SAStLI1wIi0iBSNUva3ud7EK/mPSj9dpLcA3smhCjh2vbXaAAtWUbzbgfG5qjsThAxbWNsVpZ8+ruz5bqcEpfG43HZ0LbvS4aVikqDsZ8lI0bZ888T3N3Ig5ixQg/t/m4z/DMLgp5c95bPhyaHhcz8JU4H0HuAiyPJ0TWAsp/LPiMeW8WI+bd2vAOY/htojCvDff/GmrFafAdGA8H3dPXLNsXwXI+RBdBf9jk+hSNGQkrRu6BqInq2ME3BmTFT9rO3tUgreLkItKWgWSs1ZQ2zEn8pQmXduojtqjFxQ+nf4Lz4P+0ywHFTF7Cty1qgFYwxte4bTIa42WxZNS2VMRHznTtVGol8ER9wMV3TJ40hGX3QIe6rDO5h65LZ/KW1ocNiJUIE3xPJKKgBwvox4JE+OMk0xNKtTGMIcX998cRQAvZjZ7oeuC3hHXutEpdkf60mcXpDf6HLAEuUI1IoG9a+lEEoF+6zxmqS2LpndzDmEtjbeZXLiNTZlEYCI4BiohYw5UALbF8/Vsy+haQtt/IuIAs65ohD0faXusK0eoKBiDY5M0r2ZFcGtqGfiVjYR+6O5Sd0t8QYKWeoYnMc80h0fPrz1A7KuwYeBYL34FL8UpvNA3vmg/fAEOtZHAkbCpuGG8CcN38TJRppiVk7QYW8heUDp1dyRI3a/M8FhqG7/goolJdRfEJM4UmN2t7MO+oBbR2vHkJ0HvNr9q93Xma7Gkb352GrrFnLX4MnIyOU6rhJ9oBNGI0B+YR1YoveR+RgRr/9CitI6C8es/uxs134LCWVqhfH/GZddbi13Z+C3+56amxUvY/i7udTyFTCl52rj0N04FH1FHoA==';const _IH='a74c773b5d8938b63b80b38f2c86ed8b2e8a0b031212d8f2ff161e4feec88549';let _src;

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
