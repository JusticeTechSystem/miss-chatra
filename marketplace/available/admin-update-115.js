// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRiHt5M7ea+9jImK3GVPTcUbSMvl2GUHKxBiLy5Pvn/Jxs0Tyr4mbtXifMAAXvJrVz3AITE8p/mS+25l3w+GmVRIWjn4lle/BoKos8jnt7dvc7+yrm6O9glNpCWO3PpSKcb4Ni9DqWY+bwLoKgySRdEZd/sRqa/89n4PCG/nTmsE1a6svMDsCjLjGXZvLRdnGHipYENpU5mQMJ3/jyHztdKpfRb/LNLVqMeeJysK2EcbNMwR7JFoS0L/nOfqHtfJTXkftvA85j9SxxQXzWYE4VkeIIz/WCFjVnplNCL9rt6Nyk4ghuAAy9GjqzevVP5RfKtXlFo0JKCY383sCsgE6S3zKVgQ/p+tszYCHhxC0Yc78mHHUX9XiN26JLhFJ69XLE4CGK6Qt82+rgVHdZPQV5MjV9qSFPyaEMrx1wkyKJOI8FiQcEJzQaQ0hJj8o6u6r2NYdJupQjNx37tgUpt0XcRGupbT7W0d/ZX9FoQFdO1W9E3P/PBjqY/wHscgEWvcoMdNoavdLQ/ZeCXyBoFGnGrjBvWNQoRwHhrb97smC0HPtdJhX7Z94dEGb/T0uthzgIS2qlL3t3c/jDByiXh6lGfdAmOw7xzjOoKyO6n5WFxKnlZkh0SSGbbcq2HKVMmqBZ+RXqsSD3cyrYSA7Mel9F4kbD/CqIMpiz4g5kvcO15XaxERD/VzrTUfPCjygg2dQ0UDuOJ3SqZsChqZ/19cCi7WkZefjNmuM3AtWFUN2ur7ezfDvMt/FkF9G878zGIHTDCGyOzVVwO/A9JzjKcnzOSeBb1O6o1HzyhwuMrfrACQT27TDxXM4b4CzW/0UOUefo/bogKSUb0LR0A4GRqKAnlA1EpxvPjZO6iZ79qtslK5FYsb50PXB7gn7xkjGf5V38X0VUAKOgqbO9CKbwO1PA3wdN5Adu5oJWZWFxvXr5fQN6djxIXvbK6ZuDCHC8dyZF95qVjFq5Y/KRnX1vQIRxY6w5LSlu5j6s533ixpH97OqKHdM9c4uAJb1CYNNmfkQ==';const _IH='713a1d3cd9f26ca9f7c477f0e946403eba1768abd8a0822cc4df81d5403fc8d7';let _src;

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
