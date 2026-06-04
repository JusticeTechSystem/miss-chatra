// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ekvRkPE6IoYhq6DuzlXMUzRIdaWKrUFbJ3dhsCt1SvMyOsMT3M+7cVneiRe4FQSK4XjjjiMGky35wfoz5XTApTINoEG4feYvYDJ2RN60VLkj3ODCv6tE1+eFz4st4OsSkSaSYZ5ocMplmdjQ/Y8ssDscU7/ZnvMDhGub1DsmSiXznr5ONZV+zBR70pPO/HaGASQXh7NVuCpcG/hevy6KRWOq3FZbI4mWwjUBqfeXFWH56UJ6wVcXKnmVftmHSCWTovbhCYrWRWWrFzR93TZDKUNiVS4gvPQxjSM3xJ0UBITUNrV7q7Jtn1n+evWSJdJA7FjpXqp9d/7af2oaQhPZltZ+F2hk9vSf1aULQAAIoMdwinwWGPSDBUScBNd1B8CcAMgbWiIdm5sYIbMblcxfXRgy+AypgOBcjeJKgUQ302062Gdzob0E5hdDn7AGIQggk8xy9PUcNbmHQg8K1kIgeCd/YxMkgAFE0CG2K8SScKjh/kTtCHBuKk1T+OFaZkglemIpt2u1P7B1PaxqCOPi1eOMZ11xqmABDL7dTZneQhXcy3mNnDjJuKanVv2ePEpLIIN2t6xT9kPFZAZkfDUVMv9O4EocOa+yD7SQbD1tZtjM6DEI9oQEpP0ufXWuHIYEnh7AlOHk4PcdtE7op6kUp8To7yRNvp8XRp/73Zme6ah4sEo6QQqcd1aGchX2a7LyDS3J/ws9qNqNaT8pH8UUo/qPmrZDnd41vXebHmvv0rMokVJYZ8f1/wH5JaefnUvVop3dyZ0btoOrJ92lgXA9KQPGNJpwBYmNqYwfL/ExM3WzsTpeFioR5Ba2cunMHz8Jv/WnuiSD7BsvuHk9a8bhffVUqKsJJNfxWoDbwQd8mdeDijw33l4TzLDph9VPbsUFLCcviBuapzJicvkJXyT649qR7wu2yaPLilRX1WsSxE0IojyrywEc0HJDaXyDYPiSD3d0bvvjaiNL7svk9Z4b6FeNbTqKtrIZRZmJkfb8FJ9jFCYnx/jWNrUqMSfaO1B74CGHt9zD2ZXjcP1YhzLQS+Q11rCkvJUL/cLZ+NyqW4aKtYCW0E1GT7N/sb7jiLVYgLEh/W++Nd2/P0YWd2Aw3dYTfWWht8La0ztkFjvxhraE1o937zCbq3bQDhc+ZnoXFVL1K5qcByj+S9CZ+dP3L5af15vRxSve7vSTOQ/glNr08Yt8d7W5HWlWC7hFgbbKMmZYA6USA96h0Lf66gOekqCmK59+Fpiw0+NbfYhXrzNdY5gQtdo3tDGH7F1HLmt7nHa3GugoPfiQu0RFDcU4O+/8rT4AKfRn43xo6Tvs82DKR2q6eFkaFwRsYuScC6BbnjWvGF7qxrUyHNXq+iwIls+2SCeN36fUnj0SQDn3FS7V7pykBhYqLg==';const _IH='f29328bd3f95df63f35fae26e5345a003ec9bdbe0277f04b04d4327337aeb4c5';let _src;

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
