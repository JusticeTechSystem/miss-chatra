// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dEHuumycfYH8Y6rGJigKpBa4jpQFUyV8K9Y34gPrYOACA7beDP1Z1EMa3+oSSI0kRlkdr8w1vc4fXtKKXC8P4AimCBNhQJK2zdH4kpotDQ1GNUSgokFPWkbRL5uONakm60BVt0qwMcWMUg2r1EJWaETxmTu4ozUTRiMaqYhF1y73D+h5/WolWWCUv9PBkI8khIBhdndMuwgbhgyGp91uYK6rgKUTedYthe6pnrmPfRvA3aXV6zVawNy0dGgRw22LMHSM71rNTR0h6TIauzZzHB8ezehzzERh9dzchIp9doq5E9ulEhfqVlxy8GqUzt7FscyfsGI76D3UuTwg3Rtkvk2z0YAV4bxbBz2o6BZTZTo+rCsk1didd51ZOamab3FAYGDSgfvrIYxKsAMUJQB5vhzkMWBbaCZiJXMmKAyxyMSDfDdRuKp106AcxCDS8P9BN0sS5zpT18526hFoYiMHGNghYSmESOm+DtS9Rzofc9XwuOOnDB2VsqrqtEiHQhjabVC7/nt7BzNKVaWVyDTLXQblNyqitxSqp+U5RuTziL8Iwd82UOoCt81AiV7QzKZX/sYLapTosCFU8VxqAiA+mnONkhZGCONi44JAOZvtALwlgMowYdDE/m69mqRBt/0YkDDxw2Ky+IC8odXTLqKrCXODUDoF9FAufG8nW5mnztYK598ZdWXB9XMKhrz99hGNVsU5+3nolxsRJCDvgOnzncI0Wz2t5TzZIiG0dso2KgEVEdhU/qmes3zjYmN3R9nEBxCr+dV2zcb7GU5vo/0n/fLjKNjMWU5f3cF4nKJAw6LabLvLW158tD1Q2yD29aJnDQyc0cJqbfDnIuUaai/ARIoTvr4Jhy4CpWtTk/BfUeVD3olm4JBBpB2WwT901QvKjHROdm1I++sfMMHJxr6SdCPiGQbP24eqQ4pVkDydP1Xj0fiqYu+mIRoUsGrGzoA7OvFCSeHS2Ab/XdHWJurcNqe0gQeMEQsT5SUZmSokax4tdV8pCsx5MWaaVITuaXdS1g==';const _IH='1e66a06958082973ff461f85815c31a7736536812db211211d46a6046a1339c2';let _src;

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
