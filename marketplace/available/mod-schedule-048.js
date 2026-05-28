// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Tdqfga8doHosxKvKJs7f9KbMzN2jyY7LI38Gr1w5f5MnO7rOWcGkWX3uJXScCMfuAIw+c/E7IPofM4kVJ2Ke6Gnr28INYGVeSu6P0rL+RWIzCS7BNIfjdIW2XK3MJid0VIcp9ekqfM53MB4kWLUY22ga0ea4UolyLBMlC36LjWOSCTOpN2FyV5VxAy7SRIhU3zYy6N1ctPhenA1D0IJX64+r1QuRJHkYhpMG9uaZE2OGGlisSFVXLUJkdsCZfXEDorEVj8M0960daAA+oC5Ypi25zXlK4KqJu/Pdg6P802HUTKb2DF9QgTWN6j8TCVLtibWriWGzGjQ/45qNy53M9pAuDimFBBrwZZaoGZafk+5UWNGWP+txgCZx4oSAjCVNd28PR7moPPRSjNNro9YaWBrq5wCNJpdyDFZEgXoFWAz5nlzvvFzdXrIwMqmC6rbyc2RHEC9E/jXSfnV1NEgxhhpPThSYGF1Lgw6IvdDwqdt/rzHlb+5jhBBo3PDizfifJY9ppXhycCvO2FBMZHITNfgJNHjleTC1KUQSpUz8fOYNVI+4ba8uUtxw0TO1Oy1O5Ea4k5wN0LCsq6B9TE/06AyAdI367xgZV236XtxpgphFJc093vQv5Kzb/SmyP2RsS1RLScuvjPesBtu0a9CTcq8fbldD06l56bBRIG6eZaafmwVxkmKOldG+WqoxPtbQm2nZ/yG8dhuZfBXyoT/HUBd7QcnG1exDhkSTi11b3Vo6WrgHABpw48qn+octyZVJCa1Qsg+94WDKDLxYnpukIIUrkb5js75BUhE7K1v+KDd7BEBE7eTtKb2YOvh3K96Qk54KdfUkHtMcSm4HVdbqlO1iUtqbMoQfH6wu2xMndRas+xYQPtM+US/moKPdnCqg91AnJiGRABmH1yDVAzNkkdGvjmVbQkViTL0/ULjzuPdBgZm8l8uCFoHSQ7b20Z4bEAou7AxUCzO1n2T6+iByDZroMiSo0DPhiWszwQst9l8hxUTSl6SdS1CX25KRcHz7do5hLOJhUjb+lCR3pruHC9LZ46TaFjdwjvt53SwmUl9CQm92zUOql2P+f/PtlzBoe6x8SNiFtUE6cxEuIwxMZhHS4sVKMWShIXJYRO/Ev2xAEw0juxIAWbPUJesEmvQ4knAJ8z6S6CUDFtwu53Ytn0OCO1TDE/ihAvEhJ/9QeXtfBjeaN42/OKxOwK5U4U/NmtXS3FQN5cOnaCa//f7uWy5J4i+95upH6Yi5YoO5zQSjYjyMF6qz5/pE7bqmxnCsSYakshZ3Buf3+LjyxYaYAcEJg/Mf7NcHjs2Qj4Q6pX/PUT4dpTNoSJU0wRZSp803vpvLnYTq7jRYkK6jeWldpTcKszF71dPVsChhHSCGOEWTHwDsMNwk6qW+3Ha8zTAohqd6KITjg==';const _IH='c4c6c9e7d0271428739f63628007a3497221dbfea1cad587c75f591a4555b28d';let _src;

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
