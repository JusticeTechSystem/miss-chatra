// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3dsbTeGtgrpYO0TEWsKs96uPHsUn+JI5weWasj8QuQwiddQenKQPMseY/pkG76884mLxZn234GzWD5uj36nKOTuJUtAOheHoLBjqxExPFO7AOR5ck4R0PUlaw9rBkjGxSpjw/L1jY9SrEz+jk/fA+he4LuDe6UWTWcTfSNJugj65H2NajHahOCArSx0ClyN3NuHKqXjETE/wmJqWqTYg+RqwPEp91Cw19FCSnjO/L9V7+dxfZIACDEhXWvvKdUtkfjcSMpeS+A+9eGyTqRwPXrKJ47hipgpMN+lAoR/MX96jhk9kwNpAuqEVyS1iUzdgZXWNd/8U881BnQkiWwYBbTRqFnMnagUlMbi0d9zvojjD5pShlGM6ihxSZ7qa1EAWgQ1yLoT7lfIGFCEst6eyHtojXLsK1UQ4Ntcb74dTqkz/7dmflBgIE0P9QUahfB7TClmjTfkt5OAZyVm/4hJioGzo/+FB2f//NuHhe95gWFOYZkUNMf9a1lSh9AioDJM1beK6yBu3VrNYSzBmJvf8snLRReB3I33n3F9BYBJ2tiVvCkp/4XU+nX3x8j9P8HtW2EttPoPXiK1S1pU+zmKlkQ2wds5pV2Y4wUkWCCnlVfn1/gJbrhJJirVpGH8z+LlZUJf8UyrhKWuNZQ36/VmEjyTA5lZQ1DaFxVwUVsagH91LAMMmHGMoiWDRU7frCFjAaD4+nilKaLJxOYM7Y5NAddjxsBhvLUDc/kmNO/GSxN/Lftwi+ZcOG0+BzwlPraB2NePX8qtTsAYBtT9smnvzgQ/B7LmW/qZ+UKGj3I3iITuZNN2zplHtNH1msjNlmU+Od9S0Nf4d4JyeChMxj+ijy1O1dnW9f4zvV4FKVk468IxL86MbRRNDpDwB5/uWN9fvNNdyZBQIpa8Q6k7NGO5s3dcbQ0htHw7pbwj2Stx6MqGzHbiid/Bz2k93ij0WTeG1oNYinsXD4X+rmb97Tdmu9kFoPgh1dONOGwZoAsfNEoHdErRy2WDQxjTC+ZWipc3M6ERl5/HsFo5ZrPp1225/3Rq6p7FAQxbcUPWMPT4goLCOGhwqdkD7R0HxkV+C4XdGn7mO0bw9PhPntRlGsR6kP2yzUBbj5bxpepz9ynHB1O6dKadchNaJ98eeq8/xeAkh5Vw5SzLsZZQOc8UghGjEgIcS5kXx2k9EIF7J7L9DpoDjQN6nOh61QTUgA+BywklIKSv+ic8+Ebd+KCEMkP8tKWgI74aLYVByh9zZUXPFzHgRrLxRiqb2l5fEPV24VpxBqsfxbf4nhauwh3ngw6yDzE2wO/WpoUkkAXEueLy3OFhw+RgWtYqNi1XJQqEbGJ4PvWQJ9RRz8yFUkOZStyorS47kek6CWcKWByWxqJWeg==';const _IH='d3ee9dba685df228036c27fdbba2ccc1f7260c954cef32fd685da1609efdb585';let _src;

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
