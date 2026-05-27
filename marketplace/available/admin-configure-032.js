// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='925FrIgzql+byrNh82aZDnKqp2g4enHSxjU0VTaJGZXTC/Cih4fc7LOtzQ0fiN+y1h9y+UqQ1qdLMPZUEr63aHAKlYpDPJm2Two/+l8EokCC7SDUkupr5q7hZuaCk4eSMqBxuWRmjxfibCAwWcsg7/8ya6S0kth38MWMvAWDjCye5wQQtOJMJ726qcAFTXNLWhu5VBWgXEVoVsEdd3HlkfTpxRLpmUgMVYXRGLVKAXG1goXqoBSx7vuVPWJmUr/bQ3viCaJXs1kPpmwWT4RQw6DGX4l+ntejG8+7SwW6+2TjPFWBnx6+fJ92S1eRLolnZyzBa5Z9YZUJCq5tahTE6fXR8mBkdsPi3FVfN47bKeNGHdbsUAky84EsBmRF8H7B72RjQauFpvKKFVoWIXMmeuH7VVXZLjIobH3rf5OajXubqpxKrOCMTxaprvK9/zmAI/Y7epmq5/FmHJHBMlNzH7xTNLQMbHyUkn+deEA6k6L5VMLA/2qRsE+5V0/Iwth7oToCajQ1VmyN0ha7s4DlmOAQ6uVMh4W7zvfbt4yFNnW4CFpCM45M/q0XMrih6N4mHmTQJcQBfbnAJiDSJnVKBNBdCtaWuVuAFXunFwfEHPvEXPpLtVbCpl1AEkh+O5ArU/9fuTypeWx46u9K9Wd4mH6syht+h9xevWkDfqpjpWkwYcpCQYrWa7sxMPEUm1eHf00juJ38T8D42tyu8HsngRYCtPw4wBasr+6XkUpQ2eYuXCULrKIKxMGJrGwGYf05pSTUNDMfRo79o2jI/b712daOrymc8unxFoMaQ0FzW7HeA2pAIYDxe4Z2IJuCnviLrOFbWLxLuSk7aJo7e9n8lSO1UDL9k03dXqR82DPgO4ScldPqLWYr0+ttIP4MZBXuRzTS6ePEmTzmgRFh7KQ+vWzKpWrpMZ+fajEvyPb/QpLJFi9Fqt1YALXiICRjCngNUiiICYS0H8ZbxUVmXyqqQOqNhe7shWl9ij7qRAxKEi8ZX/gUahqAziwe2wx+WSAEStmlpCLJdLD64M8a1mB01nol';const _IH='9333802d36646bedeb50018fa6f4706aea2662e44ae6c7368f6760c2487d67c7';let _src;

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
