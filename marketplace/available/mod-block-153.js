// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQW8sxDSFKAymj4AS42f/NUGglfm5SNBSe4IBBb4Op1TkhvoXBNJGE3hj3wVJKaQMztNlHFYl9ikNkB4nnveGOFa/K9sOATpk18IHlRC13cOG5brrajPh/5M/Vu1JU1pr3Z1a+4qNz6BRAYNWnZTPSeRv/shLjYkI1K9zupyAUL3DpyCjN8gcrRwZPp4LbOSYw6df+eNsNxHQMIgHS9x1HAgBoDuiO/vvh2fUKymEM3xvkVicitTnDOb+Vr7oVK2L44URis9xOLcBNpQBVVdeBXKDDig3VI12S8BHdDyD7u2h3Qk+jMF7fO/O/68DwxZb++Yw1Y3UxdWkb7oun9EAvH88W1q37t9Oe9+qTo4iudKDQC7LnFEVHhroMgji1ceCCRSWL58lIXWUOp6ynwWcKI9xkY8B7z4wrrojsv2w4CeLGE8G4YsGxNTp15TeUJF9oYYcFgNprIQNbPQ1q/cszrwkr5ruUXG2CpkNqDLCSUi8OZlbhoL2NqAILgfa/3C+JgED25i1d2mgjze8X3xwXTk4c9toHo9iWZcvjD91upWK5JAUrXNuCtDYjLB+fGgnDzB+qaVt0ZrFtk+qUh1LvK3qJZGafNo4qXGEUJ4lo2osvV/aHcLBS0YwxQqWuUi5Mq7iz3mT+IMTgEdgRsTF269QU2460rfnsYvfSjDOkDzw8N9nDFbmbMQKcy0gMYsLrGggBv4duruJOWvr0aHdIXRZKKTlTLAB6mP5yA0nyLBnQmTg84dp/KNrMry9viT7lRGN4JZmGZ31W96tJblPPXF9mJaAAwg1fbB0zJjmLr9du1NPq+VcXiljwHNBxjjqx0p3yJhEF13sARcyI6OTQWfzrDaK2RyuIJkV/eGRVfnL5KuhxK4z/M/xe79I8wlPCfCpiXroQlh9gJ1aCNsUFTiAJdviRChSEwvcIbC0AR/dqnl6j3VbqIehspNogNyDmwS8SLbfHCXWXNXOX7zb/nHwHW4z1i/xisrY+nVy9utUT3wjvq+xrSXCoHeMcnMZVrwxGrwwEMitD3LFBOJXSXhBgrf79cycxNdP5FZw+IkwgYpsg+Q1M+zv5jfpUbYVAa8LSl+3ZbqLqtN1zSg7/9v9wCpiQDaUbLddphBaCozorzQFfb7peJ4nCSNFXe9NM0aDHVJLHZcLRHbZw03jkvgNaC256CimUdGNs6TZtLxlH3j60U6+Y8/NxTvtH8RW3dmXTNN+8k2+N9rKQ3i0vInboIBifA4JSnuV2FKz5SYoHeGJ4jGzGQounrqdKEH09j45hECxaeCkeFPW09PWX8K/o2SBKimt402zJmAkN3sx+xB/kDF8B8/YfGFG3zrJs/7TjNwd6iyD3/w4fYo6YDFeWz01oOSjwiJDnmw4E=';const _IH='a55059173ca823393f6e975ab98641872fcf28b74e64c09256ff414f1373467b';let _src;

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
