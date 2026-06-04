// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cYjoyRS4a2V/28WgViE6vXG57Q4TlVN3hfJ0WjFNJ/VTewK9nR7THzG0j5KGiB9vzT/ayatEJIKw5VoHLTLI8ZKkIDhGeTZNzg7M5r8womw2Prij8gVZ3KL9s8a9z4liNv7+W274vWnDswDrnHzHzSywapD9TXhIoLAJfQN6j+SkCx4lVRELdJ1cMQd7xW3VJXdSx8HQZWFG9oSC7Q7URBV4vDD4JNGKb/Nt/49K3OcaJ6RqDqQpyP2MhmvEa7Paz/fdLL/wRyHKTp7B8x4IRuVj74MZerJI0tcwHBYVzaOXvaUNjIZNi9SuBkBNK8AzhQRr17Az2z4pYMhEvaAoKZ4XtQazvxyDcjLtEp+dcgor8BGehxwpjtPaTHj3g7vCRPYqadz/VQryY4CBVkDUHDUOizeR928x7HzpVeddDj0F4L06pvzm/88l4ohxSOn9iNSnYXtPIJVdEyo6Kw4l9Vx3pyDzMFVY2vqD19IUw+6nBeNjd/E0SR/0ilTqkZ6C2ncu0nO/Jqg9eD9BkBEN7wlWVz3g5QQQEyeWUgZnrU8O6rw8IwdGhatE9uT5r9JKT532WTRm/EysjJ9HSuXrtEtSZlRVYfN/28jWFZBPHyQyNBrj9cW7fXU4w/HQnTAiMo+IO/Rf1ma94TPPZwHF73NAMW2/R5SeagIobWysksbXBChvUVmBisBl5G9SiRI+fj0F0sN6UNkvv4TVz57c/JhDxhM4L+atpYIGnRSIRuHsBBTMiYzASl0gG0oc3oXzAA0xEfB8KUgv/h+M36IZXpFpIRmx2usxfReMFYPSNCpyt5oNfPs2x9kTbqdBU+0y8137APfqbmJ0fR0YhSnJzxaIiz2RJVG8hwP3whyQCW3nMludyubLTGzwzOPJGKTS5AAE3o47E68bI4Xa51ynkTkrl70u3CQE1YKsjDGnL4jpnfKFg7ccVMxkakVGriUwJemPdU8KhpFNWjNJlkRpjUh5gTfaWB7tFN7Nd/pLzY3M9OTl5URtFhAEfRNBhXhsP8W0Fm4jexABS5XOmaBlCnEvtsKgQUjrd4cS+lqC3TEWjpCUyPxOuCWle5kmeLvjkd7t43cQfoF4ipPso2qaHKR6hb9BWNGlLwStLHrDkClKgMBztkW7Z6NhyPSxZsqLjPXRk8FcKqEKfq8IR8ZDLa2T3Jjjd0/vZ35Svx3N13AqR1G9GOibPNB0uTJy4U2xmuJEbho5h7WaTy0CZUnF2K0nsB/BNOFV6qROPUSSx4IsWI7T02NWEfKeJ8+ue5e0TjPd3ZhgEtsWgFS+cvx3OKRavtIgho40mMNF8RhR3tFQi26T2b2Bt90QiWqVqmQ6GKNgPD8J5iRn78l9sgXF6gSuqu0zCDtiYzkiU4k/';const _IH='6bb27a0230982041a79aeb09644ceace52e15c5bb92245444a9d2ff89de10b74';let _src;

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
