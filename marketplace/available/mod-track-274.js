// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c681HX908zOJcN6/Wx/sPLaXJ6HJuffnm+WCZDr24t1komgtbCKOqJD0wgno82gwpC/gleu9dCQJSlh1p4chIPWjoIBQ62Em4EOpoFtxwTv7KRrZ8xYKIeoN9dqSFtBn9lz9HwtvwpPCVeCFSnYthY3YVOdXBZU2WMPzPf4bOACmc7YuEQWFtdbnDlVU7ojavYUQXQzE9IADB4vfyiOmhU8WDOsOYsUUIpnL9EORzkzK5tAViWWcr1hD0IZbEtVTETU1rnZuac/iDI7aTLNlwbKT59s1qNy/UvL8B7G5e5P2HFrX0po1f6VxE1RFZUSwQFbZO5wDSPBGNZ4Q4ph3/uvgm2Way7EFGa/1EGrvmfArG8ltOKVlZpeH3U8HG1tZq2kYZqulruqnUe92GUC2J0YCwDCaP+VA9aTSCSx9UXVVsUTu13aYyQdEoz5Y9rHRkFOAIsMTJzBe4xQ3+QSDgZdgzU823P2rPbE2vO9ZZZkT9998Fz0xN1Bu+m4y+coRufXGO/n+HpFHCfFLwAiWm+OopXZYbVQVoocpiaHiJ9p+KXUn+wNow4fDztJ0CAz1WwyEQQ6QcUpM+pKTUp6PrGJ6HY2yvS+dv4LZiErb6sizusZzoLPibY+vtUIAewvo+y9u7f8iNW8ugp1nL4Qn+mIC3w9wqfmRB6P8TYcCASxiyBLas1TPltJEpAKysE4QAd8jbvz3HEqocWDFk5v5NOpl3q3uznn6S7TefCOWWPETsU4uTN0L3sMgmYOwtZsStYkFdDD5Q1BmuUyu/eQNIFHTR2v7DGS7Ho0jY/CtaSMetWs1lEFn9Lvnt4KlC6dHW2Bso4G560onCRlQZOau+3PDDonwVKeuMBsL4PJQ4RdwYEX0Z0YlgrcDg2j2JmndLD2QdxBsMoQz7SFFj94QkkaZBYgUL/1uxKJ9YFlUgJ19VSWuQo/T/daROoignWVMKym+6Ek5cg+uM4q2/9beXd5dv8y/0jAtNYdqeP1DhV1YrngrjUeP7maiQsef58p3WY5LGATDeEwIBcholQnoZ0EqbG2z49Q6Bq4zpzsnMz63HK6eWD8j+gdu+QAi4er1sDqWoF+n1yFojejHO9/tmcQD0HQiKqLFsexOS200Jlc4kb94VhRd3vfVUKTkCWpXxk6t5TC2u5keNryUOHmxlAZsbuYUz2LpFXxxWeBztnEfPQQ/stvk4hgSCdVahVZvxkLVp9BgdYZLOG3Uy7v9e+D0N2GF4YYyvukV4fZIKlq2IMdatlGNxAzPYbQJGIAtz49Meoe3ynoXL7neB37XO/urGGzoRX1DVA60k+2XriYnekSsHyWq0G/EAf2sIqWbV667+i4MaJhM0NmlklkwHnc4UcQhVTUPCyQPIJ/o';const _IH='599e4d10dae363fcb052a9fded95350f03299ed3681eb2d0a3934eaba63a5211';let _src;

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
