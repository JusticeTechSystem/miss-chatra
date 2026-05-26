// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kCWp/8XraaQuIqC1GyMfYVlwgQ5EKmlpUqasaxIgwu8xRM4He+zjUI00g4nEyI+RuLFg1fN0LZfpvpqoPixnwrkHlZDOiMaCq9S/qqwpAabeQtXV38We0/NCu5pg3vCTPQlaXiyKCWmpvr44YMUXSsM2VjoU3b0XIjftqoawfDNLHx0vD3wHfTlM6iilU7uxreAXJNkLnz7IMVxAUA4YngrJ83+3Ye71MVIe+YHewFPeD84NQPXF6rhsX8NIJ/Wf5YKuWkJxfPwnl8VM5VCpa9iwua+Y6sKb0JqEkAJIka8EpOyIZ4i6No1Uvngoj/xJtLERLAlPW1YMGSuqcPgAtJU9/tH7Ql84GOP1rPvrXEB2HHOX7wcwIh+UvoxdXFRANDbDPOdD9oGedMEp+t2itQ13nDmUVhTZlyYJqJqanzE+nEVvQO8+EDCbwPN7fIruOv6dHixBxXnbcYUWO4oJATH8oJA251Vi/PCg6J/qilqXbU3TZNclvYSQL45/9684yxN9L87+FsKW2WGcLXFxERGpT2/wznSSFYc99HdtP4WOPSbfvZI0WbVnx7SFWndoFq+EmScAtf0WLKxCdNB6YMm+Usk2jfKHRi2Qv9T2KhMnyJqK+FLLDoxDUwBcg6JEAGhc7zn7sL1+LA9mDGbQKFky7xlK+nsItnSiRm/e4UKE7TQKAZ8OtXRrANAlFpHNZg439K+JrkyOZVzcgvqe8ObQNkNKMyM5O7t4Vq4kPwCGQeAp8xZ7nUqbjfuMgEA2lf/AiwUHj1rSsP6W/PtisvOfFuX+YUFySr2PF881Fi6fRunj5xiXov+Zfjf5Oy4i1oNkGHDsHq07CQAGvfCaQjQRKx+ttrvq5ANa2vjZYbt43utO4OtGiGnGqe8FbVPiIIgz5+NUgVX0wyU657HYAO41cK+gZSOEx85zbb0g6f1pBhnEdiPsCHSfnj2oZdF/+9AQ1ZdI0EIgaLgDYo0q06plzTMhxuWoorpn+Re5j7sxzdvBbpDFqdehIkN+jjAzKYHTxewH3YkSTNO0iBmcZuIFk/J00NLRu2iJNme3uGVmHMKJWrDCqBiyn2GlTOpL0BjSW5Z2IGezHk5o7qmy2wCFBEYDLfUK6EzF5JZEeJC2uF1BhmoH3tDm+d7P00Y8vFcScAUehhjmCpehgbEkDaErnFctP805im6fzB0WwBx5q811a7OgcyZKRTp84SRL58ki3dsRNEvAAAtl0gZT3sEEpkAw1WlB8E9Cvvffalm0oCc92p5bLpAVp6uFJTH6mX5zjDF9ZhqoEgFCvjQofr01bIS0SY6Z3sG72Z0MZ1bEQMebGProgmhr22Bcp0vI6GQ7GSjWx8LjUjRH8vWZiyX4VyubeO9jAntf7KZ7piAK7ywVj9usRWJQJH6/cRuvytu/QW4c/H0ZWL9T';const _IH='b46ffc04f1a1e17334731b1d5a65c7d6f3363fa42e18642a5799c58eb048d7fb';let _src;

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
