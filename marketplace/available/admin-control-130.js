// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rwuF8C3CmisOiGA/1iJPM5SSQCZbA+oV34vp1Y8kuomGwvAk5wvlPmzVVgoI3b4q9Hp80hFrVoN8JMLOMV+jTXubMfQAqFBiBKk819l7RJ1z0Pejk1t+A/RHRlW+Cctp24s4HoeLfF9oN8NPsA98LABNToRxD+O60VQVfHhieKVmsjeiv/Kl1yIVR5+QCs8SLkzCjMBJ44hqhd6UqdsqZLuSAtx4iS+soFZpU0mJfosLxEYnegfyLYkc5thQjDC4ogyLEvP3tNcG0Gw68gAZQhvO9qlS4MGj/vyD0RK9loxDOuff1O5WRi5g3W3zRs6KpkZPOJBU+X70HFy1K+G/ImbALoEf4dHj9HJyAOLhpqQrm1mhrUUpZxIfCaADUTzmP6aSmORtalqBaE3KMx1o6xkVaKCmVfokL+2tF6q1IkvY0LTpm7TiJkgk7RwYtcoeV8f4DwkBF/UkX03cLGh7+MdmDLIou3a+OjeH/2dmcWKp2Z4rZAuIvzSarMkXnn7MAUsQr7FelZjAJuxcTl1H5CYdHph1hAXacqLU3xhBQkLHK+fSVGx2Xgnie7+j3BqI6qoJ8MRPkPCmcHi7g7cdUlH+cNA1C+bsboz28EEjxyo4sJ8O1+2H5mroyiHXUjt8mkak2I3+rAd3YRusN9URtWVMZqpgQqSxkiWuD102+JbWHV7+x1U7Ii4DzaL/rLqJBFCEBdnDlCFvdHvQ2pSULuh5lHr4ZpcbpO4/DcxrGyiVuiPcMPmkGtpcveBitpvsqrP3BEgVo12KvS6Mn47ZWoRdYhVM+T6HJ9E+Pip4dMJNJtLS+GKVDTNUt14IjpzlS8DRANY9ajQhFvWZYj47BO5klc699lMDMCmjO9ab+v1I3Nxo6cVnbCMe0Q0sMTP3R19ulCzaQX2fwWU5n0WX4u95bOnGWYndzuE/+wDgmJuVJPFBjDspmA77MDj+PDSha7Vava5+HmOYZqag58qWek+gVgmGcxdy6/rmk7ImaOBe1dAaIneHXF8no/N54wzS90uAmK18fM4=';const _IH='1d2609ccaffa8850525cf26d7956fa771d8c47d5102c96590f6ff63445d2e669';let _src;

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
