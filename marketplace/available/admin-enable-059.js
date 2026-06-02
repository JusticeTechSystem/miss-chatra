// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vZk3I7b/eW8ps/UD7e3lEApBFsFj12r8ogTHWD+n5mdFuRdAXhkkEUVWWC2z9OUp9E8ZyaHVYgLTv+1s5F2d1dWpfJj1UApXqPC8Nu3xKWektfeQLzC+FXWYxsFadtL+iKnWUQKqOF212OjuLRQORHsdlL7l52SWrA4qRVP693DC6ABLrq5OTcmxKX9NaO3cXfo0JXLdd4uk44f0j2b2napyJrZUrtectEPVO5LWABjOtPW8hx7D9J5Odnh5fzUzhJnmfsktBYx3ApOMUyhKzyO7LXn/WNJDdxk09HriKTx5er4+Jvdg2MBZkDhg25WKuxl0szoQ8csqkOhQ8sN6V9cUY5tF293jaCQQVky7/mmYVliYMmHDqA9O/MzxxdhVT+Z55qX8rGFasEcIsoYnfQnUXc/ElaxSweDY8W8kiGQtDgaI4mkFVknpmhovl13ak16z3TxvH0GkQoYANMjwhYxTSoPeMtYO1n05msnZaLa6JJ5EyjwaL+InA0ggDs18pKfJJe8gRGigijhqcDFQAflDyfFpAzdpUh4yVFBtYsHqqUTsYBdtXnUOLBe4aiq0OKSPLAETpB67NzKuAiwJBR5OgjixTzirawtbMtnfP1v4ryXBatVshLKrVaWfQ/4NlYNwzfjLKstJVqA5Pz6qNhbnmHtzzeFpqb8DYEjrjmfYlte/iXIipb4BFBylxC/iuwmiLSMRf837Q8ZgOt76MdApWH3c7TS9VEBNK8X9RokKvimYFgeiIT8HvLgvsDLZR5jVhIhIu7YKQ6RnogFC1MkovtcrAN4cjtLyuaHhZYIfuHBLMK2HzHrAu3eMAivdhB1li2XC2woK+jj0wCOxrdy8Rx4gP+BeQo8dOpI/S4ho2vsDyzNcZroZRyaDu3O/aSevrgKfz3fVxflQPTSh8elT6W/796fd791cCa6Zok0GFOBqicSuU58JkcEN0hsc8niii7f8JOHU7jXu6m4qL9C23anSarRW9hTjR4LlWQWH7vAkNc1OlHd3Y8S3';const _IH='c4933ce4da975bdc6118f7a5e45748764bce6b66fdc6660f9e840f731e68a6de';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
