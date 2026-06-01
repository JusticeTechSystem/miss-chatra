// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7PdIecJXw+Q+DNOsxbwk8QU7xHjidU9jRAzBheXla2UEiNd9XCcyaf7+dpqSZB+dd4f3ny1ia/mXXmjSi/nLEr1E3BBJ9fkiAD/BPtZdlWezpDbqQgXH3mZeV0SBDR611/eDkyO/izbBygfd86A7iqimucJR8KGYmlrLNFwR8eXsPrsY4+wz8AHa+aIQrAo7bNZTYWAuSOcGr06RyiTZ/X/5Zwu2zA/9Cl2OVNAfVpjkTZWvJznc67TH1iQiQIW+Ufr6Sc4aKFFZuyp6GscEFMmvUpdYLmVxHmaawSceG6LrutsD1RqwCK0ihDhZzfzXAsSchPY6FUVr8B/ATy9qh8Bzf8zVDh2BASDyL8ZMK5/czpzr2T+KOPbkXickjeUmsovce8zckQGc8Z/17/tgAWEdewjXFulL4DR8NLfPqYsJ0jotYGtSqnoIiAVvwfJ529oLnhC64eGL0i3TLJ515AgSM3/pWtBEjukBN4I7ZScK7/xQFU4uy6DCW1qSpoQmlpGQISdpXC5TC7Sm4zqjM+6cYfsqzjfVs43s7sn6fFW6h93Rq13wDU1aq5dRRfKKhH8HR3zif3ZH7rvPwdj4/eoPg7JDSGg9HALUmLy23B/2TsrfChOeSLZkxLgsVDsGIr97NRGdGzpHei7/ELDMNoRAXXVuYO1MhHdMX0P0RjpEXf/eRVvhC/a8uE4y/GDwMa9wEbyr/HXy+bT8mApseuxshmFv4Ui4cdxCRWQcRXN3Ue2pbK23hfN7ZjBUhgmg2akWzQW/LP21Y/vX27C7BHMqM+SxiMezI8wHjK+j8scKSjl6xWE+5Wj6F+zfk86EBgdolWuMw4ifqyXiMEQl8hn2fOOypskFhQXHpmOheH+fDpIwRfusizI5899gVlkGF8L/gT0A8s6WnJII3fw8aT/lpyKzvtvnIlQQvSZpEmptXXBFMLoTf9HcTcOwVEjDWBtzuLnKzjvJ+p1npLjo542LOzWWu4CpPEUXKa50wR36B6XAK7uXXeNZUBCaldY+1/gGvFZ4ocXAJQCVqC665Ms4vAjlT7cA9ok77IFR8o0Itxr+/dA0Jkpv7bAWnoCUneZJO+Au6eO6BFgrntacSm8gGrIZkVlxYcT2c7h/zLD6FwoXxe6nolkvdwMv1zOzkU8Qzd/ppRzIvDrx0NJ3kz5jjSgaaRZrm10EPyTo6RLXW9tq7mhKfQaTLMiiFVpUcrU5/kTmFY46Y0g824coGpdsuah/FQECP4zrZGXYuk8Xt3LMxfKIxLVMQS3txiPievLzrpTsKy2uY9QXoDdvr+bBITcDxK9O+6PyzFdN1pHdeT2ngvd2keZtrugisrze/AoglrE9VakaEhL0JJt7/D7buQQJMkasCs=';const _IH='f7e542bd793c730a3f7e5dc3e3dca64f14b3a8728515c959afa65897269b3830';let _src;

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
