// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AAiihxi36pSx8xCUN7ug5sebiNfxtc7Mo047ro3S3e3m2ydsyei+1WblWruX7svYrAysSlrkRIO5egO7eelWNtVlLGQAK60xUwDbKGkPfeQnS422XbS0FiRz+YiySpT21pXw2MoczHAnUu1KIsKmve97kEZ/J68UqtfZvH61JuY7cOCrugimt6Hib/4YPWjKm16IMy1ulJlq1R28T68T2+YyZ6/QjW9124bDHv7ErhpgEF/QAqTUn0yTAQT4DgBBCJIu7FXk1rF8agtPd9vwUokwIFs0S+VJg518NhP9upkf82VJOcp2QWRbqIuzNGtsdepIUJbe4LtRzjAaGcAuYWOCqc9oRyQRNk1xft0bnhY0QN9Gw+ModL0GQXVZL0l58cKidMcO72o+raKJUZMdh96FLjatAJrZWj17TactMzVIkdq6qQuOumCKB23hiBdXo5oJ+zV6lMmSnIb804oCo6dWB43jC/16bx+BwVL2IdFaE66rP6jZoIM7DkqqLdflSaWYVU1S/7/4FnpxJSvwcI9lEaILeVKVnFwIbj9qh6oNzIQ/b5Q9IpVaSSqg/W/yvHbwNrf62ntvc+63HW/PxJcewy2PIIiCv7zL979vUnHDPsDNIStxyRydtDfJ94ZlA0qWRAxWj6KGEVE3OVStHXaDWNh+0mBB9DFgN0DiMu3NFdGgxilTu4MECGw/ZsoXBddMWxk6i2gWFrigvxqgNlxyzsW4vXoJC42Shw/g0xkh3VryMSWBkKgkIKtdaFVaQiN1IbM1zSq2x6axeIY6oUnJ1POWNLKHULkRja0mGke8Ua12GTubd3bWI/50n/hUH1oTvtchLfU8ffzDufMXfUMPx1ljtj03ovVMXr8G9j2PWADsOpifsIQWbn08oILq3o5kV4vyHgqwHQ+/RNzKKw4DiTv/MBRxEuLUTSwmrh5VQxVzLM5VEf1ns3Ini3yHKRn6iVRLv8aAKJFM5UkBuVE9g0czqDMH7V27LVIfZsFV/lK1lLAcL7GI2i94x5jBUAu3qg==';const _IH='3aa999d8cc0ca0e06ead2774a96c2ed8f3e85fc9676b1382abae28a81f04a4bf';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
