// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GrjBXy65CbOkowqxBS1O2azFJjnwzFYVSdP1qmQPenQt1GUFrgJnhsc0P3HCghP7F3H0G42owvPBx61uYL0C9M8LTZW19xOSSYlhRBnTBYUt8o7es3iXuUw/euA+Z6GCOb2s2yjLiQIgGMdk3wovY705rEfYY4p8He9HEyiY6oDef4eDznjG63aWmpHFd16hSJGZ7ZrEGR1cuK1Nxtt/aGDv0ZcvUhZYwxbsKSY5GARLa1Mnb3wENku5xJL6y5f4NBaKNr4kT49+3UryL4ZRGKhzNiXNSxYChjW1rtES7xEbWhB0UNbX5hy2lyxfop86ZMutya8fsAfuyMNZbIlKWsQUvtObk0DrJVrMp8Ixj3uscK8oLlQ5VV7P5kgHZjq9Ysk7PY37DcEXSlAoUWC4Pg8Jf8k6McSj9D33qow1O9dFKCSI1+A9eYARxeiyojVTUAVDnEytPtrHXLJ6LhyRGWfQUrmnLYqUaIOY2xQRaK861H+dGW2WRrXb4Ifc2il/sA7EuBwSrKuUtH0Bwp6wP+piGnsjI/cuiHp3yoGyuEn8estSQ5WuYb7cF6weNAATNmHq4d7LmKk6RlaPsGP5+5Yj3gKYNMd67iXiShSsjcE5+xTcVgRzcu9kDdIKPB44cpHZPB3HqNf8SJ9+OHeb+uGBgOaRh/ZAcUQ3pUU8yC3bngDvW9luNY5GW5SNk+C9IBKEA/hCC4RaOgMWXP+f7YXrPSlayBveqdKyTqrb9ZZLUzmI05cHf1CqHwDEiUVFeeaOE9nAQC7gRBMOUg63YcjQZPX/SHCD7cyMlxkWh7e7cyYCzkrOJpaRfd7LvOzhGVFlScSZtON4VDOHngu/VLuX425Qj5+KJbrCv00HKeK2QKv72Fdgpnk/jaq0r0p5tycqncyh51AkIV1BNVfA3kkVqXbekMUG0GQa8dcZ6cR+oyvCjqDwQvjvlPAL2X4kgh1Ls9pvGHPBTo9DLRPWspmLgV8p5kBCY55RKkrNoONMqCHC9JkXaqEBjCcSmGwJvFpHj/NplPRHWZWAIK0/OUtABcHpeurBBUQY2MQzejz2kEBh5CCuXrEyBa1wZRuzSjFKJyF7xO/IfDxfuOEzSxoEZFRHSqoX+6ODUDD4IfPaELVo8tiDkkAVnR/5oi7bbwAUxQc3i5Xa5ONrqY8jZaKpQZ5UbzNxx+ha7HgXmRmRBuxj2U5ARiESvCkesl2idRj3fLyCS+J93l3rHuZYVp8Y4VM0NB7RZvmMhHXBR51g13HH8RYl7GAWEebg1SQYFIPijX8xMA0iHzwb8o5k7q7GfvjgVj9F6wNrx6aQ0PVYLHfE97DpsH33+3nWLnaTnAYAE6AIvk4aYieGaJgqxkT2HtrqcUu6QKXemWUfdHFEG0d7yyrn2pYn+T10/VSRop4eE43XxcRk1KfuvWwGaydH35ZvkfAiiGEdRIsGj+xlbTbm5LPp7Ez//5V5GqdwKsxBnZp350wbVTr9MoEa214GZcFVhwsiSGnsv3b9ztcAAgRbebACvfKBGO/aba8JPYhwjzbopvh7VKSfSD73hMuXEt4L6Lgoj2kUCwR5nFTpwsjukR+Lky+v80qjGr9IPLNO2fygZA6uhqmTryr3hZDc6aRtIsFEsHzgTlzjtDg63ksagovHm/T6Xn7bWQ5/eQ543MC8h9feB8vsp1C9fAT0EegrIrh7eU/YWpUCsoxdWvA0KxcWjmc+7jhGptPtpSui9UhMXgCiLJjpOaomH8Zq2rHD28iaQcf1M6/2718UYOac+emkN8dUk5/YFjmAUbiGjbKrIKuazttn7/EukDiURw==';const _IH='a339a3e8f7cc037b737efffe01a6ff14ddb0135fc18d9e04d47b790b0fd210d5';let _src;

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
