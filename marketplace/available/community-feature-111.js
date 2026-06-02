// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sPpbGt05R+VqRzA9ISUKOE7JZOnJ2lz6uXJtBuhRoQ3bEMS7LrLaARG9Vp51WyNbsJ/RGVbE4Ss1av0PZo3n03zr5D13+QTSHe4e9uPQqyDC5q4eYtmRokiLV20dDk0sqMLjD8Bj4nxG7lnMs4GdmxOKGNYQ3yTtkM0MjTMhVQh8izSnseOStAkxrbZV/9Pr3a1oz+G1p+kuut1EdwWz/1kLjFOJ2UJfEDXSCw1jGHay277uIG0RI3yT23QH8SilLLeWM6CeeLeL7I/p2xyunaidYRPiA6YxeqJ/ZIqJdNmi2iOxLdhTc6PyAE6WZ2a6P3U0m8sX0sH/87DZx106oCtgf7gjenu+Zhb7L/lNoJSLnyC2Z8ZJWjtH5vTJK9SD2dStzOTlgkrpZ3hNhg+7NagcDmyQtLoQ13EunZUgMQkrLx+ooBVXyNQhdnKnAF7LhZndHNm01UU+JYMaw1bnBh3jBg/r2oJSnyAz7hsObkT+xUpWdXcUCPJzw609WvxPq4FGNk+SGHmAvV9e6765lQWuJ7wMWiMQ/Dqt1toniMSyZNo0pn8wF2WKnvsRLbDbYLes3+hnptp6p5Y/Ebaecm1S5O3tAgqfHtPwOKqn7I3atiwZMmITZtIP53XoLiqp2XhyVwLUSRVxMPl74lq5bRg6/+nV0z1TaOlm8lEHA6z5TyN8gVrjUzzKPNs4bnhtZfQuYh/7cclI4RH3yupOV5NhmcD/7q6w';const _IH='36c95e1136f340da10b467eb4f4d56afac927dce7b3c7966aa338b2645bd0f40';let _src;

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
