// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dBDP9v2vhx46Wycu4WnczL1K5KY/mM7DbLe/8yJLmXN9Stzhfvx8hDSExC2lhCfqCmTBZ7RcMHGfvmI56OAzuw0O+GurEbtUu+t9+WxEPJu2MIMvp9XodKtMJ+BAILN6FQzVQBjFeyMRZvsUIzfAp36PwCbwRO63tw329kIqFHA7l7LZZuMcae0lfsBfSgcnnVR13F9yTgtKP1oSbP5Owi7MZH8r0GMotP0U8E3bkD0Kx9mJ6vpXzdzvniQ9ALIR2R8VjwKP+x9tiHwBCYKy6webx0ai5n9OKTHy5yNPoGqfoJKndRvCGZloFZyCZuB9JStQ67pg2JEThkDW7xn3qVOA0QWMWiL4Vb461fc/GwyO7dL/JyUPJKXzZOICeCN03iu7QIrs4vxF7Z1difPrxtTsnyohCg/kcGA64xarnyPu5qEIPDSMHo3QHcrxibocKgW8gHTlv8opJUQbQcITEpAgp7VBphMvRZPTzQ0K6KYexoOhXxmkyuG/ImnDPRfs1xUuXQ2iuxybZY04WgirbZPFaYjgPdRW5+zhS2PccsdH6ItvMErUVPmLkOC8PSdTrGQTDzWiB2q6SszvW+Z36iAllQIFYsBP4Pwylts6cmz8LVSWZMoIHR1/4oSZuDvrwBEueQ3K8HxBe/kpN2SE6nhWNtuO7AwUXI+0skWIgg3mXYBlbrU4SDEAP30KMAXr7FDaNAQ8ryLjx4jRI6YvOKUXrLjevBeju9LPv3gQkYJAmqYuWxNELx/13IJbPfiyiugzCSmLW61IvTfCJJwtG/FaQPLmt1nVJZyXkkkf6xTNYZ0+jWjOMeWE0rW9dOn9WkHDZmRN+oGm2BN4NKFtrxG0lxNULcLbBhRuLJyrRTJdwx3XEoMqKr3D7WeRw75mf78CkfrcZHBRmr/cnYZppkuXsZHntPdgtTFOT7XMHxiTct+1J9FjB1lA1p76hKGgVTBHyloJwGlY22Au/I8DKh8S4TKgoMuTIJAY8nXHDCoSAyVDKkuryb7iZ174sImNTqhTYuZY6DHKO0fgJBEKMBlkAKxaq6jTnjTBs2BAMLY4dDoO3QmdJlNfLY4OAYFiUoxWsPVXHojwASOQAMv1aNOD8gmt3bXmsD9SQ7pgWoSYMp6JeR83KPdfIPycLY7m+N1l/RkDMThz7SYeoMxX23YybefTYvgIWQ/z33U3+mDV6QzDhf7DTMWiYolTdCjmsNu7GuHpnnlmtVjTLouF2IHVibq6PYlVj0FNeja0oZxcS2JsFEuDkfTVGDCqLuUlLNx/uowq+pmbVZh/V6SjpIcXbNFwVjGCp2p2lOVu65swzw9FO3UHayj254hsaaR0qHGR5I53vlkNTGz6FjImODcO0HARy73IqQ==';const _IH='398e7505128dcf95e7858a1080c21c0d0ff39c8309c833852f1d027bb32d17d3';let _src;

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
