// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaEK2Drf4Ew6NIo0UZTzwF6Z37/xt2O4nG+xCW+1dWhh3WLN9UiLTCv+HBQx8fHAkqEAPIDx3uuZkzi5cG/nd/8YWdc9u2E8kPd02BJGuhPkLnBD/CtSRBkdaYvqR2Loq8t/4Kg6dWpgv3q0SH4z5hknAVeEd8qQfvHkeM8pjmTDNCAjXciMkaby6p5AUngHR1ctdY6v5DRp3hwkHZnK3glPP7GO+A+ZvoCf/ktPQGbjHPyFro31yhaufimDfZuDTk/MloqhNLVsMscsEuHRg7LJHzdDg6kWFDuznIxXHuutY+Eh5Uz1QH/quq8gFDov++7DVUZb0naAMAVLKJXVACJlN6YLVVKNweTl0AxgFqcURVkToJEfh53alOFi29d9HzgZ6czXbokrtfWrYGoEvPtANUIrAyslfFp/TR+Dv9b2kF8LWboUCM2RpRPSyiw7+/wqmTwrUwlz7+oi6kMRBDDA2QKUlZkhlK9HiTpExLa3S1qpSJqlDuXdzDGPjpkDpmA/vi+N7iwkPohcwC2Mp2FODXkHr/DBJVKPfFviBSpkaknz8qRSmLeM5gD+86w365XHVY1Csb+XclIfbDEIoLKwldQojloQAoeBkEFK9yZso/ytMwFeWT2uaocTBGvC0ZsWWWk63MB651LaK3Jkodokrc9LUBawdSXJtquj6NkGdlP99Ra6Rb2KdAxijsb+55n9N6lwxDuaJIFzACYMEwvWGfwO+t7q8cMA8RRNr28nN66jIXih1lil5kpDcfEjpjwxv7ezfOlaY0gIAHCiC+n/nzdKqlBftsp+f1dywxZnOE3jVg35BHpCUFBsyBMJNtEe0+opWmprDc/SeSMCrcQeleGIHkYgxOJV4hoqtU9ZAqbWwKVbwsqro2jrDJqqRoEfLZFm/BhCggSil73gKZvn5MoNAcpOaO74ErwMWIoaqZ6n3Kb5bhEUKOiP/GLztA4eY2yzWYVRuxNk1EWFSsszcuTT8QZ0wxdXIdVhHboxVhojNAzg==';const _IH='1461d2df9e1a280b4d821471c4813c83b167afdb53ed17a91fbe302be6be3471';let _src;

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
