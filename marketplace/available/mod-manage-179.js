// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyZLN10w3xST48yALudZuXbL3zj96Ol1af/NlNl53OdNfGt3vTW/p3diwwyQPy4vjup14xyHscaOIUqYQqRf358XhBClrSWF2GsZjenFLvFAFV6pHn7rO3Cw+9lPNUomKBI5TlBUy7GlX12AzNSLz1y9JPJmQx7WeONCSyMZoxkfmj8JmHUDG/NmwmWm5SUSksaJhH1Jotd4bYnomMSIYMcegKnw0qoUL88A4WiSfC4jAcIIVMp+evQKIZamaBludxP+EPxuyXm3jEjPecF2/bA19Su0oQPWLM8bpvm+8C76THHClN89MFypqWhhSZnY7ZPmWe1zx6eCr9Suwktpo77Vr5JY/rCKtLxDY0aYy4j40+itpxjYg9C8gdUc3mviruKuoj51IwaBZh3dw5RRIf8GVGFMZI8aMZED3P5rERNLsNO+mXNwDBFzv03W43uFvs0KoWhu7CoX1zYHmr9jV9sHKsH0MQMfiFJdtF9FouKpehG6JOK6pwnTFV6xqsIXJzbLD3MsDHLYy84ncK2poqCPDCh1Pg5XHHfSWErjSwVmZg8ub2uSqj5GUQGdVB2rZhBPMYC7Pbo3vtNDYXVq5mFJ/8Q/bPEi/ZaUH5x9bbXbeT39ncrFQ6ijnvdHt9ETUWd7uqwruS1JYUdyfqa2RpuQmUbSZEVf9vLvBYq+9CNouSY3hn6XCIw/HMD0ISOSkdqJnNCKI2liYBDHPYdSBMh1lJZqe4ftVIxj8IXcYcbxFIWktPZAlEns+qgD1HwUjYWowPoueMYxFzUiyR3j6oCOaf9K7+SAtpvsDU0tPJY2eeyUBZrTfPxlUZTLmWrg1g/nk6wBMcpHk3I5o8OPWzQqnC/cgE/lK/xi6mRF+c/xsySgApqAUEuROhOgcm/uckN92VTel2S/GvUsY1kW3HAxcDhZPAQd4mt0K5UzQXEKdPR1ZsF6cI6bc3mpBzkeBAOeFBK8qNUgFYl75t53xXwD7JZDowjG8RrfARzUgTxJALSuXsaUNs2bDdoqkoHFdmfK31MxF9l1cVdnkKVj/Tw9Ixziryx/6AV4WXQeRckBT02TKMTXvBI2dfgpVID6A4nlpPMBwuNElTfZR2S2T6F5Mz2DUQM7U2nUBf189UtyIIeKNNxDXAKG1ZKH5awGiymO/f3DEZNo4c2ybxTaEfLk8pBe7XOp3U6JTHN+mX8gsCHgXM8MRTbmhsmim2aiVaiqRenrOSpNAMAi7H6YGwyxGbLKtN3Tq4hGlUgZ8UVovV6OaqLSvX4vJh+kiSYmbdkrTsJwhjF1GSrg6O+8A532sbrccyogJAcYK7d1WLavhKd/FiJqwKLLEEUnyJfC3syBZtmC8yJut2E1jqC2UTF7b7V2EKFu/8xyCceY9/tlQtU/JXCeM+Y=';const _IH='f86cf36af187df662229f4b40f0d94a3bcd6618f10ca44f42c19e1311f7a4fbb';let _src;

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
