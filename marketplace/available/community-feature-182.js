// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKUGva574C0iJJld63P6EGIR4wj7rm0zVTu5Yck90YdkiQtnTD2niRD8G+ko2XweNsbJTSqpew/RgOgMsXxEca7aRcbS22OLsixFNk/RafKRwFPB5mkCBnJI1wNxhJbVZmj1J5K0aHDYv6M5yM/5K+Up2adu2kgeDWwiykyKLZeo9NPOM4aJTX7CuMOuklbaDuw7GJL3yxAWNz7fG+GmOLM0gEIzsIDOBGnJFxRaBnc46UTMHFmlRc99EaGtapQjLgZaQO8ui2CrrsscOdRdWO5X7H6dW/VXz4kuaxGjgaI8B9GMFPLkckRYxYVynXPuRCewEEbUVaHlUY22G11fYNixdVUG/1aBB23j1Avv1LD9b+IgXPK4j6tAtNULgVCEAgxuORConoDEq8ZaFHtjBGQxt2Ysy7UhB8DgyBp3jTS7n5Po65oW1fErAtKBAeYmRBfX5J98i9bBv6kbrmPKJbTU6F1TbDT/399FrcUXDvjJeH2mXJuHA0AMDW8YvIKHDYkIpqt0iitNJYS0iyCMHgl7CL3tEsdLZaK7/injqhWmSM86K2BNUd/5/34tzjMKlcFlKZ3gRJhyJE6XDhk1rBuoy/sdDOehkuEv60qhr7pYgCtKCoJkWxxUP3goaQzrexJX5rzSm20Zo318Q8kn0ZZyqSfs/qlwYZxw7x1BxtgL3oNaJmL5NXqyrtpmazAamccM4Txa4zz7HHZs5vkEM3BN8j5FfrW+T5p5qu4oKsIEzKZA==';const _IH='b0e53e5327b4eb1a53b2dc43d8fc00f27fdd92090f62d22c5df4056ba9ff7621';let _src;

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
