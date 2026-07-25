// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPsBIKo2Ymqm+bcn26XKObY4vnBXRlSvMLvHOIMzSK2QBXqpzcE2HCrkPSSuJVfiuF+YF/079h7by5J45jrfTXllITpn5NKAC2mE4lJbOlndOphgLpMYREcliB4XJ3BA+EnG6uIsu+SlPQ2IIAcMmCcDbbgyxvHCCbTCHG9alJiAeMHsR1Y2IRPIcKDA2WqdNqgyRBSUdA89dd20odRQ+ACifaBowzbfHMttXX9rv4MonG0vIc+tc7pPkSXFa/E4QpdzOGDPz5xs0HjfVf65CnlHs6uNP2kID2bHB/O2b/fcHC9KnBGpDXymtDGQgxjP4IVuxpV/t7rSMyF+x8yG26LPEckH4/PS9jspd6GcYrNZR81wygERKZoXy43OCYsl7U9sfgl7XLRf9LVnmBfgC7oFESN7cJ4rfW5xNhohbFe8Opn0ZxwansMNy9WJqq0ngpFnCDLA3U0jAncFVflLrAvlG529K7Cx8F/pwNJD/2NzVbpzim6zUBBuJFZvwkRWdy/I4naxiwBIhHMJ1XgbWSWZzoklolGB+GVuK7JdNiRaHCXbN2QxtPSqLTIQL97PDqkfSvKtzt3wX2pwryu0rp8ziIn9rBtlUvGgf70OP6suxeVajmXqbvKxEkc4wbWGeAS5oLDCPfN3IuWbfe/J3j44Jd4FqKn+meYZyyWyHOoJ6ViI5g3G5JZVZrXi13FSPyXx3t9ZHUxlHP8bH5MNPugOBy0DjHL+4OijOaLtfSXkOQqg==';const _IH='1c4ed97e945cb875908f5423a4bb27a405ab477c45da877e9bc24e11602ba7f0';let _src;

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
