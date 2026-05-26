// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='flO+4n8w0iQ1UmvvA2n3ulJlhZLnNd7cr3AE75WMUaiAyJ9oxbjvuTW19iZFmEKVfYjTObQ1ppIQ45WueLQGS4M8WgqAOvdCQv5b9Tk2XvJNKNm/Nft9W+OFxNJ4bjR+3cb0kb2m1Q412l/gcZ032FvpdPhdhr4Jxm7MgQPzKZp5By1r+NRvyrKea2nU7ored0V28AR7aoGg4QXxYzcf8AEWIeNJF1hiDBrzOSqO1z02g6s1HA5jUyaQA2enVPMyHaHxL//xm28JCmZ9QODQLH4ir5MKTG2rU0AYyRP65F9tOhWILXbMsZOkZTQEM5osP3gNpMPzARp8oWTULRray3XqcaEWDxhLeLKqLwgfTeoemdEkYHMb+RzFc6mN46NxQHJqTTZIstxgwXz4SFc/ZZ41MsNnt38CFP01EOzrlQSrslofV78W8oJnCOuHmLFivi7ql8ztluZIIUX/bJNXTuMIUqyTf4zSMEVOcdHgPC41la0JNPunftMfFtLQOxBerpjbhQPJbv3gOMWH0ueBtkSBUVvTkdAIVgKkr6HKRAGc+e7rdBiJNQ6GA3gb6jldBZhcO3Kbe8J2biqE6XonfampyT0dtSr340A0itznCkey1LsMBrstklzxJRRBi8m09Fs708sGV94098oOZjAdk6KQ19BbkEkyySze59tfH6Z+/ed4Hx/IbX68ob37OnDY0KJZ69Wpx2f59OxAurtYH/rThPNlubNWBlkboUcZA5NM12OYju/UoGWHy5UXxDDn4IzTGoKTTsePHSTLt5OgWo+llSYKJxLj+P/lEFIt/r6gBU2J1zdcIN+BWzw4fE7JY2rz8nextb9vzgIvuK/pXOudarts130HXbkSAX1VgyV07A/Q5x8ZNSlnn6f+bn9pAbHiu39+DbMDcI91iN53qDJ0YieKZJeG7pwoGmOtlbR0nMqfKzE2AD22uSq3jeGWL1Bg6AbDCB1gFdiFWIreCMCCYcnoFkAtc5Gul8sPceL/WQEuaw9CFr/G8/K3K8CWyd6jAtXcyy9U/lBEzVzHhOCl6/ioWfvaVH9BBNSj8Ojht/2Ebj6CIs+JzN44OouviMeJE16tWKnX9LLftGa3WUP6rF9tjwWx6aK4aYl6j4rg4zG7Gxi9SAf8x83aAXptE42IqGw6Z6VgCkCe/DlNjsjZPaEJ4mNGm2vkg6xL9uoQizPncMwBgMrG05bZmCeAvZENAadxIJaYfh7x5e/O3US+usAbOzFuDCTU8mi2L801IXqBTIUCVaIAd5hjOTzriqkBptFrrqLtgCeW9JdLB7GRydJnb1qhbOfjEuD1MUxyKc3OvP6hvjs23j32ka+F08f3s2hlpPzXiGRXzKpnlnjBW6Z9sXBf5Q4RrpWgUt0TSpapgbVUPo06r3Z/BA8RJYa8Y4fbF9XeUi/W8V8OdcPjqKd4nwMI6uF5hnLHB7uta5HYg559hQaHyIJjuYM3rBdWNhz7//zbdvbxMRrsKYuK2ywrg2+n2nNBveTVHQ==';const _IH='1cac2e40f067fab0d612f4e9731bf9f6cdb24afbf47393e40c5704a455691374';let _src;

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
