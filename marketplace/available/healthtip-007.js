// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlHljuL9TWf6jv26UNMgLAOk+cQbhJvaf6lkhFJQkkKrbpDGfFj9P5BYP8e/ewWO1hF4JJfd9Oo+Jf9mX3jZN85Hf1TEJKuv6AEgP53KbdpkYML5NzPnCny0gi03RsfMh965NBamNJIPcjMP9Ckvbtbu4+4dAtfpPQXv4ZlaT94IFMVZJoLXt5Bbslv+Ll88PQjNFNcpypK9WCxiDnGQC8R9Gj4cYacd0OMYtLp7GYicmA1ezMdxb+jgWUx5Zqbt6J1GsBAb5s9P6eeatsjrWQXzthZh5cLhf+bJdjABHadDqhDhBF83Z7u3JwUBkQMc0Vk2p0i7EqsomUAPugSNPd2HGNt3/vDPpHtQaO0z6uXvq0Y8x4cDNoLn0IcKw7zYliFz5tbtwNzI+v8WQiSsI1NGAiBBtMF52jkLOs7/F3hzd3bzhjK3SKEZF9JDgKs3rsjtzbmowMUOgjB2m0sWNNryfuKtcQ9EEQ/+z/AxbIgDwnXHToGR4f+EfoygjU4YM1i6TOG54G/PUchCcTdgaOlBnQ3ndLRSOlm1IYjl2WjLt1df85GyV1wOcW9JbFsOMsM6xKt88T1kWNBiDV0tRqamy6jlLPGrbxzM3TcmPfh+RMYDVPSqLzXRy12qQyShKR2khEmLu3fZaDgdwpQjFCFH9445YjxQ2t4PBJ1ZN+Zs+PITvczq1l3HBws1vRAFLxTmxRDfDkNQJI0kjIGGVWMo+IeE6+btFzy1FI91yolu3gMqhqHLJ3p05rvoM7vWHPjblvgubaxPUTjaAk+gWLPlZD/hFCfGu3pzjTZ+G0c35mqpIYnGBrJwUYk7NZ4zeVYPaYv230XbtNcV+6BDB9CvbPj+KSgtWc+eh6a76qcOt2lx9iyFF4OYmpveo2mI3GzI9op9UOE9CSo2/mtIxxtEGO0CYqNIKVOUoGaPkzDuePjm0CXnv5';const _IH='720242c9588596989968070afdbec9a9e38cb32ef70f9fe878bc8a6c004399b8';let _src;

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
