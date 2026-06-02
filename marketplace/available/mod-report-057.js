// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TcQzPxWG1pdVXtgOyGjTnJnTx61Osz7F1WFr5xFlGfHiwf9Ge/NLjrjPShZqRyVAS7nsGMLhi65JLL5U7nBeNW10owD4Fmhvkz3VtCj0hfgO6DoWcRUEDAzxBYWCKey9OS6ZV+j9nquOMIBOuSeay5Pyz7u6G0OmMlmfxzrCcpwmbQnZKk6Xvqf/EV4Rd1iwmKXIs6lJ3bKfFZdyYu/ielDHjXR3HEmBfdfx1W4b1XMTMMRPrcu9XZi+nmLN5o3e8uSEM8w9gM5CLuav1CSiXOCnRzOGNxTSrGVif/fnf4w/GTjW1mLgF3FHfM+3kFLZvmKAHARgkOutBiIq8P2wdSJRndYCnniLlqcpOY4vrAXYK9edwmYkLe4HbZviaQ7mEcqVjsq7wzFMiUzYjPCL8yYPTyr22LlByPOiG7H9PnXoEuJZC/hlWIfuqs+M3DTpvMkfVfWJHE16889YjWedj02Mw2plzV/05jfttkoaeTgmL6DnavoJoKeXu17onZWTact6gI1iEnFDUDLxH06S9JwV0qSTfG/npR7pL/iLAyIdsQzl7qTFmO3Z/mgUP6QkMOcO+aQ4wdnRManbeJh5ro5a+Z5at+LSjAJU0wNfJ5aPQKqVoM0OnXDm980Ueb3Xw8t5lZs3eN9u8y42nS/nx9O3YTqSSGOro71sCQnjDs6bnYSrKP/gX5BbvdpsCcbi9U1pBB3vCnmIxf/0SoaxZsRwnJQvidUJAcQd45F/YOHdj2nizkSDJODBfHBV4GzEGD15OUJGdjnwfA1Csq33Kn1pp/JWI/V5PGVbM4Tonyb79BbH+T1IH0S8Xfivc5HlS6VYz9vGW3IHk2Xsa1yiMMmx7FTkb8ge4wPREV9qHUeMKF8r3aMH6yaGu6QOSY2D94pcB8rGN8iTzIDQflni/RCYmH+4gFJJqzeSModGFnxPY5PyKbmPuoDq2bPHbLmksYIXiUPIdqV4+oANfWmRgbx3d4ReKB1gOEB6Mqy+H2A2hsew1KNRJg4/AR64RdlNOdBGFjTeBtlASaQqiPsU4D6dCacvLuGaAe2VbJH/9PILuWpStQ7FK1NY2N+0hC0lCqwByw0hAsUHrz+VrdXRkttIt4L1HkeoVlickss2K8aLNtX1qLbKnV2uCRoviBoWz/okggFakLJec+Cc92JDlRsn/BcpU23QmEpWLbyaLJ46SXLFLShujpg5LgV5mywAhXZ5K5QxIBVq0YEvVXCaqdVyuLhyiCh45sCHd6clw4106hMJDcjbDi0YtfxXPrrPB2Ij6Th3KuPZyDln0xQxWuNLNQFroTAfakHmwsR9DZ5BD0da/Gcpeku7Fm30DLZBYdB9wa8Q+jTBgYJuiPJLNOfX6mxPuy6H+QunK99/gjnfpP0=';const _IH='fb5adb9711cf1f371578d3b66e6bc28b1854af8e2e3cc97b4511d4fb33cee60f';let _src;

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
