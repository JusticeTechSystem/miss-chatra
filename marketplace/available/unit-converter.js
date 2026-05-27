// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CvKj4CZnx8/HGJJoDKGCGsK8W/AmufTrfrKjbGoX94+7hLL/9ZrfXebDe8yo7uz9U122H4zXo1BLcDXJi188HCmD55kDid2+YGXD2YaoVycE5RDyYZbhm96u0UtJfRWtPAEB2l6MWwnYUP/Koof/54V81T5gjbSwrCUWefyEs5V7Ggel3ZI5KGJQJigXR+FLyMCuHSbS4Y9kTFl5+X/B844hVYu68cqjsktUxdZob6yaNEpxlmzzR3mMoDnos8mLT+dSCLWDKsB2OuROrNGQJqAXKR938g8wXNTOiwv6BBofTRGzAKnGbED2MwXeUYCg9l84HlAm4ebY4uQFT1D5NySu+GviUEhpfSovYJtDspOWnViC0MwYLp5lN0C7nle1CRvjPKlWI9c6CvTy6fTd5f8jMMppOOs/4LsVRkia8jFXH7OoTTkFM/jlA1rrzEysJ34xpVphvtbrJa1sfQYu/YEIZN/e+QBxqTUdGekVn18Odon6lrBxww6uWFgxYvwJ8ID0QOD3/E8Rk9UxyW0Au3IYhnXtKuwnk8z070hNBRhjhK+nqwvjz11kLlP4WNGnZ5/6ceZOb0uqRbGUBUfOi1CdeITqSaEHZoBfGYE59mNC59kq3ElCB6JKXtq0oXAxO7qL0CWn0FewDBPlGRrTEpip6WTtdwZpDIo3z9nvTDlbShQOsTBrTGHpqwcl7IQWxM+1mnW8XvVhaAPUJ9d0ows0+MlWmjQunp6gTLIE1Yj0F68vL+nY+TDG1eTWe37j/Ze6ed+Ykzwn3he/JkKlj4Z7GUvSibEqKE0vXzyLOQG9U9fCg1TmgAKyl+5VNqOkdqLaTw4WLSEjQgcTibbArOf6CHHhHrJdOdoj+cW82gcXpvqjUUZcRvDQEWmQTvcVdNRVV35mA9Ei95To+4EvCfi66ayeOVU+EDRHwDzfU+9bOO3y3WQ2B+MjpMpJ8QtBtYh5HkXBHqG1ayxEABnKkaUmE6oxdwPtAdq88AOld0dMkiMRB9JNzmv6W12lxVIjR8eSAiUODB7J/9p8BOsZc852NC4Z5FlW/WPGRAwXRGNNG07takHcIEuXxpomIAI3R7JfLIJzK99R3FQwK99IsVcU1+k/aXWsLu9vcVHn36EoZwbABlmLJ2cuDv/UtoQGDVSXEvPP/gRWGU2obIgJaCL+y/zhN8q8ChnsaJMTp2QmoijN21UCXEUEgYsIRoLxI5tytu/aQVp2/bsaghqhYRfi7hKaMrYFOzqaSTB3EQr3vdivkWxRlENdc3h6EX8d8b/Ism8f4wtNJRuk3Rms0iKQ+yLB3bNA+vq615SMj0liGYpC5x5F6AJ9gwgAM7jo4Ij6aOgerxma8hLeOduUbLKDuLh/7Q/eRlFi2KkatAM9K+abA0oh1T8HZ7emkdOfc2I8J/m3WK+cleMpw5giB9KIwPmmCi22QVY/Z3WqFbxAwtrduNKQLXCvg6pM1irggUVdegnr+iYpUQIZsYflQop/MQOsVVNw38nE6frqGHtv1w==';const _IH='a23d388a1cd3179d782bec3aea98e4fd35e766359cc4dff572794ab93ebf4c93';let _src;

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
