// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rqTdiKTI+uOaps0g6AgH3ySEmoiQ9ZhO2r6R+yTZMOOJvda3dhWgSmjGYPDKvvAhpE5p1t/HrbB0vCNZzjh5y9SsBKUpsvwPSmxysq7atXub6JqSGsfUFVgKHXMcu59B3A2qh07NmYKqgQBtWkzw2m0av4O9dr3VU8fD84vSpqnT5he2LABGa4PI7zyiFFANqnUkYXPGQl+19Kuxs9RIMw4QhYcnORpQYQhIMIpxqOBafbV5fWkaqJ42cNlGMe43vmiowalMUIJE9AMar0YHxlOAEQWFeujj4vocrDkSF5LboERIfmfHbTKIIwAIx9CVczFeCaOP3n4TpOjpg3aKfdLNEFb5SXHzsSFFWWoL6aKfX6dJVsS9fLCN2B+l3y2RuJ9L55wlY2fIgtm5NQSM2UbozLwgmCSKw0eVToDu1ihtLT8oz284jcrBpikKhlwPz4MmlsIk1mjcabmBH3QmhslTGKdzYCRkbxAWSUReEpQSL2CJ/kJPJMAtjI6KXoNK2yfjXMbTySyznQe+H18vRPFPy2oaReYDhJmh+vZdtVP5Gzq++UjUW5qxw/x+lDS9xKKQXXrhd9ZAZP+6WnPg8295giPZn13LP7LXLZcfh6LfpXHdA4t447vRG8GdQaT/mYxOLipi8yEWlwI+YsP0B7j8Z1ERuKAKe2fTq9Azdvb3PkJ+1DuNbs7pL+dnQYGF4riVKai6hh3Ws1XQMmkUhYAIFAembl+e2xODtV29FeIMO2ym9UySOh1piQSvKFEIpA7wcFPhaPU0+lepxq7yvDS7xYfWBP6Z0JV5n/+Lq0SxhPhEdiET+5YeOBYjohqW5LLt2aFTtYIANNhXJK0pLN6jJ2X31CRzVS0j+EWxFm5MI1M5k9+JCNHhS8C50SE+c4HMleWs+DnZeoJFaT7fbLlJAslUcs7Py5lYYsvjbrpj5RRzTGg5l5zZSeO3sYlww64n8x3syoKDINe9jBvMtJPWZMQ8iCKDcBjBh+3104nEihjx1IkcdIKJCw2rtY9L7aP0TdHB3qhT8lOKxmbuhe/kmGDY5hZzXx2hc9Y9/ewqv1LfuGLHM4tf9QEO1LX++/LPMgRak8Kx2YdJHdRWVpYrQ6XA/29Jhyc2tynDGBcr4uBhYAjHnNb+ixyJ8e0EvbOWgJDKWculUKGqfXhDaZMSyGBcg4EDSdIebktcoegnGQsbGrheIQ3DzF4ZEMp8eQ==';const _IH='324f6f942e3114171cedc5b707a107e4f302f90dd85c58440f6214ebd0052fa0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
