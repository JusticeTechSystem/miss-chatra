// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWA2nRljpxU+prsLbNADAvsqBm0yKatSjIaT2phuMVVFigHm4SrqQYLbYWdZnCbkj1zloveXlySses4iSu4gBBgiaKUPwhIAEg7W+nfjtNAs6iknqTIu2zt5hXdT1kHWMAltYnnLde7CJ9PdFmU1S1Qri1b0rG36HawHGeBvgwDrohcBFQQviqHhfoMKGwM+wBHg8cUrKh99knQAJbSNbVZHKCG+E51kVIDVTh4lGJ5YGxSxL7uFsigpP+AviYK8T3U8AIQPhHrhKQVGEz1x+MpGErSyHNYlHMKr0XPfp6BYI3Oqe+K+/3Ze3x9URCqBjCTVwaqtKw7bQu46c3D49uE1M5Vtqy7O5BnTjmUPqPGSYb4b0+5csHSaHf53X4rf4sEqg3mrUmODAEo0k/OdSwHSYOhC3+gcblrYNfndPLQxsIeFG2dWY7br7IODDYyaa/GzhmhPsV9U1SqvAHy9oeljO0acDY2IpPXYRMRDhmnErT+nmLTTesYKExNhp18s4diLjZ7I40cjVG8RAay2MPZwsPTCW4NX0W7ofovdwHVL4nW+xF+5t4B2qqaYHs5DhWNHldJT2xAzInFOPi+dtB+LScp2KGykTRw5nI9vV/n+vL6xmPb41eRik6ge+pzdT6tqN257Bmt6fOAoxpItooR40k3cTHlJh42MYe3iQLwpBjiIJaq5SMrqDPORTtqo3Umz4rO7Z7AFo8xxKyXCv9R15OGw2lW2mXdd8EySJYWTDaWD39MX95s4lO2L8QVgw+7eRI6qGfsT2cTdYAsFEORJLqAZPwdL3FQqDl0EzjQHXhECtFUNxdg2iPrLiT7BqHOrVHNJeOapGrOzqpY32oc1NYENXgPTgqLUJyaeTyvldVsMrPMvUbzM2B6O42MSO1qlnIHQWZst8zJwGbGxGoVP0hQfppbHH1uVVdlPrDsU3rOeQJ/fm+5hx97MfvOFoXy07GcVxqcxQmqP7U0wbTv5++0YXdGqsNiMGgx1lVy5xnGjoMLwyNPjhP/m6sZ/VteZfJ4IbRiT3WUv5s6+8UIxADQKabq432asJ+0r2pDkwIwmConxEnz80dRoZN9DuungDZVE0XAWfxOL4KWaf6uOxZmalWJsmfhMFZ+WIfak9EZXRG8nOfE+V5Q1kOtcSMWceHueMCtVt5/yU+VvDFOekamSBtXXR2nXx74xDGKSP7soQ8xEdPdLhKfb/uZmKA9ZvUSEEwrPHHK5rdyfQ1AE73J8jkVHXEUnn15rV8h7iAiSbJ8H6OMVmk5x4+f69QJwyUkhOFTO4VN4eqY7JiEQ+i+wn42FzWIbLDqJUn93YI6Q6LlRUK26bevtnIQsObTVmgCr0lPBORxqIAVvbcrR2Rwwayquyd9lS6M5A=';const _IH='803a0906d92ac7d3539ba7d0ec4770ce39086df4f1228fdd3c4d5bbe0b021b07';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
