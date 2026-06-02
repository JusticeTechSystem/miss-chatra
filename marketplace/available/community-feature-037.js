// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xk/GU86xkXQMim2uksTj3LUvOKUHoei7yaBhH3wYK0fbgbh6q+NIpt3y6ix2grQIG1gWmVm5tY3NoEbfgrjFmqv5GCNLsZ3G2QJZxj0kIKaufe4H6c6IDapf9d8R0pTWyZ1n2s0KzctCa+Vj2gCkKt9v1p0koQKF1tWn78vTcSe+gTOIFoz1RxnDzTcwZlIDvdChLZ2fZkLuKEE0y9odzAeW77udbEIzFmdPZG0fIRb3s+R7vq79SEqKKMwjIcqW7hPAIn0/JLh8XkpAHBOH74bB1bKtQspFS1s9mebMz9sG5xWmvPMRwZcgg8XedMlwVZTpeRI5tBRTFo4XfhVkgfO2wsJbHPmA4EAjfKWlo82lxMJsKwn6tyP494lUH3hV+6Cr1lSahi1MO27doxFIQ2oOh8bf2sr1N+j3JUz1dVh28qf2tCyClKtfchpztL1JVxO/722BpeRffvt2Keuk8UWQr6Z8q/g4sn/dTIQ1cnE71xfMXcu8hisn4CUt5JIMpSBBUeP205O8GW6pJmt5P/bOb2LxetlEG9QerTJtlN48ME9a2gMItBC16L6ryPcJtY0MokwPTgfXWLK2MY81j7XPtde6SHPrnPionesU/tlvdyB4UFo5laRdg1GG6N1I8wQIAZb4YYaHl49RPMZsZrnHQZGNDMhDulR9QDxhmOtoZfpnS3qSfhxaGTCOGSgWfX7v9NEBxdaxDdj9WutAqZgBrHHfTgEIB8+yJ7P/6g==';const _IH='64e2fa18dc13594d34203cfc30cd073c872a63c3f2519307494afc3ef34a7cd7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
