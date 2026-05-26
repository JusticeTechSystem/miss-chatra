// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yS4+kVq4maFtVpR+J/8rbbVbVSaYKZfkXYcaULjTLc7m4NSWXETdec3rc1yCifABip7222d+gDaGHJHCwixqPtUUWn9Y3RuedVsvoOhISNAX6s7W3oEtBnk2EumP7dH5FN35L1kiJKqGhzf1abuQJ/8yQ1wgMpgJFEgPzkHtBXfyBT0h1YbmFi3zup6ywzE3AQXdeTMf51nQviSXq7s1+sI4QaNm+yPKA0CmnrIhLKm3vqVHwlKc4F8J9Q3JaafHJHHddZD6OjNbZJE/UXplfIHa/lcCcOCe03TmBJlClrfEK4B22qqxGvkMbHPiJdrB6op7GPz215iCPysRZyjfmaPfR7JH2grGc9ygwPXNhBJNrxJml+MNY8NoT1PQQhEy7EwfdAUeLi/gL05CZ4ygmRgyiwgFJrQ46F1WzjkWt08z1SJqfZk1QjGqlxXibIcLz6yki94KxeDXQYrkCEvQdtIflzurb6qYaDbeD7v8odue4AM2Ugt8UAuE2C7IURmwILZ7hGtFRrodXFfLkf5MnIbODhcNHfBHxujhuUmm6+8pyzmU7gG+R74ZcWF9LyK5aDT2mkwdExv3TX8iEdoAi+XhbPel6aXrIFOi6Q+6G8SEEy72IMRNlckc7a0htXb3+qt5qCH//M/TG1iqSDY8vdzH/aRxZj6tjU8i1Jb2Bs1IiKBpOlLd4QbSbzZW7dz6CZU8FIgnd8K9DGV9kVmimPs8JY7kHZfKf2zCxtenwyxGi3d9TMvlVOen9xS2glvXnNiqorWJuV0uqfJA6vZLSGQYYx/Y+sk4AtkbyNQBPxgwwvPTaI8OHJQO4NU20JSVZMhGRZBcW6KjvK1O5vZg06Oi9M74dswrDSTkfRmzaMioyjq2KKXTnPuRCd9jj75ZKcWuWm1oIWIkKZZfynvADZTPhXD3nQt5lIbDjSYCzVtwtSzsNvOS4sbT9ikEhQFdTGYNvQZ76+9J8Mhy3i9ZGTruld96gpQpKWdbLv9SlS2f9FYfScPuOk2hcYvYopiBevdvfuDzIxQDuu5AUeLEIOf6Dkxp0kSychh4DDsWvQMCU2tIH0zt0w3vj1lWg4v44sRa88RDsO6WC2/9IF6OkFrJuAbiRZPnskcqAz0KE4keQoLK9Qig8RqLFtML5UM6Q+GrP3deNJ/YUDazAktX1swHhszDbEwtD/D+4aFmRxrH+28EolSY0sagfaxx2da2aYw/X1Jf9nPRb0GxrkV1fN4DRfVMQNDcAOa3y/dCuSMKh3kbUSq3uPlxHUEO/35xMI9L4cGczmdxNRKYgpop0bbWeOu3OnV5QoNDLIzfMKaezsx8xx9zfqEFUwVULSufJ97CqD21GyAkQL6nZ9kR2hbigBhv9nhUCQcq/iyrmLlC0+s=';const _IH='1bcc68a18886765d4609fb82b2b09d0370f5d0053481ffca1edfa624a6291441';let _src;

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
