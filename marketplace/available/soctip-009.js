// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMx7VbTnrnWUq/NLz937bkOK2mnf01rUVJzGlcMJj/xj+eVGjv9+1DlnvVI/fUyD4GaANW9fGKNqKrd0MG8hGRDyb4vvtqjnTphBegYkywNVtFYJUT/408ECcrglrfhIrKYx6YU7ZnRDbpRtZ8InULLSIvM8hEK064GVDg/TldJhhLXKS27IOd5mKeu/Q2K0e5Ok0QmSyalpreKs8P97KyFVkH/xHFkpvb2j2/k0Xr9qcAX8/X0vOLgcQJI2xrM0XaNNrtE8xDlTwjQbCnQmsyXOLB6A+aPxnG4EWZfe774Gf9vcTQAt7E2yzG+5F9lWaTqIBcLOBTcMK7whLNpyM62h9fQBH95X3qU40qRe89jixrbaKQzxaEp+PHJ1n4HcA8gvWgLa62sgzb61YD/xpdkd7FNGUfKxoljV8SIHwoOdhjflxLZS6IadjsNwtUnoOfkb7CG9skCVJ4m590dYBz/YsEKIut4sXlGegpCKYWbmhi0Nx4PUHtpE86QayS/7NL7X/KI7FSQmhvKCqL0geW0QmAML2h3eZYxqNoZwrHC8apH+3wNV+XvsZugR6hfWTS4nV3aTS8Yov2jy3DZ2YOcAHcvYr+YaPJ+WbryVbMiYJYXcz8XxZu20KBeeQJZDiuVqZGnnd6ccWyrITXFrWTlwxSAfNCvH68fWt7GQuTQD+qIoK/V/t/WD77vcs1ZtqHwmPhG5dANzpO2Rb4SrPMC4S1L0jIYNF5VJpyQh+KZhkQTt0eMUDHsxiH1zjThnhmYlyVn9CkQZfXtwkgLOiKJoOVumTuWh2CgeSD+SmlBdasfICzNjryWBV8+kbllrnbfSBB3LMlp+3UDyidxMTp7lSwBe3W0J3uO+vAho+Orcgx/L0UfhQStoJSjY7KixiG3ZaV6CoSTMPiomz8JhdscX0affenMmJ+IkPg65uVVUsYe6i0Vv+8YqPc2mvRkerVbfcIWnsiqCrdARc+zb6i/3vCbz4dFnmu+HG9N447Y2nRGBBnqt3cQr77IGlCjNfAajo6tdakJIGsPGxt90YoKJTuhE68/GzbrUfBMlKW0TQ2xk/KtuJqZYSpJIVQaqf1ScBMB2I4rCtyrQ==';const _IH='97df036bd2555e16e65c806078b27de74c49a9e17dd2d1d965c9fca54afbacd9';let _src;

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
