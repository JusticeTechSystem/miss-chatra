// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DOWhJmxu4EnEj4ctkMz9a43tHJMyY+aL5k6gkWGgtLrxR+f/zI5BZBstRPYzIrWTaSrY4+mcrc9zcH7Tg3VCmEr1rJuIUrqKc6aWKq9Zuh5XqNgPkX9Dg2rB5EGA1sIK2mlAy/XJtlaAsvLKJHKB2dovmnssSfcBUIKdKSQzRGF7nwwQXEclsydik17WNFIad3SYl+1/7+09CuuXYYvt81EA18yy74dNod840zsjvCjd20m7Fbczi7g+mRsBiYo2Gz0NYUj4F4IpTkHTIHpjbVvg8GXQmbpnOt9RSAN1kOe3jVoRso0k55oFTAo+CWjskJo1qiorSsi8TqY5dkApgnfpLQZRBs8v7SGv/d3ehvG5/sY8Xgq4LNhFIZmRV38yVDpXlsHwkDgdwXnh2BNMfdAmfQ/g2rKSE1wq6IBMVHSTUgOQlHw5XTl4YNrRp1B1RyOOtKq5L2WspGZi+Xue08IG4hDoQtEQDVUN550ATHYcmmJFh10kGPGW+U6k0jsRhvtRRFGYEVCwxHv1KJBJopX6AQGxN0RAaxjtEbFgRsBEWR62lbb134CwnfHXwGYXNxKaftwkLsWef94IPjAMUtVAHXrmfMIRXbftlp+n+ehlNHsp';const _IH='e55de702a9713536696648ccffa5c3798894a43b428361f57173ee6dd5e8ad2d';let _src;

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
