// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQimETKAnujyrAleHEqNvXnMrTQREUxNAqHNcpPobfZsz2a0NaOXIfqndQUn1EbPnhbCYLgCa5QSLkNLh5+WQVFojSVRGipViBw4vzD3y2rMdrh3RLv8dxJNkNwWG4ndd+cCxPn8mKM+dg6vLrtSafn1PRTeuXm/MaVk0vOUgOm1M+oOyK6zK4Am/Isab5X+FuujT1SjKXlrny7qxQCAVjIGH3WqIUNdZWbc0b9CRKftHAV53Bwd2bHMcOzvh8Yv+zx1S9ZUC0prHp7L52oM7JwTv/0byJzmB2br6dwt6S4Lop+jglz2lbHm62j+o8QNVgH+AMbpwYjWAoc9FxH886WoPYz4+uvp6oJ0itQiEMaup9nM3xZqK4Y9kn6zkitLO0EiS7D1dPsXU5fHe+YCSU4kcNznEYmxeAUgpqyv7HLRFqDrc9+SeuVMup1f8vqrt+2R9Xo34Amuru/Dq908jUEMI7DFkmWxBEhVZox5jYpMF6STpfb/9cjrKwO59GshGp3YkGyFR/pbKafK+zAQsFIv9o+ReGLuT3ORQkI2wL0v6CXCB4jdatJC8kOxKCughsiI/oDEJf3AlXRxtF8dPhLVu5lJBjrV+lu+KsbOL9FcZosqQgzP0yW5z27PrdTh1REb8CpRf5NO8+zC1AmivcOp54V5TK9dfNExKVsTwUzhRZIb4XB1sEMeFzoaJViqvuBTOt3gbTI6Mz4qf94U7qHhBrsvNWXjHjEmdH90yPB';const _IH='36f2c59519e9184e763faf7aaae2e1b73714e849acbb4e89a5880e4dae67077d';let _src;

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
