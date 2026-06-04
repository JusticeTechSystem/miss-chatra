// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7QEYCqCXViqUZXRPEQXis2VAmC5XUf8nL+EN+5WJXmtRHJ5KYckcHTBX/lFeqAEH9Q90yjH2GxOCGYUDR/zLAQQFIvdFD9x0LsdsL3g2e0nw/xi7YO+ZFeT52O8phk7j4QyxRe8jAAvAfV0zNjRi3yU8mT6DOLCUbx1A4dSuXsnxhrxd0nHmKuJKvt8VqBZYYyPf23tqoDtOHxLRLt+qQT9XT8Ncgct4jM6N9X6fS4PAbHQnp4+JqMuLWlhMPh6Bo6+fjwyZh1FkprBN/andmEBGWuhCd4YCm7JBmU0tnQeXjRc+KR8E+vk0a332e4hwxe7P3xCzaOcIIBRQxmK33ACItWofgOOmHYskqXv1BVmp2PRsOMvsrXvkV/QpPWSTT/4Z5BmCVJe8nQ/GQi9EbcB2cohAw8SDGbuTw22eKYoPe43YKXndoDw9FEryRthBI2gvmbzOA+etDgE/OwYp4fcNWw13RCk4RUge/KmPDcbAJ4e81642T//ROHJDsGNCGaKcB1qbZAEr46fV5Nske4B4HXyGbyQtirvufEOqgcUWsd5d1Ak30IbifEIcVZkUIfdFquQTab5xxx4hfkLwEWkFdP9O2WMDNynCE8K5ujTMUcBJp7adN3Lf4V2hktKCnf8pvgNbYJ4g9XkvdO1l1wT4SRAA/YsPJjFU6++QBLy1AzFXLVIEBFt+Z1Cpig0rodb7AUxTMFlkkdSfqJRBddYmofLRK5GzeTsmxga2sdmVgckr/w6xd7n2KLLNSLcrVM0KsmRbJR/omAc+zdE+pBgK4fNhH8zJ5gizr6PxScm5rZoZrfIapMXmVskzzL97NxhDq0X7AIUtiZ4lH1T+TBeWtAlVtb7DaGDE5Q8pNw1OsWKrQxXi9R8f93uHxlpFN7NYxr0uNKsXoFOsZ/HRcYKUknO862gMnDttUYPvM8qJMDNi3UH5kQsy1zB5+Fnypbbj8pdhljtZ3cWg6dZoSluYrkCqGDm4j5awxrhpGCEq3dswjtPSRnT5dXQwFvQ5QxgUYI+LsVl6H4R6Qt0xvEKE2FRvSWXJY7rDx5o8QtBswttDyVPYrfxz9cwpewc+obLsgcQgTlv2SKrFeo3esuXvbKv5h/CgfDYn/xOUrb/um+JIbl4LRrtD9VBMTJTwR8/9fKuGa3ZdMf2yls5tdU1JGkAwjglKhNOr98HsYDEy7CkqrbZUnKaI3cEjqZIORurXNmBWj563j5sPOT9H1ULJnJiJpGAirjo51dj7+07Gx+wLU6qJ2H6Lu1k3QyuFpExJc8NU3KZ7+b+u9EhDxcQROqY7tdNmPIV4waBc7vpgHI2FnLRrElfDpRY06Rsw+eX9j/eva6jtP+CUT9TcaEl5l8FdS9//BKUt/sAG+dKmjSmur4CeNI65/s2wcw6V9RMW9jC9mL5MsfiKlbfylayIkdoZkQSRAWzbr8s+IQ0LM7nuTO6Rw9Nxat83mymfFA/HcxeaSzYn38FilU8Mk2aWnIr6DE2h5HQN6sjY44OE9i9raplCBMnHr8+qyH2hIINPd7ngfNQjsB/yV2y8XHZD7oyrm3FyDgXN1+5KPpt5eL0Vzk/9HJnlsvANhlgDR/je/hW1FapfRkZzNvz96EpLDQVNzj1cGZSVzxXch2B6SfSSD1xb5FdN4WVHTZKm+5Dz1HrfyAF035kvJiDrXx9MVfC2pbVhDKgmk9wusX2jarU=';const _IH='d07307a3d7690ac8a2d13e9fd91683367562bdce43ca4fd84c8fdff355aeb6df';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
