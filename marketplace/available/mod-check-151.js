// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='piC7wm/VCVeNHAvHmFknv+0PWGFAriVspnYK1e2UEsNYLigdo7an8Y3rCi+SK7jyl0rgWKX5pttQBYUT5Z5QI4efvePgEqVc4JYRmkjt5upQsYN1il4lP3mPJ+mpMTKKdqMw8Cu649l+O6rdfcE0tn50qO/exrAyo5l8iD88/rNZ09m/R001L0xsJk/Wc0yAeJLoWZw3q+DkiNaH8prVvWQtnP7kdrx3un0c+vj0E57P/vYqEo1/KCfV8jMYOY5pLiAGfqZUvZEUkuNJFkc0WPODJkCBkzq4gNUsyPpKD0Euy6DCtZdnv/yzbzJSZ1jiDC+H+E/sctbeqmfxl8VDYO/dPbZQWic9MB2diydMNxCw+BEjUP5L5f5kVTEMWhtmpEw59vqoUmP+ln2Nupyz7xswMFFlAnaM03bRZ5yrUYKdrJeNYOxu9QtLHwYLaj1irLDNoYIVJoMVt+Iw1ZZZJ7O4DWdyO51TPo5B/I1RpRLSuBebUTDFToHTtrFBnPPtQdVE66qSB8Vvg55rtud5W9SEUZx4hm7btbbEhmBJbGn5AgkhpeboAVxt0zCxr14QSx+EP2rq8q1xI0RzQmPStwXbhQjAsF0WO3oRoS8M8NinxquIkzmPX1lavnj2LRb/HxOG6RbJarxZpuJzI4LhYh2zxjWtJuDj7DAGD/25j+Q1n7tGwwcCIXbNJ8ZFBV7VKRwv5STG/clKslClSWkIdsnR0M/OgVdjJLhTvCe2FgIk0Cd0EBxf/6koYXMeedSGdZgTXRTUn0cPa49r8R9x9u08XiHooip2PtJHX4u9pasSj5C0tMKEuaziMMGziI7WeZ5WgrMiMUQJr7GSfdyuYoFcfgv34uKVMpoQCQN7vXg2egsuYwbBib074XCiLp66u8oH2itXP8vHvHfxFuolwGNK0DWGbHArTZkUDsEa6PuhfqBFpi+A6Go2yuqhqQ5lBJdujzboai1c3ol4m4oJtFypVVIXp2n6iAXfBPDQl0kY/59xeA5lmueu1/LrLwHmq6aJdYZwRLOVaGaOzlNGxQGQqqa2ZCf9/IR6MWYRt1z6OxRpTgjWGSGFv5Fl9maVyWcF4tly7G/Rq4rX9wKyyMjJCzUivZSAhu5HWPU7SUTTDDM+ZuyjNXhzDhIm0rkhjwCXAVfVLp3soOsoh6+MfBL/w6d01cnoemtYZmeVRodJu/QH8wnSK6caFMcXxQSvTRrARkebSd1sHkmhJM4LMhB6ZEBplfaBDLFJ8TDC9ysmeSiiyolyPkG8qSJP97mUNn2KWjqewyIyZ28bk6LKDcp0r+atdPDtwDr5X2mZ7n9sw4ySwguPRb5zLIYubLRyAlxCCKPLNlVBB0diKRKFhQtfF2I9+LpjW4WNRc3+';const _IH='109f6b01b0d1d6597835198c0de40c528c7f6ee45359188c1780f14b6708b537';let _src;

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
