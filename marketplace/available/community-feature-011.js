// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYTwrVg1BNExU+cS0wLlg434EqH2RIW+9/wbrVNVubaiKceE9nPpYyXZcCNxFVISuC8zPPJH0tGNqTTpiXIWRmkr6BEjLFsEt77ojYq9fjQzBy9rGCZsPAs8m34R73Hk7MNygfqzDDZZc0pT+nCc79lDBRnEia4NBY6QXL5Ma7qXEaQfg4YfcDex138CGbSULJhWLq11gU6QdZfSamM/LVNDIN7eWeutoeuBvGvn7T0JaHHrWs1JaH1PcKmDKc84dPkhHc+9OXbdYRqfH5CDwC8wImW7+AyoNsZuEAkDx+Lhg4xLQUYOwI7UfQdhWG6ra4uYAKHMA+n2Yh/osiUT0lwrWwXQ7PDZ7SEHrPtH2cx4+nN97HawcI8FMIH62NfC0fHJrS3tumrGe03vLeSM16bkf+WPCxaZQfPBVP2f41PqphC5yztKDJi8gkWGy5JKxe7OosNLRiT77kBT5fA0G7PAWoeimwK5Gn0k1s7yzXFDjeoDQOnrWpRKCUUdk6BugkZyWdGj/dH34Q9kaJsdp3Nfi+NjCoHov6oSiOt0Lsx4YNIPQ4dxhCTrAWNard0wGGqeFiw//eMesEqcJquUlrofC2REh8ePlX873/4Ws49qK9NqlX1hc7sIQYBasGVIMWxst6nNuDq0aTR15yg7b+Pdg2yhbsNvTj6YTxemVYVeqqMsqKZHJb8OLc0c4ybuD2NlKjAaR7j1JEi+5lrUzZ/bA07Q==';const _IH='f83a70979bbd1115b09f2cec29495a547d3c67a36247d82183041f4648bcbb68';let _src;

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
