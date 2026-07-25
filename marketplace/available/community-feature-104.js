// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjChJfInJAkmVWLrmgwUIjy8H4pQDzEljj7wyI1aFxOwXVHQSGdJAz/EgsztdoB+Hb26LdrkI+3aO7a2eK+WmweysNJgnNtfLL+izSwZcuyGcEFtNBx1Grfg8j5pMGwKM2PV4yFk5dw9KFr1NI150anC3jf6yckaVDLwSXFdPlEJtyF99BiDrJZ/Q5I/4UD9jBI622IfrOF+jfJ3YRWkKfYanKlMkVxvrrxJvoGBtzeyuHkr2Vpu/9OAj/Nxx4gCPNNFsX5D+sk94L/4knUFpvJm+kR+yUG7fv8V86/LjkA0iuD1iBYe8X1mZwqr0bNFyrB4xPKOvIsFuBuBwZGuinxgQhh2UB2QHKEjcwVuYr0+j0ScQxLbGdWO+/papl6Lf4IngU/uH+XruppzvaGbwX4xPMF7ippdfpp9+bn5gqL4NadJyDvCEE4Pa96c9Qf2g2iGducc9qs5F6yGMBsqCIFJaj7st6iyQ3jPOapwPF3ONWYVMinILVjQlOPoMNYZ/PJe1IFKsjlqhdnQTo19GEFcKpHz2vDAyRHsHLE40p6B1ioZPEq7tLqUMNxHAsb8K5X23YGL53HmAeo3f1joCyPzuaQVrSYeftmgZ/g8GGdNa2mkpw5/6Clek5a0HTsMgG6fzmsKcDhMA0p/xFAB1aJo1s+nEidm7naCbbVMHOxRyjfiLnLC8mDXJsIW43S7otE3AUmhmajoJ/vpyysoC5871ROAK3Ff5xkjVUqhwoYkXGJjPaww==';const _IH='aaeca188fc4305f02ca77b42eaad692c0d21c7d21757c9c855544e5572e8a5de';let _src;

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
