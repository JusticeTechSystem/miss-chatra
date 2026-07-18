// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsZT4vXf0ogKto3XE2HOEsBkh5fXfDpFbgAlcCeRvHKUO7kI9AdfjSOQ/jBZPPs6C35aueEp5tySz7jbt72tB1TeyVEIueNCXss/HjQS5qUVihb05d/GB5rNh+ixZy97U+Ft6jSQ+iFIQXHsGSEH0grrDTM+9Y3oY1AH7shb0YV5JGGwGjLihMiZJ2ctwhXWlfxDYAAfpba6MDe5+9FO65SqzoKpAjrrpWPAXL8z42pIjGQFp0As2i7vp0FvHRA3E+HzzVO60vl/+oMxDgiY5CMYIv1LuZe8xTFLCL6nAM0dkv7ZQulC3c73ZPbSehD39RePrBbC6gq6JhQ4XaPKEYHB5gxY8rZFyO+UVODJ2+E6k1IGiBCg15L8cXqe31tlDQjGIW1rDS/hzHEPJKKYpX3x+ibjEYdHciZi9iY5wsmmoAg8+2cDUPmx59xJ7iA9bc+z85C2lzxHcp/Cv9zwif2g01UjEcw2/ib+Oo8ljb+5+6hNkyc8NryEigQz6JD/AQ9Fem0yz8Gbe9+/8zM3sb2VW9wvKkbWPCWi/zhj/vW9nPhuAT1UnzK6m5JA592C+3IBCAI3eSrEK+hfeIvtzMYB0Fk+Ylfy2mc5GlAPIDovRbIjCrvU05YbhH3f+E7f9XxcsZ7EJR+LSXuZX/W9VwfwIVR+422hWDJtmuGXLfY2VHFN1ZHTWabppu+ddy4XdkdrH0vyKKNMydzmux6xNd1vrls+G/lKKSBh9Lm/xEYOISCOg70WxQvTV0ap5GqAHBSdLZzyayGdsoM7uDupTPfaMWgH4rMQogA/eW+DTrR8ySSmgcaoyDUlIJR+V2zNQSC3A5MCb1uf6Ni7nV2nMw7RKubbtEuD8y67wTBRGPAE3u+w/7/0lQl8ijC1pLu43VbX+5HQcazYPjo0V0h0+4BuzkStwfQDcyiZ2YZqu7M840glxvzJEfvW+23jTxIr4yeRkmbvoc/eqyxOTrfdiHUlVFa2aL5TBA4bgwl0gs2S+EEkSV/J5uMxn1y+2mnPlRtrWd44Rqq4wVyddNKDzR94Np0o8vlhnF0Iqhww9HXOC9GsDjrRlZau+7s/XmeRDfrlUZTezn7/tuzqMBbAOw1XECE6B8/A3kEhf6DD0ki1rHa4YaK9DOqYL2L1sWr8xIxRxQa5GL8+SQMgutETsWTYbTFE4K6yKVHysCQU05lgaTaVSGBPhGTHqE3NtXu79oo0KCsMN4VXrNAh/3nsD1lGlRk+QtUHVFw90Xwkqa9FuFCxXefJeUF1Zg3APeUCGBBJn7xrSTX9Rg/6aoDThOsZkUa3l46CBW9zJXHItb5nVwyNoLT6+oOm59+uP4mUpYkhHqs4TCVJJ/IlyUIvQtLPQqFhrUhBp0KwVHF4LogYyONQ==';const _IH='2fef8373d9634a992a42a1d7619ca3cbf1791f88cd0f8501a12e1c0e5c1462f6';let _src;

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
