// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mgzEMi9aVFgFqnptUUE+ozlH6fEuaE2o/z3vatNHg1otTt7DTo3CoYlX5qPsoj2p2mWJvQWHDIiS+ZQQr+DF1gXpeuOwkM7OM2U1etfAMRM6G7goLB+Hj/oMtw9+wlg5rzomVoXZZt0ZKnzn1v4lNyhMXtw0mREfoU/YFk7TaGnUn475Cm3+N/AmpXx82sijbFkJAR0H/bBX2MFkrpZEHTyf7qQ0OMN0GYDD3iH2MaW08KsZuSnc2RVfMilfGxTREFnFxWUJh+NIgPcPxaGFRZZZcW3+MyetS6qn+9GSKWAset+ZhOdP9drP5/X8fLptbI8UwV/KlqLrpU4GHqo1SrWUX9c4IBn2pxw7HtDQ+Hh5ZV1IdnxqT+cTj0OQ6KL55/IpmcuhIU8RlZiLi6EIp+Mhz6zpDM08n4aHd9SSTNUrw1PET9w6Dmq4tBl00YH0ZYPYhX55pSYDK7r9YyZeuiI1FHxSsnRPtk3dNpa88R75e0j+5j28+PVNFmt/ZJ2eq4K8wghy+2QFhyANkfoGxNAWd114o5PDTF0WwcKRSJLWSxT8HJIwJ68F6MXfTwhPlpdc7Hg1Pm+zuIjG72FAo5jceYAeUJ7uwaT98sQ1aRIUQflLeaEGb0AdiDRbcIm9+AWBIsVsuPlqq6i+DfxO3LxPvKEBVNO4K+MRvhzPkv11OBJaWSyRjqeMhCOOLJFaFzKvSqlPbL8rOKFKXBGMIjRyx/Sj4UXAuZDtcskAJJVQJ6gTXstWARGq7TA13/l+4pMNddmKHczBC74wOTXLs744WBUcwQBNvgVBi1QlQOI4L1I9KzOc/Q2Nngp29ncVCC4+b4wb2dikY/azA4CmAtYdKijzkfHFXqDBDfghl/AK9KE+PYpFg/iVvMYETfoe/I67Ie2qz9GEann80QfRWFvZAw+JucxP34H1NIbsdcK1NXDyezwDr24nrtMi1ftGaKq6lFiYQhWBP0HS737weVcR/zl6ILo3kfw1EnWJrDwXpMjfgQyAooMxpd0xvw3NLQRLuClspKPpmhP8vxwVjgk=';const _IH='9d8ba30295398956415d588a8ccfc5607ffa12efe1835d57d740ef582fbb9852';let _src;

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
