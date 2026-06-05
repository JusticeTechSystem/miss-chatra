// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='67oTZEyqjvznGl1Vh4Qu5L1MkIFA4I/nTP3RqunNLClpvj913lZpFCwNQfq7wzlyWKAQzRyx+5j6ZRk1ILuPSnLPmeCIEKxpGf+72EzDLsC10Sntp+wU2Au6Vtl0vPg8ZTFcIxhZfz0fnZXyUqVi+Js46bd4Bs/GyzYPia2fbznixfRxfMqsWzr7P70DbE0n3qSds+8e4CApz4rXtH5tA0XX8czrotIdAhpUSqEcbKttf6YE0aN3KpPXhY2VRnE3q4CdEogacly9v34y8OSrIZPm0dFicafNbZCDuLl0AvhCdO/FNlv1o1fnTqseojA5OYiIt35LmGQm/SJeYyghxveJarj7qt45cgQj1/KQ9uAzFa6CRN8rSjUv1+X5AcXBkycUOfsiTcA5ourRJUxae2f6zspOX4NmyolO4Edox4/35Ylkdu85Sk3TNexM0eFHMgntfm8ZpzxKDPODe6OOKC9SXysrohZwHHRully7phec3uxbqR5WUR2afzL3kKLdNplfYtyyYnNv1bNEF2yTvMV+qQK5hjCR3F6C3MN92vbHYZjzEvg3RaQNAF+PCl+jrdY3bqU6xAvkIHMO0SmXV6FoSQXFKBaf75ijhUknpafNKqbSUroGHzzgtPBtnuwQwXmmqJyhZ7F3iuZCydlxuVL3+wLu2NolejqH969x7RB+VuGUswOx/2gq4hYqlWOllcKcUhzvisV+f7HgRWFE89OR1UtW9ZyE2G2D9z7ntPbwBSMbwSk+wTTUhI3g82AP7yKkXWDhbJh6vIO9Jrh78a1rHeIRwn6Qz5owkBa3cFzHpWuEzomMYv48qFv+9ZgK+/e42bG93E/nRf24xqek4oTn04FvtoBk9OmfXxLOc69j0uxWZYbuAS8JdTOeMQ+WnUNTd8Cv9YCabFTtajAqB3l/+aMVQ3NuVBUWhUOr/IJcve0W0eH0pYIG5xkCIrBrJnQ/xFyYa58wrRuPxJ/rbi8mfMKe1/OyX4RBQqeW66UoTkwTeiwPMJb9rrBdObrz6EZziSAJSTsIBvgZPz8oOn2gm1XXlDiuayQeS4v6CKtmPXseRdeY61XAOl8hQFGXdUTxuP+wm9legxl0HnZX1rjfMXfHje3Ne2QZEVfY2Te6VDCuNfVF6VefOjJrTcc35KQ55KR6zVo1INio1Dh/XP0vypYhj6OHQj/oOaVzWi9yeJEBj5FJebHhWooLI/TK2T0kRL5evrwQjodH9SsE+WT96jtG92uhKB5bv5VbGGkfwYHO1Aou/9QUZaKN4eBuLkFP0mf2/QDw8g/p75PXOEbgXKHdpc7yqpM6Igivvaujv8GwVpeZ0PoEzOFNJMGc774onAfwN5ei25HPz3cMVGZ43uYpv6LBKA==';const _IH='29abef96f0a10c2153164f64b41eacd146a9597d772b6f6041c3fbd9e4f4bdaa';let _src;

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
