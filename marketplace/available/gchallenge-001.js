// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8p0B2TmOmuGVl11KXeXofQT8K7fbZJn3NaoZRXOQCDaqIsCg88NYztg8VRiBRedyGdlY2RdrQMOmeZdASuXuIWFG7YfJ3YMUY9pL4k8JglN53WzRgzkvwfgIrrAe3UfZcBa5lSWKJ8SpqAbGx90BVV493DFuj0I7hrgMkDjI2PZYUEM7fn2bNngJKaLk+6hCX4zFG8cNBYYf7lOQIfvhr8kVWzM2tusG5Rf68+M5RLdOsCHqtqbH3R727wcLqOf+LQB7FuCgils8r/MrkARHNz/fOzaJ5SEkizz22HnsDB0OLUjirJGq1gwBVrvH1H2RwPQTudz5OtgpiCfeBSSxoOrQe1iLNIyWw6vlvUHOKS1998Z3FEJVNS4xbeXN5iJPZb0s9SYeHZMrWzWyb0/FWK8Yx+U0jpN7ttLHskzUC6udg70jXBiqqEXBbk7URdUs1k/W+KC8C8rwRBcgszqUJGd3XiacxHddadKb4knZ3F7gufd58vUr7j5rwf266S3vorqcbZ3wTobep/3CbcExxzD4naXhruWKHWe03mEV8HcRk+TAR+IeyY4JqXTfFxHeH0y0HSZNIEKParkVhaXTEhjA+nNk/qgIgP2Mwn7cdBF+zCZnGv4UuUCLLWBRTL/r6Wyi1TM86V1tRJ+';const _IH='857f2be4f26aaece966882b130f1ea5376a1a81d62962f88c482f9ca06723b00';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
