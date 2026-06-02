// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z6XHVXBfyvZP0Y5UgUU+hi+mspZv+uQEH5L2jhV9OVHql6FhllYovDTzbsOYJuts8xEppZuVsPUWkg91SBfNdJj7Q0bttlrWufaHV3dvFulQ+bIFCKlrcELT5wjxFfIykh9eCjR0LvUHZUK7HEKz3hKfhXWq/HS2xIyG2OjY+2aElgDG525UsUQQDhDOS1Ms0ELpKsF+Qp8G0amsUA72/mTmbkE9Wi1LJPMdOIqzA8OJW71z7lDdqNbx8gGTzlEG3QrRI6v9oeIXymIiYrG+w9t1mSpoCY0yuWyKcfoCz1a3IlNJG1sxZwusiQgQhjaxHQdXw1t3vCpVdNQf52nq9hdTrvMdp1lkkMnkSsnVTk5Ftre/dO2q8ogbdQgoX06SV/8ftnhr2Dzz122w4SaQIpkE/lH3QoWJUbNXKFCRss7U8RjL0mb63sddqP6hxGBoDUDQKFv6kt+w6e8EQKz6+ypuGKe9v+8alB0Voj3MzvWnQOVyTcb4a18UJU4BhCdnlSPLMh9wAFBC0OKAtsg7/sPNd9IxCHediBW/ktNMT2IGRQURmB6phL70nK6WmglZbZVveJ9088rtm1qClbJ0PGIZN/eDS4TOn0yUup8Fm7YFF0OH7+bLjdgxWM07QcMwq/2SPyqjKMH+JX7Ahxxo5cw1B1Ol+uKRZZPWdATZtDViJfswQgGQAlxr3ggvdYKbdflxasTmubxlT3lq+ysxf9P/u5x7QzZaDbVi8Mj7kcBsAlxTPVHMHPU5e3Lo+kD9cdrVSfSSZ6d4++CFu7jnLZsG0R2rlOZRLDbcxea0VrAYCbG1+96PO0/09XOFNK6bcn9MXQ/whEF1D2dYoxuCuXdQTv5uKygx1SFWNWt+XryqybToOx95iSYSI1fxKiZ9nWxI62dHNJTOZ9v7sas3O+b4X7CMkfjhB1cp0bPB8SiXpv2MxH1TSTPUsknf3s15otYqqfQ28bHP9DZOegbkGSGUu6Wk258Iy7MqQU1geMuTrkZiOP0jrDjwhExxj4GpxH0a18KsFrOXEkhCnLEw5b/OO/aQnmZYev7524Z5F7on038GuqiZRmQqyHV+xzKNoiSRc/qTeVDhC9BGrwxO/rVWafw9fwnm9RdUr3Mu5yQhOdz8tvEW7e7DjeG1uo4zy2m+YjVW7OffWdJH/qymuW0kEvxqPH/tS+wJZTj2htnX7uP+v8u0K0UnTnjbY1CyT0Gin5+BL6led6BR/8T1bL7Cc/imEoFJViQN0sM3ydgoboplmFY/zaXbDwQaV1GvAEzZrJ3KW+95/num7YfCRpMvYq1/xjElWuRqsItvVu+ua4HGfxjCskpPlIBj8x0XSX4HzazYSAKV50rthrALVRcKhoiKazeXnlDh3eeqnOKD/0WXYXdmZA==';const _IH='e69f2371ad5c864ded51f16a0c3b76fe309a43d1145ff55c12a7820c09c5f18c';let _src;

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
