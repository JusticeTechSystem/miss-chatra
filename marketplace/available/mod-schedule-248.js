// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTX0JivpeXorHfhs1mPHDI/4kRuL2KdS9EKmGh4EqP13pURDMqACwcPWu1oRQWEWewMk32mHF7f6y6bxqBcHwQAjgeMsDuvMBL+YzHSY/pV0dM74+CTCDfuW6LroY4eMOgjklC0nn9FfFqT+WSgWJyVUFP76Wf/pEWTG08cQCmi2Pjm4zTLaWt1BqigW6flcOQwPVadJbCA0hXeJ2nAMnmp13yT+yJp/OZZ72VhtZrJFhq6pKAq4ilFIZB60HjDs+We7wdUvP3A+lxy1SiHjlEAV4lT8gaqpjXwSPZzSElKpWme0+B9ZnxQJDLw+v5kPhYR9/YhBHkJulmb8WD3HVLhdryDqVwjpo6b5t/OBwIA3tVjYDM4L/xIgUWrWjm1CrzQ2xz9/8sw7Qj9cHCyMUx2gA5RQCvojsclajHnGjLvI3xvahDtJZF7ytbF2w/rlrH+DaKYyMnmFNYFqCrYZgoLUrmq3NulUIQvqeYJmMkZaHDdak9x3iO2P8uxLq4gUbFJI+8yBvOGKtqKj747S1SCEfq6nPS2ofmaqUCQNBGXRaxgxZvL+P1gQzyfTLkYuMHQ3rQ5jKEfmEqBuS2DyIzeWyHEl+ZVtRI3/VAj2kNYR9RQoKDrxilAjMwdhgRZtnGpL8zlt2Ft/AQZWz3pewaopMHI9+6CERm+5dUuN6Vci4w/AoINaMMY8CeV5GjK45GikXhKA7OUQkWGeWCP7Kuq311Asvifd6Jb2w8g5s8yB+V6g/zMRe97yv/WpfkwgSxc78EEYBN4VX/FMpCH3ggGOiZa/5gnipZSJvviD4Y5AjzklOpttObjbnXlWqpU6BrfjpGhBzPXJVWPsbiL46IKUz16BncGHG3vfVsKJK5dV7fBnsWVEycvDce53uVKgVJX5q2z4xTJQLV+L/Nh05hFMoiwk+n/XW9fltRMvva5uZLhh/XSVJXTOhMEgo6NbH2NPAHSq3SAibRr/KJiBjj0wgSFiTn0gc7YvhpeMd1vPEolF9MoY5suoX9uhHLbjxR7v6EEmQfdF7Fw5fl8O3C7nBOOF0qqj1/JmWOOF0E9of0s65DOV+bLxTlTDZ+rC26TlQQrJFyx2dPPZ0akNeAk/YSWdJoyUPCFxfQh4mD76utbobTMIDNGuWfnj8JeIKA5zrvv8soBewnfpzVHcwRX47d7SJnSLYkyYIhYHBlzvF72lo/CAADE4lJGfNfBonIVSO05t5opyvLICDt8oeLcmWAyWDMj1rbB3BBbjM4G72xvya84wSlzqXwkxk1TpO1F5SMf/kF3BpbHgtOmyOKnMzSsV4JJ2wG8TQalgZH5kwj+srBx6XEqWWK6ZILhAGBHlJrVC2ON/gIy1SynUtB57jvmtBvOFnyno+wdGIsfq7AdNPGu3zRZqRYUGri0MySRuuIIMLx6+fw=';const _IH='f48d52a59be5f51b58df13529ccdb87ea6964c95c8edfbfa1b7d649af3fb2b7c';let _src;

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
