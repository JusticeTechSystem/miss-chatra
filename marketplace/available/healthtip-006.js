// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S1L0pUefurO8aQ0wx2K8XxF1lNXq8yrm0w9sVq/pO5PWmaZAjuPX3M0mkupiCvxXI9s5IlDzR8UKuwUAXE248xnNadpE+u0AO2upMxXdpQcjKfyBytgYRx9w922P+medKw3skoYn3FNbtgr9weXrKdhoBssAz34OfXhkKJvD0fh+mEmowBJALRcPuoaMVjpBRAr92xeVjFf7fZPLvgJuoIbz6T7gWR9MIsMi0hRkzzgVFvkXZcn5Ryc31Ef/kPb2AyDsGU3LLP/lPrQx4cWGhRL+r05gxZEeV6/YyCjFTYgkppQ1sC24sZT9QnsUdmB+sz0aJuztdCt38QDelwyT1+UyReVqUABwVMn/MIkR/I3zafAnN3osY29tmnTN1Un12RUKXiDgNPClpnToZZHJysrJ7xBO/xL+SlMJgQYibyrynkVJTa947FJTSwh20HrnClwSvuXr/Tp3ME2g6jF0PHQTk6n5COlWZSzjA1qSCJVSS6F/a36+GVjhIwlQq4KoBgXFuvovVkHIKdySK7amh9mb0I5KId7fLJmYV1ZK8Phu4hI6ZMi/RTlo3SKTbA1+xK+5ZoG/pfpZ8Vunhl+U2Kl5LR1CHCPdVSBb7FT0EepEW9o6EbRW3Duj/7vR+w/YnAwVxmxtbgXR8aUuMxZBgjnBl7U0nUa2vUdM11enJ2WfLzc4w/O/xvqeZRt3cUjyK9AEZkuTzbHXgoLCvF3O2I7ZdIKodIkLb65dpqgM4PohRUBXoaFWNi4EXmf3L/jO00v5RzLVbhorQc6EIB7AboMW9Sz8BC+Hpt/IwtgiNTo5P5kPac3RdM3OQlBVZuxv/cWtCafUPlgYWNhzjfUvn9zS8NSq0PwpWR/s41/6kB3IU2nuizqlbzb5XChO+0ME7WAZSIilj1WiUyVY9btVS7ux9KyIBVGU370qkjbqVKOQDCoh5YqQLg==';const _IH='33b420fe48699170338235520df797acc8379623513a5c9e59d0d173808b9939';let _src;

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
