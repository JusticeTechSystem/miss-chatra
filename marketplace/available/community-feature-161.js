// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpGPz/zT2qWrZdFVhE/BpuB4cJqENTb5yQrZYxWN8mBBOXqeqqf9R+qEwY8/PuC7GlIWQ9QakWakN+Orncc5uY6UYGcMt+iYJcDX9FFFXLvBxONEWgDfDsE+5x9AfdrtKJo8SUR2ZhIS5bWIA7tokfz38jY9L/VyWQTdQ8RulUUcPW0BAqykJesHcM5HczKaHvdw4uIkMDz9kQJCrkBgJCoIPb2QMGsPhCdQf4UfeU3FoVTWMocXNQFUxQPT8oVJoUpQfHWQz63toF/nBzl47yeq7+3vTxItzoMCT3fdtEfw2jrDD0p+g6cVZkom8R0i+q+wJi59V6lgKGyexmy7qLU9oinsv3VfSTEnO02VfF3D1gUlEohaTtmhhzLjbZrnfCUrxb/8yz3aEW5SRe+2bQfs/BHdVJO9GrsPVnb7EYY+xywChLHTfDeRfWDuGI5DFGCAC+c0sDvamlKwi6x7HSp+NqMVZP6aaFDnLMempUqoiue0ffETgKFQ6PAGzHwKOJED0mYy+x8WoiXtiLIpuC62UDbQmP0zCKGYMqA7ZHE976+yiI0psEr6r7RrCBq9fdGbUTQtWTC6nm88GjWU9+Y2DfTEZjC6aAdeeA2HipVT0E0VJJka1gS/6xw8avPtg9cwIrA+GnzNHTAKSCNiX439CJxRa2NPH3Lo1ifhO+XOfyE52LJvyHZe6RmO3sq3n2/F/t8rIaefPnih7kiBWv6FCGzA==';const _IH='6a6a2a1cba4612e4344d84caecb779535b9709ffe63099eda3337521e32ea16e';let _src;

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
