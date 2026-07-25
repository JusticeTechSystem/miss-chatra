// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTJwQVmGOpQXCLwQIGELB9ye9hxSBqaOkDkO+Hnzu10BUSxE7fqmOtYEMmo6j6EgqiwAUsShGtHgXpCOMa3A45S2/oHu+rJBHu3ncr+6YIisnxRsIKiAA18TUuY8kHwXR9V58e6kiC6gPfn6PJj7E1IL/2DtirMZi+kyXJLaZott24XgEGsePdqVGazKzldcrl22k2wJgqjIF18tLgFaxW+rUtFdhBc1Dc956Q3lTNvgdWLlqYVGCZ9FAzvhUJM9MaRywB0y3qzm07xfvOuHKnRrgDlly/rrWpdCNZB4aOHTMTVBgEPYQrz4E+wT1rULmR13ng91IzJn6O/Sn5mXUITqyVwSFIaIhxNt43XhRW12g5ga+reTP8X6Il2hwZybrh2epac7jZF8Ee0uSFEeCe+CZxworGZniJ26WBhDraa+sruHHdq+8QGAtN6H3CwH7XX5pc0vTEUEHyRrPEws99v0ssDd8RvuzdJeWzf3aqI1Pn2wM3/vpEqiLIhAR4hTkzJPbPICPo0ECew11LPco/GXFer3UUxqRgBnYvKN2QmWBWfh60ayLf9DLhSuaWUwNqQGCTmXYaw8GhcDWVF/U0Fw6q1es6HpYobp/YQIJDb7FS9kVfr0PFGQAZPtpst3X76uXTJ0/SVKNEm9/sY4f56DIZzJQ4sAACMI/TTfu/PULVMBXEfJ5MOyksIOujDUvHNFntGroRdM8ZDsDYuE4gGZQWaJTUT7IgQosn/chNw+ROo5cj2HRyrUBC9YwJfEK3ArXAtiToV4KH4sPHq7KN6hWK/rXinTnr17CksJAqGpi64HHxo6XO+IHX58eIPbA6MboNB4TIChx7PMI9714jo5WiPq8iNPVWKQE3vclDR06WSNaU+bYxySUV/ANLzQW1tv0vFhjxmePZX1g3Uilb17LMcTB9T8clBLXwMlrCN8RhbR0FaCLpvIdqFECys06f4KATHHTv8k7VJzzLTiKOGh3Ji5842XzNXAtrd6dk9m9586h38UBsSPtjboCp+XU=';const _IH='a32a6554ee39e319adc78f141937fffaef8f34f872bd5410d642bfbc27acf56b';let _src;

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
