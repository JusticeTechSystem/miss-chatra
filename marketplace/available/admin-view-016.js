// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6VCUN3RJfK+6u5OxbclRuSpS9L7WuDg1Wsb0XrWv04JiMz8KOltxGhCgSQeuy21qDcnAgTcCAvb8UbAc3QOlwkS5XRo6tGZvjdYV7WQC63XbE34dpMn7JgKrvNd3qp+vA350VebW/REsBoZ7oMJIzF43pDAzPgIrAdEj23Ob2ztbafCtGPdNWBtgnRBdGG3+4ZNhMtXv1fSTUuYZmQ+FQNjGxAn6rc0txA6tCZqBApZcrmoM4+AtRfL46L6Q6nH39CWYkLKvcACA/DTMACVXr3bCZHxci+3n6W38SiTTc0rh3egsZW6ZS7rZ/Lurwyd05pO8zwBOX+J1o/vkBpiV404jTDiscsUKycqbx08UUh/m/8lw0C5ZK8a/ScWgYsxH0d6e4k5DSk2PC+XDsD7g+91tOl/MpR3c4rqk3SE9jIgwUJBcU80cyQuHPwGTSYq62gK849mhtkQL1X9ProuQo719ESZFLAsMA4pX3qAFMRCr8HGXXoZmjoS6Jy675TEOo3VW4J+HO+jVrmAjd9Y4mlRufhJ8Ktgi19HIKrEaJ7bSxg3vnbyhYZGM6Mpve0MRmroaJeziq+QHJv17haEBvGuNZ9G8kuRyWDDiAON0NzpVS5r7pJ+ajoyK8CMdLbfcXNmb3W5Ri6qRpqKaKhb040MOj2OOonJRQYEywO6tK0xxI5WNDzNWHB0Um4OrX9RnA14cxZ091OC/ZAFNMSMxgpBG8amSu26mTurFV9E1aEw5NJaPxaQiPQgWCi01Y5zahTBzvo+6aI6w9Dn/ioiyHBl//hWI6abmYbv4rZ/pQqbyxkXpBCu0XK8Rk/6XkykFMYks8uORQLsXLVZ7mS2CIqk+zIQMAuTE5o/1h3K6XNaXj7gGrFoc5Ml8tEODCU9qEterCyvxvT3xD4cXzegSzwSubtyMGmA8Ps2xjGSupaCsnhBJDAIONujxaTO9hoAI358c4n+t3nSlSAo+hE2/5ERYxkSGEF/gZWk7aPfFJg==';const _IH='81fb498688c02ae64aaefac953504e4821e3e6c5c71b205e4adddabb0d6c74df';let _src;

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
