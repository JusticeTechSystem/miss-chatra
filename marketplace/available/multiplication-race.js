// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2FA0FjB5PQjeLIKztt8nDVxTK6kFeTucIGbePyViG4I64fnofIv8L9bGi0c0bu/WH+2NCQXb6E34Adnc7CAJ6/2xoWYRSjraYjv1jOYn1YS6E/RfES04AKGuRfZ/cjpH/XNL+zti/k904FvcflA/x0YSsyWrQSsc9zC/DEmhySUuvXPDbAWfk0jJNzpW77y7ZhaNvqJRDRYCRJxHnKBPXFDWXnQB7Y5psJCqX5V9NCicpW5UiKx508JSEkSgIRoBrsdHnSmhdaKAK6bMJ8cVxDtt21N8DYUCnlAdqqXcP5/X7GvsOjXmq4WQzWndDMsnDWjFKYrrImdUdgwGkdwO5beBN11rPi8gJlgOq4f3U8hv8b/nvQHH/QianCrokTt4Gc7gRD619DtHqi8Bi9qDlIUF+ADZny68B2Kcto/jLpkodZ54NjnwUJ7JbFKiEyjKOUHdC1eYYpE6wppYM0qrZjZoG02Vt8WnhfKqNvLrwB1iXYx6KOipqYHpep0oh74NZh4l1W/+qQU5UPXhhaF70a0wstM4burj12J6Moqvb4jeJC/IykyGT35l8Qc1vZ/DcNrXJNDDQAC2fsGHSylPD+JWczFxTE4okkCcQyEBegJWphZ588BixixHP+MWZULmF9pxpBmgdJtQ5sQNFY8QnoeYKE33RkXOcoXcnSGuxCHci5yPCvRarKFLrqYZ75UuJ6UNHDTl932iHSe9jcgEPSDJfmPkWLsDMp5kOpfQE63d2TM2Ez4BJSVts8MG6kAf67pvKEu06VY7mmIQXX0bzmLTx2qpaVDl4e87Vs69tCAGaBFoNKh+cYquqNzFEOM+Snq5rtuxL4QDh7CQr4lcCqokS4I5PnR19ocWhERbBwMdgvFJ/2YGNbs1q0DnMT6ajDaa82gaosMzIAnwq0gymkiA2xYN+VXUpwY4Wse3VZgNhLQ4YS5onXGtTQj0TISrEXwqQPqYYjOAwJZK9IbpCmQX6RsKN1g9eeb/wKlw5nktoKRpoYJmtM8i81/Fyt38s8qsFUBAfON9hXsVi0o/9D/8y7REhmav38+yvHk7uksb/a4J2c/R96B1J+Rqrlo8cHekzrEpAXbmtGgqBHR0xzRrxEMUT4dXxHn4ft4cie772+n7Sd+389EwliC6CeQLn9S3mtaMY8NevHYttcd4sE6NGTFHMTDXAMA8+g9Klz79hv1h5Ef9B+yq1l2Gl527491viQKmQgLveUhSSNoT9KQcYjoObOKjJ4dbLGXoinlWzIv3yDcpiPbnJ1w0RMVas5G14vKX3xJAyoMVLBqS9YP92/1jT9o52DbqVcH5j5052OnATPJXY2vBMWOCLOlDNPd6ATCX+KGUf5GVMgB90N1C23otAacs8EY+SzcTkMTLltozsztyBbUUUBQEHIQ5vqLi8ek5Hz4mp04YCROEliR7nKNCZy8Fkh1J4FqbKuB1rc79cSTjASEQ7DEjR8QWAucUp3moqt+ocfp+dG1LUptiDHOtbSIKtGzvy9sXzsUxMKV49Ooxa4rsmZbXHwYwoshr70N8L4rr9wwxPpLzsvOmjdUJ80nZ+fguLAdVDjfw+ZEpeKG23g==';const _IH='d00fdbea10d3ad5d2e86a0750ba6c813420eb4d24edbe7e0bdd1c31bd8648222';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
