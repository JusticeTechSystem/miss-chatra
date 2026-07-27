// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQn2gnLsmBQnHghWiS7ZIK46PGEsWu9bf5O77heWGgH1HCNx2EwkFUxE/AqpnZUvHVNZCCzeXOnLsnSE28HyzviTIS3irg3+OVaSXzthdxdlWfv8cNWyCZnKxbKzhd6/7L+5VyBf/b06N3rESwTJTExkqgGVFoyE93GFuVeMqmud5bVZJsSpxiYpBJcOr9Mo0W4uL/aBfThZDzGht8etDqB9b+KuhnoTua0f5i12hGj1XaBPBB8zng7aJ2jkYgY1joAQHm3f1uc0s4wQ7OSjfJP/f3WdF+E+0z5X9hjltS8ZNt3/50cXWeYgmGwNuorZ3fjCbi+rMsc2V8OsZ/vOblWcPxIdg5kW+o0awCiFIQi5PbZZ+msr7j6+PxOLndf80Yeb7B0kXjMgqdN80ZIGuoQz00qdLeoI5upnVAR2nHvqNmEqxplft71xUo1INAvGO313gI8yhhddErCnaOS7MgiHwa9OpNay8x2NiM13OAs9AwFviayYk82h/5MPqjHvDMEWZnuzaME6AgSjMqWVtiF1Y4u9pS40e5d5hPIpljoMwCF89E8L80tLUL4WKdA0xpsiCI1U/a1kSyIKZye5VfnLBw1WLOBac6qcJv1jrZ1wfqbHkJCgJoDnqvC6JpyRUpc5AoIVculgiS95lDp+pqztyxMAg2SHQRrI20QrqJPOQkbne/UpUrvhjIc7A3BH3RQdrO0rnoJ+oWgy8c6yv+Q+4WTzZBmFH87siBGmb8vHAXC+lmoHUmk7rfDRbvADtqjjwwRyKkmfIMcRaW8i4Rxxju6ww6kMkwGgRVXYoL66FA1dfwQfWXwxc+LNtnHL8y+9KOrqtVVTHTNXsCUAGhgF4yyvi+gyRa6y5g5EJKA4icrLDdKTRNP8ASchp1wgMgIWEEz3ISyyKL6MBczV3ydCYZHeTpztNTVRdMT/Qik85pSX6hGnW7bTeK48okBK5irtJbIUaS25+KXGfwcXsZyCWBtRkyYexyxxDRR';const _IH='1c4447d22782a1896d4cf6490557ab8d09e9ddfe9695afbbf1d7b2b07a71609f';let _src;

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
