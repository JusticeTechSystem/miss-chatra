// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rElBb6iwLVM3D6qzQ0yg90S4hmE1QktpQPv1z+HCGmcZKJ+WntE3FdQGI4OdZ7eb5gXlNJbYZ6jvZK/c87wxYanwUNwN7e3CCfrl1UnpEb+w4SFeBGdTpH47WrjbH+DePKACn6rLRajjzQVg6MStp8xEQXsJZjPnFMhxmfxWJJxccpFR9LgYyiDEeJ24kGfr5b7dPraOajsyqiO25ImVW9LH2XCOPz+YbjcqQvFoHAGeEYiKkZpHcYCdeOS4NA79MBwVX2vIKcavfJg84iYa/sO6xxmI3jqZylDkVL3/09lNofwzTA5KzLFpVhHYpIH2ZviYC58lWEiaFGmcCO6KAtt3YzFkkdp7hSWAdb6P1sEKKXiYvipN5Tn+pqPXSnrHI776mX177aVkW0dnmLqfKRncHatKZ2MazNXRLlbaXc68JjWawjEWXKHVTCKQX1MYLWC+Yf76DWmdwNVX2zK7ZT8hJzHX3e+MjagqkOi4VTWc6duIFvYgpn6mCUqnW68Ds7TXBt6g9msodaThPmYCQMUGTUvh9cf46lUU2dW5jHvTGBWGDVzx56t0sj2O/DznpVgPFbQQTeHlSBlvuebob9Qj7zX4ks80Sxejd8O2TFunPZ1QJ37MwB3aPD5B0uFf264p4rBfmc43reFMX4zD866ax0j06TGCZ29eAP3wjDIQeHIdnNVg3H7XOf/GZXgDDiAaQ2nIqypaNvf7F9O8IDj21hHh/g2e0Z2+hrMIat/tENJToG5Kc1zWVeaSBtbCUiSNe+HxoQ0HACKOFMDL70YJEBEZ4TXm/dvEYrMoTnfbnZrjhp0ToR/qkYBwfDjoh5bnd0IjtielSkGwaYQ5+39wjnEkAqyTuW7Gp9/Hntp6lFw+cjz23wWkdGqKnTta39J4EETdLiUfvyF0Yc+RhDEkelQxrGMyJos/5AuAMyCUF9RtYiOSq4f5uy8hwolvNnlBzjJgA7GKu3MwoBZJi1XcOUjUveMPtXslHAMNUV2vNKjiwU/EL8TcI3/1po5BsBYR6+uuRU4ObXxxijEAYHNEDK7Rqhv91com0ptRF7LZZquVrwqt9DaoBBmpFaT4KnnQC17DLAjsNZeNXagPcVpDpfcqxZSUcZDusRA9wM/9GorjDo2eQhYSN4VDPPpCZ/y+9YmiVlO9443P701/IZpoZRooXfVhB3E3f3y9GkqN1FTWqO7/QzUochEBIFQAPw==';const _IH='d0e25e325d63ee43f8904821795ad062ddfb6e2218a6e9ed276837060fcf2171';let _src;

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
