// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2os57du3lZWMqI8joyk+cRJsMu2yVXRVCG4bURtgry3vUMa25zA1q06jrd3a5KB+UcXE9rx1ZQhQBJei9gu86/srWRujsyBF72H6F0A96YEmch93AXfZ8y6l0/ax8GMR9RrnZ0opcsoI5EldlVJYGSJx4Na43W2HdbWysk1GWdMyqgDwKvqIFIBMUOn284dqmj2lBEVWkKvvbWi4pFllZeDg6zV0XrRNNOoaWANzG9q1omSM66ltYz3GzdVwHyFOsHj/r5A1a1jwjoqnvSSmFFYRJzg2wiAsvfzXVDd6wXqmAso3UsP63bNAggagI8aT9x2PTb8zYt50ektfD3HNUx/c2sCHaE6EKd/ppF7lQJIi0QjByImx1UvAF4eUvvaT0Yf10u/KbzUEnn3cQiV4E6/OQecOkRPWtwBv83zKkS/hLTlfehDz8Dk9c5nscQ8lWyl/dvaXwwxAHYxI1Oll8WepcJtPxQwuUTJppSrTW2ni0L1BUTb2suMkKfKruklTP4cZ1B0VPv1QMdv/6Y0KgkhZMD709KJnnKL7ZQ0gFpcXmaXfJkF/etGG24jmm8bH5JT+IOBgF0/m6QD1vpg5neBptQeS3ieTHGCHgmFEFul83yRRekasRSkOy8IrEnKrPbSCqTe/bVbdjhy8i/ia8ofwksE1mKy66RIsRiYG49e1jZLm8uf982Xs9n+GJTqO8ndIzRvm/9Wxk4kWxv4v62TI5WYq8v+KE7tUNbte4F93cv8FvTw==';const _IH='dd218ca31b6ecda561332e19506871b861f6a8efcff8a99331a7ad4bb0f646dc';let _src;

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
