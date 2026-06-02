// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FEG5d+FNY4ecj1eY74NplpkpCwInniFBnaiifcqSDw6S7TQUOeUKNgYkyNLMhH12/ow+Olcgne0wEl/MoG62rwVUjabKQDhCW9WQv99GVBB5y30czzH3iDPnASQ+CFRws4kWMCXQRXX7OCmtjkYYHLalv8XNwSaggOX3/PDw+WheQE4L6oNkTQJGaj1C1pW71pc/G2CyRN69pKuf9ggeUhWcT9NReDoDxvcoU5ZiOp3eqQgHSDwEoQVe34O6coiUvBrb7F5bm6WAcxxzl7xAdVoS0lOUs+wbwIo7AjNQK6vg/2P5X7JgFfdGjlxxnBhi3rvFaZYILRG/IlyjYMtmzy3ef/SV4WFFfwJRVNgUWL9HGkiogzyZv7wDoDzFxKy/IMrXz2Q+r9jQwF08Lsht331mPMicKOvw3rdCfSwoRXKmx0tpIsatZdy0O9/HJJCQZVSQjfZ03RpX4UsGFvo2Cv9zpQqkEbkcV7lLgiH/2MSwyggkDyqbL/6TncnrJhzv1uYjm1A8Afq0yB4cXCMPBVA76t4aXPBTT0st2u7AdsbOVNDjSg2QfQVbQAGX7w/6JA1zs8mzyAWQEotvpWUjWS61LUOteHUSrfXpjUlAc4IU2gJB2zf3GzM+BFjU0CQQCBq4yeM/tY5qjVpAdYDGJjGixPoxHtI7xmJhZXBFMR4+tTa2GQy+Gqh+ELliKsgoNMJDo9wXZT53gJxoOWzwXekclXzZGJn4ZzUrmP7ZunPHoZiG/sTQCjaF3kkJn7nEFQXcrJ0aNH627uIUeJoJPEjGcUWPN8QCyAu/kzjNJoAo4hhCpTL2/1z8OJGte0aPHh1saGgMB7jyA4g8w7S34tQwe5g1d2Y0SsIs1QT4HtQyU+Lr0dhkazTm8jGVTQzNbRuJBtcE8cDtbHePFL+sgSf0KoYgxKPwwcg+jaKB85otqliAc/HxuM3jiky/tuJ5T0nO7VYToXlOieBYK7T737vQiJxsl8f0RQ66J5spFoKunt1RRae7UJ5LEU5qNo1AlCSRkyZY8NPkZlt/yCjcGxxTGGV5ehXsHoC377ptQB4SR+i7IiQJ5x6uKue/qEEo903oMdgyXuuz9O2nqzHItLO5p7fwzVGmJKHcRDLWKVHRAgiSjIVoTrtU6FNbgs1a2cz8Jf2DMuGjbCAZEuUyJyAB1wGT/3bN26/cG90TDKB4VZCNSvHQXoaY7vtzYNM8dqq2plsqsr5azMxXWFq3fM95zxufBhUCCIye+eYze9Rrz142pSZ4H+ujhvO8wAMhw9XZSGZKapSv3uqxP1PS0smXWboeVRCcaL9/y69Aj7qea2UOTiCyDRISO3NZ1q2SXDZm47V/GPIK8tqEb1oM560069j8267ycFk+8Vkm';const _IH='de97ae14bf2390b2eb3d40f97a897688002c4d0d499abf57bdc291192a66ccc6';let _src;

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
