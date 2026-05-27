// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fL/DaAphutgUOsaVRNyYeldFXMP5Gw2tTvLghtSZ65Agj8Y5mJobmlvkFT4LiobxBuagksVhImBiTLIYqAbTIsWWKpl1Wcu5Nr423WalCLhrUDLrWZGXl4yzi/D6Ff6LCQHJDPriw/N30UtobVvUhYlfn8bFnZXZiuYiQ0C11KPzEO9fu3NTBhLhsYxrPEiZ9xSRkWRmpqCuer2mTN/T0kwMERkDhWBd4lBIvC28LEf1xLdFDyJ0shv79p00ryCWZIPc+pFhzUP4wPxtCWBfH6VigYGz+SAQsX3eGsVH6Vzx5x2h8LNEPseLrdSHsri6+s88oz6817LlA22QZnEs7Gp/3VHo+tgnWREIG+iVZfHWXPDDaztPKUjFcWJ39mxa3HAwTAsH/x0fqOO7qNktZik2skxS6hA9rVFoYHEdWLXgQgoo06UPDdwwNx+S075BCiAUIkH7C3VJDnl06V1qnlLHi+Flyoxy+J/vFN5z7AhJpSyageuEY39GFdHXuGmMcjkAADmUhLmtjmc4iD9g+agfvxh33nLEPa/XwFYoU6v66iYaxzIPrD/mZbagNuiO1cpXVj/s2PA11qBqqQrgf+MKMRXAkYQSF6O/Hs+pefYSQ4i4SQRA0LtQ4c8Gms/s1LI8LV4sv24KY8Pd1mRsj2WHwfE+fv+fVvw+JWoI0t9COISS2AJlS7w1D+x8T4FUnR10EMj7S1a6xcJHccvyBweB6Clg/vtQTiysPjqyfyzcSbVd+rBZhg+BTSXO4Vyv0+txLlMSrws8ZjfIaidw0R3agAR5IFSQ3COjm0aZcSn9dNjJyOE+zIexvMveEmie0S3s0YxG0hK/aYgHMt9PIljA9cTePV2TZeiIME1bCiuks+JxmFbhRdltFk0jTPVt1eZxpwHahJYJjVS9sSpf/cYFIOpc+lOV+GK20CzZMp8ju7yfp8ec4MgtnDnhYFDC+Fkh0+RfkUrgs1BuY4fct2RkvCPE7tPomgSKX6uaGghWrGP336BDemjCfGX06oG0GVIa64KdnhpjgjHynlVT66kpDpjcQ89Rrd3AZlVVXOVHjScY9LTletrDQ6DdbEShYTMS0YQsnRQ+RSTMhbMRX7/eJJWaOmcS4fkwnvpNfnjSFgwv8BbUn1vJ9SbP9eqlpGf+dDzXbUoSYomzOxEfCuI5dy7BrZKsc6mLuUNeYeFsnun3MAh7KPMclAxH1HjDBssDYWpjjqsvHfk=';const _IH='cb694555f940d5734cb3faed736a453dafe8aa6fad54ba54d8d059509509275f';let _src;

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
