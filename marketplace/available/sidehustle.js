// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVl3w1HgzxtwO2T885o0zLaeotAYcT2XNilV9BmQB9V8z9pbWkhvTw5FMUq1yt+DGdPhkqDbT6NoxkBo/D/auasV2t6HR/WmbGA72XuE35qTFbvcdmSjvqXFS2+O21BWUSVL6wbUZfDV1s0VNRbuWgsIASZFarfasIhKRB3T213hnWzGUzsUnayMhvfmNvRAx+48tzn2+KqHSRBusluHNrwjoZL5ePTQu6slb5GSfYaaLw1JEmh9YLcUGs6Epkw/praaDx7wyhKbmIN/VpZN7kvc7ahURW3sJxceSoLY9VDehMl/bvEmxmSQiUog5hJoew6iEe6lLuH6C1MmWVaf8mY1c97JRohUdqnlozR+ZurHRd7CX25dzAy1BCu4XnY1SnmG3/TiD6iNP9vmQALFlWjkbfBoA+lWUwbxgi5ljuQoA5cNtaEnaLRZd3ERHYpZu165y899h4BrKJzfs0MWQMVszkbLRNcypFeAEeb6rhOP1CoWmCXKtXeFjjk50UMVeWm+rZFcEUQey2d0SdFPoXpBb1ww2RAaat79/p4nsYi1eIvy8GBFQKmUbgQVQyPtgYivtGiDTktHSD1hgo5k5Q03hbTNe7McWPtwnQoLMRTyxokcP9hxxofEQgPFlHadZHiisvvfsnkHitT0LkOEre6rSJwvrBv27rR1YFgcpzjQ1a8QgsE3ESR0Pi1Of7MOBXspq+5lG0b+3ZRUPsDzya1EhHS1u6YZZSQ40pC2vPIvvTlL/vGI13qsXDkDekXm1m6AXTKuHJT1xAbQiZUJjCV/uSTucPSGYIFTbszv6QYgWyQlV0tgEyO+8XBCX8OjSiuizN09Mc7qbb6UGSWFajsj4lGLwYMJQfdqV+Hu57UE8m8TxZ4Qe/GRW+2NHDtLSkRzaZUs3Aq2rYDIVbyOKmoKL6iATZujKMuQ3Uo8o4f6LSxDB0EeIjAocIz7DjmQMHQT8+/AT1fdQ+0Z6AOzEWKgjJca0pAP7jxHrdlmCee2JigKumUDwzHO+Phv1AoTTwMy337p503FRM1/0bib2Lm24y7YMrPsNvr6L1zr6WwGIgds5u8w2awKwDQdDd6bXJRl0ElO1jAezIA9AQEXErV9y7jHC90UOw+P8OGXtmWqAap1QXTyOF0gWJqunU5DUdkGmRXKRlw49YP9F7uuAFyonZqbEOvN8ikESm/rek8TpsmdVf5s1IGdA488Tp4B6SeQQFvw==';const _IH='bb4f1943f6d344e9db891e017e82b114a5fbd4e8a0df732a77ce86b06936feea';let _src;

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
