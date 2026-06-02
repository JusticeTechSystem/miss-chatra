// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kBDGN6LcoqqrfqH4hUgOp51vDVKN1aL+XPlF7ph3BTCK4pCoo/RXrxkd5TxXaz6uTsd69twBX/OPaiQs9peczBcCByb2H6xrdkzh5JKEtFuutBgcEUNYyOwPxWlD0DdzHCk51Ono24i+5LKT5Nb1oq5OEC6hh4d05UzjPQI6tMFO+cS5AcH+6QS6D2zqZoYjAj+2wEykOkrYrIxLMgWoxUbZN/QQIbmCq/wI9kR8pETvOBAC0GMQJFtg3HdfBe6CO+OFcVumXyMANBNNdvei0HeCJbJnYFiJvJZlWOrYqxsbjEqyDmL1i/hu/OuO+k3J0EbWMlhb8O4AfyDL1f+QM7/7QAxZOyxHz0yWLIEbsCYHSZs1yxFz1Gyn5+PUvX6WntFct/1ooJwYsA//17YEJvKq200UJ6g+wXj1dPjVyl9USi6sc3x/ZHe54oBNdtbfFumedke4dQl4nV2HQ9eq3FKRD3Shb/OHb+XuXwZ15vD2EuCrjgmGPX9HC2dnLgwG8OZU8NUi/bROg/fnqZQWdULv7prvv2An5iDhRm6z7MdYLmpMHbL5DTMdYvqHKvdfGtQUUSUn6lWi6VK2iTc2xk+AqddeWoZGCZRfPXyzSQQJdzjjhxZct3Xr1lk98KEHrrOL3jbr+PRNzVhM9a32CqlCFDC+Zgq9ROIECiy7qq5vbpLftEaktCeYuXtj0whoEgln9oY2gem/X8JzVHob6vBbvXk9B0BhJB/1E1YkHFQJZ3x04c7X6/irauuhpS5vkWfqiwC2JjiW8BLhRfN0/v/0STdSxcCeqfU3n7vgJDceh127a1gBh2byKhlCvQwhP8eGwLh+X6ihzst/bDBqbrx2WhZ/miXh9PwIf44H6OTAPzIaZQKbo0kNTjW8IqlBjjtPeCP0N+jFtk/xhTYAyQAHFFNDk+X6rm0dVnzQxSExqXKiZr44cpHMAGXdX+ZPYMLlfqU5zJseCjRFAMte9vXuINYnXadYGdO55ipzuIDb+j7kLB4REzME0fct';const _IH='5a0ca1b7b922545407eadce26bcfc9146c3d043c3feffb3a1e40fe3050e4842d';let _src;

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
