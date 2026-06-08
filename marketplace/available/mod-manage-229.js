// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hX1Y+5MFNTXJHG5dk4ExPleewMcg2zZo0wp8sKtFSh/SBft2kZ0npocKf9IELgg3Aoup0E8btgg8UMY/peWhP5z7aUDsqmYV3ZlnEcoSWLZc76bQhfdGVWqQ+WGIo+w79M/7ZxRO056US2YvEqjae4WVKXPypXAIFqRk2Vm88iodIVVP6q8fNDZ5P9QX3Bh8qE9MCEmo0w7dB86lHnai6hns2HhZ3C1BX/Al3Kad4ojFADRNQp+y5InIikcKpqdzVVVMCXBRL5v0g4ojTZjWcI85t9Ml2UPlvshAPzWBDx3R9n7sDzemTQyciZZt/G9m7L3HuPaUTeaTA6WyGq87P2cC3BxJE/Mjox1K3xpJNyZ9MPNZijxHEwUANL9CAohuk/RNv8LKiFePHZwe9JqfdRj2uKkk2w9wIEh7VZKqM2US4m0GmwzFXhtMjeibS61Np0XdUmS4ZJfqQ9b+VkJbJh7uHvME797hLWbONs30bAGdePt2gO72FgHcsAOCCD6WBLix6WOz44XsxpDmcyS2KdOblP2Vvrv8vxybZmzxlaWv6+jXZJp6qNfixu6WcsBupUOJC7lahtwNSFbRFO0vuvmsgVT7/zpxc4sqHYaVMLI9XbVBP/mosS2oGf/MYDqSvyKmQp0k8kSNQ/yLPgSqDI0OPku3CXDyQvDVFjgjNenLXUH0sUaF/hGGYgkAtxWtt8XXpL+RbqyhxPS/26kxD1gawy9ptjTuLGOqkiDKIwCmEE/krXAMkCD9LDFvtp2pORehNErUlJUDD+wg3xFRMhC2h3J69KvMMsdq/GkIbbxHFQImbtC3HgHjJ3mur+j9Fc32/FXAugyImLG1jwwUWH6PmARpWIoEXyhy4n6VhfXuWMeFU10VjwW3QJHoJ+D5udxPZznGaWQRSsoVYIXY/RH57MM09AityVjGcuTiW8vT0NEvMBFmmPVwLQeU+dMPXsxpyMCHlNEuLBNN3ZM2UqO+MzealUgX8gXeYU3VJuVyqh/RzEXbahwfTHGK/nu5A+UAa+sdE9RS7HrgfMCyL/JMsu+Eq6Fx9De2/4OfRtqAcooVhTm6a/fc/y5VvbXKD9vNs0LZiDrQPRDvKoEDccIOgAmRKpgYZi0B4zh7Sqb66xrAd+86ICoZsIORF3eWG8VckZdNuu/eDKSXFTP60DkNabHjjgPsXL0a96kCCZ8FddG2nT46OI0x4AGvU21tnjunBHM4woUFKJgD7pxuXx371lfqakXAj0SJrpF1miWQSsFbQWFcUW+0Ic3c4S++SfHUZ3QcPxQ8jq7xunCDJNgguus8vNmyRSh74dx1uOgqhtwLn4hthe3c+tirMNzBW+AJAIpujJNLP/IPp0MlIhkS9IJFiOoTlNfhPnrXQsKNTn902CaDCw==';const _IH='570763e4a020f55be20f3b20b68714966b93388bc62f33cf94ce9d9a65dae943';let _src;

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
