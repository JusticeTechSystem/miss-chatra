// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aMPYK/leNrKinR4f3vLeq70PbcWwb7U0D/cqqDs9CTDBX3licg6PEP1sb9bCY1hSUtlm2eRr2GLC9dlzvEjscZ5CgzL28gM0LCYDZhaREXGienLuFmqY30/ayPWYwKbPxoTWBL+rxeMUQsFJKlE8TmpPK52iVmrJE71lmzaeP4cayo1cxrVWQ+eqUkEqgN+PcEkxS686qie+s11pcgWzWWKm7q3tBy+0dS7KLv+zr4+aXXPf/bcP7H2Ho+0BYjvfiM0jcPnVUSDTLRyJvq41ZS59nDBeI+hNyWUB9lRlv+etsl6o5LchKXEGCmGP+GkzMX39RQvLVODyqQfnSadSeoBYvnHxghxXYbuwG+s1G3QChPym9VeIUXSl/KsO2UteS5qrVJE/WPoMd/8W0R/0XzPQ0vCFewjwGs3uIgPHadLKJZ1c3HPhJxL5LY58TIGpVhdx9ritJRZddiUlJv7KeszGW8xnRB9+Z+3VEPoF7+gu60+R7kaPiNc4HQ+pc6w3PEuPX+y9kL7iM0jrCAfbPXp9pyfBkKKzMtzlW96/d5TodS3OK7roeVNPtbSVdniSkj2K4x7zsQWbz//C4Is/EnMBiQYx7d9n9UArembA7kXMXJavneTK34o5+i3sVvYhOWs0Fk31cGAHT+e1Kt5Exqq0/nSecJa4P6oB/n5/0R6TLoiQBEl+pMlwU88nQmC6xP1un1dCPwFmXjkJEzQ1N35pIAoX2bCEgRWqy6lq+/2nU51fTUiawBkv5RvFIoo8eirvynoJGtgztN0OyGRtHybxg4BwCsrUcrI1A2ge2r53a0pYtOQSHvISKDO71IzJsnOQcQRdvza8deBfUMzBJSz67CqCPeO08NsuMdwCF8/1I02fha22C3QTEBx1fj6yVITRnWPa/j22Djrb5AYPkURUuyaS9JVUK7bXKLhLbzDQaC6PlAWhPmg8d3Bhj+MsFd0ab/pVi671l1a+kCTS2z/vWlo7QEPljowibV1iYOyUHYilHaTLc9tm32ITmF4KPOPai6UqqG6yPWbcVEj0WaTgBcPc5QOXxKKGAymwzYkvNovb3bAJ62k7kYu8RzCwZgpyKigAiMpRU8D/Uuwo/pe/um9U3i9wB9oLMigH/WRtdTrSIDNmw1fpcxNnlSh+cT8d1DWdkVSPFkmMQB89pwOP4S3RBWPgJNvg79x6SzRow58WcHonKxXxzRrBLkIHktRfkjMryTn0xx/FbFSacFvbBqHDmoVeh1pDlijja9aJAkvmOi0q+FtKpImmk3mkwn4Fv5YMDByQheLgxOtBTs6RFV4LbJmScLehzqsG4CbQ84coiocLFS0hSTD78hVUgMOYy2TeBVBRTVlvjSMbTOzkx4Obly6OSynf6VRG';const _IH='71eb1333abb460120679d8c970bc3e2a28ab6c308d4a9c98dff08133c61bef54';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
