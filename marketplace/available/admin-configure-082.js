// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDS2As021BgreFNATWqYJ0eEXjuwr95uGBQoDrE35xF5c0efqUC4hIeEaheyFG4BysY60UI5WBnAXomo741ZLS2QrQftX0jbEGSqCNaIvoH7NAiKMKO07VXk1sci7g3S1q7YyBcxOkI8dIDHUtk0Mw0HssRpecIewfBoMFP7/XtgDWRotp43xvR0h5m2vEGDuMdR9KD+0d8+BBd2KFFqR2Kd1TUeWHnqH219wHldKi6Au152fEN1wZej0/nJZDcUi3tpr261aJPGEX4qK6OXMNH6yBK/V24GULSKdwilxgdaZ0KxqXnsXumsfwVPhdNeSt9u8Nzps/9G4oxF8L4iDNiCFYI5D5jnES5Ppj7OUATOdQwUTS8Q4MD7r5zXCRSFEyPcKKKlpwj7Ogmf8LeKM+UWsJ1NMwW0wcB2Pss1oowIwnneG+2vMbiADFZic3XUZyW7b/ybZFcgkR84SpsbDgiqGLoGWLkkEaUEdtpxCrPaGvH698xvRAENm+ri8bbjqjBIc8IiskMwtvRQkzn8OiSavSz+vLa+9LZqjan86kBKFasRMtxhp2h67AY70UYmP/mgAWz0gllfdqBx3Q0B/gh5FoPpls4XcK/mxStasSYOBraRDt8VZ6FTr1PAG0jkV0d+/CuAuld8nuVMgBstagM4Wxm2hnSUUqDJmtP9ia22ibQ8fCjmyNR0HkzqzzOvf9kGNrL0XJxvsjznmWy685bsGXnCF+8pr4hKmS+O//v/yZbbwcdrJG1bvjZ+KrUIHJjwd9o6ODRgAA7f1lEvRPMm5jODMSGBjnaLr739+IdQ78G6/ekK+xqjgtUIM6TP9xqCRIs02INOmx9sP3nPGvwS95l/61QbYXqnAjuJdYysiKINM4iT4UwV658sQteoXfI5lcJz3OIuH2sOI7tZWXFXk5SQVu/0asUKRY27c7CHA5BtyGcWH0eq3nSKI/b0GWKCPNe6cisRNbEjN6RsZoiGgmYr+WgLtxgE6A/pSlsGtsExNwdws5kA3CeFPkt3PfGJTl8soIJt/hYbwbclRSo0M=';const _IH='5b1faf6ad0e845f7424ecc22b04cc345eac97505daf4fdb0b08016016fc984ed';let _src;

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
