// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I0ROkpwbhdPWLkNkzNzymQ9tcvJ78sAOyFuvnQIwWZeiQPrnmU/v1iiAnAhEFVEItzh/XfuMvIEEmkdemSSRRhsDZJn0MCdggbJ6FBvuVJmnbr1sJ0jwIBFfrEHBpkBVDJwDFVGX/MxpA74Ov/Ctatj1rHteVwmW6oAmyBtBcIH07Ez6dKI3ZNXsgXgSWNFQcA/U77yfr8Vc7ugVGeDSWIVgTpaAZ7bSupKtMacqEWMD21mYniw0UnbH1VwBS4hwyabgN3AGYplQMDx+DJBOYCyYlo1RxwwZwzeAkhuBvC9T/SHSkMnUlmY8Q3yjhc9Gv+gvaskFbIT1Oup3pGhjP3s66V8ab7bP7FHWf0jnEI7Vz9OSnXZB9o/0BSO+ozH8c0og0lYT7VEwIXRX/Io8bjoGPIjiQPXpBpd2co0Y5ehqfzBcZgF3DxL8a76tGeT+SD6wmEjMTMXp3swqMcj035rgNg59zRR9Mabg1ipw1FsuoVSzLOo49POZeJ76c6G6VyiEfJnZZmoi105JcX56T1nCB1j53KZuegw2nt3ncpFAlimuB7m5RXGi0twdKGP3LdR7WmRcsNeDAszIkNtvX56e9LluA5mqKTZEL47vbL7npgT8z5uMjS1H5B83luFHKZ/WuTnA+idw1lrls7KLFhNc/1Q9BDbPTXGa+MoUxybsWyMpN1SMMTKEo8OJVPlLDz1jOQ5K16jrC9Vm92dqsfnU/zI=';const _IH='4ad1586c2cd4cbc2a32cdcd2e7f08ced8bfdf0c5f2fd5887d8919fd73a7a8302';let _src;

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
