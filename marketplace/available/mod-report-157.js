// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0F5YKn0fZSB0Hby7f9XL2LBTZiWlMK9c1hI6F0Xquy8s7MqvD6gkmZpbpZ5CgeIC0jltCE9gHSuPkqlJlmEJcjt+yuyaxbDSk0WGcJ46dbBHKl/KPlg/sxcV2KVrt4NNsToN5Ii0H3wah3DF9OPuv/2dkUBV2zCs2LJRsEhqwOzLjYLiuHaCmiXj8+crfYbD6algA/zTNtH9qgAAngtqug73UvsmAe0W5B+QN1HRaWBDTh1hiMahRam4pfgH27/7TjbkqtqO7harXDgaWnQsyYwyGeutKO80y030DwGt6fYlXyFlmMemSJyNBlLjj8BZYT8fvMzitfT/sp2Y7ty0dXOE9K/xixB6cWtvmacECjxjgyuOaNTtxEFu3Tq83P9cpgFCT/+04SsND3v8zNL0e0RbBZC1efyTAy1ctc/Z2zCuy6/YImXtVuumhHXJ+Rbz6Z0OJLsb9zVn+GuR2UGA6oMXNp6xUEnrUGj523IEwpYVArR5mKXZeXUx2mOeZ443NrA7rBpIyLqJWcGgOICC2mzajs7+juMgJUqokgkUFFuQDytXVLw2+yVBFHxsUkYRP+Pt/4YmfYQAlAeEkCpyiaMKTvdRuVnRORYimTELZz0cb7Hh7EPo6rUb4fBcDYVD2XlNm/LZHj6DY07v5z8OVcUGOVwV/clJ+IkN/9bghseHgpv0R6lSzp7sOfxe4LBNHX8KK8hNsSKESeOIHYlx4nAl53Rt7CL9spK2M+LqOFXNDOCTayjwGFSKdyFvvdyjseaTIrfAVvIGzLbpCWV6/E+3sJndyzY+kAxvb/saVPvhI+Uo04smA1Iqwd8Sp+9XdtQdzB7wtvB1G5L7gNPAL+NU0l/AT/2rNhNsBaIPe7e9h+tIXsXVF0l4aXdl+5wFEYZY3ZyxxGOljwzcEJkUCFC2Ta9oVU/Z1Yqq5d4kPH5lV1JPv7wkt3y48ocLcphH18oX6HmrJGRzPilX1aL/1rRJJSaXUTw5duIvD7krly+mUxeBOGtKyqmRKfQAFnpIpfhXsZZuzsVVxu0DWn7KPmuZTuj22nodkQxvsEeQ1qTqy+bwPTa43Q5jtSHIaew+kXJbTkhoYN8OdpfA2aWCIDqUP8GmXCTuoNtTE6IPyrvxlye4RR3JlTdL6s4yN1aqmqCVr+ErOpKMPMvmjkg3E1WxUoFiL8Yd1aPyQqk41p562hkQHcnSTZPVRB1YN8FODYcpbnrhzh7o671EfU8V+fTeFKQGT4UmT9IJTRjD1jBUj6kjssTL++vAm8TNcA7NrR5nKAhGQQm1Bi/k7bXxVaqPFk7L/+G8ZDrh0Qlhx9Sq+HKGW3wnNxt138eCYqSXDDNzGvUb2a9uThNRDiM41KD/O9Xs7HYobg52BT8m9Rrr1zOr9a2GmA==';const _IH='9f6576cf7c8dbf013ce0f9f9749d0bd13f6ff85086817b3be8f48233bc052c4a';let _src;

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
