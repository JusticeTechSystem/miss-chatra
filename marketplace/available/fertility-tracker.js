// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1v2BRtZR+3HnqYGw2tg2fE+jCRm4AtL6VMhx+/74BDrX6idq6E4ZZjVUIADLy+dl9/vdJrMI2da+tOatREoEIew3bAPc1ous10CU87KnyKCrhG2LIjCZfvybUSZVLkogy4fFaUTfRgBh+XHZQ9fFtq7CNA+o4NnQ5FxJloac8hfsR0MHULuEleBFaga1Z7NDMDe44TNrYuxlj0b1WKuK16bMhkKVmYZerebY/mtP3tQTsdTknPIlfeTisUVOUYjgiBDVqkIGPyBLI1nfXDMr62md7ErBDxbj/iwV/2BGdfXcOdOBuMl7tvZF0kwP6WusieSf3lADattnqc3JzB1IF8tUA9BFYy81tRnWVS17N+wPSEbDXx066LakdIUFRpngfvge7Ttw477Y1LhEC1IEhHxz8de/422BPx/CK2dU3/n89FgAMaVt75QAuB/5qDbfcVJ0DsTOrRJwNM2P/M3F+sTATxZW2jVaYVZh+yTbuIHIbVJ6IKEgbmXTY4SnQhj7XJu9LdGvGcQsONCe9dwjh3QXE6DC8i6y+AWnH4vJ5XbeEvRri9a5y1tsdHSdgxZk9TGgA87ecDO+N1A3aJqTNO07Vj9qwBeoNsVpGpcF36/s7pX8rHO4VRFQZAojFo2eK1u2DmUEDy84pJ8NBF+nvXzc1M0hTaFvmLFHGykgE55lHr3RTOt1z4xcJgZcJe7kwdrn8sZTalTIaVeL8kDbU3mjCil0h0tbQSvaV3DD9wGAeKg1NZc5pw4eo3ycdNRHrDGr7MN9aK0URrp/iQCJhl1b5iDTHoh59ZdxKS5eVTGc85PMgXIa5SivPeGCY/gN3+GWdtvGQaSZJL2+37+XJGNuM5DbcdADE1Rsv8bmi+S9+0lm+Wm9Y0dgrCsADQ/F2JYJJ6khohksdAqGIOpBvvCR4xvy9f8xjCVCRk4c164u4ioAfZ3Ez+FTfOQbpTYvmqti/sXrZtCuZaCfq0i04jVZWj3XqBuSjsauI13tzugDGDG79v+AQvONQrqLAL2RqtftOcMtYYlhUv6ppF0NFzgge9kkFYA17+dfUgk0MCvkIDSZ/SSaXHNR7JZSCYk5+QSwhxEdvIrZXKBA0eGJldlXp9ECjUlp09OAxssNaiXgzsa0//UEzt/BEW9oHsy+T19hNwkhLkOLlRNiovp0q5Ik8/gDt1iKg8Zhko3nht2jroA5PaQGOzfuW3lArPKAQwaURsCpBxpdzVLQ6mvDXcHfmezFckY+rgtCTWOQcuR55CgyYfB/KCv8JjbtyqhDG/PMYsUsKxrHKh940vUMo+PnZ2K2Rgw38EABnB6LhXfH7VVzo8/sFZlOL/xJOUNjElbMOdUBGa6RyT5sB/hzDwDBqjuHDRp50uwcyOstoBfZCMh/fXd6y8DPYqmr2sWOeBlkSutV2MNt8Cl4fzW4Dly2Umn0yDarSdRXVqTtoDC0qZXNsac0hF3xBu0mNEai2qNRFoBTku9EXTFeemNTAoP4djiL/nh5QK8JV6BtyMQHI895Mplh8x437bHFwWYaUsDMhEJQ82rMKxIeKbehpO3ndBg/QcATLnL5xm9qJC4PpHbGJ+VBlcE/Wm446j3SYtBXTuhHn1uQW9Z2qQDlTM3GIqjh1ApOIK/q9sbBXIqHqZOBlsQtLFtDkqtvNl5qx/I+2D/bQYMzrkgsyNk9J3Jml98NFyEVkTRcsq9aXl0p3iO6oLeoEfuFssg3V/swD0oysTtSQA4uFraUDXEyF8jePlvbLHdxyuQn2lN93UZalyf4/WyaH8hhN6PhsMX0r0mZ5fThUYKTIAsdmt/MGAs5gHFr10CSxVLfDKRx8XlWIktrGT6Ew==';const _IH='39c26ff557093d568ce624c0b38bbc95550b424ce54e49224d33f004c9315dba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
