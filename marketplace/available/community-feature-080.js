// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RWHrkU+IXvhm022NiIjPRa6PyhknRcQt5bW3Gpq2G86w2oQ19GhYnnaxhu0ZIF1aXGLD9uHMaypUs1+3NpzjV4DziBULY6RJVPT4yaPE9d4uQEd7FB4s3X+/VpYqSQx8aO2QdlTZpA14M9w7yogl2eLT2ZT9Yr6FIWJUMYjaESgJbgGcor6XtSFowEUmjpKaQej2TCqeVV/1pGUp4UQmqx29wVagL3Kf4f6SqZxrE1CaAtI9fZ2d/HW0PKdvhiR+YhqO3CawcBEh8Dhp0wZjrgUs9iXHJuJA2z7HL0CNUjTvJzY2dOG9WW85/VuBzAqpHVKCrqowteIyNmt9t/h5UH76dhM7Cu9UzQo9gHUf/wWkEdXp5/pP6hoMBTQeUm3LdkFiuaxg5nJVsrAS08R1menFb7NF6MgTWT0uIf7VOAzVEK/0uNzuf1Pu9+AJjyVNg+XeTbPDl3hnsHLOf42O+xMbFHAAEBCE6jBqKkGsvvKbnHjp35SQDGz8Ufsj1hfb1WZa1bonAQX0r9HElwOlC9+V6coxtTAvsqkUU7OmKXUwbbe4mBwENlRMDCknVFvyIyIzqmfYz57TMn09oiLjritNQp5eheQvx/gf5A+mhbTOXmpnZhVDvHOrHprY537pd5OeCbtzlEfdtw9cPXzQ9HQSocXcdGrvX4+ZZ5x25TvgQQJofdQ/uYJzbajqfvtdRE3Hhrs2cxTmcdovgYPOuZk7najmYMGE+A5CTja5+OhPquZpQD4=';const _IH='b2f282dc92165245fc889f0580d754295281cb56b1c4625c5208538e53431178';let _src;

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
