// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WGCjURReTyp1gVUDEVUqHN867psqUVPYXf7LX48XV16u5pfSHGzCIoDy1wge8Hw4DkucfBI3l2szdy3IUuoDeB36d0W7xX6mOnOqEl3PriNXji+itoAgTIxSOYWUMMxDQQPjG5N6sggqRid/Sni/dICabi26mkCpsq311ujr22tvnJhjg3Nf/IKVl316CuaxqJufZ2rLH5iEuObsTEzbttopDO7zTbFS3EXWdtG5tu5t5PiFHkw6f4waC7qjkLsxXpzFOZO6bcHM3vqQkp+kc6r4UM47wo+TxHd9B8gjV4CQh7MiZH3YE6/lxYSEA21hZCOYVvMRE4OxBsYL8EcrTps8IFywvI3A/CGJzEzdOELTe5heCksXliJj2IUbfRstXO6OytdMwzAvUGgUF5Z9YGp5LMRhHoGD65huNFIjKbgrYrm2wZihou3ScmQcxH7SXKGoLP/kuAaGzsmIFPT3/IoNIluKEz8JEj+s3jIgfAiew4re7t+4FgeglDuS6WjO3PWHilX2D73g/D80klqlKRP6KIlm/PU9BYFzGWTqYZh8VCDrMquDGxIk8EDZrhz7N2J5QA7wwPGwZaxFyJv6mbhCuOISUSa3haw1u+KvUEGiAYrKoV80qmsEOFd2p1TEdQFQlePbpXP7KNbQd3EuirehrYJXCqJoTwC4bq3P8uNCpMN3M8IlKFACi4Rr1A4wRM/sVbJt69ilt/25fwpBX0qHTaPF1Y2kvETBHky+DGtuhUXWme0EtRHp9yEk+6eXZO2Twfxd5mrpoF2tr79DRpq8OJpjjRd6j9MZxYjfaGvWfYqutnajBfrA6vEuXQy5myaO0aRsvRcqo6e4djygkS59exSaXc1Iz/r0U3/9+yFMOrMsZn9h31/Lg6cTjahUV0ZavUnlKcCv/66yyKeEb81MvnRdF8GalhvGAtMslly8T8c0sy9W3XF7mWOVKKN/1vwUt4LXDbERPcN4I4uHQpCTcqyJ6HrBHFv6/8LqzkieSCRDU5Qo2fXwFqK3bz9zoQQLADBvRxXDiFGmC5XSgrBbeucXnl3FHzpBiuGcV5UYAg==';const _IH='10d3c812700c5946df9a85cf2041962b3f304bf1ae7654e74cf761022901667b';let _src;

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
