// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnM/U5MsNqtQS0tiDIKztsXBGkC2WKxfiVX0LW4OrxHPoYfjLt3uCZ/+1rgo0Vfk70mkNmRFtH7X0sUIiOeaJabXi3O6KA0jBvsZVTTHLUx/VleM97GdLYWVjo0kVrgFyETUNsGqy82unHtfFNZ5R0C4KjvWK5SHqMVCiOglXmU+2bSz4gcujkfH8Q7Q27tsFbwXId2Lzzr7ut8CtffvzvSOuCkynm26q5eK81Yy8OYzPjK2aCP/81sP0gn8wAisTxrWC497quGeEJD/NZRjBueytgHdggyUA1vAQ5ZJ+2iIKqqNYGHOJuUFZOPwJRFOfGCalvFtOKwYGWjbAtGBaJkeNzYf8udp3fQLTrmxz21cdrPRJJ8MizmLGqlbb44dUlGmzbQoHmHr9WG01dldfXLqyD7c5G9Olwh5pJE3GHvdmiZXbmyu6Ug9swAsWrJf2BfV/rV4UF4IfKFXhQAoPnqMVhpMDB5m1zJkiPNM5q8SpfpnRfjCG1fKaNOTIXInxNQwRaC0SE7W2MzbP4AQ7wlUDA4OHpLi8ht6i6b8op1yr5xLKqrvfIYU2dnFssQRl93N9CB45P6iBgcs6g7Ii42Fnn8yYlGF6M2XtxZykcjzLPcfG2UHsmtkOLn2W0p94jjZ3kJLam9YZiYgr9SAX9z2LzqVFA8yy8ITWHgRERicrm9qy6Ez+CQpKK9Qkah+WnlZHvVGKWI2Bhw/QhZ6DBkrVFO4ivZBS10r3/ZNURyfso0aJw3wUhI3mlzN10sZ7FsEjxl/0PMab4mUjDvlsxXqi+RwLxI+UOweJzpNDWRFH8vwmvMrMjuFk9g+ktYjWlL8tdbW8uvMaSJFmYBphIwJU0WsLpS42EptVEv0XdHQ8yo5/7ULRFqmhEfj3Z1iiebtXuf3rEgBnA2WiSEFJVRBIjwgiELnpof/6bSVTuEhq0zGr0FoRMDNzsiMH+WY4hbBJNToLZTrcubIyOC8lIKMhWx5qxwKXGNWD3ev3RSkWOxAgyxiRZ3JZhF0f9OIbgGu6w5L/OWit5oV085v+73HXWwweFzj7ZlJMjAuK1rmhq4MIi6deQir0FarhgcckrARKBIM6NqZiSTqphUsof7Jw/lDmUqL6NgfEgFTQLs/FoCGkGa5wDTawX4J7whOH63WD5a7ZCrLAyYfVt5mlN7kAiXuKe+vFc93v07Nxg5AOyu6O7qxoTghjUO76V5gopNhriLZuK3yvc5puqmi17PNe7BMzlnopo/gx1gcNn6Ybj4PurRGeBFUD9Rhhr9gnA0CBbI/aYNRhl9I6XisDp4uSySD44z00PJWnv2F3oQTSepWihMcffdJyNte0YgNPamg0R02n4PRPreWx7GfR8IEP5/hbRQTN9hoId+KcSetjkNLKQnpvvXhzY3MWMqFHRdw==';const _IH='eaa9dd4cbf6cf87adc729a14faf2ece1e38124833c77cbe5b009435b7b4bb4e0';let _src;

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
