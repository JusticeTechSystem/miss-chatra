// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xA2vkVI4A6afAXoH15dEpVNGgLksLxSS2oFC1xiGs/4QLb0bFZ6Dd6ROg+2E82SBAiCamNaArrEitHcak8U3G8MObB3na1PWL6O3wK5l+3RW3UB6nUcyNqKIbPIE8gACQSjATZeJGK1dAE4c4kEgXhbT2m95pKnFNqmK2SgXmoekLyTd194iy9ycFAX7wCMpTfTYF1v15EeTJdfjCruET5xHyMnHzn07eNuDXdMC3reLhgRX5FRmaeVMlPW3ASJOYXs6nNAnSjjrBcWULs8iS8nXLsvlQM6yTdcPBIjYWjPFLpYdZWO0OxmhYkJuFTi23H7x5fmiq4SaeXNinl+B1g4IguTYdmk2qg9L79Cwuy+fLHKtW1R16gyv14fNzTfyvriAjaw+39HVODY5+i4rSkV5BqNaIPNaW4w6vs2ahrD8bHTVXClm8e/woEDQMF3P8gHzy1OyGjgQVBPrdFR2vUjzGyIWpWWY9J7Wc6SYqJN3cqFnydZa/WEpS0hKZxjfu6s63jDLRjYerhnKDKOreSyfX7cFRZbZZ5MaZ0Lm/ggGRnNVI1Omt1YSO8zIBqJggx8lCFwoVOw1ApSwXmzGZxvQuYnRES7I6p6EPmQ8ltybCwNDHP94QfUWLJyAlAwI/K/3MRRf6MUJFi0aflB7cWJ1rno8/yy65kR6fOihg57CpQsPDeLRjOfpvUbSmWhO9Hve0pyBrM76xwI24KOn9kiELiSZAgu77ZY7mx/qoR9IEv0zZXkyiw0sRETC1bRc4NFlpRWUC4HI4Od+K9j6BpNESTV4QOoaab902wmTz+p88/nAgzdbAothPLekUkZEWRObT3ebBO/zLQYBbHGdM48psE0r8h3I4BJDWaVbf/w2Jfsd53uXgKZyGc8AfvicM5qnruAYcXJ4M5VqJhCEx/t3E9Dm8QkdmQYY7ZCNvphCH7+W73k8VoCvJkd+EAlbbE/rlc75h4A2OCrcS3OiLr/hhceb7+59lZ/gnNmlgVhRAJ1Jnph2ZUGgcgkY+T8gwqV88PvVwyQ=';const _IH='80d07ab77268a9a377f65cfaf6dec9f0a8cc63a68a18f625a629ca8cd07877af';let _src;

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
