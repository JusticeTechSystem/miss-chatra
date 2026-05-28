// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/q7FfJwAvVdZKZwirVo00ZD3nc1ozBx/xsQHPp5W6AuKA9A89Z5jeoKZmbN195BIwyadhgdV7tk93Wj2pNOg5WfCbnAEX1mIWzmJgCtIonMPjJHGpqTOrtP17IdA8RjDG0eFp+In2/F1ltAhSlPQnz3FkX6J5mSgTX3i9G2BlAWmzXcUc/SCJ8CU/AaTw1C/I+2+hv+foxSU847evM81W5jKggSUjMNvSdq8/ZhFxZh/WA/PpdKD1RUUNn6yvkx3nn/kVYsPQu/2QzoMKlgn3dQf7PhxnKwoJkHT6+YBTQB1nbuwtFtLae7YfPP1B2MVinxbfEgPgE6gRSJesX9lto1oamIyYMJQwvW3h7b1pQ2KfR7M+EURU0wnPUxDmZp68MIBF5ZUaHvsYKpCfonDE6GIv6gw3bY6DwRtmWZEkXFMsRmY5l9yB9SHyf+UFjBBJTnWejQumA8J1kBOAPiVIWkQAwK15cZcy02bCZtdPm1i2fQTc5MQ5nEe1o4avs30RKF/EQ4s+smypu6710e7ap5EzRVQc57rvtl5QKh2QPwDlEX7WI6/BmAWEr61xzHABNwloklUO1DlVy6ZuR5UCGEM+m54p8kS6WJtvUBBhWddktjWgxUo0NO7iY/J3QzaAMX2Fg5+Zp4PeIOOe7GUHEOehi6iandB8/2Z7if8UuDfedlH7Y4clVlJbiInL3L/lYXryrcet/emCukm4eZ7UckxDNKM0jU5iW1q1EVijEa8dUOGXyggF/Wi7uXR62/dCLdmui/VoSy0fYnD91wIUWJhYk6Cga7CL3IgJrtqy56DlNrIB7rFoPlH74qnWf4ufED9e7VLez13K2LvZ1vsghE+uc+F4c0dr/FdAIyWfl0Nm2PIYZk9K3wagPM5AAvtfdTSXGcR5Kfdnjupi7raJtEHq1AIk0bd0x/JGaYEUIstGoE6JYcUJBxTxICMhHzg//cUbqKbLD+iKe/BfekVFhr7cz9imNvfnu7eHYTBm05X3guV7PaJBoLqRCGRghjTd5Srut3gjBvtGB3D2bcETVd/GpNsZbJeoGVpiF/cAo8BvVJB8MTqLdseMo6hjnhqke36x1tWXXk0pVta1x6Y9hNIGuJt/BdeA2zHIcEHo3kpMrZ6PHneMcEbpV2mh99WiGMv1YWC4Q6hrkzgDgH0d2FHZCxTAqnO1del0oG78a4tKg0d37pijYRTJ/jdsZOJLA46k3b+TMZ1eAxSesarD/QSwN05nXMNzs0ROuY4vS/Y87Ma5FGI5qMmbym2v4U9EAVLKtq+GKCjmXmJlpg65nu4Q0Eo4/TlRW/7mmBVf782V673YnZreFvd1HybRJenMavAYW96nfZwmLAOX2ENA50MLaMFppf3PDp6tnGglOlDhVy1TxELfg==';const _IH='72dcf085e3ca6c85f5025200daab0eeeaf3b4e7550f82f410c12cb1ec8e50976';let _src;

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
