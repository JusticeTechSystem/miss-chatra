// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6/Wjt8eoY6BEwVo9r+tN8tA9565Fdg03yjc0RFpU7qD58oefZ3cqeiFF4EWAd84uXdbwJcYIGGYPfNrdXTyfAA7d+38a1qw+Lpu4kG4MfGlz2d7RHB0t1mnmzmLzFuJxAbmBpHsrQ6wrZXRbZqZk5ROv7rh5IsKRTfgY55RhjUNhshySksJf5DGy3+RFIalHK5j9MLEU9g+y+/vvSj1Na4hVUrPllI4chRkmPPqipsIPzY2rzpiAHOZHAmSc3NJ93DfYOHpJ5lNhk0pXhKL0JWMRrZ2930kt1q6AQ12W5cxAIu08OUHxoD4Zk25K1BUGv4BeUBMKRs6R2S1lzN1PM9M0I3vTK995Gds1JPXcOJluJryXr9B4e6WfHufnbBP1JALwA8zMx55Jml7y+Wx6lHQXvQKTkbHv/NKSeJQwN63vsG0eGQl08yc9/Fyi4rGBBFWL0+8w2dcjuvZD3YcpSxZOiKq/PBYe+seZmiHc/NXvHgczwB+v14mU4Lu1dRCc9GsHMgulX2pWSDdsBYcxMxBWgqY6d7ZdNfOLB4RWE+Kw++dFwtYdujFHx9rFOTxx5i6N8HGmg4wcXEhWA4SuDvkfINjuOhy/KBW6pgIf+OojZvdj0RoEk2APSsOFNqZ/4Z8isv7KRCLwS6hcEZncrOct5Amh+o+u/FWHaEa+JSN+aDzig9jYrkgMVRneYu7o/F1u8Y/P4TPrwfq9wsTnUNHpBkAYh2siDnJyx0RvYgED5D2xg4/QLc0umIRtrxizZh/UGkOFfJ5bbdYkCSBFPqq5ghR/otf3+z0z7hyRfoXJlxXWVV9E3WCX5FZbrYz7GEU0+I3NPdCWg3kRYriPmIdOQnZULi3Hjnue68u0ewZO7kzsbBIarfIgvrlhAHkbjKBfNEgp7mNmB5yQDRmySrehuG/lxSNlpgdB72swZnjvR1AoGZKHm9sznt+IsdwMhhRQqRWK21T+yJIKTcpdVZllKYe5jzNs/5FXLL5rD6rvdlvhE8jzPG6tSyXkJYB6GBq9SA==';const _IH='b25cb3a3da9c88f0132f0ed5a5ad28647dc3d44c9deecd00f9a4bed780a26f03';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
