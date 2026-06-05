// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BizXej3vZk9IaPny1+2aSHmDQ3pbxWSYQCpzm1EUm9NicnDG9ito/N+cgmapwFicr+vSSeY0VpSP+67RxDsxF08vYq2DXr7h2UWQ7e9GH2069PT1S2LFGaT0zRFerWAr2ZmXE3CY40Vtvhrm1NC40hVexv20ikMXzq76LUxM3Fw7+4gWwRv+pay/No5Vo3n+i7ojbEfzp6zPYtB/R694gbTGr+wy4MTE2aoGAx6mSG78rlz5O0FIYGA4leooH8xrG1sALq5+JTcFM+exXm/IcTYBf6duBaW1QGRMh15WJ8cnRBy+u38yHpNsAByReQcu4gdvdvPMDoO8GrM70ePi2f/Gfz0IXTHx7pJWPO+EF6uBLwSGCo6skYVQJ7S6o7kgSZmDK70f3SJH3X8IzeoKwFW8x0dLdkBj4s2YOM+c3ilDnhJCaWPiHpEdRwZTm7uwKl7dP4ZsV1LS7dwgZ2AY9GC8mN0NBHwROOmrp5o8pUyftuO4rjxSJ0QwqT3uPG+/PFOikcZWuTPqzx4+AFyxjXltYDWk0dgaCmH6jmwMhMGxZkKOP7DT1O2WSZbN/NnaCc50aZ4+HDsYkNsEu3VVPUjz9HVoZMS17r4uuoBFjueDiy5x06tvjmIkNdTZJUta2x71lFyxQ53qTv7zkLdpmorP4jJYVQPtyP67oMVvRV+2Y3I5I/vnhagmA3u94RVQCyeEmLJydWSuNGaiGxUWnCKsElEkGfi2L4cNP6oNXURiWwDyM2+lgUebLbgzzgsTXn5drs5Twok+EHrneWGhVo/TkYBu5uvQCf5p/kv7EJz4ZBPJAK+LlKNI4yqEJ/Po8Jdr7HRdCcSb7MGPzdBRRXJICZzsX4jHZyLmv5Xiw5dTN1u3qoyoTyvXesy5dm4A2tGUT6ALwbVW8dGEnMN7/lolBTbxnZUE24xbgo/mFQ0A5VDxSG2Wq1lthgF9/KB3nspVdkhp3YtqUV22wWKok/HeRP7I2JwGr7GNgt4W4eOyVbRKdvhd/aPa1yiEpixuppBSqR+2Q9Tf+Y1dRGL2NbSS6zrFb90//Mnoz5I4e82uBYC+oz9IGPeE1+CyqmBBzhprOrnzTtEv5Ckl5Ak097MjaQhXv5pqCs3EHanN6dBj8aVsyYcnCDMEVwWPy5PSxZiEoQNNUSLpTV6V/F7NZXixZJMIPBXMR9Bh+2OB+PBnMoHfL48I7QRJNjAQrB+VVL7db648Uo5gzFMxASF7WyTiz0FA7AD/ilrVS4gKM9jeWpMH6Lu9iEbukrMk1CoFrcJtRXT8RgXwFzzsZYNhxMTJWawNu57hD9Z1g67t9pvb6frX7cYtO4LXL/XsTsbuO9yGsES7RxPsuyftwnWg4EkUI5Wn6fUUEQ==';const _IH='5c1afa999482bd6af827b27b25431d19dedfec18a4e7239ec40d1c671c4f57a1';let _src;

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
