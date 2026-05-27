// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wJ1jgFyFL1S2b3RSa3Hkm9xnRR1gZ2QNO2sjbFSCdkmT+/+RTTC/NAWrQU1/E5ViYp9lu7C/V/rr/X6lXtfFG/UARSw5x5o3zxNxUivkj9V/EakvLKfAB5XIKuMp2PRi2/3QYrth3RTLdvOsvgB+HxbXbeOlU3OsConEs32Zt2g2K79Sn9JDwj203St1iPB7lScT9R/0fKhTs1nDBGkLwnGif39G7SAJOe8lnSzW4H7D+cl/kjO9P3Oz/swkeNeRszzkglAkHmaMB1YUsOf+u19x1l3yqcOt8uEiy6+fwIDs4l+/PvoUzKDhtMU0VR9fDdXMBnjHGjVjuqN+K/ZIxc/BGTho+v/frOwu05CH+zKTldhcsV2jcOgYq7fA3cDI2ioINKSrZ4gE2LYT6kExAF3UgG/j+u0ya8oWvWQDGtzJ5uYurjzjQlo0hMf0JwuJGawKznrEfQseRDattSqDLc13oaWiMPnkmKmOY7J1tZcln4Chl7lXZC2nzPLVeTlR3h4A7mxrP+M+Vzj15qdFeyuznR252G9G3B5RREgeVY/K9m81fZwFC5Q9CHs63//1Lt22zrLqzdo5r6IN70Z/fwZSnChoaWqzuqyMH5292ZLUzRit8e4nIJUQa2rzZDrtYdbx73Z9hi2izpHm740EceKQMnp38W1NZHjddC1FXhwCWOYSDFjuuXGC0zVaUVeSWb6DR06IH0eYz9b8lQ5d/TnGF/NfzPeDE9m2mAuN7LoB95XQP3XkCpN06X611U2R8S20sfi8Yl8tQAJWAKLdh4CKQmrrgS7P2DK7SpxVo1Vs5x7uAU/o5izy3/+Lky+NtU0o1ZZVMvdd5Pqq9EORWml4tJ2Fqasp+b32EResQziwAQM3d6fo1JjGA0m9Ht3T057Jg7/z10nj+zpBknIrEXgnOSjL7+t9EGP2Qa8cxn8rnxrSBG/1YmeP5/7raEZ804nnjeHRtyaZqSxEP7hf48nK+9f32VkHW1FkgYivBzuJuo12y58g+Ql2YUHNkNx/5iIPuUFxezKXHMThDDSp7n4=';const _IH='1a8271d4a71cd719cf166ecea165cb60c616dc126687efc83c45efba0776d56a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
