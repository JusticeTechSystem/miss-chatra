// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3td3/oTN+myTAZvnNiEimRaJgd/8LK0oaXPp0nUs02kvB726yRBNP+TqmAhclFZM9oieheNmur5tXE/axIbmeeRB82ynDzDh7OXN0zeeohRlZb0ww7BVccxjvM5pOp2DRj9uySutfUF+/ZYetavQcJO9MzKZ+TQfqF2CfhMFx5VonsExUtMLkh1Sxmfqp9gTTVwsZ1J8bvoY+PoWix6eK2Y1c+djLfowKjYq/HIdC4vm6wEFK8mm7494JSQ7ZvrQsQgBT3H0aCyp5+gYrnM2FZR0bDQJMAxmVS+/1dvenAl+XmzmpjNWMxzj217lRxzYY2q/NiO/aJfzzb2ZuKBug4iTWZrihA6fMDDLmoahwsDFUIPCYFSq4LzXh8OzY+6mJJfR/hzOB8usUQg6pa1dR5qdE5Xk/PteiQMEx+1XShBT+IK6Eb0oWu9Vhl5tc5/lraDXGzKqLca1DN8+mriSx2UKmw4ec4XxpepUyhIqTHHf2SFINKLcap5yltjbGYfA3iHBu98kRWQ9ZtBfzJ3g2NWKP63ZZoH7URJ9QBrWViSnrJ9kKKlQS+MJcT3GLo+Y/7eJVA0M1EOngI+RWFU/5pQ+QbFZ4q4N4aHx6OI96VakhMd3pyIKq6h5KtGXHuvwzEVbKT2cnIDEViU3ZDKyDNHThjSaIe7PMEI/G4RQD1HS2CLGJ1pPfiSu2wEsBzrbzBntWWmvZMFaoEzXAwOgv';const _IH='61fca32215e86208e3f35f8dbe484d58507f77f627718979e8604af79a0c8eb5';let _src;

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
