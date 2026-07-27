// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTydOKOws6e3+603e3v5Gnjqbx7KMw+cm+5iAqfx7r3c8M7+NNA9EqUp30kdfYi9UzkjF7IUGGixm+WyUptaPshXTRZLScK8JJASHDtqHvNhbZV1FTdMic19JVb5Yl+98MNfJc2/MLix2y6LkvSrY2VQtA7TnoLooIxRl7iZWCFL01zfl2nFulm9WdBkQ225Yz4fFEedFp/rSdFi/BrkPbbIVPPJLNsYXaQH1H+/4ZVMEbmODKG+Y9Jr4DRubslJLc9WEsxfphH7uCD17iKIhw8nJRt2zX9US2N4KomCmAoIiL/gABKC0MO+/WQw0jrFahXM4QNUa3fu4LfLNfzijufvEck/WC3rVLcJsfHc/VL0HgblRM6q7rtw8JDdTGjEBuhsiFg61hJB1+9wVTNr/t1OkcWizGgL1bVYIAnUrs+SwN4SgxNS5Ze41kYRvoQ2HtouF54nnUvdBJkLnC93FN9IEm51p1tub7FvBM+5dDRUUla9uNZjpx3AG8zqY4t0Y739onSTJZJdAEz+YZWgay2Afq88bQmyNysrkvCqKjZIPHpra7GRGL+Rr0T5CP9pdSlexixSw5atVRdul/KeZ4L3zUJm6LxnNLimbblZMh7vKEo/oRNHY4BdSaczdkoxLUXQ10NXuvBBIGcb9KzstjYqunl95YopJDT93D7Jza4FpYb65hbi/NKemQUSrcx5ANygLIHfXR/bOb4AZGJmt5lzQBF56qC5veeZr/07ksRb1d6hBV7/lPUGZRU/m3dX/qCRJy6GTLEEGx4hJxAG5eSK6xOBHZjkIn5FYUHJJ3UVddORZSUJfLR/Nu6kXMNPMUlo89F/ExGsTnYODBQDmJ8g67mZflQAdD1qxyv5eY51rr+P5Qx7bG9uWwEMN7dlrTsE8MvelH6mGcb1SMYGjWAZjakimceKLFdvKtRPlBn+h1oZKpdekvSsHO6ZYE6k3R0CFMq51xtshmiTWbGVtDM6Jt8uMfczTvlKkkBvnfr3E6iW+ZUbJZy6L//zjJqgLTTrwKfJwnEvFI3sc5aiB3OD5AeDpLTi3u7LuoBBBHc7YeChrpSLsiddCAcJ1ksYfgO4/b/MokZX1UTAHIfQy3o45J1oQpAs0+DgCVXlhWVDPe3CxTMAD35U0O7FnF4OnJjiSEMxqw132KBPXXE8Rjrh776HCXTLbCWsNIgrj3o+c1Qk6FYv6Eg07sP5bhZ6WP9/qxINj4InX7GfQuoVKFpJMN77Yv8inwtLcAvJ0rff6Z80HpOKvEu8KoPDlfYEqoCcOn52ytug+KqeWGfN1DDr9by7UPKn3j04ylvoQpG02McpPPUlQG7mHIXPj25HR4DjduIA0shvr9ZQ+HB/j9EEfo1MUpkfXb6ft0zzaVZzk1tXuxmDkWRtiwGgzJbR4rI79opJDpvSUIgv68+Z9j02ps6iD2QGJZNuIepVN4gqnZz59JU0yYy34l5Z8KwXMw7kWCJuYAhtypT4O+TpuXGcrICGt/WQbd6RTTJDwNL3TRScz11iQfDCDwHXekjpuTxZvEyShDtsGxZSThIIK2bxxvZt4QrGHb/BFOgRKGVWtCEWz9CAK+5obaK2rvTQIyNo651u4NQBAp0JWwvMYJAwOsORgJ9t1AZez5yK4q98EiuIw5UP2jRaDhgT2FFcrWrbK1NYgUGAxJ9aF1jtswos/sJt3jH9yVSTkOuPNVWfKiqhLRTY4tIbjrzjO0OLaZYAex5UYTj+zDvZnxSRC33bGYaBQN66wS8ALcApavFANFkh7PWNas7ZeBHqLs5wwngqewwRhygjFczupy4NmuY8rl+RaSI/bpFpPF2ly+cr/3EdFtVuRe7JQ==';const _IH='a6a1a6578c78ab4c3e7ec44ec761741f2d773dcca2beb52f4b98fff68ad8c03d';let _src;

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
