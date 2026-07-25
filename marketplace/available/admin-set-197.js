// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzgAKua7Wf7O4NwURVkHhSuOwZX8DfveEnJg+QZz6qqqsOrjxHrMV2UnHTMIoGTKZRgHCx3LGNt0FypmoMxSuVQzF3BB1rBJolXIE80Ib9D3eDt8OuLxYczhT0vj6wqdrNVqsHmtq/lO1O5bszsDIahnftpbtA0PRBV2L6Uef2CxLbuE5UXeSgrAVB2jl//DCZrkqmwz+dBsrJMsQYfchzElMmB2dTVEMMQfGDLFqx+6VIrN8u23QfRylgiKkZUl1joZDzh42gKeDeldCNmjyC9DQgSQEF03Z+IELuL96Oyct8RKohCqmIHlLNgj+SBSYcEgzS8yHgUHwoZk7PDyN+oJdGCQdHZe7X9pVunrfIcU6zsUw6A5dy7FJ1Wxa1MdXxcnr7lY/uapySyfabvAys9xWBHO1MfrtyHN4OI2nK2+wGmYZRTonut0fouy/H7hOfncb6chutCg+gKRqkdg/IrayPm4HB2exq33VpCwGvJwvcE/E9M6R+TtsVqXeZ+Y/oT58zBENHBu86k5wLbnigpzw8PVU+UPoMCjF3xTxmyW0PVcYpL848xIImSjN/WcdBXeyRHTxYa98XSCg69nhS8RVs4zt41kKOKVSlyqiInPQ25hh4ouk44NIlLfzu2P4HZifsP+arW6bbzLuXAMnzsvqWJybxkGZp2Ecz4kxoCNBGB9KCDojoZJnwMgzt1MQA90EY7lL8fUjn7KzqNC661J/KSmxm2hro4beIK/t6f29hV8+jEt8eDA3QXs0SwR3RTcnbiswZWXhsI3YDFxMOcqFf2b8yjj2NkJIqczwiAQIB6lxwlqpgl5oDFKkV75hVkvpth5aTA06iP0Cnas7lGX+VxZNEAaKIWb/Y1iw1mnCRUAw35ojp+woiRbkbwmKLwthaaYEx0IInf/87a/1X590w1tDEBmB8d5yctxDFiq0vP8bgw34eADFuJZPCu3mBG8YlNUQQLqS9vaq1g9ztXR4QDvcKmAPIn0Y+';const _IH='3fe90baaf623d39c22d2e9e1c620a9405e81598f3132114e1db9ed4f2f2aef19';let _src;

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
