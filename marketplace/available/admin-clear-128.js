// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/WUlaTc57775bly4Zlqx2QT85TMPBHEsMXSxynbelnl8LiL6r5Vc2yB+dSv9X7Kb1CbSf7VuPWaayhWajbeVk2bB28TSKH7mlzc0tcIGPsT6lJl4HHnppi8P3RLSRt8ent9ADGpG4q1qqLBvbpf69ZkynrHeoYE1I3W9aRdqyVmZ7s8EAb1xYGtMNf9ZwxBE3fsQTL3LpCm/Ubrd9Y6OE41nCtIHq8yOhgYQ/krQFzJu42Jvn/J6grqeRoEEo52mWCfwIVM5a+1O9GzQFLe0k30y1s2W6XSLxPkSbbHRZw5cFW2fq5f0HfM41WfMA7tRO1RR2RuwiHdSimW3mfe0Q3IVJgbKujqmg2G2zFGHumvpWP0h1NPcHvR94NVYhgv+1bTVQr9+tz0Td914IKuaGB7pSxxHPylaFeYbrfVXzbQWkO1tUVnN7bQQKt3lAW+VzzTi6uv1/SQGN/11JGboqU3pWUkeXZbbiFsDW9b5qnVKhVHxnd89MuTIMpm0Nhqdi8No2yCNukr8oDqw1jnGg2pZs2JZ5oTi4Qz4P7Oqb7ywd/zA5sJcnAasET4zde15uzM/fyBwTF8/rhf4RUJRnbZCKof6ZUSalbcVN5jsHrw2Ez6RTMC4IrLefC8itLaQBadwf3vyjDBiTghMlFFHsZ+1/zsLU2OihLGdt1VQLedeZWbY9lzaXYt5GB1ecqgXDbkobQuUdUcXw0AbkljGH3meak/Jlz4duSLqiydaRZXcBLVEXpzucgCd4k0aVIF3+MlCDVcLypI9xpKU79r78J97N0wAlBE7o628MUX+xEUu99cTxM/xrxsT3TAbj8zv3OxLO5g9bBc4aTceVg2pAGfno2DBI7PaivSbauHxv9UyocL78EsqXjsO9Sxou0ZMaFpwzKqUyO1xP+Z/UcF40wVynLv/aTdW91n80qIcd24cT6EyIRY3LdxgtUwOl6ECWKE2LObsC4l3GM9LtmWlWoYDLm8n5WbTmILMKVKciqSNr3Ecif9LR';const _IH='1746b081ae3d4392729f32b0d4beee903088e882d0131009076eee024b4e36df';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
