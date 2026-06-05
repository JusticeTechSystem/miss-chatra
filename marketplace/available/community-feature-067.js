// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Wz2ThpmPu+PoaoQRnhpgpu/Liaxxwlcz1iJ+jfHOgn75Awvj5NdgRrnFWQxcgXoOqL7jZGxyTPigbrZan+guNuImrD0/kRkMjrFxR+sg02a55KNUFfQpRHamvYu/pg0xBK8Ig/TPrn9t8aDRUbVQqs8qsFQTkkdCaBOldkNOtyjJJVI0h3O9hnzHt12JrKNqeh1qmJPRM570An0FTTwMHnF2RaPqvWYQRm9U8cpYxk48UsS3xPOl8NXPzioyJgokHx1t0OJE868QFkMmuZWREild7GIaPTkK/jDqy1zPciOrWm6KT5zQM2E5aNyqPJGxVB4eZRksfalNiL2uTdorEeV2k/P0WR9cPUtfwx3FhS+If3Oe3WBAW/xGjHRW4c3KoymWVGxioEE2WlVzzerP32NQPNx1CcPmxC6ENUp1EedLLGwVypTeZu3UIX1fArk6q+Ly40UYiWv3T6Gv9nSGO7Vv5+SN4cLlaDHaz3QDZ1aaMMy35cC29tQMC2tCxMQX4ZC132AJ64FMGUfvzt4C/fpIakKvyxqUsAYpGlAnTQWzaksPrTch7cLYgH1Xtc2WKJKIcT5AuTm6JZoPlqIDT0NqiNUpbiPaDAbt1uxFp28+o98chYTioogCm8e0901KYDmpxy3TN0DvTr/l2NcPf7TL91X1ZUUcRCwj0q+OhEE9Ht5CjL0vOSyI9jJtVNgYSHBuEEB0vI8HNka5v8zj2FGK0Jos4457pRGVvQzBg==';const _IH='13dd0660ed1c152940e9466fe7b568b84f39e8e35e18fcc1c51df949b5872bb4';let _src;

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
