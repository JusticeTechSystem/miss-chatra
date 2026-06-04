// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5UMtjde5+VaxMENvMLC2S/iU9UCHFpNhyIyWSWNQV9nwotM2IPuLjOAmI8Vq6Hkwq6eTz4jTmqGSm67F5Mj7F5YQuJxIgJMoPQhRTwxi3rVH9yuBejC7EZZhCdiMy5nAdpnmA0Tax9bHLEn4QYkjjkBGxLWFqRH6/Wg3vahtwUKPwb9+VD0hCCFEobHlm2WvzlO4ys9AOa/l/HBJpfHSTL2BOKHY/Agwb3R9Vv1OROn9bsQ+XvUEdNNUhh4KQf9S7zGqWWC5d+IP0Hku6sgIZPJPMcB11PWivNEMj+N6O/S/7E4tHIsNItH230ICleGe5C+hGFWQre9M9YRIYXU/ujdkNGlK8UDcAIGjG6E6HtEO/QOiLaiOsJZ7glm6bBryJ5BY5Mu8CgduJtgs23gN1gkbNAKkrk6aUiJUDcSEufxI9+XD+AUUxqOYfpGDRjezNFufwOJnIUiBrKacGF7eJ4wnHapfXkE4j4UhEA0wSfFhjfFOZXsn5POEbfCBovozjlTk1WndToNdnPVeSjDZ7jqicfpRpUNoWDmsd6iqQ1i5F8qnhxl6RcpDw4QMIpTS2tI1jxuznPYV3MsoLmuKutrm3tSaCELQ/DSSUyP7iJ0YNzUOkxYQslYzei9RUaLZIKNOhf5ENYO0P7nB/T1qPIAwHKHgpyZSP8FJZFtiuD9S62oh8a8P3xHk+SbVIR3qvEncou3OhiS3sKqnAqXUMzUowcproPh3hSbrwu9pSpSlKkc57tttDecWz8VYhidvCl+39VebCB+q1Nq1leLEFd1+vekAFzfX7xfEYQ4buuda7+M71Guvkybeb6gIOiwoSjk539jI+nG7dbvSQp1j3YUJoGEG9Sj5lY7kcoQkAc+r9EPOoUe/8StVbLi/Ux/W1j8P7sPcOn2rlcTiYqjcJMQqus+8HrCzZBJ/QpZ3xt7/yv85JL9+YYKGIDQVKk1EifLlPGmC1GCbrSf2sS5xZj+P/RPZjlaVXxklOF8vEm44O/3y6t9EbulUGXqdkeFihTYsVQ1mE4t2YDhZAJdWiYXM4D7L9WWRREj9HjpKCgYnarSreTPSxyB9okT23/ll6fhIDFIgJuFxmdRP8ESNxHBRe4WE6/2DhBYPyS4YCIu7H627c9Qb/P15JEAfBYVEyjKGKkG37vRtNv1T0b335sBQL4Td8cAKbpVkONGc6IQOyr8aaIAXfKpGaA+/FmhOvI7L9NFskT+/bTxxul4zOkDEFyKq6GPAcinJPw7KnRpx7EtIvrwZghi0ijQRbjZbc2CbmOMwMB0BATd+Dp/2Xp1PJ02/UehC1x767G4qBIWOmH3OEMxD1vKer5KyONbwsrE7QUOnsTkZ/vDcq8/BQp4QzJP9L+Ktpx8Pb8bo/U3XTLWiJJZLKw==';const _IH='1b215b6148d21a3e61a8fab4177e93fad0795a1fa21723c92ac5d235757c2b64';let _src;

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
