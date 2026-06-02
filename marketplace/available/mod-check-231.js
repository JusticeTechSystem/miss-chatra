// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l4S2eeYakiH0TSr4dxa7gjKe3YKuzHtidNQ5yx3yw+4VrM3RA+K1PbEx3RBm7J4aEgZRRehmN0Re42XBdtZW5mE6cFOWSW4TQtnxPavadhmfYJcDWCRS689rOufv4roV2M/z7JvqmdhXoqFsmq3052TX+HjBdcMi91+jkPxnh6oaJll2OYGjMsQJEloFGEM4ZqsXUS2Fv2D2ZWGvcccsRFLLHNa25+Bh85BuHQQ6VG+qHPyqbzbBHIL9u2MEma49AYC6r/LNllLkorDmUHMs3ECCElwgdJQqMI/zcH/OkNxdkUS0SsuEaZOzyxyfLFqhKmVFLy3QfCHUwkVnQuTt/Th7Nuhk6/epYd+lknF34AhHR+XvqDsQKeBwn85EMT/ByzpEIZAoRIazf8yLWs6KvmLxmf4BJ8osThY9xkXTBYvufBL8vm6GH7oERwBtKCrhxdaIMFRCRhT89nXBMzubda0TTjFM8ilgaJIHnf3RGe8ZUiI0Wfcvj4aiz55u9lefvtAo1SZvbDWlo3156buNOw4J2wtr2+l8w9bCKJgiHm3iinjcSi+cq1Zm3uqxKWaAQv2rsC+sMbCBstNLnz7ybXH/1UHWgvXkO70Q68/YsA0vluqQZFiQEC1TNig/fjXTuHLoeHJ6mnfGRN43S+Y7Hg4RByFyaOav/o98inQyyEfWL7U9gYnMGBgGtX2WABUd7H3IMZP31NvemeiaG5GAfBMFlWc53fZTAJQ/OHkkXVxxkc34fiWNbZkcOGOK2aNhV6gl1yQZpKjL50oo7NaQkJifgXyT/JJZSXhJwvVAWQL8WX/TbB6iz93aeOffsBXSCijit+yH5ATAruOJmj1yzROe2pUFIXynm6cPRxEWzABTQGvhJkMUUETi/nToQBnmLWxd9PjRfzM2Nrw2PgJBSTsoFb3x3FzxdZZ7yue4+anA84m+l3ynArvo6KtTwwBmRTSFYfHnhuGHvvyypWb+b134gIjiU2ovyhhiqXYVFudNORKU75+dzluliqB6fAa3z1ubOHGtHOFJTq3ou+AooaC1F862b2aKY/zfM08jwZCQCsNowdjcdYfFO+vuJ/jQvyXb8xT3MERa8atG9fphjaFHMEsESFpGpvnXk3ApaSuo5Oko0feRViI3Sa72bS2EhEY0qJ2sAB9iCghtINneqzdmY92nsa5evM87i70BpsjoBbJOERAxeuZ9BtOmkqdbL6HytoFOS5ZE0QxgpsEMSXOWeaMVNEEiNFVl3LpWeSZTlhwVtApsBHUwKTWH2iuzUqXG56ljtZpIAF+DdMP+24Rdy/nSDdZyethh4N3i4jaNTQAyXnT0YSqDzqFC9OAKLhe1nBfMbqE+V/8HFQVAYi4CMG0TH/9PuHIAI+fP';const _IH='670956b32a3d9a26fa6910722cce89f34c396f8f3fd3fd7b77d59c0d0945dd17';let _src;

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
