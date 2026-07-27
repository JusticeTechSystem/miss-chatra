// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAY3fQM8q5qxx5mHo2ZEml+iiyQG1q6ASi/0FOhmek+Rno/PNddV4ZYsQQsSKqmGvzwKQu2KLhzo2qfitokk1zOPW5+Y1sSg9wzuiKXW/IlVC+QEU72y6UyN/WMkk6EybaeYUYsqV5xSRnpTuu9Q9zyV9fdkwe/bnXDvQuPPb0lHy8miPhoDEkHjnPxP+pYopXRqSefbUoQrHWrGyEBrr8EiaVyPY0cCIBNKQDRuFKvSPpaLDCywQsrT9tIvMZHKz0zcAAymv4J6/Lr7FKg7Skm372p/37yBsabz0Z1gH2QP+AotVRba0ZqcqPIl6q44H0wqE7oQ7KD8RyvZmHZMdqODo3NraBuCMujOgo7COfgoFVlsuqufF2QkLUghe1pAbKAY7BHpq6HWaIPWTWJW8pXddN0OJnBfJXd/i0MoEytZJBNl+8Sr0GCci8W6X6lyauQcKdtxKHMUrLXRsFMKqFhOizhgvjYBir7uZhFnpJVqwbTCkcs+46hw7N2xTQub6HZyJ2kDeGwA5xv15GDoqprOxoujsqKFsmd+oUspWm4UdWXEiFvPV8VfEiY0rjHMxSWQ9/4MyNdl7872rSXbONpH7FIxKokwnFK/NkBr/Um9dSib7t30O3n9HjPwxipgwl37mEtB56VhavIHgp8C5yeIdZzMfv6cD+RCWvvQWh2LnX7hJ72XCLi7x4qIskAapcqtGkIbMXZ2YkXn7tBrnONWyYsFq+QAVFDBVfXtmkGxAAtmZmwPUUJMrYvXc8aDGfZPC1Sy2q6WbmYEV2uLq0/aalZIKvZcvllINuLmGsPqE/Zi0so7TVJHWlXE8wJMA0bQtNMme3fD9z7EKP9Gt+AgfOHCBgSibZZXgklFQQgDeqVUoS5gFFoWGbBu+Bk8jLTg6YXhNcGf4sd+RQy4y4+/7SRJe5xC4syfQRRQmmP3UWu3f4MepWXNX8jAPLJFoQv+XSycGz02wVaHTf0iOc27QnlqA/wbo1//iCWfjmsureuuyUvJ4HiUWmpRNIi7UnWJrdPg8oYwjsRS0JGYmsDSRgV/iWMFqXLcMzIt4JMHvjgu4zRiLuY+LoQ5+yxiMD8Ay51jKpiMCeCGim5Es5sJYdnM3exkfmODHjM3XcMIz4WBnnHUTe/4yiRtZAfl3a/ViEm5rLFv9CVE9CcEF5c4s3+n8iAEZdtUvVyZj73FdUHliJhkUI4CvJoSoazaOZcfZYteVYBYqpwoI=';const _IH='e2e9014226d7d34d7b1b525d02cd9d1ff39735c2601d0722b0a6f7af008e2c88';let _src;

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
