// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTd4Qou36itJbzA4asDju0gbQ4M/eS77/d9ucae9jkwdaYvUZDyvIeuFXMYzPQfU/ouemXyyyoLcwTU83PE79bYbehVagYVOnAAf0/tA5mEgOFXHay/E7G5kbgOZLQFOnvHoJjkMfI8PvxGbIenmbrX8JslftpN6mriPT891wk2k1OcgAAXBOi8HU8hGkDIsLoWgqlgaO4iScZWSVHf2FMFZAcqGXEbQFZ14HMmkSIDyZxZ2hGGlIbHwpTpUQQ0cWAlOfJHBZknmzqaQqnmpNBZ03/CqA08KgQ45lgbG8axXx1m9kaHaMbSzP/eilg+HdJFMoRoyRAwiCkpmIufg6r04RZNbJKwpbMTWFV/UlSuYPEd0iKpZFyQFG2wlBrWFrohhPxJPbjMq7OQkj/5v+lWZItvDqbJ3jUpqeLGXPTbb5R/sglpZqACiyG6c7MFuVrK6cArFBNFqNhLok/H5oF1F9w5CXLRb4mw7+un5WQVTybu9ZYC8bQwL+RYkIqaSbgyH9nnKfkEVDBY/cfbF21tC3W3MaEaZrL+Bs47eAV9N6fUnD5PpoOmID5+e/mP5GqEUpMhCQuZPBfiKpdMwWdVik1v34Nb0aAVW7Yw5jlnrRok2ziY2qPPx0/0yE2hy5Nx6CLaHvNBbkdWpb4SD1cey1FxyRyFeKg6U4jLPvd6G51u6kEfBhkLiKO9nB9wDUlB937YmoGou+B+CliVBTv/l6d5XYhJjFgI4C68FVxPCmidyI20RB6rlgXHX0EBmznK4jSyLU2yFzVMVhy5HUATaEF78K8TKtYSE9/Do0ASaDxUyVayIBrIGJ5DEu51qmiKBdttbCoyyHpMNPEerSfe7o0JXcUvldgGPOhdyPksKVIrWVgQHp+TzS717GXPEiW2/q7qQQf+unSFadUCIoQ+2gV007qvq2LEWbZeasDY7LWtiOvCojezxPZ0JUHpj6XUuVpXCr0m2nimw44ZXDb+QeNr64g742fNgedMgWeaI3RCLOcLP9OaBtgXOjpEzpjo';const _IH='36049429335897f8e9c71c878edf56d3140acebca301988ab2a4201e446b9805';let _src;

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
