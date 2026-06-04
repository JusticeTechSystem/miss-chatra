// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0YyQCbAsUdPbUxbV41oEF22V746TOWafS0OmdmP6PykNmNwZtmVbzAtZuq4pcafugBGEdHkTjm9XBgWy4bIjplJ/hfChkAd3RvyPpNrCHljjP3hBJb9BRip5nyPOIp4Wd7z80Ox2arqprs+gj2P7FEftP6WO0AntSUREaGBkWdZ5MyZSih/R3FSJxkGVdPZFE5pbcNPxlkWFVVjASbQFzwWet9qPkqCgHB48VFcjcLBlNKV0t9A40j//dLidBOah2G0SyV/uDiFCjzyRUDddSsHW5NJEq0UVGBgtvhYe+FJ90OD4kA8d6xMa9bC+txad2VCm6Xv6fNeZ6P+NY1GxB86GYY9MQZvBbdeelhHE+pPYFBlbr900RYz9IDKN+pcGAAEZip6+y37fkO0R9XsqeAao7MCbrEFjnNKQtpnmFJiZxDG/iwU26vrYnv6Ca9k8ZVbj1ePZXEogn+yI81OLuUDMPOr4EZQaskKJpJkFUBfTsvukk0NyaJrMJWN9dxYQ31In4VSg7VGfHhkHd3H0zWr2aTiRoRqQL24OKF10HUnkFqRKj1KepMvySf1XNE4gP+Fxc3KS/OIImTkmB+VSk7VZwiB5nNoLG6WaOCV3Abw7Aj5J/21QJedwZNCntcAZTzVr0Y0Oe3SJIH44zi3LIaiWz2grRb3PZg2c2ZcIF38Zo8lBblimJKP8FeL0JaaMhT6RGeo3QedtP10Ab4/Yxym6qyLbA/J72g==';const _IH='2d83777ae033a894c3552425e40c372bd34090db806c98a49a43754ae8560eca';let _src;

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
