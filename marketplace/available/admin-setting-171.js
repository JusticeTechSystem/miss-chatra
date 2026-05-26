// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HT8iHdd5VDgP0RJ3F2JwLN8V0arcpzzu3qcXG44k4jZOnck1YFj1155gZw8fbCuCX6vW5HTTGqP14BRMjKDCbmbTPQc/voJUS+RXHrdy025ysayqN1PyrejT6kbL+bHZNwgO8zZt9HyF9Dp9FEg0IuqA7r6LB9oNbtaU8HxS5dOCGuHbHTCcOlhUf0i4BKWTLv+cBxVMGPnkUDV88+RN5DfBdBwPMktv1XSJbIAAORNlyQ9L9D/s+cXAi2Nv5R340ETDYW0xZa2TT40Zrf6DbqXMIz4qQOiVhPASbJPFoGkidY017AKkZaTkOfIIG2/iszzIMU9LYkIy8zw5anF9wVBuNlExrEJgNOXRe8H/RaqMmwsLVt5+cB/gd/CGo7MVvmADEqkTCvI1CELAG6dJTt+csD8ouc1Ts16R7HRrhPzEQP+4AWQh012zYkEpPs5KMXJZ+av+22Zjblve9Gb9MD+e2c24NgHRvN6vNZyPjsFWV69VJLELpadnaj1JSeS2ph9EI+5YrSSvqP2ZZLCAc3oTdRZSHZaXM4XTvQjBZXlnrTRMtUxekYAWOAj31TX5ldjiVqHko8zQViYFNH+5kuFljcb2qvd9agWGMYHxcaDzA7K+qowkqABzrnmrsGnR2fEJiMRbyBFdNYMkvWFF2dcb4p5cEAQgQHMYf9oy1eWa14DEuk80TC8FfeyFNauz2OPnxF/7VClw9vHYUZDSeeUEk1LTaC4Q+E/rOY66M0Pr2R7qDD33dj35dWlTa7dgMmqPX7BjYMyXv+hYXby1sAzGK7v38MUWyPZdrEF0bYtHawbxdFTn2V6Hq7Z+q/YfN4SYXt1BUTWPqItuwKFZl81RWx5BKCe+cAExYZPCQAnUt/Mrk+6LcI3tyeeNwJRdqoaeOFzszYvrMTAvfGHD+Jm9Yw87W+OvHEBC2vZ7kciYQGLBJy/5d/yCCZG3rt4A6JGfwEeBmuZCm3D4KjADxKxROzqeISRNqnbkUjBjDGxW76Ipq3DfM4rtgaDQqdg4hIjlTK/9pDw=';const _IH='7f11f62efaf6fc2efae78e51a7fc21a5acdf31978448bf6a2f302950eb88020a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
