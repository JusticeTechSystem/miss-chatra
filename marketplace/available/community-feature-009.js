// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CRriM+RC3op5kvRXfqicCBKei3ZOF4zemY2bbgeBkLQVhutADng5ZIwNtboKiuxrvMHrygwWP9ngK02e5aNBo5SupgMrECJ3YXCpu+xITXa6XBSUrJBe7gj9IPNi7hZ95eWrIZAKFm0G2qnFonzr+Cc0Vm7U15cAwP3bKvjUWB1r/85znrYbiXsjGSvxN++yBqJjZiIroYPsTIgeH44OjAYjmPYk95xbbRcEz67jTVjoigB4tma4qXPhRMZj4hwFjr/uzkL1E5iLsFVh5ln+IOUqxzmaUtSiDf9vsn2wIoGgTYXXKkIx6E6pVsfavDcp0h+e0jx5eKAp7xCDUWDVlEzT2l3Q91KQNthOoMYr3s8omGEaJOGkP4QrLGlPcwwPBVKnD+nX+D2Gm1QLmIqu0UzejSPpV7RV0jkBcF4WfbjjRdx34wAOUpWCued+nueKaP6eG+oJkPkaLuUpfGJmx53wOhQyJ2BcO0mESm1s0y3R1knJLkkS4UNkBqfLcLxgOoqBbew3k4FVZNGVaR5lwO/RoLEWqyZP/J/qWSrrb2rTD84iIshcyKgCdQFzMIlvq7Zc7gfFBdWSi07wl9pPnptS6WpdhiSnr8SfsWPij5b1bEqd4TrRwYu6JBsvgGP7raVWZK7GSgQYpXo63835EPVU+uLMiScQ5O0HoA/t1GRZwQlTvkYYj09xOyjgu6ck8nqXBbepwV77as9KmkDUGSoXpq8lJCnoBRnCGWMRkA==';const _IH='3d30c9b29cf6ba5e005fe10d815029dbbcfa45f7a1aebc16dcffe60df64c1eaa';let _src;

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
