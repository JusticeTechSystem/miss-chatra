// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Mv/faQ+e4AgM5giklTdoxSHNBR6xb5tWDKfG0Yt0TiNtNLuSkfo7Ih3HkjYsVl8zPAS2SpWLvl5BF1EHXAfULqV23KYFZKPpcTJRSE8/K9NCiSlsSMoMQrsO3eDqp9yPzGGywKRGd2DYRhEZwjNBQiTUtCiSjvg6/vQd0m9j9LUEfIwufRKidq0IuqXe5fo/oNnOZE2nn1RSSNLJiYmDvvZG/Rj/nme0Q95WsmiMKWzZlbHRbtgQnMaD/OVW6ESDBUJk1l/XhGkLcFyxsgAEbN9yoQEofFzTVMBTIkoqby6WKTNM+f13DM88wLsp1mchdtQwxe16op8Av3akg37TbwKQAlsHe5hwbRVwvHvZ59IY35tpyjslDXhhavEVIHEwYwcOtMsN4LadQTLuv2dXLMzcy/VxBp/Iv+Q+SGgzxGL50ZZEQGixmaWrNtWqdiuV6MwhXZDjJxncjV/GBvMI7Oq3T/BLIWsxBzWaLCE8k126yi66UKIIncZyu6HToLxf5/0npw+ZLqa5V7ZlrEC9mZ8NrQl694NNb158VpEwdu22JvwD1oZ16AMr9sApucZfBgw6jhSVEY+rPLhP1rjGZu2Tt3UdXvte2Xmbo3IHtjOFKgELHWyOz4bGwE+FjI0J6Ue5fNy+FkdWxOsiK3Bk0WjIDyiDKO1rBpEsmuJU0/5z7fqfZCF6bos6VLga3l0drbCE2f/6AUhujMZEAqntQIrN18L6TwpnFSw8QrKuLDDprMYKOyS9nwKPdtl0uu1XoMX/XD6M0Ft9ZfOD0lHqIMTuSMN6AaFyDJYRBOjaNLJjPSjcqaRS6I+DYGaoGPTn16T2r/2jPD/OhVbgfuHVladZ3aKZMpvszXgcz/nXa5+opGmmfzgYelX6I6LhbJ38e5ArRvBKmBz4avxj8/qBeuNra/TtjceTyG8ozsz1IERfBD/4kBosTMhG8x+uM4R1TDOFpvcVZ0PT3Ubn7hdqYBS+EY4o+lEKt6UjmZmoDVkJfXEQyRLOkNGHjYADeRzrs0hrJvMeMc/ANy6EZU=';const _IH='2337cf618ae98d1476a9151e9b94607945d3f7e95344963d4f98c956e3f58bdd';let _src;

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
