// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ml/nR3uBylXz7pzyrzhbZo6H29kNh8vbwJ3lyqXa10k+8YXC5TFHXpGrSCuAltAFI9yJkryblkNKGY185/YvrfUTuTCY5mYWj3psj/L1VH4zDUupvtJU6IVfHx5qJcu8d/HEacnZyeo52MGm8pejmu/6c1jw6y9RVGiqlkZwv6YW1s0ZdIjh/lsSn8gOAblZYLnbXHtr4aLDnTwDQdgclVHxSXmsNmElQfAfFsVmsRxCQmUSBW/L2VN6T0w1Jga2MgU5MAWBnkVvP46zhNGBf3boNFTnnjtcAv1OEoiSsjgoKhFozfz7MSbZZcEXwN9YceFF4r+ry63eGSeUg6QJQkBzAf2SCecuHiu/zuX+0C/DhWhJn1gFPFDs1sYc7n8y1JL8V2V+npE+8mDY1c+vrzmbJILNLxVfeCdEc5VTdv1kMby0GjZZUbmsD4qEj8HuT5OcEW5BmSLK+GxmV9WS2vn0U/Wlwnch3OeUApzT4+MTIbhQSTUstjT1m8UxOS0ci78NQUAuxcAs5Bun7B6Saf0tUJl+Mpsji3mCxsCUB+yy7oNmXPxpO1QYg3yJP6a6D983wFMlxfL8NxXblVdrww+WAbDkss18vzPI4rG9YT0P14jL8LaOD7/AgKbz4Ztt0efU9Bj2A7PNTqE8MMGblSEsGi3LqOzeguzy2NPTWAUTDsjLseDYIctxcR/zwFFb1UhlbwENqQ1GYtfx6LaSieD89hHGDxPPX9X5tOV/zW6I/s0Th6jEJOrJZcn05yjZFvU4i2iJvaDhrhl1h3pWlr/+HxYliwWxHLO2iJcKGB9QpeYvnPSyn6bbdiiByqqSjS8PjaV94pJ5q/abHPb7YQGWdDJkan3ixU2KaL44eAfRF1AiUAbe7qvpgEnkz/PrD0V45Hoz1mngKnIUjHv/2hbd3WYE9m7YiRa1gbK2fB4nRfspFN5ej7/W3bDPYaFGcYOhHg6Y26tuoBx/w7qyeWntITsyj+DBg4mGWWBnVV4QQJMXvqeIBA1kp//HHm1giqSlNDuRlHsbL4BbAWuNy0MFASVSfpwkdH/RapQMSybsd5es+kbYgwYR6MNM9F8oeZedXPR+kL4EEGyoWwFVcXF+n7GPQzeIQJ4HxvkifS0v8xZpVoKA2uWdtsExlFHxvwSsWA2DsS5J2Gx5y2+0z1BweaTDOD1APtlExo0lqkcAjDQYTs1vFJp6V9SpWR7WlaZ5IQx1JxW13igg0sYMtfuxxsr9gSRsWG0+iRtLFynuE2XkZNYtMZ4iA2x8DwI7tVh/YT9LQPiI94jJ3HtfRRFlzkucpEGioIZQ6srnhyfzON2RZyQqP21j6k0rLBYs4mkLd4i1KNkQVoJDGXMF1Fc8nWNTGqRCf3FsGdF3SJHOeq25XMXO7A==';const _IH='4a9b7285ff2e01f3e3d5f406f1460db5a8b5a46f7b2df3dd9dba044968161257';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
