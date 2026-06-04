// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C0/xPCP5lgHwg/aIOy5vXw9eJGQkcl3nZCxwueeTYsQ5hNHpmdsCsAZbw4bzXkenB4pd+MiEYHiwWIqVP5M4ZMrz0zL0C8X7JAWO9oXyP7xtH7o9gNoax5vkw31DuCVCpMkNrVfyL7RRLU5evP1EV+BG5/FF29FOwC2H005W/2LQmrPOVxkIo67O+JvSsbgtxdpXCKU+oVCsW7CqtJNfyxxXz8K5Tm5QoKnjegdyXbVGVyKSokgnQWCD06ogZAnc5Dn2xg67MRtdla1WKvq0a+tsU8AI/HILyIugpIg9+I5OQdXYS21aou13HHAvHtav94ud1MjycsdtV7OVTSTlRalflxgG6qgqsOcRGB5kDVeLcCdCF93IJDQiwH6Ay8MIuszZXliMTJPJg7wDGsitdC4a/X6snpSyuHzTFk4xM5/PXSnZAGddd/3jMQpVOKQBRQ1nUjfJC/WVnP3xL94Ht5Z8+Qp3bP6pGLLce9hGXgmj1xYv4MjDhMAroUllH1wUfY0HleVkDE9CXYp4gE9EeDxnqy6QQtDFiuD0m5XHj/bQUY/M3bw8Pl++bQF/nhsDLJxX2V9qKmBjnKKedZX0qzqCzmGylYUGgiB3YgmFgi8CGnPDDvbANi/WLLMJ8n8C+A65nA4nRyhudI53mDv7+MC+UgsrU+PoAIerJc4N5CIYI/9c6rdMBBsIIbpS418PNQRK5qg0utninSisibYh0R0bHjKxXeM5XxAXnBIhKxarRTSKXHWAVxmLsphh85JDXdM4kyOm7SX/abf3OEOHoiuUyw1wcjqFDD46m977pgMbaJLdZT/HIhHrJfzLTTbst+MbWKM2eRJ0bAnICJCWCLIz+6JFgbC/mBXGnb0z7bMNq9FyvbsMYKu6RGmYiJqy0uplcxG5rNjRhmeSuzkzqwiJhEFkP3BCCTCgvqhYdUIHdOw5hzAhVCNJs3IuUIgG2NEmVqFoF/nRPiB5ccgpZW+cwAYnIx/wZT+uiQDEDH6o9+FMn7elQWAPMhWWYGb2LiUoj/I4o0DWpuPce30OWjDjZ2dhWKTgwG5n8upwxmVooeRYaBUJ8vUpmIIgLfm3aFHjXb8V6SWRNt8NNDFF6qzwbQ7ERJ2EOOwHT0J2GAGqiQ1EKZ9jAz9Qi8fNByhkHWgTc+IMN2i45LH+V+VuDTj0td5KddL3P//I2Y0rUBla4o0uSqYtsZEkLkyoD/vocKY2CUDyYd4b5hQAE6pNkErx0pcldUHUbmp4aQDNCswCsumZd50A/pbhG1VcT7klnnbRu3lLsV4bvFqzBfMMVYEkiOxadGmB9mFn5OASRKYv1B7kt8L+NRIa/iTXG1PRxDatzigieiYyXemcyrar8JiM9V8aOzuHXM1UKQkqfKGcwSyS6wlfdQ==';const _IH='dcc909d66ce69984e6b3be3afa5e262f07c4e9671c28a9769d79b1e5ff06be2b';let _src;

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
