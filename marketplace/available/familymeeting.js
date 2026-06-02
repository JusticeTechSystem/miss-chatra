// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ac0E43k4hKV9sPyM/MOyXCjphMLHsq6gz7LVuYrWRqUkPaGpt5vakYN/izo2C46nOE34jNgq7bhT3BPuYdmlhl+q/23SvQSiorUWp0e1ZkAaXO1Py9xsNmoAmJX1RnUw38EmVAi78CckrxX7Tl4hCNa1yQYzxqVu/ul8cjNpKerUQ6qq8G5wiJ94MDy6EqmqPqTVLoCBsbJHhxejQSO8SyYSoyVY5D2ZI2B8KXTLHaDaIzvN6XaT9kfTFpMgFQKaoAitjxaGKgeKJcjamEGF8wMEHRSbpzLcFxUzsvArdNyzGG5VUnVD11P4Kt9RBbG6XnLg0sSwVtyWcJbv2f4jcIOg+mgulrfe+2sgm9ByOxTbhRYRqpVhFF5rmW2s/26F0jGKBKXzavUeeD5OthE3MTPBuYzoXkXJG0F1a/y4eDA/21R2KdJNnPXFa/VqHf8WgYVFkAnvl//7khC4yM/i6zkNF8jBCr9qbiHcI5iGd+p89UxPGZQNw1KV7A+AmQ++zkmpYwojapXWVtEHdMuBlVEVL+YRFWL7ItOK+5asn5GcnT3Mw29iUVSV6s0zA6RoJTn1uA59+FhKFoPCkXGlhbb5JE2iBvuSfm6f18GvXIN2rZfHs1Vtys/J0i958mZ6aWQEfrzThjxpLIrShWdUBEqe1/Fr5xwPVrWujX6HdqPoC5A+FlgYHWIEyUAFX1p++3+brdm6ymx4zVa30iP/sJ6Cg8QnWpl6snVI84Kdd8KAgelEC7uxDvN6+ORzJktZwQ7zgWvET5cIXnJ+9aK2jh9xHu9mjQwlpIvCPtSnMA3VaQS9WPYCnVmeJx6NRO91hy1XhKktX/iFuVRqckV6etuV9mK5qo5jYIKE3oMENliBHpBhkw2yCnyWjJnGxyB/3Qm+nyupqQ6ZBukGDr0Dr65H7/6w4/ABDSiVVl7lV3DPalcAClZ5w+xfsV1WFY8Ap71zulX+dgPaLpZPmwlQiJkjmN/jpWyEmqcaPnEfLat1+wLFJ62BbR7LNdz+SkALe/yyGQ3Cpp1ZGb1rG4ClFdZtfvmXB3f21LqkRWX3HjD4Sj4D1M7QWzXi22BXNWYTxL78KCeVh43mVBpkLgjqI7gUmxFyoDU3k+YirR4c2eN9XQ3kL6SPt/WKIQWwDzklUg8e7t30PUNTRzvhtnLzuep/moFdHvU/V2ZlRwp7Jjc7pZP24X7g5umDejCVEKihkjJ0cZvcoYEbPA==';const _IH='a05b4386d0508b73d333ddfbaca714f11c770d28f3bc0a833dba8e5955f07077';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
