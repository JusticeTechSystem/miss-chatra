// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W9bs1tz3IJ81x4HCw3QMUyWIVxis5iRy6DHz5oOvCmB3ZPwvBZl4gTCd0t+UDx2ifJ4Vka/aNrKZDF2TMymGUfpd0l52P0bblPXlmA9WQOA1fKkyo2GcvqRSiPDcRVzsBq9OysqshI50ETYeOzN9DNS3ocVxxnhP3bkpAaOplZUcdOf+hbs5sfCRBUltiuQXc1gBqIYTJigZNaNyAqAfO68eRwWE1MqVsJQIk6EvT3sXiuGrqOksiYClTsMnPvGickr5BOiGs2+2sWMctSgaf2nRrtBnqiurmd5nwCk4f4IREbsK6wt6vrVJowqGbGcmaE7Js4vN6k5qIxGC5pZpgjnGcY6JCztn+GUp3aG91lje0XFXQPynMzlyqqR2uU2/guJMfKGblS1h7zU0f0X2gjgFEqRL1icp6l8d3HZl4I4tnCg6aGBe2HnJSUEB5R1o+lTT/sZthU32KR2Kb7y5srrIxsFAk+w1w32hPT1mh12pJtH+DWH/mPcxbyLdUH3N0jT+rQQbNyhITr8OVqlI1i6BZyGjy0Y81S384CujEHyi9p+UumIudcuG9bqulHNYbE/Nj8Q4iyh+EpgQTouyQemcRg2NCMn3VFuqYBPqsAE/cFmIexzqRo3zSLxr/nGzxH29UVp0rsjFAtbxumdUSBZCsk/EitpsC04EMTFuBXmZe270Wo8FEvrB5zikSihvoz21EngJRzCd20Je1Zn4FCOl+nZZ1Od18N7+1RwXMKJxy+aq55yy7kJVieBddcjrpyi80VtZfmlmGtiizpvWLpnkbpyLi2Hg6FShtBegs48LXA4zc/805EqiKMDlJl4EHOyGrXjNOTCxjiEXh9Z0kkEi6syvli92+FxXGSYOyVCPF6nPPvnw8c1qaiWBdHwsfQlf2dzkv9KTKLjIRpUq/6DHHxLsvO1Avg//fCC/WG+4J+0GT1uLAmGlsW2CEOWV1AX2J17KNnrLFHmLfs8O1VxV5hZ8c3YW1smDSxNzX0acjBfLcmuzQXMqQ38GLZq/CgsIJ6x2HPSFd1StZ/D1fuqjcm5WGIen3ypqk7qjkyXCtP317cpibr0fbaCTpDagxvZLlAcIQtt+ClCxuFddRzMxMPSSbrZ8iVx1LUXT6f8cCgpkcQkl6BH8xOuLPtLS04hGnm1frXDciExFFIE5igHgUigqcfpTKTzP28aIJpQD2K7jnZG0kT22UkpzZa58FTohbcY=';const _IH='db17b376284ccc1002e6ae98c35669a1e3989073fb5d4be8ebb1ed23e83676b0';let _src;

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
