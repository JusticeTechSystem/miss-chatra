// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g1oTjNszNqzETLdx/ofg7gsSVT/i4jdFbpogEqX3IC8ZZRt5VlBC96nmP5fnL5BGZrrilnY0zWXiTbyxVlLzBrB3E/eCGITSxUn0PArT+ddXBPZ5HbjTt15D+svzfWjk6zl3iTvuDUyqb40ByQR8/kRcHKjCXC1oo+nl6n3GxSJh93GaBIT+qStUBH+0Z6ycPFeX9Tvbua3cf5aBeYajwnR7LIgLJMDH8rgoHiY5mEt6AzHH3goh5+Q9hStuDnKrWOVpPUnpPfI1gYc52FQpnH9+v/L60+oxFLv6lqwH0ABEW+3lb0xgDzx+gAAbJ9sb5QW5CXGx83uxOxVMMiJJLeVbzhMKfsEzwuBVBk/jwiNF4DkYu3RXrrgEPELuNAsPah2ihQ0PnbrTItDxufMOgLsVpd35drZE4I1kpkzX0g0taSTkH//6HLVyqmKnPUiGBMli/BJ4OpVgjOQM5I3v3i8v89dt8RxlEum8L+olI+Z7KGGltQCRpU1CZEXMZbIX78pRIblfc3B4lDhZdt88n/J22FOFxaEkNkKygxqYC+zY8yCd8qa9g0Q4lfR4hvuOBvVZwjNqA9Xz7NP7NMbYDlWUxgUx/Gc1qbnDNpaJqdMvi4Uj/YgZ5T+YwV60HUerRswPw2out0/rSeQnEWrqFL3kLptECbzU3k13XeB08bx1Ilfc3Ls4hHSVESbUKAFQCRNxSg25zf+BcQDwQBD0vGu9+uSl0Qi6';const _IH='040f6ed78d5ab0590eb35f51b37bc27ea2cfbc2e0cdf5ca914d585f3de1aae42';let _src;

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
