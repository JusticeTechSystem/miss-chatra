// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BdmRzq3hSPBvRsMl5FvAO9kiw1d2+TYk3TlU3ev3FT51rTqHb6pocFKVP3to3fu7j1bJUKjPaxOqStIXpAd9bpaqYB3GofY5+K0vnb2BLgI041p346uWrfzWfxfqwa3E+cnjFcXAynSN2vjM09EqYsvofxVMIETiu4C/eJU/Az15wFuOxfV4HO5KIJ+KYCMFM6ahQrUoiFEmRpfJg3pZku0PcV5i0c9DvwHEqW8D5Aka5VxNBPasH7O8rflMpw6kFMNLWf/EI2hkZbBg9/4Cvla6j088xLdNl9LHuyODqbllg5LzjJIKvpu64xPQIIhe6esHSC9nXpZgGe5CIA7aqKpaZH6Szgu5rBWCUEZ4pCRYP993Fu+i2MFCIYSCD44b/Fn5LpPidev0JOuknMjofdlWSKTBRy/9kuJgwsD/vfiSHKTKtU/Ym4raXrczRD/dJvM6XMSGw71SY63AB+TDYw4wPf8w1XSiWixyGAr/lpSJZiSQaeLtElEIkk/3JD/T2woxzCVesTVbIHSeQRE5PkGTea3h/DJ33R8FnK7WxpAdMxs6rCKNkc02zCYtogjO6jB1y2NOlnPT';const _IH='1b12afa8d3637f5bbfa22899f6e72481ed6e5d78656ad369bc622286f54eb75d';let _src;

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
