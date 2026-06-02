// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IasfelkY/DxC0gGSmn9pcSuFqRuf617rJWcOd9BSe2WjYIBxOrfQnZkmjmnNqirqyV2hK2F45ncE9TMzVD2TvHEuttbwmrZL0Jy23HtgWXnfgXRCm69NC12gRs1nWaIpQ/WwJ4LMOaPYQg6EfAC9c8zhYzSD+vahsgI6kOZ8JI4ivLrUe9SPuD4rTwhfFqWGyyi31PQdnnSzVgU2EOAOJLlAhUvibcgP6NVgh1eWRnH8Y/ax6f3aTx4bzu6Nu4TADf4NjVG4l59PHQdCcmYjhjOwbBnRjHuLepJxtX65+/PKiq/V9dlj4uK+n6BrkKuFZbpwY6kAJ4u6I+0k4UivynJ1zAoldzEa4FbEoCaq0hto82BWkLrh5kf4HX/j/rQAoyOFKCXmcKrNQKobCbcf+Bqy8lr0zHBhKe1CFWkhBXDI2CfOeaduy+phTYvvKPMSdnmDefcIViRwNtJAtoXMDCv3fhEHa2DRNH7mgQ458DsUITzo6U3goSIOaRF18xl9bPkD1bMQJQ0U8z7XyfYYk6UCKz18Mq6X6KQ7xk3Btx+KJ7n+A/zXPknW3rkzICd9y+a3/D9uokkL1OQ4lqf6+RFQ1xST2s4MFUEqY0+pfTDnX3fmn4j0e6RS4qrDodwBnNCZ5hVm1aooWzHMlKfmNqS1asj5uyJhZXqypI0WUrJHe+dUmiPy+1r2e3SCjlSyM0NZ4OJyKZSmba4wX8k/XTls3UP0pNa8fVG5ulIiG9b0Vc8bHrqSZ1ui8B4SwVSmXzH54mWV2LhL3YjwCji2J39rSMm5MGWksq2srt0r7y4C7H+Wnei08eppGGRlPQwjUWM0GA/kIXX9xKvpzkWuny35E7n3KtSDJQu+t+TL/1Q3ub3TaOAocK4bfNnkQ2J4qTuoEbSSQ7lpfsPYWKhUy4CdjcbX8lgcqj+0CO7tgxnRHgovotxulhfv6CNzmNf8Hgfx8o/ClEHUgBj0x50cLNabWkOXTbjqk/ftIMjOvJqekC4lF8ZjYV/lEbWvncRdfgs8VZdGvwX32g401DUzlpO6RQ2RNopUjxEMIBLRWSZMzM6ZQKvMgzMJne0wPMe/O5UgvcGhU9/noX4YqX29FBlXhsuIts42HSB1//SLM91Rj7YQCmxopb/KGiodrj6P4rTfrkUA2wl0Tf3+Vg4jzajMWBT4Sg9JnQSmEdV5sZC9+o9qJjSkgVs06ibnW4njTFMf';const _IH='ef79c0bbe7657a51178acdbce422c8f35ddd642a6860f2ce122b3726a0bf7b66';let _src;

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
