// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X/sqOgzGKwlgn9ZH2TsnTjohW/nzCNtS/TJITiPMMyEfNJ62UVcYAUsrUcFZBhxxtXY7ykjzTaNyp/A/MyDjlVuniQEPGGWMX8Y6x02W4wTVh5y3Pefz3YWaMFiU5ZizMvj2+mWBZ22LZQ+JpA1qWfVrgeFScfKa3tUYGCOk68SjjPC6D2U7/E/wz8y/5x6vytNFxvGZQvc06rRPlbjea/vpbdVAkbjLEC/hcgauDlt5CcN6/Sa1IRapH2bLGGVetR/tyDe4rV6YfAmUNE0bOE47ZpD2q8WFxUbq5BftE7/KeDRtrOghFWovky1EkrJdTa2YDl4+NvRZ2GvXcIpq1J0ZDUZnb3dv5Lp3hSc7v57RV32K5of3KiVLXCDUjZvwWlR4+uf/6G65liwCFyPJWYyFcNd4CrOIvlCahjZ3ewLfymasB72Ro1GobEvo8GveSW3jCNRlHZ+eSw3TvW5jg/gNd2p6FTMqJ1UBTLLCE0xlb6xhEOvD4a//ieaMhCPXcRmg5O1OF7pHXBLFcy/dWUvsx7hpOgovVk/eN2nfYiF9SXOGQsffe/isd2lhXEmT23IO70Dm1/W7mfwRF1vWw+wrkcFMTe8rfw+vL6OgHd6OLwwDgqxI+WNHz0mcIXjkUTPTl3qDOxiMgJxfKvrxiu5pd61ML6YE6m78M9txZEinGbwifnKnuhJkTgWgJ8c=';const _IH='6214a58e98b0e17b4d3e17f868b9fde8b01c7efb91e35dc744514a132029b716';let _src;

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
