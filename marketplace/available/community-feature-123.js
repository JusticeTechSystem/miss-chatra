// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='roaoVaImlPsdyZjX7upWvdDXWXaZuy+aVUIlQRZWpXrGJDAI0CTLHQ1738jYImIRGPbvxXpu0eiKu36qJ602ke2TUmh0bi21wuQviHMGn7x0cZbR4cNlNkFzyKEB8Lg5arCTjMB1RAcSdDqAsCGbcI2JLmhKJYvUX/t+x9B3CrqvSd3oXqWkfrhxM360mAvAcDjy5l5SqAu+iRrCQDlVo8UOQxp++Xbg4QS1JL61QdST4C3sqvfICiDzyT5/9snIdwEk10v4XIuPICq5FS3jyQzFz4cv7pAVTVyIY8XOFOH7b53lNA+vDJ5aVnsv46ukuxh5VuuZeI2DblYFaZQ6hFXtzihz/DQDbeb5GvKP7vMPtHO0w6BuQ4riCZ+MPKyJy2+dI1Ec8vm0jxuOlxpD2sMXQdhdULb5UiKQr3rSso0+PggDdORWct03ZBp+g/jvI1eHQFomzu4/DMeCRJuNaNMzsn65IaeBYDNvxRrDug2tO4bSCd6FAKBl1oiasOaFNqNRj7COEW0QU1Sb3EqmGsWXB0WGWkCiVVrRMGicC3Ld9ViO99SA5UyzgsAwdYiRdPV9SluEugk73frV9ZOf1x+z2xLrcbUES42tgg+owrze4humpHfWf/GqcuDHeq78tlQQXUn/y/h8fNAdDMNp5RAMTAYxZWQSdeRvcFUQMdgQApgsBoJ0dT4KJzyuf2AqSXVMF8x23WuAXURf5ZPaDPp+c8uocQpX3RUapjM=';const _IH='df07376f59d18cea37ce26eab76d9dc3a8d61a66373ad653c6d353c395c897de';let _src;

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
