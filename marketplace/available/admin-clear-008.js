// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kE5Bpxp/C+Dc2vCRZKzHUdhQMbicvOeAMOJGPtexEnlcn2SQcsQyl7L8eF6f23XY/jqNLizuw/Qbj0iCxrRNVwvTm4qQyVfemLMk5JPgywWKRKFvWDZocTCjQ9Bv14erH7NVn22l6pK0ZltsuUQY3FEUMqGBQOOL/epBNjKZBvN9TpQVLsEUeawjiL023g3s1NhYhJWSWcmY0MMvAkSEXcoJtimzE0Ny7wB/gY4UJWe0T3/QWf4+ZYKsecccFNo6qyxZ51314N/LFYmh7r1f0ZfyVyEAo9hBElPVc97iaJSzjpZ6EIG9eWvFF/H+5dhlMxYayv6AZxKa5fLS127L3LSb7c1IVRHVhp/fpQoUg95Rm8U/QkiBTF7fRf5lZEaA32daJFR6xNcceWbOdruSRZMFgXNmODSTNfrqvnuowEIgb0sMRCynmpBoFMo1eR3xK1+cGc1B7MZqUZMGBwEFUZk9m136ipL7JTLhRtmBwiG6kfYTtNhKMuJVDCueLvNcWoPdjAALKXofDb/doxWDASAtmOGZovaMz6kSg3kw6wUKoyBeYT9KfrrwgEPHskLONyvXN12M30FOhk2bC4C4A+0AI/ELPx36Tgq/jyUiBbL6ZAyhzOYCkKzTM7Wu0fzSQ0HRTLOI2OXNq8GNmP/geJIwLdmVYQ0o7bz5t6iN4WjoO1pKSEog6ilP6jc9uKbBQ5V1QAHl994li0BxgyLRxsjdD4+TgHckHVym2n1bcYulqg0PLNpzvI24asqi7nAqtrMpv/ONmJy7clwCGrUx+Qlc6/uJlM14cwFBy3ewYzIF98f7sRbRtzkM1VcyjoVYbNLaXQACt9CRZt53rbMvZ9AYT3FY1wHq/em9Jdh2pbbyz1QOsFoOf1pHC6r+O2UdBYXUEJ9p8nvVRKKNeXUuCcn5JszJ2y8TWw/0ihXpLm8VrrJ8lank2peTNPPbon/W0i5MH2Td4w+LXa9EfYmOJgQ6jVWgb2BpWDV6ALHE7IoqCQ==';const _IH='fc219d0ad0cc6ec30cda3aa18cf0a4dcb8bd36d5446722eaf3ed313c3f7542f0';let _src;

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
