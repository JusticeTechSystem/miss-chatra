// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xrmcE2j8xFXdlj5ZuW4GKhmQtt1PQsGStaNC13BBl+GAHk9FFQcebfzGvCY3pRVmkoUDAVDtiUT0MsA0B4cekRykTJf7IolXAJ35DSlal1OlSXGcsYCwWKsvF3cYdN1khO3zzn47N0i/YHZHDSKVTzB1Kalckzr22q9CSlNFK5ZnQ8By7IU9VVedSWMJmsEJxZKxKC6RELi+Xg5MOlhw0x22nesM/drcKE1F1Y8xXBBT2gCC9NY4LfXG3+8KmMwwBBqQw3c+2TE6byT4CVnThB+E67Zq02wwU16Ak875TR+KQF7kjHwgs2x9PC1rBBzazYOPWqAiqU73VK5cfvsdpsFjseIwDyWSXS6pCNfF4W6PITFFfnJCVb2EZ97JHbKGYvHbpcwbRSzXMHwLDEwH/zpHoz7PdnU9tIOwL9r5AE8LMev0V4VZBX8o/bIyD649Gm3vlsbOUO8rDc0hCRM7+q30tZ1B4wPkNTkU8C0QY/gCTuoPi6lIjDgUQ40Vmr8+D66+zGXl7ehwnE3CPWKGxgYTPFozWOxzHkY6CApM2es+rXUOq3ErE1B30pyAIL+VxANWZXc5P1EmRyVo9kdcTYBRZcBWiNVEKUjZK8UoAlD4+WtbhDrTF5sV89ocEWC4fraRzR0cPhahy0ROR86U7/QCIMGbaRxXsgGRwHeGzDT4jr6tGRmZFntIuhnja8xEuK+P3CvkoEz4LMYjveNVHmv6jVcbEyH2sa79IgvagjhaWHRz0nCztN1rlP1NhC4GgkxEwYyCL8Mw6AqiTYaA5qHW3UGFyrp8qKyHR7WvJSE33OLUWOptMj5x8zcxsYJFbYEt7/xwZUyGuPrM0TdtMyCO9AYeBHsJYsrIS2MzhRt6SsLyxZKOvckoxtew7UHTq5Kv6e3se8vs9Ga1JaM8xyyXIcfIjte9c2+YWBLLg6dUi9+3LQQai/C/gEBK2jFnCOEpbZ6eKqIeEDmaOmXLLQ9yXm9i37Ieldn7QO2rHd5NTEYOjQFNWxAzyduy/k1J8Z66KKh5tXlI+AOj9rQEFVs0j1tyAUunxae65LlwCk0m+HI0h767wA8AnwGKZ8pgP0U2fDCQdwAaelXAtvMywlkB/AYk5ggexPZ0bn8rgcgPPY7um84FLQ0c/Ayrrl3+k7yrhfBC4r6yhBaw5UO34VLwjsC3NBEVEFnBjo/NZCXWhXXQaHsuKSpyQCWDAejieDhmvdAb1DdSMrBDvWat2uDAkp+WuNuWhmmVt/T5wLHCj2mqc6T+fb3SnkoadHmL7/IqFCE+MCr+pgHdVpskwRF24tojP6Jg9hN16m7jomIiK21ZuUeYBmPryaUNSWWPGaNDRJaxdXtyHhJXJZe2OfB8sgM9g9+quJ0lUXBSae7zRefC3kAe+A==';const _IH='307a8d0fea1ec9644d5c8182fab962936d023f80fe9fdbe98fbb6dd9fdf3faf6';let _src;

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
