// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6JwTHVaT9vuKktJ/10MnyoXBnLwK/8DHOpgotx2M/LognqKn5SVZl1uj+F3mPpFlTuV5pXEY6w9RcRwSW13ZEEHDPjxcn42XeoAYK3Y6EFnCk62i5sHFjnUUlCb1ahfLm5vLxpfR+8eScSuzEizN6UMhemQ3JOrZOSl5/+8IaJNrYbA41SOEVUxhOZqklEF7LbM7028NJl+rS7bSMPe9zYFySfdpDpAQBJwC+Eg6P2gkUrrGKK1k0c6hl7SkUtWiRldSPmn9zBIWpFdrZ6U6sm+tC8Uz49cMPBoymGHAgwidA4okqnB9wq6mUO+qSbXWJTyLMHqx/tyBFRjdYZU5hOxNhtzNkZX3lmHH9iq5toDJVNn0RZe6wTlFw0mjXAOx3MYQPtlEJfpvg2mI8FVIXvgteHzIblpzJQNpPLI27oLipkmoWjSznLkZpXV5GcIATa9B49Qnzfm1KZsIXDiZ8w20U4hQSX1SUuggWll29CPU/eE727NsRSnr2hhmgZNFFvCNwpvW0z+NnVxPsTCNUiQb0jbSLUaFU7qm+WdYAfSY7VHo6jnC12EgkHjs0Gt4Kbtr8F4cwzHbbcCQ2ERv6fm4uooyItsxatXDhkoWsdKfluERDmm2obr2HXubXB9pXoYuRBBLsFNUnPRxXhcmkjOtkO51UR9crrSvCBkf4+Zvpz3AMT1opJkyRrd0dCkOWWfzTgaU6VZxnWdY3udXxcnFHqvafpz2C6hmYx+EP3XVFQNxduoVx1QmxIyHr/YF5u8CZuJp/lDSCdjlhKXpG295AsjdsRLQ2BMFv9Vp+uqB7enaKrLPiW0dBweeVLSuysJmxzK2efv2xP5lfnHtSmMX7MP0XuJ9mtZnqsiTVAhtPtFwCADA+yFuol6lQw8Gaj/3GIlJecAJ8OSlJqlEOjQykNtV8V4C3ef/VjrEIFnffotr5G1rp3UUaLoV8FqsdmYbG+tkX2c2JW5/XiEFYcZyb38Wvf65VGmIpIHasw/AQTCWhRMZmnF6fDnjFIyGqcJReEtNIDbViD74/12zj17ohHHp/PhNa3gU7NSqkwKw8DJSh/f8axzU5SBJ6vMB2ZWOvfPPYRrRRhE5GatgfWiTDdU7JMKBzLHr+lpac5vNRwVoW+jE2QnjLz7hOol9BQFun6I+sL2+P/7R2ySw7sfOSEs/1HFkAj4Qi2gDRaoDC/XTzMKAXCYrK72mqryMDBiHHyxHAsvnOd/l8Q==';const _IH='fee0e5a41f23afb8d7879fca67c46be2a05019f68d4884c03c0526ff50ced95a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
