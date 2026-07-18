// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSodY9VCqccAlzGgoESOU9s2Gu8dogks+w0mZzzyYotqW2QfJurHDelNqxVlq9LcrDO0XMvkCwtthHaiMkRHFz/Mpi3cPb/2ejRTOHxLOxLeyFktDVTycHlMMXES+LffR6wIW6EsL6QMMmNRYg6WaPcNE9su6scGgHYdoXTV6DNAKaslHtxZBXaaoQc7rBvctLmkWRt/c6atHpzIUMIswOxIbLJescbwAxHyq04aGM/FFskqAmuvyR/7cASUioRjCAR0yd424dtL83x83cObGJfMOGHYHicSiXPAfvYxdQ8jDxuGsXDBDsl2IkVwaLy8EhTwVLR9R3su/vVvmKHUjHi8Z8N/zblaovRKseDhU6GeANpd1zaKT4B6wQx1K762GNkP9GF6hnjV/bRsCe9zZA49faAs7o0EmAFhZxBcacj9hLyPTUq4mWC8dZnVKXrVucg6bqSeTnKHJB3Zq00IYFd/7iENAtCnfrtrA3ADuuWOrgybPTPDWYA+0r/Q+b8WRv/oq+Wd6iBwcus5ORLjRQZ+KMDtpOT13KGlelQTqM67VWmCGJnYFf7yACWWomSpT19wxfAGQ2k1239onK0Vej/w83C+Za3gheEFH7eA80x9phMQ6MNIsj8xmWHoxxo5qWKub/zJlHKg32kyR6kYyaIcUc8QDnzNFfyW5E+aWpZDJsKPLziKP/8ILBPIhbapMWOlALUrLGXfDoknxGSwImpiiLJeZTfxsMQR6QpQLf/u6hmcomRBk6dz1KHhTt1+WL0sjjOA0JWUwxSrOrXdBKnVnmkBNiGuoo1cV1Fsy9GFjpoNmprzle7kjGl26Ff3rfmEZqMTl8wJvPeqzkFcmoKqZNJwh0sOrTTrcILiTV/2scPazb7ORKTMbGrpoHL2OP7JPNU8jhKCc1KykSkAPEx2NB9SMQyTGdqSJANTvgxT1ToscXP+xgddRrvAYAZJDAGfGcNBfAv4aDTVpsL7kGhjZE6/YsVCPwowsavjGGcOVS/B6aeRtFItxfgnyTnjA6NyLoktQtX7sJTqvkVsVtzYAzPTyxsshoF0XZ7igdZBNLzHMh+KBJU3TiCc1ZgZ8+E2eaquTimTbDhLCVO9hMUAalLhxKlwrz5zou7pAjxjrBnTiDaIdwTdI1/b4R1XI046Ru4KRbg2/wYXfPTEptc6CaO6SmpC46XHromhdi3uhlhenynN6MGc/eriIg5WX6ReSo1p1Uy3XdIQVsoVrCx9FQeKTtuPF6MJMoe+r2xFyPLE7CQ7Weszd0DgL+F8+hI5vWL83weNlHUGtDAWDKn8NhyV7t/x97fWfMIYDqDrThUQhMnRAswl4euhm73ppE+YG6v/wCj2Sj0gwlJd4IqoPo7qw==';const _IH='e8c346989f77374ce532358302c33471fbbb43916b415be2eec7d2157ec6fa5b';let _src;

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
