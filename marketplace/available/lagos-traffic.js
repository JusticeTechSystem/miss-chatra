// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz5hdeWEcVY9RepivGGkDREI/AdFNen0H9FUDgWbq7BqbiFMaiKaf/fMzk7UvsCYvQLZeSQWsno29KIKj/NWEcd4c065ur9BqQS2bVzunW+/3ke4GiKRFqZ1vEA7fzGEGvlS5mG0ajjFJf/1ThjA6AXgqJNlTrR3epxQTEnEtuxkhL0+zGif34PkMuHTzg4urIH0+uKtbzAy5l61ktX+u5NitO+80jTepfDYhJE1rCRHVCcvGkwFawDtd89Dzwpk1Ef5nivttx33kTcKfsQiM5z23vyIJGygTnRaKqeDb6jM+SrVkAcREhT9Lbf8i613YoidJ2PiJ4QaVoyxgoG5T/1gh9C021O4/IdqWeM22uwRJw9V10daC8X9QyFIYvobqL41HO7tlgIrTSoTTvpVTca22sZ2A/MEEArpm04YjhNTnIkqjfyd6BKs5I3CgOOWG/Xvi83dyRSrOIY+V2LGHsImg+Xo0+L6l7twq8c6uzXtBvJloATiqbZBzgMzzooYjo8G9EKEJYp89byfn8RyL36C3qbihWp6dDy4jfnCDWyF4tYmra0vwLExh1bqCZJUGDLq5JWaJ6dlykESTd/zj4V3R6GH1uiCxEjBPpBH7xI5hohxYr/pHdm44wKJUNa6ipfjiVDiAGu0NloHQVlVmmdUz1qPwpQr739U5jsbfeDoSXfgbFOveQem5ppg+bWBBw7YDZoZzR/FjNkryGcXrJ5E9SujRzPLKFPApzsrCHaJGygJCTnOYfBwzNFM/w+WIXwKruKE5k1EPe2dghDtP11Lg57wPUyjItPDg3gGB19nQvNqalYtJYRhvGARp81HLc1h25W6k+iiqmTZpeNz/9cT1agu0Sscjnb/MTcNXir5i/D6XgwhvlTH5bhwqnYqj5OvF7rgENl7FD7nxae0nvLeVg7KFXI3hErCfIP/Tq0ieMWKdKqP7l2joqQkSuU1AzLYnE1jgVIYbFpRcuTKyW9NTMY9Tin/IU1CAzEvRX4rCym7pRWwM9/nQ0HyN1TyDlgyVRPOEfY0wjVfcr/VMRTM98JD6aEBP2bPkcHYVMjqEUUex+ygxWQZASvdsReQqObLQ0WVuC6hHiIra9lIEdBRBbt1qKZ55Fybpxf0jmkhJslK+jehcabuvGCx0Vtm0uyNy9l85rU5xGt2dz16SH2Nulf1hu7Hp3AQEa5Oxij/bcIXSaOSOyv5n0ocBUbsZhtZjBZu67j9ogLsCPjCSfwx391a2f2X8QyBAwwuri16VwrBWZlF5bc+6LnlPcHaTObQZ2FZ8pa14EkCy0PxrdBjJ20jYgduIKWXuQwdYDHrHrmPWQ3aPUFpIAu6fl71XID8eBpqs9T//NS5BHNluicOmXZDwZX/w6T7dQ7dCg+QL9EBsKte3rTkerUHSRDmWPVImanGSahdD1DyY+hv98PcbVfp13MMFrXt4EUPt17zkpJTAzN/BIzAZE7YCOb2oYVSVkj02+CwLnUs4GzYOfA9AzEwLzu4mA/vx6KSCPNQDcxASOmfk/QR0FrIqdHzfweqsfMULkqyjP4aoVWCd6iTuly8aGAYi1/kz18vUV2tSRbO45FCqXQ1Jvoje6lwxOGVSJ0cOGuVzhMcCw2fXdT0Dhyv2G9CtvDAWyWlEvnCyzr0L+fzB4z0hrZPdA1xEoQ7bZ1mSmmCJhiGY083zU6A5B1zL86yJCimipighCdIbtTLDjo=';const _IH='2f1b89cb50b4f46354ed933813c0f0f6b8e410bc1eb22b9a01f3cc4f14bd7abb';let _src;

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
