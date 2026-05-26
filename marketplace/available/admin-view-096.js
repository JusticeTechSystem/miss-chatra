// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1b0nPsbxZtsLBLuScBWj3QTHcFddrtPnFOHkSpAlJe6lsFO7SQqCiouPA1K39EA3Uwe9aVObFPNbQVSZ7Yp+EEKXkk/nLrLrx6ThSK0EHd8/3I6h7kyPUNkbhlbYpioR5Kqe3eUWfiLgjcK7yOKo4VT5AKsakk5jU4e6jIEeqannHF2KQ5HGxGeJBmPDkrdZS5upNF0WG5hkM7ZbU1FB+9ewJnT3cy/yqeeBDnMDS2HCw9RRuY+yu5wQqGxeTTR+BeXCgW/aF4KKLFbOw8nfhEeyF8Ye6Sfr5OTFTLn5et8nZoLZBEJbTy6sVQjpA5p/vKk8xeLoyLQ89JwqRIKNmkCx5Byc8vrUBd/ayn71fTyMHzd+IKw6BX6T0ojA7Rk9jPgoy+BfCTXE8YRVpmcoNoWK3IpPaXNKq+dW9GHk6GQnbpcu5P1n5337NRRghliTcOeh2hRlxuVx99oHRXPRvBXSbrQvk1HsC9HJamZhMnaiJQ67K0LfLRFUHwrktyJ/kwsXcfDGYkxiWJOnmOJIeMor4kyfNKOAI+N/OQ9nN8uR/ssFs2B6GE0QQLIacpU011MQFKCfm7gecvYsl780xzpLcxZTO3JhpamA4+LalEl6YJJr1+m0K2krByhS6ZpEBybGNkDJN/WPv6KcjIB5m+qn52sfwYpvrj4iO7u9ETUHJ/a0PbApNA1HDqwP9cMZ67Q5iyT2HZ/dtTz7usQF37pW/uavRAS/EM1cNXZC+QRwCiOXIY6pEukxSveluT9VUfyDPKlV9pqUcs+Nrx3AiWxITd9Buz7tgd+MPRIw1vsiQVf7yQRmuFZp8aM6u1+aeYsMa7OoqwFbaOIKq7tUQ/gR3bKpppy6NIYmkorMB1JMyqZvJX+zoWsWM5fAK9hbuVEugshu827GVls4TLjJI69BDkj4PwojE3ralRmRQ5/wj3JbxJ67ZdnkkcCyd0KZeGToGAdaYAmlh3h4/N8lICRb+EZDi082S9UeCyH43g==';const _IH='c1d1b27a9cce37d33b23cb18c186dc3ab7ed144836cdfc23afb0b1159e32882f';let _src;

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
