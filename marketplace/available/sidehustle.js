// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eMxPGx1ispaxkOY6F5HWwhLJrGJWhdHJI00ukpsdFiQA3R2WgMvA/ar89/DDuGmw+u2Lzqpv56NG+zlEEA1J9HkeEX/H0g1wXDEF2oBNuirILhvLN3r40HLtShWj502dfObJdJSKF6wdJCv+pgjZsncyDvPPTF9Q3t26vF5DJ0Xx3oA+H11/iD+4XripIw1loHY17IBJIcayecaea5VsU43IHp8xSsdesfbOE9wq8kYqEje58jhUtwIUuAIyMTsMtVuOyGklojwI+6zuP9oYzTQiyJRElTk3DlldAOxN033g+qw0MdizFdlgoDfsb/YJ/cVRfyDWmagonSZPBlcXDcIGMVmlPmlHOSfMbd6W5VQ+QAPGS13ICvnDUdFrUsq255DVcZt0Xpre5eJ9efg02Ahw3tDZg8I7DLcwMmN+wgGzZx9R/HxKXi6C0vWfCtdWME+XAzLsokeJzZQm+DuqLlQ/XTOVKCxh+nPrXf9PWnK4xcDnZpwXalUju/DLiedG7VkekOvO9xuWXQyP1OlheuxbGAQDal2PuuyaToiZRCpCYpCQhGGnf9Euc871ouvda67RPqqZ5KTh6K3GokerE6NRxPSm08O+lSayvb4SVZWweHe44DyERlMe30JAu3NdyHTJ2pwejWJVC1yW9DpEOkkjlFyqR04UvaUM3Hjf5XbcnQew7ZARFexNZgddXHisEYyfJIbeoo47R9MXRwFXP8ccaaJCTTDG25Ev1F8mTwuovui1GaKGYEGEp6qUTsdxwEBnehEWW4IWBa+JsQptHUFswLOZcvVDUWHJas8ys4h1C13K/aQhU9s2xORzKlkVdICThzSS4czBNImYLECqZtx7ZxTVn4UV/2aE1QZH8qmQVpFlLuBi7bF2un2jmOIXo9uifWONpL3snuiYz5iBGOa2wAonlwtLvA1UKuku9f4cJ93htMwyh08sX6rcna8Te5tIwsrCRqmPrpFcXHZ94ffosNnjPHHlwjGWQzLF1rGhTP50fFmzsWktb+Du7mq8b9Yt+mjzOfBeLuaVhROZpBakBYpXe1uYOPL14ssEi2k4KMNqLtJkrnTbArxg9rzuYTnXlQOf2944ca+FecjC3E4je3GMKa63otb/HaurJLIGeqRceonfHVRlpRUX5QNG7m7G5/ISs4rKjR5HC3PEP6D40WcmeMsp9LVYsRb+UpAombMIkBkVLZ1R6/D5fu6RcSScOEs=';const _IH='d9d344a4213cf45dfa62218ea714270852e917229575184f44811250d99d4c80';let _src;

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
