// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w20yGRQ4eNKj3rbTWobmFnIKKveVXpgZy+6Zai3wX2GWsLY1aGCy1xKhHDHhHeCADY/SqEyLWPwHYRHKdpWHu1yEfn6k1UDrNCJgelPFVQOQDrBnLVTesnURX9Rb5py2uWmrhVEu2dYEDN/EM7Itj2zbC+P2FWu2UcVOwgswJGWEdJPlTM6LVfo45rNSPo9uJGepgB586SLoIVIyvv0ILt3Fk0pCqqg5rdzwQcXazIMJw2Hrg0WoVLcSAducwmp95CcUoWylFRpv+RQbQXVehiYqMq1uTpK11U2N/E6HutoqB5whqSRR2MfZ7tdpP6ESDUHJqyHtGz2b7Y8Z5BBJzUG/AjV9gUykzuI8DC5+SBZOqqaE43Wnl784i3KsTuDUpYHGFNWWPeOiq1CIB7N5A+fPS97RyrHPKJNVPCgP0uVQG3MlUjnPwBBfccmINDt9RyK4xP7w/UgzulGMFyRhrSiC3p7/nZIDwSHJlrWM4A0LJI32z5c/g8/6TTjWWC/F/DV8eyehgPa58HHaWMjrY4f8sNvvGV/b/IIvVnPYrTZmcYVsCRqBacc4QzVVf9HPM4cHvTCXhshK4CiRtStzBR7ukSQWbMN9Fz+WXrtIEVnw2srd9902zB/IePRfOFoEY8DpcTa7hE0iErjgw0GIZK3zP3L5chR2pQkh3KlQ2Xv4f5sxjgco+jcHwPgKvAWxhsH+apMpeHaNP4a2n47GRe+otURkJn6X0bKEr80P3jFiOl/w8pic5Jh8aqF8hEa5tMAR7eJyAczfQMjbWYA7fAHYnvqmklftaQbBU890YCrFEYiLZ04ONX3H1rxfevoa68btNfhZ6jSfPrPw10qFuA4KHYR9tnWVicJNqHUhp5mMFdu3nsJF9U6Qsh68sLzqu5Ws4VhSlUi/Ot/Ain0ArwSGl5iFsZ5UDYF8mVMCoMa/sAlZDHpvC01mbbikpJ9FFrqEav5bCuzn1Ps3irW9QBGyqxineA/7ZSCxRqwmFwyIVfUKQfCPywDfzZ91k6qYuc9srqGQerKVU0LOreK3+1hvov/y/E6AwXLBy6cn2Tw8ey48OjLf2f+l9TSAiQa3T+2IxpzVYMS99k70XHu3pHeCgPdx8cRccL0SMioiOWVMXL0kHNyNTb4xOFgyekLCsud6pzVImI9O6Xx0kkjPN0nkT+HSLnpJEuT+PzHOXXy5unXB8R8ETfzOx5pXlg==';const _IH='9abbb16fa43ce1686c91128aebe52430b3e563c4a9058b5a8467aa5d5a52b157';let _src;

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
