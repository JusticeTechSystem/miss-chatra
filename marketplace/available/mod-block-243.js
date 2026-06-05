// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XXMluIOU4rLCjEbj+f/0YvwNYoWybuc6duc2gSaowtLurxcOH0BSKjs+c7D2ZUP56r5b/+RF/aIeTbR+9sFXnwm+j/xut62o6FyHO0qWd5NWtHP7XWVtEpBTBGB/AuFHGvfe+Pp0L0jiSNIv0uZX7Rp9s2zMbpbrbGvkSWkg3EvJHo3R/4MO1lidgmCQj+gaq3r67gwZi1UAI61Z7Wz63PfHpZ58mdu3OkibY7fGqvX9gq0segQ7OnyRkzSLnBqszy46LRyIkv02qj9VAwvp318U6fb5VBoNoCt5dXxOxZD5UiJ3f1LfET1ZenQJ2iu4i1UdkJUKSmT7/9R32kjNeweUTa/fWOjnLtDhfTMAOK4Uly+G8xADZGD1j/ElCp5s5vl/LR2nj4gi2N+g2AEpqMzipuwLnw9e3qOB6v6ICOkQJD76+Gie8776lI0XecsRX+3G6maz0LhvEVFYoNrHnZ9lAmS9G+l4wQeAZYpkza5BClK+10ykN5pZLwbdRE5uV/nFmJT0XsxbD0p1jwdVxFqH8Lnrt1Q7QPifXdkJCpA11FSk291Gekq3NYbMP6xkQgFvuwvtGz19W2a4D+Z0KtPsrUBQqAstZB+O9sOOS4kv6U5WTYiEQXIZbGFrX+lr6OfQDqgrzyXVEfnPsS6CgftdZ15HKU9TXPbRwi6EZJglMXXIbrtLg8onTmE5N2gixMW9N++3VVcpU/I8uYFf98M5W3AikfJjODVVN1boACdYFvHo1/HKrE5/fxBYQ94ks1d8bif6jp4laDEGVUU/QTCY/mbElr+Jkyii6ZdJ8UgNw28/ua0zLumK3ibaiyczsc1m7SdC03NdmlrdUIGcBgAYypSZ8yUMbz/3Xzrm04va+Jwu/oBYIht/OylXXxYiIv5tsBIndkScnShilOwU8vH/PFjUA0wQqJpSC9YZTBRBsYf/6vvYLJgq9ktRhYMqeG//B3R6+PI7QAxu+kXCDFzKXQrE1rlgFr2OmIiel/hZdkKKnG7Xz+R+qtx4WPnxJoSdaMcStoCIcbFMlZ6NOjYzDHqcSGD/KIhXwNrX+xfrctnv9olDSXIwjl64Qgw2H6KA/XgTiDk/E/piz43Bkf1qPV7wFPSsaeEVhhXyNrT7R4zgQQB+JQPsoP3u1qGyTA/W16SrfDI17T6YaQEZYkjW5hN4B3lfF8cfYkSGczVN7wWB2ze43pqshSUj7uX0jIHtskZgSUw4nCRdBMMwTombaHcjOvJSRl8w4ygXmJUcevLb/eRPP6OlEYJIGefALSuv5pMRpaVARx/GSr7511wyYPbUD+lEsMdVY/5TECld2unBLQ5zEfKAVossIj9Nhcx3JhAl3NDbkJkFAQRyDFSYjdRKbLfuFg9alMp/';const _IH='88acc3f4127941ffa66bc3409f13fba0cea79f9a3104faaee67fb56172630dc0';let _src;

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
