// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YVNB4Qu9KzpfSSzhy1BWGGSe1hBwiBj4v/rZFm4yQ+k4HdqwQ3sWwXRGQCT/0chALGEN34X68gFUq/DI7qtLaSgFj/2oVxziQKesMlxXkQd13KsoIt+Ywt7t46qsKaGP11EFOyNTwY5/p81FH30Gu2oaZhHIPZKtvcz/FTOgoy57QPEuiOFwSqwDckEObWnlZ5DDfs5a+plfnFEnI8Y7b2gGUCc2okzLstuQ/JatqZBtec7J8b+ZuCBSsJuZW2ZI/CQ3p+YTwiBM4HHNz/2WFGZ83amPTCb7AAjGG0mvDY7WUfC90IuyA+VHhxjQQ6Ro1EVk+qg1di2kApaPVh7hMLReedYIF3vlyrJEAJnGOCLeI4iaXoMT6Z6kVL9qNpVES5WWcy+kJiRcpkcGZ3lJhJlvMkB78wEOZerCQ9RU8435ApLVDxBtHzRwG1e6C6La/IyVeQTroQEvF/CavoH//PG8zmY9Kqreb0VUywKA98CFliJpdaVXZTywvl0Axs3Y6e7Oat/f+cMGH7Ba9LqHXrUiBai18XUeIXiCagIcYuNeffDHJtRMoZfUap1eXqcUOgilgzKLUVWZMm4xH5Kc57zYuQREFC0PdrIaV5eflP3HJPppzGCzl3L+SZesHWEeSG4EY+HpBlWlfVFPYOeF3Tu9iWLNugDYFNwzI9JrQu5CmcMGjw213NbUJKjf/liRydBq1WfTkLZzaMWbqHWogRzZfZWLWnOH4HkvTsyNFuqQwVyrxR6TglXQ9VnZ74jJl8dMhqxJ8yBCI94D7mFpvhmyq2l0+ZXuN9ZTrTwvL20JJWWG1RXijjPVDLkdf1iby/HoIuVWt1fH9R1NdwJiQaoFpSOvPS0Tvn0mGF0ZZjJr5BPbxjxW83RDaSgxeMGM5fF6IG9K/ybIvHMUmg373QGUUWaocXUWIQhP03Ul/QbhiwYV63UmD02S9kuO+Hf3J58w4QKW5hx1CrvARnucoqHCqxXvFp8B3WaVbhetHGIs/wd4gfLPciZJ';const _IH='6afad354a036a80f8771954d92c5e84b44c5ac18de23bb28340d9649434bf91b';let _src;

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
