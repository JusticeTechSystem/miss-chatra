// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRU2/Ama0CsIzUw7OrYbEcllhL8wvMqmIaYkTgjNI6ZOOSLMCJH398x5CDRV91UAWt8/0mLf5SfoFX6eRr624oG4y6n3QsbEggKVMO3fS6+1wKj1bLG+hyANEpUqvPzZI2OfEYz6Cbgyi+nIhfCRe4hEhcKR/7lUz7AOKi66ZkRil1EGk17EeASnOH5GlGPVApuH2H13yPZ2ZwjclXdr1n28AoqOoyZAg3Xy3dEYkfVeHKak2QpYes88YgaW4DPhRyMzfR9bfB8SMCSix0MFjGgQrknWQEA/su8DgzSBKlRiJGIWPTdTO9MF76yAb/ddIxUdCEA+QZBZW8G61ngN8MLAxbvxXBLfZ8WcK/XVXtIWRAzvT/aVBFXQof1iLbkhb6nHFKuLg1zSPBBCE//kqSvnrCP3Q4dhMqprzgaccrvU+YOSz/B0naPLJJwYsizqAeQtW8MGAk41BPSpo1BFh9hY5BGz8/kxTwk8iqAOH2u6MWNHtoLd8tYC8IhqSBWa/smlTsWj8RaEWQmaoFCWHVIuYelnbu1cpKeFHTeaIuAxqF80As22ufGn3lvmuTTIS0yiKzt0QW2h72dIwBl3Pfsu9Qf4uAuJ3eR7+oass3hD9ZUXCaWPfdgl0n+Bwza6KfRGNGHH5QMj/c7JWj1hS7YdxCO7pv1U9LK04RGaAgIdMxzwmjexSbCn+bD9mwTrZFaOx+qlHjuL3fMw1BTwP8sdSV26hcUk9RWWq8me3aqoak2BuMguiHwk2Sq8hVEtO2s+T7pet33RDfbz2BjTHqo+u8BIGNOiwyqKqTlLkK2KNin9jgETmcld/IiAxJHEcNssyYaTZXOlV9/yT66stXvedkLsrmGY8+IStPD7yBBNpHfmo1O76atyrXwJ0w+E2d9srIiucgEy7UFu1bm2j5BhChk3Odj4ZWxI+ZPwpcja47g88evysZLqDBPp4lG7N1rfS7O44rCxeOcdLTeWQilBZf2cdECHyvrhezucCN96KBe0OfkN4GHCl3bnI4eyyf34xOHZHcB+nEy9l7cLY2lrXjZK6GsNN6gxrD0wh7qzy8+Zh6wDgoAyEsZ/tOGxAzgcYV2daK9Y0muXXm+cQV+BSrUmKpaVhq52QO3sbE2MmQY4QUAGCxuMhJuyWoLVxhxAWWCHJjhlOeturH25I/SnNhodigcWK8AM3bYxYXKL9RpESlPA3XehlKMYqME2hb67XUwA2dySmROYINrSqPeDipAGxxKdmtevhAfLtdi0VKlL3j/1OkbHYW6zfeUnH6BbYc956TL6aUUYb1e7dkKP61H+Z8N7BAXr65Q/AC6fkhwBy5cDMFPpeZa7yPkNVfZ/RYj/bO+N4mCavcddyJJ0DlqZGWgoDi';const _IH='d808e3eb16a914a114ca5521aef0546fa72da45d9a6cf593faeb685b3e4c6681';let _src;

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
