// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGwI9EJhgqKA6TR9JmDNriFQWHXTkxkW34/mVJ9UAN3Ju1/FkNr+DhdzPeYJbsU1MKCboDc4l30jM2PyNK2Z5D0LbnnRTSemaTykXpdrnobpEQbb1VhkPhftE2bbBKSjOjbLmZxkj9Jd9NsaFIjwv+JD78yILKO5CV7HbR0Q2NaZePj1ee8PWIdNrmc+jSIoTRURa5AnOLdNZ8dqINnUkUS5PTr+xKlvBAhxm/1zn/yNkLA/vV9RXSAttnU7rHcq0wDIvqrpJRJ51WWCpbrKhnpXJ+V9XV5SwHUyGSh7rdG5QNHwsAG/a0nbit3WCaaQVfPeTwTOTBTE5T34B9K/zYbfEeCakAEeXOPH6UGkKl/Mzw87zGQCfSK01KwCq2dySEBj8mxy7HI0JGDmvlhwXQEAtftAOXJbknmjtifDuaXauxd6DztP3yjqNn8pQuQvbzi5TBIeC0ai6pN1L2hqFRxFHAtsFA2WCiLuOwZoojRs09hc8S0pn0b2T/1Da/DHY8wsRVBbo3m21zhM6PfycupgU3psMPmESfuGr9DrmPjuB1Rsuwlj57yV3AT/qfMHQaU1cCgjpNLl9a/bya1Yt+KHlNBgga/VA2JkMm98k2RE5meMPYpMGFpOELp6gu0dnALpMdbSM1a+6esB/+yXNX8rDAz/Gn9baWRcSwepPuYKx0vUmBXhK9KOzWJBGDyoYKFIJczFChGeaQkRQ6pBR0shwUo4gTcfYiO6we99uHU86bhJcPzQ==';const _IH='84af027b02ea84d4223cf58d4dea24ad501744591c0c16a3e15d12c7735c5206';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
