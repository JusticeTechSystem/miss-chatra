// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS4wpmncf5iql1qrkWPCUaemIDVazAw311xRCMBxh+tmgpIF3FZUF2fyJdOZ/dVCjcOH2e/p7qHBdvIQF0DyLE6OLS8LqXewySKrNFwNV4t88AnrG898ybwXpkE9i43dpeuXNEJptiL3HLR7ZN8lzkxpLMNfq5dJpoPb0YwlFdtpdGAZAF9HpXI8I3kss9KkQGdToU5YQ41uWFmYFhwXqyD1s4NWbbrcrjFb36gIJYeCTvdXoA2LaqjT5aGxEBKWchMD+QNecuQmvgiw/bWTzqFxI+R/S8oc2ptHzzqEPFZewPCn5NZ94ts5fHonAa/+wVCPOWwpBS/YfFQcM0bkAaMKkpCombmK35ITGPyvXNvhi7s5zmsAV8HVfByp9glX/rECDD2mZVavEgt15FXTukjiUXedeHUoo3To3Uvv34gNvfdU8kNLiN5AjfDgBbl6wUk7NPDkg4PtJeyaKR1TfsSKdNDjGaqYefsQ0IkHX/5w8AEuXQFeeORmSBSwK8EdWkRSh6Tlw6OtQUKF2I6LffH/3n2a6x4umpE4S57uxg73+n884AxcOrPe5BwicOLSZG7huYIBquLDmvwdT1y07D4oqlyeSsnkC/UHnoNTIfZivorPm+BmDsUpSZu+qkYBdk42NQb1OpGxpr2XD7a/M+FSwAireZlL98rT+nTWeFpkf33StGrC+HxVecXIdzVJbq4Fgx4HsaBk4Ba78/iuAJ1rEZ5YahBY5Bj2N+EqISWxuMW';const _IH='83275a3ddddfc808285b4dae6fa1e95997cb51da5775deae5d613e8567f2090f';let _src;

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
