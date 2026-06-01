// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0j3zw3+WwNJFWJD3EMe5O7P2hBZE/jtFn6zhxpSbybJPU3JrNcgYcrfGWVu8FYiI/Abljgp8fcBV9iB0VI8F0cie5czDndYl2B/gHHIZNNDzKFqDPGXs6qqc2foF7HsiWytSCU6t7ssjhQ1zHG74WgiCaYn0a1J5XjkI2HZeCAtUVHFFzU1k3i+7tgbHAoRP1a7fGPQwvagd8pzkKemvLux5vTcPQkoyXT7bB8kJ38Ri0BHgm7SQ2P0Ii9ztbzTDObqLobsnmhAKPfXKd+4KPdSHLAvr+1kG2YqieviGE/O/apN98j4mBGsFmHpVieaX4i0goZNpLcb5VzoTZZCIcm+WnWEL4jgs868M0OtedGWFKDl5MOqUTuMfjj09aLPJFTM5VZ6dWYmARY38wFTE2symL5cRD8Bv0BwGwtqJZ9LOrI9TRoTKb/dUBdzZ89KGVo2sQ62kJHQHZKnkGP1+576iIpfJFU5/ZxIcWSXGNnZwH139j/2PkIW7FPNGR9u0Cjd2Y9cnE6IhRc7nKajoyi4h+rdHPZ+qUU7AAEiXCfhVFfXYD7fU9Hnln0EVvVtVC/Q3m8CHS8hgGnuCMXZmr3Q81w3Kp/aZj265Jrc/Pup8R44w+Zq7Y4m1vkhWWhKjTMpt7Cz6fdUYm6s4vRC3GK7vtkDLcSaZXbEbQBUaNme2Rll6oaJH1FXfETXivH4Mx3ZUunoFa5OvNvG8bAN0ZruFlAdQxtxDyhumEVOWb+oWcOg4HBsWpHEjxAKAeamhZYod6OfisHqYMLxwJJlS4yaNHZJAquHHfc+1hM9DOFcyZQEzYEBFgJcQmD2EI+0qGYFc7ccjK4ciBErdEK1U3BmSaidbdOuDQEnP7+bO8kMMfMGrHWyHaSFcWSdtdwZQDdOv1A3BfcoCUbhjo7XUG5C/7eVZDmrqC27a7fsOtLSqGxeMCNzxbts9vkpMUQjNoyZvnIjsVawYC1vOdiAcB3u9Om1q+YuvEQuoyutNGI=';const _IH='d792c33a2afad290ecd70386d6a3822ca87a79d3c5d33d93e44c37396f2cb5a3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
