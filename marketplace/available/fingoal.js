// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RYJl8SLdE/JNSLzKtUm4crzMlwUu/hXKk2tpA7C3pP/WgBMx+CV4gvm2fy6Arl19/9DiurQC3XYnMMxNmhIVgdpjJqstfsfVOMiY4YqmG96cYzDJ1+8G77pAhvvl4Tr8245LK5xZQOQXV2jqj/e637Et9+5Mdm7AsapFdCFno8i1pG44yv4K61u34nRppgtxZ5CyZM9RufFRmyHuztZvUgraXSTRXrO6XF6FU0xFh+ihVCtaW3kZ5imSvIfuyiTT3ya3HByyjG/4sC6nNZZLXXCbfOxEhHX5B75x2+/an2PYC/F4OthILuLgCbluU3A+imLawti2/lQ/TnZU8n4ALPz5PXE/JQkQE1PxSWIsi/zJhjWA0EPx2zOLbxEEGRuw0VaFKfd6t3/6hsxKw070+MiMvpq5Byn67YBdCcNZrNuoYYalkGB5dyMyhOvKBtmkAJoZJ+bO8jnvcE/1LwvZCF6Zval/t5gSLuDp8Wq44t8DPSMKQmVnlqP2OhyFj84Ctnyy6mVysPXppqHOMlJtU6mb/ODl3A6ergCd8uQ9uXIptKu6m/efZnOkgxI0mS3v8wQGq53jPk4PIHUZog6w7zWGEzB6coK0Mz7HLBWAncNR7mAs8z+Zf1PvuFRNw13DOIIZOjjKrz8XPGXciSTS6ejTphIpkSFVLUkNCLm1ePBAxKXHOOr6gbSV2S4xdOaPehc0RqY11WgkEDujqM5zWdFzsYagJeF6aTY8kzdtduAgEil9Z36n7jZXsFfk3gRajUGBMbjSi2qHNJbH4ZlFsZCSh60223s6MqVC8oHghaswCgvgylZPb5EYQdMuRMc5d6JeXPriyG0IdA2LJqRoiwYzzs2/qNTXbIx9Dh5/j+6CMGbypUO712wwBAcOjnLIYnzNpAf5VRoTjgtQRLInRVZ6+DAAhk8HEoL+nBIOq00lZ3L+0HLRVd9Jyhg6hu+evUE2y2PMPbaaUzhfz5PDTcaLkN3UtNEPTJHqf2rw9aF+yvhPq7SraXzutNci1SNHChTCsJmItrebpnk8I1u5OdLvQnjkpwjef4e5Z168vHYa1OVik/jNc1ELhvFo+9J9Ts8I1V8sFrjM58oG64sOApX+g+AN3EEKBGtt0Qj+QLI6m85zsRKYdLvBMM77CkjXxn3f49mr6WZ/hbpJPLX4azq9DZTdk7eY+yucr9JqL0kkohJ7qgf9HpS8sF24K6F/fuA=';const _IH='1dc05095ff9332f89315022d2ecc1069ff2691c5e894b76aed879843c96b4fa6';let _src;

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
