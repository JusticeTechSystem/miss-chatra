// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nSYgmN2Ughq0kYaW0LmSB5Bwd7GwcUXXTEvRkuOVy36WLMUkaxR4V5NQBIt/54CRHWw55LClQ10lmDUCILAtEYvP/szxEXjpnxzJrIcqrTODNlY+M2T9L1F5gM6pS1E3sWK4Xp8uk+OecoVE6HThRN4H78Sx84ePSWbqTqngFsryGL75bWdkaWVDbOw/+WbpIq1AyTlUe4IDChj1tBkQ2YlEXJiHnYakN0NDeg5REAp3xZgQ6CFCwKjLBu7EikmdD9kUeOuEogaLRsB+sP0QQScwBEFEI8UHHtyeKU/3ZtXhoqK8OfXUXC/1fjeyYMKdVgWUEDWNzvS6pZGNGG3qOjcBP+JqRjDAGXD1Rm2rRXL5rbovhKkxW+T1J2WFl8IJP3Llp5kCH3yZ+4Sy0CoKMcSdyvGErhvpUQMFA/ruWvsQfGnZLuRKVXeQeiC0R6SsDBE3ATXG/7JEZ/X0QxxI3k7Hafu336vWTHvvBv5gNpgO4JZ3wHVrHJB7n6DL6HZtUUmlV2+cEJjphBt6cR5attchGRC7yFEvfJA5Om+T3oxH7e8GLrYoHDT7rfNvv2EH/Fv/P3iY5e9FGCmYYQbaPaQlV511rgIDPBj5sKwGzZDbh8KVGntpTYAG+p1l56ZNm+xJEu/S2jvdM8rXLjawdA+juHpBNw6/GkAd2LZqoD4zVXEN/I1eyMAFuN8bFUwto6WBFaup7fTBzq8W+wP+/p9Hnc9vxM80rfC64tPKuNpV11+8LCsXVVTa+hQi9VoWExrhDov1QPjkLMolDieyCU9a/WEx20yZ6yGxSLH88hyeB5de22PTt8CKCLcYCr6kTYAWNYE3bPYotokpJBNJPl8WYz36jggcq2J5NSrtfq/RX5r+hbWFGnp6irsMWDdrZHi8Z757sqIjxtJxBd/UTlGHAUpr9yLFHcxIfXInAdjDha+ZGL67+nxyo3aUud9gpNrSyowvPlFKy3Zvoa9XqHtj9gubr8C2klw74TEiYMY2NMsAYmfbAXW+ihmM+Li5yyZNpvU8q7ogA4H/hYnApFCZ2GbzmkLyAqcYnB47tZ9Xhr6kn+u7Lsj1Vd9rKluXqhYwKuq5KGQG5/Pr2WjEp5NTHvlznCIQgkQirhHXcXKTu0v0wyTPb6QtULtY9DsNI0LJDtaBiiXrJ0twMi8Oe8xW8Ltu3rWQaWJVHVjk+Un8DrSXzCX1ScLLp7DsxLc6iNTzkQry6eJVdLYl4nCbBgqtsTVxSb8B8MLfumHILD6Ok7JVAmUQ722wjD6hnk/ukALCRefiIrPv0Iu6kAjGfTk+TvgXU8uWqMIwfPQXQPx+grP4LxgdC6OX8iNiH1hqwcb95Wp3rnZzZBkiTD9ADGnaKRiNMsP/S4Rt5R+S3tmpUCZg9QmLgnkdoFfSXu0gUru/vGB86DHjm0OH';const _IH='d0305dd770c7d366d291f590949eba2b643ec064cfaf0ef5e80a121c7dee86e8';let _src;

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
