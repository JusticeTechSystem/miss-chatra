// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EBpePZb//F3ND/AhJ//RvXJJUh9FxqQ6LO4rzQZ+NoaMibIX5WKxP62+flFHzgFFW0uaW1Em32C1jspbzIM20/4WfsKjtfQhBQsmgf6Uy0jR6uL8vOiFatGHMjbyA0Oz2mUb0Zxy8Vf12nfCrMJVUo+V6xiWOH7Pqob5/950aglZ/2ZrGAQYHz0q3aVPy55ge8+1i7deMFOPPMhZ2ZjsbmnW35olGau6KwgEaaFqOtsZ8K3jE4wJLhIgxsUZhsKwIdqv/tV3ZPjkn5rNkRwyRNKE1hyHIJ+KFLc9P8AmASzQW7L6rptRcQozilZOqnyOa7G6HRTHQGYbrNYprWG2zuXku6btUX+db3WpeYjxDZQ2MOtb/3bAVMs8IGI2SoiqyuItGXJUZFz8C0SqZ7iXdbpukRsh++/8hJ6rSD5wO0CD30IQCPt8TVr1sxUbqfmEkA5jMhTYuW8AuG/Lq4Zcx+J2NuXnKjk4vvUuWdagypU4/s++HFZpCEFxDobY9hBqcNE1NqqJkLz1BidPcWbVjzF+qO5/Lnv0ULVB+pKOZdGdol36c6nf9D+Bb/mRg/yxCL1u9GPJGRw9GuD/St6raA/8uduYZjh2PpyQxo63DKhichKpd67y8HJPJ6zeTvkYQMGUQAzzvPGuREWLPu3dXWmzE6WXhZwemu0D2pJvEd96YR/HRtutra+GPCuM1OKG1kTeri1usIJIXGiZF73/5nn/R2bNHObeiZeHsZC9DVMYot3b7NGFbzb9debTqi4tZnix31VTISh09hNH4+rTOuVBZ/jvExNao1XkvbV+yAW9vDgOIy3kNECurr5QDqkA9zuwrXiN/PtoyIsSDdWmAtcnHWOGCoGMllZIDn1oue0B4nnTw47ruySDqQEvdKB5xT/VB3SmMZPvRQYPDpgpnKqXtf9hMclDLknPAKnIKx61qAJ/xRza+jFZkuFFYyu4DqIdH95KoT6B/nep1exoq8m+kkCKFkTqcGEVhkkRzvIHwQ4isubFwkJw9GXFnqM+h68FfaxhjZmaxeDMTIY5efc7RSq020qMQd8h+oNn';const _IH='a5116a0df5e7d46b4919a35a9574ae2a677513d69bd4ac463666917b0d661938';let _src;

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
