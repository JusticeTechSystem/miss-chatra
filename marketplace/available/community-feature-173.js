// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwSYh8n3ZIGRDLnna8nzvvOzY0vDIkgfgpOmdzHc5wJGtAVfKTE4t44xKJaaPnPzDjQl2MTgems/E3ubt3mOzXgalP7wKqPTHrkFPrel/XtLZVBpFyalrY8EqitZ5P/FZBe58O7qQvKX4HB2nEtI3SzJ2R+WrmKy1tOFmwqYCynINivu4K1HZNkh/5hjl0eofGOvx3K8S1SUvX5gZUmdWLyO7qsvNQZoSOQfjbd87+Bfxxz6pigD05KUbZhsh6pp72v3W//oFhYmhcAXB0PzDqCsgBM2CykXeVKG31adWZt0KIwvb2zfywZzFjBn4/nfP7taQ0yEWlvQmON10RTm2RhsPPEx0ruXp51gxz9FLWe3vpnJdHKY4+1rzGzmGmkAK+aDbOmhPFQxurkITAoddMJacAvXlxgXGUCqqDwcSK6eLC6qbrCGeR2qC5vcSomn6EtA5l/kdCZotAr+GJkHr7NzMl1ml5Es4t4dXfRC5+cN40D6mdUzVq/qk3oEr0Reb5e0RdfUls3d92DoSw6SCrc66wFC9sPF7JtchtLeavfqxaI/hv5aia9BqQ8UZRapoQfo3yAdtm2r660kXMzgJ4sOahGqFROGpS2kRoUT1orqbDbLk56BwIUmtEvCcdcLnfTM1yqIk18ZipnVSZPSz4560lNtS9b5u0WRfi4b2PBJxJ18qqwESCgTMo/Kf7Lh47ZkMXs4FQIuXHJFaZ4NHfIkZHnifuAnG2cdmNc4';const _IH='724f05bd23253d0723311dfc33d9b509c57c1aea8ca669a3d0c33483bba83e6d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
