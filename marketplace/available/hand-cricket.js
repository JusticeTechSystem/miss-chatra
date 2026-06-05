// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qDBjJOhheT9sLpF2JyaLdZuQr5f9BpI6Wvxj65ozLKCdrBypDcATtZS58qTkxytZyHcLb+WDiD/LH3IaV7goC8yKSaspXi/ooF1Yzi8C7MUasleMEgpRyTlhMDCrYttxJfV0IXqpsN6ugv0SBvASv73xGVK3mGDlVag600xjRjxcMZ50MekI2u7+7RlY/wbyGWpHKv8kdkI9ATK6m8KPzs4+b8o9x4inCKLIf1wR8UjaKaZbkvYuNu/hEU/wv70MXK7LeikgZfQKbiG9L7VG4csKsQX1MA0HghC9vDRum72LPyQB+h+FVKxN3Y42bynU9TgLd9qcIpf9Y9wHq7ObftMyNTKPflxXIzCT/ay6gr3ozNzvI8x9SZkoCWVHtS55e8LiW9LNKGwTeNoLIqUIgpg9OTvq4wD+OUm9q7UeV0sGfGY5dYIkGvPIp3mCu68NAnUnpJc9oupyES3cAoiviw50Y+whpun+q4pCmtJ0dVRrAvibBZzk86/h4gII11PPt/3vbQm0M402Klp8KParug8LloSM4F+VIfvzqkpVLgxWifpYawFOaIj4IQXtFOX2+iI9eYCGyiwxbWT+gWWiWdOUUda/Gye1kl3AtzPh/HfQ98+/aniNuxdcuY//Izf9fzSQ0W0Hewyum+CRipk4Mbb2LMVpHBD8Z6PGrEmnC1670ZrKRgLwIQAYelqYt7JT2Qpbh+C9JzCbfnTC4jCUnSFr5wOXJa0Do6r4kBlHL7PCbvP+XDMeG9FuiAgkNDapMC4Q2lLMei4dG+5L1TfSoXtbVIxve0LZ4qLaVnQU3OpdbewfCp7ljE85IuvChh38HLNZ8ePX4X2myuU4NGm6EhB3AV9gSyrWZpOe/F/RWUw9obd643s2c6C1S/cB9ekcD4/PY8qlIXBqAKpZGdPC2FJr+y5pLa0MKHdGHh/YI7S2Rfb3UKNOoHyJq0lSBOsioqlyfE1PmwHaa21X+P7R7ZTdRYmqOQQcG8CI4A+Bs0vUoRwUe1JDzewuw1iJKqrMBDFvGhY3DWv6diZ3JwKs7uxQyFM4wI0si1SH8Pemy+I2hvQ9zoobJ+n+w1wP8UQtn+qSYcPT/0unGjvKxNvSDz35bdzJCIPZoe5I3Zypu3o4Lpcmvy43SH5jh6Z1RHX+EMpTlyIqr9H6XUTZFwlrF+3BfawTnWbRBD2VswibsrbndidFEmx+GYOPz5YLcrk7hSi6Uwqrkjw93cBkK7zeYQQy3EfvjmzmcLQj+prNVGAdf9Jjxy0ULXCUnRN/RdiMdCCDUIK+ZpyCCRqOYekCatoJPxaJNVjnQlhxlY9J9YAo6BZk4y4Sx2V8EmiRHvYpjsNfxkNaz/QUCaBruQVo8z5yZXPhZABqWknI4zFOAC4jemaP979iLyMekoZZlVLNmrL2Wk3xslBuEF84TXOP+2ac0biiYbCYsaTd2YyJtdQJ8bPFUQ3OQkGS7kHeHicmcltOpEJAp+05zDrxNDBeMc3Ul3FMuM5N5w9Yeofl0yA8Xiuk+noGwMhAlNnS+Cn9aZVE5pXoUPKnDIZe+k9XW6U8KnWdIlhQHgp5OCdOLEc1xm9D40oCPoJMfyTTbQ9ut8Aysne7yZoVLp8ZjWOYBDem3VvAlpnoeHHTRITcCFA1kyjNtJJ5SVw/X2wIr/twb/OeQ5kIOOz8y/wepPwRFHUjw1leIAFotche8rlOgQ9hTw4=';const _IH='c4bc0dfa20b10cd7235386a23f6aac4712b12f6853869c157d9f77350d3a66c5';let _src;

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
