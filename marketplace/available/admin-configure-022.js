// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rl/4DehYCWaUyNyAQUO0d5lNGDXDHAyVrN2DGuT3pGnCMqCddMFK2BYHsKst7E6hGpOKLvfIx40JaY/cG1iPFuMQV0SiUVYwV1/4f5Dd4L4uXsdfFNPxRn4wegdVC4/P244yeGk//OpkrBRuk4mX4tZI8KBjll1+HyBtlB4nJk4gCFmF1OoVCVVMaIUuxhA7MduikkjRMhZPZfOs4errwlwVV9e63RtFpRRP1NTuhrmpPXRg7wX13JFy9LVic81NS2qijbIaoXuPm2bzn9X4WUHOX4JpSV5IN1W6yxWGfbLmgqPdsOiBSlyMMarpqn+bG9ynqwFULhrqyTzRV2rPyVN0KzLmrJKN2Dt1JMZWnNNzL+FbMyg2SdTzBg/AiXz6T1z/+rq8QwN/zv7H0m0LTDBNsZBgnA0+wQFsuZfkUUwyRcyOxHnPc7l75cOj4ou+eodWefn2CVMyg4zsEKzakD96LyrJ56EfjI9wTy0j9n8UXt0+vE6tx1go/IlRhBYCMLutaDMyalUzSORxvhAg3qM2sH16tVQ86JZ9lmAdE3j3M3/kfAjt3aks8+PRIL0vKmEZYz+oEKcqx+tfT6dv50Z/9crItdujh047vaho+oy+d6PxxKAPwsqFRQcSyX/4wfNXMUNH8p3km7cBuICoPIHI9qzmKgLxydxKdF+0OyTjtUawEzRXqIScUau6SRi9wMBGBAQMy4B41R7k7+eaxpidl6A4EE0TqhuS2jjZeqdBS7iAefC4tmv4Uv/ePQsgX0FiGi50Lxj7g5lVVEaxMg76lbTNmcZzRzktGGQrRDRwgCTUmKfYnWC4VlwAhTrZ7daDIbk4zWYuMvDNZfKYh3p4KTmz/HGzSm/MeKgrcvBwfNiBM6wT0QkqbhWtwxnTfSBdBbf0fv4oCxy2IadM8JMBR49T7SZTaTcH8o6nNMBg89KR7PttukBW6lEyn7G3ObPCOuFdvb/QYt0ocUdM3JyJrNgVrWwNGDYR0SwSTikG7EQ3LhmBpS6b5ws5OtmeVtnI954rCWavcZEikg03yh8k';const _IH='e8e0ab97e86393c98aeb0a64153d6c8bdd6314f2cc19fed0cbdd4e66e229ff1f';let _src;

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
