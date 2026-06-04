// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TsM9xfMMmb3zBlEHBE/g7X2BQpIQKAEsXQmGY7IXythcGTRuAevLOwtdLxWlM3EiVByt9JLlgXewvi9oP5f02elBRCBp8HBFFYEGDcULNaSXEHN77MSV4aq3yFun7azKc5UkpjTkwG5Hd32Hv6D9Q0sWBUVTwweUKVuvj2Roy8aGVvfLckrWtIN6lzGaEM6Gl/lkShtfKtMdHgpS18RMZnYAdphTQFvWUQqlM4qtAOPBuPaMkaTtyQItZbeol+UnuR6m4WUb3LxaJ1XrqTbT7cqyTdLUiPHeF3nGwmobLldJDJRGSwVhMlbQyEfJfX0J5RGeNd5AFI31vwMlsCUVN3xn3y0kr4GklDFv5QT5keKIgAm8hrTK5YN9e1glzEHSGpSfh9WPP4zIVgTC9SxsdGRvfURoTUnuXERNaVEqwkUvrtnAytVjB7ernMCeQ3fkZ6lNCdRDI8XOouoFVXtjk/fqgSJlYt0wGFsZ7RsfFRgRA5C6TmoGiiyO0ew5+D0+LYLYdvLpKYSJ1wz8TDU+02DUfz5DtvZjwwban4UTGtDz9R5OsyYsUBRGkO9kyTGJa82aemIftv7SmS6HgJ2sMx0lTp+9dmm313y3F7NTefIgZHguJ41plbwN258VCuYD+MKxER0ngrqF9GY3I/aKsPakDOwPvoviwScmuwi/TTWheuNHc7n8XS6VFatBakdE3JpSYM4CiHikZi93rzPFNC69LcazdBovwWrism6xR2CnLETY2FRD9V0HJvVpzG/zkx3EJAYoABuap4h07S1SUzBONAy5cw6qPw61hke7W3zNyr16eaCwWvQCFwV+A/nHob5Y+Qnia6qHAGEFId+BNgHmXFRtMPUBk2/TvQRuATZzf/V/6B2rgpLJAfxO8v7KDoCv6sej2qmrTDrdqyCqA2Q1tY4Y/hlHIQwzcwrsZPZ+EUEMIt5RLXvFhY5z1whDV3Aag+/8bwQcTrNUCtT3/39daVSFidSOAD5hd6hOQOZuckk8wvc7NXCxHJDkLLohIcUKfgcmkinX/YCLuz/B29k5sVdXRmJMKLfkIAS45pQN6MX8fAhlmzvYa/tsjJeTVclENfqHxQE9Jn8BYIMrXjpU1v/l5tL+fE1efhtUseBKP7Fr3YAePLLwCGheFL/12JJqVmZqhlPcSlvsp+fRQVT73Idl9k0GyzHE6ZYzNu1QoajyIC3g0DNI08yGNkY6OEy66CYXjzOyAMhCpZo7pHjVZGaXHeLHwi/B73VMJN2r/gVfLVEOqDpcSzYa3w4PlpWmArzlwzhQgd4VfcmsON7XeT4NdI0+nqkn/lVR/BZHPrSLDCniS9NJdyfggcUoC2qF36eLd/e6NxKF/7XtKn46STS027XGcV767KVe';const _IH='9ab6f61566fbd9c330c2828b626ef706c0ccc8c3a8eaf435bfd261bdd0a4e44b';let _src;

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
