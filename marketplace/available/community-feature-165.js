// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iw/QMbbd5mOYiXAO386axawLaEymWyQZFuCV2pvvcgiyZ8LeU5dCkRwNyoNTtYfMMeyHg4WUFglyUWIKGQhnnFXr650AmOIMwUR9wZpln0lTjNFo7wZncJ5U54ay4Jx56qu+R+vI2L1Hp7iurZv1DSY+LrwezgF6mi7IQMkiAZ5nbSh++xP4CRvId90nRw9vRUHGSKjsGjn6W1lkZo8pw9dV3MWo+g+c0Azqd7Ry1RKXZjEdL5KdTjuaSS732PxgijE/r1JZLmMDQ1LSffKmf1yIr/OKCXp4hLDJ/k2J4KgWWHWbDHsXo3jWhbKaU/BusuAfEayhiiOdK/CeWy+rLxVoQtqg061OoZ/ivEYsOcW1aWzwhsgH0gd8rp8AYbDRBrcf29I913Oc0Qa0NvoZgX2e+PUWt7elhCPmyhw58M6+wOOyombV5KkPvHBaTsM23IANDswBIm1nFxDyrzqSjdaYgCzFU9MHbAjTa4W35fq+ElNsOVb5gXLs2BUxxUQvjQ/55bT2I2vSHty/5SzvB7fFnnErwqmnTykvFKgN/ruXX46rkzMdAj02wj/QZLrOXtmUY1YscuS7YDthr+REoMGneQzrs0hTvVm+Orbm9mkd9fGdarlfu+iMiKyfOA6eMxPbtgqgRSf6xDSQHA04E7QVcTbn+3s8BLqVwwb4hzKWQjfGlN4gkpXVMSWCdsLIVF1+9FZKz9+M98uFPQhVdNKAFvGhfMZea+nlmlvfbUe8voe1AZSoJ4+P';const _IH='8097e1061fe949d7cfdf709ffbc0a55a063b7b056d9a89aeb841bda16964d13d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
