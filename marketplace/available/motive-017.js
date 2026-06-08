// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I/ybhtWgQ8cIeuewc1i3HiN1nc17bSoFu6WweSnHhlaMIKWxFDGgNtQLQ7+lIihL9Sf9HAWQTT5GUjaQ0tuUo4uuDTChtSGGOh79rysZ4d5KTDqMnCgJjq8FoJGJV5uLkuc60PwAisdmMMZe3rOfaUjYInG3TbqreCvUu2F9zbmC95MMt8SE6rbHFBtVAC8Bl1lGslkVpMqLGyiYAtpKsdLctgXkujTxqEneHdUgsTXuZ8ckykgC/yybSEERbzUcle3x3ojfsa6EU8mkBKEe9DIox1JqHKDwwzr6zg4CO4wo9a/QXJiP6a8zE15ygYUFZZxosyh+lIDyTYeQ+ACMuWFZn01e6WOrsw0eXqLRDZOiUdtlCXD2jxF1TznFiUxM/VbYhRPUqYktwE3gTlbbl47rGiUzAv8DOiuV9elwYabfecNiORqBh8+dwJy/JGh00j6flu8xcE+kMhR2VjddeGK1oHameGhDLCAVSlw5gvgzKN8U1QigA9Fw4Gv8h0WFD7wMSiqFdpm+bJzScb9eisxEbXe4i8V7shmHtu6jtF2Xng2GKweUYMf1sUaUmDEl8Fh1ZgQftEptmoVT1WoGjlM3AfU9rkLkzjO14UbyjRWXugfecSxY+eQLcCv9oUBUVhaTcIEdMppNsDuroxqNSfsgHqHJdMG60lWAKFJtWPaMoO1C1BtyTAFoLDPtjaYf6BHYJ3rX504/5F96SBx1CMhVsKFYi/gXG4EK6KvqtM2BEGg6SfFcYe+N6yKeqWHOtaNXKLPsxhR9FjMjWrW8KGFPhXRXq5a+etKxwUhJb4YvJDzC1AaqL+v7LVDz3bAzGde5400Is8WK5Bm8VFoI/OgDVvFbTgankBjlwnUniNNyICIvpr8Uw46bmzI90rHg9OanzT0XApbqGkb0fUPKpWBFP9ApRdpIY83oaGit/0nmrtk3cuBmqca+4X1wvX4S8Z96deTX1XzlskgDrvvE0HXGE6LDxbeCDKiyV7kOPa+MwegavRQmQlYr6xT0cIgNRKHmYWO2m12blnjR0uS11voZ';const _IH='400b2a9b10c54cc3412903e8a43def7e565eec8d7c92ae66aa6e71408e598ec4';let _src;

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
