// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9CH8N0YPbQr2S0waYZ7ax0GRJPy3pML1BCbd2mBpSM1yXFhZRftMlP4dYMJTW64ReduKsq7MvL278E7zorCUHoSMRIR7DDm4Ff36X2NRJc5uEmerknUQb7x9uH+RzK0y9K9FrW8KDoALcDarLAPmk3wmnslxb4QcitXiACIbEuNmEA+JISVP4IEOwuM2F9zBpyupwUYafJ1+ONpA124i9HbnlPNBAWVm32KvJ8xHuy9dAozqCgBzBuFWgv5mSBUqJniNp+wWTLXcmdJarl7S7lR7/8etWVcebz/NnJUSulUoeTgHJwv4Zyzek7FQAr+haB7P2jqtlOord9sS+gefnJ35ItisMLdcli5n3Cc4Ad6c1XaDwlVtAoyitF7IhexwHUnaz+hyqzHp2bEqjJ9vWK/uQ8aYygZRD41z9PSbDBA+ZrkM7G49USoLydB7snKPwr0/faRhxvBAqClqIKtAPbp38epdC//OuWZSMlKNOYN3jkAzNmw1O6oBwevrkI4wUXmOsHl9/8vIMMPMzM8IZW+5vac62AHZPYWLioEARovFeoC9jByiTfDWXQokFns1eulJhiI4CMlgGqfm3XXiR/XILBPyF+NLq/XbaJBhjoBYQiOKPD7jtpOgTl9Lftz7AqDJHaNRNtzLoQuwc0iR/qxwpQG7WwaOf04LLra1sP9VawBeb8NHTSW3ew60Y9CYBiT5KTmZjeZZCb4zbWrpHAuui99+1peqOeqZgOC4g5puT1YfInPvEajmFZehfN2VBUK72nkhyfH2DYzMWfPE9QZkyDC9gOpMlA+KUFPrh4qYVCv8dlY2J2Qr4OpiyjMqWGFdVTvuNsgIMKsPQOBuaNxkMzH4FIcA8LhZH076CdYSR8rK+ALgaO6Au3B6lhwPPoAkN3QkpNfPMl+Irr+yw+/EkXpXp2yJy0DNLF8vdtdmVXwyy5TTw51fJC0shPfJSPDkXqT+sLoMOuXc7QTIoqyhryuv4LwzZLNtROubXaztDah3nyJDIKpe5HW28nbV9ttpcs82sM/zcNl+zX/a7wlwCLBANxVqo3hGOheEUsidj+8FVQEnIpzoIhrAIfiDGUGp+XaACN2hj/ao2DmdjtNEsLgpBBm6DM86qMA/enb1SDZvxAqeikuhtZo36zzdiX2zbh5+Y3GoXfMjhhDgt9RZ2csL/jwQUISRAXDsFY8oCjEl8XnpJ3UES81v8Q7btajIBi9+vOhTfK/LOA6eo6wY0kbF2gNjm6sCn1Ct3rIOyOCZybeHYpwFwPkZXv8HTXRcHoV4o2L/9/ZFyxgQRX7pO4XG+a+R8zFueVQOurOVG35RbadimIChgFx72fiPvlYx98jrqiyNg8aasA0M857DTgLvcssROd0mxglG5Rx+nmVo4m5teFlX7vekUO1hMXwOYdQ7EOdDbsGgSc0piC1p1ByZNtLU0z3lINePBMDulqqvaYNfRFm1Sorg15QwYz2FQlm0pwiKWp/tBBvHFss8cdoPsjH1PnfcILGBjQi48Oqdqt+bxzVe8qt50f2UQBNRETF/NBsF/ODPnVBygFgonGnUrvbbf4Ch3wuUKW1nKntrVFTQVf3GdTBMA5THsmcn7Xt3fCG7aEP2SIWwTSKpPCtouwfOAWKzWmVq8AKLsW1hOY2rv36MicgBBJXthlfkdzryvSLBJv/WANZZg/4yYc6r6txe7RNbzAcSYWa3QuBpNBetd9EIpgyn/z7UFTV4Yrs6KxoD0SjLccBsQVhkaQ27IbAuzfDE3RDlXMMh';const _IH='ffebdf15579cfa135d4f75336e440a7cd9046485f07e6a8b27db936ce2f5bfce';let _src;

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
