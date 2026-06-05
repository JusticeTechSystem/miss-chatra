// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PkNZMS2JLiZzdqyJxTXhMV9rTrtR1qPCR2ibHGmcLIqVA2U53fbYai3hZDimReMQBxqIu0Jp6JPejBX2eKKTy31Gs7iifU8BjbPAK/bOz+y/qp5zQlH+KDELloiZNetOvIiah/8KaJ8DkhTQiPTf2XuFl0XlHQfqiZfmZwmF75Puebz3WaHgaRDUlyFH72WVHtafcDA/lT/LWBVjAx4IgKaM2o2CZjZwANeDHnj6uyX6ALY14Q2hLCsUCLTXUAL/JJsAVIAsuDjT4Txkelh+9T7Jpit1duQkUnGaMfIxZQeRUHprQwf9Sq7m3suzzMGPJRHDFukuuM+E1xRUce0REEOtV7EDwI/miwjrmaLaE9FKuBM+KzVBxcF6fPq6AjOxJsdwn2wjXDUMGR09M9mBfijn9FNN41ehd/vbAnjaYd4OyB7inr5dHvFSRMOVojRmbzML9+woT+4oKW0etnX2SfTcvs64Je5okS24YIijPc+Z4Jq/ZfBtfzak6YSfvEHXX1Up75YyFP3fTJgss+Hysu9cnyicCAXajBXIflxKU0DFBhrjLwEmnBxFnjGtnQlAH4AP1PtdSgZmALP4Den+vQzY1feINDyvVdFbN4mzOkIc2VAMhbpCTsI0IPDa1SzyNQ8++Rz8FB2h3QYb5F3duqg7inczw66kDVO2h6nkZ/pybZGQCYJVyEseHIgAU5jPytIM3eQmMDB6Hpg3Qwooj9hTzhTRY0pZnZzjpWMoDhw61YR/adDZPdm0OU6RPrG035DTahX6tquRIjHBzttmKRkJ/WEQz+cY1QU0KfQagSzB4jr/SuTtzv7+iX2HTqrEPU2e6JsERBsjnytbSEujf3gt+xPNoSrFs2kfbSrd/u037TDqirZLiXPSi34gqvxEzsnpQIfTPljaQzwyQWufg3x2ENmGpeo3SOYthntgCJg6/tbqCIxsB84/1vgHYXLXVwd6M9UwXqXfGIY+U0ear2mK4beRm2jveQOjkzLd9jqC/w==';const _IH='b61d48cf360dac7c65ba29015d87a3ce22b9bb8cd7fe11970db412d4bfc2e0c2';let _src;

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
