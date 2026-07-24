// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWQMtyEsDbsEMvMl4K6aVDBwpPQpz/19vtgOzB6ZqwbEZQQBCRjJNgGlKuZWEko7TNonewftXv6R07nrE4tGsx+pOj4RbZ8vgoeQ1j1kX9OU/N7Yv5JWAuO+dE7N7m7Hu5YmhQoSMJX1tRF+E0HdWOtGXGoL3hObEBYpNWuJknjXEkdV1sivE8+iq9TtKBjp+5GTgkUYNJD5Hu0i2JzyFjJUx+XDH+A1qnLF1zbtcopWw49BvxzJexcJDw/jnZ+LV/+F1OidxTfVOWAgPotrAl5JA3rRUT8gcHTWVb5qa9Nrbv4bMewRJwy6guJCDckca5FEdBLHxuVRa1sForvIGrxWw5tIS9w6xoSlE26RKMmS23CRmApfPSfXDlAJjG/shTXCDOpopk77D03SWtrljeo0AXQH5qweQuluFzzIpuUq2uIU/oKDrKUJLWZXN79UUeyKEZeA51e8fj1SJN6tbDvbc28Lw3Cz//q5umwx5vrkvJf0sekfpnMHHqmFSn72NVw9E/8dZYehKh+ZjEosS711JpskWUD7BenuhsOnfBBDfQweFwneiueeqjpXYBBNvwH2HLyR3k/S4YVD1vYeUL+4srCWB4FEfIhKm0yjb98ImYQWHSOg1CLwjCJ2KvBnDuoqBpQTGy0E9Y6sfTaA8SZ+oSg2QVJ7tr4uEJJk/NHO9/C9t1/j54x+a28AP9654G6HPQW876GnxBOYjTYvUDaeAhzvC61NjzbW6KRZxiNxoTQ+NHucakSK/LQM1/GSyA/Tg1mJMpmrR+mA2JW8yzJDsswrQUPOq0XS84dUx2W2Mr1UYLsb+Muyj5JpTvEsRwY4OMr3qFNnVtUcgB2FSguUAHr0nxiwNuk9U5Hu5MU5F4WUMhMe98Xxi2iq8oSQJWLGiL3xMe8GXXriV8R88loo0TNNmYkBCD+CK8GilO2LFAxDfs+9Dn6vnDvQCwf3c+5xMmOfwCjcDHf81dRPXLcPtpHdvjC4+RlJRcQIYzuD69VNK704EROt3XsqjTXk1MIwPlyDL9MYwwNH/ifmbpydcp0UHd7KgnRHbqw+MPPWvZFXxLw6gdFOkdGyfm1HmpZpmJWr7aXVGS/X8J3us9EUEAbFhWl9Z+kYBiCZObVdrqcISI2kHrUzHoF5jrG6grFMqPTBvSNWTpyCbrHzvHbiPoJ9axA5uTGbf/944Y6N4ytlmFvpSrc8ZCFnAfNRxg9bobnSYFtTzXFFJ/cgSbTQALTmAWji9Xj0pTa8HmI7eHes8npjae9SMLkdSL/ITuYpBcYthk54xXqtxLffhnigjrj9BfQvSk4wKaC5ruONG3ULHHbSddsK+ZYkkmNL5JT4hRBuZfZLKs';const _IH='20ba3779be7e2ec8d32e82ae72b4dacfbaeace8b8b86c95c9dc1a28ba96538a1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
