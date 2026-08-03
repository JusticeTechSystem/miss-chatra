// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSx3RLqXAeiiLSWbx6nY7BEkDEMDj8RAh3/hqQ5j3rfHrXGAUvf+5snZUJ1WXFpxv1n0Nqs4vyW5fc962yUhEKIHFkpDLXQLn3Zv9H/oPp8Pnml0HDa0I3oJ+cibKxEkCrebxXFydFSQhfczUr3VK9587soNX7PLluYXO5tJSbL6lw/4Ce5fl1h5ct4DXNbkrcM/m5hnPb89Rs+dxdUw70axq6dzdt3Ymfw4+82ZsL0jjbqrSlRsQK38Pe7iZQBcNwVtszx6QYYU+FmaWZMTwz6U+V1dgMVyNI1QPoJzl1tYYrwumT59uka2D5dERjP05sRATvLGI0e9RObGcqgCLsr/Jxy8++5guk56f639gyqjFDIw9f1KZqd/zSKO0pFNVXsMjd3V/WQzn0ToIUqje0o/0w673eQ59wt0CVinTFoqczu1gz+9j1tgOA0HmJ63KIlWNVjU92lJ59e0/MmvJSi3JvQFFBy7hAVgsQIxew3EUvijkhPDm6RFSVlQM/NjnwutmlGRh0GNj2LlEI0Vu5VRLbwKBpsA7TV8gs5Bpse+J97ffAwITrFs03fd+FqYQ+8B9S3RlWvNiGfawzn8UZnWWAXNN8wrrjH7ARXbXiib0vkrX3IeyTfFLsFDYmcQSIfrq6Kw1faexwCVZxSxceuspDox8wZ9UrYLmLLGbdWTqnL5uNDCu0BZcPWTMv3yxVh3T81fB/b3i9niMRIP7mV+Njwmfv3V3QL8WTOZb/GtLlv95SKphojVo4Nrv7EQ60SG2ydEw/sQwDp5A3fmfLkIFc4CClseQdyI+x0msKtxHJNErjlj3WtdgKGeln6H2BCdgk9xx8Z8pLurPKaMQrnWmt2cnQbUG+HnSgNAPa/A4f0wSg54+E9eyjSbTL5N0dNB8tva7IVYgDHXe/Klodfw81znVx+JMEAYxwkc+eNMKOG6fF4OVERaG5ALPLw79oYfVfeHl8gi4vj7n9mzY0gALHsSfhR95WeDV05SmsEdZ4AoV6LikgkdwSbJcT4dmGPsB9EbIE9QD99EQ1IALRLhAMJ1yIniqpdEwxB4um+HWgNda/dVbFeovZfEQNAjuEEyORGaC9efRMZGoxjjb+9J+crr+vP3dAcwebTJgQ/RrjdJsArXgGuc2ibqB00O0PdaGIRKJ71abH4JTQlJmruSXzZ0yVrJR8x2lIMo5I0+3wBVilV0O3l7PkJpfOG27a6vTaDm+sWxLeY9sQY4dFrVTbHWooV1bPAn5MdepleYhBcj+fRfxfUL0Tu7rgNrPGCxACaR9/MqQf/Wo5G5ULg4XmuDmmw9TdFJLPwGeLjvQnAloHYIoImF0Y5JoC71tyqw==';const _IH='cd700b268c9272aac80c85985482c2b0929227e3cf26378eb03103d0ace6b052';let _src;

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
