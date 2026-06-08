// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9FMfuppiK0YrKkYJtQdNrY1EAbSmNKvSr+d9+0DmPeRuEV0lU5tbTaIUt87oiLxP4GYKqj0jNZMMYTKbE0AZwsbzCfeArZ+5LizyWPkGF6d260ngn49QgWk5gist9Smo9ErS17WcVmZZVuxuNXDByfWipG0q7+Yz3uzDurI4BVmLh+8nRgMYhfdHboT0buMnj36PROKLpXsvNZLzW8VpS8OpcROtFz6Yme3UrZLTrpjhLolN/xibuY98zufr2THKy0t/W+gG4rCzgkCoHXzF61YnCWoUxjwZty4/onMdJXYKasvCN1TL80WPdfmKJV0rYJDDtro1J7HqWILzNGNAUHJCdrNnmXt6KDm8BHbvitPMbr9cowf64SJ+w2qdBNurxR/42/C7sZeLOAQ+1O2U0wsP7uEo35Zz6umP7+2Le2gbbfziG9+j/PXQD20Z/ErcrbWBlqZIEV9QHjg3lwYIerapslxcO+Y=';const _IH='9abbd45847ceba1dc2a968e805bd9cd11d911937f69b63907b6a0ee487fbb72d';let _src;

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
