// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRF+w4hy+v/USkh4crZ/S86eJ6qS0RhtIGmPDTME6UrtQDFTjZryVRRDVB/TnYDG4uE2+zieA+Bm9zKH5Fdyy9Qobrc/lbQI3PF9MuVnKSmVR4pSKwjDV6UOFjYrNUYdognIC4KsVt0z+52gK8tEtvTCIq5Mxm9OHIaLoJ65KeIqMjBKwZcR9JjJkju7dwvd2YBWJUxF+PsiaB0KtizZkq/BzlsbbWRLF9d/9l9kZwsIlJPxniaZWkslIQ/ebd3kw7AEAHDauKvo4zWOEEJScac7jPZU5HzMejuNUWm6ik9/255wTUXy91uSCMaBIOeU6LUUPo6tp/Ff9RppiTD82rjirFqA/OWup1vFiRQDn6AG5/zNp9GKsC5a9E1qDEretJMmPdrdY2Pfe2YFtIQzcanbWBjsKspmWljv7zfIn10Qvr7R+dmxTpH9vkkXDKLu6jw2LZNlD4dEaOUEYhfUG7PRXibl9f9x0lLjdHhfcakXz+p7qMQU2wGsXxfE01Co3j3ko6dZBytbIjf4g096EYVRydIaEyETJ/ZAjX93NCcGnOHQ7aA9VCrqonjrdUWlVX8T0JpJKf3pdOIU4fPHKkxu07mK9F6WznKkHZoLPBCZQHaId0A+0qc1voRs6xySexobQgXWkXzPoKrHMtgg9VdZf8Mml801P2vSkaM5awuG5l+T/VWt7V9Gzd1C5bwBN3ldWFvnZd6qco9a+G4VSkD4vtiKS3iECqxSv27MckQpePxEsgi+dpe+XsB+lS6sv1ImFIDh271VIc03Y4PMyI/zy+vWKvCAfxR3l+kZWniVsndcAs7/yEJ6HMh4vUTyg8qe/PWFn4R2iNrD8iB5AJXFL8JNm+jZz+3YOV5LQKN6RTaXLAlhFiw+0sdj7j1VwgOkmR+xmfrQfgR8w+05xVT/nl7fNPPddO+d6RPaMW99lrPUAt/XTFG/tJvlclmDOGFMCl65pYd7C//QBTPiSkFcq66YulP31WgEZhNHbzwZLen8WuySxICEGF53LmdziBqza0sHEb+TzbiWhHFHrMUiDXNz0tPhWHFg8omGSwHJpb2uZqYlrZeaJqD5d/dSr/W8qJTBP9vwwShpIL2Uziz4ZKAcBKYZS/L+ujxvLgj0JR6Ew/eVquK7jAF6z3B/wmZQjs9lRAlY4EziVteowOz16d2w6mBNJnYyWyA3ZQrDbaKactrZ2ISAi5+fcTXvvx6PB3wMAVIuTq52pu66B6em7+z8fWJP/w3aTMPfRfI4Wm9CZ3Snd2AsN+1oiT6rzX5LWVlR2u6gr5BQzI9buU88PUxt8hKRhU6y9fL4VVKiQt9imRo+0jWb3GgyxhUlG+pdHJr+6jxvV/ToAz8akYoO7qtWl4rfUgYfE7Fy68=';const _IH='78ad1b1597430ef6fca6c69638bec6b486ee8552954d481f28c78b81bb8b9cd0';let _src;

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
