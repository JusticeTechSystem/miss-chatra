// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E2yz6fOlXCB5O/jWJQ7c32a+aqD5lpskNyY+naUDYW6b8sx6OTU0B2X3UExuVErsyqG/dFC1OAYcpZj4pckdCGyuRlDm7j6CCmAuNDUK7i/NGusNtRwyiNyRUC3knqWmRUqLgjotfclZTww6x2xT/bWrJAc/+btD2SIv8dlvfwv6fpO0KSsVQc45CyiB4rHxMeRHImrrn0KxogM17ibxCbdKgAMB7iBssuPrma+Dv7878BpnimvYe+O90LV9mNoSPfqHfLeMPGAEdlC3WVc2MZx2yPqqlW+6/O8a6T6NbKgTJCiaWr+NnCg7u9PYSb2c9l/tAraKdmLwI6veugfv2jhbws9JDHM4Iz9E26OfrAQdR98q6/XDQWycERQAGgUnu3IMe30czmE9qdBov1CMip+m8IWKWAM8HnPBTV2liMkPoG9qsdV13y5R8LFMbOl3R1wGYdzN0mOHX/dUQ/bKbiUtQu2M0j2EjTIczaJ6FfMzyY4jpe4OYoo0psHmcRMoChVEcNUxqp7Kml4qD/1SMu4vKYRsDhiFqeqnMpLO+r/CR+liu1jI5pY149AW0lvQw7rOrfVdRIAbOSCNaCDfzHM4kKFyKwaWxOFSRrgub1MXq7CKodHB+DpgU6C86GU7HgceszjRlAYFPqdwPjRDEq/a6XZZLkLDA/nezzOcj4Q9mxaZDln5QIToCFdN0wu4XOUsTkCeqtQ=';const _IH='654f59d6c836a13942a6c7cbdf704899e08661f6fdac1aa641b2ca070003621d';let _src;

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
