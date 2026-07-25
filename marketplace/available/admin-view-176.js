// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqBP7JBDf7jcKB+3Thjpg4iw/t1UEKx+4feCWwtJtyiNKwJLhyCrHYcWmy3BCoGOBSFqVBH8/WBXFvDkzlAOcgdd6ILHNoieE6WtGO+WkftUDYH1kfbYArSkaWOW0OvCfGcmJMdTavromHe4amAh+8C3yehXn8jnqzoH7erm3HFaifAf+SPiNmsVPhgYHLHSuVmviyDWx88dzO87gzcUrlqbci5oxgJVeQ1YbowxMFG9BCQreNjrUEfIviJllAaJU3hC+ir91pbOCMIEpPMkbJebXWyJYpnhxeWLGgaHloPPksmg59Lx1QabIfVDe4B3waDhQYhaH2bI0DOR+KqgpwHXQk+DftOcN015LNrclrCA2uXoVuAZ0LRKYcU74FeiPSfpQ4azFZnKayGwe2K5VCpw88tcSaVYQugZIxKKjbnErBIlKCoNujD7fxlxYoKI+imGsc3HVPjw4RP9toKQBZQsPEcBMdiF6doFniB+yKZcTu8aKMFE7DA+ioQB/4zh9NNdwXn37MjVOtr4Sc7g28Pbg6ITw3mz8fK+SMK3VIueETe+UNbmJ0HaGIKhV8aq9wIz8ol7BYAdmayyvcNjaqJBuBQdUQtM3rLlSEA3ZmzFoKCQuAWf3h4OU55zG/mRJkjFRGM2TXf2pPmkJvXqzGu3n6aVMO6+bDUfRakiaahmm4FOCI9cU3/uQvgYrKVLEbp2FGN3g8SYkZIkOHzD2+YhQ2iIWrxaipWUfB8fYRxSLie4JWCOY/Wf3CfN9Duq2E/fLsB36H8y9H/5L9nwpxWGKdu7EM6dG3HpzIo6IXyx1pd8qqeHXPMSCuDjwd9YZcojGuYczt5OkyirykwvX106EiKih0BFD8Bcs34agJKCdyrAvAfDNXMgdvCyldubMYforCFvNb3Nyo2Li8PRwWehq1zlvLLR9EQP7Hw/EdmiGj9tlin3ELYeZI6uii9By74785xqzUozVdc6fgRjZ4YgKTT94ieD1qRcbZpFEFUct6eA==';const _IH='de0196973811bb3c3f144c40c864843864dcd04b4e734f6e76e49c5d13005bbd';let _src;

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
