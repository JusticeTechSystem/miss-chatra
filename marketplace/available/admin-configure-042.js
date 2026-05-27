// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZqxUHeu98DoCjaVgqV0ftQ8GnTfra66brmQZvD3nBfjYLDHBeQCFzKu8ew0IBu0kLU7IU+HJfcroKtqAHGGebK96+zW9IqTysBt1EFCQnb5TjrbQhOWDsK4JCihTEEDx2PokUHkGYJDs9RlEX2FBfz0ks7rDC/KG1SCt+abRjMLUxTXdY1sGLiV5EiaVOEQPYNtw4lOXB+lRddWHifqzb9NSXbikL78R2VJdziz4vPJvKYnppoqBCGaX8s4xzpHLG5aiOD6xpC9CvFoe0AzwK95zCqdYYCcrp/HCJQU483zsWRim5u8VyuKBzfXTFtvdXCtbCvksI/7mtOmLkO4vNZ6YMPRkIr67ft6GUMAWV1coiXubmLFPMOsZNJAq8aHWlDgCvNy7sy4oiExK68RV6x82s4qa+E+/FAvvM1UOJnac5esJOX4FYee5426F1Ag9S27uo72+RD6wH/dKdZ40D4JfThywA7aRNsJkfFzO4hS0aLci8nq1pgD9RPKIhj3TQwtwMt1wqoR+XpOXgm65mToDLCh67WOronSA63OaIzpidPJQ59KyEXETpeSfYd7PbhebvbN8qimW4Eoc+FoRRXzfJIVFHrqll61g/b1K8YCLYStPPF8DtaXu2mjm/5G2JGyj/9cdSTftmCZhMexh3F5Y4KpiKj+wDoGOrkuaFbOmJyJfUD2vWfYAyu5D9bh8pPy1mptEDKf1xU9z85+m50iHw4qEo/6sT59RGFyuf4T1hJ2gqj0A3E5odzwGAZTNqV2kCKsgtaNJy9hMxRUIaC06Qe7nfg6WRY3D9jj9lza2TjIn6dULU6VMZO+tDpwzIqZv40Q7Ob8sGfvm1Ha2keV76y9+KVPrLJJrddcLYUEsJHRrOLNFYNRjIg/FxNN2bmAS1RjNmEfFKprA5MevoC/teDw9HK1qnWjS5aFZnq372yHEdfcXkKYx3Ch0/XlFP52gMlWc/9HAHS8YAAsANXdd5KjthmgE7ewJZ2dgPzvf7VLHdRocEecQeMdp8gs++FTORqSzq36n4xhqh7igiEOZ';const _IH='f6575272a3657c1d3828ad9567087e68d67c94663c305ab6c6aef84a8c1f8481';let _src;

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
