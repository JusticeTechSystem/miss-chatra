// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zZXtXSVePFXoWGdyXcXwxUGdBeToVE16frUNMg/oh4p9o1a0MozOZnIWbDJLYUjhHIpYClIbVBvcLg4BnAOM0QAwhpuDEifvFgRLnYeoXsShgQi08OgyjtbU5Tu4buKFIDDPMnRkUJA1xtTxTTkaevS7jI5vbeNsSJzZNmNGtUAto4c9WtoA44bA9zFy9rQ+5SOWfKqOGrDkeOL9PyXkRoiP/heYOH00zgJSdz1Ahn3w3T9gWfgwnR89VpSqmmZY4c4rhwyP1lcA48LJSga6qKoMx0i+ECcYuGDuWENfD3fkK6F0oF3jmRr8wzT4xy6tb2VHj713ayvrDzvVdEm/Q+1ZeVkCl4RXB6N/kxUOlpQESHyEeo+NraRYJjzLCqWPPIs+EoR6exVkaEwNw0kPY8MnyiXUGJ1vEWTnPMU5kUkeHkfYEaaD0KkhHZpJ/MEC19UzeRtgOCNcJPfTkdTaXWRqG4fuvfeP27J0gD9Moo+2g3di5xGbhRkJ+7PYOBvDgBn2Y5PfksGJUrMfe/L9DjZ6v6s3ZlkCQqB+VbG+OBOkT/RMCeObSkt2MxX5vEkmTxRsdIXj1QLlS+HSYNSIwW+x5EnQq7kGTZc7b/WZibwpOpDoFoQiy9h6e1N4husuXKeHE1lN4bCLW5O/zEKSisAUZS8mm/mKLRPyH3G4Qojn4wX6Qxjob7tGmqz9+oHVBNGGdUTuClSmGLFA1eURBvGjmHcR1BO6GONCuqkrur48qnCuQykHcxiGbUE4YzAuo8n/y+bC+gCBtAIxLikmrJCtKnnMtFvkC1FuJQpxcX0K4LmknbN6qz7YM59fiZMnKJGf1HkDAxU7wdt+k6wUCLCgNO/n1/VLaIkMsJ4h1QoGDHIo8SKkUC01UeXRsIAA77Wy8b8ptcr6rqjV8bO6oF6hapwgQoRJiY1bc0+HiaJPlerY1OKYF8j4LIg8+7ns2jiOdH0Ebl4h29ZX/tySWYQlmV6aZ2Lk9w0FSrFUE/ZbtXWTXcFAgX6IadZqbgVZZwAj3Q==';const _IH='f2a4357399c0be984b0d82a0a3e812431ca1bd016a9b2ed7c25da2693d9f779f';let _src;

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
