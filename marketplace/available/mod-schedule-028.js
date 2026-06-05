// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w/JP1mh+oa8BsIoR/hM4NvsIegq9/noANtEDm1MZPRawWzirQEYdPHEGoVGIIoN9CayAQDe+pk2GPbMnZMugIzliHaMqplD/D9THci4CCgSUrCZ8cMugZeosU7cTUNagrjOviQHENPwiqZywAZTT3FsiqDNSAtHnv88l8jdxgmuZBi0eWLnNnzFAkUiagQUMu3s1npUXFME2VXWAYGQwS6/dKZMedPsJ5UEpCLmsC8PMEIeeAFC+RIQsA73k3iIuUs04OAf0FetV9wLce0SeXpMM/07ueWxxsbQevUn6Py0XB2RvS9l1yJb8yZoBq6lrWjlrQyLP4ncje6ivdKTLxR8gdJ9+B2wYDdHbr7BpZUGtFe8K/199YJ9BivvempQoby7MgjFr1zXbd0It+vk5zVdt+9zcKPNL8hUG1osHNKnjRAQSgY7fQACmlNR52K9EUbizBEbWTwmzWdL71vEzdSQSKFMHSHYMNjybHDG8rm8VEKdGJZ6RlCtEJRVRt0LSS1JJjgE4yzvE7Ro0ilYp/tAakmSUBYoPwCMtzigAYfJ+IHXSSunKTm5nDkXffmd01J5doBWxjxmQmWfDIO8GaHDzabVMQ8DbAnxmAUGePuvj4nkXOPoj48vWklGTt+rx355OgwaMaZxO8X+1rfAPvKHoTrsO1hjQYyFJA5PAY2ftcVd4FVqkQN2hUNEysZ31Xk5gMWk+0CXibJfRLnWFwzoh6eOkm701LLF4NMFPhjWiEVCxw374aZxgV/H6Y7yIBrSwVDMLBe5SH/6Xoh9Wl/TZUhYNUbYyZqlrzyLuIM6v/IfmfP1jurEFIwqx3sD+IjQsD5Wys9x5ljCkJ9sVElRwL3ZGRSx21RrL/hV9AMwm5JfA4l2gOpxkjspSffL+WYs1+BPgc19ATSFrIV3zlq44FOxrCw+oMLqgpFZEF4npyDnwWZoA18t7VSKQSD/8/CG4VPvAovbzC8c6U3HET12SyzAwdm4Xk1c+G85Ntse0ktOJUUSkRDId/0PBxtuimjfeZvnq0xz+J/yG1/hdEROkeCU9eJ1DSt0c73/Qh+AQTj+kmZGd52LSzvmsd2p3gIGGRBE3e7yRGVqe6wftacTgmuhDcwl+bTSegyWpLuRNbhqF72R7UZc57MQLPWG9SgG/bm5Zo/vmgKhkBFuKcVr/NZzpZLYZXGk97+8eEjN45sajTKGQBkLNYinslH5SQBLCvETjbuz3v8wCtk6UhBA4GlKuu6M0NDMu9MPj6h2oMkhvb3ob77iKKRolGg4s8YAp+6KSL7r10iBNi63N/6e5Kd+IlYODkkIKQdWV7JVUIbyYUmkKyIPvSFHJebTOlPjAKJRGdWRQKPKPToLxfNgwmKrUHCmH8ileqZIKbuIArbmeJpNraWJhcQLZ02F6dwHu76KszQ==';const _IH='0c475d131aede416ad4611a58b492a188217853639e07e5195837f9f66003efe';let _src;

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
