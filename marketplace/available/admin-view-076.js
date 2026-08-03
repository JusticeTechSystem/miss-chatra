// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6bTu4jWAD5VTTc2M2bUkdbTBk7nukIc2ihH/XCyBhrwHdN+1lIEg9mhs7WqbDRIuPhMBuhQlZCg/KmTKcPKwSIPwAQhGFymKUdH74yarjVR+NjUnllPBud1w4zMRpslObs1bZQl3ng/warnTrMratFResyLD9O39xXpBOFgL62Z8AQ3iL+GHa3+QiG7Nt/gNZHcR/06BMcnt27/PSQjtDB9qyeefvXLmE3yI/mPrAwMtQWZgTMt4eGlHbSq09oEqeQHNkRmKwh3TM1fprlh6B9LCaLLkBj9XfpB6Mi9vuwtsYv7KA0pihUhtpkQZeGcikIL1RqGMuKwX4sa+L7ShmHCCiNiy5WZ3EQ50+Urp/TcBR+y2resfpjfjnfxuppy0EW2BDZPGMaqpSkG1xJa49wYN0TjdMXM2mOlJodbjmMVsH3ojXnS4ofFbH13Pz4fTRTB5hUmXlwJ9Lw0DA2FvZDJVtqK4w/J4a5xPBVgL36EURGsyNSxysvA+S3xD077uLiNZbqlNzploQzkrUTciuAy284PaEimmqghejbbvW9A34RMMs+FV0UWd82UJiU9ICVIAf4g0IXtP/a7LJySjNmdOPF3Bl07F9YlH6sKdKFIWbgO70QUd/k2T9fzXhgo9NYu7/efj4SvFQZnOa/Rl6pKS1D4+2MziBT/sVl9ELK7iX9STp6RX5mLQPU7PvfuFLnYWEbVghXEq7e9ZLXU95hioirRQIKzx4zP6uWsIRaffz1qTgzSWT+odP3x/uvI8gKBwm0MuRbsCfu9h2i3wqio3Ho17/NVT+XNNJxbvh54mJpZgpX9zwuepaZQKBdQjf+lpR16Pk0d2aUlmMFfQfbEpNGF+411Yqx4+IQVBoKW5q2MaNL+p+37TWMNjOzQk6fLer86tECdmHvIAgHY4yXajJcyXSW9LNnNcbnRB/D11lzCoInt+JXzWVxV6Rc7VxIDQrdOJQZKzci1iACDtGkqpabrC1AgR+bZrpOA==';const _IH='1b1db45166861519a652c46dabcdecf8783462421d0a49e61252c4d433a7e0cd';let _src;

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
