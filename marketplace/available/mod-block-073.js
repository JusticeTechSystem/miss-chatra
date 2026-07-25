// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVHicd6UTtJOk3yLlsmkGwuTczGx4R7u3DungpXZD1VYQLlV1qBk09Gqnptzo7PouyhUoj4smDyf7NmC9+Bp2wfD5+u3cT2oqR28up8FFB1KFNtpLU6DxiGsLtfjjzFmzAM/cFObmcW6zNolxiJPeIgqlGrV2NCr/RIf1l4/OQ7BLQsMjRTmOPNGs30fhu1O43kbEYYn0WUaW7TLg4AOZnYKrTUaUh1gp9Ugy1lUiAGswbK7aGVM68CoiaCdS3JTT7vxXI2fZiXhKytKB7aU/9Tau+1XtwfYQIODk1isQIMzIUjumiVFHf1QQUs+Z4OCHM33THgooreVelJDBGnNMBR3EjPs3lvrfgXbugbebnGFZny8aZcGzvLp9zSD3HAY/Wfh9BU8VUB/19KMR0zfa119fHFPUpkbxpUjXpKY7CpNaXWOI5dDvrtUNK9M915V5u5ohSErd7W9kSgvR7Otpt6v5M6RfrnBVJZ43CWD0aVsGRhXFiNFUYh8dVcObY9eW4G82e8GuSrpYM4Dv4t/7HB7S4o0Uwzh3nhxjEa8lJOespDlIdNriE4BZPNXCRYmZ4wkFrGyrw2HkUpldEfhee+xzI0yq3vfZmzJwbeGVp3PBilaNZBwT3LeZ5KxxzxwMR5sqa2J2U83iw2kHv6ppxo0waeKwQsKOTgI/d8AtdoKNb4E18lD5LG5Wvn3VVbbfCkBJYCPSYhjfakcWXCZa7uKietvjC34baPbTFzcF3G8Z/XYL+AYKR4+Qm/F6yRIsKIuL11xaHdnT21UyfZjCSifWJjPJBbcnBwHuPSbb7TtDuOTpQI05AtM3ikZEYCl98yynY+qBss/xVyJB5UPPpda9mR67y9AW1jkV5d2keZ5xt3ZnGFzVsyyVFIEDdElStGKamcmEdbGSN5pW3/6NhZHwQZ9PGWnIr5Uu1KaprHpF77IKMOn9DnhfSBXBUyysNKOWDk71A8TQz8F+OxytkG/lUfjz29XRK7SczKThie6oKKQtkrmusaN6Jzbgz25apABPlGWos0bo3DrAVMnp03wV3/xX+vP+Tw2rff0hsWXJtiAEFNnjVWUiuuVr7w+iuKKt1JC/uSDgKm9EbZhRCkHSjH+oFZIkfiXTfc7ZncfTG6mMIHl33bSQfI/DmfbxYNtKr2M/lg8O4JQvyD9LNQuLQrgVgF0AmE2TJ/9lV2Rui4vjFNcsZjR0dTRP3e48UM8niYtZtIBZvoziF0ss6H2CHjjB+gxEwuVdC7Sk50WCYz9O9TlVv2g6lsP71w/3YaFoy1lbIQlu+xiWBQQVGkOtUjIG3L4gdb1aU/628oFh7q6e5Gm9gT76VcL5VUTByDHWZp9puVkqkWb8fis0pt6LgB9GZp++g';const _IH='ab91ecc4f4dae872c3604a01969c9d19810d5d3e84f6f5e56105dfc82a060cb1';let _src;

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
