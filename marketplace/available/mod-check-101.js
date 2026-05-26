// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RAt4zN0JDDZpwok+PYpb4Ut6qfWKoSKP9TjzQ6HeXCzuq2HMm64WeEDBaQkM0JTHm1U0U0MIUKlT8vRfPcbMGK2rSbId7BcWiYcOb57pJENz75iBDEve0gKfeOHvo3kCkvh1AVxKi/8/ih+SPCtfp2P/o1sYkFH4eh7YsbvzNNSpK5rAF1iY6wS/dkCrc3BP/djk7KmNTF2U0oqrTvZbH0VmOfHV5Uat/711mt38dxivuLYLpLgL3/cwQ2Ly4B0hAg9URLfZZO34j0SI7yGdQjdGe2L5cHgNb7wkasp+o0pFcEBPVN8oId0gbGCU48oRQLAKQl7Zia86ecGFIg+tKXjib83E9v6s6aouWmEVWPhpTu9SmFuKyyMHvvUZ272eI2Qon1chbM9AxUJmMeYzwzS9ogyOJWJXwkcAkC2U/XxIRxKfqkHukuqs578yfpTRWB+4a3dQ/uk9ZYWfnDkC1a8In4E3s+LuPsIiwTq7IyBG/lSkeD0Dk136my8P1n+lmN0hq5oK7G58xVFmRMmN8xvJqTqUt6dVCcv8NXkSZ4wONsSq0PtoColY7TXyt+DHjHGrIEzcEyqu9wJi+HnVAh8QS8nyTD1yOnNF2OgXkW+3kzltzygql6huyM2dJl7DYVVRfIAa+CmpGBacGkAfS5SF0XjQBzZ4NmgErGZWy/tGeQrNBTkLOqdaps0xLe7//Qx0DHBmBXBHDnmLjVlSsQcIN6n4oRrIrZaee7c1rVuXh6juIZwv6AomQbyIuWjBnrUhvWDRKwW3YquGil+7XPTCJU8AuAaCpwP/52brSgrcGIO27KUrBItvlg+ea3gLC9BxTohkdnv+WQCogq2Jo890+4thevs4M5aYQLgM4Ov2adZxKZqaimtqaruog1wMBZMPfJjTFpB0PbdR8z2Z2aDx3FD3i+3Duf68Z16mY9DuvjzczibxdgnFuqfiiD3YZrfsaSIKscBxqoeXF7WB08eSpoDsGfFBDgsxQ4JDnne8pcHyBnSZouSPTb18zbzY6OOFR7xPDj1MwDE9Vu6lZu+OnnSUXbCA2YI2JFHUN0uLzV7JS1f1o5KV90yHK2Qz+r/n5kbp6hqCmjhyu2nEEuVM7t4FnzCOwZLowj1jVAE7+ijgZiAotBuOzzu2sed0hXykhxXc36mUw/7IyViH5kSLMRc7TryhN7FJRopTaxOk20kX0InINV9nm0PIux9pywk2P7OjHKy8iupuZLYRFtzHokI2db8y7pat9DUClhU/jEApptLKqqK5Vp5oe0VGL5m/GQD3Ev2uid1RO5cZ5H//lkJ9s+Q+i62YAO7qVQclK3C8SqQBBCdSpzYSRL2vuVGJob1QPylRbLTmFNVYZ6m99ahiYy7fgS1uT2lg';const _IH='34645599e741e045748d7e517c009338a266461400d851d4d911b050b4a9c136';let _src;

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
