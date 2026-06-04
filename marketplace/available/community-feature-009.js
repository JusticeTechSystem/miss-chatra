// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WjFyb+BrvXSHAKAZqyq9lQPa2KWEBBEu1VLQMFKVrNByV1kUXSjXBzP8e2U3l4+DOUwilLg6O/18njRYp29quXVzEuTpyVJjYfSKMu2xM13ywKUGzsEvGRfBunDuz8ClzysMQFZUwseSEcy0ohBPioJZrp9JHrsiSQGzfDbdZpRpE0R0vJvLo38yPPk+ZgnKLgLfgfYVH7wlLcpAGtxXfvvEPUS/scqON8uweqE569Mh1yEyuo6mhFp5SJiFjhwcdvZ243XodNCXCAlOZst5PmTTn7TIaQfX/sKpa0ceHafb+7Sxz3mT3Nh1h+tAZKRpjzTPkjIbk5Gm0uzTgwa4ZBf38nfV3BqInn48IpaOOvZ7lKAjTwyYMmM0lMLv5K8krDHUPFZOWDA9yJ7ZLJktegrIk8CNruEAb2w3gxoRHUN+Le5opOMrIHIIta7TrzeZZiC1swvFmK5Y2wO/1dZ56WT0kSgA2qzUCkvd6rlxhpHhkfjpM/EeoPQY0EFAIG8+TuLGY09YauJpJ5S3M7iUNRbSAaIb7JW0ArBpWEgbbmbtQ2RsqvXZaYvYlCMCoPDsyhnXdgDpUgNWHnx7NcSwf4V0XCa5smnsjVnkCpdLpsX9QS5WIs1URoggp9xwO+z2JwwcKIFqtIjinNHKeptlBzVnKqKWScxVGSW6NQaV4cvJCrHrwW/aWNg34Y1NdOEeX1soqwqCqYem3VDZEoptVu4PdXKjaQ89ApG3cqb3vQ==';const _IH='c9c1ebe7e7b7e84d496bd7bae57306b94c312e28fc7782f5a5e2f8c8ad4604d7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
