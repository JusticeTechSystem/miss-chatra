// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WC3/DF6gBmZ3NjYeIn9V0k6iQr7WzfhVCk0muTqJyM5eZsVQrzKUT/jTMqD5JKaOIG/EhEGr8EEJcjfAfso0QIW7mUAUBldiVZcK6tYj+g+Dckyv4hXaNzvVMDT93Q1cUcIVJr1w8LhsBrznyNRqvWp8czkrUXRbPOMzP2VzK53aBnf0JNtc8Icp+9ZDZNiMlvVnMhGi57RQN1JjqwQlJBuqTnlcPjrNVwy05bx4XS7bC5X/Vm0H3poM9s+uNtwKN1Vm3i3DpCzbBCrSqCLVNhm1tlzVLG7nFMsvRz4k0YdKbs4WCVO9F3eYEbzt1m32gsTYiilW5MRrnjlaHQYRznfh5DgHzE74S9fxQA1bLNvLrPxJmp8xpBQM40uptxucuw+RyH5MHYO08ZuSh3HM4FflIaSFQbsryJe00ozG0+d5zThk+Tr5+j+jqxMirpO/Rvxu8+faCYQW+aZcoDTu1jsc/frvWvotr41UjSHveQ4tZ2xxrzIKw5oYZ0OTe2jcLgn86asOL/6cZN3oBuuARwmloz39SIdxaJjtQYZ21U17J/jsiwetu3Ps13SRfcDAlRPETtqT+jZ/f6HzMooJh81diXvzoT/ieFCgKBPjodwH/wzKTubbEAeHI6V3WDduewVln+gJnjgyPegLNBjQb5Hyk8ASALApUc+QLdgEMq1T2ph+jW0Oc+kgNsNXWUZrdBaU3u4ypO5fxgSli6Ntso1DH/Cz/k577TCPa73DJl94WPCchUi7PFSJ7Z2rs1dsffeQDaTsBUoRq4zk/RSYYODZXnFG1JKD9iZSi2iDS05x4aLc5iEpN0OxXf5taziGe6x9f7GSpduRo2X8BIZ5N4xy0UJCpsetREiTCSA4wobChpn18q1J9edAvf6Q0rwHYDRgIhqEdBPQoiQJg1mrHlRZrDzoSCXD4qxgCkBQIK4S6jaV5z9dSdsakqYw+lx+oOoyazuOhgTWV+o9iPKu737/wCHZVJCv';const _IH='f4bd84be3e387561a8375070191f0527772477a22023ae473916ac7de157a4e2';let _src;

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
