// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS18y/xuwzEwZbbmgqhymne6p1z8ECw/Ubd2suMrjr65IdPtwgukYuIzu5SNIHSmSe0Mk2GzQxhasFRC1M/6MGRvgPCDMUY+W8o+JRME2jJhRL1pXgvRESSSjPeo9qvY86FBf6fSqdKDXv3N5qlqUShRJmPbjAen0+zy3xfVt3x4vu4WcGAa33wh6jfxyV6Fzziq+Ddgm9tWkCbEIqDln1ewxjsSqQdy9Qn+Hoftm3IRt+m3eXn6qJPxW36wqrFFh4XCWE2cxw6rslRMBNW5j0V0TMbHuE9gSpO5ZHzKtWP3Wm5ZUWL0yxRUrR2xOWFv9FcUXGl2Kef8eEROl9BSpSfNswd1+Ac8dgPof9OHGZKXgd/9NQuOwhHrSDPbp+h3PANhr5lbujYX3Fqi2N6bQMAEjqn8zjh923GOzjS4yMqhwNfZ3mshrAdRE1Kr4ca+CesgOP7Po9NqZnSepjp3ZPkJaz/oQ9NgbIg1BPeoSb1gosRKQP0y3qYhnHvXu+2F5L0KQZILtHTV+8x0qhdsvURt5QzhKz3EROZjeW6bwMYr2S89//2Twq32ld6D2tFUFY2hiuzVH1/q536jRBmpSRuEjWLPVPZ6a+j5XlVAZbHxylHpAlZlB7uutSCI7Um8CwTylpku/HWW6X2Fvu+bOMWbzyfbQCFE0N91vI71HzzRUW5IgzftHAoK9x8UMs6WE4rdhmRQ24lq6f44ZYfWddo8FLpzmGQD4KA';const _IH='4f3499bd1d54491f10e2925a1f9d878e9eaba167dfbd609a2d310f3e09fa8224';let _src;

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
