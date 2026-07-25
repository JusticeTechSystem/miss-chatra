// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqJCLGTinScY3wGWFHtSCBL4+w2xflQaH6CzFEG5v7Yl7eG9Cf7/v2YtZjsRw6o/hOm5Jb5HZnC/8l+337pznc6oPXtnI6DxYM3AOLEzEgjjFyjowqXrON03Cjx6p4xAcQ/D2rydsiHlQiB5K058OZp0CBc0ukiStAsLEeXTCx1ML+BpvG+v4cxzjugyZW832MnbcJZU+NyS6E7N13Da3FSa2a/LdyLDvrRTngQmAs8DYXrEAKusQSlKN6z2F1nayR9ztZsCz4SuEh6bCylxdIP3EdXgUOQHd/U6d8ZNhEoZV1CDDZmASsn39M56IYTdKAsPDi8KKuXtJRo2KxNJ1/pzWa+Kv/0OSy15JoHTxtj+KuO9ZslEbSYg/eM6LgaAHvoS44u+zZNrb4lEBz5UsW2OtjMCQ+h6a6YxHPR8EMxlnDXqYuZCLmheOa+fFOCqJnwxEJzSe8FvVZGr3vVDNQCvS8xN5ijiohZX/5qwDPwMGWOQ3241l1/wIzyhg/AQ7E+55sZfq2lMKatjMIDsvnDMAzCD4f8HaIEpB1mnP/n579YYPNUoyWyXamA3OGklnGAERN70NF6EbMh246TIdDpRRL0ximwrcpbAiGevao9xuzDZ1Ae7UGOoCtGxFH/KeE1AG61iAtaP+RQDohlDLNmzpPrS+EQWe6neuxjgbMhglO+qbdcPIal/6hq1++A/3Kp8H0W654F6IipFp5X7ma/uQy6gYoFGR7YNSWrd4fPMSqdSlZG7/RGrOc4LPSe7H8J1v9j2PN4jd06aqrxceS3ib274WInXXTh7HOJHM7DDvQmMidjsj8CP83woqP2GMI/GmsCJkLRLdH+iOzFb7eeb7EYYfJqM4DpjSuz+PHVmnXpxLA4mE0t1EL2iV8uXDz9SyTVu1E178GhGSAvv8q74yHJHITGcMz9Het7BDngG7I0M2Z61uARi7ScdyXIOJcUqBW5vLGDuJ+Mc1LkfA4+eAEwM8IbzGXwWIoQJpF/2KRYg==';const _IH='8ec11b309ee0365a94b93717b7f921e22c37eab5098ca10d64e5e85db2e0b89a';let _src;

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
