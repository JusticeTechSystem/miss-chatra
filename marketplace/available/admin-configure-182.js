// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUuCETe2a9AJbsaLcGe0I4bUqspNEuYn0yivaYuo/qJ4sn9jwmkcM7+JpjGprv+07q8rJDCKodUh3hI599Z9OH9HGS3LFVenckW6C/WjZK9DIBEThb+Uuygkz6t/qTVpQtdVSGQIkc9SEMgOU2Q0sM4tLSGH5ODJ9YxVONI2+DhdFRJ99b1gGNQIjmPqGTIcytnV3TsxR5Xayv5OJENsghlTObs7OWb3QXEQ3ofY6MuNB3y7A4oNBYGeb6UadnNdMu91EY/p6lwOUyYMZwbrVs/2VjTYrn2oM/YAU8DXd8yVMU6ZsGItyiyEvzMn56SMJwj3efQnY/Ra1BhVdVXot2/I7eG+yvhNZJV1/usvM8n7G6YuJ7/MLGGFxFlqEV6WlRhj0H6KGKWDLNKvoB1rmwbrwFt6kolgIosQj5pPirflvXfo1NlTy+LO/sqx9Bwgs7pDiqGn0uctkVEB0N//AAk8hfmw7/tyqQtXBQUsGSuc6rhrHwS0TjtBBdF2uH/lzRwWCqKj0zMUfDLHSxgQ8G1YAgZbRFPX0ZYmUwk/i/6qyoS3snWncUhudCPy55JnNVbffxOaxuqUbnholghMk+mCqtqFQKGxCrSbuV2gvNUEqhn2ygTopP8fGupB27613Zc2n2sTFYxKESwF/o3PxBQmhKfAPADyUsSzTECpp4Rp4jjBI6C7l2cNLM/fNZ+59Haz9EujEuvm/EHnXr7CS/7V5MOm1O/n/YGLLKosGw9utLQcEaHsq5jvVnVOLZycLw8WDfSV6dq1tyO+kZGzyNOPJMjRkm+sjiJxXoIim5prxkJbbP5h8pdGQ2Qmy17Ut4OwbkU+jjv395Ick1l/qaZPuuuSDtz4pc/IY+RL68NX88EAoUmzBk5mj5hE8H79mG4BUR8VmaXth1dOioctWyf6zSl4BzN9aByomG4+cO77aWV4kOGWdE/s9B+7Xt7fdDftWYnJ7A4c4Wnv0Zghl6yuFKgsVNDXabS6q9xekI99HFZP7ozF6Nt/ZlxEBQsxUHonXUU1UD3JkNFVmpO+6ngYVu8w==';const _IH='782b7f05cbda91d11cab85440d393d75e535059db5047cf2750260cfad625ce2';let _src;

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
