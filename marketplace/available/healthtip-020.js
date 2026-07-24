// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1RWshkZe2Jx13tejmcqITC2nHSmlhcdsVikQi/bKZGX5Khe5Cyk3ee1Upqi8kTPVRDYE6Dpl5wcMFK8om+UJee+3C5EKlBCAo9AU+zgEOolk0Q4oDbh0yE7xhavmoB5QX5uH+hgno2CsYKQGnSRVqtjRdas/+XEf/AB1mSMxAM90fMrsQ0oAsvYr22kYMo6dlZVf6GAp/XXmXL07omgQcn0YaQp+Ni4i17oRbQXauUkKFPAOiq1FO763Gq1c55TveHLj13Z+OAnqsucp8WKyp0Ty3Ea4H/8ZUiqbgecoYl4+8G5idb0yTBzs7JLD8ybKAofYl0Q5e8j72eRkhgZCGYLG+heDUPRznNLI6POi+cVjPzYJCTaz4HFCGzpBkXX+wG+HrQrHxi6CcaMf5VLHXhw220ReUXZFVIelH0NYqJ705SCEEKeeI2uNSZmC9crYNVqymF+bmaRjFvDJDhSxSDhjAeeh5DVhlqOxswC3uo3GH5Q1c5y5/gHh+dwnKgLfaXCjErJlbiOxnsLGHOm77VeWyTXqhA/lbaPVTNaZU8BwvJgDNVjZ+9xoE/O3N2Qoxxcnx5ynBqgBmL7r1L4MUCuuipS6LJvxNqmMNsZrZpchMp7+g1MwNZK7wLqCqIwm39aDpJqxnvWVOSekU0AHCwxWmgsRc+3i/GDBmcMFcnCrgrJ6L/Ak45Yh5F2EIYjNcy7pnVbYnBtBiD9C/qDwTwnVHsW3GdqGfKSfBP3TFc8dFs3Vz+dTGgJZtd9/2l3Th46TS537mB+R1bUr4xae+asO2F/VBHonC5r7Ugn3TpeSWoE8RXCqpruEHWKJJFYWU419M97eeTHSsDw/po0jfPfeXx4gTSzQnO0+zxrk4UPv0Jrin+y2iGe20loOAI+p/S6S+oBuGZCQR367opfEJorpbsd15UthHN8oGd839ivarlizPNmITuK1VPw==';const _IH='28bc4ec5c0c13b6638330c13c3956e1057cb0010eee6d1ff2fee50c1e75eb38b';let _src;

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
