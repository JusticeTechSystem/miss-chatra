// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ISXfPc9TxC6ZzjF/QiyD1It8F7r0g7pWiWqQ6b/XQflLLqbOK9kufCpvkVfw8HJTku+UnR3huDB3rhJSiB3x9mAB4qJ/XXfFciF7Vktdkoku3mZILPF3R83k00/V8GkpeII2PsTjuN9YbHnJI587+rQXW3f/YbIBKPLB0o0f4sbbzqe4Uv/v43pK/kBU66oFQOmHS24874VKWjoReuvy4rACewBJ191FG1PwviKe+oE7FfaFCMTbMdBeM7/Agzt0RGgByBPNQUj0jRXPPc78efVQwP9713Br86TOHSudqsYMhzXTsrwQiw50FN+q/DKvpV9CyI5yBnjhFl54wYx5ggVtsQ3WmLKAUYhmGIr0m5AJ5kaa7NQnQmL+0QClIZN06grfroQPFVCIEy8lP7klUsizf99QAfGTjrPCwA02jf7eDvIwJYLIbDD6DLwlDIJ+G4xFNO+/PNNJieyz7ndc7zmAwZGwSCE30uUm57IgxtP3p7SAutDxpbHJpnQ8SO4SJmzJZsiba6SOrYK/A1yX0I//vbi20Ss4NxwMlOTLxltFWwiRtslYUR0UZjVlMfCxYYvMmMlB+AovpdEkqeuYp7pmcvb4XHU7Y+ey1OPKtIG68KT7TsVXuMbGwBz7SN+mCV9XcwntYY8QUpfj5A21imnTyDD/TF8Mopq46ZwHASF9Enk8386B7CfI2krdgD3WKqktocTIRMLARIp+E39LYbWgO5K2pzq3MzG56B4HtsVSNtdiuE9UWd4eX0EEVO8Qsqif+VVmD9i3u71ikHGG8+ZPpMptM56W5OuubFJaGx6guL1PuCgmijIllVoeXlEVgJKjhIu5weWgdrUMRHWMkVhtwkMGQ0Kr9xTb4p8mrzzz5idi3BFmmoRwUjQ+r6bMSX35sVPBK/RwOeih2EWWkPPJV7EsKBvtk4s9wmYYnm8vfhiELan/TuQPihQ9U5pFNIb388JdRL6ge2UOpZtL3t/qsfZMNR81XONRk58JZ9lbZOEFOIf6dyWzGiejXsPqI2ItSfm8zhb8m9KYNnLBewNqer6KukPv+TzxQECKUX9vJDw7gnF+Y8ATbytM2dVwK/VUsvWqcRstEhZZv9mn/xRlVrYOYANkkY8oMbcpM5E0KClozaup/h0FXBWwF6+M3SWBoC1BYdW3lCe/QAkWWVpKWvBzBGHhn2MwrIoi7Ebw7LxE5dq5eo93VCucIta1Nv/URTjJwxGWDJEAzn3044ur0c4Ni31jp6dj1b/GYGAp5pKuvAvHkjGv6T+ecdd8q8/3rIOtffaRFh1+gcy6iY7IGnfnNXxLQQo/EZzwQNEJNZQkY7r9kTyh5vmeIwasw6AFeJqReFGtvdYsUiIBjwnwuXxzIGCivukEva+WzgElZCk=';const _IH='9203672730d8923cf3951c7509497fc9d35732ba49b735275e2f8b62273b17e2';let _src;

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
