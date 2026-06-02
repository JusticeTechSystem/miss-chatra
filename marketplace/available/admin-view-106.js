// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b7333queOmtTtN+Goo4KAy5xYu0Fj1Ar71KWL50vkT/P6Yf4lVyCQFQ2HNtqwjjYuSU3dtPW1lXHAJDgKvo7IaZWAfB0nil6IJ9rizIiKSY9hqYpUZN4UnSs7YolHbQdTiIijksNUA0HsIQg1CSQFPzMCTBzYnRjggenLqtoX+CD12yuJezrtLHMsXsiTPsk4t4GoFCidnEMDpVopbTvhYCLLf9Wo4n8Wee/mGOM3/g2DKxwmvMDNvq8fJA/ABcp9+D59QumS3bTe0W6yvZfiUCilwvg70p5ZWPnrbAD+NC0+dl9jZ06yiduc4kWBPvDp18Fi8ho8neO8kgspO8CoYb2+pXGP/MQ2eX2ZyV84HkEGtvp9bpB8Z6PUjCcD/x44qVlB4EW7QwgX4/+BeF1SPomePxh7iSKzwyrN9HK/vkaQLWA6MF2/ns+ECxh3lHVTeWbPuKxX7zCJOIYQwzGUv8e5P1c9FpcU8ceHI6P9ahf+nuD40fLVEfHcq+RfqOms7XDQkVR8kapt6616H7dyH3yfR7WmrnQmJ4El5LvCUWqdKgv08QO9pDn4HQvnOpywd+F9/658GI2kf4pKyUQZbHmBYYuoBmbFKVV42WkqTPlF5ANuotgUKCRBfFJjiploIbDDceDb0bX3/mdHdb4rGYnWxTDZcEKQw3qfxQk+2G+oGcf1fq/wcug/Gm+Jr1XRjKP4+7+2PLCYUS9/k5Kf7UnoTQLTL0Z8Wq4IvdpYWS/OCJPuqwvsTwb2M/1qvaeighcLFez7UcZI53Sjf9PStph7vAGjrpxg+SBMwp6vXT9Ao6BouoQVAHGQEhFgaq+0l8zQm0vtA5wFqF4hXJ09Cq4uyyZuz3LYWBw3lwpA5Q1GyJoR/XVsfh9hJa9KBzt790sf8LYaEHBx0H6zF6Cr7/LLYyAb5chCaqlH5rrXqXnA1NoE4PfTcRneExToPj7WwQCyFtLMD66/UFmqsthadQ7r/eBsDqxwkSyc3m21jNSEl4=';const _IH='f488f7dbc5733d0af7b5601ed7c9f19382c0245171e7f7c18ff1c06bf4e6f551';let _src;

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
