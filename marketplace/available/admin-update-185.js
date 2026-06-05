// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HLdFwnRGec22y1bl/mqioavJetNQl2ZBjAzCsHdB+9HCJs+db2vPJELMQnvpmTpuDmFlV1H7bpDO35CPX5Hh9NSGyG0SquEztDwDQskB/yFDE/46C3RTanx1F7RoSxnsdHIXV8vh0chi6a623JtF7eWfr+bjWwyjWpFauXvS0ndOElxYoXjg/Bv+htkP5f13oPvW9k6F7qDNxRDZJdiy3MohLORRDJxTugiOwkfdwqHllTbwVmtITnZe0jKtonWi0aw8WzBevho7AG2N4acV+9zsRaA4u25kXXbBciXwM2/qobVRgM6kb7A9f1DvQ3ibbxWQHrtxzqRHxsWysgDVfR/nU0jSJQL774XIYqgyQ1lEF1b+HFJiUZ20F5N9frTp7jeamMMq5XXDQH7EIo8bcfdMAQZwQOIAifc0oB6sgKV2KP5Ur+ix7TxADR4PnKURhwmfuQF851xNRBN8sglSNsJq/XimGFMoAAerVEUmB+UwrrQqouEkTbPr6qy9puMicn8k2fGGAKVzvv/yTMlFAGHXBwFvkOoWBwSYqsbKkztF//GoHGLUMSkfQjVrSRWn8pZuCHKsmSn3CXJxLXmC1ceLL1FWYYRwVzl8mP0W3Pdw4sV7ewPSvLRz8ta65yoJB6ksFTeWAoit6rM1zmATf1g74PZZ93jQKsRCXzPlWGrJIZtvRFJwoax6l51sJ3PeeMVZ8n9ItSWez0bsXi2j4kaq/nN/JjK1fk54/u8QvVtkqVZ/CXsGDx0+yuIIV+Q0DUdqYK8jVvv2dActTkRmJW/mlObZW/grjhFo4CxNOwKyu4qBXYVdHyV9fonftBzTyDrxjMhDscWwsNFz+jzqJvTywDbC5jAoSLMXBiARxks8tOm22EsR/Qg6mXdybwgXZG9lQLmfd9TxfNa7ysBecKNKBmKaPaU7f4yG1OmvaBbm9u6OHBi+HTP50ifUGJ0JOoZEq8YFtCnpw+aWHFO34MemrvKobBlsF7y/61vBevXe1Dtf/Xi0G5OycKUKh1QKZQ==';const _IH='3d9b6052d24d6de6e5959b7adf0006b1ab874e1025dcd62f03a180d2a81d8ba1';let _src;

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
