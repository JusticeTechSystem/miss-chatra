// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZbLXVZYhlEBevQt3Ki7zOGQY4ppaSiBeLjs2RDcey9fQPVGWVsat5JpWbHUlbmIu6fqTJWfK6MjtvKMgN3TV05i2mcOU90XcbDGdxdDeI0X7/HPthVntJkOPn8uLD39QAOVGciEnH/BCjeGnxrRVKZX6HxZCvtSjBILASWEzTe7foX8YKTAeOP8b/8L10SNuooP997NdO64x+l3cRUoSI6GI0xc4fdSToa7Cl/LfvQVDozepPM6ssONaizPlwZ0QE7Qj6tcUpe/QZIKpOPwya6ElYuqdyAPB59M9i10S8JuXKW+K4RPPk0+cYYuk7OeqMCTiXcP+sMGmZIo11zAPeUBaJAwZgo6vicWFSAyw1lCDdCF+HC36YUB5alOa7ZLnQ6v4/9PqEGupy2Rizjgx7wc/UBWoJKB/JuveJi0eu47l4k8HPSFCCKliGwAq0zQRD7T9Bn0jJvAPp8LfVMObNcR+GkDcSRz1bkcc0k+CAFJfMOORICf3FzjyDFcucxtcVaXKDhIqrLdqSUnoBSg0Bz3AaqB/kc5fRvclL+iC+9k8uvy3LgxGRx94ViQJ9lpBoyYUW2QFynC0S+j59qhpajnaDV/ah7NG07E18I86DV9Nz99oHPCk3EEWa70DV0GVrI1YzX8qWyzEmJnuzG2uCpraiId3nSL+ay05Dj4m+dL25zRSujbrxChs9O/DX8LWR02rvn9J7Eegv5+npvDWepc0KEshrGYrg/5zBgZDLiStVXjH0SW1ey06Gt8tXwvRNJe1DFJ5yZUyJ4rNdpgvmZqOiiKctEwGAul99iCW6QdPux6vK9U8BwEkcxN1eOVMVp6lwgWfRu4ghgBteKji01s+tMqC9/M0EZ3D/zy1VVWjsOTVTJ2dOvp1VvKpccTHkCIU8Nv9lhsF8lOZf/IZO8yr+NMpSMKMXBFrsYrjxBY7fwDA9R2ywEzLh+EfuXCZT5mBcDSfbQOe5ltMGH+hI2XxpECG4H+IGlbCKMLLanteeTDvgUNvNIRCddQTJfYFNGE0wksrK5QLmQutWRBMGF01SxagNeBjHZ13ogNw/1SEMUQNwoJ0avAK0QwnvzttvlurQ6ACz05ZRuhog3zhQFX4nHTnPJtuMFoHPT4muEXVF4eU1Bm7JUBx9Xk9e3RtOq5EGpVcbw9TKJBesZ9su4kHLK6gfPcxXh7+D0mXPOFc7kndGXcQbxLj0oWTLa4QOpZhvYHRLxt6Vho+GpW/+17k/jNT/5t9vhTd94crJXR3crdbgKd0FlTyDARz7mTqy00t46nIEzVGzuxnJPhSGGlHhid/m+soGB7hnaobH4Xo/DDz5JcOBgx3kf2D3ipGD324OXgX5Gkvs3HOgcYq0CVsNJCDjFE6Xg==';const _IH='f5756ffe5356c87711463f7c1bced68b1c91182330b25e856844e46243904555';let _src;

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
