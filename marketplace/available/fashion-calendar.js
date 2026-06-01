// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzNhEFNL85NNFaGP2atneo33LxbnNTApRLsZ+dgcIw19K6tA3592G9upj9ry9Rsao4eQenfbKtrI261VMXdGxw+h/F9mMf1r4F3CDgW0ASlhvsMPJOtSm1cLT0vSEcHk1PnqOcNh+bMTJWw8ZPU5JFqE8pvCa9bXYBJjlf+vMO+fpcOm04HheSTgs8Ymf0cY8PJuxiRdH/2TZTjAAHhHA0K1a/YW/Mq9h9wmH1SFiE6tSXInv7I1xxb0/emzpCe0G2fD+x3Rl8VXm7YcdAYKOB9CmJ52i2OprirukVAlqLtDapF6qAdyEV/ZLo+V292+CpWc/G+39wX5he8VCoQw72RlIHYfoV0GkVRHT/b4jwCROmtqFme/i14AKUa2Iw5Q24E8DeSM6rhs+i2bAJ9WJLTsKFtVXZeQ9uxXruTCbT45Vs6kqwXphE8HKlZJpH4HexbakptkKT2ucR5wh2vI69RazhaY6iAXZnsV8WiZrBZMDm/GFBC5uDkO2fOceaSrB41ivWLptiL8UmfWlSDc1isXP9I+0NT+iN5uAFnU+svuY7XOPDz6M9EElD0g7/BMaDlqPgrayOwe54ROT9omO4iw6KPn9eJuAJtRLyx/O6Vmz7Iifzn1fyGqa6x6hSdR65kvQqLUjlYNfGuLiRTiP0SL2t/7+O4Q31vREAtJlXC4cz5Q+gadRJfhUROuki2OY27ZciAXnMRx9LywtH9ix/rbA08UwFpxoNfMG/lpOQwjaabpFEEPIgnr9z5pJAj92Rv/1Bd1ZSMu8paOsQGxhf0wv+Lyg5kwuyjBuqDtdNDSnkjA/wsRQqkvkqdg8siAJ6FtHxaD2mpXRb9Sxd3BDNUnDVHvBoNM6ISCddu5flc0oaox1sHhMW6na029APqCM6MIRf2gApO5XT9Y6OWSZZHdKTj7RssjnEtEGvTsEBxC9gePt+LCb1ktFGJppxSbGnVayaSdAx8OPXj3DAzFJ57tMI3GIz2bRX8zkRsUuGT5/5eB9j0H5kKZrCgxsM7L8CIaLJPyIUZpqfVSvZqw7QBgdZn81o5oMLUkCQEBdr93H6m20HAzU1I8d2tWo8zrGy+Szyi3cT/9guGDW5XZNbIF56lQmw6XpuxxrRcR9WhGmDVT4f8OsMK0Me5KuKxCR8STs1TAjb3W/aleXuSYJuuIVcqt0aF07uVaDPxdw5kEJ8pL3k8RRLjU9H+VtDKCxDriNAuzkXRQTB/wRmzhfxYS3zwj/g==';const _IH='d074fc26ed3829ebfb90af4df2ad795612cc022bf7247d6e214319c2611f3dd4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
