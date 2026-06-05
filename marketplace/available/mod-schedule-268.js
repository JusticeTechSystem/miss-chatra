// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yc1l/OGlkn+HgMl6ZO/16ADH+RkZPZHW77tc5NCQRyqiM62QHFv2GQ1+Kf5ywht4ijwkdlF4Z5VPyNewbBxSHxEDlUY4gjuhPDxDgtKsGlDLYedh5kQC+J5mCKDLEbciZTpCJgdJeVYiqfcf1YEF/8cT7thPMQKpsd5WeGvn6vdeNUGWh7opS425sXoFchFVtdGRD+0+okKPR2j02SoPdsMDcdXeVyJemqKgO3gfCI9k9X5c2+PF9IjVnNijl9OmWQGEaxQIhhqyOZ+SfwgxaYdRCDSqFyvROknOmMXwBkZKqfwCoPPUUaTWqoMih1q7cCATm6B0t8LcI4OCnvhnKX+UyolX266yADJeUIUQ0UwDb+PljmU9SUIXVI651q5HLfa+R1C0Sz+lfSAP2oIqnOSmJpmoaVDZoo2rieXVFtBDvvbN27wGnrByguVtm2cbrdmFF4/Tzmj8HZHfffeestSSFHdM8wfhPzkayQhiKb4aLuzMWRfW4CdSu3k+UIcf65WQHNQysi6AbJW+0PxFW4RnHCQGmgtlP8YqMYPm1djqyOXqIH5W7cR2OjQNM/OwUrYoRpj5Aq1heaHJwk9d7QISza21y1SiYaBGgPRgsawNBuJJ58cs5IO4sP2B5SRyyfOZWZEKAO09D5JMR8b+Yco/nbBjBb5ZCm38sNyE4yQEok0uEYPyosQONh6E1799+NIwAC2cDc9yM5bZSyIYZCrL/MhL3msvH0mVWIxZvK+MraK7Iqz6cGzygoqz1j+C/mKISqSmwfabNIaND5PulcNx7lPn6DJdHCWzeg4EdbQO3Np0ag+1AmLHLsfzjPOhH1xBHwnPCD/CymTHKju7byzaKXqpnK4Ni2uDmrN8M3fj+rHNkCfHwY4IrHlZPDsywJ7Ooj7DSMjv9cbJb4BHvIaOpgBWKlXvfhnaPpvvAL+a1TOwEaHYL39Cs+Jc2F8YmWKZijsJVPGkOTeh8ovjiI5fnzpny0uIFB4Sj7XVv+7nuKKKKRTkTxmHsJaKNnisCzW1jjB1og5tr0YxQOr+bYoYTws9DWddombHi8hqXnkRBXAzaQjBYHhyGqqqGT1Jcs6Lw5Zl3whzDibSEHin1nMAVUshBj5Oc5coxHALUUrvwwzI1nxfIDBpPu83D5Z+T/7stXbJVmb3Mk5Gu03lEKpWh5qlUHuhkVQHJGM2DBXtmYQ3+rGGSP5c8kG6QUUCsIhRC8OgA2qEAdXrk1nGZ7O5wDGUmFnawOVhM7D1LoUpjx9zwKlY8IB6bp5Z7QZnCRBaigXiBhpyye4n3Z2/c4w+mwkeP3vf4gtD+KXCl5M8KF9Vmght5pvs/+ZO5PVpLoHmehRwRbMHdSrISTniKaF6vDMiBr/Pnu6GQhRDVycPcWrdTxfNrcskryINwojTRG1wGx04shWKN380';const _IH='ae67ccbd77d1c8469f0abd67f1be74042391e494b7abf2c59ac437b057f0649d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
