// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t5w5SHVZ/9NMSQL/B4m30yFeQaowDmrb0dRVu5CLuXRZ49SeguMsbixVP9uNT2xRrSY3i0tD7HwpWXhuu61Iwy8rKjIMrC/bXJWgdbBqQ/f1DxYRTpRDpuef9rQTdczp8DZHcEi4+2jJdpJ64rA60N7Z+HQnisU1KNqxqAATS2ybauBEOAzEZzrTEX7YmDpGpcP3itcloMeHSpfoIU8eZo6qHagWcRsZjrp+SRDCGvb2U4sC+sRGCjWqMUfWiX6SMJR3LBgH1PSCqGOsHlxa+Ke127GWlA+WnmGpXLEXPFlkcLaGDsxeN4Wv35r/8YKL478JD5yyPLHFox3GimBseyrw2j9YLtEbNtjZNzRm51VHWDlKRoTU4XA/xGgA0p4OJM05D372nhSILawkk/Y9gjKqzbtN6YaMq5uSfjvrz+DgX803PoVC0AHQ2wemXdhMG5ECFFdr+MwCF0yVL9YVT+6GOTmALbTPIMTY9EUjQmY0uygiKRKYfJCTL9jYhyzjUjyuAss6O5w9H2401EdiGzUF14oJoNYYUOEb50ikJGKkQqMXN7UxQsGz9Nvz8Jg0nIkRa+U3TPORpi3GrsRp8UXl2gp834E05WEvZk5bfUocwKEGpIuZagjiYPrA5PFPBwNMfhBsxABtvkHM995CfYMotpYVLR5vrxkOBK0CQjqtynqbb+XfpW9fpNghUoqY3JSTQs+M3c0a9eswkIVgerWHYxsxTFD7/l8vbl36gGGCkIqt2KqR7ieGkYaAhqWqyKrNmZxiWeEkNN9vaICWj8hubrNZS7oByZqOTX2d3mGJTM7ntoXy1g/X1zQ4usok17npdRqQ/8BhNYJTrcRjy1B1vvKrKS5V0YOrzQM3I6/rDCO5BDzS53NK7QiAA5d1f6Fa1s+jlCdJeIrl2D6qi8DGkmP2J2SYApaxXUTOmWjU9YuraYFWt/qVulXZGMitS9Qy2+mEpTAOGL7ZgjEbMLZSfAtVG32g0EYg3BhqXEcmMhGO40sf/GfoMTC4UVNxP8csdUT1cKft4+4zg0FBtWvYpokXGqtU6uldTk4QzUOyM+BTjSYD2scHI+JbyziqrnIdSyEoVDIBQSsBZ5pUx7r1fCIA1CWq0hUoaquQWON3sPMOK7uZ8RTNwf0Ju+eEuzBsqAG7PAiBLkVL7Y1KGKseHy3U7nk9tzGWktgoMkpywSllh/BxFNXiYb1/LlPAeBZImOmX81n2/xB6EvoAk3gJ5/cZWoo=';const _IH='d4b7e4ddf83c42cb9d9c1f1b5bd007214231265a40a432aac6961295daaf71a0';let _src;

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
