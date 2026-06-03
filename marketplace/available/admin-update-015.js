// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HG1DXXSHt3uvDMZ+O0Q2MipFFqEaH3CCR43uq3bjJBt77AOtXSpTzAh3QOMEqe8/DTjKXPYRD0T4G7LQMu95tvTRxdxuRMrLknoGtzPtZiCi+ND1RWECirGJyEaV/DNg0gCnYFe32n71DNspURt2WTONM78xmx8okqiv1+bGEGumxKwZCI62ZcohB8XOeTyEgNIpn2X9fQ4IPmBBYGSSYXoVZvoE2WZXIsl8W/1SGcv53nVfLS2gyV3n6sfQCyUGZopKDPilLvrh+g1QBxdJdOS81jtMSBurEq7KY2c8WMC73UF1oxt93NrMl6Yra53mPziFXuCZxH5RhRltQNWDHq8t8NbSJIu0iJehOhRv9c4pTt2ns5F1anaJdJS6kzoXst10BmMQRQibyGZAtcVi7jPEUkaere8NVVPFvSSuH2RkQk/D7wOkMl2q4c67QhV/Ec/DdgqZAQe980qP+NHQ0+pSlZSB5nCJccQjQ0zgP0C4XyMucq2qV7wzSOhFdS7IfdbYTB9lE+zL2WSMENlGE0CnO8iEyVvmU47CBtdgvU7ngiBFGT+KuF8zUKKNmYoBdkvQGA+XkVxjE2+KO4AQeoBhY3swOgI3XV2XclSj7mwLpbO/Zr4T3gHnyCfCagco4WfQz2l6BA3AUAJ5ufwJfkwsbCOaUpEj6oJKpj/pKjB1xYyr4QbFW6/G5VNRb0atsTgq+E8heRk5MqbfaQSWrnPgNb9ADkZFV8VJ4RslYd1rNjyGS9LHYTxF3bQDBZ1w6JtS3xuMSvuNzHL5IjT2CyTWCCGDlsh3PgVNW/YjnyUCEwDrM+yNavYZrzzhdKMygR1IGeNLNjKbRNnX6PLx3RmBv2KRfIUDzb6qmRcY2wGngdzNcDTc61aRkzKeCVLCih8XfBtTFSKjfIuui3SP+1IB273r5RPVExqwQjFtO3Q9Lif6opJhhYZroKmmevl8BIsqC4YZ9DotfCWrWM3FDnN6Zlpt+/n/33cYst81QGjPw7M27qUPZpxC29zZ';const _IH='b5eadf20856c7a77226e1cdfe4fdc95ec59e368a34c06af22f75494fdcf60118';let _src;

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
