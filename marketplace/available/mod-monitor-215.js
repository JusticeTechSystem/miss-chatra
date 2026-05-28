// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rT2joX577pyu8CTEI15lcUDcgurjfIMZpOm26FIV07K4NKy0XtGucNfSeyHeW6l51IT9+ieNb2DIislaHSziPTcqtN6k8ifYX3PcVjFHE9aUDnQHiUwp/WbzaB/h2wYkdOfQ3rnRqi2qvcSvDXaYBAcl3o4qzRyS3Hb5I9yajFvvtUGEOw/wtmGa86iYGS5fjyjyxYvV6tOoLKoUQA0obE/oNjG/V4mvQ3R9tw4kd0XG2yufMka08fBjDYApIhZutp070pOrB78VbbZXxN3ftX7HK11634jsXoWc15xOC/z9tNKvYQGjPqTRkQTPIvrSA9Hu1ycka2oVJVZeKHPtuRs8i8uIumU47lMyghmvWiB9FJ62z0+8XJo+TRHQg5diNODYjccRfjCtBowFfKP1ysJpugzjRDcM1gGsXUPUfIcGva5v0Y8rhovuiWRWlUSMrflUPIeuqtwiV73PS+itOMf94JQnM9bSyHjHEJBBGYiDz1+PteoJZOeiKXdQHcacuxd6Gsen2FRNbjLmg6wxx4iQtUx5ZDL6wNBeXKbBRnVCK20Lt85IBjnlRSbJxoiB+sX335XpNmy6fkTnRIgXoalU1HbB5fW+3pcxE7NJqivpo9Z2QW04mN4dCivDE6rcBys4y54qvkev95dJuW5Ah6hhE7dONudzdDzj7SY3CRMx6Xyo8n4LUnO5pKz38VnmylVPF2LKx1XW6FpGR4YYtu++NDOuzcITpFv6HcXu631oQGO9c6O02TFhP2Rz7UjjLPbG19obA9uQ/9lLO7EQ2Di/rzKuqdeTGn5y+HRi/OOf9EhCpfCnJ3nEx/bf1MQVafMWUjNFR9sl0pnTEDdA+2p76+DTKUvmlmdlvtNlJD6Km7FejXSLMOpCjNUThCQ6D6BbcFk7xmKjHY2lEHz6d88QxBNERZ2MfI1P0iEyc1tYQc7YY7Fvd/Jpexq3MTyCFX95+nlfnMBUchjWaL5SPGHr+avt/u1v4uP8MlTXlGqhj0B/f8ZtRURFFnplmTwD+5pRoD6XUYxDWRczB1Fxe9gpjJNhioJnzGTUqsWRloC0P++Z1tZI8IkgjLObthJ7j0eJ0IFIYKwJuLRCbwGAXUTQb8cXRV5zgm+zelVS0YwUAYxZkqVnkVyrabszcrqrW4jBIlGzO4DYN47j/HfOZyHc+DPn1oVqQO9UD1VjyBR01qIkWe5pT9VP5tQP4+6BF3luVDIa9dS+4dJRRwv5/inQA2cqIgmhbTqsQ6ROtWAPTo16PnfXxIJRXZ3vFujmdOjxk/bHT6ACk4re+O/DP57wj/9PU0IDqnpu6ik1HpqFzoiCleN4jCHfpL+45yE1C3/zUIe47EIxWcarWYSPNnyjQjl3SM9kkwKO8zrC20iEYrTE6Qa3ElZJXJgQvsy6PbM=';const _IH='3097110c8aa0ae2598a2ad692b3ed5bde9f6b39a5c658612ae888f16f403d56d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
