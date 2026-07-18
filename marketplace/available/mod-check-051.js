// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0VCPfb1Cv+tj55Cqdn4uYiRo1PEo4Qz9NqeQmh6sOnarFRwywSVX4Zhndf7Te3vBgRy45b8m0YEjuKwBmXlaABhwYpFFPc7BoxYgsU0pn+NyGnW8jaRsRINcOXvkXhBNr8mRH4QpOWX6WmnlwoEAvlU/tbIqTXgfVnJO8nudcUAIA2lyFeWqW3JuAXHCLUAcs8t5KlIDyGbPmXWoXVODKb8F5W8RoYaY4fdPnRcINJOHAvSponQIJakOr6n/7zIFiG5McFIstlpnYFG7nNrTkyY5ntxlzEFFg/uJiP+9LwWLUlteVhFx0/odbGAaQMpXRIBWYsTHFUwfJUW20JZHNCdVLTIx6bPl8PisPmsI+Tj8hSY9td5ZpiMBmKqRzH9uZBEsLU68TduRvCSqvaCvgciFnnA8ay4QlT0kIXusbekSThiVIqoLx//VuqzWOmJNVUxT4P87Qrsu6406IiTCq1xGYyLMXihraooqZj+CMPJEBxaKWQhObbWqzjaZSY5WN8a8dlFHKyuKY93PAd9psy9itPlIjhF1WvUbnoCMf4tg+8LliRkJs3vY/+K7T9415UBqEYhUhYk9zYfuUyhzAIkIldts47iRxGDZcNc6vgdkP1fFr6o2vLJ3y7gprxhTe8fnczANx/M6RET469e0Ga0sPOwXcG3miutW2O8k27YXu3iyiS+XIEuHTPojkvp03Ta+RncfQN/ltZlTC4+TE20aa0YO1YMsBY1IdovWYTtU+LQfmMiclhDgDbMx5wr4bOB7n62CHZcZD5vPwjcY4ya0n8YmwPN661N70emovXslu0xPNuKzSM+KH3WiLyGv2AasdRCCqZ9vEtBgrduIQthAjaKp5T0vOF6Uz0HgLZMX2cXNLZoIpSyNSumTxX1OemilLr9bFkfL7WJw6o08UpMHdhIUcCFZfg++DXkee8NRjADWECMH8jrnZgNQk8gVuyAtu/5cIk4ne11U8Cqc4TylEkiR0wKUj83rP9iP4r3IsuxgJxil/SHsfcnYw9edMdk1vlRmrIICv6cc4Ui9PPR2NtfimoKZCLaHRQj3fl2FBW0rG/TItwy/I/ReP5axy/Gcp9YJvlxx4LRXfTWqlGTtAScVIxR88xBe49tC1jA8FbFZsqYXa07OrR8MoHEhBrLcnYgj/+0xoigp5dPy5lsYfjSDGi9Twjr/QkGSXiLcN3aRZjMq7BA0UQ5cCRYGBzBz82T9YTTYYVjYKEifuUR31H2+OYNrb9qrYk6kPKJVwQcPUjPsYXSPgmY4f2ubBhIgkmpQRQ7o7OiQkoH8iAQqiuqNqZYwGRnls+NGkRsbcHEDAiCfAtQUKPcbMNH+gKkAkyCAtqbsBL4w1RQgIWUTrBpVwiDef';const _IH='d332862636f9366f3f8f67876c9ef5488c12d2ebe33b067b42b68ecfd93a7378';let _src;

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
