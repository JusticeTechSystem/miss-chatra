// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGJrk6XHQGlRAfP5NQbK2pDCI93vfrI1o2Bf7Lg1t7OgcoWVWUvIsAj6QMry6YQqTAieIRprogdl31D4dRVxJ/E7/FFBhQIGwzbC2c7zHXGyYNLXBGP4RAvvaNSQ4HMT9P9ghT6X+28VAgVDSvEmXkAmN8LDiORg6Dy/sIm6hEFVQDRzdmYbiQScNk5y/39CGnofa0PkVwT/zDu4LXisvIvY4ia3ccoMP2TWyHCEUWoWH08Sypa2LeRFV0yAgH3TLqUdNp1U4cp/bhgOKsqRjJzIS1qdfPGT0aTrCEv4olqrhpbrRzn5bkqn5kG2eWb7l1dixIe8CH1LwdDp40quTbTfadMwtcTXeDZufSJvl/qViQBeYfgwHOiW7AD+cbPZNqlxFQakl8vUfdluo1w8qUrN0x8LtOjU+VDoWiWCfJOjE4vocpr1AsG9hkhAOsWNc0aKgeu7sg7TWjt7ZZMqfhXhfnyBvkqMIhDFJn5wzn+kia4bPT9wPx8/4MZAPlMW9tm7/B7OgQyWnURU1LS0bvj4O1ZjkEBd/1NDmh9UM3QKamqiaGzkjtf8w/p7zGPqI5/3B5d4uoyTpejWMtjG2u0ieCDk9jYWdp8dv0KSDuWxlBU+u/6nsjqo7YlzQ+fvZtzomrbT4DzUhYmsnvIzv/I/Q4Pcg/uvHFWItvZ6M+hD6TeRe4Nv2xBpc0L9JYj6HLTVlEyQRh+l4sFMv7Ncz/xejCWZgeYn0Wii48mzB1h6vnU7V+jWxaeCrnvUbfesDgVv1DLzX48JrsN8595s1n9eHKIxj5hdN3tuQR/sk1mxfzr/HjszyPZXgkJrMJRMayB6lgCE4wIg8nugi55lhhmjC2NszDOqlkT7HRbf4AMhE4EGeeatqPr2AkzzvURjI8XQtm+AvFuAUIEPJLLWHsl74Wh1WQqZLe4Kn1gOfcIC4DKRozPOIPibjnhuHTqHzzg5oflzADaUBUPUXr9aFbh+5/AqMpPPpTng==';const _IH='be8330f04a443608432143043be53e155246f52698ec10bad3ec53adecd161b8';let _src;

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
