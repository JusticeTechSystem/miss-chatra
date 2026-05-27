// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='63EwRtXuJSZQmZ+OY///EWkKwzYKBbXi1BGlgiNRIJFBtDPOB2aAwkoakDzy3kvXt/l1k67BuoxwTZVAkJbA59ywOS93ysHt5tTfMozFo/mN3WyJrhe11Sti+PFJnHzmPgF/bH0Uf1uU4AMtCPWwcvgW7T5OIyZq1dPPunzw3F/fkXGuGtAd+3Jv+YXb5mePZNMinSbuVNI5084cACvtzwWbs1Q3Vb50h6aUqi/e/qwbtMv1UleKndwvFNC+ESmcEEmGdMAexwlz9NzL+8jJ/0TUhTtDLgvAqRJq63iU+IhYI4325PaTCKohlwKehf0AmuBugaYfp2GwwSylFER3LtzlWZV/abVzy3vzVT832ylQj4KV0xPNtKirR/1PDIkIAa+vBFxAnFM+8d5rRHn1fWRXgQ7Caha4jnGZaHgMTG7/MR6iLmqtwJH1cDhFp2EnAub6vd6cTeCS+cwpAB/fG+86g3g8IsKkEYZt4c/BA48IvDAP8QgZzVbQ2xNDMjooLQVXXs7C8Yd5az8dGTjt+TSntA1QeCFJ8eZvtMvQwXrLKVhA+JURK79qPE7UxdjxRbF9GyP7433Fm2mkSVWzYBeCTc9ZBetU9aKEBeCkP8N+LEwrzbx0vEIh38/dVyXXOsSNxKtq5vLFNm5091tdVWGPdW/Ve+uhUb+nWTUg9VOE6yefjV1sfRn0xoPfPoAcQnYTEzOQ2GbcHybOp6sjCLrZWSbUBY3oRCPbXOHgw8+Pq4E6O122M7S679DV5IXf6SnrbEt0VfqbJZlK3WoiNXqEMxBugmbxQpJBpO/dRIGRYrHwwF+jK/A4B6LFBmOJSulw4eO7gzPfnIIe5jj+zVAdzKarT9+i+RuxwUoiGDXau/zMow27x3RVOO4l2mO4T7tXtpKxbcWNdBDEdj8aKGuBdskj0vq/ulzvgECeKMdLNtsSg5mbjY2zfDtpEgv991nZTLSVh6TQkrPWLUO8isWf7+AwYDRmR+5rhtv7k0aH/acNFEM1yOxxyDalptj1/bAQCDitvWnNrAXT1RXW1U0Ygs9Xxo42OGbGvg7IhUsHy0+jDTnh/AHoLwCZqwdpXWo5geAqFnvhGXodeV7SsbCeuxKSRBVx2VsH9MqUDaJiWr14/Hb8EmT84+mcF8Ny8p1xlcpSZwZTqBVWU2TxHdDVmxxozAbuzvu87ciE+Ke3VSlY/xwicW4YyAgQLVtQS20c9xbuNDYU+mRZX3bEGXyYBmGmU/NNDYnmBQUNqrB4avTSZNYczxAtYJKuw4Yi/RY5yv1TyXTehpC6wGeUqnz+oVjNqHm5iOymAk7ts0SxTzqiMr5Hl8/VSzYeDyBZknPsKrqG1PSnxtsa0EC6c6EQEXkbiP71vcp/imlg';const _IH='d4db490ba42c024a08660c4ee9181dfd5475971c4fd7b8a28984bb71d43fcd98';let _src;

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
