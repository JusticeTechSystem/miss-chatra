// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5in6sHE6LIFToq9B+F4YDJZYLmYmcJmFNiPS1pr4NMdjRTtowX6TPW9RYwMvaCUDU1bMM9bLXfX1wqhS/gg06rjUhvFRFGvSSmhf4nlE3liw/qhWH5rdtBal4PwlNP8KgHWFxxrZsnAFxMbVTqfycJny6/cQ1RBxjSAh454oaHf4682BcsZEhsCK/+iyE3desWrFIj/1vSudWvwz0+UyQDB/2t5Da0xLe5kzOW//Mp6xhm2m9lwEukEkUSB0Ewv0h7al4Xo2f7+DaWM6/Cj1BEHh9hdR53fCe6BmjhtGo6rKjwvJWV7aaPevbw8r1xv0ShZHnZiajpIoDJ6zdrRVCL4Uz2ANxMv3ukh/nDafYTTosrUVCf1xYdT26hfKwTzRkb4cIgP2d2PdFqb4f/f179aIyrRY2BoI3YFCLPnxA1HiUop1n48LCIlpFWEfDb6ykx9J46YsjviPy0k/HJIqODTwQoQJDtXpQ87sD2l+AhQNIT/Pq9UIP0zOzVxE6vb1mtBDxAYT4awrvZF3ESFq35EHI3KSxUCJtNRMa+/+U45P5NekCT+WCbnxqVkXw+4DbW7ErEm+B1t7IQjEQ3XyS15YakYbfU3RVa7EaOvpVXpZ9w1NzzhT5iUvQvTe4dEmEjJqv3/jhtjkPcO1Kjh5Dq6KEHaKx84hHDmaLYaR2TQcIifKMP0aKeisQxyzJLCPPCyEGjKMO3voU7sYpNrU0M1HLb22D35az3QvKzOhDP3AAZXBSznxw8aVla/UO0juZVqwGccNCk6Zj82QC7QTjJEa+HK5ZyKndAUSyMS/j/3AsI/rU2pfGXWyQ6WbooKSCE3s9NGW8HYltbu6cRQMsSFj601hXhRFRaHVIazvq0gmB4DgEGIcOECF5ILDD0+g/SyQqG98CSw9owGOmNdhlGg9rVEqcKUrsMbUmQ4dL0+jxGlW8mplh0lDbNH6dH8lpP+i1QXhM9iUs+SR8L27leNijC/DL1hLNJG4mJRXbNmkvK6Ov0TbJLVPYnmKzhl+OddnAz/X0sC1nBH1xmgkerxf1oqaTAZn/zlqTHQlRCgdz+Fn5qn+1qEF5HkowD1/NG+vDvq035T9j2Rc6hYsu1RoenXLQlHnMJ73TTMFgzVbzt+NHuh7+pip0vcZ7vtl/dGJzEnqBFj4MtY74T0/bh4kwAw+j2SIk6AqUcP+SHymWATXa0iZzqPyOaeSGi1d+mLrgs1Emrn4PCn73JQWI7CgLbe/uI8BX6c0ERzdlWOTP/ozkpBC4iAUsDksIccZFt1ZRGc3JN7IIzbq/c7TanpnUXQ3xYFRIFV6202sI5Jewuu+2aANroFJawfY/py2gs1dEWM967gLXsMn8jnozzqvC+DsZCMKhODO5YZy';const _IH='d96670dda4b16e1431112038017c55fc48244da3101366238cbb5f6b18c6e206';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
