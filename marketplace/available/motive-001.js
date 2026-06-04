// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/7kA0XTq7FFYHgoxxCmnuJkitU0qIFY4PwKyXw3ulPzWrnhaMA9N1J0CdCoQt51D0n0LiGOp+Jv90QLp4m3bS4lFY4O1oCXnE06qvPGHxyX0SSUzOOY9vcMGmSfMzwSEruDJE/bOlKuW7fW53qL3PcqwHzK0gb5bq82ji4W80x9t+m/rhoDKSGsFtxjwSPvLdp/egWp5z+724dKuOIENpP33WbBETFIi3WSeyRXrNgkHIijTwIuEbYn/cSSvz6YvYI8WWAs9ldVdSy0W+3GMdLcitRmkBUCSDyeOcvlzf+kbrBMSc1JdThKuBIRZLpCj8P/i2Th19qt3NuRN5TxYgsACNlVMZWrjkT5DMmdFGjXyXpSz6daTa1BqniWni6oCgNc8HTZ/2HxcWYLhnw4lRQk6OM5rzA5DOhPgBtaj7pj/gKK+/i69l54jFUH7mdLUzO1PkjMCLIYDk8sYg8awT+EIC0RIcXONEwrpi5xE0Wd4phzr7Y7ZTig5nlf4UynaM8XSt/sBxYFJ4rVbxLgieoddul5sRVP4XFXWZOc+9D1jSHH4tbXg+Y/XzcpP2R1lzHfsdIl48G0OPbS+ZQDW68f4/dR7vLFKaYX//neoyWvPerlOdmvzto4sJ4X9KCfsKwlERFYOnj2md7I/OSFR5w7i8ntHGxvK1AH3EM/VhWrry82VmUPuAcprDMuJGNeP/IPrEjAx+iUaQ3pqVC9j+9j4UrxZIdqzlfI2SWal3I1HLAZSSAe/909fxz0diUsnAe0kpngxCAZnNKGXiyr0vNiARg/iCxTJt5dwDQ8bfnamiAydA/87w0zim4vz1XiPeKobgkiIZ3uLx4OJT5nAf6bRqYeVxdCPVo7XMmx+2+Uljaga+VZYZIfhfc65fv3Bo4+sp2vev0HAHtPBiK9d++9zKNbw3EjHFK7ZtN4uvdzonETco1dQKIJxWuRZ0pPX/Hv839ZM0EIbf1SdySM3AVRIC61EcbpKAWdLSzz2Ih6VYWkJy8Dqq+J3zlU7krmrJQpiSX159fkFqNZUfoY=';const _IH='49a5945a288d6ec24f46456fb2316f4ac1ad32bbbd27bddeae72f74943edc225';let _src;

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
