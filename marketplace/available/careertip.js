// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxDiSPQWTmKmxAUX1R2EhHf1PLfd/HP2/4AFUjT8gPX/jAr61Mdz7jy1MBHbSgt/cvAKzf57596ElM7bMKqNYeJDsgUFvwSa2ckEE64KmBK6yFUTI8WYj5VNekyjeP0mEjGwlEWLpHVHHAeKoc6bxr0eTYzV9A2+iM9GrjLiLKdii/eZVVC1e4sFNgJ8PhjSsXK9nAudmq0y/X/+/5C1pXn+cvN4xYTQ014hK8kLoMq/Osm2shCcsSNrIuxBqPlbTGE4LRfyfq1isGtQMIWYlSiZCDXgbh4iceJb0eZ6aPix+PVka8aznE/gbZsIq9i8hAA42R1UZOPtmBdnHC/ixpklhSbywGj03bRCyUxk5rx35VDYjrLiYTxXdZcpqnONlc9wvDnUygNKtqgTJpQi0PvrUEWhUPdCjglDA3p64jWqdh7KT+b9+cPudk/hyZxbvxJnEvw9LDjA8IHREYxTLmYEe1yQIl9xijpkNPsJVK3NYOv/0fbdYbHd7y73vZ0N1EQcBp7MKPWkK5EkSVKkL7amDyrnpZ6oGw041NyZczXBLBTNfzWQD85KRzn8Ps+KOvykPA3sxsgcGJ+TQpNtdudlsBW/JBy/z72J/vjAS9PTP4CNHw7fokeQeynIAIeXb+OKVantXiYIUFOJ5q4dSmDNirJwkbH1+MreZCWvrlCzdNfRUn/NE6gBsC9OBPeJw1YIICti1B/JQ8jtRAIRL2Mow75+5UDcQjAIJuXv61tRcvD69EhayVp2t5y07e/gOkH5NT/eau+XyrwZ62Rkg6vz22JVlIPG4CpF4FF9o1wxMBTKn/ECR81I7IBcR9zJFEr6YPO9JRy9FsQntBjMOMVuLFCaCD+UiKtkMSrDWLZYnd2YIp2cpLWE/WKL6xzG3+LE/H0eL9hjMk/JNAlnGuL4VOSPK2AsK1OZvZqf8BESwdrxygq6d+IDz9WymbVfRwDEGbooRmf14s7H8g+oIycnV96LbHfXeJawdz5mIulFubhhEVggwGmkvRWViIYrm0MfXBVRa24Gnh8XpDzdJ/Dk3TP0IwthbH7MK30duWTfSX/+KEsdRHeAr4fUQdMRdt1qrdUkqcp1GInvE2yKGeoh6oyWbWuV/OukVhr9b09zUSagPvnsjJd/ZHCPesVsG4/VDOxOkwygtIz+Da7Fl5TOfUn0BDBB3SVuW05mcBjsjvkMTX6Xyr5YK5RAJaFu/Io1PmEvu82A==';const _IH='a87359853ade33f9169809ccc2d5f3d9b369d03e807415c50f541dab31f9b640';let _src;

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
