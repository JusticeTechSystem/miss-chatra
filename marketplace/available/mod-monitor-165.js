// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6T0MNs2S31OjebZ1t2ccaFUursK1bbgzxERQPp1Vm5LR9UD7634ZaXVmT5dFrLWomPdNxitnEBWyTOp8a/2oyWRb8CqlHOfXLdMOKTb0u/poSA4e+sLxvGILDuFpoHBgiDu+nLt3XxCmGPcCBmX/dgxdB0ymOHAfsiq7kvJ04vN3ARbOKjmmkXF4iqy5qB05K7HvxoUm3yoN9oUMYyio6P+bhXRt036fe0A7ie+yZ/M6Bvh0dO4dfL4Axg02jt3Q7nrz/WsSjkQgLDy7LRYKKOnnwZKcfucIJ09+xCrxPZSXY3rGg8yWjlhiwLp2LBXHC3oW0SplVGH8w8OzvhE8wL92r1CcgzVX/O7EgNSGp8s7exLWgf0G5Ku1JynzlNRJDb/xbQx/ShYwzTxpE8DZANGhBvHP+6P4V1gqQ7UcSJH1T4iO4qEG9vfg/YttO4pxgOyPopYCWZ+hjVzLe/G21oYauCM3pPBomylA1xrWch5NYiNbczWRhE3speT37NlwzsnuROzLem4PyN8/nquk/PU+dAcnymx9XpqYfNZ68nJ7eZFhHqpnNL32C6M0nfpuzofz1rO6qtorheXfH+qFRbRmCiInO8BU7W2IpRW2L6RE7yoPI6rbrKCfKN0gJHnZQTeR5RuNEUHX/mIvnrXcIa0Dn/iKeMiwaq5K7VMtk1L7OspIozGbMZ9j1ScG/DBua5nxX2GMV0tRcoPo3dPFL8ixBFgMWAbk/O45nV9KVmE2E5qMG9mfqVio0AcYKQhE9VmXNpc+T3L5tsDPy93ydyp0ZUg+/1ohjgCK/kKQNOYhxgilqHss60jwjveUhWSKfTKIN+WeWee1Z6/OMpR2oOBfWL7I+XYykq2Qe9pmBHK07PlKMSjczSUkVz/9DSKNdUVIu7pv8sfPybrXGjS6v1K0HUUIQfgRkae7X7SQysgWHptRkh8cC9RKXsqUt4rXt6VW3nPABqQs4y1t3+27zgWSgLtrB9RYD1nUImRrxnVzWvT8vADPUvOd+1sxjvGyHmY9ki+VssKYMgwfjerxn3z+XdqFl5VbKDXMNNftUvsuGkaLsW2Ta5D9M1NWqAyES/dnpRpYB0ZL2TGP79cTd9QzoLrXwzTh+4wYZ8IqTnW4DapBLMQu5lCp07uRl120kQXLQKgvKRuTJ+NDG46ZsCAwg8v8mjnx0mho9cbEBOSyqsdresBdz1UqB0nSbVQWNmvtqr9CD0BE4nELpU8k9A25Crbxaf4oznyFioC8XdH2utdOB3DCzo5RSucThD+ZOdgUoL+GghNk+6dNr4VSVn9HmbEm3Jl6wG+uGf6B4rTBZuPqfpJYjEBpytsiq6kas5sonXWysMjmUQKIg36xKkpmyOYVznsioZ7DVsFfy1U8I5hx7DLS3f3a4vGdsMoUGOX';const _IH='f20b9633523514ccf3b70cbebc71dfe31c7040503f2c420a5ec2980bb24d3a0d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
