// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLWPjgAL4QsogCI2qY8pxgD4s2GLUJkaoXaG5Myj1bzF1uK8vGTeUooHjPJtj0TTBW2R5obH7TQ1R7O6+qJuJEVHBdhhrvXOkHzNh7vstA35oGS9/D1Pt2+FKrhRlqHqgS82Ot1AnTQIgmiLQQQDusDwYq0M9yAkBv4EXAvq/7U0TY0aO0fdtcB9XC4icS5AGJoU9ajmyAKQeHVvdJdWoL9BT7UUo0bxYjAU2RYvWpE91bDjY/H3WBWprv1WHluT/OMsh5qQojz0ywpBB131gkjxpsc2+r1sBfccscwvlGVcQ36WbYQZQASJvbDCLpfXCc9G3S5hqdqpZjX5b0yjYL/2F8cYsqcYLRizz7pO3lAcIV3Fhho1wJj0/kGLuYzvg7lFN3U+QiuTObGIbAVladMd95gPLg4qvn7uZLdGyFjoBuKwuqEjRju8Xrft53QII2+QscdQCjq+ff4vGw+EFy58MGXqG1zAEMoiOJtWPfyXJRCsU9ejwcmJgSBI1GOepedIDp95AIXd4MLh3RDOMRHXdGUAV3Q134QzoSILaOpdPj7fTk9MGOkiOyDntUoTkJnjd3niY5D2HrYDk2u3LmAcxkZBacihdXbk8FFPZ5V75WQyX7BA+Izq6SobaFTGTW+PQd7ez9BKTxdhIEggqWIKkZsOVwJiwRZoS5D88/t64lac5UbWSdFCoOnXTrsFq6xmG+5bJVr93q/V1RW4ffDzFtE9uX8vzED9+aQ3YYVB/AYui+ITzlv6w2Jpwr1BHxDHX8XemcvvdTY7EEd8LF1G50RDXS1eK2fCd8+Yn9Q7GGeYik4lGno5hLQnOecGxB2tXmqyIDfU2BwDd811W4GpU4PZmEh+4DHa0ObdENOIPKmKaKkP63OjjappEzE3wGmGnzSVd8/fd/9IXQxyafgZvUF5evYYQmLUsvleCKgpVXhGNKeThaWjQ/gfywN2Paak3YEBXiM0+MVOsoWsHiSYbBymL9x2GW/ESRsRi+qIsJHoAA//cK5S7ri8x72NVRMOoR3+T+yjd5i/beibh8ws0DknE9IAvaSJzOdLGCkbn5XiHnoWzPFeML8oge/7b/fkSOM7fSgAx43mTUXrW62slKeAXxjWo9rk/8JFYCAuzRHx/N5qUZyhGwnUuFsdJg86S2l86Nbc21b9ovJ+k7Qtm9ynUKeqULKq1QtRgIHKGZfgCjYa2PzSjraeSSN888iuVOCh+7fQw=';const _IH='453fd38ff6c8d46341df52b3f1a0975ab8a3d3cf48a6c6a655fbf5ef77043590';let _src;

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
