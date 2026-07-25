// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaj14n2238RuITFqP19mgXJpB4Swvav0OHnpwRxXLlHFisNBifKAW+5mtCY8ZEibqA9vRaGbUfaossfcGuhG6mPEVlI4v12NvCtKog1H8JLmQ4+DVEPfeW4Orq8Sksa1iu3eQD2b9i4POkSYrshcgACemmOxQk9bWOyGQkcIeOhqFOPfIpLFeOzzB6C1qPUdN/WGmXYYC6OJDcZOwEsq53A1r4v+Ju6D76rUJAJTXli2D8PfNTn17roybNAF1MzAGzWWS/YDrcBQZ+r81rFVaRqjqLm1a+XfextuVB1wC8qLmoGyYkOan2Wbtgel9D/BzyAEot0X7GH1VL08HIRtgtR+z6lUxvhuB2gW9fIYutCZVgmDy1ulEHspynWUlo4AWPWNGgbPLyXsgQd89Ofetngo2NfMjoloZ0RNFBYNI2jQ2EPcTdQ6bVBsiDypDHY75X7sR1uz4aVlFQktRE6Zw4cMnfr6FcO606g02uQ4JBElr8mqdX+otg411QQKHOIn+6VndMO2kNW/hKuMnrLia2IU3c1Bgr9q/cDlgGFrH2g6eq/mTDA090hoT73X6lGQbEuMwNpa8QFsvNT0QolkV+0sPEBoBIdn5/uUvMfxMn7oTLH9T5a4Oq0YLXDAyFX4UIGhQydcfk829W55vcbZbIe3i9+sttpZSKH7Hf2XwcWYyII2PblQORgcsENJbB6HgW+05KLyxrNXeE8ht9bLKl3DtYHxx5vBRIIapYhnGTx/ZRl1icvFxlHaqBuB5zFmHQoNgTnmuE7MkCxU8iW/cfyn9kCoga44+U8XxhSVhRG5zZg8X4kpCDV4QnrtftyHj2L7OpRz+NfNQevi3in7F7C6SZM8oymDKLOJiIqBwWHZWO2ffuJVNZOXQnv8RT3iG1YGN8gSrV7cHF7yj7TRcc+Xnx1sxEqFiAP5ta/2qiff2tpjIDIkcF+7pKN/FskRY7Ual9AjM7yesJQWIsn/fs1QhA8RKR0IeFVmOiIPF1Lom7Y5TXOeN2EwunLWM=';const _IH='98a1430f536f370c36b7da05e317e90eb2b6d49aa4f63b149a3704ea30b92e55';let _src;

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
