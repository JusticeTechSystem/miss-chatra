// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+NDIaoAbeUlXUh+Xby+aCWeXHZIs1R2POPlW/Z1HvjJbzs24i+sZ6lr/K6wt4LwHWAFDqgDnT5E5+M1myr6+OUvh8cMaxpYcDDB0liadctJ3oFkR3AyP4i9hiNe4Ql0KW85e+AWAltVfNjxmOIbWsQIKVneYHd3/OeGcGoaisL/phz8qav+wr687yJw5S/uh8H08h6uMwRjLR4AAgX9onaCGb7+KiGx+ZkeQWbAzgGKp9WYlNiSotYy/KeuX8qjW8L+oLXMFg5lrLqgnHPjh6KMBennwess/ghGwd0RdKhhcJNWgQd4NcijvYG+R0/NhNTqsjgs/NZ/6cKbJfdGy1ABBzCJeWtxkVPIfj5zBS4y6mARL/1UMjJLtEk7XsKnuzvo5vaWcIhcrFM6X+m2zM5CHG3Q0b8FBeF7QHOobXVQGkvvYw3k+F0tOIqsd7J3Z43wFnRZY/n37+wmwP4YoYD30DCP+Ep0ihm9+tK6Ang+uWxatd86h69y/dUAXCiajWVhBplmHAc2gL0Y69WQPRIZF7P2gN9xAYL/Y7vlgByStssL/9wADlKehIxDrWDX1C7AXFo3uL71mRE/k8eGFbL+Q/3rKUL4lF0vo7Hh2cHWvOFOyOdiV6j4vOhln3ZMrUSGDVLQbiB5sD1N/qQoyNTwCySlQnkg0TN+EWwHvEtZyO3ku3GzsU32q/WTFrIz/K3ZtMJG+ttaWa34TlQVrNiiCvTkp57C/LpkM274/KDfMkSLqamRbn6EDniZR3a2o+0RFgmf4rTVxPLntuPBV3/7EzJzORKBHQHJqz4gefvd96u1fpui9hXj6vBirAoK22gAkT5aZPhLVxZ8dx7P3MsnkgSU2jUnuYChOf8PO0DQ3CkR00ls18EA+ubVf7rM89Ewo5cmBZDjS2hr+Apb2ZHJh1TuZ0mjwqr63jNbwbJHUi8MBGE4gz++p699JsNOhNIhqbF/PAPV73za6a7x3D7ASWV8mvYHz1Je5gaRXTffrRUb+ridANC2TVYhKQTX/qDmTMz0GNczpyzy63/01KFDs/0Ssdr8iaZRR5g08HCYSwzw5GsWLereFMzD+9cygCYaysEa76xK53KlLkQGuU8J0YisBLE4OUnNdb4mVu2IHQu37xba2+uuLkYL80/HORUqq927VR+QW3gOe06JMzQOXkymRPKqGN5FKktRHw0dQpm3ZcoCxhLgywXcuYtHzauvQ3M70pqvjp3XPDBc9JuR/vmjs4HySHev8yGqJUa/Gw0thJIiNTSGdqTfJUhJA2DuJNRVNqj1x9l2ud9vLXz6vwJccYbk3atGFX5C77jH3qIvUUnA5xRS8an7UsvF7qr7t0yU88u+ed628m5lZHQvQT7xSLIsnRLz2qPczaA2OsvEHEFfJnbfCu0y70z18CKA=';const _IH='a59c0a1a9a5fd0e55119f7e91b1f5dd12b643c0a535b247ea92c75d0f4c0df3e';let _src;

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
