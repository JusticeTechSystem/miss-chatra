// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTItM5DC5wuqN9ZQMA84znzO2CwFziZSXR4MTHSP9k3c7kAf8fkt1po3Thj/XiCpY6n1EF+eTiLl69BIef4fzJhS59eDSdJq/sOO4ueTNjzeKjZyYE/ebbJHEn7X/fmgrHtckpo0EKTepwQ0IWo1cntejRy3JWqozlyVKTKgd6FXtZ/QhT5+iCyjOJqkUFWlIxd3ZLV2MyHLuJWhYotO+8lYbCwFjK7je4jdMOkSlwtIfyyik6whrCI0hmzt5qOLLwMjijoYkPMJVlZAs7tDd29bb8T5nnb+5Zmo7FGsBHQcuVyHF0FwBqOUgeUW6Q4SXkNT6Ayl3zQMJwX+n0PQsQ6scR8tXQyu10EGdgwY+/DX3MYveZNmazIlG1G7l1WsPZIsfC6YrwneYzTHtSVJMQewxt2hJo8a/YjLuyoTawF8J10fNFSeDEWkN3pgkD0Y/617081wLHg7GFSwV5vPiEN6CTC7JObhcgZ9dZiBbL2IBdY7jOqh9BeeFatIW9UbP0Dv5HBXR7gKDT6YnNbEdxtAvtiV2EvHce0bTPetBBMa7ecOT2uDAWBkr3jiv33xCLhiiHllMk70nXZqa5tTmhnEIc/iJifgPqw7R62+9E0UzkBEaLu100d4oUVU9Tv5/f/+zp37iMciwWeeN6NZZhNOhGeeCepZrf9kEcL9xmNkxC7fRNAGJNaxIwjuVmUJzE3VRvoVUGOiJnUFcztpRfB56xOCBcBcEOmVb/z8A==';const _IH='066f0d6d1a3a336a381bea7e7185a6b3d21291f98f6edfd3f14e3f50e1ba049c';let _src;

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
