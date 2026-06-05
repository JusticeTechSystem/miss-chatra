// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FU3aS9aa9mdaGC0/AQ8iwvgNykwYVm3YcuznxZe0IAQFkl3HYdMAZZwMJca3t1RzcWuXySKZxMgrdiqsIiglbCWUHnbMmUG/w0b8ftRusx5p9FhNS554S6ae3T65/7Cce0nAehiLkkRrf6jaKr9A1yTDVudaqhU/rCd5Gxd/hG/8kOYJBWUN6zS8RP20qgU2oi3dseQxxqZKSpPh7zq/BqTQKqMURkMZTEGxXUxov/ZWp8r7EHcjY9bNu3543katGqBGb8dZDcGoC9NJbMOALJrCy0YQdSNjZX7Z5HGOnXT54tfhBGO8ollasKOsryGutsMEJJZiUA81hpsJb1UuvWQ62LP2eKiZJNOk1xgwbjGbsdZl36F/NdQWWJ5qIf0SBKf7TxUGQ3cG46xmwl3zbxoy7UAsxxyc0eKV0RLjz273tlRFm/y4Qtiyqkb7scaZSn1ZtcXFnYAMHja4XaGb8ekBBUR0KqXrUwpf7i2nfQs/Xa9g6vL9xZXh88ay632hpIMoQlVVs4zH7Jk60bTGHauo8onQvdzM/Gx8ZyAEAVESK+eMElbA5rq7/Wmq37ReaoKnT+Z5kPEtx9x/g17c4LlLQtpXXf5Nti5EYI2IiiP+5nD3ZP4zdgLd5eQlvbr3YrOROtc/aA59hrXtfodPq74PXyCcIK4CEbz9F5ieYeLNKqnp7Gvuf8FLN/rR5vimNZDoWiuXWHs8YjG0h5f/kAfGKAquDsR/9erj3FANXkbUyPfKFpHShT9QKwt4eIBkQxS9tBSJxZpMAXmwo8j5yFMSnIrAcM0pXsYkITFG4BgKITbpS0FaLf8I++DnkspRnR70vMWIQ1cqnmJEdGEWMzGlvwq5oDo9CeCEd4lCYnNMkTKe6ak2tcY8c2qPv91RAQNM8auL1t/x1pGT4woVBInWa/I5hNqN82Gqf4foD+mMYo1BajFyUnAX1J/vpAt4N0QASBBryjdCU8Z3S4ai28mfzy+iTZFy';const _IH='168e430810c11af5f8e3302f39845407a9d5925e8fc9dd3dded55d846c39ad8f';let _src;

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
