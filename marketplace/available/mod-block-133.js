// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1V8pUGTy2o0B5WeChll7p4b0jQJsWEajYm97L9CkKLaNzz3jTXNVppUQ/p5KEmG1nVwTNyaZ/lYoI5AzNc5VEcFXI+evoWGkVGm5jgwW59NYURUbaA+ZsD5NG2QETdibarbbGKa45edfco51p4IIIqEXBBOLFp7/b0ToYZQ4Go3sjEo5654DK4OxZvoJjxZhvswsE/EzgoBuI9mHY0QISX8k9iFi+MscVGSUGXktV2JEd0/r6Kihscsr7QquAwtYrZk4k9uRcUwehU6maO0Ogj9mMMbkqs0EgakZMPNAu7xMhMjUa5w5HQH0cCpmwMpr2Q6/GyzUiAC+Lmj5Cy7g/xvyQSIj5SfO8IVub7J6AA8256qgiWQ7com4fx3HKNKTGfniv7w0pGVli6QghIn88T1enmAcrCTRrN8bJIzP1QdLMNtXLEITaA/bJcZ2vEfDJURlgBY0L0Zg0+x/SYKWZKIkOKyZqTG1oVTbJdh7kNEvwmdqMMTeOOfHedLJih65sxLXvWvTQGvRLiITwLIuVj9QGWWtsaaGF23wHSZB4ohzZinGM/dC+F9XYZZSp+k+pUFOlKzJfuugbEP7bGjsv392wGwLa2pBgVpfdOP5PeV7818Lr61RhsED/wjBRg0DBHUXbGQKfY8wKGLrswCMwZ/E0pJzIa+gKWL51xpPWlPirirFRObUPUDjnVPRo17zeCfM4TguWflgrQaUG664+pP9VJQGfMWhZKUy5V7ua8lPP5Z5hZRxsI6CVnyFP0yiZcIgFvkQZuxu4ynY6K/tAfo3z6CeAD2QVQGn0zri9eOCaNaJEN1spWPVRhqEnwZhfY4Dqa/C4BCHdXC3MyptRzNF4RYWIZRy4B7/NJqqUqPBUiiIaxeH7Zz1NsmWUgVlYz4wD6wOxQceoxzJG3L+/MRQ5s5lJ2dJBmrjOUiS5u1/jT37T5VNdyTwW2XeYeHuhV+ZCt/d4S3UC/lGiObR/mW3JSQBjMlsCQfBlW2MiLpEpTmRuBl1CMK73tqsX0AkeWRL2QeS9KEmtQXBYZ0iOodsyXtR9AvXyclp/mPVPK+y73Nz6j0gnriLnfN/eO/kjEwtpAxuItSq/3bol26mWcPUWs7BoiiVnalZQ9qb/9UKDuEaiXdvWyBsD0EL2Xff6bOT5gwxxmL32kp8eOvPSsYyr4CLX3JKHVwZn1oxeXw8z+KUoxzwGD5ac43b46SaPubIjHu+dF0wyVdPcoPnO9opx7SlUJFV6bfymqE5cj66DziKi/L9mPfDOJ0xNiQyCtTr5tQK4YjrX7hLIfz7CB7nuPLdiqlRqd8KAViupOxLUjXxLebJcgeGvq02PuOQbZqPJxFzPpm8xvV2AkAZTeKK22goYZMpRvbEJEC4=';const _IH='e18cbec51168f38cdd77213629afa69c90196c5265d9e849f20810f15138d17d';let _src;

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
