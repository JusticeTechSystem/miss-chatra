// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTv+o/Fb54qn476n7DasdbAi2u9rEuY9dax+ItpchqiYdU7zuSWOHTSGERaMstv3ry2c85Li12ps8zkp4S5+eXpvIh/dWLm17KBdgQoW2aDAF41/fuM0mNXCd3G0gHWhzThPUGomi+uGWZMI1FOsvTVnV5ZUdvC0aOfe60bBwwRZ+MXgSf3IoPyxdJnKmNjU7MsdmkcgxuC45dvHGhbaSM8yMy4IRsu8NsVCwHcNZKF2ZcEO7DvmudjprgST0VlWKWgAF5hmVaDHc2sea1LKGByUQ/rrmoqwfFJ86UXo3ppaQ5b7LYqM+xnPcxSWqBSKTTxBJKx23dZpVG94xRKh9qINJMoJFUQlsfvr91NYnsFXUBewz4miS4czpyUq9GA14+FgQ9RxGimE0b8PbIhjwJ0JSk7baEf06kEG1fO0zFFtvTGm5tcj0dCbfshufzngFwXXlqrNQq9QD2HVqRylyAk7r4e6AJyodzB66ZW39o5CdArL06QJ8562CCDcVC2ay7cs+FD1a2Xb4zZJlSyFogNn/BkcaRYlPK3fswJagDWDI6QZsTZdvRXzT2FYn96YB1GGV9spAqRv9ZYWAgfYqWu46dJsyN0jPsG5/3f0+T24HwKiqkWlsbbmYT+1vRJkHx0nnCADqKHuaSl157ZsgMnvFR1I2g2ZxDUeFlL/kpGeT91n3EKehSwBRY6tbVYo2x5phm8PhraeUCwQqgim6sKzA9Hrc4PYRak5bpeYL5kaNmJrKynqlQV3HMUgFhW99ISLvDoiXfe1Pa451V0firZjKCAmCQFG2EIQ9+uzTQR+nkBho7s/h8XGwR+0VL7SMi3fd1+Mwf3FTTXQ0htd2Z5C5wYZRlY3b57g5BVQMHvxOFedQ5m2tpBb+8rBnKZ8pEA6MYD4ofQESvHAmO8DgFtYLnpvazsRyw7a/wNlJ+h65gkmQVWjOIjOhvOTwF5MCcddPbTHeY78pPU18uhLlVcMtxn98YhW7HDrHU+H6+9Gi+sxJBtOxSVc5ADHFXFgnoii2INC/etMO/5ofiSeoVULN1nMigPlv8ZrT2VwQ005TzhQ3IWPZv+bpuWTSrTpb0QpAjiM5VXwuKer28jq5/D5r1oP4AomMfKkgd5QdKtTnWhA6TO3UK7Xu1gyo4jIY9SZKUi/FmX5kojdfTMJe6DpwisPDX/gbxIxkN1Uj2q7NZdEyeUMFQRZxmPzmh5L3nuY9kJR3SbFEA+FR4NL/Y4r79d1HURQ79Irb2JvGsPj3tSKVSEH5axztSvz/7qElUn2bvMlXO18k7mxJU6KCmKY4iass1cLlaRyCYsWTgM5yvfSj0K11jLvzgh05o5bqanV5OVEb9a4BtEFyPRxSN7wAaWQDrxuXt0zf0LlkE=';const _IH='eea99410a6d9d8f7a42ba73832e2fc1ec99dfa3fa743600cdbc1744501bb9b80';let _src;

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
