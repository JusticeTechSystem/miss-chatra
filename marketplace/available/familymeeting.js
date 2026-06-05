// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='skgvipEyQuxIvyNLSbAfHw5hYrwm+lL+c030j36RhuazHnzqjlQTCRknojp1v05mmoAn2y5QazE4pvxLX2Ik8IfMI7IgfhI4v5jO6hNimN8nPY4J4zw6+rW95zs3swDnO+MGh1KHIdraGMs6vTcPEEcvIhB2NRRd7a0G1pVo47+ih7dfjOm6lCqBz5w5rW4wnU8WR9qbQBr2L80JhYh2SvHfe8E56iywdgzK0knY8YQfyOexklNAijCyx3i30O19+QQq1EokyVWXl/awXoJEAQ6DNR5wi+DoPKJ4i4qx7X7u69ie5VrAmRvXWF/kyjDdWwvkD4S8nHMA0fGjE/R3WNLutyH9M92kNsALoJXYjxjp0v7x8pbHiEoBspmlZ5IpM3UeE+cXwKF5oqp4k56opbLQCfylkRFDEjwsnpH/pI/T4qf3E/j7wFabTxXX5ZE/P5/bQcjX8BOIz0FTVybWEuvaOYAd4TD8hOB61GKo/VRvUQH59fuVXkvz2hbag1u0L0rB1DfgyMp92N6B/iTUYDf4yuhRFnEqnEn5gPt//Z5pT0KOXUTqTTNOyz+WIPXcTiG+ibKXLn69pZ801+cDok2upSrbzB90GE82RGRl+gqTl3ZuJ+cIn2I2bG1m8bK+esILH0bKR/LZ5BB14sU77++t6ek0DzQui/GueUPapWEO8YkFKXHkvtMYxKfCqHNuJv46hVR/G4UENEKwjunYxg1S5n8Bm1LKGAiHUhERS8iIHcd4ObBcIC/T7mWPMTF+sZ86p9akO90vpnvFg/TSV23+wmEiJceSy8rmt9ijdqh250lajGKcI+sfDOFM8Yr+EKZybolavxC65MpkSb5ecZcRazdu2lyykOXDxOy2gM+FJQ2xYqv+FA5/S3mUUElJtcgEaf5tRNxEiUTGdrB0J/jgOkipRrcLs/gnkOd24Agq6VF7VQttT80eICJRkCiwwC1+hxstUMR6IxQ3/QggRdrNgbdhuolmoW1BR19QZCHsEmeduxY7dUv5z8JaeFbjuXu6ob2ThG9Jqz3Q7UNkEDiLBr/wLMLjnzXwzbYFNYR1uv517sS5KKUDUhoDZCLOqLQZaMCLrvcdtUlNED1EIPJwe6Mnyu9PVXTkwHsUPJ18332tQZsBw/JXZk0ag5tzJzb9nRAEZ5WWdLKrnfh/oe9l6CR6xOz/Eym/5Go1Vr8PhpK+4/43nijt9MgxgTU3y5FsAy0M2wsfmA==';const _IH='aa7a0120eba12c1477d0cd604f374425f44f2eab645c2f8bc57b8854166a9bf6';let _src;

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
