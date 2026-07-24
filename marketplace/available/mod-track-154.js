// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQx6ast+KYV5OYSAMhbWdJ1SaBL4C6zmLMmP2/2zliOXE83Cr8P609GlrJA/X9PdvdF7jHkJmgDwCJmSQw79IgNauQbo481/ScBVoBrUdi2SY2WeUo0DKy+Ng2rQRz11hX+TCZ1N2M3MOf8Hvqws5eys7tatihBp9aHx96CV7BxLdAnF3k7pudCc47i4RQqoavkokfVwPTfECGsWWu4mcNk1VkDPasXb/kLB9FjDZis2/uJYxFf9RZaBmwtKlzILKXDuDZrJCMBTJmIJ7NieEzzHOdXIFjb5P6uJkSpjdWp1HoY5DnL9J2paCPTCtwGcwrPzKgvxagtlMRCUjahCJFZxdtTYr4iX2SM2lPpTwY/2VZuekF7+QEov8Sz1u8LENlJvY1mMXLoSAx8ecVtY9HMLQwLlFYKyYZOQP1GNqjPFmiqx2aQFQijpWZQd8eMt1LjUHr5TJl6kDBmv3SXSxVNnlTWIR4w/ACaNqBuZdjutf9/DFuI4VLIt4vq4HmQ6Kzgu9ixZ1sCj+ZhIWU05x329lSBr7aNGSBXDWZP0awt8euuIim/k6AM8VsdXg/M+w7/mrSRtkyLFg/f0dh3UlLaAojchjw4PRqtT6pV8qhgy3gxs0/Y9ODbhqJhzDQCcQCb8OPDu3/MUApRCKHF4OZeCi608aufiBs9BTpP6MLCNyQ6nqt+ANCiVthU3fLyNqLQWFOWvJxYTi4j5cw9oA85ZP+iDIrLWGs3NcNxGB13ychqF33Rpw7vvYcCjpvXSg1NDaaBqGpoMOHKy0ND9Lgd1w+Se5e9CA62N/qpcEAguLT6AZyxMbRrHFeNOEyFQxIA0vJMaEEvfe/tewd3Ib/Q0knsK63ilcR9GAKzNwAHD6VSrpHnHWTuddZht7Bzcp17vJCAQDoyZrA9mbrcKTGg8uoYFi8sUENDN7aj8Ro7KXhMKmn6btnU8ZRa2RwpKpOpPQ47yq3IVB0p+5QwsjV1MBxLfbdGqu0z7Pb0QOpCeA5ifrBKQvEXgYz9TMQdtK00Jq/qUiLJy8y9Y+7E3KS9G8X8oRM6sGXeLzJ3/d/PGM4hCW7LYuNjN36sUR8vkpP9Hyp+VOBm7BROvqYliZc8iZUOxaYoJTBdLb1AHvBKaye8Qu+7TV/ojNIf0fyTrZF1o7ZbIPGn799gfIs/LEwVTb4msFRki9GyLWaFn3GCfVLRviK93aoWiFBs3ZKjwyrcti5MPlUmQgjNKQpj+UyjzZDUiX/pobtEjw/TnAVidKZdEuzo9CbELe7J40CYhvKyIdJBoVd3/Cuq3qZp83ZZGHmhG4dlwiS6bjqUhWBjLRNVyXt3EojkSu+t99GNSLwA/WoaWGmANf1JO2gzUS8PZUtRXzNP2FuncVJEMa4=';const _IH='1a7e0555248e2314640afbb9032416bba9e31ed0a0ebf23eeef2ef6f6be5b98c';let _src;

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
