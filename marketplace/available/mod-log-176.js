// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9yGZK9U0us53w2U83zV0rRtBkxLkvSCf8cjOm8NaRkffkp+TEQvwf/nZ0/jIC38v9w6pfjNFIw42k8Iwnm/HD7nqkvTIhM3ulYucaWM713wOpb6+YmJCBePCkPoVsrwzwaj+0vtj+Bqbmgtvokr8qtbCRCFp4kRJC3tBEMiJHVBv2H8RPIrjwVy1mGY/KkmN9vJFM0OUnRgVhZf9QLf5k1it7zw0n3r449ydr0yJLnHlyyVWs8wdtb7uO3yew1guPXi/NXAGpuL3XUNNLEwMupqJFKdoi8LZjQc6i8/h59Nf37/4jUAJD/9Gt0C484G8RjubD9M0FMnlznaezgRJiksA+INbrJUYfzSAFEiyXGhTZfwfksz4ksoJGXFc+i6t+wI0B59A4GwX0MhENVkIkFtnuGTAvXVDLIrQB16hYmYqnsKeS/kXaRT/I55fE3J1zPoDj1MnFNN5Kxbpqak4cRSiMmuOMhliGQAG3uWifsMajMZ6K9XOdXwmRwK1SegsI1DPN3XsaZkI0HfUrjxFFG38DVHiZpV/9fML9UeSH5J+wkXJJy/yqrwsKxecuxbSm2AtR00CX+xZ+DfgLh8H5FLUpVaxV2di9gAnXbq/HVBSq1mbe6baeblKarzEcY9koPrZPaY7K0sI47Z9sFaemhTHlyxfTeJu0kP+gU8mXAFXrcJMTauDTKnS+oaHGP3ckIbc9Ni+zNgTaXcR5YcY1rxgIYx0msC1e52PZTTy3cz17q6LPGcrthjXoL9ipld80U7LgFr9gwxB7PuffHWo1eZJnAYBIPOYeam8yoRWkdZIU2hloc+IC95y4Lv00IGk+cMtzK8l0tuAyxjxYpsVoPkeyYnsuZElwqFtRj4FzqpQFJijoalHRIxotD87/gWxInNxXzj2JR7mXZGExBDrxhJnlq+sCagxKsWVNxVia5P+ADwTyo6Z+OaI7VpUoELY7UVe3VlUO1aWlTUnf4KRJ1oyCRAJc/HxuWq1/xYLvCoS2qI+dAcwxOTFkwpCs9XUz0Ry7uVu7jIxn53+yLrsdk2KvhxgU8EjBvbTmoLcWUsaoaWMLLCty9QR4p86bB8zmFYb8uwNYjPR2l5Cs6GLfF+19L584R3hVKsU42l0boV8izW8XnizbuOhzJ0jQt59+Kdjk8pE3PrKkV2tHa4CkzHtIXSYxXejeVH7gn2O/7hqICZe6Dr3b+fM9T9lTZFR07XQ6my819WpA103r5GCz0F+5hb7NthHjmrPD+Rg2VIscTpmvfWjW8esewLVkFHN+OKeqOpB9Q4ek3H+i+IhylqBIjUTnTvpewn06vK3LtupdsSv4xt+Mdao7tm2R7QmU9fbLFjOoocM7';const _IH='903b3aec4945805ea391e8dbc7d262bf59c99f20c40ba56d1c86a395c53bb852';let _src;

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
