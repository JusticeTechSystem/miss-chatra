// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='94uaMrfUZCJIOZDtzyo66aRRqGN4f1i/pCceBQm3dtLZ3NIIYchgSDelgfL6UWY0qGpTFHBuOn0nMBQoN0vBFRcOY4YTaDVJ/b3fIGEhn4dz4rUEGkmmADm/q4JlnR/sbuEfd8z982yG/vjSvErRhzDzuwDkhBWmI0XWeXLJ0w1bQ3xU3zVacT5+J0SLHLdASZVdjuVpvEg4pkXyI+jkxT3nWusnX4SQspKyeXkO2fhy13fJVpzWYKHijC40qjTOwILCCPB0Gi11sNuwvI7S64bqzv05bJ+tQowbHi4rDW9ZxaMoM+y968orcn+wd9s8SQgJu7KjyQW3JNH6aSwa/ZVkR2icWS8UP36AsgA7KoJmDyyuBFjfwtKgpGoRDCjcajoptbwDNPgAkXZGGva3qNzEB7BCDaN7DghcTmKLBgxEDkB08muJKEBVjbWf1AlmhyXO/RBOh6wD5DupuEoK8s0YEbEfCSWFPoiZ8sUssBXmPok5GQGv3TWE0aZuVaZGUQiVV0D+aZ1yJOuBB8Fl+O8q63qLg5g/DT1+48+HuGt6xDfIBN+Y+Ygg1/VPQS4d51tZSudtQFZsp2pGHkZOti18THDORRqyQVsim39LgRSTR6+746mrf8YE1MLnHvCekJFYa+qHY6w4WrYbrC+/+8J8ZWaOR5ygod1sUhbW5dAt8SE+gj+1pMNw+KWH4TE2/IOXtTT2akD0gHvoev8ZOrNFylnT7cgQEgNenN+KTTV9nLK5jhvqqAThz9ATuFiZgKzX3FzLLRIQ0/H4mcdQugxSSugrGD+owRsJ6lt8m6xdEhI4MP4QgRXkSvkplNN17ldjeumMQICK/rTa/G0S/jqeTvYMoQOJLldWd4pzeEjjqHRBmzSmD/MWLsQU97ciRpVdV/opHj541JIV9dx4L+wbagDXmk4Ct6d9Fq3K4X7CK9fakIfQdmJB0iVqMxL+yKO4B42FjDMZmYeJnMeTBw8RS5PVSWbCoTHNKeNJsltRm+iyNHUXJ2BfJ2TpteUeBVCDcz/oyvNx1K84xuPtPyH1wy/gdG1sgCITXE2SvhAfl/moLNz5yrLEDxakqg6msatSjP9W1NG5NNQuBEY/JJfrPdVHSeKwav89QwjZ70c4avWa88Yzf48b1Hrqps+WPhFsmX9G/f4+ctG3BkAw3MNAQpaqarS26OxdkV8lxoHRveMO0SPcOSQYo/jiLrKPIoi72A==';const _IH='83365d7039b9d93318cd4a1440475e58d4a037d82f11ca5af01b375b63a6ef3e';let _src;

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
