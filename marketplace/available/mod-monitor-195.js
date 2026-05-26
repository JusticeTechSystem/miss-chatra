// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zLgpGhtNiK/npE9COwHFZv7eKkzbR/oN66tKmN4CI1QaUtJrqMdM1OSzQgFPxSXXHS8OAU8WmUyLixjoQi8HRR7GKQSsZq5GeSqs4l5+LOX2PUlSx1BbPv0E30NqNCX0o6hnkFGoOvwZtcNBn0o24ZM2rMIasK8j2d8lqJvpish4jAjDkfVTK4uk+k0Flbsh9Y35NDL3Q1fxg6hlDpxB7DR5euMy6ctEYWjuWI7H57tMFLtuuag8BHDLwT/Ru31iejDr75yzxqUN2OpSN+U/5C6+lMA8Whnz+rCJFqykEV7pucLfz2f3mt3UMID5SS+0Et83GtrBKJa6MQPMyN+OeIpfkdNwwEhDpKu0CgkW0Vr6FNKrulrGNu86mtGpyYfmM3DdMke+Q7xQ6I0/9eDWrqNjL/jks0UkM6TKGRvdPuw+qJ5NwYVfiTRPNwkxP3XYG/rFNOw+Yn1ENoSCRPYJY/YugkmP1UG7iSeX+o5tEmqBxH69qMHyWLlTOs0BaBNIrD+mqSFVoux8gBHEKd9aAWWDweEEhC+CYacjP16yjGSZt92hBE9xPL2wV/5Ms37Zqr3BT3xLa0NqnLZDL+G4dByPA+XzLlBkCpnQU1HWrmQJnfKrHmziwpJuJ19xxkwpMqRHCOhub6TJ926J1K7Q1H2k9pYFTpVpMrvE2MJWq4lRuRGZrmgMTz0Uu+QlqPd2CM0tjIcOUVu8pSEcmnxYPIEx+4ynKObGrDTeiJ8QOncJDVMwyvFfaaqTfz20d5TQE2ccBZjxNtTeS6FCP2ecCWDrllF4HJiwgJy0b8o1fAJfsb5UFXFl8G125Rr9HqbMDYxKRNDLdPLCh2BfmrkPRKVwWkxdJnWgFY9Q3hKxblCimfRv2tdZwpxa4VxNHuWa0thX1+qoabAizGJKXwW6iX+Ofp9TgR49mlunoRDmoHwWGMv3LjIOu26FGRZn4iVEO5Om5Et6cu6uVvO+Bv22t8Z9pe3tLbFe3wa6uqZFfVlurywy1r9WifhHs5ZkkvMU8eIkG+iXuBPtXTsPFN7WezXJu3kboQpW6YdHmihowxtKoIm3h8mr5hMvSgQFrU7qJC9owciCw47Pqqrd46yV5Dm7wfQDTtIjAJ3aOi3S5dD0+Wk8sAKos/GQwESSnV77+UFhbCxT60m0Qojd6NGPbUHYcMphHGjx0TIhllGmkuuJhMTeSK9s7e7/y1mYme7MXD6vg1GQdArg+t7Oaro5pUBC+4yq2w/38GBNyTYnLQb157+vXS52hnh4vJdQujuzIkvO2KVL1ed2efHhJ1gnBru3UOwSgzwFCx804+E9Q2eRSLJZa2YPX5dUC2tfLSmG/BgTbSh0TRRADKKtCHDrloJfsp9vf8KTSneJaCFRKVILue0u1YNglLzl2VQB7mtIQOk=';const _IH='fe6877e000205bf522fa88eae04016ce78a2c450edc5dd5b243e66c67881abb0';let _src;

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
