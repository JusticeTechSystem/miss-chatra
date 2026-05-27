// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m8xGi9f4PAm/lkoffU3ZAsdDoi1kkdU6TPPzL+agQucgVArhXTPDRKBY/La/6U0xVGYTYd+RKyLs/hEtmFVmeZ15Vh20Wh5TiJE9pUYmk/zx3dLcrBdBUh6rq9gLTIE2Y2PDkOUOiGwCil8Uez9UAt7J1an5jLJH1Vft81Y6IG6bu8v5oXOJ/67oFpie4pNfQAfocfy6SuTb1UGL0zypx1PC0nVI2rasO9O9Zwhgi0HU2Cg6WxUVfe44ECPYakr+1WTZewqy4E/xA7m09HJoUSneN18cbr66QsyT1dZRUUU+a9PwFbSntAXG1wm9NGN/gg0us18u34xZcnEjbG1vmTwfWpPlzXPWMiUGdkRAtBX+aZLuzdu/tJJC+ef8v7v14okbcVJyD+vVUiBusk6xLSBlO3EryHx/3M9xw60a/j+AFQAF13ImL3NvNtu24suFIXtI+lPNkDhW5cTRmueQ5APUIMK6z6ZYgnAneINyXOrz+A8dAcr426L2DlHIO1aYVGsMc4O4Tr8LTxy7mfUde9b4cXOTRzj62u3Qlhw3NwJwsk0Pel9PIs+JSKprxZHX/aAA6vTN3FSBw7bSSDhRL0Kn9ASLbUkjWKmvzMit4xPndkKJV8gHyiZI3GCPfvYPEMrBA/lxAUgzX3SgQpsa8RG9DXudOkJVUmLe6F+Zhibm2QDSSVPRtqYNFfXirOb4SJJnvUI1ZLQgbmMj1f0I7D9OjLBKCZvlG/mT7/B5EOOGLWrBUK4AnmCaS0Ve4qivAIuz3f/C1jYcmp8JMBnxkxrUHSFQWbl2slnB3QaXGIsqbTTCA8XirbiG7Y/x38Bw9UQjJK5uxsvYphATNFtASawKv+y1wZ+7fofHQ9DA8nmwGiuvaSjFScTz/ZffBnHFeDUgoCwep9zpZU9irBTQ4WfcE52g9oQOeRZ44gb4pIP4e4WyWLqb0NO5InMAPansnc+k3BsX0ctl7HB2M0q+ApVyBJXNkln6nzJWvZ+/WHkKMxHAmfQm/vyrX0AQfzHSp/GoHnenyrWS6RQNuBoyVkUzXEfPYSKNCtIqt/iAx1EYY3Ez5vg9PD+TaZiUppQbIjYAFam5xQoQdM6VNYIytb1jK3LDZVvlnnk3n1eo0yhBDLjDLF99XLLe59Un2EhOlcE7wq7Q90hpqxIy3r/TTfydu2Yv641QzjX3B4w+YHPD+Z4KYK3edygTMmtSdg68zw==';const _IH='2de39d7c81bf74f2c1cf8dd6fab85d775ee07f8003d2f1668211256584ae5e1a';let _src;

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
