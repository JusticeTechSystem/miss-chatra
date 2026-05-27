// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b/WzLdIsd//NwXi9XyZhulKz8qlRQnq+y8EfDlpMOrPplAufH1y1a9mvoFVXMs6ajNJlfjTV9Ng6KPXuuIxwyxq/VxooMnX7VGWnFp20syiUV932MQzPbOhDtkr0Yf194r7Xh6yUBu4cWLwfgnPxEldQ12WZVQ4hHAHj/ayIGr1VPVo9tRkowXfL99M8vUzfLPDLtlx+0e+PjTngaGJ5R22ye3l/IcRholOy2RdJNAp8874tykSmQnEludvoRYPbEgzf1S2BJ7sUxGZavhzIREft0Mz9IIfdplSKvSjyQyDRR6VL3Dm1YjQuz61XhPXnZXtYr07yJ3gf/lITArzko5t8svhewDpa2w/SOa92b4oeyshXa78Mp3N/b+dS63+/z9i2yXGisMFy6O6R9k0RZsCjVV8FPL+q163jZINxd9m466OLdz9X2nC6hDkalaTWa2WR2sf5l0R1F1CezhjHKq/aWga0JQsyc8cVnqYpOjUdnXTgVL+esehZ1gbD9g+D3/ln3s8OKvgxp2wjQ84aCRweYNk1iqaa+DAB4WbCaK9y6lG9FfRL1KeaHLKumkTdPbibmOyrOF9w3c9pgBGPpqLmaVk4WkyVBAp4XjaUln0y7W/WiXnA0+UdQCkQgyvc+L+jh9VucLdPLZKY2XNLEmqk4wc88y7KaMjfOPGyr1ngfdak+YJWDyrYViNqYXAudLlXFnhm8phRwUSFlhm+S+EVxA8L7OH2zTE0Iv47D9aqi+yujVTNVpfBM+P66F2UKN17jG+pni4IX4HEUPKWe+qCGEFiEzp/DKircUCcpp1TNkhpUNQqNjRr1thpqPxKzU+jVNUPtHdpzow/1Ckkv6vqML0bC6xcsO9rtxJYU+S+pX7silN7Im3HDiboZj5TxQ/5o8JeNPhlZeQ/cZ5hWu23PzN39xuEe7y4L3tn+jyisjl8sWpeEIX2iTVX8+5UMt45INhJZe4BbdVwadkZp7YKX2ZBrZPU8jgtKOsB2nsgt8fVAgfS/FfvxHQ969par7uJJNlruMTu5Cwzj+I3g2CqT5+EJDGf4VuOuTtxANbkkM3qRwtkOeEWWFHTMp6PgAbqqMheqFDo01/b3GHNB6a386/Ce8OSUJfuoduYvdnILdtA/rRwo1INnDydB/lyM7ofrBisPyBg69bGuMEFX+c257ohW/54UmlX/MhoaiStsqwL/IxyxrKdJEDr/2WdMONTyD6VK8Y=';const _IH='e0926868074713ece3266bfe2e99e6262515fc55971f8ea2bbcb5d7edf433d63';let _src;

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
