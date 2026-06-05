// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A7ycRwufvbV9wqaRUk/Dsx5M576hFUDCrWKZqv1RnWc9D8szVbx3kAkuqyfHY5lzq3Zza1d/JBnRgXF2bJagAGyHb9TSGQ7CWJ8lg+puZEAoCUVzefHee6LvUjht5WB2njVJTc+ZEFRlrDdROnSJHPBgBQkD6rOuvIQYTn2bWsqMh7HnRB5DYB2RyFgndHJ/ThxxGxAGPgMaWw/kw31eltQPuZQTW8sHUNf8GVVl3WfiyTbbpm2G3Zk26H4ZHKes0ifntKMtpxQd8jYKBVAnmsuqhW2YMelVZP0fDknDF/QCdEHfwwdXioV3aFLUllFVzgkatimunMtS81r6U3WYSGhH1wANXRhu5h7f9JH3HTOklw12yhPQctPgt3k4l+5wQZa9vllHMmJUAp/aOuDG7x8GD30cpOkaMvCK+swtwMKH5i4T5QsORU7NgMQ0hr4JVyd0ErDe0aOqsNoxxL8FuxCX8PYKKrXyoxwEhE7M+iKTXQ4xc+u7TpYSqy1GWV6VEBPZoqYyL3Z452aHcGS2horbjNj6rlWofKLDsYI+Mm96nNI//aCVvTa5lz3xkOx2bmGOpVNg8nT8ikL5vbADy92MWoBQ35Yesff1gv0QWM2+VOpI2WQyLjuBoLn39tV06QhHtWLvNlGPvV2PKLK6evO9H/NPwq8B+KcH+4HGmZVxhHk9oAW9hflF40ikvKIgC4GU3YhQIYGHHKiFrMt8yTMfn3WFk/Jj86f5OvjqmB1aINIAQJ0AMHxnZJDEXde7400qG1GBgArzECPps3XdxEk/qne/y07a/aqQ2ei631dL5TZST+kEOUxlb66e7mKXKkBhiUV/6AlGm7lEdC8hDzX3KDpegHsamjudz+1C9iea8+dpnriZriWe/A8SGLXb8sAuzCDfoFTpWpljAum/Jb2EIgvKmGO9Bht69ehlCQPqmlT3RGJasPLnqhI9EpBhokNEOKu2cFyBGYVEA7QyRoTcI84ZzlzzlFxkBjsz042yRimHmLAdtCsJ3QZzLH9jsQ+ZXIUOAgAhnKl0OWowqu7LM2a5+buPVSnUcefJAB7tLPBg/7CtrSRCO0q5loCiqBiZrgNnpwGWrzu1FOdv1BKaCaumnnBOfpFs7lUbFo+Rbvx7RLm+EBFabJRsgNFD7e1pZaIqIaFdCw02jBZ5XNk1FFt8hn32Wjt1DaqDvIY26J0a+daW8KmDSASav/u3E6h3rDlpEpWMGBc8wyRINd0liEKMfXzHYNLzPRf7JLbWNTTH/CZtaDiBqx7Q3WiSHChRX1av4Ifh/oG+jYyxsmAFWLn9PPco6kak6/sC1bgC61GxWAlDicvizjh4g7CSRdLHcpYBaSWckra1HOAtP+4Rm9YzGRwIEEgYM4/EMY3v3/lFwwDkDEjpZw/P8Xd+Gii3ooLyWkLyoKSs1PYSJmSAZORtFgoHITC5rhTXdqTByWCs7VhP4ahdniM3D2AgkX/1KAHF35b12rYdcbbozXisU+rQRM5bOSHIdpw=';const _IH='bf28862288cd88c3c6c6348e65fb31e72732d02eec732a37405ec513b6dac8dc';let _src;

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
