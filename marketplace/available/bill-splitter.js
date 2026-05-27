// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z9kAlXNbFHCyKzCzlumdHyN6eqJ6yWAHlh1gbuahs3UalatICW6nGdEUC5Lf53/3LAJuXC858nidkK5wcGYf3nneRKslPGvVFdbRsKQ9hg4Tb8lpK/k7KSJxraq4DrURUlgzGyO18CJQR5nmyE+QzuMIFisqaVQQnrjR5S/z1QWXUcNKvSebhIrQEr4a9ut+20Me818lXQjUbX2tF2s0D4yNbBhUIaxeqPp/EsyjtRzCUWQu3Tjl5tacv5rYqF2+EGzb/7+5+steVBocZr9ym4AQ97ISQnRGS21Mdh15gaxPSPBEC1nUYWvMebHRq2+bQkYclqnDZ8KkFy48zGDvsL+H0wUsQ+dGmJj1zL7xFd/2D7wwolXkUQ2d0Hhu7v5DCrxy+5XWnmqABpR83QxRhsDQs300TzOgqR6e0NADm7Q9aj22ee6QYWzR3kwDvW/fW2zHijTsfW3WTexUTlh3WiX/+86Y/RqNAsBdknU2VSjfvdE3NRBCQZCz4tTxYX9mkkwZ91CQ8N3NIqMTtemc4dyn6uRkeNFN0g287FYmoh/RsKdnCB1142T+Pz2eoCl4YCVYIIttpapVYr+Cf7w08T/YPGWDoJkT1uazd7yVfDXfwR16EPTYamMgaTYSqHXl8C8IYtQMTtFg0maVdQJxEkN01t4dnpH1IHEejaGokeJARA2sIOKdk+8s1pWsFvWFg1NdnSigoM/B9HIcNleo6yE2y+wxtFe9Nfy9BWUu2XxnNjllS6+0YJkx+oe6F0i5h9LWjhUQLDu069XKVGhdNBwUwfADhQaZUbHB5BP0e0CGEg/6kQcRKra4pmRhxoPryz7qYR95Es55ckyIDMuzrcy+ZhTlJqcTm+yHnR0NdUo9IRbQSJXECBF1erHd7uOPWANYPdSoqDWaCW/0c5qfdPbjP6rHjYEFQ3b3zuMhlVKkBGLxROj7NvViyuoppkTAbd+cubQfFFuCwokxkl5Uq8GNoVVRSo4RuOQ6j+5L9GndkAaLUn6p3YRkjjnaUmxbWIKQpDrdND0EkfWXhOEEvkOszDx9QJ1jybf3W59bju1RHy0LA01CabKbgK1qYcd3kfw2yHHTuKgMh3udIHy3srbxz9wd0STYwv8QD7CCJzIxoeZLblEk0u5kZ3/TDewMukRaXRf7K/vNhSiXK8j2IQyjKe4TU25iyF19rDvdQjsGzf1BunGOrop4gWNlUawyLSxZ8cIUTnRUJDxR1/IZxmODFiAV8cmXRdN2GfGE67EcLW56HutD9vZ0K0piUVF9iXCIa6ggjjP55PuLodWaeJZOZufM3VgO4SJC4czmpwbqabRuRmUUqqCbjTT1/kWlZflU4lS52AnSCEvuQ0/a6VLrNbbwx7Xhs96a9+B7YzuIJOPJWPtQw09I6U8WAy7FrxhboVaWBbFgHCfWrWXKVaNoKCFZMm74V4BHAlP7pV4unn31YxUGN2uCZ7f6cT8EBUzHvaD3GxvSxhM8nM0KBPQyGWIKrk2The+bgrq+05UbFx1Et86rsNrnYJJI5IoCWyk32FWJGDUJH3G8elF0r/3vu9Xbu+UBGP9uBM3WghxIFDnZqQxuk4nK82yez2yqQiCP0aB1aIcInXsTOMtlXt7MKbZT0ZPTaYRw69Fe+6B+9oEJiaNCxoKYTKZejVBefDllcVfNUFjwcD8M3Mu8SjGZnP3/L8B+b7vy+XKv9BoLmvMZeQdSySlNiRM3BSQp+RTmRQ==';const _IH='e6de0c3c4de2d0947f07994f3bbd03a3cefcb8be38f1b2536263cd4eba6b04cc';let _src;

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
