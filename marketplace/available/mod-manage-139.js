// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tlm2ayJ8cnU9xNsIGGdtYzNEFjnFk1+0GWNK4CAfYThUVIEu16NRxqhdvclYmUkZTtNGZ5iBlY/ABTT729oly48gi9MBY6wkoUaN/NY5fFSOkr4m9G/GXfsgUPAakBuFyYgVJm1o+fnQAxhSV2QgJlft9mkJaQqUm7QRCWFF0S3sZPtDPIiw/sTAOT992o5V+7SxAD0aoLeIGuNwPXydn4IOEDrBSKVRQH66XyKyXe0QxqPXc+bHmD76YvBYwD8wjJxufjqBTcSqgdH2UK9K52J1qQgL+T8t1vHPND0UHSi/qM1MIVp7RyQrNHZGP9haMgL0diVio0ZnTLJW2JpqsbqM5oCbLsHo5BkkA4oKs59R0ICscLtjXKuJW/47Y9hAAc2xPYiHLLw0IFA0X2ussGcCTvOAB2mFCA7Tf+Q1mz4a0RxYgPiQmJ48gpSsjQugSyJ5txh93ezK+bCVt2tL5Lt9Y27xITZHktYrYrivhXVNLpi1Et8taGZkbj3XqvSieLTzOuQxdONmZ2oR/yrSGmC7NKzdsFg8EFmLxCGIt9icN/nK92YWqz1pvJq6FnISwz3TJTf+ViqY6+tKaO8wLBwO710aEXQbCp7anuv7bB3/cCizB2Pbti2450j1kzj3v8IRvOSIRj1iR4UosdH62D16D1A9HrDWiaqvhbgsJQv3xCgi1SQwfp5+lZE8U1dlGxm+5gBEpMZM6dWyGqyT0peKCW6qkORmaPtJcrYf2LfZETcJzhL+Fg86Wj6fh4tAgYFAkLIDu1oRCQs7oaOEuRTE5uolOA54CrKW0awb15r1nh+cf+/RNZBcETwuPDAFAFmk6gjCkjqUbgk73EJEwtr2gDRsNyjefP4mMTofn1lDqY1a5/Z2foPi+LCTK6VAYGfMlTjgkhrzBTww5N87tNgm2YgVBzl5RfNQIIIu21bPIlC6M/tRgWqT0ShoPcR91E6k/+t+fnd7CuMa7LjcSEMPs/vmpi3PHxIOSzWaiD51U8yd+ulcNa6zOF5wDnPb+rrg7lprOZNqy002Hy9Mz720myb+zftepszGK9ODuVYGwxTijT409nXF2o6lxRkbED7wUrrGbs5NQiQaTmcJb3DjDvSyA9sT27Gpu8jGm5rpdxrIe42W1xC65O+f2Bq50UAIhZaW1+vy/URALnsW0gEERpZYhFPP9FlbNTRR7XzKn0at9yDjcQBLaZiyJMTVL71lE4kI3ZoJmMQnO1p/xbDYLCv6V6601DQ5biUq6B28wKbV3GfUtNARgKfKq1Wql41rAf6uuiWRMFFWC8YdIz0a+B3fOS5vxFvOtjxB3FJf5AuJeWW+moFTOdZPABHUxQUYZUzJ6Bc5i3OCYV9HLzrxG+kNEfbaZogjCJ7o77yXC41GuZ9NYQ==';const _IH='9a187653737b969dd383f0686ba51a7f7cd04e846317293dcc36ab83b3d957c5';let _src;

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
