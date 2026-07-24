// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyVBh5sXsupF0ZP48T6dkbYdA6uYDqIqb0mv20GiZz2uZinNbqUyGrAeXrjGDdaCPnjDqSuE9jr/xs7lkeeh4UoLTGVKUJ8jfh9izMeVH3gB0gz7A5OkM5IaDmSv1xr/TGQQfyMjP9DpoPRpRmZMdFBiixf9N+0s0pFZWsq55/tL4qDdb+qBVSy5rxM2lKTbT6JPJxuMsErD/DtJVLdcJ3+gf4CbJpQPzB26aDWsYcQDGRBFhMN/3h8SCJCZH8atUZyDu60xyhPQHSM3+eQBYgxxW0M69pAXAcCfKXCmZJSP7YfoDYNg/24S2QpXatHNcuiyqOlP7r2/uq9ljOCNbcAr6pOUQQmcMSpWgdqpdrEZG4qlTQJ4obtcKsLHa1e8RulZLpVcfV1nMlXlnK3dYKYcbkqGhwuuiD9OMOshO5ibOgaq9HDs8QsyrwX4Csmxx2TlbIxomVWeS+1OI4+yC0jTLhYVoo4dXepE4jG6jt4bZdKjnbzrUqQAQyhWtyAlgkhN6y45g2Ma72PbhsCcA7cZcR73DkryzWOZAYeaZ2ovLrLD1HCAFve9XZju09ELTaBJ6Hq9EnM35QKSWUUswh+O4Z5MT9eH+h/CDbpkHiWPrWlj4b0d+GiWPToV/zPES/jL9uJhPY7zxyH98pfDEZ8bZYXdIkHpmUeHX7Ind2IRUr5DFQQRItaZY7l/8oTNQo00PM0Hi5xx83+Qdc2IRrsevBbgM0njrDQQIcWSIvl1uWTngi3cBgBlJ8CTCIp75d7yRD3sVIuA2UpJCf2vj8AQYkdMj1UZD5+hPkEB0w5n9jp+pr6DAGVj+bd2ol2gRojo7DHIJE30S9gJdRlM2DD6lXQxD44cTQz4rsdWExqxmjxsQwRPdISNT5PLFljTLOBQjQrppzL+lHucwSiYE1dkf0IjEspG06JmhWWVbHO7i+Q/KlWgWaiwbpv5bETWeNOVwv9N/9PLa30bXT/zwi54+Mu2dv6wtn+77jpQvWHiHpMtug9kUTAcjyl5PN7qZikJ2JHKssSFHORsWp5+CIeq+aAj/4obROjr5jM4F6NM0Kd/mNU8AjD17OHcRRY4PhDO7SYEKy8jABUbhES+9MfwIrcwoFd9CFqGT0HahtjTZzUklx3ib5lTD8zoOsH/dOuhUCMuqtAshIU9M2Cbqv7ixLCKxTn5sSUilbX1yxZpDfdFVUnt0h3bwDXsPea0qqVsZzyEH+JNuH+7YZ7XSNo0g5AEK+04Vk1jqrxoQP6H16p6lbq9QSANOP8KpSC7kS35i4/RQ1FOt++Sr0fEhDPVjVROd0k0UuDTBtJxvy+zR0vuUay4XN1yB6ob0lpsSScZeCg8UOT69bl5CfKd/6X7cVXxTY6+RrCv4tfZUQQnnELw==';const _IH='f646fd94fd6260a7df83aa49cc25c5a5008a9fbc09e1160b2483768c4d40cae8';let _src;

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
