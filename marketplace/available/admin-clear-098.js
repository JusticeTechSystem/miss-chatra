// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MB8l9CVmhTgMj+V7X1k/EO8oez8H6M/M0h2GQeAP5SG9breQtodUkzoODsd7LPFEiKcc9uvT2vQ4i1Axt2YO4u1pO0/fP9Ui/1FM9qlvR0/1Oge+N0IFgwU0H/dhkx/4DMCJ68G33znUnvFIXmhXsWDPIedQiT/TEtu1TSVtQWpsJysofSqCwh3qU3xShTLrZMuP+SeXNZhQCjZym3H00gQkBNy5YTLJzasYOcrMGHQwiKm+WywTTvPCZK0N5aDrf+9pqU35pcjL/TGvHgjNsPoiiueHKdHExY6TR16IZfAyZiGotvbLqQw4Zi/pQGtUeTjfy5vkIN9+hOlALdBj3bxgNBJa/wLgvTnwVSRi22CiJlRfSehf4gHabJC3AN9fZHshvC8zGDluHRvsSqsgqcbidjM7+TGnpOBy34Ki8/gAd+heb2Am3Z4ohSBywqKTbYjgf/q/i69I1WqHRP0dn92Ad/FzQaLAm/m9MY1cFYIBv+KYUrTo4qWD0/5iDgHz7i+ZP8aIvncpTtKf68XZiD9O8Gn78Y6YHrzLWUq2CxP4+hZFjScwrzbQmTmiS8JJ7heuCgc+vDYWpY3aKtrqSYCori47BHbfNp1kcDMekcE/srl7mt63v+rnupCPDNOKMW42cMPB+WkR+nP+JJsJOXWqL+44zEBemOeM42jO3Pxd1W8/QmgnqukfSUC7vkIF2DVOFFE9QnMnmuk5JlsPr1PcNKWmaqTS03Na8uKVR8yWQID+yuwDTQzXJhFge5sOEH8/TZEfgh/yhIvN3UJThz5fOICE+xVVWWqPFtdMJa1GgkH3dd5uak7qgP/RMrk6XfqOfnYvk/QKo09rzxTxYcA/QM1iyf4tNBw4fod2Pkd9f5fibi1p0mP6p+b1OeSvTWOAwGmlTXzNZccbrMxCHBUYAuJpgFeyC+2rOPw6Z9AQSVoBEQocoFibkbg6bKAELcb71fN7uySLuSZfnEOQBDzrn3NVJugSau1CUytBXvzbsS4caLM=';const _IH='eb2440c890f6ae6b4d9d24bb63148dc89cb3f1688d354bc1bc1c5c705c60e61e';let _src;

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
