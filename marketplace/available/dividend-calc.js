// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P2mPkLa03PiQqtIbYvGvs+DsLQWilYVgqi7B5HCi/MUMq4uU8IFD8MYQd582VW5hRNHw0xn/EP+GEQxF99Qas7YZKvUrTSwJTZM35zM6DnpzMz1RO/w8ewthskHlZNReYNEXJiWgvAHDAMTg+E41bcjnlvHZAjB84IIwRysrc/f5S5gvak5e61F1l569fzS5Wcyy0VCIDKvAZV9eMks3hGF1elqAbJ3LpYV/NE602E4fQRBKTKEy5LpvlTtFvxz8r/+baOWVl3lXkZMZ8GP1tSeEIwK90rw0rV0ZzlkkE+zRyNQOk56AAliZJbMi92lEnsBLpvxSbz933273rJUliY2ZowVsut9q2PXdOydglYqIX5wkuoPkrL/VAU/iCHTQ00zyIPt2L0Vf2f2tCEil5XTX12ELRPtknmC+Oo4amqBv54qD8M3vOR36mQorTzV8uFmasqEZKDm/ZdB5hdGh/0hSQimbAhQ+L3Huuto6IowF74IC75/kcv7sYjzYOQFs8QZmnEudrja9guDK4Hwt3euGF4+ZQ/uDDUgS8s97Zdsbau7sdAcYTK+x06oYPH092uZ2tsioSv5EfNINY9fa9xF5kzcje0Y/nBz7fr4ppCJVjPRuf3H/po+QsU0El3+0kp8i24oNHAvN22xKawo0nY1dkKBi/F3xkryooiWIeaIWZEh21qH9fwenZN78DvaN/EC7tNgozu9p6PyN8Dwz0JJrByiq30kV9Rf1VyJugtcmtkpjLOBU9EcV2pKFMlb764ojFf3SPasFq1bV0SrGt47fWMmHFGYcr/NnRyU63WihOkxy5BYjJTUtIfqJRPU5z4k49R3G05QLQ5uvu6FVGPYHdnu8fOWw5S5N29AAztKSusLKFtqNadpKVS7ku4pjJZz8sXk6aagNPZguZUIztTR4pJ1WBS8ODToYPMLFg2nNCNRBEjkLF+rcOW0dpR5SVWj5eFqT7ZOz08nGjCD73djd5i2Zu+j7JwSzGt8fhDAVSQMCfg==';const _IH='25ef51cb3a65ddc6444bc9d6119a31120a88fc19865f7e8d782fc5b61fa8117c';let _src;

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
