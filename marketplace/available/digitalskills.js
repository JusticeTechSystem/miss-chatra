// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/RTsZru2mCsnUSb6Z1Nr71QuRCCY9IOyMirZXjd0EMjfs6oyz2irNTcIV3ydc1YWWQGMfkBzQ/OWDcqX5W0cMQ8QNReKMK5bHh9qvCGa0GrshxiaszI2vu6uG54Tmf4qVxPObFzNOsOwNzoFQgRhnsJxeAh2pRbLf3+d9fIvdv5xT2w9nqXY/5+oiAV9Q+5oRP0KR/DQFFI1oTvG/86wzbFonlpInQG6QpiF09lk6jrFsQFD/fi7rpjNA4GhK7cdEgF5vA9L962FUGLW453L97YzUCVFbk5DcnqT0L6evwh3YleQYisFH4jvH/TY2IaXODhB1P+CURZ3yWx+p//PFQkoUaBMXydqLZXHLT0YOhuEBXsGwHZaq3UtHTIzB0DGI1WjXtwYTBYjFGSOO6gjTiB/kOyWLiJxuNVVUXb5XreayDfQ8x9gg1XPXD0f9Z/hVWC1kumtJ7uu8yZhCOPIBtmeSKt4FMv5pzgojoUZE60NrjulS0W+gzTKcvbYO9u+cvd5z0TWtCZXk9K2o65vAfRWh0qN2kU7CEQ98FNAgmykZ2uzxJPR/cLAenypTH1w6Xm7T4NnWAMcUaVlkg/jl7yhfYaDGPAZAlPy/0ZB5h5zEwneV9WLwUOMlI33MRsLPx/VF+o+7aKFoHTimb5mJiKdSHykgxjXuMEhJs/65mHsHODeqY9BleLZqXCNZhkgvJcIHk+4QjWW1ozKtxC6dwA/DRmD++j19+a8273xueoRfEawOZo3Cu3/WPtT5T8RaNvjVMdVcT+0OWY2m9hML8ZclRjg20+u48lsReGCV8zoZe3QaNyv0+3kXmYoAMmXvniwYRf4KAyueBqKRHK8sJMRxqTHFH1RHsBG2yqjaf/dAKKo55cT5b8F7HlBWMoD1/X1N+NN11UsWjy6TZQBIUn3HC3oBbM6yp9sDktE4cuqs44HtQDrcmwcZyG8GW0oQg0BQKngcQzyuIQDiXwqrPMUiiI5kup8l1JQ8uR0ILgfrOWL7HgNHHey1OckxQCY0b/eviNh4WRtY1MHN0LF50OoN4i/8+jI4lRcOXwxXAXWqCuXORD4NQUAunD/tklBS9oeC1fytDBQwt5qyR6uaSJRwa7Yrxfywohu098Y2eDGZjMvaGwr8MXuTFeoBRAEjoFqQDTyOfIrSK/2ncQzm8Cqxs9iBQD5zh865W06cFkCucPXvUogp0/nt2NXBLi/5EA2Rxb17sRKAd0haqM=';const _IH='3ca962170abe924e374fc065dece7d155e138cfb06ba382eecb85bbcf945cddc';let _src;

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
