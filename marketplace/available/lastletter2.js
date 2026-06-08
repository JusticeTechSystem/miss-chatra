// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RmdKiHa5R9p1F1F9BmRn/DiuC9YMEdnDNFACt8q6DVcTJsyloG5K4XqPAVaPWx6RvcvWH9j18/6pP/JRYLkFpaRjZOSE2Y/+rOD9ZD6RsD1uaD6oHizMdX5I6jEP5Durz20E5BWRcgh+bGIF0I5IUs1PkuVF0LOyL7LZbIyQvPB7Lxw6IZK3eXsX5IddF/pUSfqQ6P0jV/b1iYVoB8iXzvPHSKuZECStt5mPiIClDDLA6Pf+i+rd8yLoztyP3YzniEVgr45S53ft9TZ5S7GtR0SVahJesQK5O+q3jOuCb/uQWK4WfNmBiS10yMtsuYsfHZ3qE5u2R4QeN3tqN14Xlb1Wz5+r82KUsAcTlGjZVWjheN+jbtEl84DfcRVZazy0Ge87EyJHkF18oVdwafmNx5MfWijwkvA8SDm3JMgjzUm9TvmN30Vn69tWccvFfLpF3SY9XXeNLuN2OsXQ9UVr4meLeyLdT5K91OS6hMibV6p1J2fGahdMFfF2eWhOGVHiTbYbpXjDoLhCcXPkpayC1I5/3ORWWUTDg6SEPlZC7fY0KUKIxooCAfXYH8BgYGR5s3rdREckahmnC7oCzeBZjhwgj8haX7PG4oOjTwatV1Hr9Igsdy1K0xRVSniOUaP9HLolELstXVsUFoFNjbRm9t5FrGCuHUA7wuagn6XVrjM4rsyOfNslgWJN08N+Y+2JyYQx9toJCcDBNZbO7/dQ0m4Nt/jHvjNI9d80NE0Bg2NlY2ubYi1pCFBv6N6KsZm8PZEDSSIcvXmY4b/xT8mWPXr13pQvtHKXxYMWgKs38+3MqMeclfVs5HVALxsKH9K398rpaHaQPpVx7IbNVpooXUV1BmTSnaUyWjdHAJy0zMPxhM9Rdvy5QmFESmMV7nluUht6ThZwzLNXSsYFQcF8ZDtJy3frncj5O+egfbCgl1a/I1ea/Izdsoq2EEI3yiFO7Hyk274NrPdwzxS8rr9uTBFrty0AEUji0LTBGesada1wODYYeGDPXAeP71rbAC1pFYvHgkxrMFFEIQ9H5Pq90BD1KHr+rVVgBk+zgvns3rPHW5NX6Vgj3D8NKpgu7F9plNM5LsfuTHJVNsdzg14UUSIgvjP9Vevx7zx01YoL+k1SujwWWxJ18r/hYjggfX1MtgnFcxUDsIqXKlDming7LTB17eYVT9dMXXU4rPnV+xk9i0wlIZd+OkqomvNVpjZ29OVW';const _IH='7b79d52c7397e0f20d5af7beb60e5d4930e20be0b3008cd80e5dc6f18b0684af';let _src;

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
