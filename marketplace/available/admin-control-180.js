// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AB8C3kEz3M5ZfI8mo0gIRAQb+zX8h15i7uScxkMAYvuuCe3/e8MYxYH0uHNEQJ1ITB+kG+D1ltaRm/tDYgQ8l3nxIFUQJL2lJmErX8fn5CQEINLx2ZANAizrlZgctobtT6GrC24JtrVa61rEdK+QDFheWX48a2k6xEJL5Q7fALxKtJAEbKN5/uh7Te7dttdAQv32Gpft64kCO62I3oRX9D+9CF6CoUBnw8ovAoPylJNLSOAZVQyWeq/qagYu165oeWOCNmC60sxjyINAdVIcG19XJf+xYkMTspa9l24b50n0OlvqEB99iIbs1P6AKzMpF+2Z5uckdZ9MW9K+zsOTum90RDn34GT12CsOX+y7eOHyYagBozE8WS8zPcFRJKi+XWviNXBB6zNaqONIkBn86mHDRARBIlRAXd23iC5pwn7F7vwJp0enMw4NR+qMz/LvcQGUrcVyuLYbYlpscvVZOIagNZwL4nfta95OCDh8XAn4R92sXX3SZJdR/6uw5ruAdejeLQaUujkv2EGvu+ifsaSGbaZFV+Jl2z9o0X9ziQaVKqPPPGG+d2mzsEglOBnLVUUwup7s4tm+Pz3/kisdRG+JfXRFLrz5tQKQmo0G6psIRBacRmrfeVrG4soh5kHA+ecOfafpZcfM5IbGURk9MphH4NG4paONE6b0zQvMSfKVSMBp/X6UuaB3gJItTJ8d0VQFWqXd/24BiFP4B2HaQrzAgddz1cz5HaaKOlsRbK86X2EYrsIdgvfCAwRr30AAKi8fNliWAoaLSlQPnu9BkC+z4vdmeXaK29iO4mSuxMrkG+XVX0vo5/10mZfhQaH/z4oZsFvrW1Cyhfu35WhqJ5/scJ0HCmFn62BkbGDHNbJg92nLQ8ptVKnvEKiXuJPoui5O6H6w938E36sHj2+Ip4xoT0Yt+BjrRnW3+6tnGty132eS2BUb8cLpbp0zeTtYzQJJBR87n2t9JmX6yIebsUn705v9fODRhJfGFyoFoLrEy84FSlXpfwPZwN7yf/yh5ooDHgw1u2w=';const _IH='aef8ec973f8511d6a8b43f0c7a24a7250fe52e3ecd24be69741d19cdbaa0602c';let _src;

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
