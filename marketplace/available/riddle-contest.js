// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xb/a1mbbjlwBRCRmJ2u51QfthFl5eFGzbJAfppbNg90AwjWQysDRsqm7D0OoATC7cSdqwG5bCEX/Hn0+wmd2sv+wrd07vdoxCOnTHN5t+oFMPYe3XoNcL4fnFwVOcgb8mBPV4keA/VjDt6WCH7AQmYoQ5exsbOg/War2YW9CaZE0tr06jSTI1C9tm8QYjqxplrZqiKfZF9L36OtEb1fBvMpuA84WKJR2Oii/AaXweRC5IE0+F0ZYXZiR2V0guBobsw/FPJFmzznB/P0eAD6hz30Au8qR6Tr6bHnySEPABtikc7ARVS8Jn8YiJ1wRXUgyYlv8zgVTaJRL6sLAOZd0ofSHDASgx8LuhVCfhCcWbCR6MKpfRVmXDCNlNZirsRXtn73v0PQrd0VvUFtPw7ENExZYWnMKS/RsSSoJCp4tzsC6bGyIRP8rykpuJMkn4CxxHZa+Aj/ywxYw04Elxteh4JVmeuosH/jNYRKRG657lzbomcX0LWkcIN/7I+z8tlIJ9zCp8qmu+2dhS53j+hWwY4GKv3cfXW4isHCyN9eywZ21mnFevnhKmlnP9Os+8k/XrwJIiYNk3jmLb9kQ1UOq957oLIuaZOLMgPCNmmYEvZBA9K+9CMv1nUj1ZWnpZE1hI3GNnrdc8vh0rhk0L4F7CE//DwkNxZ/3NMl87AgQujdRqMrIinkeSHsC1RNPqGc42aG/id5CRe7j72e+7A/NIO49w8wJ4oOcAMin9S3XWP1YaC/WI/W71NmNaFqdkRaayKP7IObkZYpfvLW7sAjdW8PI+FEO6bW++I3Q5Zd2/uybatTHXoOxYd/Zd1L97+nAMjsCNqX+EqW7gwSn91j7xg+2PgHS26PnPv6NrHY8GVoBDPd4dB3nXTuJSnu/K4Boj2vs63d98RXcnnZD/pQ+rHdaO9PCfZdjS4f3goADs1gr/itLyXUMe1acu8SsLUjOZvgnlTpi23HUJNLNegbIX1gFgp79KXgfnaeFwYvDItmmY8A0Z5lu9UL/gw8/RUg3CTXPvDVwE34ATDAxU1Gty6lUtv2bc6nyvuHndMT8GhUQ6+0q+5hsyHtyP+dguknjFRb6ed4lgwc44yoFH/irVoYERdRypZ87UbmAl8fuat6JzT+Z5zoTalYJRjY25+Iq+9yxsltruEdUFQlovLCOOHCE2Bn1k0viwUQLx47pgnoTSagfJbHzG6K7u7jbSrI4NvzRmw0kx7kkD27fpvxX5z7EW+nX2M6N9StqHYgnM0xsix1wUIRfCoGwnb3j3U9CPmO8jfN2tR9fGSvbaiH3qnnKhq8ZUWkGKvGAvnKSBmbshNi8d1DfUlFJrmy3U9HOGfFPY/8dkJMEaDFehs/B+vbVSaxxmNJ3HRouQcpERq2xUZDdl+SQagdPgB2YwkiXQ9FylSICPQPKhvXKqJ09dstubLbHD42Psz+V8hyrfFD6zt0euuKzL2nypbYCJc4+gKXxavg8SkzbItcJT1iJCV0H7ITUpHOXhq4CUooGwX90hWKREEgoVyDwDsW/PHsKWneKktr7qLICZOwc/tg4/HNTQwexadYyMgfRkK4QomTIyaTde0bkebylN0/OXDPUZNrLmN5nxb/8glZrazDty7fLGiVejd9TkV9p6OCKe99Vhvdblhwk0sq7OSslDnTJb0wLBwBJrmFaSZay8ZK98nM76v3tt3hvXSM3gSjykff+GWSwSHBIRKHX6abvWUJodw1t1yA7Sk/BoKP+0WrmMPMxjAik08lDVCopExgx/58jmTDbRhLL3bvzWbAslpuUJ4A1kL0V3JKAUU/UO1vCEj5xn9T640yo2liDY64kA5ainADD6mD6Rp93vcD2eb1pwjgu1b0WTg==';const _IH='f79fe58a1b3e6b27e3a8d375dee2f449646ad9f211a2d8a08ff77f42e15ad0a2';let _src;

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
