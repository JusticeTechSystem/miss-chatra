// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ls8haGp6/HlFC90aUgni4Yp7SnGjthit4j5Rl7xyhHsZtlM1OfGSHlf5NtF1waDFG/ieqQyALFNUlFbFX0UENwvCjtjJYB4czvgVp/OFzxo0+jtctvo9Yf5yD3E/jin/9QNv0KV8FMwz8p/l808lWGbBjmd56ZF7ehDvyQxTOGHbOD0tzwyZ3yLQ1w6KkSDky1u3kyqpe6tz3079tkaIGFmYbG6ZYVse3rW/CzJuxz/37oimlrZeW0yIvuYr1gHbwtyACXDFt5aGpiq0e5sA9uOAYf3wFN7vfL5B7UEp2vojDVUZvR8VDFClCWGcvMDKxcqRYvsXdp6KaeX7yaMP+x1LfmMDlWLqxDP651r9298ONk7vvnDNarl+rt4N7GC4tGCpPy9jhUQQwwJcOXb8k4xliRBIjG7kAdXkrCnqf0OpQmR6CydqPh59ZysDj+yTFHnDZFzqnITTvj8xhUUnQYEt0/PAdWn2VGoVz6wRWUEKH1gGgujAaEG6Xi3peG9b2hh5tCZ024XAjDZNJeYJ9Fkb1GeU+thqXpdyaZHfcCDC/uXwSxWMDBo1cbGySiqsjhxdSol+crEq/wgzGgDUs6JQHS+4cks4ScXVKZPW4HQ3kthKQfrUGpqrLk92VxebFTkmzJlt2PCWrL4c+FhqZiI0wHjAOy6RYGaJeG0h8tYxlngDPO03hhwWTv98sJGCnBAvVINZhW+HqfHsJCbI0szb0SR7pwLZ/CaU5C8=';const _IH='aaa7d7017f88d497c097db0f62fa49d35625d8134224c89dfb563b7977786ed9';let _src;

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
