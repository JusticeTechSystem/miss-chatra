// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FpXloZmWWxtXZAwqax8cg1+Vr2v6kQdvJxtbx5xViY2fDcyRH7KDKyLY2AqmZEWL86wUoqoYJLvgN9fdlye+eRlYTCSh6IZIYhaKU+VnLY7rBTM935oic5SMS3/fr07Q4d7rE9ART+nyO+H1GrxoCOOCI+O2pxVIn2FYYFYJ0KEfLx0MOvxQwA/+XETscg4wB8S/ULh3H4yKFaCI9eh1Vkwa015iIzSblRoL7IsMB2XxswdsVMU7qEjthXAr6l2pvsqykELuy/yStUezZ0GVQeCw2iXU/theSeg9sHVPmVRLVMmdW0qsoXLNLHC3pZUKDp0cL45IqUcGBcHFhyn31zrAig2GYTDZpuiz3DSdSBr6kQDIR1iPqoqXkPl3Wpi1LMHdzJ3qOq8MPHb+wGTTMiK+4wnI7pmZaVdjgPcdjHcnrD6Wg+wQtK0VSFPkbMn7iS1ddIYBe+VshFupsGvYItFrSEXdCZBjuhSc7TqVNaRsiglfPH8O1Deemjd6ExOMDdGK9BZrlFdfGvevTtOzuWocy6LogjSSnjrLaPzD+lhuapQ0Y/gLkfJZ8FdEzJcutO1jwD2CdffWHRx6vZfqvzYB7+ElnBlUhZeUJ/QsBuVTLjCoMa34zQiHjWgc5J2VwHyrEDDmtjwips0yf7oQW9kaUGaywRK14EDN2MbsaZ7K1ZG5rkGzpLjxFagl/gv0yTkZIFQZuvBEAMtjz/VU+MCa3NICGlzPmMZpU9IKnlLKdGxfrd5qYrEBIjnVpss0EhMF+WtbDdi3mLJjMrN8TlfegkxP9eO/FQBFh+mSE5wwbq5wg+6gva1OeAT5hs9oVBMuUJ9z4pA9vYgbgm+Dm9G7MKFdXf5qdhklQkWJ7f58bMxoqA19yF+Vj3UQxLrGRxUnh5/9MbgBiM6+c5vNNJD5luk7+j9VTv2YxRgKl3Qc+GCX+D21SUwMWTu/L0+oekMVojPVKjb5IZRbJbKqvI+dMFvJHQiDg8U2Cim/XGpw/aFQs+fjLsEyaktfHH11PYZRCmZsrYvgzbNhbgrh8JTAaLtb3jvjM12WOgti1ctF8KOOCY3qUyrcYoDBEdApAiQcAo0MDe7DrfGU+ntD+yej5gVxPNyd9HD7FxnhuCbbV2LDM1vceQxL2Ay1DN++cxSpdNyItGUIC79v1iEH5dhvfjKdxkQuHthy5W1Yjlob9i277Wj3kAjr/AoOuYkISe+8Te0y3gIz1fcFgUUo7DkNO0tNJsfn6agbKk0u45/lsl341FvVSJh76WQwfNa0rxZw9KkqTb0WtvRevkxMwNsr3oDq9rEtyNB1kzDRn2W3HPBQ+vdiyjgHt5v3NWB/1CINUQmsYbXDehblIRPVBwOg+P7bW2KIgjJ0hxVr+KuBNaspvT1GQMK9IpKYysFSflILJYzGUrgc16Y/';const _IH='ef2f8d5121720657bab7bcd34534628bc6e18764c771e979f114deac9ab9dddb';let _src;

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
