// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hfJf8NfpyDAZ/cjeEVkwxWAe23KXkSmPNg/oy1833oHYrD1TAl8E536gQZoFk6g0l8P8wAreUxYMi9J8PbD4ekt4/gIFidD2ezW7yvnne5804S1LGUsrgdgTz/SAbIY92Pow/3uDSnKtYVSlQ5uKty1j0bT0zQdbUrJeerDypJutvCx5uYxZfT6KD/papY6lvJ/5DCLRLo0aUOJYLpur5j3tBWxKih5/Tu+bRVUf+tvK5yoOplKzTmRznzTysEuWqyyzGz8xBV/PWA74Yn8qsAKa6CJ9VnR15tDyggF41uhp2Gos/VlbdhlgkRU7Asih8PmVq4mziZxSVb8838oKVb626gKcU/pVupFQ/qvw1E8RFMxRFmB/EOM2PGixrLHAS8TDsLn8l5DXWrr9+NGSJhFcRveP/raqaIsoxxRsnm4qgyQf5zfrG8ELWC+v6bM5fm+iK9dYokC/Y7jTnrtck2bpbJmC6kGY8saBoOPZ+8cwmAe2L9YB2zQ5SFAIkjh3ag5fRx4jD+1aducRDUcIz8VrKfyhHgTRvmgEiABopPyrAHW/7uyFeMYzo5+jeEfbFs5dJewrxVUDB1y1kOAvtvLr+XgTXZKviKg54c1q1oQ74aVmNDj0yA0sXVCIOY8MVHa2LZu96KkxqTV+Kle8PszIBXxNq1S6ZvH82k8c66kDU/qbPglly6HvHjFPxN7ki/bGCgPDMawMxpbafw3F5Rdfr++V41sACtSkiaeqH5UbVgUxOop7oYdCCcHDAbAbR7FffvKtmMF7BqSBqeWst08MHT+ajKRzxdS1CTR4IUWxYjLhbP5WOrylcLnI++YSNIH4TsaBke9whJOylOzlNeGBcV6/EsaWRT7NaD3YN90MjcQ/CoU84WxoFiCThXY7phprrixA3NCwYnhYJI3JobrY2q2xNAMOuJDR0iT9sgGbzuDduwouNvHj0YJguBsnCuJZZF8+wfbtRb2IOl1EtOJMPF1kV3hIlXG8cPgrrN/PjNcFOSlNWWt3V9EybmUsTchnybQE/EDGYaUNlDi3EjgmDs0L+12fDHh6s9OCCVAuwHjpLa1Rc/cP4ozjEbE3X3ck8dS2jFj8i0BIKEIguYXpukDxVPTiZY5fWmHT0QCX36U0u3XQAhlGkLjGfdPs8ZaZRtWvDD2DIYcChHP1JXAYD5uUs1EZlQU0FQ3RddMBapAb8s84WoM+mR2TlpEFCJJ8b83ArNl5Ezxnv9efBOep9HkDQh67WIts7/1gsqgVMIoD+vLs+AJEDRa+DB7KeBv3OCLO54Wd0FRRF/J5gWX/6U74pKvHPDxembKKq2qaZV97UytnR5htkQ4xBqFuEbY2UfIDNAbnHc5Iz15vQt6L54+gxPFbAdFLvhEN16M0iLJyRn4hQg==';const _IH='4a715fdc0a4720fe1790b93dda40a52998abb1cd20dae6b3d20a57605f82aae0';let _src;

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
