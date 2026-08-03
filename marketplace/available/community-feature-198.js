// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKxKy8jHG4CO5xRMQ3QGw9gsf/fSGwGWxNCv6P4ZSk5XqYiNZFK9ZH0sIXFkbv2wcAEQrWrfkQvN24IJFm46mWUBvpCpWmip8TyLXMNeXnP4Md8tAhiJX/I276HMpPn8a5K+GJs2ELMDLJcuyigqKtS16H5tUoKSZ2+Vo1R+Yq01Mu5SjQm7gGzAdSsiFq93T5ZjGJtCTIWiMbpjEPT2+2YT894pRyJIigkXTjR+kxwR+oTRSh8Xjlgl8raVDGl5cZ3Y0/0iBGgVsww5hizrNSkgmur4oroYq5QKb4Y7Wjrf3+s03lJhZtdcAnHcOEffGMp7TtTls5K/XZ8Z8kdTIAP50vD74tQiLg4ccq0ItF0GqfR5hhCEfk4HUI01p4LmI1QYIlvCX3VaBYYU7Tr3Ked6SCtD732OHjqLCCK87COvc4L5MzxG9c8eZMS6jPmn5Whejo9lj2hRv764+xb9Wp6s87dCWdWFyREiBNgEsz77lhZtXfvBXSUyQtcZzKa9K9AbaQF9Qc6uDy86atuvjBPg3/9pXs3gzqCAOUJFpOtpdGHmPDR7pWzE4EIboywIiQcN1VyHQD/4QAb/ewfSZ/uljNCFi4flT3J8HgzdWTi7ZhTOiNCQcdwIEzgSUMuHmR3V9sJJPuRvEkVVUxG3z/lNjZgehSbnLU0fqYXplqI/wx8yF8Pkwd9yhK8rnaToWkpIAeTdDG5ht4+e2Vqez5L6Xx4/FbpEMo';const _IH='c122a7a1de677d0081e338c41a005f7cee01732c0d270b9112fe940c988101eb';let _src;

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
