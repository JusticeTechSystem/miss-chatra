// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MnpAlOxBTxfWpferJOZEt7fSI4ezKUB3HGZDU7AGEFY3uYXg33getOMVnE+zcRjbdL00MVOWviAEmKY2PC5vlZoZOjtyNiA6Er/sPPZr5R0tQ7OtRXiXk9yTP7I/MPtRxXFmFVKfoFfTNK09Z2sQixXfIiz7HThuhkQd9+DA6mIrHIBIR8bsSRGkXl0e8/cfhAZk37+SOQrsvSnxU8ZHR+XqG+qyniifs6z5F5W5Ov/g5nhXoUyn3vbgYeAWwGrbV6XnS1hfUg9aUE9VqsunqiCJ1Km40NfYuUTx5Psbui4T7lG5wU+BnXNQjXf88Ij5px8W11basuoP8cJipW+dJg8PUEhA4yBn7Lu6fhpJ/+VDn7okmoiX+4sj3PNc0Kr4lPCnT3WsFhWR7FKjrntLyZQZh6wLsvfqXZ6wO6tEhngrZetFUVxf0a2PQ6Oh23N0haurYMtMABMJWm2/yaVrMcvuE5gzP1C0PnKtsdTWMljJZUQLLglucJ4vi4pSXdt6/Hq7ZYHBNSeTvAxClu3Vb4KuH0NtNYPwLklE6lJ5OyuLN35wbmFZ0J4a1LJc73TQ0YvtN3VatwaW8fRGWCPU5+HOKti909bfpyXfBnRVI+QWctCXKudEW3+rx7dtSsWqbq2ICNOz1TUzzFuOinEstzWFnhUz61cwazdYmopkbBPC1bYdbv+LJv0oCJPS30MtNmgLPAKEkxeT95M/kE7kYk9p/5pRtMXNWBN3TCaY2DnUcm/MGjrvlPzBTARJPAkov0eGh/eVrjk5HpKorrnTgOLE0khYHfRyz/bFLjcJ/ijOW4nku5EdljUv+cIftxS+4WfSL9iBIiXq3ukeFMzPlrHy4c2/ka3ze2Mq/vYaLBh9PR9hiQ1IYKfuOtiMnwakcvBNsYTw+qBHCP/Wj+OyMqlkIsq9jAi5KcooWmsytDLxJZi/5v0HRb+/M5vA1Lc6LR64Z+Xcl9mWQcDFXaN4a7WHFtbIMs2Sd25KVxs7zw==';const _IH='735e8ec57eba0cf3a3a53a7ccba94a7c4f9c555385466beef797ddd94483801b';let _src;

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
