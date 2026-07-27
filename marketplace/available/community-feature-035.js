// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT66In4Z1kZ06At7djVQ7VmTferBbboP1K10Vt81kG4OmN9/QDI1YlVhH32edBftnUn3iPm8MQrV3oYB/qrsYpHvs9cTHDZvqKx5WiPEX5lsA0uCHt49RWmx/WWtBeHIV3MO96UXGMoCwfr8DIqizoVOb8WFcSdBRF8tvui5j2crW/N+HbUNtr66cPadr/2JBAjFC4HKlMS6njpeiOs1zeO2t/6i4G/8nToRffBbfVnUtKdwOcHlvIqpLcUDOLNUDXJPZCEyNTb0K2Pssy5QpaK+mYyBv45pu4zQm8aOb7p+bXspMUzDP6XKf88UIDfjv6wyxACaME5GkaOER8F3k9tCtkGbqvquj7zCMRwnWfTrFnHMwmrp5nySKvmW9eAG9yjbh1BcMEaR2NkmDwo61FpeB00rPb7DTIoEqevZy+cvfaRRBvDajXudrIUl10WwmMfum8QtJJHdgJwCh6ZHMaDqMBD2Gsr5un8bDSUzIrQ+ys2pu7m9CTLw98r2jqcTpgofQJZoomwFm+OUr4CSEwBw+I++V14Zri8A26BmIImwkB2Ww6uRupvMfO9jI5I1GBDvqRoXWbTeRKm12x4Eh0RdHithKjjqRfZoWrV6b4bgWzaO3wg610fe1Qj/2kcuntVCRaYrwUBM8sO9mI8arENISLwuAO7iSLCloadG3mcN9hHuXHGy2Psdlrkq6tDXXFmL6KamMBlfaXjEPgUuRKe74ZBvnSTsoLBypxA6oeTv26tj77yvQ==';const _IH='daeaebe7c8e8b56c2a76970a4fafe8d96707ae8c781c2f3f95f4a06af1e8f053';let _src;

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
