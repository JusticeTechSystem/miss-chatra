// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jFR1aWjyAKQ9iwof0IQ8JJi6hZTnqe5V99TBIVlASjcux35ih4XuAPkC3jdR7NGuvusnxl1vb6to2GpOQ3lRQ/KumWWjC+DaLjpiQzOfr0U9TENtDzPLNT3rqOF8IZbq++1lmdB66R8y1xgXYgKFWGaqpA9PSduKItulA6C1jmSw3eoPHiEo1OK1PCQq0VpC9EVL9428Gf+BEo9eSjGxi2o5awaq82Us3kdufQUS0A83q+LqcTMRQsTzF87iPD5Eb2oV678fJFtiN+opZ/YgUtr2sqzMn39wAKNayujiV3ssVwIjSs7WL+Q4ag55NPv9Z52l0lSZpW2es8/Iob6f9PnZMR6JZ33so6uD0xSl/1QtD0F1NOiORgueX6m5LxwXSkN4F3TwLzeYNzy330Bzmnh2s2Z+s20nYampFkGcj+mxsIflItowW4WH2T4RhNZypXs2IR/151WTP5bySR99NXVYEFuwrVVh99IJGEvPuyVfJ2QYgEoD/Z1BXhmQHGnFvxr10wO4p2f2vvKUBNPg5y3+cZvzQaV3fHNITsy8iZUVpgt9tDCCaybuJf53veO046dOxSH8ElAeInb9wTtRQKJlbMtiGIWPo3HHE+sPjjjDRS7kFvWBkyHVrdT7aAFG6CC2UPrBs2HuEFMHkQIzDm7W6OrsWsF+F+HX/BX3H/Be8n1weoQrdXyn1BHpWsVJpaWwA1qBMBJTYAiuLavWe8Ntcmse22oTS9IKXYMRndw+ggoFHBpe4bMC';const _IH='b9253d9c922fb9f15a10eed39802f7095662578177ded56cfea185dc6d6ecbd7';let _src;

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
