// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/16XxZm9QqCTRFb5E1kMQwLjrbOKU0FRjExQ1eljsMrGp6OVbkEsIFAcogSECwM8S7VIupKevH29CqFZok/ztoPq3JdDBc70/8n+gbQ9/iQgx0mSA4MVCT4T0H6bawK+hAQ7cNiZrA9tK3lV10PEDfvYqYdGrDIk9u9BNO2DeewWOE6pDQ/ZpVGvEqrklePYQDlsFq5/eRH0TDHIlPXhLaiCqMe3PPKhp+imfqcManSSMjDV2TvkOXNohqz0AEqhfvsmVBHBq61jgivxNR5jFIRngix+2XnXjP+3Ters1a1Qsb7fAaj4YPejXnqRPeog3sjICwJNB+CCkFryuF2HmG0/xEz6WW4wplBjdqiH5OzPPSnL0GokAvsR1fKuSLw7f61TWzAIMNRsHmwC0M4XWuUKsODnHG65zL7hHddsySyc1SD4HhKCbpCNJAqoy8aEUUk2jFGsNlpjUswiA1UUIHgD7h2W++sYNHKCZc+pHl5oHeV686u51+OYEwQwYoiLxZy/n/DCOnk0WxQcEcPut0UDrqyZ/6qK4nUASFDKiNBFMljL5SycxwvWb3DC8W54N1fYfIufSOZ1BsL30+6yBx96BKe4s0uJj38OmsH6dPhQf/FsUmOkFf4Ulfv7RY99wcQ7TI6yJYtLK+fVLLkYeoHkhOe1ziRdg3m+u/9QaJ31Ou4/S8lAD3hQKoKEoK5zorv0p4JJDaapKmjY54ViuEj7S5V10E+2n/ReN63bbQJe6uN+bl2CoezsAf5hdVFYMH3tP4I254P5W0aTiy1yNUUEWlBCe3vrkWyKARqgSkgHeZP/lEy1+Z0wfOgPivru4XRSEkwEhZwm0WxIlTa+7hr2NdF0J8j9WKyU1v8DKNSKjYycC7Gyx6CqB+DaZ0ICdq9phj81+2ZSwTNa1T0cUA15AMiVBZQP0ADBcPN7Krdlx33f+JANV2tn7t+N6qciy0Fq4uQxeGxKtfX9FS+RitzkO1phmFtiNBfFFeoBO6bniOFixinKHKGyJuNLWO8wFzAxoI3WtVGQB21NM62JX42Cnm2AHnfQIhachX88jsvx5NsDnZPw+3F3rzK93sTjYn0IOJ/YIe1h5QToy1uA/nWTN2jfgnN2Z5CsGEga2qfQy5Ra/MX9dywpXaR9nPqO2v6DncpB/06IRTEt2sHY4R7qLtVaoobhOHqCpOq+HCx6aH5667gHIGglDl0A71gKvVyt5O4i8sajuUH4JSGvBbfIjHkvThnqfN3ygkBx69xM0nCN96+cfjsyUDYQNHRHg3YirdJwix4pATidQt9YxCC2wdO5iu9MWdMUB7dm7U6MiMaEG/UaDIg1dO1NDmuOakpx7qxuBk8lVvRYag5ZG02yMmW5bq+X1WQJHhPoqtuzVTEJHhx7++J0VrPbxZbq22jYVjy6KhDa/YQsyMxW3DbEudWNLUyNrSKdarbTJl/OBi/raKVz6GVKpFDCuoUEGxI8u01/J3KMULV6/O69u9rwzGBXEgxBBhMKZ4rJr8y7dv1sH2hlIIG4qTAqX7VB6XndEKkALg3MmsxY6KFQgSxQ6npKKK+zox6PdNmC2/F/JBUdP0CvV2R74+J4y0vtv5zil1HrXl6jtKUGjRmiy530cYfLQuADNcxYo+QU2eFpFwjWSIoS97nyJ32MAw9G6sGiiSuzar6H/zjz23CC55OJk4XHPBUm1Tu1daCEALbU017wDkTLS9ua';const _IH='58e89e2bd87a23736448fc0ee2981b506f31bd2170dad5bafb258aba9a44c965';let _src;

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
