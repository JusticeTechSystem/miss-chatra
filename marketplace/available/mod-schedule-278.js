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
  const _b64='B5wp/tMdv7p0M8I9B+TXv8UDQkJe+fXLCpayWCmU0V9e3HqY/HfgJbIUuj5JOvHIQyQdKYbgcSMy/MqejKdtiV+gfMI+dnvbp01OkGsKljVXo4sVvlwO5Ounualm0n4bCfdJ9792tfJsmOKh4MlRCK7ZzVDmnBvUYqdsJymYi5qxlNzSM3fJmpIabHhuARbUwlG7Ff4Y9xmMD9SX7OHXC3r6O/qSnr8Nz01Mf7N60sJnVKSUqx7KUN0xOzgWks4kJYlwjkiVv7/XrAcM5YXL0VsOx2/3FQmdcz6bk+uy90iick7z8KJkwFUaYStZdxijZVbPBcCi126kRsQKheIMil5Y4tVHJfbCt8zIhkXVdd+FWBub1oKfdyvpKbVWnlgywulgy8w2Q+HT0quZaIH69T51vLp0N/qtjVOSz6gbSEIfASOBwLbKsI5BhUHuCgCM18vWx5YpxYmoPcYn9aKsil8Q0JpDuBsHejzbZ5X3iKxxpPEwEnOxZ+0ktPtGSF4lgKpVr/Sy3JwBv1TxmoDVZLz0Cjhbn7pC/pMeGUaxC8w0Qqlf3tu/Y0gFqzuEI505Gsbl5gdOq7vIMOOddjFO8dvC0TBx7rj7faCPGfEUraPs6Tg+FJd6bpEQleWDs/NqgBEvnudckowxdWN2w/UOAlDqoYT1nADN2U6dHMpwIkDPq07BK4dlTpJxFXVmxZ5ZEELb3dIjspS660vNvMkCSH+R5SWbDHLmG08CRKHmVwGtHvjpIJzmXF90Wp2a7y9I6ZjmlrIahZo+2yKc+2yyLDsXNq+n0Xg9iC71kaMuvgf47eGB1PJCNHLjcmPfWjIJe8m6MIVSTHINxqkVnJKCUKDuiYO6rYhW7T3Iez5xTWlb7qfOShUx2wSYyIT3f8kxSzz0YNHOwkvjCgPg5CU5kYtkwqHz60p3XPEFmU/vOMkziyzrHpGxsuARzqKiy185DXtKQ4WvzMd+wPgJTTXdc+wWzaSqX4VUG1Df/FQbFn6BKIVoBHiF0lGWwPkcivy+7G475v9q4YPeQ/8K+kaIj/3m23Z06o4Je4DYlbOSSQAGq4U62uOb+Hs3DtoFQhK2/yjWYI8FseGhf4Ea7wb+YkCy2NoXv5Ej3PnAWF91XK52JLwb1Myz9kH9EOjlOhBVDXRm0momAl0TpQX7kwm+locYgHHZlaMnFgcdVJGw6uTP6L4uuVnFQdrhqM5jNOPxBztbCeO3iY2M72kNOsUGT1FUmdGLWojodaejtUqGfWKNQv8DvJmKag9WIvKX3AJ7p47ljDpb5gUQ+gSbdVEEglDrvZde12B5LnhihfnIP1EsfQWDOF+7+wJWXHVkeS5fRNFMC9B2U+G9e4ZJ5eCUIAPCf7diwGYSj0TseJXExOQU8x8RxPZAS0Y13qa9wPVcU8gLAxcoPqisNXXv';const _IH='484ea44942cda500d65c3796942d44a545830f8d7b33184de0821e34eac6f5b0';let _src;

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
