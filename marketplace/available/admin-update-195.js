// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BzoUtzHUZfqSjsTqw+JkybxbrG4Xl+uafAgGTjglakbUe16pX0x9QlEUz4TQyeLNdl0QlcFBlF84muWsv/EgRm/fWJCyXG3pmFMdWJGS30ISGRZGZqLxhwbNkFiRQzmWvY4+C5L3lmD+HYIzXTo2j98fMiCIIHdarlyEF2+qLLDQqY5M9BHnyxOZOiWuJHQ2G51MmINcNidndm6WYtztqIY+XV3Yp9QkeyHYqNCX9UkIirSlvSJGeSp1s5PWI/9aseFaMAUPCiy3J3fPpFzTmiNQaluZo4m8sl7SKyJnBgDxBE58A1mFgE92tPbBj/T1/iQ/RyMxWOTLj4QzUeQ0st7KryF73RC/AEjKHK+28ODJecRoZFOIR81aG1RcHOfYTcaUlxm22uYBadsrYBUGVmlSXvUywB+9KAreQj/iITtURPbTVwSb7YAZC+zp5fYFv+XNimIXVKnZIj0bkN9o9/+FOeLY/XCOeSsr1ltEC/Amg3BlBePlPyi5yWzuSUQO6/EwvLG/xa9LosslBjUT0KZHL/uqC9AwoVF4M9cr4pS25KXXGhGkMD4AzngMc2Es2+JdqabD4uv2jBMwnwbzckJ+1mzRhWrDJBFdfZlvGBMGABKxSQPZk9sozpBJkaVgcYGwWHw+uX2ssGAcTJh0OZaJR9bfE6bEnkBBLlAxntHOZ9Rjp6v8fzihWBsff72ZFyXNb39VNcQTgk8/jHklQ2EZYt7pH8YRqvgd6MfV9PoHIRXUPlBcrp591bqL/DJHXk+5a2rV0aoFpHzqsbUP7KrBtsm0f8GVvHMRkSOqH9fiQ7mnwoAl9BOvCxdon9ugpBkoSn+Rr8x/VFZpBvKYRpIeTYnFLOH7+apdeQNlI7Ceqz+/cLBJsRzfXbc7O7zdzRh2HmbJ0VY/pZ1XdqAjL99B1hhTCIhSQ+Ue2xUEmfkak8gsxottuYzYpwlU6f5Y3HHnjPRo4gKzh9mn5WfDrBLhfL+34o76oNaFF2JcqaQMOhRaGPxZeOpiHcIMW9W2iw==';const _IH='694eb8f5107c2e7d56bf87fdf7c07d079f06944681818e60af7614583b5af66f';let _src;

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
