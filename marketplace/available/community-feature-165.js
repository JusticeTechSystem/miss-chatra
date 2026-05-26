// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1oAsNR4gTZ1JNYlTSqr9LjPUgx4JIATdlNLrYRHA9/V3IQunkjNhc+yA+WONUbGKGJTORh5iZeYxBPUvMSZeo8HkfQ8zHJGTjUBOnjcM1LbFmspkwr5iASXDwEjEDVnZkFWRt6cP/fHh6cQe9LJCP0//uXTMlpHsqM4CCks1PYI2BbyWJ6roDz7LHgAkYegriJeAcXj1ZLgx0xD8Wml0nFcoa+S2FmOg+ySlAIlktblZyMX5MDFP4hlNcfHWxSN2ad4XiDaImWwOhIUguLiqt2VSBzzhriEPUo/W+iG29BqaE6lnmtEbX8AhXOgjbv5z1AFzW3Vj8MGFABZCy1gL1MUsBch4/yrmuaCBCtsjVPRgZ4d40ffgeymz4+7EZJvvE2O/eVpZcvYtKSPdgm+U2iK9hnBWH6GWBDAjLdLr83LEG/hNxGiqlazHF/SFr8TQj2mVGFOgU3ung5k+oFPxmMeXmt3giZQk5YXAuYrfVDIvWWSg699sP0F9Yrcp4ymN14T3Z7EnHkLqzCr6s/+jZBx9cmhhJvpE/m2mIS6TvdCxFAi/3oHo5q6mtM07NA+HDG8QlRINcrk/a2/R7Fe97/uik8uMyy8/Z5rStiThEZhjwa2mJokAf67MCbEalvwQb9wYptL6hyh6E8uiVwxSiXE9jbU8bgbqYKmkqGjNdxdePxdZ39koOY227+C9A2+S2H4w/Jo1GtMx0IK2puiTynr1W4E0/a3mxdrFwlDgSUjxO9PH/0P2KO8K';const _IH='4e9cee6de1f5240449d0767497e07fc8c70a62b78bb322b2a51fbfbbdf549411';let _src;

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
