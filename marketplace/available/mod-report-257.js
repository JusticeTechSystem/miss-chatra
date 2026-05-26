// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gXVL7dxxYp+9WZ2HDZ8QVhVwRKRDro5c7ov5s2L/Hiljj4plCKcXMOznrG0p/APYCKzr0q9pK33iAldBuu6bFkJLanX/bKZroBMED+XX8zh/iSRMYoUucokp4Oo1CRdRhlEDpDMt3oKL8m4Q1SryhME1wVIoT9u44CRUj4xXDPYJxccB5DYGJZzk83KJn/G5WtFh7KacdPJIVqf4oEhhtVI5q8O04l8R3TOr4KHtp99xl63eVPgaFSnDftQQAi5lDu5XZuTEg5Njqas3GM93N4sRyBg5aHNfuEiE6EpI1usZ0y7/g2HX6mK4B8w+0kq00U/b9QM/rxeCwyLX5v5ubqYy2Y/RjWLX3E7XaTzvMu4u3OSSShg+LMdg0/it0yDqOVqqhkonJMzum3amdKnsbmTVA1tBMahsipcuPzDpOKMNcalrTuHo/992qS5d80qj/wEwp2SbHPZbFwLHjaFeJyqzke/u9jVyhlnamQfqsFxMKlaoZPV54AOlkEIJiwOPRQ4uMHh6fy5LRz+uvbCXIR2v751CAJskTTNob709roK7+kIlCF/HT1oasZ0tCrlSi7Ein45rtqqVNkjrhFLJZiBDU4ByOGk984PbYSfbRqi4qhLM+1+IZTtAp6ZKmmpRTO1kRIGNB4PK2mAABDhBI5FLfMRPuuGGFTSo64S764vSd8bIDRn8QNDamZSgbhx1zasUI9mjFxFKqObk6jxZeez7nDQAvm+a/f+md9qElhjjvrdlNpEoOJdVZoGCTMk72GfucI1jw0aSNsM0DBZ+fTcHiL/KPFIGosGl0rDr26YDstX9Kg6+leksn7xQOjWKVLAzBqxKvNZANWU53575sDZqJ9cor1wGkNVObUHB3c4r4x7SAyx4ODjhl9X30P3r3QgmTcdfTDoqH9yFTXYXKbGFUk/kD6G5BS8LIp44azDuByVNk3q9rdvwzHl86CGH9kLj7gF1NhGCtsX/vdh9qScBgY0f+YVD3ZSrW3Jx+Ojy7JBCkRMOnnLt5dxViZa9CgeJjcGzKzVShgBfGqhYmPquxUpZr279H4QmWIrhrm85mKPoOPDgW8Ax05nlxLpR7U+uPlLjQZ83iepvJJJhcZU7RW9AplFoyxYEvOXOJm2t+1mvtujS4HShPRh6X52+3KrnqES2Ygt/YrqpTC/JBVPRijXSmeHhuIFhZ828j7V6rn/P1dmtB5nkvpW5WOQiB6lrR2uLpt2Usca1ZPVoE79IjSPoCdu9yerF9YDPFHThsQPMu6iYG2mdxNzfuFf6hJdSNNAo8K9F9ErcXidO83hEq75Q4/oDSrXE8iudYtO+/HnoympxzkLgTMlouSbbEk4cNtRrxNWC+x/SmQu0obeFto+k9W1HfJYIVRGFmPOQMFQfYVQk8A==';const _IH='c41f8bc3be400553c1f09a2d0012dbcc83571b5bd1ab3fee1ab3c4ca3523612e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
