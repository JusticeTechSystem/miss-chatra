// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzgKTw98YV/qujDhTeWBLoMjHSw7SlCL2tLJDG6OYLKT+i2wNbcZ5SXWogla6zWtDe8TX8fiEknTLUW6mC+cdzHagbcgFf7H24hhD+cM8wZXgI/ptHpTonGPq05ab6uBMf7Yv3v3o/bC+WtZFBcL/ZAcfG/ktVfFOEZR7ir3vGvcCITjXvYKgwgh0W5lEGCFwCpDdVpMWp3/s2YYvnsqvLcM7ro0sn/3L8wwa+HfpOfOSi0+1P91ZCU+F+Z89AEiOGN1tIhrA5PPjsUpooCpJhL9ZUGLm+u/RXrqVQ7pZIpN30NCRbNWdoqaasNn0tyeHl4F1JNYnD8UKRRxfq38Ox/GdamJyeJSnRqXRFHw30fNXxsAklCJ526pBQVvcjZF+I+4q8wwrH1J6NYAEm1tUZ9+AtvFCFjkRxmNvm2898A6r3W4LZzMT9ATVcBGJF0JfQiVgk8scqFTxcW12nbx57nbTOZ/2XdO7J/1EHxAas7aeu4Nahgz+MTtqgODTkr0/VK+g2STWNU2OTxtbTccUsam9LGmNkTwzpSscdzoNrg+BioDEPDzhJ9TszVWkWtvw1yHnijEdlfr6rnhtZ2Ijm9w4/HBn8oPinxwzWkGI766BylMiKq3BoiePHV8lHs72y9qXyzZMgJExdI0f5X5oVzGbI5rzzcah6mii+D4+jEA4pFyycdSWKANx+uyguOZsHZBxEAImPIHuRA3ufS2R3pl0lvpEmzKVC70Wxf4bSmVSkXDM+8biY/mkvTSFZVCtRfBxt/9xOcot5nlnIFt4MbHTjAcnMq+Epf0RhyZ/7k9SXZqrK5WjTG0HbU3DWuLQc+9dN/wYrho3ITlFsYDveHycJ8JhEOtMnv/2J84xdSntr3tsKFlKde6XSERdBci+XM77kA7GQfIZO6HZi0Gn/a5OxjOKFC2EkeQ3UhUEzlu2dIlZOo235CPxCRCDtrCUGq8s86yEBTXiJK4zZCt36GNgWQHceMwj9mkIxf8jCJOTA9jk02S1y4WhG';const _IH='25246699a90ce19212a413a7fbc4bce4c8fb2b065f9511b77664f9fc04135bc6';let _src;

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
