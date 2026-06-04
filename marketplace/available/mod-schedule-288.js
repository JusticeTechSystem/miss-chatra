// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TuLlqmvoYgYw9rYp8KRCv06I0TmgGcZyJi2k2C9P/YvzHpGfo9tsQOIReSibc1R4jAZtFrzVZX5VEux6hKYJ8NerCyZ8FkO6rhCVn/TtKPX1xDtISnqhEaJm9qhBTbwvgpY6CYxjoBdxzBzv4ymQkxIOOXhPsaY1ZCQ3PBmVzRmejwrNH9iw6UXwC0ZjKLzcmCCqnP/43cA82RJKNJ1nKNmolRK6pb8b4MvkqQrSsx7BF25TU0ZbzPwSOvL3+yK4Tb+UF20lshhQ5FyzLMsEAAbs3em97a70Hrvxk9vxcMJN6tnIK4H5CG2oI81idQM4UeAIm8Q0MuwoHMjgroTVl8rrShNnr7aGZ/V29dSX67vcdiUt5vHiC7gqErw1WhTj7IqgubbuVvJSzrbELukkZcZ4HlxpY/1wbztE1JZ8u+fvV3minyJX1Zzf4SvfuFxy1JtLUz1MAA7/YwjZUabtu9EVihsAh/09/0krWtF/cQ8h9odloPoXaDZzcHKGOe1BuAyq77Q33xsp+NRvHkWVrkKuP7/1iE4UgCR4ocPFM8EKKRXzz5wGwCCj+0lFNbPIsus+N3xs1U4lvXGxNhKmx7IpBES7Ix32J6I8paiIW92Y3WRqM8eWxjF8cyWjiXdAxTgkp6ez80GArT8e6gk+nrukBc0jLaBuq0sOYYEooibc9a9w+wcUMcJHbK2W0U+FxT9fJGrq21x4yiep+FRxnHQ0+YJCOJu9vgE5cHNMa8mjkaRabG0HL2w8bLJ2OM1y4qyTkk629zoxZ0r7QnuPiKG9zLn/OHyjQrVNq0j3S/bXEuSWQqBSa1dkrPWacZ4ofPEsAKdMkXQ1dnOZRez8rgefEo8lE8NansEwbT+Ltm8fA06Yb9N2lkDwbUZRtkg62nFDn6PXL3iYdt/kkaOEQy8tErAN3mC1sEj3xnWDP4KCb55u4SeuNHkfzKAkPbG/Yr0q1UX6TKTBb4RQbKbWiM1Y8bkv4Qha7iwUbNA7SlgNnwBJMu333o7q2h215XMpYdTvx8vaddNYG4xBogOR7ZXJIC2hcVzlv1lnuSqpZnuWMnyJtqpsCSIzYk3yRuuls9hypwvlp0trotvSuAXqhJtmw2hqVxqgfLekxR37uuMg3+ksl2cuyESFhRn7zrcyNxgyzWfZWsZmnajkz7yxDkYV5S+N8JnfLc0FJ7DF2Drx5Ur8CfoyQWWU03Vpt7PT4Gk7CnLg7yk+c4FUXEGEkZpmU3Z+2Q9dOHsZnLsKPlVgnlGSIkgJjGrBxPX06owFVO3gNdqChe8hB/+Tlvpgaw+LtVUVYxA4IAKn4g5rbwWNUjBPl4Hr8oiDX9LFsQfU4oqcEGsWFFuQHUnBMvcMMRr508B7k3S27Yq5V263hyA3unmpG+FlsX21X9It3XMyrRzDat22zrpXvp2/';const _IH='7aebf3f3c499536ec1f46c77feab56796940cefb2aadd891624cae8f28bb4fda';let _src;

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
