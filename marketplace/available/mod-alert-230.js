// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bWN9Zkzl64ItOMLE7D2EXxY6o0AHH0pVqYbjGMokH2JYG5lGl6+4Km6XuI+Ue0afRv2XLNaknx41oT2MXaNi8yUcpz3A9ClDJZW/GBghit2Wi4QaDtjGb6uznI0eH9FWWYAPWBpjO5gWbQGlF4cHJ9p8Byc13R+8Q87DhrOu61CwNzjquXq6OZmYHh6KIfHCQovM5cV8Zb5eP0u+76G+8R0c8yBfyIFR4/7vBz6j9FcjuYhoAZeXdmaXzQYrwmZJJ6R8D4OzF16junT1LYm/JSjWZuwjO6OX/xYe2GkREV3/z8Anl/pXP14LXIczO0sWPCDaNEoZgTURTAQLh0Ydwo6LdY4U/POvN5qfR16Cs36uvapmJA1TvJmdzbGE1POXD75wr4oO3Gm3lgZN31XKdAF3wI8UAMWZxlXSTeszl/FbsBhY9LqK/yhmF4X/ea69iZry8pMA0jXdAd+Z2gs691TEeOj/TSdb84kFfZBphMnqOu0LDKDZZElaQkyQvM8PP2c1ucpIRQanVNMjiz0e53RQMOfo7L3U1YCyTqdUv4+LQZgOZpmS0K4knOUyD4PvV9DodMHb+qjtlv5uNaBrRp4COn/BjJeiJOzuToG42MPDXzXEsverFcVpkZUwfjcma74YwaCQe3qeTP0f3a6WH/flJKHFUloF3WMeozTjANA4aKLEPz2vkPc7IuctOvSiez/05oaNUDrMOzCHFDClQAzwKwla1Dt7eUO13jzEI4lFA+Z3OiCkPQUJtGEq4sKGSnWpOhpwzoPLnDath76DcWtVS+ZGVds81kdmT4ZoY97+vugJa+HK6GBBbqn3KxfF9s5B0T4NCwYX29NjjQQGMxoreydQnGalJfrlROByglT5sUWWCn63OWSswdtAK1XY834oIyyu/yUN5FBtya8n4+BjVK3kaHOOjjgw8wQe8nowziRthcG3umr1olUeP2nobl2G8czQTmiH/tbwgOXAs0hKNgvznyMmS0G+COtUfDkvzXmIwYMNpTfvcNBuQDw4N3HSydxxbW0xaYw/5MgWqQDAcULpx61l2Gzjbt+IGvn12OQRacwMdm13Foxy8/OyD24jvCQG+mbYKPnPcrHCKf5/QeOsBSa7GkGPCbrWRgkuLPhjY5+RqJRgaqK1+PNWAubvJBjn7LYKx1D41LQO6i0CJYNeZfnfNHr+IjxYPCj1dieLh+TXXsCKpdPNyON51t4MCPLm68NWR6Bpx4O3mmM0RXCIX36Kph2ktFpMeKxahX6O+1lyNRjYGyS/jtRlOyCd0PWw0453kl2IX7+0s3IVeARLfQC2YdQvd65VjSewvVrAMuiwkTO9cHyw3RsBS0hdks8ghijG9FGAuD9HqWaphxtp+6pbTgIHleZP';const _IH='703d0f3abfa382787e981064b62120da58340e72aeb0f57b804131dcd7ec1446';let _src;

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
