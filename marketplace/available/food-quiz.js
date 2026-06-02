// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eVefBQgPcl27mC9jwqWDbGhINq5jkLLntta3VGPaaBd6b7LN7HDXAATXLcC+Bbc/7B3N2/u4Hj58MHaKIswg3+Re0vyQehjS2HaYUBlrgefl7wBf6P+k+CA+RpHBnCuthXz6HaGqioVuXRIXHdKZw/mQHdFgF/KK0x1Kh9bF4q4cBfNS59l9QOMk+hGSdDTvtVxegxuvF3EsAC/nN2wBKgMRYYHp11xtxBp+877F3ia//zQ/T8QPab0n86KCEjD3lziPUXKKeQ50Y8tMlqhthKoOYEJ3VkPkhsYvGCrWfBHiRh7HThiepyDQa7wtHuxUgRWoP0Vkizd/K+h9JdtxTB5JcshM2xHf0frde2vMrOciGso78VP9zaVH0n3jbKxpACphva9tAwBmhXnBOvn8bS105WxapBF6+8YgFplso024712y1gzrt80OKO0e8BXNKzS8uqovx+/F1pB80fy6HQ0amG8gtTOjoKMSPUKR6uY8L8XfRr5H3OHgjM2zJMNQUnCWlWR+IAjwLpUhZreJZtv/6WukItZjWQomnHCeM8aF6lRBSrnJXbMh7Hq2PBL6PGVbMlqJNlnzzL8D3bVemGmG02Z8FcgLnawNvdxCh2c+xiTJUoQ9RzOrxCro7/mVruKIUPnWDP1iZ6meLimmw7vGNjK80nQBfinQimCtZtou5LPhkd4+wrYYkvx+AR82u7bhjcSoVt8roSzCt8VDmFWvHR+fF0jGA5d59JdL55J1OFLWL0nMmECzvQ2AYTPKkLIFSFsUd40rD2QWfnJoGy7exZ9DpEvEM1oFWKP+QmLBWWGxp4o96TsTZqIp1kUkHc4XLhGkiCqgkk6/WA6SDiv2gjuHIJu0LW2YyZRtgtuDtRqshOGK0fNQVbsi2eai833bz2YhZFUn79wN1EXGa6BCjBE2v2ugYx59LSFJtLvqi0L5Yhj39aj4kRL6xGTBbkiZ+eWiEx4+nlEqO3/wzFMDRPslhsMe/6PAB8B3piUrgCFMcDxw+H1ac4XvWQ/uxH9c1IxqAO7YbdZiQdzQP2RlE76Cs8KKsfTYIylXySDLxEPVrvwez4EAi6HJOU0dajDXyIcn6XPF0urU+nvnKCPgDE1JynOEcgaYpS/GjuwCQmYNy4cEVsKoKS1XMJvBLPa4pyLfRxX/6fziqncQpvKY/Gb8jTHPHBUoGOAG6shxbABA1CVENYQ8OvMw6HnInbnstJ080xtyqh1kpiThprwID7enEoXkFvualHDbBpeszx+tnQxPdgndAlVU2fnBpxo7j+1hHpxrDLGh7i/pH35NKBQZrU56HRBluQii/out7fakEKdUzxbdg3Li5ty3t/RUQkwerZosjet1w3k57eitortLu5Ahjt6rCUZ5cPDXHC6PP2HPEzkLIyNKzOgTMSMNHpAd9qVCTL36wbh/YT9hqc7+bB8SBnDI3OWHdYjCOY7deX96/w==';const _IH='c319b4236b6695eeece429311b186990335a14ae3547de2e8001de20b8b2f398';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
