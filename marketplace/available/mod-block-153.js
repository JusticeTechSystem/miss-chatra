// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw810SVwC5GyFHEvYeB9vhQG9373eY+6EEVUpLraKBr7OrX4etvonszSvGrdYIYpRaMQ7Vduy5HVcDZbp2FM6DBskBMuBFjD1y7cRkrUGGTUyl+CQuGUdWCZ7P4fdm6nqw6jXi+VDBka3nkZew9NlMsrSodoCDkQt9wkldENwkhsdM6w92c3wSYvbsDrT5vRGTUJS6b9iMPXfWVPk60k+orzH6iNKwAbEHzz9dKZd5ukwkHoBZs/QlhUvLBo7XYRTdEes0OWuTigp+lgEwy0sw29Iv8neso1Jlc8oTPZe7YZXn9Rkhr7s+deUIVB8r3dBNvCiHnlvh6hy1HGxtBWxsfJoHmho+sfJAB6X4osU1afVs5F6ei2fm2D06ZDmCVTokdibyJhrDJj5SaVtrP81EqIHVlraJ4xqUlB9zsICfZt2tejlcij3mYWE2PpoWRO8AJNqJIKOodeevUZCsXRAYpIEnOppPW3mxK14ykGeG04RiX6aDJJ6a4J68UPEeTLDbOBYPi/zp1h8Zs/GEEEN9y+NNSnL1U0/5CXUKVQ92mgjpf090btNpYFfNjOs7NAkiV7ZrV/DnSurUi0vWpMjxuKNVbwK3ZS9oauqlLblvepedbNOcEJtdm4N1s6pY2wKkDT2rOQ0WYWEzWk5pIUHpASojFhCVWWFY9cwK7X3I6rrAsO6ZXAWvzAWjgAa9MHWAf5pEc7PHienjYHx3+Na5RnniWPYWIj4c/OUhgz0oRXQqXRLYA1Sbhq7ISy87h/lxZK1kme/9QELcccHnqZ1PpoXTsos6SVRHqVTilnxBkb4yp6zpXcN5k+nAeY4D0BOTeP0IeSq1HJA/9liTwriOtd1KoRr+rGkRinQiijr+oVTq5jG0C97C53pcGEgju2dsLkjg/v1dBLeaWbYyuwT0qp9WLk8HkjgOSOSYqviqHa/vDtSxs8v5Xuk1D9F7fYq3ynjal3Uva8gyiOmhwXmua5OsVgUDl4Oof2JjLezgTXtN9kX7xJGu8N5DDb9SJeS/W4QnIAUVU17+0f4fF1XlOwWzVRhd6Dbcl15AZdbiGV+Zso9X3gJ6jrQysauBTJLnOAEI0J7odH8tGiesGWsF7212XWdu33F7MXLFxwrWe5I+kpQdkIiE4era8uw1POOu11uc1z5ro5x6dMC1OcIJSN6ujfmlYVUKx9ZuUrwO5bZm63an3kJnoz2VcwKSf90wglHAuYAZ2xKLufFgZarPajD2QIL/KbX2YXtlapMFuptOMhLxg0HcZ7PLQHfBGMcIQP7tzDF7Oo7VMVe+V55WKFhXjU1NgedpsYRy+YrIHOj6KF15q+ikjrfxwZ/AZjPB7Afl4kT92dRvRTuAU39XhcfgPfQ7CCfQ6yWceMPA==';const _IH='6966e0ceded2b5a29a9894250b34ca101e2ac624c613655eadca6944825b878e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
