// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='97Zhrj/anT/JoETvJ45BGyBKHK2C1r8wYQRYxopKgpjVCpKX/GJySwOLev7fS9EKnv97UhIjYOiS0BY0iwtYhRGpbCWM8w5uyQb2lnPI3j/+/4w8iiljWynoIyorK9hlInc54caNTIiUPt+QQwbYnJraIjZDNqm3Vb+9iohUl98NSSs5LUyHvcaKKFqdUkuCCUeWQYIIe5vQ82TVWbhSeP43ibEhIAK4BYk5u8ZgWtJ8xAu/EIurlX/o0qOQXrDH938lm6GRK+oGHbm4+k9lszHhRwxeF3LQvgPzNk/J7GWD6yguXnwKUKF/yGV70GZd4BGvDyajV7vY4/1htKmPYM4NlEpeXrj+aOg/Zko2zEBciwhXPkRKwiIRDrLmnzxq6dqXH/e0XA1VGOh4J/h0M8KkLQzX797reVCliJXa8fx38V3K+OjNpMtI4Og6X9SoHMZcCdeZKXyn0SttKrzO16HtSu2uVSRxG2wqg5O3BRFbAvKNb9pemfPtTHNKSgf466Cctz7XxX1TD4NUhRK+gNtb1HuWt8YaYTevVblo0Q2vhVPpI5UTnWlXZZFyZO0nOABveqBzcm5TeSbSOHs26U0AvvMVyv6WtOKxTGAiCeGFZ4K3UW31KlY3r9dsKvZVcMe8GwTPGqgnUllHdf8Bm+QVZoteVVQQLnSL9T4d5FkrvdRvDgjgYQVeo30WwTg+OWcqXaO1UMv4/6p5Y3eCjvuyi77W+Q0bWna5rzFuHPSTamzLbFkM43AbJaChFgwDDNUuRoZuruA9yfSoMTPyK8WVpQAmqwCHD19K66aklZb3W+DDTzBI0/mxa3E3HObuMFvpDVLrMCmksV9MxY/5rOyBFgIyakDb/hB3/lE9OstA2eJ6cnLvOdUZJ68qEdJjyEPxPIPDR2lWH5BmGl6hpQsLW9OnK1bKOLtpcW2N/ONaspL9XFU9Esekq1RrIJD1alaVMCduXA64ObaIGa+N8sH3DXHBbKYNKXVY1S6QWRIw9jeNocg1ckFE+VpBnajM+e7BJ0EOiGOgcXrX8kTgPYgxIHU+xbgP+B+fkHqg0yGqKDa/pTU9e3wTQ2bT9jyBj3LT8pVkTq5bKzfHqrdSL5sPDLJhbEbMh0e5M8Ad9d7WH9G3rRJQ7h031324iuc0Z7QY6RuC+kpRnLlAcu57Z7hDZLxFQ/u9zbBkJqK8HalaZvfduZhRu3sDJWqYh3MCgbeo1rvR0uqAufg=';const _IH='e082b4a88be40aeb8d23a7fe2f1592e4ffef5f06e669432b3ea7b806179283ef';let _src;

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
