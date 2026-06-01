// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/ZyotkvOhgvGrrPqZq/eK2dJUf6VeFCeQcoFUtPXQzuWgxbifKEDvSXRaWxf938Ydlza7jHzqXn2n+jmTKq95j3T/o8kXjJLIsCMO/cJFKGZIAqJ6mFKY4d7ifWCuyPpPg2ie7rD4lAxMg++wa0aa9ItLGPLugqnxgTr8JVtMk8bBkzUjslIfMpH6hNSULKK8vMhmWIeF548vhz/HWJwkLuRc+sy/vWjLCT7+muabsQkBIiUHADnXwn0N6GsYPa5lyL2zgVNMzV+Cz6SHr0bZry7WWZaIOCKWYbBrO3Vl8L2iY8pbQGIPOwhTivUF2jw3Ypp8LWsdNcqMJdNBo91cHaCm1Di59ZwhlOpLS00yuH5qNWspcBo6MzEcR0J5mHzIIkUNeGiwiJDkU9yJhGPNNil8HXCSHyBpTupV1cVZzqgk2uzbh8e9+iyj3/camxk4ONlBAPZODwtAfQxWL3cRMnjgll5NZYzFa7uqlhFGOvUpRc8PF15isb2zMy/U9rsPGL1/iNwTV/DqcIUtbhFVtnCMQaOZoiv/l87sGCXHDZXB9tj3u7qVfpkuKebapt5RRHkriJWZJ3hS/MM37/Egf48+6X5JcBWEgWpUaQIWixrT/WoamZcuXNOTn8JlnVXQS+T5ZeMD/HY/5EEuVj8nGYmMw0wqxkLWlqXVE9xy2laxjojw9OuLhJ0I/+E5/D/vxU+iJCDanPC402la/FAz3pfNp/p67XpGb2MHryb+g1ZXwODQGEuUJIMc9Uaf+yHvxKLgEhc3jhRNoGNcURxsTo/iucK0hUQn8cb6D4dq9blMnIW4rHTmZDfCLaES5xZfE9wtAYbWf4LcrjTrlEhaZqItR1Up7PSpKRP2HiNwiTMu2vKCISIaWeRFyrInHXEOIcpDvaq3T7UixGgioadwd6Nljku+DGE3UhhUj5qa6GEl6HlOCvzCX8irhf5qVmbs9htYQbh4cz1rwmsiKQ/eiyKI/cHsAFfIGwxOO0TuXS3zCOK7Oi4Ug7foy1KlZnIoj79qsxly2z3WJGv1KhVZuI1+bY0MBBVlsuYLu7/ZITs4b4XDJ3kJwYbhoMcYPxFYbYg97tRiOSnlgMC1L3Ax3Zn0KTUZxPRxPBPgcWCuElu2/602PsbTHLW7Gtlx1uivrQzKgKilkLo4BJ16aM17LYH2YQL9z6A8/rdYyCHY3R2XEfzkuLFJx0uQDhOm+kwKNlVvL2wIhjLZKnO3G0PAk0ISWPuyUcsOzZ+mSkPDzvAdAw+ESLHi4mMSv6PTWPaHJrMjnqp0tcfdGLZhQJBZ96dFDS93YEG6OqgM+38r8BkoCqSWBy4vhjyyR9bAnUUESRxavFVnk2Fus6+4YDFTsJAL8RVtxs1KPOApbXCg==';const _IH='31a965bdccb93a6be8960196ab62fc5e3f8160ea28b417eb92afd68e56848a53';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
