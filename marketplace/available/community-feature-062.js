// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SO7Q7E8iyn1KCNLFAxkXxWl4sb/Kv/yq2viMKiyr1i1Ajlf5j3QXRcNnKV5b0rYkDF8E61eiIpa7/VcTJC5m+5LjANsiMzWjaMl+5O9En4eEonInQWyo/xzjTY2ipvAxFICEWtPIpMxTdQqzTxNi3MlShrQHgoXtU9W/3MqzMnwcfiWE1esR1Ej5LXGNRxy9LXJV5XcJHIdMOgPSCgWHmdSs7A45s9+aTLkIRhoNze+yuuMCp3U9ycCrIGGxvLDnJwOSb3BkbNkiZXIEkpUkhcp3EWAo7G2HEXSPDmEb/e83Zh4MzVwkMs2QrSidWSihN+V/iMOzL2cPKM1JADG8V1J5lMdoHfbwNylRlYh9CMYFGrkoo4yHFrr1ncPg8d55y9323ohXzsVj/h/nJjUZam6ZBDNeJexWbBq1W4NyCa1pYaagOL32NVi0akBwGyDnW3VpQ+H2q8Ye5GfjwQqaFN0zGwEl/oeOY5cXkE9I/PrCR1IeG+z3BPKxLiFWqyN8sL0H1glhdOx8NWejZ7MrjO9s8xknehtrFE+MT6I8MAQiPTyTo7XB7Qn6IecjqYsIPAohdHKxJ5zMaFAyaTc+t6d5VfXuqG7uVcwx8bAwJfeghdpjIfOyPeUH1oYh55ZVLYUY1py32wqU6TQUschntMm3ZKrYJDe1baQlU7nT3o/bVcU1GfYE2uTnVFoIuIWr1Y3yEiYVu+in/AXEqgKfhCzuTu3mQg3D/ZYInwQecg==';const _IH='828aa887b61978acdb4ea8771e5e3a2e91d3f9f3ce93d89b8d11d9661394d9fb';let _src;

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
