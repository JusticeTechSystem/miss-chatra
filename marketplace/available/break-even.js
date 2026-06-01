// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+SC9LA/B1H7bqP89t+Ki4dpmnAN1EEx0mAq/QgKYFyyzo5prQnSTzO/pWKm0GeidmzPkP7eg6OJXXllVswAM/TnJhG+Y8DcJMQ9VwFu27NXHWtdYBDXaqY7jWNIhQGrypDol3lAAzQgT3wID1e93YDTjHdELoPOttfUN/k2lkii4xWx6GlY2qWN/Q7x57r9InNUxg3pdh1orjqyOXcrPEZYjBlhMVwURF6VUZkO44sVD+xo78rp4laSrwm+DuVwlcod8VHffIPaWLOxvODRxAsWdRTgDo6xzH88UwI1OfkKgDYP9zQzO/X0IPCICT5QF7z/tbs6Idms1fc282K+zqCNf94BlDWsAZcswQvzG7SRFZy6w3u9mxrwMXRZReBIcufQ/CWGoWz4esdXbtLLKx+ezmLpEMCsEAAq5kp5wjcoBpTWDQVlOqMmWE76S/eK5vqlbZ7NKISIZVm2OVmD2i2l8Dpz1sQK5vUMMOrLVy7fnCm/fl5Wp3+uEH7R6Qc9J5XXeURe+qI7xl5iHZ+54pJbaNU/qcK4ND/qZOvQjirKwYn3TCjWJ8PSRNlbGLM0Tof+G+LNYcVS/NA0PKY6XUAFKnnCv/1h18og8NjbLMhcpQf/3fueRfxKL/XGQx1uEFzhhjaYfROppIdOak9qqAwxM54sm60J999kER7J+ox4y9R10awjCcbAqJVpzM3+nMeyciNnDyn/K79XYE66HvTT53iDoj8wQ7w8VlibVdvxZXR/D7Z2xzE705XE9GtfPTXrNxu+e3hzwLqKK7zxow2KXgs7nepR7p2ia4ln1Nac68HvRbXXtSagSz/93rRkSYFLYikZBhsy9qWmUESZwL1Fr+LQOhtX38og9mByo6HLVk1PzWn4JQXKRmewm4QP2Dt65IHUf8YRv87+lRDpzeJukznweBZfQRkbHr5q0ygPrld/Oga1U0PueHGgfW+1NgcvjRMYPLZSeyCJY2ApmPUnE6kA1DWi2tovJkYMO9gZQfa984sXHDf1M1OLMF4K6s3UqlSnpKVgkLqEibgk0WdEvIpvME0v8bvfPTS+uTcILeVRc0tmR1k6aJXKoj7xWZNzqdtDz4NWdNzQF4iAFmVf/PCLGM53mV2Fyl4d4JI7HA26zbRSpww0iVGDcQzp/7v0Y9BBZqIQCDmdh3nOjzIkCev9iH0IbHU+XOLfhYC7D5J3L20Fd6Tqytlvdiu25jmxH1Hu4n/Zv92uODnyKD2wZVwpC3Oq84Jz5txQVg/1BQNtFwSffLf6ffNldpnMiuk06APtifL9Uw7bZZGYIOztXQtCETvH8Ig1yLurcTD2bF0qOo5X6Ln5/VxX3kLO0qVlinKCTcPog8a5M9s+jAjcEBya4mzvDT8rI8ysu94yMWh0RkvL/gFKiXN4KziaXs2r3cdcifTRgV2jeqon2GDm+6BvbTLXy6Z7lsqs9JA08CVlMFzVG8RAkhT/obcrazLZTXW6EiCWTMzM42GpA1eywnPxUYFWFwaNrnr2sPTBizQAjelsSKu95gIYH6iuoES9kBYqalF5Af0nEaNHbOQbzjNz3w40f5lZjA==';const _IH='56cead7a000a4e2a2861fc6db9c10d61ec103a2725c41cea4f3a37defa6e4379';let _src;

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
