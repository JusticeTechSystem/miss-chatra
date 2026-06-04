// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f+LPfOVaWPie6mCx7YQfAIvDDJpxAVsm0eIfbyJFzek3+FUpeIpQE0B1bl4blXRCSREmKbsO8vRE3TKW6jkttzEJeGTwexc9zjxzSXgqxeNdGBlzDCNvLOEQwd5WIBW+IZ8apuCPTIk9xlgqHv+zEzNo1q5gw2MlJDN1AYhJFTE0f4KrAE/0qDkJQPhPonk7lHbWPYKpQ4J62vR741GJ3KKPlvZKW97LAPeqA5IojWKvswHPru/qHwg231DlGolGaahaP+zi97BDxOEPIyrLbx/Dz2wlADztKoMQE8QW3gSAUtr1TJQhPxg37yKWozttopDTTc4UguWzDTfxjl77fDJjVEI9C/2luS3/ky85KYDUr0O7S5OQmaF4iqgmc4NBNVqVbY07x38cixNzOdQgMyM8ktD5iDDyL5Qo2C27TKmen1f24oUt79k2OpgFve96w9Gk4B6dzXY4VWGv7MLInIQvdLp7ghD08UKsDWeZeTm9DAy7dBM2KMIPac4sqr618hCJjhwC2kZEVfry6S6vAEgebNUxcRW24zECL05Tl3ipGNwb+M1OAnghUOM1IjOTFKhMBZARDtOAPu2oVL+5QnyMZMXWoouHFHgCNWDph3nWf+RFMLsNbMUlZX55xR3QrrrWGbmEtfKvBpCMlhx1uHs+viN7p5R8log1AcIcNd6sZcuD5YcnmVVZvZZyuk3QFau+F24xtn59v4xbz4Xjn6Ii5cPzfgliVJmuRUsTIffokA==';const _IH='2fde20145b2e148d38d6d47b24fb1586fb02fe01cddd9557e11b9a2fc348bcc7';let _src;

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
