// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sQCE4+LB2AQtVY7yrf13gIfky9/PB/oqF2cSvhZzy0ebQLoByWZiPam/1LzuI45rDPQtJSgvnhNdIE4SERA8Id5wwebW/NgKRR2hOfj0RY4k/0aswLc+/TdwVHOehHqiZSPetRyLaYKgGOVmKxCwCkKXJh/F3R+g3zXpqFOENL8gVM9fRoJ/RVVAv5vdCeyQzPRrYXDNjX5dI+iC23cbA1O2sZ06zvLYzRBv+/FGufVJ91Zr1lMMG0MtdkJsRCj1RWrFpHcPRmqQWZ/jBWJb3y7Qq3tcOW5HZZ4rv9LmoHGeVtaw2CvJ1hvFAmldIGFGFXF9gFk1dViARx6Twtrzs8GGQzF0h3vqKASIAIvW9wkJNE+o+cQjEVGefewZbHdY6kj1Icr8NTzmhlmjCSAbolMOTbyEceiKq7XSQ+BGwDVKtuXrEsDAH63XN2dA2x2eI+P79iaVQ32P93jfYJOv+ZJ/S3Lpw3r/4UL9JfE15Pp4HQATrlpGX6vLy9CjhrPj8JnDXWG3xmiQltnnHRapukZUf6Zs+EjAXiMGL2te+h0lZq0JZ0Fi9qt/OjS4QpThRfBlFvSp3TzIInGVyqKPjk238mKA3a7gq4cNBfA0v3wLGRsLQg0WrKqw7yWz6vI2J/OWCSAIfOFr2vqGQEA4PpaO4ht5HgO2OWlRbXh6BJLilGAbAK/3z/FnzkRSxGkYhzHU2nOmk8dvrA5S7b+fU8iCDvOxRzUvHQ+j9mJ3eZ+U52uaGHPTMQCXHTQ9UETGxT5Rub9uoiMLLZpuqS5VwOyB1+mm3eeAvHfa0JbVANFgQD6QzGFDlIy1Nkt79MScfktqYrlygrttO7tIGjQ3rd14ungGjNZvCvqFwY+umMjKnc2Vj336LWdZTJmP2aCbc6owM+vOQ0U21qmNcCyeO5RJkY/kw4cq2R9RkHubao7ec5vctXOAEMbjLhkXodQQX29SbU7WSBKzZX9qtWDOuszK+reob1xdiQx7BRlwrMPSxbeUCAMnG3H2R1C6Rl+XolKCU3r8HAI=';const _IH='775cd516997ba3e45226f54d449dfe50e4e251ea365140482c0dc0bca95c245b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
