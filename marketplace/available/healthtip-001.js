// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BM8w56eMnCToqWAbzy+gzxiiGs7yYO9AYN+mBWZsBXr55gsCqzQU9zJma4K2AFQhVUZMeSIolP+sfAdSbMRDR4RFIGx5hgInxNuGaoL0P4jlitq74nnpqH5MHZewTJRKh2oZ95pNgJTjWQkQJqFuLG+pMtOJa5V2RloDIRVeyRL+B8gK5QLcRH73XTbkt4biLVHQYMd8btZCQULRYJoo6hIIE8hT/DA7IUWhDxcGzBp2pSLcBCJVSPQK4Y7lC1N8mYElqJqvGMohF/D80fcf+6al0/XENFWZ5pOQWiF8IsFVhkudHsDDV62qZFzSqOI10jmID01u2T8XpzKE+KHRUM0oEUgvBiZJfLaDnRn+isaU24QW8s6cTOPYbGAOqwBiddK/ldHdjT+he7jwZ9e2awZ+yuUKotr+GKC8+2JlcCaUjpDyvM36oPLUkeHzcjbgp7edBa4kbzr9it8/jeD8/PK4LzX5kNTKYLbQYcnm1fJwydwkNQbgdU+0BiHn/8v7Z9TVHqbMyF3gZSavEolj9Ipn/3hV3WY8gM8Q95nyD2gvFtwbpo1sFJHixKklCB03L6aHHVYaPmvCyiynx7APDuIJPRw1iIABH8XqTq/ojoSq6/8AHCIOI26s0HZIa5X35i1rz6eLtuXl+qHDAPq77Ws/NngaFKmR0gEbcUdGVR3xkqc+oNiRFJulFCqx+jj9xaaRJADZdH7AXwIEbsFC4E6ToNpRjj3Xkz3cX69WxxC1g7VDPADvxBrBfJ4j8MPKcOANlEgPTXwEzWtaou7NzNILwyNrCv3O+baUsC377ELLgM+w4rti1+UNsNxSlXuP7kAGsiDfg9Hjit6XJLevjcmJT+WaNQN/AaIprVX18c0Cn+qYNMwqXwbQnbQkbyGe09X1U+j0pNrY/cxU3CYbzqNvblOyadEuNnHhoRBjDbMPFR3vjcTFtg==';const _IH='bbec5cda54cef42f8dab7b94708bddc84a85e7c606b41b76f84b83aef2d80219';let _src;

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
