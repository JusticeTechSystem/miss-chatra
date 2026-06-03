// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gJstGElpskpxFUYPCL91WI7K5Wusp1zfHHjzBrZaf6YUObyaYE5Qb5dRvRzKfaobjWIPzkaN146qw1m49bG6d6ODpulIcAbD+BMtcasjXPielB2uTFnYllJ1TOLNEWvOOV+pn/MZf9Hn2jt0NPLl7DGxTVbpFb3pX9ni3VUnm4pGhTr3bxppQEL7knarKsZUticAhOCXiitcoGYWAXWCqcLkfYbesVcszTLJ7hJi8ilDL8G57L8ERtChWRgNHcyURJBoLgvSY9916mNoXyld/scD63JbXt9IVNHB1c8KfK/W7oDzxkxiS8zVBPiN84K7f+dAAj/QR1DEtfQv5nA4vZtnoaEN+crD+DM7LHkr5cSKa+lM44MjVacwBgkckO5UpECV5YehuUIOzD3ELg5O4XrCzPXqfsJEK7rrLlPIWpUF3c6zfgKbI8gnoy1jZ5hinFLGW31uUjmWbZIV4XEE8olWfibOnJxa7r7VlSYXFJXFnuzd4Z7Iqo66683dgs0EY/W3MTacxjt9zn4lAdsml5a3Yf4LiyGVDHbUue3WmZKXYXyi1pciuQThFi1aqdLLOSr0KRygUinc0OBEWYCKTwuiOguY/hyO/yGuQF9WpVs9PIQqlyGq6mmJNo0jSn6Y22Z2mLNiMj81V4yEMGGoXLyJjFBYJ+jOWe70XOwgl79SWSv7tQknavM/H4h69f8+jrrb61LIMNtJ8ipFjoYM8I4+XU/EKKIb8Gbm2d6IzTx3iEO3AcWjk1tq58R4WCUMI98iz+YJgmk9AFsy7MEQWnsdaS/2/WsuU9yI7XrLD9jATJQt7OtGN5uGzNeyfQv2SIFZtkw9YacTC3EZBJ5e0RnDFeLh7H6bttA7TTRCw9aJIUWvB26uLSlyX7yre9USFCL5qVVUySNM5Ie0hiE2ULtmsYM9I3G5vyKemTdYX7U0Eh93G9tEbq+m0+Nttcz1nEux1IL5gXbfIlA7iZdMua8c9Lchu1Wpj4K5L5Gw+7CZd3w9jw6eVDM5ZYIfCJAoTJiYmOu2WuBda2YXqdE7Oj9eRjwE4OzGvuU9E9ELb8EWN/pcnawWhw9KRRKjbQzJX+Rp4kAYtgvUHW+69k+hxKl/U9SJ25m2wNUykOMC3xAjwXRvZCgui8iexaOODySOZnzAqT3ah7BCiWZ8G2zP6+1uZHS0jZUwfzCT6E025LnvK9madtngypIqyoSB29tDnkwet23DxyutC9PSnFFUjWcwzqX1SMnuHN4q3vmsjMO1UJ2Vp67p4SkTIkjJUJTX5oZRXDZmjTEuPZYFxa25TiA14xhVLyBNz3qetPTuYOr0qpO4va18PyC9hQuLIBn3v3r76wPZ1aSOuFTh7heK+2m6BJI3SslqBg==';const _IH='dc206437035e945e4ed21c5def027dfbb4398baa683446fc72d638ffe756bdc3';let _src;

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
