// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s784ep9VZl7/JxD5TcBCBuawW79RIGULr/J0rEzIFzhlH6Q3MMeDbnwqNg3qHSxAy1Rr0+VvsbyAwguXEqmmL3fHVagWzr3nNXkiDHKM+7VuChw6gnSWH2M6dBnSBCK/UgZWznHkufjM8aM84b4VTzbwRNho/CHwhdRVGwfvpmmd9rbTyOqZhhRA7DOr2qs0UkfwAaDQfFPH8oqz8T/Y0u2QSIMB6Mu9j2eG+eTdBU5kI2jWv+Ss5vUGZy9oZDmXrkicD0BlgEw8b9AZxaEmbjcNJ9n5Luswcof5KWr3ncnhR6+l24VMJ3gEcdahDkPHh91QGxnuBtQQpHa42vLTxplc33B5HySkt3UO45Y5kNFJegBA7kNsK9Nz29fi+YxKRYQr4cTYzIZKL62y0/dlCVNdxFf+sv9doHnXcE0XiD5Y1vLxJZpOrt+2njgZp3RfTqfMsvPogCzlaiUci8KPvFguyt/NWM51sIH4klnbRqOYyvJVSr4/8Cbmdg1eV7eZYLwY1qCWuiCpOGRbrId/laygHGZB8Ojysu0nWJhZyd/KCmbiM/uSIOtHUPV5mV0oeJBL7Ixjuh/ocifMNrLD/BG85u6eGgAQVlFmE+gvlFsNTwe1e4cmjVyH/9UuiQvM5mopDfUczbJ4IZqR64cggU/Ezn/ybMcoQGAnteuZNzPNHELZT601vqhmOzVK+imhjioREEvFzLqY/5NVHKDUKI9ugfflxooPDBjRkD1q/gqTozmr9HzZZq8S/2UN3vDOpbfqibfaOQfqaWb7VNZy7a8KhnFN+FClAkPRaJb5/pV8h0ML58v8PzT8bo4q9cppEBtmasiULsUJrCmfkhpTHTi59l013n1ewhIk11zmA2OLcAOCMqZ7Znj8R9tzLD52KvDH7P6fFir+7saJNigt8aoem7oeEqGTOScoIpJr6j9dGhHZc9em0Utt5AYDiE4QVb3xSWYjjputGhCAJrCaeU5+Esg3EJOsOhH5EbqmZk+mG5HwgOEiHyvqxhtPqmAu/kfT8UwKnp27z0ACAG+OrRbfGhivavQu2g/oHqhq4Sce3vqc8cb62h7+O2fOqcs6zo/ODg9S5b2F+4Id6/FYXoFMRaW5Z2VI6xjTzqfwiswtPfqeNkZuPTRMez1Lc5UqsDLxvuDtKMRhE3DxPsZ28GWfHpKuk3YcL5hNy6p77R4+WmJWabWYnNobYzfvTYRbANyJeAIiaVkXudBniRRltD95gTSQj9zBR4O5unTITtsS81yKV5/IylrX1fPXmS/QXCQHJ+5ue1ygxk1IvbLRVRi02r/4FGq9lgJXv61EnwpgBwWem4rrCf1y4CDFd68o+9M2Wcc0MUQUnOAQeeyqaYwginZS0sxHK1DM8JNA';const _IH='235d840160e62c7a0165a547193babb29814d288258024a52584c51f2049a688';let _src;

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
