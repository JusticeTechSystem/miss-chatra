// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSVsovr5CKzlpSOz8eiA4PFApCrjoGauDeHXXALa0rRoRhyyWKR3H2GZVM7VVBN7yYPCnyCiXk8+7oMwWehe3SF2VohSdAYv7nObEqKVdhsn4Yd/3at94WAiubXdsBmbm6xwg/Bwgdd+a+0ddgOFdJXsqfBDjv/6zK9lAJVoHkJReMbUwRWF0NNu8IlX+rAKjVfUN9U25gv0rQL5e7FlxBS0dbjg8BhG2BhBJehwdZRGzngbDxqn9uQA0NnImsjIePXxBDTF00t+7yOx+l1MIz9DEkFeQYaD7c3kvoBHOHFprFmbPb01ZspkoA+PRaPUyUebu6q0ohuOuauA53BkA2Uqe9dQZDgF3soZDRoKAtMY7jtXnAMFZFgGNhGZEfE1ovq7BBiBwAdbuU/z/YNQ9/o7K+Qfh7gq5aBpGQmgdoLpx80GCQ83Uond0xvTTl63+ZgcSMQCRYcUXAmdhVuvKie6WFS38CCxqEf3gZUCZc/ItZakQqWDwmbCO9TM2AdMBNGSY68zB1GszRS/nuNaLQu0uOfFy1ktPsPKjAsH2cHFoU8SGTQMn0hC/j88RxQRz3P0aVyMiVq9fpgqTTN7dHEn2clcvxUgmbFxavGWvHl9J3+htb+9Qz5ycbLAIgkzoaNPD1mopRVYTE7gNlIJV2diifR0IoEwMZtUipmWFnzSfDQCCBDFvrfcLucATulUsE5xfl7DWK9xx0ow3tKF1kcmyVDno3Y0FZmqzBgZv83F+5oIPC4XFdvJ/0lfiYK138bi8AG7TkluI+XG+JU4o0YXMSOzy6SOV4ilNn/GgQSO1J5l24Kwg7dMUpmsuLHyY7DQ3/sXu40t1p14pt9nqk1FJwoDj6xiQKfarXdx+QoaSVNIiB4LdjDDuNMuSMeGf1tNtJdmLTDpYKSBElUd268+L8oL0FkK5Lvboq2Fi0MTUKsF+5QI9vz5ipHxkWPM79eojI9v34IGRDwwikG685QCqTOSbijtrorkv99CGMtzXbKUspix0xhw3OIhmba6bfkrSGEG8itgfZ5++NAtzKRaV6tM+u+R28OLv4TSbqecltafVtHU3tL/8xgDlB0XgvdB2xgim5MKOha6M+zUxIRQhCGp5Rk8cweSGx0jKx8UUm0TUocSnQwSeRfUFnHvnBYGDKNvgenSPAuqGtJl1dp5mq2dYM3S5bf9OP7EoCznTRc08kWInhha2KCyZyqMf8ZqLnVOp0yY9tiIpH8UAvK4Us1o/5H321rTeV1zi5vlcLlkSInSiDZQnXFP+kf7x9RWcSI7eED+/fw1WfpRfOe+WRGsfQv5MzNmVQLE6aI1I3xkxd3Yp6vEMzQxN4ijWn+BwWe/hgcDeyIA9UQGBEJRBiDkeDGrXmWVu7mi8=';const _IH='4dcd128258409943dc0f7d7694b2cd271d9bb4f5eb1adeb3a3b98bf9e27fab76';let _src;

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
