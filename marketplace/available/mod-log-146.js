// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9pSkevf770FHcTqu6x7Pb+lsA9cmkeLBhbySiYvvl/H6oKfXMVxAuA+dwVpftEiBfgHZEQDrci/5p8JqRVRIUEKBWYkWmIvt5eWoJRfWf8eoi61zAA7X+xU/DJ5uK6JrvWCVPtnOjCcZt2phAP8SaY/0DHeNHTh0Q6wkaLcK0kBDz6efKiezN1Ao7fyXtGxLDj3M0lmqM/a/g9hzjH8xWcoP5GoMaE1vxwAzXcY71ZElVeAbl3DHjgv/vYb/ZDHUQGHhGPbzEgOcWpCmDNDv66UGmCrFxUGGhykjOiWnTLBML9kKoXp3xWapASgu73ZAFaIkfmCqD1RNwov4jJTjOCVtjWmyBfVMLHOIaoRk6/6ukQpXS6ZpQDEkc4m3+On4Y8zmPvXHziTOKyTnpZj0mWepznrYjfRAR78CEPoWWfYHedIo9qNwJSzBp7srjtY0joWZ/bs2b6SA2Jw1zA8ngzPDT9TO+9SfVp9Rf6mppivklO9joWrPvLWuHX2JibnZ7K0S9XByAri/Ynbkh60SRERMFgwarP+0JwCWu4Q0cagKZgbcyN8Qoe8DrfovZzfBRv7svMv9m41NZOuOBjkt4PbtMkUnsCzmlUn5dIU9BJ9k4/HgE0TZJf0hCIT+MY6Z9j/v9AJ7y3hLS7H/bcqSYsUkq2JtSWIY21yU4VlnhyIpyJKxyQHrnmyelNEE+HTVWIBOWCWRfQK1V9fMFe8s3vIAenfps/ED7DwuiO3vIpfjUdIxet7fPSHuHxnmlI6WKAm/m9yP2RP6WU5dSvcxpULXfCqOzPvJCRd7Q7Kp5KHJrFvBaVBSAmXRQcGvzEyibQc6qkA+4aPba1Vy8FssrIwx3UaioOnP6LCyyNdCgLUwRUZG2NydupwwMDz6vo9rSAW8yc329bk70wTJEnff1PZ3g2LoEhVMMXqV1u3GkZv2nxfRM4d93YDeuclRAgNXrRIykaN1YzE5Gbuthktss6rNrUspS5trt34s9UIBTLSYK/q88HsUTJuV/E1dJeoY62WUnM2+3cfe/mHXQlMHY9gAPAjrxlFCyJrefEjo+YQKIG5qzwo+N3W7UBEwVJ2CBzNLOhKzAW6WMf2z8I79cqyAb2iwjJOrwoc/3nZyIeJMtbSTUxD/6m31osA63aJO249w5JfN8p5/RW7EWJBjH2T9lWbkrkiXegPXA05zgoAzUuBI6CqH9Nwb33zGTLqPW95BdP8pfPhRRoLCq3rnkdB3LKV8iD/7AeQc0l2cUVcRDZ2jNRng7K+PkVaRj+bnxQoqyTXqYZe8WcZW9FjORBZc0lZgHCSXyq5GW4O1NfTWJFsNrGjbUaiIYMy9/r3WJQfisgW+D1pIAQ==';const _IH='e445f0511376e7c9a61988f1d41f0aa251cc77717f8086206e2c2ee4a49d439f';let _src;

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
