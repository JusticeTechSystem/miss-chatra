// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qTuQKe+eYNGfuDcHvkSqMm28AiZ/PLIdmWm7rERpgU5H4TFdamz/zvg8ud2najqwAZrS26wSlFwxRcQtyWy6RsAAcOozDvi6vLQNbWtzDmYMLk8NgGeKZdi093CVvaFtB/Cr7B5YtupY9YSlEs5wT7rZmFqMgjPv95fwaY9zs/SPQ+6tFJb6KJdFjGF5p+cXPOUUuBz4S4XKc4eSkK12ermDLfPgTaDfW6IfZcLCkhICF7rjpxFt8rjlt+swuPORdbe+PVsWypX+9KTn+zgNjBe5w6/KQJGiOSsfDtudOT9vzTYanVQ6V0Tr2h2+ZVVxRV7BvwHwThtJTYv06LwccjdPk4B4p+0HnaawD59Wh3awJK4J0sIeZC1ZDvN2ITh45mab5fK57TtsQvwtnU0ht5YrwrLvqxVqhLSguRe+pjnqAK9vbtRDgXAJcQdNLwMNZc9JdP6WBVnwFGkkws+UOtlrCinwUlk6UF0siK0HiXa0OJq7bSgrtuNpUAtzJXwjzm3p2b8RiUWWnY8VhzWs7q3YxJ30O3KStTqzwJ3fH1Xb1JXFdF1DBi8Pa4J4ZuWckwMHwCvyIo77/GciDNh35DL4pNdmAyPCK77c/nhvSFR6I5beKqXNGnXV6qQeWUdEOrt5sLKuf0F0fdKXSng2JUH6QS4HA6MQigG5y6DTQ9ul2K5/Ol9VZYANgMjWSlKEXX5oO7CD3GN1YzjyyACfaR0O8RKNVJGFFA==';const _IH='b972b812764ff37bbe6706e7b6ec99e4826173d4c8a960c9a045c8b56fe64626';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
