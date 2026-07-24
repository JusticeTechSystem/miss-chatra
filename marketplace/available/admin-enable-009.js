// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRf3bmxPw3Jb4ywnFdMDsF9WhwsIjjumD2ENKf8xXLi2cKXO8rxJy0I/TS93NCre90ZIc8SXBa4kSR1OLw5MJLg4lKBRc+07a7hzvIdVnqHIsKeyXNfDjHuR3kPUbs353ct+0QMyPgMbAAWWQE2ADMHG8vtAzuYT8H7j6UrCR+MgRKyCsoRBnD5iiqIIkKBaWvGd8RFGi08iI4K/zv2dp/kCpc8fpW7wloq9f7OosIFzDyNWUT3KyqaJanEMPu8gREuBkV3uJhqV//bYwJWK+JoqxjDYHQGWMDaCqfW1AzfTwiMN+GyRU4WimkaD9IwlRsUPM/r1bN9ackiDsSGVUxEBj/84oToOVkAtData6xdYLJWJSc/E2PPb9oQDWXvfFiyBJodh6cutti3XGb+cpJmgtXlc0PMayKpCb2YD8hEITHCpcr0FztNc0JeQgATbLEu5cRpMBTbecD1NopHSbSIEGgQE37qjCHX0KbDz4+ZN4v8r/UO64+J31ENiwPYr5RIc5F7x02R/TK62PDkodroS8vAc37jcLao72iq9zmR07ew4LvJlErRDL7H9s/3wLCkii8c08rekWImF6pWIhI91GXtzGhjSeZ2t/1+YoCMVsVaki78CoFBXXyB7Gj4tCTXCYX/olsDcbvoeXPDRzpBS+ihB4tqxtgwZdMhYLQc9pYJCdrdsKC9ITtNwmqcPTjW3Hc5wvdWc3qhB+ZeuNoUglc+/fsaHsPUduSvsDKgYYrhaDNDMXyGuJ+oTzf9SNnjooVHMRt+8zSOEJmrx1UmajwaicN5FYB2rzU+T0kdBGLw/cC4CvndhBZitHi72rq5d83UGNFP8kDp85cJ0v1+YqjOHGIA6VZ4Q8MBCnRM7aAaCcFJUGb0V9Y2WSyf67PR4cSEfUE+NX1g1WGhkUMrCg4XaeH/ANJJNaWf8I0SoB2iFHbsTuOpoUOIkQ7UhxN8+9bZCNAOJffJ8kP76Lfnm6QQ6QFaQZbUFhKixOXBexp5SdVsirwUZw==';const _IH='c84c56068c19bb3c0c0c61e9f0cf342c5a7e4329a63911f8ffb4ffa4f9061c38';let _src;

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
