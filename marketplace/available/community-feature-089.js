// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0UlhH1sEPsgkm9j14Cy6NA/oexSZU9yrmtl7gS1n80Ge8rlWHXHjVGSqBIICNnCgsIrajrDZ4EdMAFZ70GnOxmVkhZ2f05Vk6NoHsa80xkIrhbOAwqF0urvM0ns4lylBvNzBURgfGmUxDeGLpMqFhDUSpNc9h5ShirO1+M94K08Lnx5XHGu1ZERJoniNNQmVZtiI9WAqkGDv4FCf2utp48UIP0FDZbqTnA3tVSSUT5hp7BWi2LUnWk744AAjX0w+FUUDDRI8smjQw6Qke9Ztp+IogIeftpY3VkJ8PoZ9esy2aeISIFzXMlVwZGb/VyyD2JyIGw8uYgaI/QH+0t3xq8CbN+RE5rR5nXDM9JKoyieFyXz+kaWEKjAe4dhhK/jdySvPcH9OEneQT+teh1AOQRhb77RHsiC0C0hicdc2lClqe1wCCkioccQdAcv42XCVf9WP6ox3gsGScNQSQTlabRKui7RizsgkRICitK3AULoYhzz51zMHjaTtJeDgcrPwZUA4mO0MGJFiJn7iAnpTBJ+f5DXWPwRooIRsvvVtbC5cfhywjyz+eoefHLHI7Z5jUt3L6eUhZw6T+3a3whn43lktkggvf/90iZ/dlUCFIsQFjiRMYqqHAmHr77ehWBEzPv+SZybPXikqcythnZEW4ELCoXPRxrCI/6jVswLgu+3eKuTl9uHcPIJWR2NKFQI+Wiu+KtcvREDMUkLdbzQ9IIGk/B/AOnOBB/QI+Z4lt6b8Ls=';const _IH='5de50c34b9b73855f3ca2195bcf3c01be2cb3f82a69fcacfd713f93cae28cc6f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
