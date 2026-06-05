// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='etQ5FAbalxBrE9c5E3Mu8rQNtcBF/8osjljt5KKVhkmCmIWxhxktIIfXA1kjAnadFlp5TpPvLHYDhcBaNDmC4hlDNO/68M4yj9CNj9BwjBJ3obt9PojD2E/wZrDm1qv1hO/mLXd/7WhTcMs2847Dontfdb9um0XRo7Z42NPqzqt945CNd7FcaE/Bta9ajTUs7aCOrGPFeQDyrjaW/PmRozOA//mqIi0zpoxICeMZDb5waM/e0Q9OJWmQ4ymjhYyoBR+u/mUmZL6q9lsIH54FNGrG85Oba7G0IL/lskrGv9t8JesGKUTr4eDtMBLdk5TAFXFIRU9qrsdvlQQpezEU+Nv2s1ai/4/nsIhFuM0ZuHfcJFsiPnisH44Zk2fLn8Do6oJAmzpxaN1owW6zDHF0C5M5e9fA0f9Q8+T3CjwyAoGvu+LdnoAiSwL2uPkjF43RnZUW4wiVkJF+0SGmGMPvRXGFCzC9jHUBMLTQj4+Ix9LkBPmPlu+M6obm3gTJtxJ3SKk5CKhNZoVnrDIrdAyMd14z3uZebs15XMLSIlTrzLvTsFfoLDT+f1HkHUH1l5PASv1XpSSNH7i/3ZIphMpWkjWKduOPA4srRWuwcMrA6AkBN0xnpNTP7+YvDwVs2POA6gJO5y8Y8rOiQs2ma8Hqjwtc1OQuYRRZFZyfQys1blTAnxlg3jIHdUK/jNRsOSWAtcx/CRkBHcdslnLsBRRsgn0xPjD7YwOly2IklRAMV3VFyrUSwflZBEfDiVlNvDgk7thKf8zZY9+wq6SICUn3wzUmOcWcgrs1f6ez9B+PikVD89TcFBidt96YCcLisMA4tMmFaCae1a8i5vGH1jT2rXqgG+ElE/9VOGH/Bo+e6I/xnsX7y13iG+xkk89H/tPEj9lYltxaAyHwFgzzYCK58ye2uffyvOTnK+1ZUeOLRSMa4sZ9HTlqg5MNkjtJPeRucYbLLC1osidCkX5oH6p4YyFn+apZLvA09e52y2zyjQp6osIWw+xmCIOTDkvdNDCuWD2X2todmFx4Dt4+GxWbeUzjTjcja09BH/Z7voguCcRjYG7VMLC/d4qGShopMAtWjfoGXN8z1Fw0Q8smnbPwv/e3/OSZgZwM+ZGfFDx7D4Z8+nrl3gvXt9KxVKUrbnOXAkoaZW1iNCXrt6cltNjF1IWpim/zsTxTBzEehSBy2mAv8KuMmZRRh/Nce7tk6ztGfEYlon+Bhs1w';const _IH='fd10fe9fae09c2a8d0f965e1cfca04ef6e463a72835329be9bc4dad5ba906cb2';let _src;

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
