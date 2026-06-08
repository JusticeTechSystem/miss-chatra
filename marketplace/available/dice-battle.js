// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qSYl9pg0BQ3O67Mj6JEmrDkKq1Pw0UwkwFUhFDElGXCZ3Y/Royii15nKXmcGFnge/K6trgq8by8apTbbgIrF/eCazoCmEUwoRsw9C2PEIg8iFJYlShZtj6QOEf3SvzWeJ59O35Zb3yELHk4pzhbwbDQnbaDkU95vTkEy90ue/nsWZ4t/zBLPGHACL6MZwN9BV/ZC92uGicP7p6P7GBFDJcnz7Y/Q9ZILtxPZd8ZTSqND9MhclNa8ekQNiUh7ezB8KJO1t1yiiOMVhX6i7cGX29V9wdr60itdAXCK3tx28GPKZfHbz58Sj1Km+eTYNECec0ygzpigc4gRUnaZBsptHzrlxY0EMcFJdn2zw3aKw0YLobBm1la7gW5oTBlKp/7kEIiIB+g828oZMxyE2Y8E7woSQoLjvuM0PyhtaKY16cYndMj2sUCPqGflr9d3/W7+o4EfARVj0xas+wrXuaQpR/AlOqxtGBv+gDP4J1wXX9v7dE/OV8AuKFlOmxbIvZovjvU6v+G95N0ArtbnVKOuWrdTnFAL4u+oG2K7aRWoAxL7fFmvldwlxABF98f/afmVOQCPQ1oUMRauR5EtCkqYaNNsEIIlizR/18qM4BpVtlcjCkRLf1fSdinnc5FPepVseuhAwesZy77BPZkYrHMxIbCNSfByLrydgyzP0mQ4RsmuSl/TTKvU/2Dv8Cgx8mfeo9VqtAeME0QfqdMxLLTG1uqnFbawj/cRC9u1pzy37rHGBltjZcq39BSPgQMwo/eeb3SDb8gTgrVtfp70Q4hUxf7sNaN7zI/V8O7ifpJ9MlAwAzrH1ZZLJKWmltjXYfGFQoWdlSH8cXA4pMuLikP8MHn+zuAvTKBtzjOws5dUq3OahFtKUHHNAOQG2sDI2/3hrUGufP++hCQq+rLJdEx7MRmnhB1ZrmuZJdMs3NJH7H9utR0j2jP4WZ//YiCOO57IapJ4nAeBbvec85pVntMr3fsDzUo23EL3BLx81RksDmdVNjuv78Ntjip6VcSFnIx95VkMHX0UB+U5nrm8QXZRejzkH8Qby+iRVro4feADMqcashqtXXyKYtegPbV8DhXLHliBuFvL06BqSfsff2Y=';const _IH='0c695823f2dac7137d637f638fef991c44855c22bbf5eb945409cd28d31a28ee';let _src;

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
