// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yeX8XBfXDZc2lLyWtntBoXSHDbtg7McnN7hX0MeelfA04Ix6NN+9DfLQ324EbfTVtV8jcCZGJ9jzFKppcoxwL99n+T6wKfv0t2eG8Hdoc/DYph1mmASic7MCpqt1Xqd31LGgk3+OJ2lhRsjJnyrF8iwyPNxykCTp/s7Pdew0vmVAPhv6PrcRiegGJDt5BLXJaHpgw4tPM3d8cDADPb/cucFUkJYZPHwQ8SLBSY+vPCHaII6j1TPoJjigQKWPV8aLq7U712CCMzG2e8RChEs6SSQLiuscTR0YsH69Uc1ycKZzf35JQvd02RE0jTE48QZlJIZyLiT79+2+tBeAI5F9JI/zBpRKi1IEZ3kzhZco8MkgxMPoXz7qEnX0cIp1vqR1DeN/9gNItf2K/6BlBd4YHf2QvU2W2eJ7oyEFqjz8mH+OR1Y6pdQw14oLtLeclZBUW3JV0AhTyEicB1RpYvut+wqXKaSl7UdRlRPpY9YNaFRsNbEfmPFah7mUvWKar1VpE6rA9X6EDPKh4lMYzW9kqtHg4B7kG68qKU4J5YMLn/bSBGPE008+MZVuhO3/P2Rj3+qa99drAQIiX6n9ra9hqI9SNLKg4+cQR2yH759Zts7b+arZ7kz6KagqsTau53Ai9nzwM+FuV0MgD9YKs47f8Kxr79axZ5iStqbtUQHHUtZpuN1aZKcJ79Sxzv1uaIBtWetodRQgU4iZDsvii2gdvjgeRkR6qQuZilTq/XrSzfcJSC2yc++3FQEa4gK7DdoQNazkZQvadrwW/jAqi8BJXa7YP/B4bn+nxgiQnQdni4l6yJVLdCDNY7Ccc5B3u187vGlpKuafe9ElMkW1ZFH8BcTBKTG9XikrksFOycfRtVgQ3bW8jRpQApzf8d+KielpAx1fSPWt76YdeGwMfoTVAXV+fnLs+I4AXs1Nde3M/3tLAA9EIJ0r8iqZQj0=';const _IH='9574008a79a9d9dd71542875da0dd4fef27442752c54e21816f8610f261f4ced';let _src;

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
