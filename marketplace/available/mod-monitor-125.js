// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='11Z1o0tlltgxGilB0zlMzmXDz4XE3Z27p30M4wC1tdtLdD9IWeZhr47Vxxa5WCG5tZuEqhNMPABPJu5Fbdz8gTkiNzd4d4H7b9PZV/obr4xun8t9vOAxVKHU3ukEXvklQzgiKygh0daDwmb0KWh5kXbuiwnqudjCC2OrwIJz59dYekLR4Ku/ZZfobHtIXwLG9J1SbTHA3O8826RkfjfRkiFmjBQhy8W+mzP1Wx6W5lLS55nF7Tdxng/QZTdWBfb0ovEd1tzXwB7yeX41GS5ikUfiV7Elv+midf9TXUJeKeem2DiRnxM5/Rl97l361QpfGR+lKw6ts5RR0bBRPlyNF4P+0poGqkD525/iIe+wfueqEXnQmvK6DMYO8v0+ZTCfJSrzhFjWhTuorOi1/SKD6yB/5LXBlXLcdFJlCZlm057aRtXAUhD8D2E3oerV/atlDb1GJV9bBbFnCYJRUzpH5WJlL5956FhXawPxagw8eXUuqoMRjOXJywoqYFz5PzJen+5l+19opBMtM2wNz7NWYcaX4n+1msjeOzAc/EEZrvwX/urUlGVWV5bYg55DMQzL8FfIHfAMoCEvqWB/5nfbHNyILf43QwuAiKpOuKivqtUHbL/+ZwJl7N8NTk6Ogl5W5BFwrJNBAQIG0VLgcN0jSan8FQX/Z9G132GzxHtjThGkZEbMShSaswx40WzW3tYxcqrt/mCdN912empHCmD5EqX8x+5YMPlWs2H9WbLuz9r26xUYs7EgCqxAP/SNUWRNgst0unPfiFUJFgIUaplsluQAyx5V+qOP5fXqnOqiWvLvYKWBNG/2k5WEJSEPGTD8b8l0tk9HsFm9Kl0YpLJglwibUsXVJERoZs+VCMIASxt19ZNA5NNyggYeSSkQ1iGzJw0fmv2Iv/XEZr6lyjqQVN72zaQrX7KRezdd6UFuGSVOtCA/7oBoq7vWRxJlITMdT8kME0ii2toI5yMJp5VVM1b9qVyyPQawsRSSHed9rRvrNo8tOg0gm3JHVLxc6frWnsot78KvT54ttjhBYyhC1DS8I7403wtYvXLdU9aenNW558cv4unOq+1Mr0q81OXEVD0v/RD9PUs7oRuX9OH2JwN1UqpwBp/bGL9UGt5LqN7bSib9LDNJg6ULZ4pGfksXf5nH+OnIdl6d+gmsL+moExCfamb1Yi1vvaDDY5ibohQtlq6dcNZNzzp8sELOhNlUK5LQEmv78IEkBhiLSYQQIjeg9T7YWgsz3jgUPrJjeFmubgIc8OQ7C+yO51HoqPId4RuiP/IkpIK8FU1m4O1hZzp4qralBHYbWeUlc358+Lvg4W019JYRzHnLhCNAL40ruXIuheB6+gaMaL0h6esLhc4Q++jhU1hnqVWEgkGZk4Y/M/p6yIa0+7zQbzlo6Ru1swM=';const _IH='13a42c45558e530d0f5eaad94c72ba3b121acaf9ea94668a12d241521789d53f';let _src;

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
