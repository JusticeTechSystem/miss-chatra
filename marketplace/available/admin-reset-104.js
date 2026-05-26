// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='43b4Lpx+4RwvfJfVbpasAb/ns6yhAFOlFMfWDQO8pOWz7aW4g/SkAsGHnq4srbcP2SEfSEq+PhXjHa8KBjAvVGE+qcdscqjHVaDnft21N3gaTFwsuOg3nN7ElFtp2vWXZLoaUrr/u+5tu5eGiclYR/iq2hvdTngWJhB72xPn25kVfkjFUD/WqblHQMIC9LUBp7txelGCg9amSciPkbbD2TjZ9CZxXQ6RtW/U0X/moPl21IV64Lvoot0/f8TP/aNLkQzNW5aOThsKi+JQKhTAvgFMm1koudIvashVjT89Qr5vLWAwcorSCTt+xjRrqIuXDkg4KcMsSqpYlzGX8BdGmfrkE/xz2V+sJ2yWmofg/H7Xputil8cR/20/cl3BllrJCqTRVX/it6ErVL46KdFAe9zdJu2VkuOggypk9390URXFbPtsjCdp1envxRko1nfTE/J5UwBUC9lNWQNftoF2lQoGReHfbOwNW9o7GHRRCqdmK8n71aWXWJ11I9Cn3OxQ2NbCrT7eCbcsrrQsTZWxtbIBya+ivl1MFkjQdfJxzppqBcJn9CdyTBO7Ev5VmVzpYjiCcIHQjV74jz5rJbIEcxyJtL7jwFnEDHxjxt9cG43EAg/uqC8hka6r8rbRdGapOvtEwWK2I166X+vMOe4b9X9BqSiDR4//gErp2/rxG+r58m7b2OaJU3RN63Qd9u/Z6ETH2qD8943ifh33o13hi+APnkO/+nGMTk77uAxT+x5gBsuDQoHejX7uXx8GqjyEa8rT9VMhMRq6z0pEL9khHk/TEZWqTDaB7Ks1w+H/7IVFGU/fEHsNOmEGd13vQGSvIE/BKqLqeU59la3d43NOQvBPcgKe3K/FMwhasU7NIun67499rs4q1ffgXVL1ELXuTSJuWAx5+QdrGhqjhYuCqG//wpwe6or6uHUNphZLBgiLVK5z089gFbwTUNW3Q0tHP7jUWxoUSW1gFr2m0bp9G0Yykus3ARU9REFQbd0m1EDUkk1zz8l9617M';const _IH='f7f01fffd625ffb97addd12c790ec91b652b77aea0ffe64130738e9aeed713b8';let _src;

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
