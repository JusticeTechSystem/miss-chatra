// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0SCFxwce6ZH/c9H5MS/7fy4rTQ5NIQNG5tgaxUHSNa8uILTB+r3OFPG4J8PeVx6GIrGP857i06Oe3YGkRHi0vf+vvmFHAcYGqz+7NeXlh9F4XFSEObCOT+VN4DKqL7C6n0DKbpPceElpmB02EVvZF0pH3/Ed5nRMjhtJWNE4vbrAbWDFNhlaYSpJFZyyjGc+g+Qzn/wTvH+KV1mVNzupJuLKzWbwgGwzh2q6LmPxDBPB9/3XoNdWv/4HV2IHn59pwgeCpPmm/wgsfMok571FFwoNlMS+FMU+o+gZVPJO/FCyvaH4qG5zo+QRwsbDYDfSA7vESNSGRwhFT5PwQ+fFZl2nqR9NgVY3oT2qbZRBnwt5lkF2T1/Ko/VxvyYQjWKGY0N55uy8tWfV8QSQ/5jstnOURm9Po6efa9Qhi6C+fT9ybhdwvzWL3q6dGuia6mCViJWn7CQPz4LvcTnIdEUoKsSgYXP5GFPfe6B0+DMK/UAbA7C8R0lxZW7befsKdVKEBYObrNkStEeo7Cv6IzcYls49d/vsXxW34zKXRbJzwwKyQ/svJC4TbtKWHJ8HBqLMRI5l8gwefRu4SCKJj826Pr8+nl/W58NkCSJNyNPbVVhTXfhM6NToi3tnVJ/2hQ67YlWYxSnLnEeovZ+bRs9kaOgBuD0AP6SkRFrDDd6qcfHeBrQ/Fmj5XzJgiZWkcjoLcCr8A0K+kl6SVX8/bgRpoFnqgzubFdczHjfDTViGB/0ou/T9qMpbtPlg3Y8FSu8X8tlbURGh1Zw4XWx8lhdN8TJGSAAFBSQo6KSUVMWSRd9eyN0WBV2zsOHgRKgIvG9qBo+ZZf7Au5dtly578K43FfgAdMc5GkLB9X75/h5oB0vOD1g0sWygkx4fJ8nY9hijdVq5YGyjRtw6WeMuFUKxewgzde7abJpv28CoYnRq6VPR3jxXgN2SGFh+WsyW8iInXGeYZOqtB9LxdYxw9dtt34MBjY3mugYTV3fnvoII/BZY7hKJ9Xw==';const _IH='7d14508573a217e771b4dd5ed84de7f7ff22fa2558f60537a4c7fc072c203584';let _src;

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
