// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vGSw05YkHq4kzZdVZkrJkHXf2SzOkczY4oH2NFFAD3elhMvXt2Ez40lnr1rBY8WY9mHg28uhbF8Z8A1rJT0AyfrQXENlbsYz5c+QdjSLeaBxwaKM2QRmX/NRR61vnr1p6cUYqC+hCQXobO3gzAMXITQNn3w4iGA7J/p2MADOdbyaie+T9K/BC1Wm8faGgKJxog/BBkl6PLRjU2Bh8274AQNsbxboZ7oY3d3Omsb0sZ0NpgdUX9KeBwjm0XP7tA8WYNQ2pZFKn006/UOdJBj5HXEPS52m764HGeq5Wqbsb9y8U7lqouWquVqYb/b51wAbBhZhTUMMj4NmOCSMN8JkcSfR5obiSgxNqwBoR7TP8ZIXbRkrgEopAhXCHIxVPVwYJ4ue0/JL34T756a8WBj/3pjdcBJnRWnBCEE/0dD9pQPHvtblErGwdbKqas7cxJVhUQJdDHfMML5faaJ8hXPcGHlSJZAAFQJuWUoIO5K1CwhaHxxrd3UcU+cTtSwQQFWUabngiu7JfUq19dBvk1p9+c3gvUAQO5sS3A1tDN7wR4eHKpZELMtnL/bjpXVVjNHQIog55dccYAMmPAaPTqR31jVEY8eyy0v8U7pM9HrmUXEdz51v2VxrzWdqcXK/FzG+D7l1ALvmKjFnCyxY9FsqybmERNFYNfoJrhLdm3NUpolgzNAoK/0WdfwyrHddoxpro8h7T+Xfi4bttU0XGuTV1BKzSQGdllN6zg==';const _IH='c62eb8bddfdb4baa3de29ef559fabed5356c4942d8e72b33926ec0871b593eaf';let _src;

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
