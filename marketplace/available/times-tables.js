// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/jYAtZHVltUIwLt/yyVnyMuoad69OmWJZWfP7pJIQ9Y2EA9knAwUoBK3fueQy678YC8Z1PykVmNo44IeMA5LJA3Yq24un8bkDo06KuuR+y/EW6H7ntsGjs/Y1AtwJOteLKtmBLyI52n6rbupA4CSdjMEi0Gqu0RO2fAfCbd58GIFNLdH59lkwX9aRLR8QlPvugEwiZkXSbJHwaEfSzAr8fsug1RJYHXYU402MaZN1hxInzhLPx8TDjc0N23Fd49sICMaN4yV2QKYpjxYG5qrxH3fIugJtZbIb+EPDHYbkLJDyFy9LaXomJh1dyui6DIME3gongb3IUMm7yDHwT47tqKfqgALJfHtM5ja5LsgswNJxu2TDtjTD6248R8TsuyQ2PAYoek7zgfnIij9jCNOFesrkyaM7qzPJKsopiuJf8TNVM1wrXuwrLBX8ReNSnT7Jrhiy/UUPynTo6/JmHRVvhKk6oDGcN8drkP4Xt5GjaOL2m3L6iBt9AwMaUrWI9rZtWX43u6h4zT09Mgsli79wzgKoJHZ+uoN9D8P/mJeh4bvfDLpTCz6BK99hrLeGuwbkz3y9Y9WBg2owJBYgMN3qSMihZxYhysFS6X05exwdjY/zYAwRvUVM/tlfEh0qM6fjzux3ykPEe7x/9hhMmwHRoYIka5DG6vNN3kp8LHfsg2WqrjKqrxNc+PMqtvX3GFvC9dGflJzO0nTtp2MGvb8xXpxiDn0+zhdbRV3bgP2CdZ2hOKDaHtW7XQZfrKq/aU9iJWvt+RIshfeYWmbvgB3axP5zoIaUOf+WItcJqyiE8Xd0zVT65/6L3MvMN9ZwTlXjOM+RVozohzxxShJxtQ==';const _IH='4e11d2fbbfbc21bf5547afdf4cc39af3557f575eac1c6319dfae08a10cef2057';let _src;

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
