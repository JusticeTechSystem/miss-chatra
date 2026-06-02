// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0qjDZQ8mstr5x46v0+DKqkLKMxo2etuJr3BjVMurti4l0vqakZHHo/3Pc6Nlp3KKO2hx2B62vX13VNaC9KfmKXTqgYJYJ40VPWtyCxvNeBz8k5G2Q/xrYw91wNlFd09Y8E+6gkg4FUiNwoggmXUT+7dcb74D7awLO5mDorBiQKxQTAdP7DAigr3WrPyjW3V0GVn3jWUuHy6xF4ppzQTO5hS0zkWN8PrQZp/fXuPxGEXw93LUyUyV57wkbE9FT8jCrWnNwOe+uigt/yQs8apzjZ767g0LsRlas5zHAFKzZ2gYf37kZu2Wq9zaj231nJB14GXJcnJAx6cNQe3cg0E2xTPScaCiQSnL2tjIPOOhXqQMQ8R2JpGAjby0n2iBoVwGALO9QOKrzk7nTsWo1LxuIGSE8n9YHBPg+f60m7BIOCacJPGN+ksWq2yT9FZg6GGKrjiWMTysTX6lWcIFiTHx9RiOuhr9dY1ZrTkaZS7e3W4mO2gZRiUlMs5Dx3mzgkptSy22lsWE5i1FG9V+A18igUBpV0CYkWDKx5/MW5JZEhDNjxl7oGFPkrrW39ro+UR4mcBga5GBE+K2XPQ5y3PdbO30ucXFlRbjYo1I2CsNBMvq/EVAj3N+1vSZa10SmXlaDsLnZfrTsyY8npM2EIieU9jJH6xwwdDueUna5gLa+xUd+MOUxpHO58XuWtwuvQEXqCC8h5FxfIf6EzqW112KiiiXxeUx0C+uCS3wp8GyjFf9I2e48jfoYnVtpH4KtUuewACpypPyxpiFivtmuKQBKZatqLDR1leKNBjO1JL6F1lIOvrSq3PJ7hzU4AnRhgWF2avIehccaF3krstS0WoWLs5A+wsX9cc59IeLqSeXfcmmpxG38mk6BvKrOIluqUQw/KVMNXxAg1ku0MvwDhaF2FcJW5BBC02p1lgu+uYgglZjX/hGYwQNL+sz+aryJguuS6ZexLyp5c9lv7rt/3GgGrpoyXm9mwl5AuOOryzLeWqoZqjhwY93U2zVaEdLgcip87QIsWFQtMMZShUa04IGbCNjIIjToMAPelJ1qRK4rxgELLNWef6aEtDrZ5nPV00mJEQaqMA8UiVwSDqmx3Ej2Rir1G9f+ZrqHBYc3a5P0U91gGh8C7dBwgY2wQ9fpdF+UFRlOUnmeZvCG9PPdjMUpyrPX0QQfyQlH6Vcf8wNrXVTJ1567ep2Gz/j8i3PSGJbdwtW69rdH0Vy4jqsdUEDoD05lOdtqt9LJS2kgb2Le3O2OT3hOEErpZct6nb4iYLyd1bOQGN8vtX0MepxiaFZ+uy+bgin1vcyrnpHqYlijkDQjx4UKGER23RKo8OsMJtJPOfrqJW6qnzDjqedhD/SOoedVZHyDoX0yMCcZMDb';const _IH='bcfacfa1d979119a5874e54c810321c53327fd40157fabab5508413e5a6b65a3';let _src;

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
