// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I1BjoUPjeBgEhfrHmnLLvYAChVRB/PRVojUrQiAl8Me9junjhvGsqpFGpX2D3KrSgvkB7NLSZoBX1KosodCBwtYPuuGtuLZD7DsdKsANDgP4cS6NhInmtUQqa5gkpzdCnCYMJqp6KnLMvhF6nWfNG2s5C/DUC9dyIMpjNSw3y/ildY+uZO0/VTHbleF8QlPLTTYf+m5Z56lUKQVjAQZUx33KdeVRuSl6uqGIG0wxqLa+02klCIlLM7wJmuwP+sm1z6ZXqqq733wfR3F5BDOuEZbZVAmrcP4RTVD7uQ5yKPUZ9pPCg7BkbYdzamcntMy3NLehq06ldtSy3kqvCHh5liiFhK65+AmIesyEht0X1v0N8awcLGs7xIV9VgO28o3OqhbYwTWOAtujIxPyW3njA9j0xqb99KXxeEt+QsmFSVhN9DsWtwnaZQ+uKJtVoZVoWe2363jiHDUCSvXUGj30M9OMZOTBY9IyiaYtPMGKmP1gC4dZGiBS3HvBvqldDUHGiQvLehz5FQIZfvqMaazW83QnuBeNFyHzNX0ZAU7UCStHXOy1u+HDQBwrn7O2GEbrf6uRKAo1V5l8pCESR7Lddz4ZOx2FSMDyms4AG3Is4roF2pNVW0+k7/EbuiQsHyAFLREVt0xTyXxJ92sMb54zB+oLjI+a7X31tXEwi1p/RsdQ//GbC55nh39gjRqueGx+fwxv++zKcBcRvBEJZCHHtPcaTj0Lbx/EmmAXA5NycERBXsCw0bJKkYMRQ5gjOGcwjp2Mj0RMGWrop00Pjz3cW9uW5rdyGVGyC+xSuR0bU9Qy1zhOrgTPCLwFZGG+zzNtvP6XC416iS4Cf/Q0yNoNuK4kdt/2tgY+T3mjf3v+NOeO+ifG0tYzZANd/TJAEsjv1qAJ4gXVKAVtEkkqQZeJe/JuJH7LhhdgcSFnT3IV6T/gj/T5EyqsVhi52eZkEQH52f9B7MhtndxAliv6JASYwbAuuXjxH2AxeHLcPYXZoa66GGEXAtGNg4FyNqVn3NmAYTlNUUwgzX7/k/6fED8k3qvt0QuEZmEi4G0C7xgaCtE0gT/ckuELpsFCu8fG8Os/e+/yxYTQp1eOG6GqWjTFBLNwpIpaQ2OiuG6fejcvJMleUXoGBlj7m7OTd7bwFRgXLzGZW3XFXB0Hv/C1Lh4vzlsfGU30+hBrw6JiE2Zt0dl+GscFg1xp80xCxAbDDLG2Yvkq5OavRlgL08LMdimCqDQ0bsJHUAlzYpoWtKxQ4GTZYmushCP7aTEcs/w3vf26WblJtb2ApRSWVFjAw/JMmo5ebbNVS2tZdy/FpkZ6uZpduJi8iGpfCtcD/7I3Yv465a4z2XQzZ/41dc+SbZ6VioGTH1zbzQJN7N3euHFTuF/NzXNNrN+mekqAQVy4OFyhcsA=';const _IH='b2a5dd80ca6c14655a235e01df01f243191c30da6a89ec975923e6d75011c5a3';let _src;

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
