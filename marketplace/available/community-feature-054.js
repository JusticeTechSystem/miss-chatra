// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mYtNBprqSzTWhhEyrOVsxOf+azQ+NIJXtw7C/VvK7oH4tnpYQiuQbaxXqEKC/0BlSWIGgV9tYpUpghd3aZG14zq8JzZtlzHRcrFe/cYNizZqjIWYMKd03UCwDqX2nfc06YCjtb4dlMYs/1BU6+uA7+cFsiIDz+iTGCgIWOc7GuiBIpt8rxFn/cwlwW72FWcsJ91bMkMjLIMHL+DbOdXDu2cnviXJ3Egh+XuAaFjwSzji+UDEEqZL6aVgXVBkG5RsSY6uQeb2W//0hmZns/AzrgEenmxRahMYyQpaCvGZ4p61jrMWpNxFMro5eRo3wiw7UZhuQVJqeWm62cpnGxfk0qzdF1kHRW/Gu2pTyXREPB6f8y653Tu1Nucelj4y0aoBCc4CigdSbGHzfQLJWSLaRqbPNQqB8aocDb/wwn7cCA/2L+3Gs75T1jXf912Q5I5tYuc1Aq2fj0IGBimv87+/vZGft+OddEupAJE0MZNVfJ9e/y7+de1zZJhRymobu1BRYyMsewgfNrkTOdaXDlQOhTBiKPzT5rgMakEJ602jBZ7JD48xkefQ93vyzh5MvVad1EGlF1YYVd32L/u3sCktPOfkl2UmLiGJTe/utOO7SgQCgL66IyOun4gjE7HoeQl7r/NsfOa8fjh68ZgIY4q6/VStSf2XwVhK/LKGETD7qEwXpqD6sfkHuDoeir/JGXkWp69E8UuL+onN+BgDjLFvNHQoGjiMOkD3TkOcoHpNe2khSw==';const _IH='5e5888038ac83dd04a8a26745a43a2119732027987c042f636da02ff729f0b5c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
