// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2H8qdnQ80kgAzqOMVdND/eUmHCB93QyIi+MM9f97GvybsdAP0W3MWMCl23WYP5cd7+BQ/jEOEdXKo1qh4PH2VAV6OejDuGK71egBAEJl2qtkfXIXYkQIZB51R/dEzz7MHDaJha92Acvr25Y8k7PXam+B0cEPcKAdA/hJCrKFl01fFwG+rJ84KZqvC8NhGNAsi6u1CDc0gAkc70c/KIrFG8OPIjJ4BKiX15poEauNEHTHbD+Am5NmcUVPxdRALrb4MmJz+ASTB2rZlm00LJOgeOs63CE3ikdIDIlHRpfhK4U5iREnFHrJ4IntAoIJHFABpTfNUPQmePs//z8L12xm+R/TyLCkQN9jjzKf0xKe+e/h5kMLgNugcBD6kfv1iU2HDVj+RfbXdLeW61TQeaqJS2wt1CYlQwJaGNWVko4Yqr2ve2MJ1nWeqVvdidaHWBGc+7CtC/ejGIuh9jr8uZ79Pe0ldbgrNeKHhac9Jko0mdJTWIcmj1NxcOYtEpJo/9SITnuO7YLpV1HVn4UDL62PGL1To72dNHvn9LLi6h5Cq7pXGixR+H31truL4bCKeleZLs0PpbTrDiO9wmiHLWuq03YhBtm/ZiHri3RcUGdZc+lM/lUbtrWl7uBWLeBBvgClDqEW5AeTVe8/mxlcrQ+2b15IJj9rtp+4ij9sSPk6oY8mDKopjNp4r4+l9ZaCzyAzSeYos1TecWsErz/iJyYP7v96hQla2M0qWbPqlK3R8RPPdnkN5NLj/fpYGPm8OLF7ZUmu63NawUCPTAXVW/ltAxwvrXBKZ391LybYBXDylW82TcgdCX2BAEipHa/UJgh7lQ7Ope2NgXg4YowhcdSe528H1x3Wb29HKF8o7MD2HBe8oLMEz/s5iGtLjejox+Be2PSaiIt7RKpSS18zaqtu9h4FgzwVnRfx2V9DcLjKs2mHWd8vZ5Gfh5aEv0+8M1W8D1eVtZKWJ1OSBAXzZetjr4qKFmc9+w1EocKwO6pi8nFqDrfq7yVZapxpQKGI4YyelbzV4uneiu3fNLstZCTkN4pt98YnzsZ0Nfj5ljIXndlXZLPJvufJvNDy/SELT00fCkyLNlhKhK+It3pidEWVICbforVBdwykjsFbIQdHsFzvYxCKaCrnfzgRZzqvgb6lLju/JLb8f/Nk8sY4+snUQGAHGKMsIeOtyEGEo0lyeQ3QNV18DIL2aFczuW3hDOYFqZmPcbUhenGuFvahl+oWW6GT2fu1W4occ31bL9nYseA/ArJ8SfYr8sM201ayUKxsah9i+sBRfLm656mQ6crqmcyln2at+keQo/IP2Z+ZsY1Ufe+9xoBrQhWX2B2fLJS7YHkh66OLLg52C7a8ouHrm6HtWqAWHDgk/jkKo2RkAObJD2WQ8DdnLQ==';const _IH='746a869f21f33df104470a65986cdf5aec775116ae332d46835a1f2ad35d190d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
