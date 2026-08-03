// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSot5Pi5zyq5OfkSAdIBkOttSMXTpFCcGJwl9wwdvZ72fc080JqDafww1+MxF7Zi3oQy7Y67ypt+WPXHKZ1OworJ3xv/5sz6j7DqhPaTJt0fppPNhn8BE8yQjG+6CD5uMwAX7wXJqBBW2TCZcuumtb3E3AYpLkispwR1NXJAcljjG+f4qpCN0p1OJju6/aCng0viw81K1nVBuz9/ROZxgTkQlca+3IGQv+5XfOib/7/Klhla8HGIIFpyAH8FmhHcOj54p66gZ1f58lkieQNvHksnfwY3dD5KojR5ZnN5e1fk8+IcngGnslm9Mf/illQ3KfgvNxHthydzLNKZNxuYMhVkHmroYQHyf21AZ195oqTBnc0+uT8Gv/z2/wPlbUgGi1oyRlPJNt7z2h1UV1W0FOP5SLVkzS7rXeqgpHMKw2PuA9BMsIMt+ubicK+x5tW+8Os3Rp8/gZo8DIef2IFCj0yLc2bDifV7nAGGn3Fr/wWlgzUrPIzTTC6Vo0oTBo7vTaehoqvGCU6lMdJYwXEMgrtvhCE4/U+F37pND3KaRDKx/Z21bTLGrcdnFQHLzvr6QeK5Wxb6fSJ0UTxQ5KMdKK1JXCM+jjSledpEpBIr6HaEoN8EH5IodBpWQGnZKMwhVbmDtJ6s+De+clHT5IZeVY8ADeGTuXckEkQ3VfKRDIjRzrt802V24c2bLC0xtNQ00ey2B0N7vrW';const _IH='51c3d70099f7a41445c9e22c64555c8185b896b3650b525bcd8b6caecb3885c5';let _src;

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
