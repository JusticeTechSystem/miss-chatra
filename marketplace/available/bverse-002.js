// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6tLzwV8iT++tLk9jGMIFQtvgFpmgPUqWZGHh0De3Kvhh0DqqBepHgYC37cUL0Cg4g/Qkdq7QYLKT8qvbvZHK7L6qbjxdLfEsWqk4b9Oypjntx8WnX2fdkPPRx7veBVR4/B2bFO9H9gM7BWZYE96T10JdIYjzl3M7iN0QIYgU0fEwq3seAQf8vIMqfhEMTjRRRW3KMkTG6/+2zDdNodT4gfpId2vbKtKLWhXpJAJ0DRYC1wnIgYq9orEvb29yU4woT551buUHJDOjSiQ5vaxarUtNz6yASCU4IGdwM/m0mV0MmH1KjbvyMmDfPeMjxtbMdfPEKQIIxlk/f2ax6sIMXSAVv1onm8L7tFdGh0erdcBFZ5S97wgO6cTM8EGliWfXTk7c7e/XGSo2oVHk+spREO5v7W4dObQ9uyOOMcka0skiNHjSac8EtI+W0rArlkNHYYLV67RzG3tenv9hid8Ir1+vHBXR+VRKOOUcJiQ25sQUcV6jw68uIz70k8RShM8jhtDugzePL8zs6zaLCIxgdccqPKCS8TZLGThKoUPHhsrVJqxgWkAaWW/IpDExDlM/nbabM34gfJ7KWYgUAp1pVlLBy2pyL7lI9S6zVqrSFn6OBWzGRgH+26grrdGsMFM48kDefvkyEuvCRff7BctS';const _IH='d9dc4b5e3e0741300519ec4eb30dcad319bdb7ea8d55cd0b822569d95dcbcd17';let _src;

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
