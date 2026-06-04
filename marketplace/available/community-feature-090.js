// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+FOsuqNwfFGX2z2tyGKNXJ3VYtkeu6JmChc/C/S7FHRHCim59EFbeYzv8My0M6KUsWBbwQ1XeGgzznzE9PUaHSHNAU/f4t8ImNXsc+PZkOsQayFpS1iRByObgg0WTOuyHXC1IWelf2LhaTrrPF5DucVP8/aMVwSsJkNwIbSsx2DDaW9uvzUCpZwHy3R/M4kKX7MEi6dLVvBJYB8m5KiO4L8J8Bijqk8G/AyWrRK2iAb4FMIxiGK4mu1R9scE97IeJydApx15bawe2hqWwT166vjDshOLwEa2HqipHt/cNm/Wj6+Ig+nDjyA+R43FpH8x+Ras3+tBl1biRXVEnrJuNlnrXLDve1mbw1YAAc8azXfAfkCrGxuKCiOWI2tapTVNNNkISHJFogwKhWdPbMq47thi+Y1KY6u/RrdZ/lk9DBRnUp6fTIYeX55XsdrQhu73Rqd+DnBIpbw9FVsmYqw66Wwz6lNGWl4Se9mFRAMiAT2Gw5D6s6l5zZb6AfCuguKOs10ixYAJw5EIJoD+EWKI4zzb3uHkrYLE0NosDssZCk8Ni1dr+gW0dpbPlC9fzq+FIq5fl+oqgP1qGewOLgUXtavXizFJvC5p4VEGyXrfctUh7UAP+VeJVCFT+P835DbH3abVM7GuBuYLuiwmAz9dwpkkG0OdtDuT7xV1MYxfPLb1UijZGTElPyrVfMh84xWqWlL6B6mnagMGON+wQurH+bnzlpR8CHOZfn/+REtu/NW3Xz99VVI=';const _IH='b8b4d257dcd2d085b7e85db180882f22de5b327cbc78ebffe6c3b7668a3102db';let _src;

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
