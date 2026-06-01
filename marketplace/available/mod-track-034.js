// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6uLtph6w1/RiqyfglJH5A2uTGDlxF+qMVCSG8v960Rl+K1Mm2nScgy1hyuZiwh0u4fUntY/HEww2lntz8QLtUa8L7QPo/mfW/CAN5n1UMdPRAceYWJ+20Tfg4TcIRvm0AV9V8FK9TnKhDmtNKhw19Z85m4ypSYmyqVguUnbyTt/urctIXScFkOehWysPPtQr6+tAGcRlvpY2Y5BegAMH3nOSne6gvBbXtdqCdg7Nd8ULqFMzFgV06Gyo6PbiPp0ESaMNafyOvKPIR0nbpDS0aKrajQC+QRJcWBgVr9KSjWyuF9Ejk4Aj4yM8CkTGNt9bR38gbQBYjF9m44XEJsN2bOBO+imU5pcyeBeCMzpjIu6EncXhrU9Uk0s8jn5fWbC/yaIj50k10CArUS+29uUAN5mjaPH5+ZxBNsrAhNSHWah0/kzy/uedw/q4P/wJg2Z7Q+iAPsfhytUwKIG2hvSjyTHPXjE0KnEj6gZp0C40Wc7h9GkerGfpao3eU0xtpI/ADuAin9bVzmvA2LKuQF/X6Ncv74eMPtgwQ5OfgJSG9W0H5b58MDdogiuMQ5+UNaxu4hcINHKbw5nvbQ5MadbVl/c3xbxpJaPCwFQjSBwNZxQ1TOPIpnhC+xoJ8uNkbIOPyA82RK9vgt4xjhOXJq9lT8zer4zjnuUTZYlJejNNGEHe8zUFNq2TLtf0lRGz2mPE5Ahh5IDbXeTq1znscGT9ptR9LJTPm7/2y20dqk8f7xmhWlEB1hDKtu3k3ZfHslpOoaZAThgzFnjDsVT/1mYElrc2XytaUIb1Pr2ZJEU/HtfFIpDzSNsWf7WwXGhEHD9lvQfENZKGpSpfahaLXaZYh0AO4D9lyRNx3H0a7NHEIWR/o+nK50PbbYcUNRB0fJ3C77zFINWovrqG1lUg5k8FngGjPpbhLOVUHM4XmG8SBD7U/35/zAJ+SiFmhyJ01z+onjfhD2VbGe0HPPZnQhr13SYXRrplqwoIsqZf5wcI3c8CweVo6aEEwiwm/h5jwmQDc6DlmlJ5wHzg0WvlDU1MWQbDzi9Y7j5cBmxwcosOz5tQXHkTEzDq86WB4S0ESquX6MqAJHUhW8oSA9MVxY8yZo2xfq3df4T3Z6fGvHZz2os2K/J9h6OOmpuXkZdM+BQUMkAkPE0bFTKkKzNk/4VZ3l9sll3ZIj1HKu9oM60mR2jhYnESjWdAHhi2n9VTTOf9qbOfxEOfHqro+Y72uHPf2D5r6Hgadvsdn/UVNN1MZb3xSu0pFKU7r+qCrFu0uvmb+vaOt5+mjENgoWrn6OPB6CDeqoZI7ZE4g9KLxEmpf2k6onCPi+Pa1+mt4CjkLczuIgpIxo4azULoDp0vo/kGIncTqPLlEDI5Cc=';const _IH='9f94ea9dfd9a5a07a330d48cfebc414aa3672de9e07ae733c6d89ff493414d1b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
