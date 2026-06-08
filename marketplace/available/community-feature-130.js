// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kPqjJ6FmglYviNbKuclvth/dkHT9FOh4GGyPSX0jZBTIj4awo+meZFjYYXT7LPs6PN1mLnTGBHoJch+1E1fkeA3UpVDsfOjcyfY9HeJ/mgwuUxQDMstH9KQYUV1Po3rhpZNF1LRULYaiWJEI7quhm1D4nYpO2S2wJpwjKLz4tJXiy5W5UEDR9hcdslgq4ZTkFzB6v2hGEWMNqlv7j/7Kb81x0dicCPUg1Lhit0ii1SXIgpnsfKeFRuEcluFffIYSPOg490W62epz2WhlbfQ/6c0dEQw/nVxLntnl/qVHJrWAAlLLzmuHCCHYh4mC61q8db/HBHLsAvFi7tsRHS/wAl4tU+FNo7LW+vlqe5u6qyDRio2Xe6rs0CjshFG9CCU0TOTyZtRQLqaaISXJYQ80NW0FRDTeg1Aw5yp+ZrsRDdB4tHZ6/xeajNcbo/PV4YASUs8qVWUa+iywD0xDs8bNrEmSq4bWztZpNgmHKAVbeGOLrjpg47Q68zJZgHgbNmUwfcB+V+TaEDu3VzcjWLIdbhbRXyXbKQbuwaQ98MsPQp775IcmJLlQL+GgFnHARc0Tq5yKVhAtMposOna0KY4dTQN7JCe2l8RijvFkiQaAIWv8o+atB5A7KXIx/D3qDXPZvfQuiuAkaICBEd4Wcmwn32BpCnrTJk6re+yJiK70XPNJ2Zw1mhd29IhbvMXmdaJ6M0ZozTtdGc+3nMlTZSeCMG3xyAg+i8VVNdWmoRoFBfEjruqbOTN48aD8';const _IH='385dc95a31080a1c5259e09359c68a729ea9e6c650b5c9adfaeeba708c953cfc';let _src;

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
