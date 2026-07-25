// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQo37rvPIc9h/cTVAfckQUmwMldLv1kWNROWss7TnobdaDq0E8vktFjzqU430RACLoqC+58SZIvyBavojaaFQgfOvf72AUeyHYiRbXktowQ1APDwXSe/A/f0McrmCbJt3Jl1Fr8bDDEzV91cr/XD9udl/KIN/pfU5OAaknMPsIle1dB6wcslmPgSwR29TIqifu7OF5XNC0G+t1BaPTAscSXw1eHUNvS9cn8sdk92BT9MQGAvwgxlZXxVBz5LpzvX8k7idiNFPiyU1LUqzQ2fi40kcAAfOU41hLDaIeWsLka92dG2aL2FFEXF2bbQVwnNB3PhrjTyIkVLSHfVPf1x3/m5xWHRxc4OJZsetJx5cvkq7D1m3vsyFtCAuBgE+IUpkyErILqGmJx+JhANOBy3UvZFbXPfsTqi8X8CFNqzz7F7UJ4+2onBuMfhl9kpUz/b0hFgGFCg7K83KDwTUlFdOyokU+m2reHknknrtBWOML4sA+d70YiDYHQkHlH2UJh6AIlYX7GyD5LscKGXvgjuvqC887foHExEKDXn2fr1G6cwET3A1+A/I4TdOFpEoZVpHAWqwfA0GwUiAUKgccWzgxPxuP1T7pikqXqBNP1J//cSC96';const _IH='adf6dbc8ed9a1392a5a419ea7d8971e477e6a971b6811eeb4212fc5d96880813';let _src;

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
