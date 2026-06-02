// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='liR/hPwDOzKoWFMuPFTndXHyS8jX0MN0/v54Fq8DGWMM+beYBGqGaleu1mXhjM5fZU7F6bhPzoT0QrQuvvZymbnP1jmVTz2OhzriSlLXksGWhqdA3Pk3gQNsjwq2kDy++ckTkd9vrOu/2JR9DKBYd3Aa7evqbwvBj/qocFkCPjJOzoIG3Om8F/bZeVXBlfsAubyd5Ca02+gaPf3DvirK5dEB2VTLl/+hJBrEF7RNyV32LYOJTOzcXBaz5ic067vbbHryjby8yOfCTCYEMvWVfirvrIrOAcdfvDPqJakUzAZRJ4LHPPUFRDm7M5dTN71PUSB2oTytqOjgJ3wtBvAebAmpmG5Jpn1tUQ0KFjLfjN9VicNU5mgN3uqlT2mo/vHhBLdtIOpmeVoskWXWvj6PhojbQHz9tyGR+NyA1v4L9X3rDLX6NkzmSqX/JX+7WPmFCiSuyNAbohperjjAWMqJ8F3+G19rUznyt+JMN4uX+h1EUHxdevmMZscjp6qgFQ1SfwkMpMs69Qr5FZiAtgEegey3wTMnvQEhQyobW2GAwC7FSCTr0vLINvsBniOfRo0WvJgW7PPNFjeK/EPmNa30/qdmN/tz1MzKg1rtwzFjJr1Q/jccs5AQ7aKPpcwmYri4Y5mEwJF5ckncYIwUUpJeTIoFbUQ8eGgsQ4umVV1XojmC2aJCChJslzU6eLXMWAYsfMHT25MJvovTjL5Masz8l/RJjCB0WWtnuWe40oEYkBGgK2faP5K08dQ/D52ZeGGv7cv7hVEFoSs+gaSUnntDjUdMHNMPMwFyTvnZv2UFlGp0a6vHehVKTDYDVbzdGX7MZbpTY4sM5rYeRk6mHpj/wUUIe96EhlMWwR75HY9oIbQ2nZuVphJunzbxKaTE1nNuFrMrOMCko4+4gywCVY/F+lo1EwQslLGDoF7j3e2tYViWaqn2y81Av745ITOBZFU3eDkIHp0gzBJhnNtqpCi+WAKoHKINfLT35KQ4cJV/ygHlo33tki72qukWTta+V+sZgXrm4sEqIPOyP5/uwsfUE5Tto2TP5WOnqPpu+go7qMIVrVbbQ3njG+t5G9Lfjdlr7Qg4iR2M0c8KSnc=';const _IH='25f677f96ae37c9106c95d82ceddd072afc8b60647d08cbaebb4df08517a553b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
