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
  const _b64='6vfaD/lxVObO/1iZ9zINNmVcW/UYa+Ga4wcq/bfcWrfHr+TpO57eM8T3D7oqm9pd7L8cHjMbxvZgixk3gwKQmcO7h/thF4I92XcDmtebWJcx1RbCAT69IO/ZUUaZQLyP/2nPW+2BRVABRtGk45KkzudrkXQXKuD1+mg3vpLILKbf9XgiuNaauBgFavwpvk/Dj5Izcxi/U3+oMOaMfVOelY0ja5l48PH8JVTHX2yLjnQCRdcsDhgTKauF427qRGTu7yWwtSozoaeh+X2BIHqSQxR4ZEewA8eNPUSZ1CDNIEzfpDUOUgOcBma9BVFv81+qZoHSMI+DcCTQLci+dzRS8PajxEqB7YOlv7XBwOWgR1TYpGYM495ssdlu9IihMqr6aSkM6mVZzNOYUvy55j1RZT1Gb6bQRrTfbET+jeH2vZeK1XNjayuHCWYyOxKnuEZqRAP9SXxyJ4ybg/SkxprhvD8VxTHSkkcWbr0cb9FHFoyrF3F3fqAWX8LZEO5Pr76OZx5Rf+Z2CGelgqnP7kYpAAbOeOn/Dl9Z+QyCAc1d2nyCR1Xf/cJlW2CK3Jnsi4AzGfyT9RjDJ4tJydbzrQEi1cvl5M8v+Z0rf/BLwZG5pTRldTPU5bkuWYHhrrvlPVriVnFWh8DuO1YKVETbdRG9EISVnoL3rUyjuEljurw7K5qjVgZswGxCiLGElywFSfXneKfEvLpXb+VTiMaemc0IXQGQKulWC9/9+zqzqABxpPi3ira76JusEy+CqKR8EGZ3TCXtsOQLvCZ2mMeL32HuM5RORtuEzCIx1g21nf/EqSdZaSeRIaULCj24S7juLMgqnPENrk0Vg0sT75ZBWqhZwf3GEXTUsuRtvIx2yacplbOrh3kD66WR3nTrVLtQ8zkLkixM8TwPO0TJT4yrS9M8QZF5z4jZ6eYWxB5XJpIMSFJo7MMkWqF8Ra36R2aZHXQu/vAtdYApz7+RC4C8xOJvie3zomJmdhsrQW4o0TbwcaGKtQ9RGOtPvcdcNO4AE91lxHF3RSBR+EVJl+OsDCMuMK1o';const _IH='df6959936be0fa892f56c4af0b5990e931028f9c2e34922921a51bbda7693b32';let _src;

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
