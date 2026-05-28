// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+ujYVQP5shdFTW9194Mt2bMBgc1gve8eUU3le2uz6pq+jZRbyVEzoLUhjLH6qhaICTrDaOxkHFclGOv4iJ8NwJmOwL0jRe2IbG9gI2jhZ5lCuQBbmQIgDhKzd1lOOl1XuCXKKey3l9zOKep/VoVb5MpadtPLXZ3SO/dtsjBJJ+v61RfczDLjqXDfzT00kWekKkKfzwODq8lS3NxSPI8LPKqlk+e37JyxwrFb5J5jpwdbRuIi9IZknGPvHCu9jKejqo+wPIXCVCnpzQ0p/AI+wPJ1ZcHN8CIEt+Cq/hH+vFWJbsGNfWunwV5zltSuNWz5ouG2q9IYmmVCK+15VLwVtCnqs1h6XsK/Yuoiy3/E4NMp0IptFmakzWn8+KEc1H4rcMl3YJgE5AO4/vJyGMNRA2r7vPx1/LnSt5EM2+qCRUWaAJvqHzuNWLAcql6ZKZEIPLn38EQnsAFkhHvQsS2eRVHmVMIFMlnVuJ4A6H0yB6zfrZi9VUiDKLblx3c8FOzGti4lWV7KLLypAiFGUIiKWQ0oz7VxNlZVOhiRq3jH5GH/HvCfhgi4G6UUQP/vZMbmoF6KrRQEzYb8G+V7NoWlG/61O6UyKpTH0cDNNK8L5KkzudcqC08SIlH5NFZJdhu65/mTGth0LCwtop9AdgytNMk1U7A0Izfex5q5Almd/ASHKCNqpdeveyIxH3z1/1JE+hkQXdnZsY2TDEQAcmK/hp1f5+W1PPIVLn4U6+ccgk0lnKBlh/+z1YT0q+i9i0hJpZmk+OPoMbz2BQ6/pyH0PUyyKIHZzxveZGbmgh0gCA9mMT7dVghvahqx3Hy63tBrDuux7gCSPrA2Sctfx/J4qInrzeElib1Bvo00kHP1PUiMZEtoQU3I+8vOHGQhVF1wfj+c8S2i/UNGD1tY323O2YF/5qrt8DqqD77+VoqSQkfY0ISKw7bYukzoHF7Q1i2GolIeMZFIQOXEQzWj6Tot/JH3TZuS7wAsEu12G5eA0t2nCG3ZNUbCwhbUwtYIMWHRf5n085xMmk2E8vZWmFzmHnbeaFtEVIvn4BIA+iL1+KNLPjxXmcUJCK+SPQ92YH7KOKKReHHQUGuq9KUPtqK6W7v47UaQUpkWP986weRGNp+EBprol1KamILiXcDgFNbXlsaRkE3KJqtzzGzsPbBLya582yujKZC30eURtj85gs9xFoJKBmpZtMQsJOnPqk9kiIUDtbJb';const _IH='e42673df133b50d93e226efb057ca2f631f9b1a2ea6e4a1eea09f6170ca4617d';let _src;

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
