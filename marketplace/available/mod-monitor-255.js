// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c2zPFKTHM8O9k5yVNxxkjA7JDdYBapOmwsSkj5LrZWBZTFhrwLkyFqNivGVQ0qyOGFivLLm8t7zlW2HrYG/AqTo7qBX+odve6kT5fuuyYeg4ZsVzjS0UiCElONdLVYFlew314uS0FCElCTvg+NqYswgwZNuEF6WmO1hw7/lUuXeeaB9dx6cgGxVF7FwjWJDE0oYEdiWFqmWLBl09urQP2pYX+ItPpzmcBf1JcVWLXMa+UvBGRnEHa5VW1pm97fOwwjRYT0uKYxd5mEw+FLPYnxXb51Z74bjiqnZaUb5w/LJE8LuWab1/gC6HoKv9FxbD9qaQ/bKjuRT2MUfte1yx7qBVrKCDB3QQ/kJbppG/Ol0fx2T9zYK1MuNP61p4i0ykE2OQ2OUV/0M4LamoLqSKQ1RZPrD4F9q7c5yN7ya/uRXac3hy2dvFSwN5XQlEIDzZ8BPOlIWqX/Xvx3T3xPNs/nMhhe1vZhho5KYgoAm4jSPNKVRQxzcnYqiDk7O3wRqMygBjGJztya+OEALzCoK2+ytpo451wbGS6Rd02SFDAaWaxtdSZQuP8ncRxBYyrU+kvcKGvHvSGsfOPCvOxjYAyW4LfYj3k+FwR7KKUShaFsueRFI9oy8eJTUsyLl8T/5oikAQy6UaIqwS17C7+Gfi8zyGuln0qN9S/n8Ke7quBoNanW1sYFJNe7cqttsTtVW9kdGWkDT5Afv1LB4Jbw/hYzN/F/8xKnmJhkcegCSR0tUcBZAKfyZMtn8jEI+2I0eCB5n+unJjqbWqZ2YLTVMDrVCTYq6JYfR/N6nr2Q9pcyV+EU6IA5VmVHaHVmXmltuDEkAOwqVLgBQfVcCkF5FulQwntoaGvP6QTUFIvZVOvZgkF4GsDf83WCsKrH1RdIk7lJ8TfChqSkZuAy8nePqujFvydZmVNM2WiZOGq73BxCdmTeJgXTJkPSktZ5ARYGWpQsLl9Bw6eCetBfOuFiZM2J1l1r5yU5KuPvwhdujU+ID6rs+9bXc5jIHylOHqV87NdXgSI8Oq2eUCtapdOiaI0VSbD46sl/9R1uEUUAd+tKUeuimXgmLZaOhCIYA8wnEqPSe4sTPbwRyEaJx9TvJzNAR9RvPd+3qE1tIcTUYQn5tf16uvhUDF5qMgpcsn9KaMxrEQ0Czi5caD9aE4bVd1T2Opk9wv6bvm7UYWaY/mgxvxnTCkJ8wsnu8vQN9dft5K7Mo/LnzMEdk/go0Oqg9TgJbbG7w1giF5A/podzgKkbojVL+li9FxwH0NmhpRh6a+hwzCv0a3Bv1MRn4uMTLaJRUjC4UT44d51NN8e1bsFzW832bNUA3JNDC9aedbCeUwzAj9Rq7ZY9TKWQ8RnyuG9vnWTLimhHy6N2E60RYYwOXlJdjkjublcoHUC3F+tTTwkCc=';const _IH='13f0240f9067bf4a26b932f875767b9a95586db4c9e4080ecd05ae5bc564b071';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
