// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6RbjGp6tRqhlQ7h/Tt23ZOpM39Z5u1k/lDYMDL8dUCZVGvT4S3n9XDYbD2o0WPvUUab1W3xXaitM83vcPoca/2UjXiUHK7kUYn7IXd1POrZ7ANYaQCwjh5BuSYHK0Jp5npSkrNvenlZLECjyM5WkvlztlMNUwcJUe9IrkwYlh0Xsd50E4XBS8V3qrG1bNPlfPgxEubK5ckDqKl2pdIMu3idVKDbpi6ldRQfGBpL9qOl2X9U0kuPRPWTQJY+nnXgOPNzCiCHWOg4tZOflQDEYxxc/qUVIgSFQEaw9qZxkq4csyKsEZWhGklAkv6AbBBY1LxCjY/TZPM2kNuAmoaUqnw0LNai3Q7TpeuRo3q1sWPDKIrJGF/HGq8TwqAJXjt8JNN+WOhOfIOFN/NEbCBWVQS5uFVd4X4sgj1Zu7FahmOg6CMeTKlZ3T44y5KSrGQbZPpV0Tsx0RwCrJTliR2wUI2HNgPMDfS7RPZERwC/4RzfwfaLSVhiSbLCEdgEYR8jp0M/pIg52oaOUnMFGNtzWiJ1YEM/sSTePkVJeqNKlEXeeMQuhMZSblFqdAu4uQfMzxTinFhE9D+GZlVLIjg0aFBSEIxERwQvqOkWXVijjBMMqwT8IOoVd5DyPI9TYfV5dXpGzBF5AYbEhEahUTiW+nlmCSXVgxciFY0+Z7RA43WXr8cAoaGpKslqkKbd4TiFuP7W3gjU9Qvyq+hHwaaSprOuuODQMKR3YeT6CpW1LS1aegHbB8q5f0aztW+it+ckHwjyZByx4xP9z3O428DRc2+wBYeTkibY0aRl7ZnfxMk+4CDjL9IC/ApBSuUiRvQKWEejSZKOEstJp6+nUU0bTS67G64veiATu4vKfcJKNpbhJx5FOJCE9w/gG9n4hKg3KaqlEGTIV4pY65K+7ejEjtQOEgkpqvEL+1WYCU3XF10hJO0km4FT80AEj/2ukTWHau8zoloBApKrW5beR453JvTctxr8LkxVB+RL7dIMualA/CZgq8NRfTAYgRS0J98az87XQFGDzg62Egehw7sIgF7FYZA0A6Zyg7J37gYS28CFeqE7EaTq4tQOMFT9rGEyQHYFIQj9dLHSNJQlkKg1AupzxB321u88hA/k2FoaPWVj6mNO/6ExoA7dLpj8jpdZEABVGrFsDHF0Mn+q7DOXj/xVfaYKJ6GMaoZSNpER1faeCByQ3LsGphP4zE2ToR8Wd+Gudi5FKQ==';const _IH='27e48cf8b4f95797a03698d241c808c13beca2bf011f290e84acd3e6de6b60f6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
