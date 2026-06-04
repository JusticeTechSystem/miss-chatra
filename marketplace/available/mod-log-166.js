// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O1kyOStyfyNfB9JdyxdHMiIEWHejXow6vIvr19sXjM1GqAvgSvCPFlA+rjMCtdGXRdqqa43AzKRy9f6dlmTDb8t4d5QEmJAPuBqucCJwG9IUdwQcQ6OcunF+bYZB2YLbEelTzMZ27AgH+bvkcyHoAenjGCdUhajpFQBkc7IfclDu90O3FEy+yWHOnQbPxN7bCjfajiQXI6+OYQ5vVmjzuEA1eLEwrgncYWL6dcYj7VALmjpr2luEWw+FHVcP29DhnX5F19HmB+eqqG+BIo26dMI72rnHp8rKlOON7p6ZXilNZIXLnFjt0RWOGw/zcLEJhAGlYl5duXZZ2P5R2XqTh5UwLzW+LXIiJ2B9MVXySa4D2u2KGeo7paO3oLJVcCAjuNidnKLHLJoK2VZOnvgQ9MxTR3GssNMPOp93kei2TWo2JNcp0q0Ffns/ONCuvJYnT4+o8VAhlHepayYxq4PlMlfqUGPAbN5byuL4+8YPQhAVie1/4Faw6D5p/FSBRGSUdLJBdCSOJ/va/YyPEBo+UibeJW9C+AuBsWBCzuKL2W4eWurZ5RnaTZzuAiiD67RAA60jhNaJ/Oy5PVyVDnCOeQn1YREywl7vq1xWhwadcl/UjCxlGL8uT4GwypkDInhKeFmN7ougoeIjKvdGoCiOhcZyfsoptvJLeoO1KVQEeQbA1mRAdL4+aB0rBHHyTT1USAd0ZQ0Ihv1uyR3ZI2kI/3lA9xrFAyeKlFssfuxVQz41JSIz7OWdaPkuZiEM1u4b9jeKBWSTGGDmyISlzBWjXF7/IqmJ+hV6iZfTc8hzwARHsDoQDt8Bf3r/04lkhrXWJd6gYP6cRMdqtpMtE4Ac5O0hgWVF2T65ouB9/VOJ4omhKrXINyV1BQKp8MT/pSn5FCDh6ApUVZTo6QI+DnKzHrDho1788HRHyC4iZCa2+2zS6X84DF7QUzd7ykbct/t9hZcygg02o9Y69CVbVTlJsaI5eEYsf9LdP2rP0CWjhkE+WRSiBkuBWZXstXYNraP3zSwM1/hQYa0CIG17A2t80UJXyfm7sHOXSE8ujq2QHiFb+bJnJx34d4n1Y62AqoaHkwtzukizaQp7TNl9NBZsHOblVAqUS2D8QVEhLvsJWdsxnwFhj54T9aW7blTNKpy7iIflQLw+fASLAwxtfddy2eBsabdmDD+ii/jvBCDXQPkKYEjrUn7AalFUtH9vqX+FLCXkNQYUk/EZr3XIivhEhxbwdBkJQvvNzgO7C2sT9x/Ob5jfB8OZjE6meuFTQ8PSaBuU5NJChSwDWtS0j5oDIoH3/e+vyJnerufIVuVz3f/PPZMO41k2BMwdRxdCB5Q9GQ7XY86saeB4KQ==';const _IH='7c8e0e790446f18f546a23c2343c2c66812db4a8870b320f820edd4f29596d5e';let _src;

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
