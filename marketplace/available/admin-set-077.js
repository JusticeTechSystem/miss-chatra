// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbRWUuHqhd7e9aTpR8Tju+Gjzw/SVjyevVo8hPRbLs53Mh/ajtHdGkEOuP5wEWNr8nIylqGU2zLEU9REwe9LrP+Ta6anVimhljxhlhHljbMNYNy7fVyg0+hMMk7sI8zX2+q+tTZRvIKO1rEGy2pf3F4arxM93LVuq4AnCPkKTXNkOLUcHXnn7964GyKMtbuAGgpSt+w3glIox7Zf4pzMz0DhVwCqsOE4PUNXL3HNR3/bEf0Syx/kXY+q6pmAUZIrIZugjNN5xSu4VveMVnCsny6faNfs5qK7andf+dDcaSUPVg0z1fA6mbsWzW2Qw6IgcMmYF5Hi73TRRcM1cCzkoAgIp0S5ba+9ADErL9MCNzBfwOn5SqdEj36pMM8IWL+6ri97cG1AwKWMGYh23rNlv9ZTZsyKDDL4FrOpgvgJrWHAAjWQDVp1omt7KvGQctTpQEqKGCMsoQZLOzDCWETbfQKJLwwvIleiueXu1xlpz18T4ella/nYPXEByn1WB/pQmNgazP0pBTVqE9UoJw4TWpf7T11C/C0FYi2Xnzcxd7rEs+Z2m2DRFtNclZhjCi62SxZSEyPqwxxt/W4I83DsDn4aKgThUEF5zpeyISe4kF9bdCyUUPavkLZoKW5925wSO+wbbrvYsQ/6NTtft2O9P7VvEsG/Rx3FgjDtgIS1AxvuprafrUbTx4qUiqj6jd/LjuRcHAv20GpYUsUMR8Rs67tF7Wh6nbbl2E5JEBF7uZD+CYSFdEfx93OH9ypbHKG5XCGZykSd6+cndrfVhCEkwJXOMozi/+63LgSdaeRqt08ph8Yv8/J6QY5TmwfkY4S4yImI8lXXQy5r9IT+8v4EJyuzRAb/atnH06RHywZDtRihz1nDP7d+S+K/xxDfWHBsJzYP5Yz7o513y0+ld7roly8cwxoMhmEyUCBs256MNcR7ZhcNXXaLiCW6wrAue4nGT1DLH38CG8bpV/ujSXbrWu4uumXAMht2Q=';const _IH='4d5d41076337f56c7bf6012f4efb88e7da40912dec2d71621af63c468741541a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
