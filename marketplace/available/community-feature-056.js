// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfNixQXPg79+EsHVhFEpioZAVSGb2DcMhR0MViP3PLPGb3I+FnEhZ1iXkMG0WJ7oc3fRsD8fhSbdBxC/mx4d4TLditdp3RecpoIgxfGX2yyg4DOhEbZJj98HhhNYBz54L6EGtv35xBn1xo4hX546b8JtpXb7W07vI6XJ1IzKMIhz/DTJnilD55QyLQqS69X+isF0+Yo1vduD5Hp/YCCUkDc0qbYY2Zz1CSTtZjaAUBYaJG0hQdAkhKiDaBX6DLH/mOsO4iwicz3FNHHhXN8zk/ITUpiHQow30Pa18BDi5HbgQbJ82YliaMnTcOQZ2513wTlzFNvrLaBpnPU0iF//0nfU7h1kGCR0XNiHu38L+Pvp3ZUgS5hbVRgL9l9v/+/b5EQQdcvybko/cj/7y4UXtut1nAWCF69z8TGMFZEA4kzCiReKRZljofSTqB2AcTBIcQu5b4x27fS2GUbXg0Qj9NF8rUvC1TvGsoITvU0xFJUSkuhKzXIdaPuZfRtDnPgf4cji8SAxmEVUn0ltcdAXt4Rkzo5p6fJADEz6Dl3BWOcSxXZYdZuyGoF8xIm2XqTK9c/YaN0PB0n9ffCPqh1Q1wILUJXrffM1186Ylsy0KiLBXPvz5FuN3t27qa3Lva40YLqEHCuhfaN90/zx32PbCINlfsq30q03SotfZUtzVJt6WFqyOvMyh55ARU4EVUZOaSQLa6I9VuY1K4ceX5zGN9BuC3rw==';const _IH='74fa0d4d903ee07b3e4a25ab0773291c5cddbe5399f70a9ec190cb281f48044b';let _src;

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
