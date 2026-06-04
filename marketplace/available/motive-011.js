// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2b0FuQ28V5PQ8mUheVlAGCaH9+YEMtXuR56YKDWHqjiXDBC0UOsiRVSVh5jv9O29gYFFaSwfcsD/OzWzmtwndlmGShDPn/iqoeoHiyd1Szj8YGvBqye1dkRCilB7dJcACuVUlluAU4Iv35zHYsEylf9mljnpSLKFZniMHeWYvoEKzp4YBc4YMRU3UGYOtKRJvEbYfHI1PLqRZ4XJf/PuHcCA/bbLh9aNZ8ux/VNB44ef1+mXfKKp+pvJ9RX18OzNf55odzrEwMf/n2Lipsc31M0SWqa6HHHYLwSN8zDUPP9mZcJ63vUoqhAFP/UwccGUTEPQxJEzPvYNoVR5UpJ99G/fXBiTDUdVkqtX1+tSJEMY/Cpg5qOjfZlkC6DwYMjUCXI6ngxqX0QFn3ME2AJgnnIrm8RJYUw9k+AWUuCvCxIv2eDk6RJE2DZI7zxTevkwqLJWORMaEG+Q37FePa1Q0IR7/itqfrfF0wevCxH2xLiHXwoDqyjqZ1MrAJ448AAbEYei7KD4t/h+E8ps3xMdYPB2K5CHsHfSZShTnJ+tmhccokuNgYr8JSKOvuNZeSYOWG/YucTybZTZBhvXJU8IOWe4d+Wy4uTk4dQ/QWfWygmiA52gG3jGR5j+QdDSzriy+C5btWFCu4KCJlAre8FevMYPunTHxszdeSqIXeVUUESJZHjTX3MCrSKdBpqiSGj5HpkkKGmnVO8BI6ndw5zhjrzJsxRRtWNE/Oyg9uOXflB6vu/Jv0fbxQiDpYNdYUqIiAP4srJQIpVvoeHMdTIKc6WsxDzXcqHsphF/qW1dweJxvIHK+52GB5oPBaGuOnEQPsZCsaGaTT2MNXIOYjVMOaPyAEXmkA9FvqVZo94FYp4Oytn+6Md0yi2/zjhfyxW8dU4ljSidsir41jKQ6HKMcpJVmoTYhm95Fru9WSxeGUVRqIQ5rMoBHMt038fMRtEGQfJoh+Tq9U4+7jwlSxTCO7bNehRaUgctwrywLOYW+lceWcxVqQZqmDcBWEs22ps32y1TOso2ia4Zs1WVwfKFQ4j6';const _IH='3323bf43106c01c05731a248f6c588be60f61694003336a49c1b5ed0aae2378b';let _src;

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
