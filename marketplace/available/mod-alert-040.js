// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LvnEzxhZVd4jB/TA7uFK0sn5eKGojmKzHcM0D+z8KsYClKMbnQuye1QL0163SDaDNhDKrdoEbXsGzYy3fUd3P3rkErWeyMPvMfhKIfrTO7xxu8oqQpmdaYzP7J+b4l63INu+Wslll8wMuND0OSbi30ZOT7IljlSSt8epsFgWxp+9hPEdRUMshkoaDG5njgrDtgAR/kvDGNZKrViLGaABo2ZvOTPW5ElPslA9SIQo1/eK2wR8nH13h56Oi61pshJLBSAMmRWqbARAO9uLcio/DwOe2VYw54BkK6wJHi1VCjtRL24qghBJFEyE+QnAYBjILXXfBz/5Y1bVrLuLuh2CYHerl+cCN7hRBgOK6AZ275cTTR8YL+89pwdlTIvTjwr7H6s8UYkh6+Gq6xoo9Vmho7ZUxTCnshdU/iB7w8YPSSLfTRpScmqtakKJgMXiUuxnAtQydZBn2Kv5vBW3E+LTZH0utZZpYgvs4D8m02cpWszN09ZQvYpysWwv45R3tyCU3YSfxgI94td2phskeOrn0jACpIhuRGcJoIiGCmgkUsRIL0/+RBUuFI0KKS1PDAK5YwUmtCV7nXu+U+AI5fq3G9kzFkftjSJ1jrB4GN66LkmUaHxmiOzRV9ek+mFz18tMAy6jqaLh9juCaspSeN1/zwbfIU/iM9sS3zmIiPePvnmZaEHuIS671U/5wUghr9PK287UMLxBos9mWQXXjyKUgBQIBnDOxBrTTv6HXHwSdftpcWps8LOK6nhr3M+75eWTHYAWwPOSnRA+ClH/klqZAuw+ivaVOs5Ez5wHBzFkTr9JH9chdtIlFRB+/2cNIyLY5Kspyn+kMtMP5qhqqAP5qdMmMowaS5pHyopjSYsJ5tm9JLXrDuuP6LkZAvdfF/LEWrqBdBRFA16fbY9LkR40RG8z9UE1to6twj7984cLTmLAEtba67EtFlHs49jcl5zMfi6Hes581UX34UFLsQVTevD5+/9ygnHYaVIkPhpN0Xp6J/6v/fJGz2jLSqnetVUSmWM1Xse7MoUPfIcDck3MA886sMM7Mhb1LoULvrs1stjavNMbAVkvOvOMN8n6Eo5MLrkiTO5+aCSe+JFw7egzEnaV/e6v0WsYqzfqmw0Cd+vePFMRxLsxwLWTQhuOsfbfgMwqwRvSbbY872K5P1WAaE20Q213cIhXKg2TYuldr8fTygwldImAdohusmyl8wOFK0c7FjgggAzJdBXWbWllJy8GZR3PJjXTVt6pQZMxIVdsS1HmYwJe7R/5/LVrSSrEcRkzz13VeRAQ9lXMvIETi0BKqfy8gbNFxX1MoenDP97OADE9FQ1Rb9n9XJ3FT9k0FNbuER80R9lec/CBklWrlTPVbqSy2q7FxA==';const _IH='3faedf2d46d78f2f973d36450b810bbe8cccdef8ad830342e11fce7a25bb10cb';let _src;

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
