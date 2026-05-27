// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Is5b6+qtgBU2ZQfOScLtKaJQapLFEYcqmmh4llzLHMF5dsA2exouz6eOv3ExptpRzfc5NPLYQ+Hk8gQ7OXjN28XiZA410Oo+G7e1lRg6J61n7mM+F4ViipOwd+/BzOAkT72tmyCemNCVOoDi2EQS8IC0HASMsrV6T7wOP86ZkqVrgzpwRCKerCtCKafDr45Gli3Ldo4mvTqXJKqhYx1atGMWYnUVPgaMXMb1FCJELqVrfN91Cedbpa9507MuL3MKicquNwR8vK3VVudYQs4IrYa5WdwqevopzDAyeu9oyFaKuxQAZ+Ig3It4mL9EBwYiFbyiW2BIYGmYueIvocmGlZ7HwPo1CGG9EytnH/MLFJc12Wnt03XU0emRzsCxi0bvZqsbIQdlANXe/wPjp3f5ne37Mw9k+x1h/yMgEEKDSWBIRiMygj3gB8oG1do+lE6ww9rtQOcW0/mzd4i40MAUmu5ri8pQO9E9Xx0B5Ed91GsJR2/eG8AYIWP8evwuD28quLauNyac04cu/IDjt5FxFAHEOay2mhndKpiBacDhoKar8qz+ejEZaxQP4Axm++o/HeAjq48wZG5LPDCb1L7J/reiv+dVm5HtpTIX8odSEjSvk+DiStxj3e8NVCUyVPm4m91rkfuv1TjOXDipyNuBNi2UBX+XifNR9kHhF21gLJyu40IiIVb5bFcfhlkqyQIIiFjP3a+SkaqhsEPxd7pFl8hngMmsRLSSTHbLSJEog5bC5hU=';const _IH='5b33e390fcd46c598a63683ff0643d03e8bd08b6af55fd04f81f0c985178d831';let _src;

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
