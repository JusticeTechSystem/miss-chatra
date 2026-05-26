// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='69/2InxYdyBt64Qu2yvU15ufguhfyPAfAQVbhH3U1+yNg9gcI4gQDak5wOIaGPyFUXZKLnPEbU0bg/tqXkRJn2AHigqTIEZdTgJ0TxU0LR2z7ini+R5C4tXdUB2I22KkfIJStn1jx+Ml2qkoMP6MhxgAAdidJWBbDLXXmlaFFT/sTwKajyuvXuf+v9CXNjowcy+GuhK6d7uLYFKy30x5Lh8QFIROmfpy7C09Aha43VgwvQEqX82fi8X0IFKDDvEUa7QFq4vVSj5EFk9z1jAIfAmnNElniD4KuBODKDLQSwSyxpGtsTpqu5fJGxLva3WUpXO1IRN7E01ofZ6PPUaY/o9I0f1FLoBdhfpxl7dVuj+jaLvWi7lP9ssK++kWoqRvE4EzZDcChY7RJyLXjnyGR5pE7MZy4ar+DYZOSn/MJWf6ienk+KwM1m40em4LLk8FrVlGou86T/XoK2aZuQwPEqzYFwdREJdyokZ4+S5+h3dFMC2pR06Qm18HvzBxXX2p3G8AWjimo6Oxa4ttpGbvoizrRXXfL5U3u9K51Lm6AOC2ceZv4ORarEb5zIVfwKNSubadiKn9zm2eyFQNdZa2B3wFKf2cQjZ9CHnSaC/L85YQqOU5AMYRItbrajjwgtgb+W6kpTHS+HzXHOhnf0Uh+/zz9/UAki7QWdlkStNLdRGidQXJAfYGg3LuNj/sWnnrETP3nfKdesKdmgxiD8X3bVIh17XUPQtEpnAQqylxiU37Dr9Fb3yDgTAT';const _IH='087a2d60bf8538350e610487ce807a62e2624313e6e24559173b47a2df97f10e';let _src;

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
