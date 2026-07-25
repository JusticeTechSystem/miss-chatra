// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxMghjGl0ekw31Yq563fkZZBO+WzJ6zP7bqWFRp8iQPrlZN7wHFDcuHWxVkBFSjPbs+9QsK1+BNqJCj3yE2mdh1MVg74vbbR0F7AVTpzG/d9X32KH1nZC95cokJ6DsM7xbXUT+4Rv5R3+5yXEgzKLglt+s97myfSI4h52wGzJqAWB94hGMs4u8lVWEm6C8WskgIIKyywUyyW3NKllreOZez8oK1rfTLlUO3sbScDz00PH4KjzN9Xs2Rkvyp0OJPg12H6nAyxp0fPdDJw8QIGoLJiUZKJom4s2nQ1k2yL1YrqsJZpvnkd2FyaznShtcE12nFmJuir2N4WvZbW/ksChiAMRRaZMxrQP7ivQKNjrcGWa/aGPUWXbpxjGpUwqQ5DIT3O4YiUTeKqVSTIqxet0M4GmRthcq8mzlUlIiJrqilVb2dTQNI047lV3We3RHNb1/yguFeTomV9eH2CWHi5+Y8eGtxBe6vLlwVIGbIX0yv4XFaHz1H6nLXMP+hAaeBkGAZ4J3LG2EdhlULXSTLf8LwGT1STkoIGcFg9jDqi8Sd+gg2jjdu6gTJ489Zw8nQNyFH8hH3SweGaKidPYIB4Aldva7RPL4oOKeDq+Z/tFBI5UG+NSaCNNf5evpbzGmPOJ0kiAn0FXxTI56EGDTZ9f2HRW6Kex0AiEF6Kk97VplkHa7wrMcjhFFhoTNXBMpJvJdcB1zZdoyDPMiV8wxPKfQFqACnDZnsc3sExp9jb+oIQ5TtGAESfMRIXlut4wSUMMZW/GIdYbTDdCWUzHiMBSGVkYGgYcOrGmTHfRI5c5S67KiJPin7GqMvkeVxm7njR+KQqFacTeYdFFeswM3cHrA/JO63nlwmGvfSOqYxZRYESn9xdeNN6i5Njppca9WsREeQT+2Q8IR3S13bU0JfGYEpd+LUDeYpv7ICaX6FLyyEnMy4WxGe5aNnxHVhl8h8jU3yxpv4QIuBCSxNfXHN5vYPtJ9scYuJkIbsn/w+gsMR9KdOaSfXlcEoj74a9Ho1UrTBq4WiOYxRkvDZLl5ZgQPgNGCoSNSbLT+pTxQSR1IDjGXBZalNxkp8qiuAl3V50zF24MuV/Nr1THY9qPEjgaT70uqRAuan7w8l1XmlAEl/3J0YRprH6+T+vKhHBzutLFTjSCxVgFTIf00ykKtZBnOx+JCNKI3pDAG1Q6jCy/Q/D8on9XX3jE36SKl286WFITbM6G0/E6Xkzv1U6qBZ91mjf/u5a6YV/IwbWMW6KlyLsfLfJU+hYlqk7ahEzY6/Y4Yi5m6lQ5ySYincvQwKc8No1wr+CK1MwCsz8BkIpi/e9vOBpxU9nJX39qBzhUDKDwislfNDA==';const _IH='c9019ca556bb08b196fc4c36cc928a3c63a8aa02425e42c7bb801d5a2a89a85b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
