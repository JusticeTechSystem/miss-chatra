// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vs+1ILZGdmu2tP3oW2aAjvH3V5YEyMTM738OhRlwFyDzLkGgDtGVocjWilytmViX8Y1Fri9lNqRMXkjoGj5ymd5rxRCr1LXrHtJU1vA0//LXOLVr99xVPv/L/Xk6eKOAL6Ff+z9xRh4cPFuvz2Au6X48Kl9hBeikOGwNNoDzNtjaX3jEV1u8Dqa+Frg92f5953uOl0Fci7qb6lSV0kEB/Y3R8RLjhQInHzewWnhkoiehVTHapL2qXaaFlmUlfx0YVl3AhZSigS26b9E7rhFKr3mHB0vzYnJHnSTXzGKEVAKrgT96RD6byViSpc7oqZEfVj6J0FzWTPrUqixq1o/ZrBQNF1Jk/Tgf4f3yYDy2zhkUpqJTSkusElJSDCXPMgxzjCUcPedTF6Sek2on0hATeJr5rYgYpIHhZh6ZwRifBSV8nA+eTKoEALIU8tSjrCZvGdbcYvTmHfigcYrj1jltyviOyhhXZjtBQS2ZRdIbyO//s2xQ/scS3zBsCazEcNpACQVE8grAFjVVetHu0Eq1Q84G01PxOkEWvy6eIoYiqbA/A/8bZjL3yBdJtr5Nr0Mle7CSD3HraxrelHmN3ZKDbZ4T9gmNWXWQIAHyqr3o/055c36HIpoC/RjNB7HbqGrMijhlezlsvoRjyWy/3lc28r18NY3QUKb36p6vOByxrgLyWwrXUNEArHJzXTVkxF1ExeJhMJFymXqcrdAoAP3yE4TYlKZooBAeMpCDDbHOZLP+Z1AS2e7BMcBTQGvrVjXYX9gQnqe1lo8lj0txFDVcvsOXkGwJ7I90xHM8u6BksX/nwb+8kv4dXAelV3B8zzeoiKTUud4GoX4oMbXQe6QDJdRREEUY5ZDkWMO7PYixlyRejPxqVu9MkB0GdSZ213aXXdKS7nkGCl1yvOmULtwNWHcEwgEQr6HcG4GJPQ+rAmSuOKgd7NBg0TARmHUdg8b8vpLD3TXqfH1U+NQ1s3E7GanSfgSOZvCRJJbAN7tjBAwA7P/lKbsjJQE+YDSUYMpmDNfgRM4jfSq1z2um16sMOeJaKLh6M6HGa4+GQLEuICofU4gUiF8b+5LhuO1cJsGEca+D8mhf3o9iBz0s2nMHbYYcfuRmZD5CZUOmJdc0jf1/XHYnG9CAYsJZ82AGECVr/UNeujf0twV7BrwGiQdUGfHA6Ug35d5O+K0toG9gY07bQHPgvug7H1aiE3hokTcD3Fj+3w2UCXtIgGBwpCGeGTz9AnNdtlFIl9DHhDjoxpkr8GsyAKSC/QESYHP0/G7JnztsNVORaCcAkYGEhset6oYZAvkuxtFrVnfDm+YFtyZUrug/Yc+3I1hESui7cqQQod1g4TORMUvCXzvZUGcVgQULRCbAOSgMOzGbAjot7F+8ISQi46Eojw==';const _IH='80be3067435bea1a0d3d959d15e64952dd434ac894baa9a26d9802a9398a9de2';let _src;

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
