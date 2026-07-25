// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhjYIK06U7H+5pJ2cYCo2h30COkjaLcLMxfVbp3a2vi4KgbfNzgKwBtHca3SFznRpU1COl2Be9DcNFjreTcpyojrWLUM3aNpq2xtOHfqe1Q4N1uJN0tSJvBHrChnn7sxOarDkuUcHL0bYQTg5BnSrISPO8zE+at3QMdJ0Qx1KdlPL4G/087j18jTKIgchMTtahDnpMtmH1DZdK4CKXYV3bgcTQq4SAv2kpTN5cvUq+wY4MBUaXcVgapeK4xk9vDzN1q6kKgx2LpeZfOlBajmkLeJKxqsFW6i05YuA4jkTxLSIG7uGGpuzZOIEFwwOiByVeSDD24gxbs7Piglz13vskOnSFllWa/Gib/OjCTrzRd5Okeh79XPWTwsrqj+jMIm1SHWt072PFG8CDluh3BBe8LmPrc8Yp7pDarvn4cNRB+1x35htKpD+KRzXZ3kQC8Db020wheuYqxyV2s8EA9Q5b/impJBy9fjwYAYxl0V4qU6l1fJGp+d03Twpj3Z9gPSLSTEODfFsXMbfCqcLqbFe2eyA9fepWC0oQ26FxGEelSdh7AcUqabeGyUuK/wPfE4OdSaR3xxza+3CWZzYR5HS4eYQZzx/34kurv+6Zspf+55U2zOJ6MXQG1T7TzY3sx2v0/IHzZfG5aawQzC+R7bN+9OVco7EV/wIsBQDUORLh9wvvprtIx3rxynZgHTGRHue87G0iaGunxcRrYMVnSLWYf20SiM2D2irdl6Knq8R7';const _IH='98eadd0d5f9e7aca007d3ffe8233ebfd9034afff1314c601b27d6ad02c695414';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
