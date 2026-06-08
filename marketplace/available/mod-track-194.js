// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FuLATE8Fm0CDEaANA251WGJekjIZcoSixCql12SZSzwWbudKsAR9026Ycc328/ErgxjIXfTbXJlr0xT2I7VP/a3RSArFAAdkMHwl8/RRDKBMaWJd1lX2s9RsDLDri4NHNd4pEsHSiidY7yD459byxzbBUkMBDGTm84OcdHCU9NW5Ns171xBNuuYUFcTjBWR7PkgQOz0zJdParg6edtndFoJgoVyQ5QzOhQvj8dyqN6CmixSBUVXrASawXvosvSw/LyE73OifouRlu8UQn/OC/jJLVfneLaw3rLkDJo/S/9xhcAPHyqwvBqUSw3wGKXzeUyBpIz+wblZib+3DK2VlYvuW6YByTXSw54tNVGYCxYL5byCuzAxZ2XxkrcBaAiUSr5nBSCh6yVYuLP2CE02XOoVJdBL3SW5FmTQQoKsxdij8rsqJdLBtTJesrXNsrNUQHcLPSa++mb496upqSn+sk87s1bTa0JSAQu0wbFQBF2ye6EBcc6i5QJ3Rk8y3uhkrOjVStHRB0lggKCRlHa0o/WKeoVw2xwFHnhVL8Heat7eoNq5ub9CMBI0aqIP9zXYwt1TzTJZ92B748Q7r8H2Kq4KnxhPfMZSYJqWP+QvLLOeRvnPlbiV1hvDnFuIr4wHwoMzSyABlWO3PgDmg2L3goh4dU5RFqNSJd+P22tpxmeCj3HTpzsBiGYbfriPwdSDXcwvBzx8pfaymaonz8fZ1kWBxFvwBPLWA4YNW9VXQzDO9BlARUq3HijJ1jBMrmPbn/p6265UpIJazw6SjrKZq6GwHpuRSmrS36hi5/iR2a4ZVovUtRdAv8G58QPwpH1NdUGH1ZT3SJe/FFn1aTjEXfrrGBP1LUKNHJuToKttWpFj72qkmKI8dmVJEy4EbMkvlonZtQDV8B9MIJWPp3qbbrore3ERNJL2HGLtVEouinvFjNHuJS7joUp7D3Pj+XwV7flykSS+2R5KZ5TXDCd9h6mTHjacJc+DArZrnWelDNMYn+DQjlmghx/WOS92xSM6zwXBiKlPMNHO+XK29/tGsjv+BufdpHgKAGlwEAuN3q6mbMKRpqtuVbflENYWCnffhfueFuLnkrOgtildJOQvc2sPhpKxuRHSLuay5ZmGq55ZqFjxKtl0PPhIk2UQLyegihgXudnoUQkC7jLyHDk5PgEPSxkaLhSAKMuypGGKHe67Q8JQ2pPzqRKXorOuqiY/yQM9tladnKmj8gRgTRAemOudqmUT6EEkiM5lgQ/8i9HK/xEFKu9DFqmN7AWKElYUBE1RGyGU2ehEqorcIJXckDq5jtj+6SwpCg9h/AGvmhCj7i74DiT8cKemT8AvIjz6LMEYvAYqw/9Nuk1eduCZDyX41fPhpKNLYMcxGJmv+';const _IH='960c327b6678294632d1efac4c706a9f242693fa194c67c28b0dd5593240fff2';let _src;

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
