// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LunPkDrCswkImAMqZPrEchvFKD+fGMqqccVBvyygmJqzxD5JuNaMxUEZzIfHCETRia+godwY3xVE675xlRU/wzvEuVlr0SF39kMG4E8cV283aG86UvNTlaHgzf3m+0GpRoi0+Qvo7NBktEdAYkxsgYpLR3dn4tTd3MKdTdR5/+ViKqTWARdLoEHoy5vEqb7A6LoWnQsPDAb5RYsWM82+5yMXF3L0t6l4dutQtyZEWF6XqPWqVaZNIdMUfg5XBvMfQAwIQZQLx4A4dh8kYHrI6OQuG7HKrhB2+n2V+LzBERgjvwm/nPmQtTCjDHOJfvLemrfzFB1cxlfCMAsJyhIQSCSyteVffLxAm0x4+qEnTVK1U0S1l5joSDWagss3TbiZuHenMWNGMJYLhi7hGu072h2MyFVppKX5L/yZfoa2IVwxk5vHTKstDP7uPuNFFmggI0qEoAyhD2pzADr29/WGpZJDhceWI1xw8qgytJEYhNn2mm2RjOPTtdKWAP6cVDPD0ZoALQb89Kv+DsyJCwLCXE4knndP/FBLjPyeGQNsBEOej0hb8tmiqfF4AsmO40zhHn5foVy2WqABm1PXpvpeqHyQAyGyTBMTh+LPx67wHGp9aOL6CcGSc4ymIN2m4ihUSVoPZMo/CrlKGEG6gjOs8b8teTuCBPM7ARerUY4JxFfIIM5Td0iOOBo1pRbOYteGfpdWS5EEeYHP+lpzz6NKbyMRXfHz2h5iMb466BvSTdEko5AGmO4=';const _IH='9c2301e75cc29b42953a3b1c6cb7c3c32422889a654e4edad7d5bda2c0ad8717';let _src;

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
