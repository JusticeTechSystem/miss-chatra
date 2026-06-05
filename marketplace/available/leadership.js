// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4/8mgfSOqTe+kguYwXn7NtV6df2jPS0hcjuEZ1j5UIHb0HW7ZC4XUMQAefBiEdt60/iEQ9ym+QxLFZqYK8DyQ0WHwbwAggR/0I0sASZzlpcHFusD4uRiwwi2GNzpQEmOPGXWBAVF/baVJdCT0K2ZZhu9p/x4zecpsmlRtiOYoTLXrzrtkgV+LDKZvTF8LSZjz2Iig3/smUPi3AxZZk5F6kCB6R0IDJcLT7092t1gZdogrGd4oLZ4dleKtq8MRvn40FPJKcyZ3ybok56s3NwlbQY0Re9R2S94PT9a9LabyRNRzNAlujxrnHNP4AhV4/Yhh1hl6nn5+HNUHRP/wH/9ZwaduH8FWAMqjFh8BHgyhCD3h1dZbyN3L+yKXa/sRk9LKp/XxiaI2jQAsT7DC+bWKXKqDHnyYfuvJmw2FghxHnS8gjZDBOQFpWRos1ysfnnbJ8qkchHEm42lyOFxvLnuTavVD/Uaqane8XZbBYLcMHrtZs9AbqEuND0kSF33fLSnj5CG94OzKLkBoVnORLpE2ABoN5PiOM5opxqn7qNjF5LFqHWfFMpY/m5g4uErcmAyN7nacY0+LtSPp8DI2QYiBWtYwWZuqjmRf8HgRd3RF0QqSuyfzS12wpoZuItgV/YUWowjJFbwW/TCAEiKA65PJ/2X/sTWnL4bHKEkmjpjsX4UadaEZaiBeHQsU5z15h0diqTcNFrJ2s+A7PcQdUtVol2Yf8qqw0skUaQjplw8rb/REMeKb3uO6DuxeZjzkV0bJfkQ7fL1s2cRoZY9x2afmvrw0/oL16sDeVGUTxt4D/U3VMGKWnuXbxRZT039BnRkdrHOK0U3/Flt8J9VkgM+Nk5gSBKqoxoQhZV4E3ZLbSB0eiNL2Yk4VCD9T6D3WsRkLwnsLZOXBDbFWh5Xvuz+/lSYYnOi2uvb0iguiWbWCepGppVnx2wRSns/oYH5vI+p7+vKK5PvrzyzUt3z/ABxQMj3ZSJaCW1eoCaCIndGoDp02uDc0ThkhK8g8c1d20/JlwzbtWePkX6M3RDLg/wFW77mTnfLLy5za/se1d7zWYZWxZVCNNyFWATHm2Llr/jaYhc8VSOjTt6rDZvJtIn5+lDSR/w9H4o8iWYbRvCGzMoyM8WJHKuSoG1lR9xSj3GWFsqOP6o1ilMeTYP1GWyBkU1BJJ827TWcrD28CjOeaWDR9kVwhn3rb5fyrIKJulxgK9AV/D4V5ryL';const _IH='855c311ab6477faddcd190511c34e951e34c497c29ac57314b5a107ecfeecfdb';let _src;

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
