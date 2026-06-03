// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6EBQCazliGOx5/ISFfj80R3wsUe1K5j+BsIiqTtO2Bkk5SzJd2eC3SPEcLQl99zLD+4DXD/ZFbu7yfIpAvFR0nT1WnZKY2gwPrIa1fFgZUeIjtB28poxOlTKUrFvgYbH+plYSugy/fPomO+XwgAbFUC6FHpNEwdj427qTvri3n4ypa0AQDiFiINV4sPQX/5rgh+LSy7XY+KrzvPWKcnJDddnJ+kD8a0mxVHnc7vZrIbT+h6ujwtBMrNEESiupAi4clFbErU99gvsOXhwJyLeQLkKfhewRkikF5SUemHNChsJHxbDjZLZ2gHXa5b1hqgYcWglzHNQ9wXyvJpLN2XE/bffXb/F1lTzkrgLiVxb6O5oxTQOILDhLdJK/7JD7DKktOvOirY+TahSUpu01jMOxeXX19j2eKlMTXQ88D1B6nr7tgg4iwITqgfQnsbMw05BVwDoaZYqCkXoP4ItxwoViAwAyj0cEwXDR5SW9ml06wWR0t0Xcc657UhQ4IFjI9Gz+4An0c79dEu1kggiDsImbSJMKNhdTnwBh12T7M0l2jbWfZR19chiPKSLFCwVOS3aAO9nv5+us4E+w4hg7uZ1yECeZjX2Fezl+8SjO/I7EXU/mtV8Qg5xlKSFEwbLWsq+HMz9wjwpP2KLxtWQvOtJCEQgK/hFQ8KT4xsZ79Ha8WpviMMOLTUq/G78HrbTqMaKbJZsZzJ8ZGHBKPxZUyzkKHGyKRchnMnRIuSr3fgDhzXGZpdvUqsGQpvqmLyKHUNsRKazQs++vvxc1p9auM4IY5mUVXsfutCbokESkfbpE+aChVPfLUq37Nnf9AL1sLToPvVK9suwyUPADQ84aOhvozv8h6EDf6+RaMue3T6KrJ6Lg3crn6XIK2f8JQe5W2sBW0ERQPMXgrB5Eu1PhbgNhs1eHv3LfscL6m9ruuc6ElFOH/Y9hlfk/VPrdSV2+I9RXQ9ZCz48M1tIHXhgxgUTc6uPbtq0UGOriU3689TUkYzrXt+8Wkyq22WVy03EbJQEbGWE8QhXfCnV53LuwXmDkUnHlxfgd//E9o4eNVkkOhLQcGEJzCm5yTJbWid+N1xrqRs4sINmtW7QiDXQENQbJ5/zr0BV55TpsLyimK0hpOX/NoX5bj3Tf0nVV5X9uOs3FXN9W5/pIKWGXgjObFjSDwzfZ/0BEsGoycTESgRFAiX2/TCwul4z1QiHOZ3DWRCT7Kkjsne6DMOoWQKYQS20FUhTsJuGxeoCAQ/1pFxY6r+YIry0Uo97bbMQxMp5YI/l6yc7G/NdtwuHXZGwXxyGu1WRZbhxJ1BOM7TZI+K4AZhR7EQ/5NueCOZudohvsMgn7VuvWKRF2+uWZb9ChcTUOfCYksFG9hXxxaUjt8Ad';const _IH='ba9229642fabf5756c927b1d790e6387e4a8c9172817e013fcb989d7146c8f47';let _src;

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
