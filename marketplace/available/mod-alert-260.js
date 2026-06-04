// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CQB/EkCDGyMadJuEc18lgfOl9dZrCC1MBnVQhpXJs7Qb83RdM48XqeoOQWj2MyVa2itjHp3S8cKDa08yaLayyfcKAo6LCA6HxefXb3zEJNShUo8F9LROmZI3TZUdWhnLhRnGVLbQ5Gv9wT4cVDMFFqak2qUPhkvSFiSqQdtLlZpkWSfx4NO4l0u6LXM6y/KM0tYaSy/l26l8l9A094eBpwcyQcqhEQpm/8qZ+0Nw9lO1MXt9ucyocb7ro9nMolI1h5rPeAT9nB0gwEywIiCqwqEbv0QX6CkY0nKcy3e9qjGkL2Lextzcw3FryuItChnviyHfel+E9MKmY3i/qx/KRK64uvKrdL+bQn9jHYGYX2MJJeYAqTFBBNX8F0TeIwS02jFrWYTAi+n14K+itI7CsYFoXicdnH/tKDmOhHFjLZHO1nq/LNqO3ap/J4mausewE9905jpUvVLMDesCKCn9rb9/gFO1WF75/n6PBE3JC/q1dCkY15m2a3AkTjPdD7HWUtj9DCeFwxNepP8ojgtcqZqmAimQ68hslRdgYoR7AEsO4AadzPYPSXGxi28pWM6WoEHwdAKHuC/KqkzwuM6O9EC46Met5IQlWf4FAyBKXhSY26yOqpot3zpiIzzGtKo/yelYw+DDh2NoE/vGikC7M5UVxkRgvG8Ei+5/KX7XG7fIRpGap4+KQOg4zfv2ODY9zsMd49DqRBFdfxAxsx9YBnH7jAmUfl1cAIyyHRhI99Mu1GTZGVvkTNWhHKOK/gTChZ2JC5fR35cIymmWOJXWNqyFj/Xjt0t8AB1phmeHrq8gaHK8/qNHtdABfdR0bWq8SdiSH21N1Enbj9gmcQPoyCMrNeZOR26WZkEeFxbHLlc2sjVIAIvp6/xx55LRJiBz0bUMgBODhESfXit1IgF7djFoZRiT6izVlskjqtemyJl2K3FShBp9Tt08uVkWYw96ezac9tYQ6UUs+CZoRCRANjWmtkMOu66yM4JHFqXFyaLPBrXFVafGH5qqqz375rwhIBBPNvZZ7pM8neymb12tLsqXE4nzuEBvTcfVAgEJ1WXL85ugrPptsApy5NkXF4QCr8pHmfS1CbM5t/phJ8ROH6ryJKGHAYbV3QX1BLN5yUxqwLVJN42RGChzjAbGB14T9eM/dRZNpNadG3aND/6aaUfHLSYlCwfeQuiS1BwetrbgzXpcsTH5BXnQHrjU67WA1afMd7Xg4vTnnhRBCJmj+mTtv2HD2BXFV2t1vOW/qTTHzTva9bblu28KzU6HV/Ra6mnupjbABhiRozCtKvHSXAUCOc0j6rUdJp9QmgwDk+zobS/ymMZtCy+tCpM2WrmFFisPlvxO/aPoq5ru/lIZqCGJUL+mIcaTFq58gks+';const _IH='455e906ac75a5b1ebbe6e82ead8841803d6a6a306c67ea502578669e0cdf2b87';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
