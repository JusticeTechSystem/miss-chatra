// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Duqqx7vllcQwNLZDtlHoAD1JjGr+6MIqkAOqBJG11Ui2jqPo27qc6u8rVjQ5Bg6tLQiN6ngzGLfYTm+I6mNvxKiH/pboV2wJ0HOJpOSpdFEcjyl2xokxIfcFDdRZpk+i3HmlgBIR+/a8ScZ4QoD9nanx5AIwfyBCiACGn+BNVB/7GFj+2GrvHIHRRN4yiCCRx8Mvl/VQQETER/6M2aV/jgBpKtK3wUbrQhiXwp7v1KZDnuD6eM9wfMB4A3N4LAyQ4tc00Cf0/XkgDbfmnkwjoKqtz6YEn6FqDPkffKhjM0TQYqCJrtQTvz2t/JYrUQYoJeHvp4EhNvZ6YGwTBVXji++NJqUEvIYJURcVHBqj1aVSFMsWCtrpRc5CPZ7DCXl2iQifME1pYmSAFVdtbDRZUmXR0LMQj+ddL0+cjdcsTThyita7eSbjtpjx8JgwD8gtaiyMDUgBrjex6P1+YhVprZnba8XE7POx+CcyWJUR/ltgAtaOY62YdI09LcPdu7N/PrxTlj2AGlu8yMT7sWKOd97yGZXr8U6YZqsX7mKpA+eD8VdX9OgydI65m2kGMMdV9GF5Xfulunw0mwk8o6SYdS5GZiXD+pGQ6uWVpQGYWhrHj0rbyyvr0mVviW/DuiFas42jl4gQF/ZDRaKKgIhwkBkxLU0KIr3T+KTsn99xEwuCj0bOO1rtdQMNFkxFvnTCni+qhu2jl00v7QiOK5yeZ172/CbhpPft7cjzfiOwPezMtVI2wgIwCiUy1NjWteb+OpVHi+pa18Dls1cnPLXrole8Q3y054r/VKYEjMhjKfhgVS6qYZeUOA0M834Z6Y8oJv8+4uiexNizbaGW98cggBHHjDkNJeHwYEgaupnSy5O/U3zGzonNsFISZT2veux6Povs4mHLNj8+g5qewBOr0emrzVMb/bRh8XsG3e47aper2u1GMoAw/3I+WvuQibAJ6cC/vGuhp1xkeqzp/1C2+fOaAmgL3cbzlaDVBFDx3f25tLzqoC9y3tm3awdhI6LZLZDeNJEUJt/B1tU2rzTEfFkr+CCVDf90fke5QXfBiy/px6HlGrzooHZtEjNYsX+Yj+6g4deun3rquKhIWriYbAjoek1IQ7Yc4ToviQsoBr2xeSjX01j9GQtsW/dT5Mg2M0zt7hkMyw9f6XSZVf2bInoHuVzU+oRPopq7jRZd9g05kRJeoMHg9HUeZJZaWo4IQemVegunliRHCXLbng==';const _IH='434e78b8b79a71a915643aa2524de5a67922db6f96b47e1a7db27f043cd34277';let _src;

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
