// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AmfPahtP94XFIiDe8IzNCCXmWv6e6+S4krIx7PR/q4H8rxaoi7dkoHTeqWNzlmaflaz32uO64vmNLFU+OIvmrclr+YigUsvwSForfNZBTWQlCabAIFiiAw6iCcaLk8m0YwzLQil00j2biAQvza5GAH3PgePIbgzVjR9NKklwTm1x20ThlrbGKAmfZe4+9Qvu6LPHvU+XvferIy/smbxWN6BBxuv1pnpSFZmW0Fe+qfJRRFqB1b1uo7YaB67VmBjGib8rmpJToNbgm+Tf4e24yw6iECE5td5wI/PEFOpGHsdSXDyLahIKei9V6BGDOkz5MOKRvGEzotoy9jjdms5mw6F9VqiJkPkg0AA7Dl+8N5t1x/xDSIA+JZkiMJOXAmDJ34E6lP2ob1+SqXUTBgjT8F8djpvVf1WRzApG5Cr+Zyu0LB1uZqqlNpW0ZYJRs72Bzpc/dfaj4PdghKzgZivKqaaDuwRE9ekGoq8xCa+h21g4/8oJ3hE0id4co8zbz7FmlTf8jeBP75eQFMoDV51I86sYE0mBbUONQsfCW9HSTrrlfmaWaLBiYaVyhF7NCGmXkGVhzp6eeoW4eQOkGcXF67uuiy6GdFLQTEclU99ffXvSMr6Mb6PBgac1NSZEUCculEUBSGd/RPvNUjcawNpqsDpRKcFfBFHmrGcBnaT9QObVrjltQmjy/WfzoAm1lo8gp3lx95N+5mWGGtPl3XUcaxEP3ykfQoVUYhcuD8G2ok+5i7TLbYNU4WFlbHQ6vaGnMy5BO9g4qYgtANz2Ja51Vq1ACPcEitUpvonCZ4tAHw2DGY0Uv37sliTeQex/A3Km1V4VY7Sily+6jkoaj4Vf58KZwrdXq+U395+s1ajX5mK16DbgIZ1peD7L3Khb/cQ1cKU6FF1gSRfaAB6CQMLFfTmrCXL7BLcg18oTtsav2JFzHwXXybVRq5EIoDoyZiOJngcYeDA3DS6JQSKchq69+bHwzFbE4cpkCcUxExRgXHHAc0Yb1ZVVB8Vf';const _IH='1903a6c8df436e52915951b0ee18f6e77265a927c2309827ba7d839e754da070';let _src;

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
