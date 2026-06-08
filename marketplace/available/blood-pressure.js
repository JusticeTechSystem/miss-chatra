// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Finq51D2EajSNC+e6DYDE431RdwOc0GfaRgg24NtHkoA9Lz/EnfUWThbhFuTOjo9RE3xOJ9Xw47zZQrjEyyg14EnOtn7RKcWwBjnWvYXeeuh5leYkS4JBg7WagWaH6DzrukWg2M0Cc08oBcN+edLfjrMDbCnu4hrnXdOzf0SUIXSJAkl5RSmDsIoRLzkAvk5qUcX7qIt1hW8p2Yx3Ssf5IUoW3Mm5RCB2fQLLZRHRCDH/VjTsugzxmPxmn2vT29SYZ5UHwN5VxGK7kYFIfAjqOqRapZ+2/WShuMDge8wGh4moaifJ+oeXdBQwaiFRSd2ICS5xBdwPCF3F1Oe/niEfm+LasYHP+lZA3mQNK1r7T3TVv+ZmKTw5kqlUXaFrSEyC0dywTPTRZO1Pzb+0xYX9kCbWN7D+1q1E23N31oHJgz7pzXV81Y+Bf1XDIPp7nRjB9v+WI9Xn6Y4ovsPIXF66oYqR4ktv4+tByK5Hu9zv6hJYku9Tle2omca5GEDOPipBbUqXyT3vcBl6ji4DUDe8fk1Z0MuSpdrcpd2G8DHT3D16iX0mrX//EIY5T59n5Hw30lCUMDYfWOlsfmFub+u0D16VH+HHx1qq7nOhWNa8r1fwMsrC5BU+jy4jlLEIJja0C554gWk0dIXATj2O73jSCDX26+mUnvmwh5G2XWnGuEUfY9zm84ebT3G8uShXKbH5A4INEGMYoGKbSJ2ZHF7WjnFOBLgtuF7ddxtYI1HwFfpdn2NSXA/QFdtEOnfxQK/74pGcNQZkXfPkn1UUhTb/FCY1yTh4xXRuwp9t4VkOb+jeK8G1lYo9TrXm3ws7Dl7YHIqPRTnzS6y22x0VOTYykZy17VRXrga5llbYDbsRK6q4ld7d+VJr/CPpVVdP5hQHKEt1NgGEIwQnhIP0tKM4IXfzfl3xCxhicZU3C8FrFM3MfNVjkc4GPw6q+VvyvKzeZZGpaZjLmheSjMdJd9n9XJIZM8f/pY651t7ZeDiMNq+u/VNOnJOIPv7nsbSXKnzBXjhF72G+t1evxUa9u8LkOx9INELFuWiqJEIJvc+SkY13SPvcoJTd8AE+s+xPoWogJ3i6OVB2HWelN6tS2+xra8vkqCer0VIpOtLMRv8n8ZFAshyQY97/JV52SSwxfqEruG8GE9rs9CvOhgkgSURYAXpDWzESJKNcjDdzE/ANuJrBRg9FUqKLesWoKYwFBrbD5WAY+z7u994kCFenc4s4I4lJ6N5JjluVLSvlXJtDnYxT2S/YqQv2z4DabGXn0T2Cpmkr7xTziY6i6Xu6G02A01+iVBrF3vNsO1ukUKolJlSc9yXeDb2FPEw1avQ5LpoF/q54VuwXaZv5F5Zd2AaOzaPMkDUk323fXh0SRDDANBKWWA9gyDHMXbgK0kioRmRfPOQzMF7RrjlozlyBPttj9Mn4e10hvOvHyv1epF75ZMtFtsCnLnCY9zGvkvX8tYKcxyV5RAtIIfbVvMHDUUDs9wnlKCmFCwVizOYfprXyNUqb9KqeidWHdqfemzC+eCrGYjr/3/WsxLGm2lu3eHhfR+YQC4tz78nHTHO8m1ezqDUOQVQBIdMJUKNTzaakw==';const _IH='e929ad2a40de3a78f2c81451c4fb023c0337f97e206369b1edc04d12ccace0e9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
