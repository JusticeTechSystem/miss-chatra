// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfrxVOSwsFPTKmifviEB1BhwKO1qxdCIqyIc0Qf5lxn078mWUhHi5pK1Ph4Wg/hkHGpOKHxTcC+lWwORYVHjaQ+TAX5QhZS3VmxWiK/ZU+/HvUW3xO00nitomb7pGdMpDvR0v34cTBiHwPaRT+ocR3eHJJozHd3pWkGIGi9nbez8rxc+3A+MPEEecU0/BvAFRG284cPK67rmv8dQ93Bg5F6hshB3vcfR0gEdFuwLRyVnxA22UsZm8RUSGJsu7oESisrUKgl64AQo+DrahvCkm7jx5yfI6VgVP00+PhaiJIL51oJYNzyMS3cgx7i2ryI2HIV5tVcqyu8IfMqM5dh3DF3K7a7yVrdxXZWSo2F1AMEga/Lc4NBylH81IchEPrilecrI9gPOzoVDP2phwm7GyDcL/7+QO68jnaQPWnGibPWql3bHkEQACI/hhwg3N2XmoOH4JGOBx38QkLqP6MSN2G6pQfO9vj23ke7NDcSS/A+NgkJxCHoqjSUmbJzP5GfwZ5wQ6kA7cHa6UBcyE+Cs8479gZZ0ax6LhhJ6E2zJdsvli1jtb1t2PR5DDaLmHah8Uz3zjBqme7P3+c3XudVSu6lLxbVcrr8fco0rPslTUHrFISGv4orw2WMUeBqmc+LlhaZ29vjoVnkQsXploHyrZ6/jyrmYpdiTrvWCoZKC48tU73R9AgdRwa2S4T8WKaN24N4uQvk1ndDC1ndcaS9MqMWGeXYI4JcQa9j5leBoX8HNZUwUa7DMCHlWLaNXaP1/dehCZ+Oq12JtUArY577o0sT/k97zdMgmXSK8kvZaA1DVwcc9b39W9k1+DV2IJKKXtv11jfNU3DX19kIwX5xpOdajruwQWdnlgdvhE+rIQ1AntSzq47RastpR2p5c0qpVpFdsT1MZ0yMiVqiJaK0o2Qol85bfI99HotHQJp8eFrz1fqE7MiVa9CLrwMC2oKm8oALMAMuVCbQsXmXZ3b+SS6Enf9gXMbGK7es2FFrjoUtEz7YM2Z2b58/TRxrfgzje13FDVUcpxVoNmtb95Quy+AH+I4RzEsT5NjYcjOvWgr/y5wuQ5FTiY5joEHlZjTNH+6EV+ZS1EPM97GpScHCbfqA4q3MPW/m4TPkVCVon0oaxcLSU0FyuIDbOP98txeQeZu1lH0UvLHdoybJBXmABB2xioO2aIEGsuulJxA7birmZtNarLiqAkS5LHExLeLgDGLmrpoeWOHFCxLyKXRn83GpUwPYME7p5+hzgFuPqiveNmFQp20FUaQnu9+9hKioa5N0G4AWaMpOLARtWrR28tCw0g0W2GVQ/IQDa7JUOWLx7GQOICANI0eaaL9xOoUZudqmFvoDqLCDnw3HKIXeLxvD3W+HJR8ZYO/tmU+oL8=';const _IH='90a8cc5f487ddfa266102549b903557b9ca0449bb7098d36cd9d5da3f00b916f';let _src;

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
