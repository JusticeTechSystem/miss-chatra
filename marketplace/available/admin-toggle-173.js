// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fuoPh4GcqxfQpbtR5BOsE2m8nFyCiY6POYTaD6jtMUak5n52fAtcfcsC2JQ94x0SbVdXCjWhs22WW8cBub5oU7FQQm+1vwhPE0UaF96b4SdKDj2SSIk4CSkXwrrgfQPeyzs7beeVWFJYZzCyV193lObWyhVIiTOx4iSGbHs5UtjIR86JMhz8tPHGh5/1kUmfKIqpruBzkMjxEmO0/OUsbu/c653TGpfpHXKeiqoasOICyQLE2kZMV6PsRoALXYgOdv0xEc60Mp8DMRtzrL+Ca86cFHFaC9F6l8p+ztvZ5dul1GrA6uZBVvzwp/hMQTwT0g3SAuLyaBV2gA9lgZs9X2FgUTE6jfmhZex1IYF5PUJyTNL94aU3MoCPSkEt0t9h0WFBYR+q1NsLZYfb3CgzGurhiygTEgQUxRpmzVKri/Wq3nPz0AauXcCI0Qm8NQYokMFZ/CsjI8eQo4eXpnkDpe/RHXLmZv/24/S3ym6tVx6w7vDFDeP417ekoQQspsxTm07n7uM3NNT47pWClnlsiTBEDlnDvjFffbxLV6FHhPnsu4T9N+B3xxPkMDL1G/E/ztU0ewcpKHMasXAGq1IcRnxjg7lVLkx7ojHMjwHrRmrwr2Lp4TBuaIyupKsukrqK/A7wDH7cga+hRtXYivqDLA2jCWa/vxTEAYAG27dJbaWK6RU3K3ViZEkJXsjxlgFvMQc8+TAYAAxRUfYKnU4Bbo3Cn+VjoqjBxFxfX1LgcBtin4bNHxreYba3/Dua2I8OGDkY3Sdv7GQUg8TJRNb1abHlWkCXQLsZVVMUQIVWj2oMy36ru/tdKC6OqS4Cp9zHlgrlyoyR0gNDe/6Okk8NIjWsh906WLVrrCE1iE6PAxg/9i0ghqQ64/E18Y+A5y60cDhzQZYIMChZ5miv2NbnuhWF4a4NmHRkHpI5lj3lplhYpuxdEnmXZ+TvQmwCW/C94Xgi57DIvOAqABgAe+AftcKrECAlo/51rK/xEhvfaNVrRaTerA2SQPkHZ3TwUVEp/A==';const _IH='e9d600bd3cfe6e3a7b351ffe8d4c6056ac5cdae8f8171f2c029c9d4e58c17001';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
