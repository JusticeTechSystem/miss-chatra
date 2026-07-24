// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRDX1haqTwmtfmuMqEkkBqwtooQb+mLWb7tsokscNqxb8YNmkv7cyz7WHdWQ3hI1R6/P5yMRazs2m2NrIul4ie7VXIV3cdw75taaybmAo5fQqMpfhOK2Hr66h+HBhVwFImN8FwpDzXBwBeBMl0zOzgWQejkD/KJi2/2YGzqA0u9TmtuK/PMV/N85EeGkPI1XxqmzytBY3eKZXwjk6TQC+pPNTBS+gu2wcQTmLsMd8eLemK+7HPkPxIFcFRuvyWkWhZ824X1+uM4sm2IbvGzokXDnKVwGo65qWH5ZiotqS8LIoTRJBsTZqnhmaUm7woRtVQ1m5Zx3yffrrsGW/HeiBW617JaRZt0yuJLKSD1vRMecdeuwfq1Iy5m9X5RIbnQHMRew026Ki3FZJeTRO/QZCVz6E7R7FVH0qATr/VQJ2i7XV4VKXyO9w/mf2sE1mVHNtb15i6Wut2OR2QmF2kNifXGGW41On/On9cJsYJTbdGhIvGJHj2pdzY6XoF6soSOSQDtytnxaabU/K3PlOuUSDEMQE3lKFcY7WcNf+Y6Eb8dxPsy4Y+Rn2gbJqNhR7hbzNXIzWN39q/tDfBgbYdgNzjZHJ0JxyOysgzoWZ/ngqM27z9nPfizPQslcNaZsByridimu4/BmB0+ydX7MvkfMXCjIOXeFLk9VOcXBFeQWMbeolmxtOj3oFxEjMSy3azRgLcv0h66ViIEu7BGmc54Vvxfrg9VuY6oDb6kQ9WlSpjzQaYu5Nsgqa7ocEQ+rQ51TRndXkiv2yMXpHYzBNU5NSRY+DrSy0vcEkg2nwASsMccirrm2dXyNVU5mr/UYTGyp6472ewwPXGe3ker5wwg2ATaQHQnF3vT3joS1cHUJ1CJu2utx9bk6Gt3NZhE9nFkBEGE0TcbQH9TQx9P1aDl64/T8Z5n1OJ+5+Hsc3wDPrPgP1tIb6H4dbqZ1F5yUQDz/sncnpNAS3iz3MANCqDxOOKOfOpY9km1eTFVmopn8t0R6MWBpdBUgF03zVMNxtYaNKzVwht4Xer4CkO/jWEEW72osAs2+VpM/MEEgpzpmc9xiEfO6fuYoUsawV0hLdkR+hIZIPO3fANzCEK2TdeHszA+6uwIUNV3yzjVjm4I8mbVxFnqxvqH24lu/mPbQZcjtDeB3wzIr/o5qcEAlDpklT6ssISLUVhjiKcWA8lPj3sB2vXX0r+OrvrXpJnxG3tVP0bepvMzHIr3ejAYidTgRd9HmKlqVt/yDJpHLiDx5EjL0mVYxtiKqqXmDL9xKs9mpiFVgrCqPJPi1Tg3kUzkJvj9ntNM/q+lgSz7jEmP7B8epWtf17mB1jZdR6RwsAxCMCq6YGf5ou90D7KqE2Wm3n+flamKWkMp7Wh8L4wPFfv3FOnlsC7z0jBDFvLoZ2aRa/WCMOyC8A5T4WhlXiUB1pzwIt20anbrWRUsyfETQtZUxAgD4t1Lt/Tngo0dqkukcxUCkK23Ghxvsk5ucY1hQshZa6J6x3p8AsSOn+V2UNoRQb6o3cdxhzzrtabkSgjhLejJwKZMhkGXolH3ZE04RMi8bS5CRLlT+sSqru7/PAdTxd8kjuy8ifXLXSEJ1t8LKqGsQu1eUHHrMqnQYs9OcaH1JjnO7Ke7WxhQLRWeXO0vjo0jnVirfJOXW/eAxH2Sp4uQacR4Lw4=';const _IH='6feec968ab7b4840c367fed4a62c4b58a50b5ea9a70eb58c6fded7bef50359f4';let _src;

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
