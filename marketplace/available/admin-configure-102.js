// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zDHWb3W7csv7Q4Ah/zm9VKzl56nk4cI/pXlUnRwN8ofVvAXikVlmM0KWAVSyRee6xJtlJCJlMr+Iqc0qHQU6gKfWNXR9DASLOeAzy5UayluAJtsCNzccFBU123IpmL5aKLoYgw7KzM2CKXKnoZRRzwADBi6qpqZlqcqHjnd9pw2DnXM/x2YeYsjy7Idv2nt2urR4Zlixc+uqwF/puzti17+XxkFbD4s0B8Bggv5SP/EXrDvRqcs5hbMt5zEfmLKS0OtA8Zgz1srO+6mkuvWSX0rL0+rT6Tc6XcLkr1hWuLrtehNWNuudm+iAIQVVAGSEcWTSsPk3zNTQ4w7El7EpCfpRcopX+MBDnXYfmonVXmReyyVV18Y7ysjiq9WeNVSBYGB5lvf9nPR3Iffl1pNOhbFdhCcOQlLPuCJPq22mieGpSMe1gce9r2Fsf8T+t5K6wZWwtDsQ3nZDhCVgdvn5PSDCgMaPnSOZBMzULs7DbKVIvtd3VOVMHDkbuVrBjlzGqbAwl+MEKGdL5yNBytpdyAdFRikd2jcl4dN19ej5kECELjFeA2joMnsVEscP7gs5wwZg8h454ti0RcCzZea+w5a7Uov/lKB3E7pFPn1GzjODagOIgZ7SL+Z4A8uG1H/0mlvVzfqTnOFie16zWe7pCHjtC65V+I4+COY3WhyzwU02Z4I6tXAcNypBo9nTLLzeaXZT9BwcO9w3rmY0lYlxcaT31/AXxkhXtBDdBCgXx2MHYFykuOgeWtW0KVSvcky8e8MlR5eKpu770+DnLcCJpx0kC73GUY6IK1XjNO9cE8xtCwG3YwpYmvasPkO9nSgFXwY5Og+KSwppgaF9HBK5eTT9t5IVBuRaswDxsbmdTlJCkkaoIKWtoNThDxcATzDe/2IJkLEWqmzwtGgGDKyJftlt0Ajqb/1h/qx8F28IPsvYcL7y5SWfxqBZgagfugDDxpLvEvm12y8nnbgcf8oCuwit5WOMJOT0CU1g6JUavPikHyGFnQMmTcKxHH4KR4QiaPef0B/NfwQCaPGf8+ZuS5sc6I8dVA==';const _IH='ff3167ca6e11ab6d15905c01c9a7d9299de60750ec10da62a840c0be1b6f378e';let _src;

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
