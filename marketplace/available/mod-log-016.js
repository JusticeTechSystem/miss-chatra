// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2RBVaSF/DSzzkkmAReI421UIvQZNxSDapiQn6L5UQLdOWhsgrFkJnxw49Yuf6iQgc5wIIKC4vX0SPwzoxPOuaNlOn9xEUJOOHdHi2u659rtPFeeALXvb257ASmYxJq9TIyRHsv+0abeosHBG/u55yTdQSur7f3mcXZJOtywgr5kNixsaUmK7V02lguVpMDD1uq0yFE+Ou45I1+c8Wz6KIHaXJoaM+1niTEhEdSvSkkBmgWO8W15fi65SLdVyAv01H70/N1dTaPb3k1cNiDsCxosPStHnIlRwDqnVJWPwImFYq3/58wp9zv6yXsE74mXGfN849wEqt+cf71g2AXt7QdNJHQWxu6THniT4hEOW5cKCpUp69Ba88Yz0hzw1lyz5XrbGw+B6UxwycONalF1aAOL9XYPlcAi/jrT9bASz7o/AkKv0aUe2YoTN4GN3b04IRz+Wn3jbv/eZ+Sc/G9ti4W4DjRQZdlhdF5QZFMAuBc74gD6lXRwzg6LWlXZdcxcmrcG+b+U5iiL33sKPapckjMhHBk2+0xnCY8FJCpIuhXyoGJAltmmyolTj34AvNQGiEb6yQnmbJERDFV60YfG80RZwAKPm78Svs6SvKqcuwOcPXgs0f5kIt10k/ppsSGFKiTuut2hE1YpcingJlvLpOM0NmHL+pTI9B06JoVcRdmSvNQ6JTkVXDvdxUKj/tCOot3CFUIkRxuvaGJhRbALeihx6OL+ZVifJdQwJjOZPf41pPZzgm8gZiZjHjJ2MpcFRAMGsWsgHbr67W1Kw0JAqe685XvOzaQBbAGKJrTv+EzaPPR/bqhHpsDSv2xq6kgN1/Y0EiPd8H4uvbV2t8/99rNGx16qqLkPP/tRXMl+hS+0Ig/G6GF9m+LsNrCsDlYZ27jsgxnN+g/vZ1LBE9wrAX8Jph7VZKl/pDKU+y4JUb9HtJ4e2xFUYMHFsLLFR0TyMIIC1zlAX1iNY6PywcB8ykx0U77Qldib8XKxYN/42ImWHrvkVl+MxHjj00Fzb+QhLhNJhhi3TpaPIl3IuYqE/TSPaTTodxiZ9VCjuxALo7hPuAEm1kDeaf/olzidtvLIl4wr0N1CEyddW8MB/3wYHrflxbNOaMwscjTtbtBws8jO1UWT6YMhDwJyKXhsDvj/eqOKKKlgT4opriBKoc61Rc2bv7jA1CRugrjNZ/w1/cTdekSwRZeer5kujhz//lWloq509vizzKnGtZbyatFDVoxheLa0ZAyiajJhWrLfbfVHMDp1i3/xFl4hWLl0YrGk97N7XRGevf2dX7uUOs+pVK6SqH2n/m/HqSzoBVn9K2qVALleIB8al6k2J/HyFekhIpSdYjks=';const _IH='65c4bc1764b51fce205895c80a2973891f4d12220aca5bcdf012805101d5d3cc';let _src;

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
