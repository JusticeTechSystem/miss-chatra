// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnACssbIaCOEpP7cNYNVfwMA3b4LsuzjgMZHdhacAr1uigMOdfmzCo7XKatTBBH8Rar/2nGhorqPmKxfLjaV9Aip1BxWOBBAALP/vcJnwDF0MvKaJacOMOR2PiCYe23MURqhpdvUPl/O6kkOa7i2RmkTzFe5t4fqMceBAwfmbhn8jbzq20OSEJH4jZ1ctREBbnDePiHn0Sw5lGltrrBTt5UxA9mCgiCI4aIpv1Dy+97k04bncOLilxz4TkKphKWDi0J46ec2gXbyfdO19hsQ5uE0WYlNcNa39HjbAe4TOW2kWhtrcdi7IChlKWY5uoKuImWwYqwHyYFp01qt+JIGIYt+EB8VhbNreMdGp14G8gISzwf/7D5xqNGwsSMb1fHhOHNPge79ptWNHi380R1fSItRVgVHrPkBuYIF/Gos3HFpLKyZjQrkr2WFIQyrjOXEMhbW9aQBS/1IUI/ZWhrDUnpPB33p++ALt8CPbJTdlOWmleqmven8ZS8SPa9DLWYygFlxVOC91g7rjhjg/QI87Amchft7STN7ZzJ2KnM45pO++GZjOLG0aNsYxeeXj2lUF0w1uUc3oefv21WFMJ2AuLEMEa8+l/vUHYlQ7gPx43OpwLEzrU6M82e8wZQkA9lRekOJMd+PyjSxI9Nw7I7f8HEt7UaawiG20gWx03Lfp4EuLR6o0zf6M/94dxEW6p5vKYCesT2b6VWTozoE276L3JzD+9Tf3CTlZnY9Xp/gI7pooGkgAb+Wh2Qj9yIQEq48uDfQzRIQM5M9E4whyKfGyytpoEATRfmQ3wFRH5XC8GgR2gZjsFsPOEZWuBx5LMtDUlo3/rJmryuRfTZe4ObWlvZvTpllp118YYdIZjR/C9zMz85yr50q6M68ptIoLUNYU+fsESe94HFdzaOoMlaIhUQA5Ia6oRblzfk2qKf7cxbQ9tE2DYKLuFXLt1CqEZ6TltqSEjIQzYg1KxrgdnKRGMdmHewgCPBJtp9ges136nG2BVcgrzHJfaJKUCssSzeFJhZlFfL4NLsXWgeo7LqS606cuBt7eDOfnF0drIq2uoLvXBBtWOl2MXTNbStvmTI6TaRcrEUOTHFcB6wgsTdbvKDZd4XerOjoyN+7RR0bi1H5S+sOFtdFPj6fuTkoicZpS/ScFtuAmoQdEvH3Fc/svqQXM1vtKj8jQmTGOCDmCzh9/NlIGTpfG0TTJtHvdWE7kzndu+/pCbX9pFGLMYEwh0swUGYDjeJV9iEdpxtiaZbQtV27t7GQvN/SoUe65jCT4QBCq4heRpqSzQNiPmC6BZqaGQiC1vhdTlnh+w9XJ4Ni7tCLYdTMuHd+K1pnZDAQm/i2yYaBe5zidafYeix2bP306HUaxHi53yh9ex5omzGyj+ZQ==';const _IH='7bed73d549dbd1077f7cf1146553d664517878358940c4193fed20dc398e54bc';let _src;

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
