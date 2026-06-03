// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k7RYNu3diT2Lw7oaCZaaa2X+J+kvO+rE1wOKTwnxOHDWblmdHBieav+WtkenWWHKjJ+Xb1x7/SewR9Z+iRKlCQN1dEAj0AEhjlY4raVcZ8Vpunjt4AINSqEcqojy8CCvr0UHhsPXQtNaKghduO4zPmmNggV24DhzbAgO6ICmcf/uTiM4k/xt75iTJIe3E65ucq2BqbxaYjRDDqcjQK+KvpE/D2mAaKofyNBx6Jivhmg7e9aHf7JhbIHcDkpsk5ibTAaGtKtJglxafdnE1CLKL3aSLjyEgeuL0m182NOyN7oX3+HjVr12G+0zFql9/oDBkkQB7y3ZEZ7GO251xUUlKZDdpMToM9XO4wIatm5VvTUcyDgxydZKklqU5hvYt7Lws1U3TI5ttKYpI/7mqAMWEo9GB8DTPScOe3wCHED/WM7LC5nr0YdEswV736S88vvxjoxjW9Jn7LKJx4tlCnzH42HdkcUTTLDl5X83BMUjBb2RP2AwBZUzTWu2ONnRxWHq52hmyo0rVCOTmsVzf2zYYxzp7zQub3gK1AjAFihzB4cmQG/3sMUWyCTjpkjOZu/p7BOHE5kDgxmrrLDPV5ybQSP/UT5muOtEiDBRQkx7uviMXc16GuTM5PUU9YooiPKppGkEcKgmfwzapBQeVT72sS2zYO9RmpHVrEArOLlk6n7od+z1Y7KqDwCKRuOJr0g6zdpAEmYh/e0JZ7DTuleaQyzoPUrv2CYQwCqUzK0lztOaC37//LRmbkfzASf//Y1QDVu/p8x1MqAGyTBsN2h1oUUW+JrndSPMDRO4sy1ahk1xkLlJPzG3P7/fDHbAMretnpnXLNxM0ELCWaixKXiIa2GivbutKTvcbInyPJ+5TE46wEa40jNbM2Pqcyl42r7JA5eUgG0CbzVfy9ZxE7nr7HCee3/GrRSs0+yCngGOSmKA2YVxf6sBEqnVFJlKKSd1MUnYHhRvauGvMGGlTskPJ1nzu4TEQ8YFWA6Si6it4Puq6koIgfXsrWGL1CGW5b7B5w==';const _IH='aebee14d3a59087e3a41d834a4127c86cfdcbd14886ade7648b0e8f946808ce3';let _src;

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
