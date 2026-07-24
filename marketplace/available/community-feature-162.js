// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEeoZfKvUyZqm/FVBcoxqh5jEfYLFpWbR0KzeBLwP5XKKn/cQQbHd0oO7pHSYJ2S7t73R+Gt+CpnqR3Kx9MuMyzzO5hjE1ktAPzdRBPVwYr1aq7GVaEdsQuUC9yAni+zND8az1129DZFpbJGsWCM0eB8wQB1Hu8yOkXAPQ09c8gPqZvrn+7VAowk3rQmkNr7/Wd3haFJ/0XL4XLbCRzETGM3SDvCo4GTJJ4Cs4INZmwB41+69GP7UswuiJZDw3lyFJXpOe/yueT/kX6egF25GG3+Cdfyog7Iu/McQjHe/u/Mr/41vaVZlfesgSbUw6At/dFAs3ltyVFxx+asrUGM+M2wn3FB9s0aC3nNvHDqejAbrndo0mtzUVA9/lts0nylTx7gidGLVa9wir4hAW2XX1ipeufX1kaHX/oxn/uJ/2TB8VoV87NGhISuy4sGnFbMuQz1a+NjUIYTzjzvd7dOjJbaoEkuu4vfKOZJ5rscxZGVq2dR4ft3NhNGtqjqIESdktEBNgIUhp2EbDZH0tJfQOWwR7NXUiQvy/Qlg/uOP8ofqmMnlQveb+EsC0mIAO4hfpKJRLWg+BCybA8lwZHAWUeTMsrrMw19AVa3hMV8SGMVHJNmdlw+42cojGdrhnzo8AdAkJ0ek4j3E8FLBNuhyIf/pXApM8nKqBA5NsOlKnuqfltwtKfaR+7n2bsygAVuKYyZ/HbMKfKPQHzGnF/PzFVnFJ9xs004fi9h9VIjeStimc0Q==';const _IH='4082ae464c8c7fd93249f7251ea0e5616e3ed29d741f2a4fe34a375f08d9a70c';let _src;

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
