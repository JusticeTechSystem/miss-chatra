// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iicXBYJasnxvhf67AlcMJ8c8pG3XTeiOxHlvOXBNaNj+1kVtt3Xd605QFvfNJze9oN2YSlkIGgCHnwwRcCH38Px8FX2RPL283cl+NfEbvEt0epTKdjEbit0qMHEvPzzRuKP5V09Yepw5KMTuk3dNH4HlNFoh0BUX9LXMhswga7gPGO24jz9kaTlFE41AmXHUxX6K0Ne4Sq1pjdf2xW9gjQ7PxvRVoKbzqZHRLwlZ/9+pbp6AHsZOTSFI/bNZbnpaPkB9jJdJ0/qBjdMQ3jYTkovPKC/m2G979J6rbAvVKojgMS0lKCQ3xmu0D6Z4Aum/u0jMmXaYjP6KNmXo0nd8mKnJIgwDKen4leaOB04sGGx9yZD4B06Wu0qZqfEB6h6ZV/BM3LgaYo2fddlaajnUHwOT/Z+gbpCFHjIsfljEvtldskxmZlVbI3ZasvQYnsaDoWJJsEr94RoUhC19eIdOO8V2AHMUxvr8QzTOk4rtYOOg1MClyq/+9djec0vluKAHJFt9KFrSsPxiCxDVmiCbgLv8dsPdCGojzYEh8JqpCpEwdpTn4tyS5Dcw1osk0+TWMG5FgTVB5b1AWfEw2h+l46130Ij4dCyYYQJYFGVdYVx9aoxPduSHuLXf55GSQ8VjSBJSOsVCsks28aDg7RVoHV2HdkJgGFVQUwPNLmZNkS7uidY2b5sN9nQ6qpSC2iz9S/gYX1+W67moP9d9q9wTPXHerdnl9fAqRHJFIQiOY4Gf6/o=';const _IH='26cba77dcba6fe318972ef579c9ac1cd0be90e401c2052e78de294042089b3b0';let _src;

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
