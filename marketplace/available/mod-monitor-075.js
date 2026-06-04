// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1KwYjLs57M5vLAhSwjNFuflXSFk3aeOxdhFAC6KwBLncbbLy1tuWwA5hdmDfTvAQwXs6MOfDB+vwUalaGMvuT3P6M4CfAG8Y3OIyiweQaWgAMu8wAAH4fETjy/pySbSthYRy3hzRT4RGyLq64aeKEWHKzPyqTbQcIiVhnPJCwu+a7Ufw9hnUxKhlLaMXDjAcb6xRjRlJktPYO7glxdfsbK8FV0uc+qahOb3tartw/2ZopNi33CfYyyjZ16tfteGIcieYvHijMY9FzmE6TESav81Op+h8cFXVdEHfrGZepZUFDDdLzvf/jGvlHkYlv0xEd6W2AKiPkGTxgU6tekbadqC6bQ+dqcA7ta7HVOlNY+/GLmBIHSHX+ns9ZYkcMuKKlTW1cs5RlsYNlVt944ger24yJalo3DHxP+eztP58gfJSXU+Xbd2cZc/t34n0GwFB4Fphmxz53qzZimJ2Gk++RH1osGXeo1ig4Bg4xloZGbCk9uKMg0O1LcjRgX+OuW1VkQkKcVzl+MEsxXo0/mucTNIGL8G1oa6Iv+x873NjSGnFeibwYYtcif3gIZvRHVbXall+XFn9Qgv/Z5hc7+BG2EF+fm/TSQZKA5NPiHa4Kw8lozSwuEHPz135CBHS2HTa4z/ojmWZXn42grGSyUOgzyugdFDXbUBSifniEEkyQG6yEpMcS58kHv9/46k3Uwb+JhSlKkjk4ofHk17oVG9nnFkgjH2oFmh9Pk7iG+DbYhGvIS37fjpE4+1wj0QNjkHvNcI/Y+x34KdSKIoncwp30sqOGERvIfjCE9V3l6sMULAHZN56UmOso4/78yr5esGAgSlUEUfyjY6bOEXb6fVc9tqtxc9/U9Duxw74/Bl/9qv2v7jBUujv+FVrPiSil+yLFLhO/M6rnG7IbxSsE2jrMiT7Iv9WCs9kluOM5ixcbl6PaZxEyyO0ZFZVVpxYknHB0MH8frA6h5hbim2eesipleIS8xqfUdLBHSAEig20Wd2OBicSlq5ZLlZTW52k+ceycQNIGg4HCviuR0dRIGMyTNKcd5iNVYiahR9Bx497E+/PYYpT+Nwp0QPpyiIyUYcqiSfDjeU3cfVwGo0H22O22BXaA1it32mdh3lNwZDLdX8hPnQ37InWo4us6V5W01hPNeOFriuKJQZfuDaO/s3LzbDi0SMY6EpYpvYbnFO3vOHP/mrU4WD9U6kgnYLNKId+AqjjFNxSDPgqSNPuBD59EUOxEZJWKnSedOixd/DwppLl2u7uF7Xm3Pe+FS3pDUWVPMekSm4FmF4lq7cfvDzPZ3Ehg2esQKJ0Kx8fGswb74l1fUvjLc8F0/WYPnhkuqTVpsZd5lJ8LtjDqjgbqU2CIiaXw++nBaL1p5HgC/tcBh30RpsisHOTxnqv2rPu';const _IH='19e426267ad81a9711e5e6bc7181ec2616ac3ff127c67817c9175ec063914e00';let _src;

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
