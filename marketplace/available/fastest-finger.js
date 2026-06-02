// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fJaFupau3CD8EjVSeHsof7H+teFtAbk72eO70IUl+TWXiudM8Hfo5pDbSCaUfrp4LPLZA3xHVp7VQsweSppxePMV8So1UcCFwWK7xUDjSd2uOYJw4B9tHNqQJclVa2RxQMDo0wqKN+FWyFHPfzarLUqa/cN610/wsMyTrwKqNil24bnHIUQ7QL4pIXnhuxeeyPTxAuQ/U4I9mGreMAkDcewF01Alrmi1P8N7BD3qABSseERzGQl4+g+aWwEm8DsI/lQTQH3z+4W+kxJNt/aFlAQH5xDguwbFBld+EP37LOhyZyff9raQPVWgrdFzwnawKVDnhO//mqm2YEOrVrru4uKph1aMMOFoe8bzpakRTABinbzklBKC/U2SXHZpobkeb/1yntMLXx7AzqpMqwkZ8jgwD/WTx9Kw4U5y+Tc4eSsik3/ICBH/06zKuw204gJomJpNS1pgd0i5fFPEQpEvAOILZrtEjkWp4DEDz2pG8ROluE7uxrdzJ60QE2veteAq+SD0r6zEBN7SieAR03dWysr348bM7bZNOMEabT8C7OGsfZiB2R9WYsbrEst2mrDL+umFqvVKtx3y8T2Fec1Ga15q3qeMUQ8IbdmrwjoBJ4adfpFICBj4cCwvQgMSbGSHEhJEVEEQmpMDiRiQ1wQ2nKCqLNxMerk1uiOGbVxrcYKOBC/KRYp0u3U9BPWOuZFseMNs0ElBTWtTchVc2LjqOB2fOq22zffHbcWKEZAR12N8FVNerZBRAKmcJA0s3EpW5uvh0HaemHZqR3PTaFEtwIpVjTYZWqjlhKI/o/zCL60Z7ZdusBc66Z/s5HITJR4X7/6d9yKmAfe2cbwlACL7ut+CcV6ZLAGhXCg2Bpk+gdQbJS1znS4kCDVHYaxLEm1WxpVaGthFsk6mrn6HDQ8QKUSp3HNTHJAjyQZIGa8eFTCaWLoGyZYKs75mhPIHbQynk3KxIRVX7sQJZ7CIP3O/NhPogVwbFrgjOJ7i4tVsyaXdMWPyz+ytbwd+atwZldQsFloA/X5lLQvLQ/iutUJBA+opwB9OHdDMVo3Ib9I3wrg+fAjpJXdCf0O7bbLCKypfDq1/ySPrjVuYwHUknW2x2m4nNG61mCTQEGolvNg34MmF6J2DvRdI1t3TFK4BOtlkZvC2pvyXPdgoAkDrNqS25npRxxM9e0zhZyNgf3XbGD34+aWGbd8k5a10F3Nwl48kdV85gdVMxFbt/UFqXQ6Ab1oaNqvLYqKCOXQ6u/OFp5AddI+HqHMRt5+DREEpT+gTao3tMTlM8BwAaIrAAnroNEyf6qu0yW33bi0jjRnDdpmB3ioqiW94d8GBJcbGFgvr1SlsgiUFavR5h4xE5aBFVRL98nRQqFSZ/kuCEBPH26KN52LciCf3p8odLhOdgEwjZ7A1kqbj0HTiy1MJYftPEPJj5e9ZwgTAO06Fk7ptUse6x2llLaER/rvfQA==';const _IH='a06be9c4080043bbca6b76f819953118614a437512f776d339cce32ff9fa77c9';let _src;

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
