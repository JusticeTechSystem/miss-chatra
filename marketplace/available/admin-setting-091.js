// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2FjQi3IASzM4QQgRQsZqdwNsD7cHLCtOptcqy5yIARfAcpSM4NjIbmTbiMOvgUIx0MgUvmll5jhvshoP1UM5y3/ue//IZaXF/LW0DXtBMjEniNT780Q78OnBAR3dfYd5ztaBQ1WaUmY/kmJ+W1nCbOjrL+5KdsVTtZNj8eBoRXvszhvvjoZQFg+RDAet8bnGEOVprQn9ElC70WcUJ2A4DN36jtt/l3HzOeJXCJ/Ep5BACT1ZrExM+EJ4xgVazgXNuKBWNusi5B+nd4gTUceR6a3UZ7UtwdQiycaahoyT7crjER3jN6vXWvxut3wxH/BONBxZCMDjFSK+3A9rBKZxaJViYAdIiWTWM9z4iKR5vd7EalAxwMbPEAR0jLDwM/NHXkbqccktRBrmdbG+vW94PfKp71xgrw9AT2+mXsgxAh/m32B+noBNp3rgLlyG7lgiEMDpY9WELQaQFTPlAND4L3ZDdVQw7fdzFa95NZeqVqJq4q9YayXx1cYcyCprcf0DdgvM2bKOCfPG2F/xUt+CGQauozO486QiPKP+Q6u5F9WsxfVJcGGOn+T3vVGM9R2IIGK02LzeVazfQtjRS91/cJS4xC1S41hizN/aTbslnMmlHdzLY1UTKbc2/1vsfSP/d1mdu643Fjv4YabmGSKiKdNnyyLuccShbhfzB5RxFiAutHPvd0wu1XICPJmYwGhU+vAwBx0NXwthJrfLAW0BDe7py/o1qonF+H7Uw6gedx/fjoWTGXHKRt3kKonTkzZMBAmunszXedn9JXi+K9a7oroa8VVsSorFhHWdIwOdWAhwBmJE+29aonzLddsI00ABZ60fkB0bMr7rshiypRLl4mT0mdBj9NuqAC/LtJhMZ5gh+z97uooYR264Ieo+DX6Mm6HY8Iy2bgbRj1ige5/CYJj8yzWiXUk6lKR6QKhN2aF8b8dB/HO0vW+JLcnAGeZUwAz9j10tzLbrM0yPv8CbzuFbKfXOxKRAIGY6bZXdzj6ydPlFlYYWH9BFum38LjGPXy06t';const _IH='700b5e8e0681deed145af8b173c60c46560468b201fb2be1fef2972a091d3472';let _src;

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
