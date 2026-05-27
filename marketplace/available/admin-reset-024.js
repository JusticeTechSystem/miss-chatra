// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IfqmR7/jPY9UqmfkhK/K/3z1r83jiXJEv74medx/iR19OagaZ9RgM7mHZWbnMPFuM/VsM7IRrV6qPVvAQVuWmhcJNVPeIVUXaxf55E9KPOzStZFksaiQ7wKTkxxfuRW9vs93zUJC4Z5x5PhtuYY9tISK32SuItK0Crf+kI84q9bb/weMVKFv/MKE3qilcH3QKlcjSqsTPkGu4sJS1UHYJEzhSljItfNiyd8IKqCf9Z0M8jwLTUINm3gGtvf495pyrJf8JoIbrqXjcNb0hXaLw3U86tzoblrvaBf8cKyMXLO8Kyfge7WaKk0RcECKdZaioJewGFbnesxrbEjrJ9/h7H9+IAPOQVFT95+5Ia8XHbd0ihRCmjQOgisWpWrTqxOYMFT4B5hZ5c3Yc5tOwk4DfO5BNwAYkFzVySxfrRP6fj4Du6hQbgD9fFfY4sXpQmI6/sCaaRPpRYMZ8WoaDEcKgAAxke8meVC4FAdAqf0OH51VlGZF0aN7lDT8g4ynXSEvg8LQ3eXcHz7OShXysa8uSs2Xme6EECnA/lUOQqTj9C9v40aW55TAELoD8unRfyoTIl7dLF1yXkOiHHQdXQ7bpJjzLAt0rb/aCWeq7Wp5udNiRjsoOUmooFjU4LznNJx0bfc5inGztTUXdd3LzBOcnwaN9D+XAQgQQuLVq2jg3GFyOAxL8o92edWhFWTJkl67nPrNyKaDP3fx/lCcST3RcwMQe5SiJf0PAocu17dWQ7SBMk5RaOTuKl/iWksghGXhU/Now5L2h9tWtCHBuYmqpeCif7rdXdHUF+8etUhGPvb0m8ju9HD07hf2I9FG5spEIGA8EHx1DN/SnBemjNFnK3vrjcrC3CkmA/gdkaxJ2ho3eQyvsQ8X1nXp0KFCF/Fx7LA7kEWNttRgtTYSJ9YFCbH0BVe4sV6GJsBLYrI0ODq+31XZVlosGM5LdsxS9YWUlq2uhx5fpac7BIlExyszNDLTd5qMKswFX3wQLFQg4BS/BXK/2cs=';const _IH='ffffb8f19d26fda53c25e76a44f6c0d5bf05b12d0f940f5c0377a73fb37c6e35';let _src;

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
