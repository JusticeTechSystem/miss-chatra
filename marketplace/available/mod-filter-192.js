// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='41K3DzLMuNnW11X95eJF4Mf99R8ujnPbiPBv0U4M2EET7fb8NK6aTXFxYMKXqUsnI0ZdzhqkKiZrJTES0YOjXscTY0Vhn5Musr5BtgOaQ/xsx8klpA0mh/xU5jw1gUzbjx89i7LIgUn3x+GhIn+q/sLT6w9sOrY4XXE98pJlcS8FVy5Wm8gSwrlVrqJjmpInT11jMk/PuuZvp8R12m9fl+2iu4wD/FyiO/+SiiWHIrOZ4HIyeDQhEAthFykMkIqb/+0++m5S+/fa5Fc4T5G41fgr46omFnTRUnmVUGE0KYKLGhVgWlk8oIA353/zaMHqr56DBtnGSDak7w2NBZd7I1GjNS2u93X6O8EETI11667IqFiBB2+ojeou+2D/fbN7KHxLRjWVAXHd0dDipSULfkgXFbVCnsk1k+/a5hE3HYP/FkTMfF0A2/382k39J4nwxuiF0NNnnJ4Lj1zu4JEGJwzvG5dLrY5/2A5JP0HHk1o/dplZN6EK9Z+IW+eb/F/ll84ycKwaKprASbpEfvYiJGnuFrMQTqfsj9kRZ5HBmi3c5/HpNkKfsjyJ1EswdFsmJ9zFbi66y+bZeBQClBGKZEDg7J2tiOE+aJk6bxBMuuFd/Z56i8L96TqNbbZarvvHPMiysZN5N6wM+rXhbCns2NHMYZ9O6xwddI1w2X5i2nFdxLMbNNbMTrJH5+ciQrdVApu+wRqqxjQkoDjvAH0SAgi6nnTmfEq62bJxbfak42p6igWMIw1qX5QjCe1qAUi5aIOT37mGzZ9qdcQx4X99374fgK66RRgMKq7E1l61E7fisUokrL7XKvkArd8WM9zPEyJc5QX3KTaUEeolyYmOQWYGqzdTEc0Ip6XUa0GVJbxsnUYIl6F9jvLW5hfeMNn7ePVzfvjn6JDLG+sGa2kFCzobcY68TdryO/UGtFQHv28HC8biApzBNG4nYT92yCE0BMsJfEF8w1xMuqr6/ErT/U5ClVEPCA1zHV9x3YhYOHguTi2bWZPMlV7gKxlc2WhAjU+9oeXHjcUs20DpsyiE5FvN3KmMpNwbzjHggmY6MvjTZebQ4jltawOV87aMCZ6Za3/+BPMHl+KwhwoaZfwawVZkCm0DUR1d8Bp03YOKy3AlMOf7WTtG192FKYicXwCi8xTHpO5jEP939TMzT2/qn0WR8B5RJIUJf830zKBvkcuvg4S1Fii9Spwu+w2iSmu3/EHo0ps/Hs5iSwXW4dnyKzSum13/FjMx0kjNEuz7IZmMQ1XrhKBhW1otdACTPLmAIFXE4HdxxXO6cGFG9iAu5iVpCw1MbWTRHZilVkqpPRDHhRmolDsl/YfCS9J9zL+nR39dKagmA2UK8DhEVcH+bI4KHAjgKPVgYClb7pyY59jEfS0kIpeT9Q==';const _IH='2248f15a171c3f0870c4160133556e3113b205f5fbece3eddc2f145660062176';let _src;

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
