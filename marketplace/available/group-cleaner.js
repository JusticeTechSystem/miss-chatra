// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qHRvnyxJH7w+H7ZtfoZgNDVdYqCi+jgMxG/k9UV4EMi8FbeJ5Bl8MGZmkr9WpMn2I+/Fpjt8DNs4g2oLZXfXN7dHb37YaqpkW9JUM/VJjSQ6cS+mHdb+5xSmf3hgjluHM///sLU75mjUzn2trED79k1flTeHA/ezD1mw+HkgWrjS0hHIXI8SWxFielmDCnFDcGxnnYY/3Wp5dCschdG7F2q8EQjPqw88ADJn8aebdbGXpEtAPqwCD9Eua7d6GxhKayMkv0pZMMAqZZkCWlttklYzdReAtNSiP9luFJjRQBoRv5kMtoJvkVdtQ8o3Rfh1m3di/MbXO7vlEvizSr0vdIGr4XZBGqSbC84oSuAKMa/ErQJvJK6UCk8Qc3jrQ8Q27L7I6f3pQxNTOjlOKucpIybtwtXhtxiYVLoOVopetpVzE4BDrrOG947+L05MNzlmsnzRgUKztbMX/665+8Nv0nzGWOXAOlxxHcW5WK3K3YHqeLze/LIT5BLIEQn5jJEIaAWpfr8Xi908jInofIiQBCMeyjJML7Bvn+8zdsLk40DFQzNTLm/RI2kViHRlf8l6nBbxZ+z7E0xq5qA46jHQiLTmMhyoWy8X63qDVXFjD99Sm8DUT/qx4ZePR9E8GHlypeR6TQwqdCRNrTQGnKSS+GmrSzd3BqvO/Jf03Rfj5+rSgqZWXh2nAlnGy+dumUVks7GQ1AcExGRvbL8LNMLjAfo/QnWfSkE54lZsX6XAwH7KNI4aTCsFi2ZrG8esYZWbzQ/zD4tk/Gkg61W1GSA6CxgGXuXChEeJPNSXImfj6lfvUmx0wPllZOGielwVjc5tMnVYPQKucflEA7A2v3aeHjbdbApbOKXikI3RAaXj92BAM68QsnGjnpxxpeprHf7jCoZa9dTgTqRXmfEIjJkBubDO6g83wTXtmutQM5W7GIZ0Lkgg8cSCcqExhCyolj5bBSPAnQvOXquCs8dGk+OrmEmYSTpo3zfciZfC8NiKRbJDF/II0n4hCn5FaDixl75sO+mIDgoQk4c+oL9uAMqx/Zv+s0aAohNAutyLukZLCknZ4A95qjPoVxyFw/nvmk7XAb0DmHPbAjYnnCPvWurIjQA1qMCvs3+6DJT2mkUwptdi6dvc/Hx+KtbmGLqJMUiHr9IMSO3BcRIh62utYU2GioRPQVsbfE7eWV+yZZT7OGb8GBsw95EM4MQViGT6jE6VmIIZLCjvmyf3gAXToyj8FwouyFBtAb4dhNp10uP8AIHYP2lDX/c0JoAa/LhYaREWo+H7o9+oC/9s7UzFdjBcZ/IQJzBzrOktr/gvWoVF3z6w4dtWjaDqGMQ2tz9R8apskSpcc2QxtJvhd6F0c+bweMZ++rzCl+hwI3b2iZwb8IDTEU/3n2fGnjPoAODBZbu6DHEn+xD3v7zmJEfNyhlLgfyVkKjQAreux3b2GnGnAIm6493MiFnO6+PJgPk0ZzsxN0uQSVIk';const _IH='75d0a02b8503642705f8fc05caaa1dc2a8cbc73b23cf950da185c71c1533593d';let _src;

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
