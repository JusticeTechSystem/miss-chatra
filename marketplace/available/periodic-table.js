// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RoTARqp4z2PqUJRuVbuSxo+bGxkXtw1lgX6I3FDQf657GLRMtQ0ieC6sjeGkzEWyBOAp39wjvziI+GyDh5qAPEAPOCebIR1s32hkVXXLLUB46BbpruqPvF4j5Le1Enur5O3yQ0Z7Zxk4vGTZefLOCwb9PY4ygpSWRvqCUZAEp/B+pOETsT0yMjHSyoSJ84Er+VhhWR4P1H2m1bNpE+pfd/n4FU/2h+2IgvfqhIBcbr6Tb/wdxAUWlM+bhO3R+2hfg6WdeKI4peIcTXjVFN5a+aAH9eEDRcu/LwDdzxmFxKnyUFJWjQTgFH7CfmDr02FxbkmPtyY54iW9FQDlkQ6RIhlg08BuWzNyKGouzenB4z4EQF0WVHe4IkoGdAfuCCH5mKP+X0OCQ3ncMkl0FwHfMLQYc//FhJB/uYhReUnplc2d7O4m332WNavZgbEK1+vy1FeyimnveIjTPbSml5s6peFriCcwm4QyWWpuMcZY+RcopEqjuVjwgEua799LeQ2uRFX2uixkOWYF+dWWieSX4PRAj/WPkVUz6LHJtuqL4HLsmcxAgtybvtL7i/uHDc4IO1JGCyTNkaY3sm0=';const _IH='06957484a9e23fc2b253c5837c8e2a5f561d689bae082d38deea8359438fa04e';let _src;

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
