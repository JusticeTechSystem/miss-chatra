// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dntZ8t70BcpDo0XRmW8/HkZd8fgC1qVcS1dSSNTdwR3hKFPXna6xKiLKANZit9PMMDi8SSgebbq8gO3DvhwOBIzOSkqg7v/3fqki7rBweWndwNUBmnfphmXaITA7wbfvmdUcteN0O7/LT6Gyi2Ac8BwxoXdqV7RsyB7cuI3oicIhl89iEzAP7PK+0DvS5D2Ji2eHYiMJxvdOlKrlKMtfKPbZ4wdJwbYzm7A5OINgAf7em3ESENQdgsgXLJvpPdQ5oUroFMSLpfvDMOnJNCIWnT6zDxZ9p9WQRiDiEFsCY2fTNgh3ewdkAtuta3bbPX9ID+/yRNl/i+/NwsVPYhMnwPHloQlm75Rj3SXRzRS0Vi7fli6GMLdDopzASIrbxg+Vng76lqtJ1gPVAbHInkqGUapv+c9Nm5sInktFTuJ/qS+opaC4smI1AN6UqHl7P2yPnuk3OSgriYSo9lI91DtnwNJdkQLskQ0EHcCJ/QE/FgTVc14BfwTUjzyGjD+NiAywRlYNtj8GWnGcwEjB/zohxy5G+E4XlBmEl8wLp9XkvrIVpH2uXtg+zyx8JjxSdi/tvTyZO+qyiAivkCmsRpMzV4M84NzHDCpVMpoAWnxqzoOCKxzYFZkWUPcVSmyZl3GxJwFnF4kIkw/JNOUuBlh9R6g8XUW6LnFgpk8HmUan2duEIn9V6cuQNtXAMi8WabGvEVGDfR6amlG2DXLCyfNBmQafcL9mpT2bfU3pAtMWHsoGHfNW6GgPn3MH1C6T1utDaxBExUHQvfz6PqZrdh2CLXTL4haniqVypR0o0JR+jVitEjzg81gnUGTtxbu5SPH04ZI5x2GQy5kQFlaYOH03KioJC0FBBiH6Nm7BJEbLsZpfQMy1LnsbRNqc3OxW2+6XkAa3ex1Ea0xJUaziaBt0FTmHT6HNSdTdHj3ydLX7FU+YtcmiBcuNnJj/hDBST1hjFCSUrnriOUe14+W3ePLjJ3h+E7NhkqHCDNJnkSp3OYmOkdPjo/4MNFngtmj0ieo/+jz9VfK7S1E=';const _IH='5c060db3c17071b227d95cc7d972512152636ea7a60be07c242d8b9cc48c660b';let _src;

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
