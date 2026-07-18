// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqdj7CjsuulM14e3AubSyy39HB+zIIL0i4bijsFFnfOop6qY9vzC6pWeCnEItok7KeSrbQlOJXWrASLOWbk+wG1fXkQSCWOaCVwbovIBBDjV+6PvgulnlR88Gi2qvwOG8NUeCKQgg6dENHrAt4YOXtpCBWqhMLLIWCXTirPU1evv72lwNKoI7GGsZXLx7Ylomp6yDxkPTUCXc4zxWyh9dUAgvTGqLD/nx7eicErd16019Ed85rWs8A9H13+U6l/k1E2MmTerSoTNjl1R498LRYCAjwg4DwuXH7ZV+3Qw1AmLnfgh4if2lAqCrKG/ANC7pHt6mTVy19OAK/dPtt2NMqOPbCopY/Cx1Xj5NGgxep4E8rhyi22VK4xcV/peCGubknzWJidGtiI8AJr1F3ux4cuoH6ju+IfzbmoPxWbrdNDqDRtXoIFOQdJyVVbcSTmXNcnPXl9kFqOe1tgbVU714hnQ9yH8VE4VqO4URr9oqbS/jvLWMOSeJLfr8HIZLoEaBYDK8YtkvTVWqzsXJAwihHTevH4r2LsSJr9VU/7lB3BaPr3nCZStKtu4qH1rvtGqHirGAZx2hgbRIXlOg7DiV/LGtlR9c7dlUIMxYTlt5m3Yin80lNkmMRRW7cTIzrB9ns2/W1BfGHNl0W3zgjkKsjEfqmvk++R3Gbt1IIsJaB2XuALSseXyUYJT1CHWfNgwgkJygzwdm2Z8DY6ftC6HTIJa4J+sU7vQOU94CCkYxvZ+SW';const _IH='66377f48189f58cc57945454a239747d4c6395742fab8a4af4557763e3d076d1';let _src;

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
