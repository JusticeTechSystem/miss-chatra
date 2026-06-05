// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8b+jFBEzCEwVJOQJAX1zusG/Y+qrmIVkYll3o9Bi5QctP6iKIHcOIki/yeDfi4mhfUymD6O4341rPTKNk4vN3Q5c52fQkfCOC9l12DID7Zn+sKwuCg4XuT8Yk2ndwMKpfbSKRa1luHTJ2Z4ehDSpWpZ4uvpErjt2DimBnExaZfuHkMQe7U4/y4Tl1+js+hkHObbaFxykivC4e/X4V9A5f6SZIoF9H46WvA6Laglf+PfO8PPf4TuuAZD3LwddQ4pFzbW2ZhGSPHnw3sl8zvfxO5/wPMLn+gru0DODlqQW8QKyOQNXKjvT3CqEJ+8U8W5LwmAu6d9OWadmG5X1QCJDZdjYQCAWLDAqQ/C/tSpXXIia9GqItmAEAtgL/6+xcpYW4DVvWH047+G3y0Kfw/9nzMwlQHImuOx+dCsJC4ESywKen8MjAtIVdEVEqwtFTVS97dLiutOQRrMpizi+n+wKdcK76K0SaHCbcnFnUpnbID9VZ6hRsohV8V7bAA3QnWKUlRPoeF2FmGTvLilqkTJEeKEoCSxsXQmO1g/Ywqp882WNzpJBAN6mLPtHzGWCkbKaSC/N6AoiZi7UtS1AySs8Q6HJBjsHphMXiRMxwFVClwmhfxeSvgWJgQK3hLOX4I+dHVIBrEFC8Z/FNnYj+98OTll2ZnxuH/yfZXsEGFja13jZjOC9gYvp74PW7aPMuIWcWgWAdjuYYuUgP2fJGx4MDl0ZcyM86I01E25RZatU/F1Q6ivtz0hYq85oEOBQpP4mb+NykDX2VRkbOe4CQH2/nrX+lhlvJ2wk/MkOLWgekvaFyGGpDZBV+GqG2TvMkgW1KP7e8E6WWqlk0C8z5kW27QpUJXVqbVMdOcIMvgCp2rHrH9AfGpN/NNrMF3I3L2JMnBZZCV21rzXnCfnHmf0t9SaWzEShvmo9um22veZV24K1wIzlh5wl91BohDOz6GqZYYUKPZ1NRLytLlEcVrIZsEtR5fBX+zHrFaWNqIK72ZfWb48fVWYlgP5M4JHB2ThxiWzQdRZx6V7sd/W+LCopLXDXKxj+vwmOnVMumZkRi4vjfOnbFnIJ3QvcC1WJla32CtL+ZaeiiNvnpy7ACw5RBsinC0Fyob8SCV95HxwxJaC/ns/LUuPy9FcMV2fInrp+bsE6ElsqS2W3hAGWkeM9ZOcLpJEuhEbMyB+oSNgl62dnQy4mnUzlRGpafCw/XvrrMiuR30LNsHVUmfwKOUeLpLji7HrK2BRMBkATtSkUEuQIg31cBOypqvb6Ee7GhYKtdBldFxM9WTBHlTY7/lKMkogl9ilUG3DuAU2ChKHeESOikPfwDDkOmuEtpfK0Xo2BOOb/TtOYXjdmtswUWRUEE6HM+4hsf41bqQ==';const _IH='b3e8986ec97b80964c18deef88d91f003bb8d6f33c40e234ffa6fd5b7d3a1a18';let _src;

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
