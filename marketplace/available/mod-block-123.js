// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ02S3vfJ5vwS3n+mmRmuQAdZ99VcMdmNY6eneEVRV43BmgwNEatiXtvW3nfHf2NoXsH7br6YLswuNq8EhKqaU0w3nfm9SR4/U8GRZAseFaoOYDtHa2UgFjNlS9Uxq0uaR4BaFwZ4Wi6gx4oErscyEk2Fv1gHEeC9ggetN0dltiqlhHeGxXsh3RMi5qDq2Y54plkFzkfkSBKA5mA4DTUCpAtF06f6dABHiYLHFw11Og/uMl3nIPwBhIh0Uobnqb2BrYFW77ihdkJZkFM1qAq9TLU3vwuVclJ0WgcpGyu8/qmxHcj8ZefTx2A+GTcQewHf/3+6AetC9oxmw4wXEEEzDcLYZiQ9BmV/rgbi3n0WqkhZjqtZSlw4/HBASBCmnYoCBsQOHvsfUj0ZgcHn9OrCecKjSAbnc7s1UtPO7URAXZnHXRCav3SuPvSSvmNxhAa8AlybF8B9tIT8/eh+zB+zEz+APJnhxLjlAcA/uDw9DNi/y+ayVlQiKCdjwtiGcDKu176SYhE6XibKlWbQ6M3z6t04IFQbMvBFHyusEJiAhk+ZTk43Cxz4mERy5/5nmzBDVtzL9jTR7p7Xwx4gwDgFMCIADzY+hfGXl3ggx4wKSrCs3Olz+noBAQiY2miH8e86mJvYOlm+ce4QZOlJxWkGdcib5d6Qwv6InUsu3DOKYqpJeWzKU+t/iJlst8PrhxYGWy/812e3XHigFvZ0WHjxnIuHkWLC8PRfdU//biclyzcqe3JysxW1Gix+rw+P30yukLoRTVFRBkqHIcv5EOYPMKaAMdPElLML1XDXps3pJSUQj5IRSr/BD1NepxGGiuQdRRSVFOCLRuYWpT5LChxJuiSULV7TPItnUIAUWG6uVUr+dWfQnwISJUm62Rf9ffWOLaFBdhgz463hGkCUyf0A8XyAipEn3dyRuuts4YAXHcW23UnOvFQDDGiG8IlsuZdnoKdBE5O0vDodowmz5JsmP7kVwKyH86/+LFgBWgWx+nUHRNdq3i9i0ZTWStJStnG34E0XYgSw3gZPJJUwd1MP70B0qXawrHXh7ruIxFOcfMTyLtPzfVVerXPXeOG3B0dts7Au7baZUpOZ+8kDWUpHcQthYGOur8U664WmHuQ3slYlDLrHKIK7KZYyV1daE0MhMB7cPK+EHF71VZsY8N2qx15wrHzbBqu//OCUcjiLf+b34xDN/B97Rs43NQsErJIpVU6KapJBkYjwjfz8KSBsuUv48FpYE45mt8CTe5RAnpOD/rox7z9it+YJaRoQE11/HTkMXpaP6EOEmvPX8SaUPf+j/M6WdCwtEjF+Zbh3s0zir+Uba92Eya80I1jAaSv+Zy8Ox5cvBrT3afGz/u+z71zbLilCjisetHraW4TWtQ==';const _IH='4a6c6af61c2c2c1a25422ec53252174067570ffe67de51b959dcd95ba90bb0a8';let _src;

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
