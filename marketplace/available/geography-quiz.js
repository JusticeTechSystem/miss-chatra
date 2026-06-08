// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RggsigJkNz1NsGLx2k2AWRdm/lk8OZPZd6JcquWaYys5g8GbGzeCeUYAXfGbm2xA3VrfoKfnk+9016JpiHM3Dw+99QuqbYBXTjEte8xXy4iLH7PG1NTj6gJZcQ1jbYkgG4k9n6MtHajM1nOeh8lGlsUGmabR8+bCAVWK+ETukVt2wkS9m9Of5Owg9+mMApgHG9DgKXBtwTqW+aLcPlHiuy1gviQSYkUA4ulVzrv44Pnal0R7cD49AT4P+N+CHT4doEMdW3MtSUer9IJ9WGbRd6e8NuR8FQguyBaC3ImnzGX3RrA3AEuLaXEuGCKLw4pKLksS76IsHsbV3hKHVkQwlO7ktbZl1zLogHwCsBxidmZ3dZW4QFF6aqiKmVGBsMEGh9VACnv9/+LLWDxtJmh/Oa6gQK/yrDWn66GDemlft78tzCA9u6y4RR3ekaimqyPKDZufK8fH52uqLssgWnNR2j+Jv65fdKDXyBMzPC6p3ZdW/7OMvpMGzRNQnKr6AAY/Tg00Y8dziRXe/Aab9fDVnnZ6+hvmHIlaIq20cOvRE78kxrgeT6NRPuhk7oBEYvPWRL0A8nUzf6jioa9rvuyGheUPYbb3cQAGsyAwmge3O0Fd4gSPuLb/xA8X+8qBf0HUvffmwRBpJy5KG9ARnULxjhT2rXDwcnfO/8SPynfn+3/3Ze74QWcs4llH49AA2hb9rgrT8YxSARn8wQj2HR+5QfRO7RM96lxms327uYxfcFgO1zbyjDpkuaUBmYrUvTwe9Bj+Ib+YDqD36tZHEJ9OO0BQuoIxoM6PO+ZLfOW9xkpCF8CfTGZNuGV5bXNX2JvIR1R0AyF5HoxaHek4hEYG6HHtcwzsm0fLhnpPpF1kc2NW7rhTenmrkRXzCW6uttmGoQGkZsgDceQyvVgwD/M7YcBaRr7XZfGAjGlQC4I1DBqn/D3mOAuEu9Gnv2/q/xfrENDmTIL+w95jyicPii+ZdMzMUgFxPFvaXH7U5XEp/Pxa3VoPBWNZtsjFzPlrXc9ART1Rp8pmz6sqCaYSwgHh50R0khUcrEXNoM4OptHrmpdxzEyq58YKVLdub/dH7O2xnphvIoRM3XbaAzQpv6rHfbrT/Q/mhMbgEsG2/ooMVtZQGBb3pFNcqoIH3dpPhL/pLAw361tljeCK/OAMFXS3zOqaz87wtmP5NUJ+eL7SE53uTgLZEKFnQTHOZvSiML4hqpH2zpz1bk0nubww/mHH6V8eZLbxqFtXmj5m6Ou+DXb7ePEloPmejwAjaful9+TR4VIqvIyddEILBYuSBKBlDg+uAMjynPoWFnXSyeaxJg+mP8hCGP10lnxcS5o1I2S8wvezow3B2Ypb4Ym+GyWtcXs4LBzTVbkEXfeobEPwdDoNSRXYL7vQkYQy8mr2DpJaXkApYTx3nEfskX2t0N2Fdi+aTnGyqnrL+rYDAzCP0KzuTHkSr5elHBziVoptTTQjqrWMsEtDUZCcgvP2nFtH9eTeS1ZCvz/w/cRUvDrcikRIqN4KLVeV5FQtna83f8b+voaz2EoVVwfUJz8g0Typx+LLKG/npW4FgZnZt8u7H9mvel2hdsoamOnppYdOmuCee7AONNU=';const _IH='d02db5dee4f5c21d578ec08cccd4a50a856d49f88e61813e8543a20e10cc55eb';let _src;

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
