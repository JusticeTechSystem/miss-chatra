// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gOmE+X4Qb8wUnIDde9fW/m2Dv7VygfQs6l2Z9j07eO0nIrinUQbTJcY3G8WFxIM0SvCcWSFSCCvK3VElmTlm95TV131HqW1uCZ/iYr1++J4Ol/1g0Qtgv9tz+aOlxOYsZs/RG9YjabOHM9OEhBnljM6sRzQAevrm179Gih9lMJRUNjVUXG9EAqFrezi8v2faGEH43EVIb/OQNQt+YJigM264gelRAMN88Wtpy0gdlBbedTTZfp9N5wgk5J68N1e2oTOaxH1X4fwklizO0zcvNaNRTknSNkxyoOXQ5iAxpwKEBMugWPnykOKHz2HW6wDlcxPRlyGuIPnKRRTnE0+t9FrLqDoV7Ef9mR3kNoXECNoNWRsNIrz1V9ZD01qkzVqbWgsK2zuyXktlOrcK8Kn2yXwNHFhE02mLu5SyUR1CGEB0lBQZweqfQdpprqkMF5svoFK4BJuuN2TDDC1NkwLOnrkXzZo/tzPHp7i8wqnQv8Ce477jwGe3efweE5qugh6lT+ZW3l98cWbY4Ii8snFcmGOFS5IKx//YHcwmYO7HWt6V0WArjvpDbGGpoK7zfJQw6iZbAOO7IeZbr/j9+rTTONPD2FuvizPjkIDj8ixNqYDYiurmSp5TRsjlpu3L/HsbQiY95D8tjwzGdUtyu0vGto+2lJGiTH/+w8FrmPPi1p5YChtlBLViRsT10HhrHvIxW8X57qW2tsRkNuJrqBeZg3I2DPK2oBoxux1Ji6OJpTz6VvMJoxn8sa80diMNUAWOasE5t7Kl+U/tWXUNAbczGRtpPPQCKcuu4makMMJxwpv9b7nATRtzuBQkgReX2LXnA+xSlgaOHFOGwdDT43uanD2tQHiF/hN121t3KhJe4rTIta4StCfRguUsROLIDwsmQjV3/Gta7OhKN+5gx1wmJG2FYjHvrPl0UfbQRAse+zm50AU4MMM1vGswLStzHDaN+YKZlNdur9dTyBQDt/sp+jeJSLMQ7+uxpZ17AjQOHaD3HroxR6U3ZdcnoR/GeXnIXeXaZTWQladkAyixXaDTjJvdhDK0aUFjXn4etZGMkbxJQgZe+AHWVTwfgg8g0qX+/B1GXJxp3Zf45W0=';const _IH='cbbd213ff354f93b7dbf11b9f33ce9d7a1674a141ebccfdcc95b5aa226ce97b4';let _src;

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
