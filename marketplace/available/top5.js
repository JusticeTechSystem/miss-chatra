// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwsEous9FSD8xATWMza4H8YiT1fsoG0fje87T3xNrj0oFWLDZor9qvlDsLtdNna4gItbCNuUw5Bc1r5VOqB86hy8El4VD1oH3KUXYlb6n7uzF5oUD5unz4QF+Bu75xTZw8Z8za9Jwvi+dJImDaP19zouJf4k8nZlyz9M0D79gzspWy0lsCkQgw9DTQkWluYfqiEQHpoP/eI4EEPeo8Tp9oAoqyMM/yn9XZE08M9MD6kABTfSUhutHm6gyV+jqiU31RKwUGyJWLH+JgJrRrsTmkw3mKkW8tnnMM9po5gT71NfDPZ6aUEXJQ3bOBgFPvoxvTaKYRsoyrXVo4KZX6nCcSJ3xvpvMqrmu1KMY/SFXWenJawS9ZhlooPsxvBtbp4vuldhfOzNhus+CNyhoNr4kybSWjh8JkbRu06t+FLqWC6ALSeqMS7D4Y3zQ60g8ZdK2vyzpO8Trm++rZxKg2AvOWte6ica/IPgPOqLZuFN2yzrluCkrrHTnzNs2pdKEk5zIqr6uVrD0Fls/UqEi7opUh28+4hk/83NziDrYNcLtSpjYX1+LZdXuSapUJczOzz9pnYKZN7Z5rdx1QksJ4rTcsbFsV/XMAPCN4NTibUm0ErHGTeSuqXTEyHh5MYt2aZlR+kl8wxVijwF/GKm/gakvZasj/BFmaayMuawZg7FrS8LTAkAfUmQVNzYovmwq60ialLHd+LBWhNQsCRLVhq3ObMwmBofIlCfLTuYIYI5gMCiHEcA6WIRSTpgR0d1wDNogsCH4PrtyN3B/+hBxg57+ODYwkmLhhopLYi2yT7xTewNJvdtfbvfTIOiLEkQox3qpj37JFMKuTR4Zn94W/5nFJETFKZIcpzoWenJYDI8ayxOy+nClK9nhjv3ENq+L0I2K5p9mnU2azt4eSMEAbiJd8H2PS3WX4zPkV3HTeVZsw/8LJPtEq41tajtyRsH9cQQBn9pVn0T8m9r+dj1I7iRj9j8fx0zjdaO92g8q6nHAvExJoN1rj5YGhWmvatoFZ1nHcdeMM0qHI62d7cdHBjGzNw5ZC4BORDg4heHF+iEj/fRvFpJuu3LkIsfkVfzMivFf5ZiUMv1v6kLDyMo71v0/XqTNkIumhUoIO/T8rcGI3Q57reiA7iwh4sTsbsmuxajOhbsuR9BtoywiKP0tDWz/C/a72Gy5hZt0JkESRDTgIfvE3pbrn';const _IH='dd9f945595f75daf33ff614d46dd06f437a4f87690a198b654d61999524d65c0';let _src;

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
