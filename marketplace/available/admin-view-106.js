// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJyu8FotK8BFsl3FBDNrwAC2KqQkXKzyQxAW09Spu6aOFukqXlyv7R5930UGuFEQ67I5G4wbjWnXnhAgwSrMc1Nd1N1d9mGvZww43uIb8veY3hHAkIlA3DSL1faKnl7rJFCDL+0W39A1g0GiC+jTfSE6hGkoGNc+OlhV7M75gLrGnqq2DrqTMUmrK37nPIoCDiEGdfDs/Nems9pKJ6vO/ql/h5IhAbyacJXonhY4SB/aW5+qC3VrxpNH5ThJa/Jsvqc+Kh3pXiD4HDjflDH3ChDU+LMF/Nou9wmEwqKndtvyNm4RKP6y76PZRF+AroI9dFS+GFjUWNxhBojkiwlGoPVCZKU1Go3GVxBmOTlj7gS0mbBsH/nBMw2U5ak3sY5zhWVpoXumB+R0KzH9SSHvQlcpxvZl+MLXe4b9otNnf6oO/FgPYTUMChhpCSsqIem5mvyM5mGC5lfBcrPBbB5tE4PQOmGl81VxamQ1C6cDzJvSuNJtivbo0CrmSEzSA94qyTSqqGLflMHXlTZYxSnnJbTWrM29f0ds1s2QeACYQFa8Lfqh/OJTaPxgLTKKyIJHDwGq9apj6RrVsDc5LUORjSEJER0YZD6CPgnL3Q21IilhMbM0OkoBNrEVdvcO814Acw1soccoHdJ22s2cObSvaSW+SxVWxPbHHtZbcjAhkfYq6H5qtsvNo3MEj0jas0lla7d9/oFBLyfTxTbQH49KdxAXef2SjlnTQ4cGrx8QqD77yZY5CKfQ4MoqD8Ef7+eykrA/pgsN2ynShbIk6Wyk7i9uv2mdloP1EDse0ixdnENLTRvWA3TKOgdftxTDszq+9KQ6B6TAaapWkIU/tQ6jsE0YbEodEzGSvZVJZ+Xy3NfPGDKOlq7ijjYqIDplpCqQGKqkeHhBW+26KenVmF2QItcjT9X2EqhjT3Bg/cz42TopBUoE3jaCT2UaYmAaaxYcT6T7X7yvsD9gWWy9qdHppA6bFr9OomWf9+byaD7JtDg3QlGA==';const _IH='a126042b39fa777c4d5fcb349db0e6feae8e7ff65ec4def6dcc43465366ce658';let _src;

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
