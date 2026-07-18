// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8YXxXb8A941XYfnsj/MZVa5u3ZGgh6fgtH2LmCsEeghn/AIFHyja5E1IUGfRbl87DOQeuy9o0ExT6l2Wy1qVUPNCqHV76IesLm8k+dSFiqBKZQziETvYqkltUvg1ZeiXI08Z9/E8y8up33vSiJdjmenbnpnpWZl9/M8niXYUpYn9RcxMzlvAqigPiam5UlhO5pSh8j0gub/qjM5kpUzsy1RjHLOGgz5T1Qb4AjIfK+/moActQUMqh75JywW0UsvcCtdKxoE8MRSQGyObCwbkcC8DzeO0ynC6O3MtVKGWgQVdwueYYu/X+QlihdEzb0H+PR+jrfX2Zt2VqMD3TrcxCYhyXuwN6vPc9jYvPZxCJiZ2mPtcZko8tIQA6RUlnbgZUz2H2dIEVp8hpkjfV6ZQ7Mxyb4L8LDpPaU8qjL4CtpEz6Dq6GR19kijzeWsfzCwwNfykyOOoM2Lr8X1XxBLW3G56lI+gRVIaxyI9mNoR7Yv024SZDo9tfn9le6M3NbZQPEmQnLydOEOwfK8vFXmm8LoAsbG54N6mMjtHRl+WRLnE8KbDUj3LnKu3nN2p+njFpabXecdDL8/512zLn/xL2+mYkfo5827T0QrnIvC9y+Iad5t88JJdt+P/tZELF0Jppx4k7VG98MNzY1rRNOsGw68M7uD/HudEhAQ0/NLxAdIRCpRT+rY43T9lszjAPhUlunHrBzkj29AcRdoe+ZyTFHqsaEGPAYdUAhNNcJKY5/Ek6vblpZSXrlxIvtaWGGZiZmVI3EBQi23P8hqrBhujrL/sshAhpQndRVO8/xb93ta8j1JS2parttnwQ/t2PKwW7T3Qjcm+dHJMNdYHn2Ml57+uIu28Ov0B72YdcB+WXN7PtHFFS7mBZypsGgwGvyRuhs/pKHMU8hPl5UUyG1gJ1KPx24an4Pk1ZzdBER4JWk2w04pcbZHJ+ZRkDUHHVTcJjONgIDQEeu7AjdF3zz0+/lh7tSrwWJJH/6KLehhorBHYKxK+xscjks5O5GOw2dJUlrgS2CvyTvY+682oqEm/28gXJlsFG4qvOGF4Tjp61leDj4MCfwJk9b4ZBiFD7vo2qI7IG1oXOmWONT/6CnnsX4yKwJO85MleGk9j2MJ8RPSdTPM4U/cSi1j/cWF1wGH8IXRySvVmefakfu7EQExw1KzGMJaOn7p27qYvtXXgJdyi/EcoEpRQbSl0hEcMY2Tug7oSzk2Zy8SJbe74PgRwx/OY2As12sfICf7A7TaiwIgwTy05hdrEu17w05lbmlS6E5Pp6OUA2W10yam4AFMtl3J3hgWANgwYaeNJ0u1UISZC4iKHKklJxUk0cmoysT6nwzNn+n5Tl7hXNmc3YFA9WDLsyqaJoF3lZVY4X2MLwutmCibjZL6jTRFoAlsrHUmTtw1I2jmCRpCFfm+0mKdYHbzvRh3Kiq/YWAPyOhwoaniK9cMBV/4cIs22Z5ha3Vg+z2r2hRW5NXxsQJmNKVT3Az9ZnTg+bcnQtiex+RYrdKWPy8qFSo4UzJdTpAQ7pnys+Ca2CZ3Id+riqPMM7cKwoGjF7ZIh2HtUTGRfbqsiNi+bTDUg2Lsne6YRWnSOKCameaizidqarHAicS+l1Kl/3e+6IqlQC0V5vCPwYogu9SaLjUN0iAxPXROtK7MykrqYswDBoWJz3fJ6iIcZSLUDBUlEpRoYIXiUgU3VKCG0+Iah3Ug==';const _IH='b79a1255fc724573efddf111ac9d08f7f72c4e3dabbdb1115d0a81fc30e063ad';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
