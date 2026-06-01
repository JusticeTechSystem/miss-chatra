// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz6fDhTaU2/DtD2jlEYcwd7x7WrzHvkZgc1d7rezj61m2+0dfydP/QlJ92w34IPYopNVLdgbRnDCLSRgjBsTWhAKbQYIeqHOwrhXfHS1D+xL2zlYGGCiFvir/Z/2ITtejvJdpWBiTan2lWFiS2X9Fb+tSrFLVDDvJCWWaiQABAep7ziEhHlnrX7JMQMdSFvD9/pmgRkYPLv1887/OnG05+kPylqlXhyMueOdzcblTzf4QYdSA8x0WIPCCUf2Lw2sT/IPkqovfR/3ZsA3SiF6/MRMOYuD3HsSRCU8AHhUu2OG/jZ21Qe19UpMjxsp4rSEBFLp+BMNESCUeyWZT++z2ePzM71iPJdV0w+f00rhzFaRvQaWBfQEWAG9Y18ukImUNbFCrj4V+UO9/+TCdmACXqXgk7zmJUjd8yT9edkWRFXTSOIUvyVmzufvPr+k2FhF5Fnjk3qLNjwMELotcQIoYPvKcJZcqtUkKV3/FReHlfcRGjnHZB/qf3X7Zg62MPXkEgoxzvxdfnkUs0ohMlU1dAX9qGstAmSSBVZMKLwURo+5qnOkwJ8s+IdBQIMu0EW4qcG9HIN6HO6Yokt6KYgjNvkjWe9tFPuCSQcEcLr063lAMtDFvYkYrc6dg/6i7Uf2BgbKHBmMshg48a1D33zVySb7LyIDMLVu7Blz1FO2Yi9K561qMOsxpnV2+Fzb83WDptBIIPaj0TIIavV1mtwSt6rV8vfwumiQ/zM1dORsB5GIMzlIo/GYLZJy18V45G3IKG87yvOBs8jf6RTwHa7qcEe5bnul4u5KXfTtHq4odxCHW1Tqs/cTH6z6QiM8hYwtG4HbgQs1k+5UxYnoB3szxFhd7t27u+GyY0o1UKqfBd9vgIDD5sI1j3cnuKZZkKZehxwtLc1o1IZ8mseDSNob17EdclNumwJ0EJDs3DBoQVIGLLwhQSuyk8WEflr8/R5XK+gl2fTSQvom8/tN/1NejF9XE4xTc3G+2xIhfgRWuI68zwiqvTZnjzCq7leAEE9hOj0Hd2kZcP8sruLmlLQfFGEiBgR91VNMn+RkdolooyCl2mrDH0Mh+iD06Twyg371GiUx+omxo7L99sMMshAl7F5WjNJPrtQmLq1YgsPhU8zFqUqUGNtcmQRdXjdsUQHsybdPm19ybCd1mQYTGsydEFNlNhSURusc8nFtf8G4d/UbwQ==';const _IH='cc5297150b761957ca4e3a5ad8664cd02a2e88fc09eebcb66ed83ed2d33900d7';let _src;

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
