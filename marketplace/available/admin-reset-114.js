// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XU0nBk/Pa1KBkDjOOg87VB8n0QBU0oKC/9XqPFzvRQ/qGgIdRFgWJGqu/IXD3xddrThpG/UgeMRGqLJu+cD3IRqYBm6x0ag2SAwMKu86naS9XBj8NqCZ9/kw/nzZb6Lz0Pqi/M4wb6Q+33xPJSHy9RbiNK0HUxOfgUEqq6DQxto9fVPUVChGlZ9RPkZoajYj0PjjAFqXik+O80wCBQhbc2npBbAzDlr87Ucqmu4M0flelzybGFaIy4+tUMR2R3WJp54s0Lxz8fxN9UcwwaHj1znVgTe5pPr2+Ih3ugU2KjJ9BS+zWDlq3Bkt0I3f4UY1sI/EHQNqaKLxLD34v0EWX78Z48q7ci3hZ7duQVnClXUq+PlJ+PuQoGNXj5JxGWAtw0M2I2c2jHzR0v64YkE6Mda/1e+dxwrG/1s1f9Douz9HjARfEP7+cmIBDmJZceKtPFd79ijt0hCPjOYKy+qhOPXpGhrnoAojjpvLLD+HUGZdQIvroPuIFmyhmEeEdD9ySr9e9QX4RmorPesqn27u4f8S976Fig0p4BGY/c/I8zFTy7JyyaLwWSyLKq9p9QyuGifJS3AAw/KwU6N0mJJQFWOwyEUb6yf5Uo09z0QnYdIam/c4cnJyuOUa2ngq4S/juLS1FpClQkSSB1SjgUoADVR1Te6hXn4Kg6iFAWkxaBbvubLMCUEZK3XT/E6tcmK0b9Dv21r2NRGDI5o2V7dPfZkUW6ofXeq88fTs8MdMxSCnD0Rr3wM+UtBPRY1zKJjECQ8IID1E7Z88U/K8zX7tn5uJHMENK3eTrW1O+b5AZ/uJNKghuhMM95/VZq/g0N7n9ZEm8h3eWCd9Hvygp53kPwBUUqWUKEKUD1GOCf3VidyKcEeg+2g2ee+03pebwbatv/jefM86GU4n32yirQCv1fTjOKfaLmyry7VpM8jX2OEVzGLog2ZcinmEn3i0ztv8iU9lUCA2ohOh1HpzQcOPMBpDvNlFPlOqgL4KR83nqspApIkdHJeqgs7o';const _IH='435eadcb8082816a75906d0924f0bd007252628b9eb5f798f757bb0ae1ce9480';let _src;

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
