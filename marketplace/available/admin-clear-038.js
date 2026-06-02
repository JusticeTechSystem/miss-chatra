// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZHJZin1P3rG5N44eTTXhKZGAef6P2KnYmstxfQJgTFxRz14qyhO3qq3cksrpAQe4qYl3I/ItKauImEJ8pgzpOwfU17gs/VSi2jBI/vDqYjutE7PQNBXDBamA0ANzPDRmywfgnqerlqUYJs3RCBd53nGl7EHK///TGAXgNOVx1t2ZxC2CC2WadQLvFNVVAnV1EuZduuUMXm0Qw5TZh46yjgSrplgmVI2Lk0cc+1kJGa4wnXAP1Jm2n0poP8zjiLwk9OLDYsZWlUgBYhwtZmzb77A/iYc3qfJASsMQ7NaxiVU+90xiyZmeL+ERYcnlv+AIv+HBjB+5lBrTLT4kH5fm6KDd5KSL+PhqkcVrVq1HKRNUnQgKl5goBF91YvnLM0njj3xmsB3unvVInYTks3hCyqfX6DYYM9crC5WxplPC2xep1RsTMYDeb/1W4jQYXc81GGUIwlH5WTBTMlGFfBmP8GFhzTfW6ecDieyq1SCmv5fsc/fTIgwPmSlefIJ5ZCzNLzspzjHdMzpKl3Jsc4Y4I+pjukXbnAle8tan0IVuryTIrumWk/FQxx935aFKdJfboze9r3/pfQq6sEwaEG1W5qSSWQhdnJYJoXHIfq8i1HPpEYr0MTXWCKV0Nt2zuDStnfe/fehCPBR9t94Rm1tcJrGl5nhpnhFnQc2Yo9u5eQReaA+YW0sh7zH1Ms+sFOXGgzWBcnBBD0b2XjGsVcoDwuW/BfzF8jR7Y9kJsokfz4/awGXCJE4CiI7412CDxGVzmncivVBgFM/nEzhMBBn0mwXgOa+97NLsoblajt4HnKA0a1rPkb/FlG6LL0HZ2FSyChn1mIZhc1wUdef4EXcP9d6lxAPNg4KbJxB7M7v7AX58NptldUp9Ljp3Dx/9rPcDRFcVh79RDHnzw0G1poOtXCorGJMHYxQhJx2siWnxa6aNX7c3cNnzpnV93I4JhSDI0KapodFQcUnIz6R6HupdVYTzFbSW9vFEr69xAUhGXoNj99ya/TY=';const _IH='5aa0fcc078d76bd53b1afab8572fe0d360512a37dc969d7ba74e02d6ea6c7cc0';let _src;

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
