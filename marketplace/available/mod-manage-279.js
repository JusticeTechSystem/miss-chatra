// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jaayXMJQLzMmUmVgoculMI9TcxxPz315p/AobuArr7dJR7fjpxgFqL8hgcpIkBqnHPIjm6vD4tSNIbNwo1XShIUkxpSy3sDKOPsSs/ndrz0hhhmFd5HhcjW4NgI/HZNWAejUgkfyAFpXPvx930lJffIs6kQBD8h/sfCfHt2YwF4csbF9/toIcPELXslNWlnvqp3sUOiCZRSG5UIXE89ZEqNYslDiQrrH60vMDqEvyCtwAzQXMkdMc2rCs9Dt6ybuqTp7ISzPZXkts0bkuhdxuxffC06o1vqVy8NwftGHwZeBiUNxuzMVUTiI8eVD3qxtYopR11yPsRl9VjkWQ3mf2SKhBUlJCPn8zBn1pctyUhq0Z3dRKjUnfnyclQCUbdNEPS+pT6xuXSEGk8L/7HHXi75Rkltz4CxtvQjTesUrxdM7RB4n+o2ConVzykcy3WgNcVFaM4e1W/tRkmFIF6S7nTO0BuFvBiZXmNcnHMuro1s5UvdLAf64Uo0o2MwJxReyao/QNwecjE9m4dB783f/RHIxjuVaoDRcSqDo2s5rf6cq/NS3/egWkejIr72moacTXnBnLt5uuRG5l24usAlo5hPK4+pIsK4B1EKc7vwCigeizV9k8YhMjelww5LjDJ0MYOuWlQZgYrIyJCSWT6mq4ODiBMXRFB0RsiQFtaOmWO+N1YjYOrf9qo45MAlnKvM3iX03J4V4vU+SCHSwkwAT9dgcaQDypGE/0FYY6oszXUbH/XarQNSj5wmD+zawsPAHsFzmoQ8XJh/fTCGv2pMGK0QTPh3V4f8vM1tcOfkzBAciHEWvMuctauy6meSmZcdW87M3dKVILcQbtSr6lxJt9lD2aZjZCiTK+07eW2ZyNbFtEbOuHVxK32Mss3RqcKQ51r1r8UY7kMgZVLDmvyP+wnwAgQSK4rAHVJgPtIuxHr6/3k9WFOWDQQFz+pjB4SnbVrFjqowdLKK4LODrC6vNVyOu5/SUf0Y4uE9AbDKoYtBB1PW7+bh5Qey8HlA9QLu6K6v30jKfs1ygiRHUbdeXG/Hc7JVXchnZoM3Cwh6YPcCOzBIxlX9GxBsNtYPTsx2D8HgJl5z5NnEbzPWkwsAw6MyfW0FdpuVFzln+eC1ZmCh74oSmOaiiVwryioAYAzN5nZcau5AHKhihyyA7rg0gTDZY81q7jIGqRuitXN6pxA03ROsNe/IOABnXT4xmcezuwz9KtyjRxY6z+X08PsrC+B34gYdU0fDyg2VcUXQX4sEbzwWrFJKzjU9zDDC+PzGXTYzCA87zc6e7rhDF7418CYpNZHQQirg3yCK0cqAo/Vmhi0D/2KeGB7NhazvNIjGoXeU+aTMVOB3SdM2IjaYeqPWK+YhW02YMMbMWiAfO5yV+VkdsJOiRhw==';const _IH='e47a5600c1e0000c7baa04562bbbd20f04576f7a50047028f02716932c70ae6f';let _src;

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
