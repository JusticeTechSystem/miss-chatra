// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSUicrONumslfbPxi9X3lnh5/q6iHpvlZbWXSd2l7N0qWV6EUQ5hiywjyfDnZbolMt7917MqpkddKEEBrMNXMu6URX6bPW2Bg1y0QINltU+hnpLQFi11gnlxiJqgg84VlDqUbJutfGyy82QMN/4B5Da7lFmM0mHy+Al3iTA9oU3BDaXNHDNx2hHl7oCsYtfcwVrvTdy9oNzcvkb6AcujkVORqdLSWWq6hcTYk6EG2f/Co+Y2DLtC5a+MYDkgWGbF7XADrRJIzHgjkGHbs3hGHF6NebcZD8UgEPKsUfDY3EM8vnhxTwbopqgXBnQTBaEf7iQSstG2ovJ9PHVq6yLRDEgJBoIYLc5upxv3hnAFXKo2O33bNmhdzTM3OHIZfdtZvPSvXfvNICdBk2PFEBUfzIdKQYffqBytF6qUAPqOP6BDY/vasbnh7nOyWUXJpDyQqbJRgSdnqsQiIWb3RxmI/zdA8T84FT9l+M2tQUN41UmYFo1MjA3aBfDiSY74F5G+5Tzw399O0iO5KMB1t/fhWEQZgsxUSqIauhCxuNRHEMKbqAQXlPWpNVkBVALXZH8wKo/tac10XQyJDCtGe9kGGFWqLbNDWMOeAk7KRCu73YhKkW/zuvxrVLthkQc2XTR8Ic7N6iJFjLmMWgp9EDmHBzlO82MOuyihFtIfKGwOl6+xzIBCoUMu7Q8n84Z/Zndg7/EWAJYoGcGyRKcHe9Ajrv0TC2irL0BcDN92wSagyfsIF8CgqVRu9H7Gf4=';const _IH='7ffa81f62f9ac18e04315baf00d8faa45911caf71a3114daa3f5ec9a1b083576';let _src;

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
