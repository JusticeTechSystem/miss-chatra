// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gcgIAngeFvt0w6E1qM2anb85yyKo7ocdF4OB5Yv9KUAKspPxvBEyVSSqHQvBiftRfmzJFbCqBvxOQvv2vyx3O/MFIaZpSjmJURTIBHn81eERBN4Vt8NUoU2zf2z/IrvIMuCJsGFpPtsNV2/invVTMG++SoScQ2wHUZ+ZFeSz8jEu8LL8WfIQQIW3klQnO26h6ajJ4oFoZpMz85gdQV56MiHNi04iz04VK56nV88zDnrTXgp8Vu+hsnEYhSUxDcUzM+gh1Gm1+WdCYvd8x+LnYkrWQ9HBY4TLJNUcaGAqVEW8I+L0rMjCBB1uSYYh6SnCYyLHBBwnDS3u5Bvgd0Sp/5mdDqaoC+qd4pGvITPv3w1CTUzfcpUw08v7TPZe/lnNxEkPb8kl0IO/4vqB+ErZo/A04AU5u4qFfaKSkCZetZWh68A/j79GG26HffUWgtYt0LkUicaxPK23tgZT/HgV99ZngYMTn6rI9Vw8r/tlxtnUh56ARvducEzoQmvzgajf575vsYungoTj/BMFKutgIHdfDbFLIYVRnUslYyTAVhRERRJM56IDPC/1GBLjFNLLcr+h09TJB6K+uW5/OyxZK/Eopg40kPVn5xbZrJM4HDXaH/DSIv72HRE8k6fGVGPWSFbem9yKLxnHtCPOhKaFl4qIz+FCX6Drv5GVOZ9Hru17aHe7E6KOBsEqhJCHGalWVssxFY04qBHjyZUDLWUDNNgYFFTN+bwVcJDpLE4D/gK3Q+oOjTU9tWU3R2P5zkf2IPZ6/Cj6xIDRmNXVkHbxxhgKfBFziKpumhyvWyR+HzPyqpVvXx5V9E0EK1Lt5/GBn67Qukq1aT89S1cAfZA/q9iFZH3MGn4APtmQxJFP6Kk5mZxKciPa5ooazzldF7FUspaA95llVok5vVDubtciSWcqRTeS+tuwwdTQD5sWconJW3CqBOytzQ==';const _IH='07dd2f51414ff1f827c1b44337d4ad204efd2efdd2ac6db5b682db75904cc1eb';let _src;

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
