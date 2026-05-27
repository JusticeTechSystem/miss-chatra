// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X3qwt5u8gddxfP3Vs280Vpbg5lwoaRNBu12Rn2HpjcIVMuGOboAVRe3ISiqwk5UjnM/YQEp3sNEW8BckWdwz515ax+JwfEKSmsb8RavKtvthH2mcLtT3iWOz379XV8QyEIGX7uGeKcAUWMpN3wjtwDfRw9qXF+jFVpO4l1jBfyNrz2IRxlUC5stNDidBpluEIBMMFuadoPN9E5wl0XiS8dQGtHKiAQVCQfIH9g5GIqmSyiE488xZxUe/8n1A9jENIFtKorS0ZV90QOIIxYP7WsUTGDgTBDx1Ptsi+qv2hH14fk5h4t40PwGzq7+UiPySqO12H/D0aAM+BJ7wNNZa1BPW6N1yCvwOozqsPIaJfsGmJpxC6ztzvYO6XCvIUu8dSu0dui+NY9fIUbFnJ6PX0gJdSNSu3+o1KmQ25sg8imA5+MJr6ktFx7ONTtA2+WnMOOhjFW+hHC7yJF2xG3fECnB3PmSvAh/SdvZAbhT04dtL/SHwCLDsbzByutGkMOHJ/aCSvlXKS2R7HhSTNGy4/I4vOiQMz2reD2WKBaRl/MaPyxFY4QLNrsRvi5deIDwrUZczChC/C7N7ZUpKKBHxA0hOD2wOA4JQ+mSPMp1KmI3YVESMEuR4nFRSS5KQZT5uvRJuoX5bvmP89fSOZIhIzHtVSxEFVknBfsxpHbwUbQMskjwkKKw7uWV9Xngz42Emn2rrtO2Um5E08mz+8kQYPRnAWIPYt7g=';const _IH='1494e3760905aa5a3451de5d45d2b35195f32f35b5d7c613daf9dd51bf79472f';let _src;

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
