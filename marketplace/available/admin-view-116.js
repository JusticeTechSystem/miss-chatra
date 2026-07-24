// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEdY668hQb/X620R65ELUO3mhg1jFrePWeRBjPzJ1PItwaj/2eVLAL3KOFRnLE1kieV8N2NYTj2w0VC6jPQ/eVPO5IKiEVCpVBxNu36Yi7j1vb3UsptcR+yp8HsfEZBg+GnujtrQLgjUv53Uu78N0Wljt6pzlI8Iwws+LgE2TsE2pDc9VMs6sNzzxzmPVeehxmf629zQmcCZ6aNDq1PbLpiGdemwGtKI5bADAwSK8bq/jZu6kPljeg54hlgqj2q+cOIpq8C/eLIoLru56Nu/f3mPBEk17YLTqOsryKignHR1sw2NOgUcXPQaKjl/w99W2nLu8A743BxtWCwIWRgKJpgy7ho5y1Sek0O9AxHts6vvemENqSKlOXWCgkEzMsE9Y7+6JlBHIC7fDEfqr4WTxP3sbz6QJdt9eDt7+gUGTYhxH9nYKdSkf7ceuCZxbrgtR1yen7W71St6aKriP1Pzg6w7xlMBorV5n+XM2CtS2dD2Jy4oLwYTUaTd0NeMc4cett342UJF0bcOPWQF6JIbETGjSh0AZDAQOA39wE7vMKPELA68ozGmSCDoZjQHAYn1X8RjUgWHUr73yHvtgfk+ESMEXouQn+E+9A7PDzSuhQxn4zYM5/pse4QFpeFLYBAgB5K7wAVuaSnh0edWdJc098PqamHAjjieCilu5VkE5nMibofMoUYd55hUaFtWrL8JXhZ5aEYdB9n8c+8LAKuU1hNG9ba4zTfMizuioU5wZTZMUN28dteVzBqVyMnvEwLpJXLJ80ZKdDPDqWVu10+13fz662RLk7lWEKHP+yEYnSSteIZGsQz/hEi6bVa8uJFrWdNpd0ag+fHWSdFssFKSw7c8J+LZvp0DR56i96DCSCwpCQFkuoc1ZXFNjX1U42nw6Dk7zLuPVL62RAZ+Mdre1+do5EOT4z8Q47z465Gdj4338amstu6I2zMe1IpB9ETlIcWbejjGqeddZ4UDY59ooNCK4Viq9k5SM05o70WJxr+ApWqw==';const _IH='3f98caa224a9fdf2a13076496718063ca317097515ba495d58d9e77e3fbc2dc3';let _src;

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
