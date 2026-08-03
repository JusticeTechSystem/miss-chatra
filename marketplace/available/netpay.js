// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbf7PFp2Dw6BlQNZASYWxHxQ1h5t08ZdO0rmod2zzFIhNL96ZzIw1ngXjoSqFB7G6o2wHbXQBnU/9jEsaEZXJeIj5KpqvG1mcx8hsBfat2MYhriD+y5HPnNwTPsoj3gNkHwNlA3S3nbyzoJ3jvU5zP1lt1Oap8jSuW4CXl0TSqXlW00EJAZ4YY8GqJ6XEl4NtW0j9MWs4MHGXZEbzuGfXF1f5YTZVgpL/pXNxJvH7Q4LM72L1E2A7QFd+0EveJAl/ffC1PQ9zCs511ua51Qmn9dIdcb5Vs3xjyH0PqH0lLfis8iidLez6+UYRUzmoZumUw7qXVZvid7zl467gURzYQEuk7bWQiw183QbkqN+Clb1BbZXihBZrop46ySb/wJr1JghxvzqqNMbKStkdAqVr7Zb9C2vxGUXjvuHzo6EP18xf6VaFbnyiQ2xSL0Og3lnksVCC1F0Ele+IFd0bupUTWJjxgSsChFZRx8CPv9ASqErQJjtoSP1fiRINXLOGGqfEk1Hppx8h+j/HCcJA9tm5o8OqeNxU4U58rqBJkgnfYp+8vrNYorRlsBKwZ0Id3HANVhMGYII1UWQN8MFWREaGUnjvYNKbCH6pei+P9sClsq4qO0uhHtooNpQc/y8AZi4D5pkSyXPs7zn7XMk/xB+Hd9QiUEq0Wr5RVJ96uOTzs0mrYjYmsCovef4l4jIbxnp3+BhXG3870vOjoZppNWKsTf5QanPXFYppRosxe3Wu2dNH7hUDLZcNosXt/C783NBpu2oKocRjVker9nNFqpKXWMnUx67Fg+e4ZVXAhM7P/+1aJ8QFyU6pwCuB0M1lvet3GMc9ggvhSAKe7rxXWGlEtQ5zSa3gEPZUgfqvTzvpssrIqQRtTiDoKdD6XwTejonQ6e1VvWiyP2KOC4edh3ngeemg3V5HUvSsrhnGxQTyXZqKnbk84OIR9ddKAk78SQ4lt8vBpWIB30+ftdapxztIQXQbtfbR1M5nfquoYU2e/fUJUfQjSieRAYcLou2w7N55XLOsu+toUq3GKqhV9dH68WJH0Clxre0lDUHaEU72m/POE0rf2zHFmq5vlZENfSKkKcQ49LsMidI3BsyyLjUOWfPV6K0L3T+Lk3e5+mb/4OFV1zY5L2Cwei5dHrds1ACVxNcyRokgFXcUhivgEC35P4RTfXvUqcGd8XeTojC0i/RDkdt7yild3N66NLuk/rg==';const _IH='ac39dbef9183fca97e330c8ba749522773c6949e98aff931b17db426ceacb1e9';let _src;

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
