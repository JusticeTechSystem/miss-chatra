// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eM0aqmUkb3uYgticuSQ9KQDJX5dONLrK6KkyZtSrspoVRSvEGAd76odsdlMGdyDL9cF1lZfHuN+vQY14atDynhtfVPm+c7C26tFs2XvSilDNm77SdRgnaAdnvlVFPmwVUGUstimKXQUYfyA1/b475NEPjTOHR1L3qCuNBm8dedzg9l8YqwhAejQMHHO7HVUfyGXqIFd+e9CYQIn0nlb4ULDbuVE9IytCpoF/WTi+1FULXT9XtsH9ycrL4z0Bz3ljuY7kNYK5MUFq5sClTY+OfWdJYDhXX5FOFRwj5f3CdG2aN1D5NLklaQK9hK7CXWfrzNJ7mzh7KJ1bxWq9HCwH7nNdG5BiQyGgnGGxRHJeAJhogMcThGtFT7duDUrMaZ74ijlztOVWftgsod7bpqdDoPia9KHPVgLMQSoGEfYioua77KzeISQVf2w3oF2v/JmMwmabPm0Zyn2YC1wcwQAktRfOaZDeToLvhnfJXlfPBl2xckUXl1PnDSuC93dnA1eb6Q37TuQ4B9S3vo+Mhe9FJLl4GK4i1fbiohEuRGbha+RpcUC2vgKH7DcfcsNc8ZmylAtPiZNAdS5JJ9awKIlMhD/263wCKmR5jSAXw4chKT/krPJaeAIVUJYqBoS2JUQll2zesSEh3xjxDq8pUOBL8tALdQCCIuDKY33SlB7w6cpJFtrQO+WDzd9K3Jt/EVYzeoXgQe0KF8Bfq/Vtp9UUaY+NDHQkYleFIKnKH4tcabd3FRJLowLa9OB43eVVE4k/4XxtdUaY2oLuUNb2OcEhFTvAKlEp2lgyLAWgpJOWfmyC1dJlZi+gn8HtMrEjKEA2lKFE+xH1tr43zUlYGfpwiWp3Y2GS0H5YtmmKIzI+m0ms8AoczxFt//Xjcg4IOHDyvKiyYjKnj9aOWO+wzrfuBgvU/yQn3sAw2w0pCZ4CAl924nKthArmQQMseX6qciU2i0phgFWw1coEMPjYm4DjUJY4be3/l2RRLK5G0DbH4MRhPZZr7OBxu50HFlDzY2Lt+hySd4kM/EWa3t1k12xiDTZixL2+/STDwyF3UexNa9XCGeUuorr/3gW4t9cHhoSomQ9k3YIytwMm+waPZLkSobpH/ShGhL6MalY7ityaT7bgL1N2+BzReRXX+3+8LxApVxBDh3pycsuBKj99UaN6WDBj8HR/NrtwcG1lZWdltDslh8yl+Nmo7sjXzaP33W7J1WDbIXheO/JJyW4xsuFRED82lHKwukBaexH1Y7Um+rgWC3NQv3EyAo1L25H/JMn+9WSnl3PxFh47dkpM+0LAAPSuffhYb5hA8il6VajRrUL/65zRY1rGRqtfjht+suMDqKKbolWZ7D9jrbGgLP9I40J43QwK2ONZ+KVhoGlciqE/tHw=';const _IH='37294225952d0888c5b33ea7467e019b8812fba6d7f2cd3e5beab9db0a5b1892';let _src;

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
