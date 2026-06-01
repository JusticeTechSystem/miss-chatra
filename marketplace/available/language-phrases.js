// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ072URM7psLmr/GR9/3ygc+ApiyqI2dEleVVKxV7GKJjpu5ryLY1LR766TvSBomYltk+bfs8nF7/2W2oqkafYIWuuSwgz14BDVmfN2s5XMbYyTJxXZZCyzB5kH9CKb5/+JK9gqRaPg9AqtTsH+YmCGiQoR5g0VEokds7f0jgwAyVr/jlwFL8cKqD8pyycErkLNqXlRe9hEdtYuQDC5xVN8ddX19/tpx0iJhTqGhf7EzU87YYtEeLeo6t97+c83Xsby6fxXoyt4K1dwh/s7Xwzuu3Q4sR8l5jHocE7l9SnjI2lOkVKPGFNe0nd3LC413Fwvgk+4lt4njiPUk4Lk/pF+E95+sXGspfdkPmef4cc4gACT1vFaLJ2IS5tf2FJIcnkH4trkpqiA5Imlp76++QQHL2cx6f07vdUTBrplUK+yC2YKU+SAxAPmtBNz90L2vDwFnGjePx9Q8HNn7LhNnXU0gCDfbyAIKZWzjISSkyDPYIUyUaxSl8Pgml5x9YoVJukCqHnvZtKSJ1SDaGjhZeYVmlsFtBEY2EORu4RwMum+PL94DoaVo6w+Qw5UrHv5qR7a37VeByIhuoE0Z+oycaU/kv3PmmojEjUR3QETTrhjnD44pcJ73tafbq0Z8UO8T5qVRS3a/22B/QJCDhk7TJfQ6FELI+om374LL+Fs10QO3QYmxWMSItV4sTjxcsi6HHHLHhZ1cf2bnXrENLEGOCazJgXk/0/St9T8cZMB/mmZYHe4eA0htAOU1E9WRIjJpi2rbz11iQmymrOap9e1nFEuRVxm8O8Ean1r6zByX3gO/Jgc06ojjAJLtuLBTlXdq+PKW76v4HkFUozP7gyUuMSKlEWUOiR/1ep/W1IAMlBsk4/CVIRcrRo1fzqWMRrK5pCzviB0MCLgg2OF6fhrqnAdh8+3qqWPVYzql+h9o87NeT/DufSzu0mZ64IfJK5NFaXDSfJBZm0Hl7xnu15K2ZP+olYZgnpAS2BEkLrFQC/yR7j/i4O6qcB5Bhl9/JvPT1tP2JFeVfterF9l3TnPsqQ82S8hO6tyKfRhKq+fZDrYPC8NdfGmkfPxs84rzwHQFXGlzg7FWdw1jeyM4tSSshuewP5bardd3xz8RtGUerDRh1Nn86D67QbyA5PDJq3SkGbnHUnyyz0B68A0337nvIJX/1JP1wy9soaxaQ9ukq0qX6ItxosvmkrSCfqui1FrEFKK9pp5bSTr79hEg/C0T0uXkOqe5dIgjlCT3uzT3nM3NYEXuJcRZJw/zEB7v45ODkDr0TMhFo9w52+aTS7aPrOOpaeEwXdJ0eSSB3D4+QalK8ry5bfE/ztz4ard6lmalxcmKgT7XW+qVQ24/Ip15VDv2GLUrJdF8z7NwDAwHg24O3C24AyLQvRuQxF05Nhxbff6o+fS4Ra+3kves1PMXwTWwzxPioHgFAk/pblc3Vb5d0SXO1vQrgnFNcwj3tyKl/anED/UqZ+bn1sfymabwfawKxeiQGl2DMp+APASPAsjwdrqGPYmyx7q2GGhgWP1LI1KvfHCpWudq4o15RkQYmhXHiR0rlAvWVzvoL/mzcoaLLl7RCo5ru2pTZfyDy5x/TOF5vX2Y9yk4Jz30Z3mNDma/0UDGS4JO4AUZeM1SzHg==';const _IH='78f9d183890ba6a3d3c717b95920f43d8d11251bc131be6e928435ded15f8fbf';let _src;

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
