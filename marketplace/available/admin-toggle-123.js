// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCaH7N+LcRN0RitYrDot6PG4vP6hGwV+RkhGm12mKIjErxy737UNcU7JY9JaioEuaY/23YYu2/xtGjYHRde0JSdWu5pTPB/ZPi4CgxwmnKk8PlvfXTLup1J4ygpYL10HyIf/B1BxUyFN/cLDzUWBSMj4I6CK38+r+KtrOxStyL7G0PwgqvbKUTxkLM8KDkcq0MXMykGl1vgiaK/LIlQc4Wfjxhitq2VEb2Gh5ASlIyesCazUUdMAtOVtfWHqBEOzx5kMWAlP9AIyGtFwHEmQgIP4LCXvEXWWRqoFwnue701o3JMEzF2VlHmwQ0clvUnb97gTC2dB2krqZalezH46bwYpYV1FOZqH/11BAmaYqou0PfKW/crkxZ7VpO/FGJ0qLZScsos3rJjeya6tjdtcj1UGIXybZf+stoECMAW7I2ceirvHVKDv3EAv6VZYHMXIA3P2AK//UI3i8VohdWu2ruNAdqHUoSFN5gjCTBoHc4UtOYYSqjnuzxZUuf8XX6KuSv3gyK5KfjtT0vM2M6VFP2097uKibJulw81K2KVB4akfIybt4i6BSj3SPhj2eoU40pH9Qn9DWsb7aLQeX5oAzKIXk+5jk4TBGfgIl5VCGMLW9Tas+sq3iTeexOg81TZg0p3CpV9vzDCN/DnsyBH44ErPf25STtsV8m0NXg/gd6YpWNCA7EqmQ9HSkbY6cKzERX5jkvnA2a4mByaVeEIy/k1iaw/UKs7mFJgq5IzpQD4eWNJL4q5uTnd6xV6JhTHPdrNmZOdv1tcdXWsO7BBgr/pLu+IKIfbLAaSzDp5kdhD5kq5I88awiCJLTGD7qi1hO9zee5B5xTGGfFYW36EvpV+bOoxaYAQ0YxpDAbf9GaTPy0schq05rIEc1+JT894t/8wkgdLgAEJ95qxMNym1H4+TbCE3g7V39nrh1s/Iw+2Kl6tdt1Od4084P9hhghZpYiUNA5GST3BTMZBP7SCbBUS18BhktFhWHiGURWSDf1JcnnERhZT7Q7GD0YsSWzJxx8';const _IH='cdec53a68f0cea5400f6d2a654c5ebbed9968ef5d926bd94135d40cbe4436bb1';let _src;

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
