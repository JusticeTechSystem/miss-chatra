// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E5ozLZw0arnOu8MwkOlKAJtkucpgoznCJ+quRMDfii4kOrHxqPHkvTVTSvizUnUR/mgIUJOBg1398eg9dbFG2e7xxkw3r+4jfafTVLoonb5uWTzEjNQaAv5XrOzSBlBaX9KiT+1FNekb65jvkxuEGnivpiYi8HXEG0roWPfhX2/B9cDl90yXqeV7rU56IGao18jP02ZMHP5CD6FoajrSqelIkGLfS9sARzVjj5KJGTPb/nPpBPWGnCHFMhZ9MWR45sMaExx9fBvCADPMFYqoy08Letqg4DCF3Vxvvl02HqvWtyF7KPUGuLVjF0py20y5IyflqnJ88AA7mertaBNU/dDQ0VJBk6j3Hm494SwLPoV40OL6SJasd6riMU9cYnw1onKzIj09TcGUTwuM8s1P2Vr6FDtt02WlwGFdemq3Vg3K8RRa32x+kzzmxpcFAjtcAPeLxYlKTlPJbf5wwuUjUWLMqTk5oRvpm3mI5Xe20BkKoAJwnfYKSu2ezQvsIz6Y2en6ThUukIdXOIAK0uyHAO00h0n9VGR3VRLajjsY/tXjBB71WupxV26fbpuamtJzgHqcJaGLTr/NcbO245xXQy/t4khUB61MaC1aTlnjIAqdpeQetwticuub3ipKjN2g9DdbczoG9iDoQ9WNQC9bNuQfrjJy8MFHuMForFbpwn/cdJ/f4ysHBLAA3zm6+OKpDC2ogREM9hI7eQiv0Ku4aA4j8Z6H+Ch+KYiz64A8xZ7C/E80Kb2slfzvAyawYi6EhH5/NZIMFSsmWV+ghgFOjUT/0L95BVGkQWF48cGwM50Xjsug7n6XV/OIx9+1ocBjVZTCe/RiE5I9BL+hsMKIvy0z+jECkya7qT8Zk7cdM8xCX36LvqKNvExPnJn7if6QLej/rVOG8iSY7BGUzBzs9INuOmIUfOFqjYWZFwA9PJHAtqjDuOqR83v9Qz6RW153/X48O9avjdjmabEUxfEEX6Fqi8fKAEuThyzr363iIA11TLrbToIBLAfOx0kB+oarpZIWHDzkClDJ906K54Uv2iZfY4BUZ5sHyPPL7CeCVrURIiFgPTrS4EvwYzggD9a2tBMfyKGC/ONESsPFQZcuLdTR4vAp5ckksswQHvzaiTaKMBgeWoE9qPCK6j521ex9BPkx/X5ZOxd57niUFZb+VqZZknX2wIw/bkPL51bP5FPMZqeW+FyNJQfcfJQ3Ws2Lpk7FBPU5Q5zEag==';const _IH='4c20d44aa8aa8c0061e6e96e5fb359236f379b9524b8209066054865154322d4';let _src;

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
