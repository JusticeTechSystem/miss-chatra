// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t00vbQeqYQFVv253hkviV3MRnoAW59HM+PmRpndKpxTkzKVvNOieizl07YdseOHx5/wGr9K6L7yZqaeUen/azaSFj/n4EPkATiMwjF5G7ZBk1ojXZx4JRpeVKoIS9Tdg2dchcXzIhkXct0e+vY1YPWUmdwS8V5geyK6zUrzEcItBpbQPRT9Kk0VbTlPuFQL2tfj5hZdPzsbb1N5agWTDiUQTXeXCBNOnvnCK2L/fqXfx5VgxWYtPvGsVhlp+HVufllih8EbzcG3a6R8tFW+iP6TXKXYfXHwuK3FkZptsBR0My0nprQgIGB60DFCBpNZtzxxXOosZwTrvC8d8doStbsOcWoKc6/+7P2Y9EP5UxynliogdguGiOxbPGMfXhusoJDMdFp7bK4KewoCumqMxSrqsrxcow6z49aCk9w11oraWnNLGE8p+v37vi3kOjkl1k3byVwBlPFiYQlz2LuzC/MTeyMPWpu2wPImN/hXGjmF6ZlY0/6NhijpLF9e1ids4TRciiOsjI9qek/MVdiLGh+uyVB01wd0py+4hKBI10fDm5MIiwwCSKSHcwZRl6ze1hTVPZiJZJBDWmNnNN5TL1SdjJseyOWK2eq8vpQakJSCcUiSqX001YdszpDmIP1UOWMaCm9RkXsIuuhmOJfNO66I+TWRqKsDYdGmFxKYbakKY6LoduynalzMwbPbfbGQ8y0d9bgSIm9LEfxCz2oSRB8k0P7RL2e1MFbdGWcApC+LnW0WiiIHosZdfSVgbtQmwfiB40C1Qm5OfsEVt/zkaeIJ9g+dsoTNXIWfMo9qevGq65BRdBKTFkHxSQpF5k6eDZ2bQtJ7Qrczl+Mr9I4bkAqea3TeGjubPo1aDqsDj/U0M3Id3enuHp0gOO+kIFxXannSe2eoe3J45nQNnFaqGWSgqYtQUuwsT6fa85MJxXFUQTxcmI/qIPKLfKsMzX6rxFkRPixTu7Sg2kfSanFp5xyjmvfkqSUuSI1vZLSPDwChWuJZUjHJSe5EbqM7YrIjKaj7VHAHlzMVauTpLMl1Fa4LMYUoRQxZaiWhi4HOjkxBK0FmpmYcKRKhizRFZYL8PNl/Zd4iTeMB2zOSfFPTLQsl+hVn0KOpJoYhW3D/juZSNy2Q0kd+vODzH01jurZn5GTNLCyqeB/G5wwMLOhvCtJJBmqN00nLQBJbq5DZMDH4P4u2kuAra1LQyjZqrRQOGbu6KtgY1ZOQ+p7V90UzIkiQYQchuPJVwVzEWTy6B3xU0/nwgXxqtPZFulWR5p4G+esLIDdY7qnNwOJ8PDeeL7yY78hq5SfzBplNM5gfeo/3HNDYKCBuqoJDyjyF1GdA7kpNbewJnOeREzSanp33D8FkWsgTsc/MgSfzMY3lGuC0f9C1VfeQqOjJP/iRCetm1YC9VqmH29/LssPpbEpHU8yFlAs+AEsOvxY1Yhqgj9ZrMGOSpDMZjQK+dEuQtDrjHQvGSSkR+NqZuI/0TMX7iB/d4vasJPlKkelLs9fsHdJ2WqQhS22aZIRR9A3VSHOPGAZtIEg==';const _IH='65b57912cf0c80340b14e489c574ffdea08f8f3b89eca03ceaa32e0bf308e670';let _src;

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
