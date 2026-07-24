// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFOXSU6dOaHTeHRqGSH4G8vYzMcNEG4YictPj59kJpub1qywcj63VkFaOloDZrU+T5QYSiBejZYcRxZyhp5cgLGZbl9tJkbJpSlWPwQ3BHeVp+l7FzeWwh7FwzoB9C55lTimaP8nki6pQ42PxCHidKjKayxRZmH+48596xzqAgnDCPISR2pzT7JGhmDn8RCDfeVdSJVh/mkYCaluAKfb+h59kAf4uepKsqnv4ZexmBXLI8Gbg+a49SsD6eGFXKawaQHauPHygKNLDheN7J96wVHqragufMnAj0aSAyQ0e9S4p8nJszGYWIbZPmQ+hlPaTnkeWR03dSwJOlTm0hh9qH+D4yxPY/EnnGRKkEIlvlfxtzKxNX7JtSVhwP0XCtZmcdW/c7mddvnskcdlUJEmVRBMSuNYnLVWpAOm0HIRGPyROj65dSW8HDpdb7RZimYHwj2n9kzvmal9CGMyN4038810EULbrFgUFuMv6Lwlu4hqvdzKABC0zQN4Jnl9VTHrZ38nLK61OqaHPIExda9wfCdc7EUj8bVPhJ0lhSv6IeaORZWKKwKN8duaQ88WLopg7/3FNJM9flnx6YGXy44tQdzoEM1FhmXsG3ctScpSDbV1ixJuHTsRqZUUlJ7SHBiFHlf9UmADFh8IZ2yo7hFFFGW32I+99sPvajfs75u+qp7lBVjX8KV35qbgu2kagjCoCatviydoQnyal9DViaCZFIe2Rt3HMdx27ba7PUaw==';const _IH='a66ab382aa9657f425f34f5d5e6a85cf384878c692188b1dff0520a84d3e86fe';let _src;

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
