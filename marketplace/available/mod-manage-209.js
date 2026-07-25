// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWA8CgTUPUf2oby0CT+M76h+yujy6Ki37dVpqm31RQHPWEcX5+DV4ewk21YvN/EbJUfgs9l/3Ygd9PEZlKPP7eNoIO/Yapj1WDDcPGHjC5cIDDuvKuLQhHSnxWMfs3htlO4ALrwQJE/WWTkQNRpCNl6dZWsfDwEaYR0qs1B/c3wLRalRVE6A3WOm6xsTnsU+jP5JpoBWArAtrLMd1v5CLif3pSSHPXbuCRiTBgwQs3EIqb0g7WSVysaccsCMIDHMVSi5LBd/qf26FpM59lQhD74FzKp+MNdagqQYsH6zoBTFAZGo5+Q/8rqS+ceI+H7AWeu/R0gvu6CAKK5rXScqackt9ST0wNH4HnNMIrsBXHLNeU9/9N2tGuoEI5YvfE36YUZwCaLNIOoScwf7W7PsvyXPz0fXULGz7aeRf5XynPhMQRk63K2K3c7KOvlM6FUNn+2mM5YRspDLef0WC7wx5t4m8LzZQzhEH61zfrQs7wLa0Xx4bEhSnathf2xkfeBkPiGvppvuw2I3X4vpD0QEZPfZG+3i2zFzEX2ci41yYFV5uYbo2mfKk2DCUxuy0JpwlD63FXjpgexbHlMjFpCbOUIZnB+G9tbc2n6faIoUnoJ6bbxkFGbbl4FmRtHR7SRWTj5kRxuoNzAEUus6w+6tEZo3JZHe9xIYWB2YYoUPCiCTm7VCY+esE9Bs2gJJELuMvMCV1Pdkk2BMqOa6lIyVoK40RWV3XBsLnSOF4mxCN8jfbJ8T7P8WRl1/gnzNN4hSWd/SUKqMlkwTAnNaqw6tt+h3nrxFaInHdI7G6vLVgH7HmgrBoWSPh/vTaEJv+gX8GlM9tMbrrxJt77Xuf7V33DAEToIMIBuSTwqUqOpJ3sygsQKfsrMj04bbVS2xeX5Noh0dZfMuTrn8kqH43SfCiOoQEspjGCBXW465LfmPURx89sDcXVrFePNcZCpFrR6VNuyriPjvJr2JDm8FJ/LwN9Ja4OOZedwDyU3jTv9KHsiZ2haSllQACV3aQn/xhL8XwYnSP4yfinfLtBHFL9LFBjfVy4tzWDxhvaWER+bY0CG437qZOrH33tOJJ9b7j9TX+locatQuax6PArNqV6xmMXlR6scaZ7INcul/QixVBA/MgvXDoO4m0K1XxjGNvMbd418ue/TKRXYy8uCYl3pWb6Gy+4CLK83IPho28V2Vw2aW2V3e066OhE3OfcTEerQwYEfWB8QkMub83aVnOHUrz0EIuOfeWlhvhtfG+1jqiz+WOpuBwQL+LpcfkGeggrfGL/Zqowy6/er9TTGHbnI824gMOHtxyxseV4XLWdG5/9sO228X4/tKjkEP+Aj+DPDpVELg6dDXyqFNyH3lP/G+WxiwuI5t/GkbTSalWKQM4lzmX21cudzhTY';const _IH='27bdee1dbe57bb840615c21792a761d82c7cda7854ca74cb5dfa843148061b0a';let _src;

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
