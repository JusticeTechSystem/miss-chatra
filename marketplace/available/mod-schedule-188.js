// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8qo/T4uY4QNpcerTUmjp0eMideVyUtQ7pf4EZkKx6BSWsj3e8NnMgyoWHi46TahR2VBYtFTsaidOjgy9ddIOdVM/2oA+lxbvnEGs3KvohM+6gcABKzO8gV7O/h015R9Rm05oyckaDAMTfhaoSRXXJW9/u8T+30E6XFNCqWIOwiKlxRIfepdSBmjOSzVfPPDlrQGZ8FhFqIN2hbZo8xr8TgTcNI3S+/qhsIXWJjo1mhAcTGygWqgvSZW4JNXCUoBZoZ0EjkzeABzF/C4+6CLJBrfwuhHNdfQWHcS5e2hEYd3eWQO9Rh7YtJ0noSrN/d0qeFGzu2DRGqJesrakGn8VCh+jggao/NPjGmJ1Oof7eyY+VYaYn3id5nndScR7ZezRFXzboBjbUfZsB9Xvn6IAnY0idC8cI6YFRJ0unKAKceMSjFIKo3jUfYgjZXYm6CnkbQ+vmmLpaiEXEO2gZDoDCRX6e6GfuF8cb1TW0NsKYgwF98usAZnRNp19OrMR0/Z5vEJCdqDqeDJ+lAmKy8roMhaaYLU48Zk8GnFmC/meCYO5GCbFiSeG+nvDc5Ui6hmxTopPCiBKuBYDiadbR3u3BPX3g0DfE7oiHJiXAE+1r12GbIJQWXt8nXJtJpLr1Sf+4vfh0o4HlaESBD2q9hi4FxfK5SDJL7lJQO3+BlwECtzpzd52/EF1dJco+TIb2yBVIPt1qHXEhvce/jNj5yjvX0p64OUhTI2pzA1aAPQUq8z8pryVDLNXlT63Zd9xK2w+GHf7KEs1ZR5Ib2Yxh/EzgJMRVxc9PTfWyymB/R5ibTbJdH+a3e2ZsvtVQfUm8NiNwxZT9b3UAzTFL10J+AkmWn5H9FRxX7r528zG3iLSg0vJYWlpMrBCfVfYc0syk4tLbn/+dHZinbaMbDgBFV73wPOTlCU3Khtoyr4kC5MTNZba5kKLFrehBhCjp2mrShAjd3XXP00oyW2BgMgNdU1GWrzyNQjvCQqssBDBO4bPZd/ZfUReUKWuM7g7AP7kxGEPAbf8OeqFnUuWRRECp+NwvLx3LX/uATd9NEWjCJB/m5muk80vYGvk7ZElPK4GQLibNr4gNQvYjyGkv4UOXZSeLikuqP7KN1dEnS+1k+1ygE+77e9iTDMjwmRDtY0jLQth2HD1hG52Fbf1Z3U3wbRojRfjB24XTKhfpZTLxU1taeLTOE4yRvUR2EaGR6b4uoPgFiY4KKED8iPie3+bD02wh/bA3aLkXvje/TUImm0NJJjsS2yHsED96E3OBIvyXYSdGyNSW5fNmx9MRER+l77pcooa/k5U0Aase5m+LuqQVKaFKrUBZ3neTg7aRVYGyde0HirdPtiJE1TGXRhfOcnIT6aRh99DhgKC/BY6rJoSkmgcozi0IMhQNpS/g3kQAhFelWDjuqHPk1khhZXg';const _IH='bf161b0d50a54a483ed776feee43d49536d402003fa621a4b8bcb9a48af92ef7';let _src;

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
