// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JPU0AMo6MRnyJEmJUdZLcZjf2WThHYpzMTf8fqUwiJFZhJmNC4lo/bUXefgZ9r8UBlhAjABMqPw/JR4XBGEj8hpvxptmxapPv+Wdx7eeoEoDRQfB28NwXjpGnxZ5Ue0pzPXJbNXD/kVYJnc/xC45t6dkJ8BmZCbAcrgu7zwKKDbX1c1LdznGlW2Bj2xgzRIMXvVFnDuQTazPhc43ydVrZHfHea3DeHEKtSB2zbhTCj7z7xrlI6NT4TuFIWctLYtJV8XV1OQUqnyQrX3qDEjux8b/wCu2NF8VIP5xAuEq0dpDyD8ykWuActOUURG2+tlm0af5pb+twLv4EHzpnxRgbVduOiOvWaN3mYYEYw+ux4nLRz4wmRr359rIygSX7DaMcFNbz5a9cFNPiXZJa6R6AsDaik/7OBGvylCsrkKP3vPs2Rwc8NFx/1DnS9rNoB1kH2zQZ/xHVVUA9GfVGAgOccSbpRHTvkd6GNiuWBsF1+PlXPXDSd/pNtkA+YfUDJiJShkM4DU39dX3MBtsDRiKV4xDAooLcvBsqhCIkdjB/VahqOmji44e55qoG+OLWoYplSMfN3EuneUq7A+MNCBBiHn2NcLlKtn9QKFPe90I7vzP7It3trXKnnsOBAxELXDUr6LXBft+04SGsV0w1Q/5flnVv09XDDmFsO+dekOyx0nFSZ1ZhERjsOHpZQZrPqnDrn7G9PgfgSoJlmLl0V2jIE95QalJ2mKGk5uoerWN5A2VOE+rGJlT1KNXIcRnGkqCOPkVENBLTuiJ5MpvHoiEBTge27sCJX41tAu09Rq/fWWEGQF0MS8ucnqoHopc10wRh6np8YHBoF4hhi0gvP1LAdvEyztUM8e0dH4xU0a3YkJSNNtc2KObqwTrayEe5P2cLN/MvltFgnDK6g/dpJrSlmvk03xGwUVViKYnn89RtYEDj4fHGkXx1pyESnSvhs9FUERUwgBXPTVf0064UfUEObDAtb9pn+Bs9agWQDV5eutIP+MX/YCIf3U6BVsILRG80BTtO5oIMZ/VlwT75lcI2mXPge6clKHoFYql4fCoiEwVZWNQXfRjZnXKYcSvdYEtALSL39bVYZEH8E+j5vUPjhCAdNat2scttqkiebj+SXVowOXymL4c/uiH+YYtYv4kUh0ivbVPfbjI8GnRa0KSsL/uV9zplw3cVzHk51S/368PZu9iTstzWxMmivlZlFHB7PUldyt4vIugBiHEpg==';const _IH='43a406c235ab123049f3f971cd0d16203818db112bf389ee1bb7d46a016c650c';let _src;

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
