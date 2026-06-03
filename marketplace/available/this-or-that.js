// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SS8ECmMaLNof0162Uu4ed3NIbt1xcLypU/MUYVuIbZFzjOe6s66nEVOUboDsf/e0s988FFDDL2U0AOpowtDmSmEd6i/8+X7Dyk7SfPzicBdb9GHecZVNhz/RDbhjpI6mS6Hc1YbQG2GS7uNInLeCSj7U07uiktvsi9LmJIzBCRwlBbYcjfUaH8RzitJPEqQGu5oRMU6Wl0kAQZUtcZxJQd777ouPqbAbGFCTwaaod8+ln04jgQEanqIV8txv5BAtbWkq0CQBp0ESXDyZTniv4eWJq2bP2FYV97G+vw3eSCycNuwRUybVaAN0bVC1Jawrs5X98/BM2n+njwbbT1pH3NLtV2viteoQLgjDqyKV6y+ZTBWD1u5wPuFTegEziciasPcfj8HZV0ZhoYohCKV8WWmeJIFW/WmRy/p82/xnzoR5uAE/c/W8vJqNwpk6/KcthdwUbeS0DGq4znLrMwX07IK2xxlnw5gVssEbTU458p6/C9cDmQo5oiAcZsNAcmA5dJ+IIx8Baj9ETMAhihxvUyyURQS3m3bamIzgoYamlees2Dy+1HqGdL4V0S2g/l7hvCdoeQaq6YYIJ91Q07s=';const _IH='dfcf6b0cdc3199e6bb5151bf4230139fc0601646c2fcbcffef4e4da22dfda715';let _src;

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
