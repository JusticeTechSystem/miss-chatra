// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8DJ0Ipi5ge/Kw3JlTbMI6VeWQCY6oKevvu0W2dRoTdHjoJ4KD8JBH35QBu/Fovwcedk0s/ftuLZ3+NvTwCI5qtgaKiKZKo0EcF+N2fam/GeTDJeENZoxNucIv0GV6ZLbQTFulDxaPkt2KArINcDfBwdbfm2FxnIvQI7osmhRZbuhO+ICf41LNumpJPRj9qHIk5XmTbNtYkBC3k7RQMAIBPn+5QonHDKyiTIy6Gn6O601T1SOE/J85ckPbO96l+l90RZPEPL7LTCsPYksP3lKIcDHTleu/MNrXg8AccGD7SRJ/kCiOxBdEgF4iS/A9s13qADfA+oyqAAn/uttgs1jZUxOoX9inXGSyQPGX2x7j09HHIWIZ6yDoSLupdXohJKhMzY8QpFsXbijRrZ+DsAxksofpN2o2U0W8Ay5Ih32lmTBaaUkpTNz5LPfIxCCWej5RWvqhQdeMt7Qjpa/328DPKUIuwVWJT7x0PyV/6zGnuSdoRb46ktdzIH7oqspoLp9nSMHCMSVfgQALUpSQjnh06QfA7zX0vx6AeC8TWQNBBjVTKYzslozHcYmU7LEsAmVDQB+3VEgQD59JxqbYmmyjrQ==';const _IH='7f72fc6d5759e307bafcea10ca9c976433c342f32fccb662ae13caa621296b1d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
