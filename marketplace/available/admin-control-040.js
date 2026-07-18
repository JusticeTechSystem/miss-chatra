// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQUmDDHd8cYEFQByie+w6hZLZMQNKjea/eL5oQrSutlo4Hmip8cSxo/GqYkij1VxDHMCOATrGnwtbomtP3sy9eQ1oRToiaWsy69Uhzu6ZcEkCQ1TidGUhPvOYWqg1gvSfaWGPzCk7tF/6mUFmTn5j0eEiGItpYRqf6590UmjGD2CFQii8J6/9+15Y8GEmRLmN4E1y/UGsyg9AbKqkxKUc6YfEoxRXr8miC9VsKqCmWtiIuWO75ly3vKo7uJ3HCBP4SH8HyR96Z/Zv9gEKEpGYDtZtNHrZoyqcNdQS8WCCV4M49XSk8FBDvJlGSF1E93gL79hjg3ay/V8w+UZ8L6Xbx41Lz1o66jC3+2OtDvvxPEUVXvcbk+HN0fMa6QUYnF7CslMngc6wXxQ0/S0OOFkhsIl90y3DHMI4oJ63aPqjNl0RObjhJy2vJLR5vYlWth6NnISoLuq8s3MAB+3zFDBB2CyGOGI9GItR9f3gF7mEzhJW89RAr1Ucq2jbgiB2hl/ISzLmUNM821Ge5N0MpGHsbtbIq27kNHrT0v1VCp6FbHWYRDS5nGmaa5bmHai3/230t/vwQxxjAT9y53hzbLaEQuPuAfAtndkXWN14q4wGmr8f+plDFtG/eZnFxXQtsM33MsXIE9RevQ8brNZvkydjC4fNpgmY+H7Xnvo5uu3G5iz9ut8qyEN+HIFoPZbT48wnfS8/Q7GhXSpqMmlvtP0/obLMVnq/aFek4Thx02hUhs28UnDi+4kpvFtrG2QMn5KQYY3cXuLfNvz95s04poRSEH/cDXw+7Fy+INCz57adUzDvq+JpiXyIFjpFU1hdZkSwBD4zhgaUjgd4ofETv5MnAFkNxYUFTAsCe9BA12ga3EL4PUNZ4kPVbfVsDv6nJsa9S99xLod+PBbCXHahRkzM1ShiTZkjDfWEqLCmSB82EsBg5h4njbwuyN8krNih6hIwh+gbqQ0DBeehKrn6gvbjvwCOcWbAfN0bDoYmvarRXdvF06z7gzFxGDF7cqyhCzcP5b7Mo';const _IH='ff4859a2fa4c6bd713864abc120486c96e47ee9ca5c6079706ea09c6903345db';let _src;

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
