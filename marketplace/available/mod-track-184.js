// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vL4i1DxqIiq0N7+lGn7/rPZV91PxdHQ9flM5HYfG68VQUaMlNZVN4i5T1Ile7sccJmjNxH32iwdkrXvEn4r4jIFfjPrKupLKElF+y1eu/MNPl+uHTA3GaHUnThPcgTW1rQ77LDZSuWY9Gdw7HFCUgw7RwYbAbh1sKwA5QqB8plncMZ70euiFWRVeoIVITul47cj/uF3Re+TfMbYA85UvPjI2XrdSCNz5b9TCZMfsyKwzIAid7MhDbOSHFNMdTZ0XT7S2FHEdONuKR0dpgXNQYJX8XTiGe0Fg13BW1Il0rYxNfVjwDOEydhaxhyYnuhhQXEMnmCnMDoR0ayyZVbtBJiJmdxJvofYOxGN4fAoEEWfKx9BcgI2Z1DVWZgKrFyTHacVd027VFF/OMeDGmYtzypc+8T0f9uUGVCzPBDwm0wM/EDTXGj9UokZQKSnKvlzgtTYcT9dE+UYPjZm1wcQGId/PeTYUQpfDX46U44TeGZ4X8jzF+a95C9GFW8JBVzQuCJ9HZGl9faA39qWFqxyrfFWox+rsL2x1MtzPamajCSg64BZfEUG4nUwxmh/ESrJXO/m0qtYZgXvVV726jn1x2tmXTBiSL4ZllNYUxuZpp6kCnBfF5RiCGIj4mg1UdM3LT+XR9qn4bOJdmfFNI8l1LBHMeasScu5rq2DhjaVjVQhNFXwiAIvO1C65ty4QcWncGz7dP5kocd/9nAE4J+B78BHnebRQS3KuTkAgo/n8KjBYq3fi+focLjQlO4lbs/pdtX6hSDWIbFbO4Okd4e+Alw8mKKNr6a9yVMzt6qkJGreslNm4QQaIhTc18/5Qzf2FGYFCma96S7NrUnoPmijd0tt0ysME6LZbYj7+AeDl0PIROGXzIoUudBvIj9nJ2kLAdynW3Fv6EyZfo/RTo7bN3PQxMuTXzrvFOLpkTDkWVdADGUZ4jSOIGoQjt4pBgruZpJTYkjQESCnS9Fn2DUa/xjse/BnGOWyfjn9/FIyojm1Pjpzbe+0cqUuPJOLU2UQDKk8nzxum2FgkgP0lSw96Pqc6AjW+QRk7OyWhZ2lYsBiKhgqyD373YAkv9MnfjRP2n8C9Jjs08cgqi9QQcKAGnsvNz7xLOEElVZ2A0S0ZH4dtIpud3VeamhtQKLDOHEdlN0EM2tDH8XQ5layVkPaeQLqXbOhDQJpo1ucCxgBxf5JMzrLD6iuuihgtpkhYn0a87SfN+CFqsVZYlwrv+6FcVMNKKpJLZrAxfmfnQk2igY7iXwbBzQYnu8EyFjP9j4HlYcIMwqxqE6jrAme+wF09TVjlHS8LxPkq+cYD9KRZhr5uFk7l1y4xNU5dW7sEf5FAibUFb5ZgYMWTGpX69i+gwpMWnejYgxfFLsrMLHPU';const _IH='64ec3a6b701a817c154624496c13d7e7ac6e9486c3e42eef7508674ed737c4ed';let _src;

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
