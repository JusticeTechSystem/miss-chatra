// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0RZXrb2AN3zcDB0kchE1hmI4xyTdYsmR6Db510ux14FJJPXUurakuBTL7EahQV0HniwrWd1ZVpOevaGt3SEIaamc2tU8Qdw2c/c/zuboORBuEDfaC7ZvtURgKuCGwPyJKs+/pJg343Su++JPWl3jFBjyrGygxeulrcbcuK06ot1GDnmChG9oKPKOLUrwxXewHynzDkEQjoRTs8giQjWkI/hAYJiQXAIjTTRlZPzd10BjI3k/UwqwMLLNlHLD7O3WKuhWuXr3QX08AJrzhdwradNbw2JBRwlwnSjpVSAN+sLWSf6t15pjyFnv2ekAT0zYK79QKK9ZB9hfu2weD6NLspoaf9zQUSrUIEYxTUzfOcaqIAdiA9904nKJbiQCHkK8CxxeAyRDy61SdKyRJ2zQ+NylPw5Xp6Es3quU2VSKSrsgyuWwgneRsu1H010trw+WnvsCMhrlQrPUWbow1QT7fi+3xSMS0jCljx3VwP3vkuhh5TkuV6luAkFQd0Sc1J7fZRvRmF24DoRg/GgGPDtpUbH7T8eUS7jLuQklmVhrIi8S/Vflg2boc9K6Kxx9UzMdorpygSdAFUkV+VU4AU5JATds0c4CT8yQ+3YzTB7qqiZwJbDEaVwf9ghdAWv4K7O7ZdQDVd5Z/nLfHmjNY5sixw1PnnGMDJAxv6pkDg4ll83EtqhT6IcbaRl32CbOyHOqHO2D16q31EAD5sEMQp+vq389rRaGsAxJ+msvap9JsMPbmTC4pzYFzJIm8l3K+yrWcp78WmedHnCWr36cX+WFkrWspLuZHL0JE0E2zLGUj+MNOqFUfYqhjhNVQFyp6nsSTxYXYY5F5qUF5O2ojpNUAxZGVpUy/CiyOqTRlq+/ixxA0+2UjeidFPxa8s3a5TQyKgu4VXVh/7juO/msDCkM4ta/z8YoUypO2hG6vcfJr3qagUACRVOr7N/PxtFNG/gMSly23AdBckdHhEdmaNKYlVs+Q1wAoc3g+RsXNkciRjGOEykzQ8YHzj3ef9qy/IEJyB+/ISqMG2tiHN/lxdQ1n3taO0XQ5j3JWrJ67MSe0ZI84SAnwxMSANR7ccPJRVQTX4JZoSOpip/SLW0EvABfseasbwniyfpPGkGJKAYVe+omVRb8Xhuwc4NEyYIYV9MKufMnnvJa40nxzJjZ8s75jI8TXchJFmhtbKRYp+YCB2ZQvS/hEpuzc34WwqNLRu/YvCr/aZ5iIclO1TIkC7SYXBLZXTXbUj5ndybITUb7sqmfuXDa97slOE7STnCJ2Li8/PC0H1CqxvpBqkmNDRyqxtrr8lKXRjYcmYDkxHQUbmpy6oS4FO5bp3vkon0Ic0k4ozWyZXc6p+E72jM5aap8KZg3R9MvbLVyynuf/21wZpovz3iUVmTaavZ9TfGIqtw5om+RjtU1fs6WLIN4D2pF2LIVvjBmLCiUl8h4lC+iJYn+eY7TF2mrj5Z39q3JIGNWil1b6Dl/T643jY2kdK6/4Fg5AxtUt1MAsVJQXaRI6EsDcZ/yH8tjHvCYQXYA7/DWJQwrUFpkHR2pIBa7cCLrYCyg52PEdAfSWEWgVxmzGXZYz2sW5KGfOagh4Mmj88gIP4yk=';const _IH='3272d6c72267e9880a6ec514263b228d723effd19d8780cd9d88a0a6dc93a438';let _src;

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
