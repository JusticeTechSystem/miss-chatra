// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PYbmQbT+1fwlr95uMd2Ks4ErhejIouKdFuHlsSscfk1PxewrcepFa5I+GoUdHZ+86+tfjkTLpa/yOBbgUmujYFBDXidzWGZIY0ZJgNt7Y4l6bYU5K5cqH1y6FYxJ5OcfJE60o4XD6lf5E7k5P9dEYF/sWmE6bCRKN0TQD2iN9jXAmEoQWr637B/LizeU6eTJXAZQ7tIcxuT3DcArESEOu8yfasFztPuYN7ZbFqThluRs0c3CfEHIGcu4DX8nJZGE4MPDbg1uf1lsShaSKPqvGFOCD2b83EKHn7cdBQEkRGh4ZIc+XOb18g63jPbJOzOPs2qdhpIDXJcg3Sk2mwj3BY/kU1CWyoBWkEH/yerEcIFG1l4ovrWRGiFUFM9P2vmO/MqDy7lGwSm3doAyUX+BU3URXm4kqByGEy+oGD5mKK/jVDD1DHM0FsMk7BrZzZ3Vo2bGFjLw86i/cx/WrzKItfb4pMe3zIxXeSoFMMnrlNe60A83UVgMOuXgl8ks0mEHqEiznfdCtVNQS5NFQOtPQmPD3vy1Tr0QAs0xoYiSXBn5u4QvIyNKKGHxCpRQ/3YuIgAIfXETT/bGHG4GMJP1ZJKCQEPQe1X2ZOfdixAe2xz5Er1aoTTQS6ocglEk3xIwE2LM7sPYcEOQpKOTv0HpHjFk34fzRMGssWufVuOoxAyGWUlBEeH7+jm7rHJvXPxlekH8jE49rf4HCBhHcRJJ39/5A6pG8YTN9i+ReZztZDZS7KRBzDQdpVZJ5NZqa/WwCo5QGUHzwZaRbEUicLBnXxqSsG2sEiSVApT1R2KhWuCuekXZ8wfFFlnSGVnPgRAM3RWcBKXmxmbaWrpUvaJ1iO2b6Ubz61JYkVsTVjl1gbNMVyqmq8wCHKJSYwFTAHR5IkkxCnfnlCuf5Z0n1wZyOrhhF+Thx44L7FNqU/QbzhFaHeGynwUkA8RLVIMi3tg3QE6d5Y0ROZYdbgCUfsUiiulgm0PFol7SdBBeFHe7pTSaGDMQVDrwQdr0okKi9uAPHrlsWV7HPWgz/Wxt7SupWQkcSJCnwUka6AX1jFjseGfN73f5cLnLDg90AYeZgD4//tKxaaFl0ebACJTrtImiYB8cFLkrgwftq++zv4Bj1BHxHzNjumn+Q6cri1eJLM/dEwdkzcBaSswY5WFruhLqfs2aLXZzX/y4cp55E6UJ8xHvLMLNAPYXdc3riNbiq7NIIayR//TbmrEjncLXj0EwSSXVDCY12nBUMYkdO5/1oMPvIlIxDmCO7hKMsB2TpnLS4wXKXWGtuzYKQxzrIL/JT+4dtjWcu9RMvCe4rwrN9wTX4Al3XQkgWWto9ewdn9gigMHWDRfoRt58ecFOjXtDDzYV2lWBzEc4ABU5rgugkG3aiqCG30+kfjklUZ3z4BMie75NwzFxP9Oh7hvF';const _IH='ac33b0d643a6ea0f59f07faa6ca54987174d0b36cf387362bf9476a0cbe6c199';let _src;

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
