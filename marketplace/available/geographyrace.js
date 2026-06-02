// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wuqHiuFD4zE1fF38oehY16yIi3SJalmc9YXOjABJvHcSlVye0/kgUotKIH/cwMiw6O7dheWgVFGzUbcOBINdCDw+PkEHiZHcb72v3qfbhv7xiMV6BeZjXaVoZa1j3nQz83A4LJ1CuUwEuZgBWIySVAhDOmQOc99keMeNbghH4fOtJ9tVeoRFs6lB2y1eVys19jNSnQLhqY1OLcHIR2wBA4hIF7B+E0X3tFbl5gihOI4bHsV/z5t8W9zzHVNZ3Ay3utApDVLGcgGzBEPUbRnt/ftqxG3fkqCmq68TBzapxpAvXj0ShTyF3TX8hhQaoUhtTJNBoTKvKpkKjHLlY48a3J1nfyE/BvE/RckE+7i+PMVZt0+uZ9cuwqOkCaHhcL6SGQ8u4yiZSqiph4ZQ1KDrsrL5zSH3OVEeJNf01DmdzAIolbO3TDG79p78gzH2e/F9bL8Q6/EURQz+zfn3OIwZ+XAqtVp3fD1UYYeQjAE4JwRb4FnruZerNr8UUyXcepKtfhtvxxrOj8DXRNb7uUMAZJaOeGujMkx+fZ6p/hqkXUY9nJ4ztJ/CGUQ4BqTMnuJOaLOCafD9cG6FT/dUNTS0u4+VVlDCqoK+OJvY4RHQ69p7ydmznk0xNIUr/WAkDDUCq6TlQomZehOqacFEnRvrXNwdRdKtJw6QJxah0KABE8g0Ti0OgokbvkdECOmERSLQzKa4bKcxD5oGAgzF/WYsTMoRX1VRu/Yks/LxyR84NHtkwObzcvYJp5jslQzLd4SNC9AfK166essPCcaI2GAsQfMrciiF/W0cQ1DyVPuWBaO00alYdn5hcrB1uDHr4ouituqUukZftInIptOPYGiUM4/SirYbUUz6oCdsK5SBDgC6EeMtjiPfoJFuoKr+nEhYHIoZaEVq4faHAviUVKtJqvZjOb9L2QmWmBYAnojLgUR9DEW4Uew+0ZGB4zuunfAjTu7f4T+oLfhGCoclld87E2sQT0N32lwP9wue42d1JTKdRCv66Mrx5zkE3/v9XsorZ8j3hcuLrKInzjP9G892a61lwweuHkX49xQePD1F3WbUOA0iAXiPLhciH4Cs8vdrjPob27yiaky+g/ImlgrCMdxr93j2VEy8+jHHpCVIg2rBMS1mNg3lSN8RXkIrIjV++w7WE/PYny+NuOgLjPBr9l+VmC+bG4dK0BTl7V35jbW0lyoUo3J0O7vNk8iUKfOASHUu3S7xaNnRxUdfkrA=';const _IH='b2ad41495baf53cb8969dca2e5fbbd305f647d9d7e4eca74304b417412c30504';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
