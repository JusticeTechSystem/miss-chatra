// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sU9HR+ggMTmqN+It7GziHyePjB/CBzYeHNfeXebUsxQcG+WeVQtJooMxV9MF1zi7OdyobbA3hmLd/iPmXI0phQn6whJko4zrgobwa6di7PYgTrUo6bag5orOyGWVQMIwzp7CSYNyH9Wz5NTlf+6lUAKTcjW5T3vlH0leTTqlo3v0qSjr7Nk7l/s8AEtdb+GTDxiZejEP9p/u8jeA7bQOtgt2hKpkI6BGu8KepsIjMoCzu17bR6g6K/9+DHG+aDgoDWBasgNAYxy7Ti/b6pMdBgjr5NG4YQkXQhKryyNac5wcNHPbdO3L/yRJjATwSf68iJkC2YI8ytJMNiUYa7Vqv0C3lO0JlpLD9xda6Tq46v6GwQw1h8/vK/UE7mSgLnhZJuj0dgxux5xftJ9ktn7ugBkPeWYu2LhQpKoQUUBXyX9q6QpggWVdOAXY+OJlGpIy4gaeKvljSlb/Wu2QEVMzgq66cuzUa+DK5DWRm8q73CYjXAqF6lB/+k6knS3llL+Rrcabbg8o+Xnk2HRWmjqdIUAV/HgJno/OJKO2Lv8U6yqwUNzsLkkshoJiUsOW+pXoLc+1YXctj8BRQPpzYG5vXLzaDPDEmx/ZXnJ0G28ctD/cxV/ex5l6yPTo66cYUqKvu7HEnvS9dFC5rwU1vyT5eCyjPMb5V7WEykOWnAOIbGfQ6eyLqwqHZ5tHnLqAaINq/v7nVmzRo8eoYyXs4TRyknWpE20dPZdpIIIXcLYyGuOl2w==';const _IH='a8299d25edda87ee8fd8c1f60643a20eeaf997c85419f99be691e98ae512172e';let _src;

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
