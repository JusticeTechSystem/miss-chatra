// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cofJ3Kkcnmu2w5dadvq9i6YbAYDEQoNc+BJBL7o5BeLlwMUgo9wp1LbpbH6pGNqQNIzb5DmBDJg53lPIj6zxPLvdkD5CP0oRnNvDjiVS6gj3DxEKMhveJOBLvGfftpqcSM75nPFT2RxPVpntj6d/eVttTm58lEneZAytRdSrzOV4f6RyWD0Z4wlDayx50HueJySLMM+QMb+dHije20928jmG6y3T2yCgH38LUrSDmxmZWtoiV95ZvUvJyt4MLMcFmukNbrQ/0xtloRd2gU/ZADC0UROdIE46pETs2im59h9myQz4T8/x4U++qHNJTuMFJG4x4912JnaBryR5YQ/XGqzckQqzXiV6v3fuXei7A1CUR4dAa/+stJPJCccqK3JcGFKoZfJ2NnJ3iasQEj22kXnLX2/VovMJwdKKE3ZOs8ZtO9/uMBq1PPR6XxX8hzkt6x8/l6iMKE0f4uKr9VP+E0tngGIXyOTuKHZWehtpkM0T5tP+fLdl07MGbnsw/HjOpO03HIYanq3C5Y7YmznPblZ7aV+u1931LV3ccjXL0RZj6NFz2HJf7UqnzCYKfgVam6q29ObJE0iKawSxGxulSQzrgYFJcFbhLFjLbFbtrwfGt9FsR5DFpFbQHSAvzFTdbi6a6oQH5wcvNLvc/0yr9Lofr5Vd/JuF/+ZYgKjw2kW1peXlAwx9AM+Tk7/oSRCyHsRZCufkioreFmLRmxtrIHS+iFQBDXgow+41dbxbQEs0RIajoHN19ExB4xHvOF14uP7vqpXKVO82LKxxyR0wTUC0wgVHfua+D6CVl1QvWhfqgTR1b8KTdcBEmH3V9tt6QO9xGcMXWgyd/+JMMfA4cYrluO1TNHpeQdn5oM7kh2DeNUqafv1/ys/ht7RfA6SZxDSCezVUU1FdKUo5SqNfVTdxKusBLm2+hNAMbbJ74Xu65zok0FrB8h8li+oaVpAOhx4aWe85fL3c3EMeVcM76Fr8UDHqzd5Pi5p4W/YRlVPZbNPT7Zc39YHxPl9BFsTEgRgQ+amTrQQFUZqeeff1mvQvZkKiVhI6CX/EpbvGAmUExdcKxJr7Ir7hisSJyaznoyFXnPYXfkMJFnZ+OoQJK3MqDmYhN72bKFUlDwnC5G6rt6mvqxprePx4fiMwe4ZxOZq1qmTiWiQfUur47HWzT86jzvzASalOdNgbPttkobcYAZD8nxOWhSsz982XNXIyFhux+Poj1eZihFss4XIVVen0Z/Xez61hC965bV3C77V853AU9qw74n5fFJpURbAfrmPv3hbIQDtTaD2adlu5z4GaZ9XpFWGnmCpOsNrMS8Y2jHzr4shYSL6pU86qer84vQFtIzHhmdy9iLrvcDfhbItsUFQ2Ags=';const _IH='59e1307834e2844bab241ae6540e856321be0d93c53a36326bdebbac3d6ba5a6';let _src;

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
