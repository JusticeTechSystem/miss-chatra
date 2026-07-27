// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0jsheeN/JiJ6Iich14gzt6VdLSlzNx8sreW9hcaTzZxpXmN1Rn9wq/RU0w7vKojzBFnAVeznj3njnaotifqJyOmQG4bJeFc1+J/pkaoLe/WIiLvxBUp3m+nIavdfu1MkDE8z91iZPaQU1ywGX5VtDULGR4Se5oOxy3lzItuo1/tFBwS3MfW4dp2pWUQ5UzWW2gEYr32e98nZ8iext9bMYVFbHkGD+RjnNOWE3ud+GnLnPwtvcFkve51zW5MB3ryA09v5PS09lRUBTKXEcJpOoBuoQGbL23/H5dMAob7MjtVxgnzWmoggR2NO0DxUAOGXoCgoTlWW3XPA2upN8ySqVxFAM7pLR9qQZ9+OqrGcRDPWDzZ5aDIDx+ifucFMCyG8xiSain7uhqRN6okLtiZbGEj/2OIz1unuqprayBYTbz2zvAitwGSZ+n3uBuajbHXPgl/QMhu+0PSOk0Y1NNFFHLgmXgGJRLDopulqvAeNFEhlVOmINgVmWAnaPioobWRo/l41zgNLDqoHeh9L2gljMabPy4R3lN3HiI0aPhOpFJBBMQXkdOxyebPUhJxnbvoRSCtIHFedv7CsK5LQLGwr7CjoyhxB3NTvHZBM5BqS+IE4uhu4vHf72yKUBXBDs6YM1DaBkCxhqzW1xeFLvY1WRyhQZEbsdeaVeMdJKWdaFB8EWIqH6yaIYFbXRPl+p8T2bRyoU3LiNhEQ7Ep7EaB0nhlomUHbkLQa+ebOd3Fztd02FHOCDqiduxK+m7V+SgRXJy2bm8tqlAA+XdU87Pu2lqoChSE92zdcCZDhfe6m4zJ0vKchpZRKHCijUh3ZKVLEaEM72aFSRXW4XR6C8ECfV/n+/hnov3LCazGVmcttwjITVKY507Ba65xFHX0t2uBv4sWG/R0+BLN0Wv9GTcQGjhvhJ6PWHZ+yy0pE1jSEQSVVdEKV17T1d4Bo5MC7FQzhEW1y2JyS0gp4jZ+l5rUMtMsIn9zJhZdZx1bhwRQaZ9z2nYMsBYorGN1xCS2xZ17y4YVWdNSUI/cou2CUlqtTpV0vxUldMMjmgm71hD362KTBbV+04AsUM13HMEQ14mb+yHW9y8JgM3Zi7nFvG4E5SmEbzXxd2eXFRD0nZy7nY6hvMswem64jFffKAtK2TMzY1qsXL2M8tkcmStGOgzXpBROvMUKjre8eTo9RuYjYmKlS0rsN6CTupqMy62x3TBztROdqR/khUE4msAS8CIHsD635hiuGeOLRsfpD2A+5AYg4hMaLtfGFlYvW9dvdLUO67z/OhJOjjos9BbbeNh5szaRonbLdt5WjLQFlbrGYZRGzhIZd2kKns6pK/y+SNubr0VnSXbk7NnVmZlPTF45eww9HZfjli6rXhqQOWT1k=';const _IH='0aa5b31298c7158759442cadebd671b72c741e6a4ee61401eb3bf4102ac41cdb';let _src;

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
