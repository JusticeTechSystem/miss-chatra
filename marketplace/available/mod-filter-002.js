// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvozuXD9RtgJgSOg/jJuPNsn+yrORT4/cCiZEVZeyilFIkC/ilg/j3tdeiigtw7QdP7cUAHTy45jWD9uIAjHn4eC/RjnCwgUhIYjn3eF4mWqw2EFf6YrsLqzc+TN/P4uSVfOOrxnbo6XJWWEn8WY8yjQTxfspGngLGduXXXKrP/0hJOK3Dmol0Jga1ITO1sij2gTopTPad5eKFKXkqs10dCOCWIAahTYdne1xv6A4tB8AL6UnEVyPTiHs/CjNN7n4WK93klw6zLDFePY/clFwpXSTgFXoj+C93OiATjgq6oxb6/R8y/l15uvSLoKB2V5zmQVvlCJKtNLxbbDGaNclFA3PSJRG7xHV83/SekhPCt6GpbnPHDdvdQkFwmoMvsXsdqgE6jbyr2fB5BwwmpgyAQkubOjlFqQ3/VQvTsiY+6x1mh4PVzV6weU2JndyB/Zq0rs7Pb+ihwQTAfUwn2tHtk7yFsAoH4EcaLqPkAljB3q+TcnuEKBprMliMB9fRIESmPObAnangWzeFzFFu/mRfHGVnIy70k3z5nUoL8ekApzCkKq0dviNyGBJsmdxguaj97r9zmm1KiPEnLYDsN/oxlpgEJldWU9oyjadCPe29XaLACKCCeE+Fa8dS++mPmG671QT1TDDAoU5ko5Y7fJMvDHCmoC+Bp7KvYVFkqfzsuHzGiN3jyNoDeSo/6Dnxh4HmxqDhlO+lJnnSF+85hCy1HG04r6HdI953MsOQ2oQsIDTHXMdLG2qXAVD0Z5hWZ0AiycPmu8uwqgKmiKyKoRWSzAChSE0/kmAE3pXKqb1CjW83SHPArzDDD+xeHDLFO7ak7dIjJT0mYf17RsOXUvBBCM3aBmGIsmNak+KoePpoHsFyNOI5aQLPkq+scA656cVSg0zKKCsfYUL9vmDT7pw67vjB4heN9tYgYCloVEmY+nPZR2xeOmjzH9r5TVYcKKGF8tGeeXJFaqbXQwFDLtypo5B9V6jsA6QdJL9gJ7Qp6Quf7/y5MsQbfhBEUlJP+dMksfA8q5nCyPE9OZhWdXaOPHlb+e99q2W/D9PSl+jj+yirZX4bOmoDHIesGfIShVCA8XYFDi7QI7ur4maCAPhnCW3thgaOl3kZ/u9UBZcpGjGCDPhrXggsg7l7SYwjU80QmtNK/nYtop+mE5UlYV3+b9lqbvO2YR7UIDTYcR4MpcC60A9eiWOBstTmW7VWSHmlNsPuEYf97kNIK7/TPV+x9+PQTgWCnmvgjmfKgwcCTjIec5t/wXFAq2HYYiWTofayWEraD6kicQiyLj/3XlKCB9Mcp66TRKTJCDKoCCZ6ewfHWjvhW3hmJw06gHMEJNZVBiTysshqsJIP+XveKRCvFbgEUygoO3JoevzTqoU=';const _IH='2b9418b5aff6db0e7e4da69ee204634d7641857ab1c5e1af58ad4705380a70f0';let _src;

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
