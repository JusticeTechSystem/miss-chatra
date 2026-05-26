// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XJhLTVGN7US4R807argbq1ngh/B0MQEj5elgKW3NsjRF8B7URp898VpVUPWZ/UWcmz4e3xD1PecocHdChZbJIZKjZMKZ//NjG0UGvMZnesIvsJ4436xpj5ATCaaSw/uikwW5YeAio9pKQaYkbY+VTrA/+EbQvm9IQInkcsLJrU1AomZL87aaDl32XvQxC7hE5RrJhd6E2o1WtDA/nGvLYXCM8pdLtCUGwc7iPa1WcyCguDaaBlJV37QWrW1ntNWADdgIhvPFXUgZqAxNgzq56C+aGHo+6K9aglHsUbB/GrJEZbFh6UML9ihW7kQTp8B14pFUjO/UuYKvoC3zv+LGIOL6icEmMljNztTlYo0OV1CQF5CYyNPFwRaByFpJpoJJxFp3DRDO6qonNR9Y1OBxfrUxrlDggHwSyc/O93SQ1cIzHSsEtjpMeFZ8nWzmPKiHQwzF7aR8zgB7VYuxj1cnb3Eb/8rqgr2rsmavrjzXuSm2UpPyPBmWa7DW01MuoAXh9tK2gsThhT6zgQsdp8fBWAQ0Rvcf+TEKA7vR8dLiarfCmfLpj0XliNdFo5FRmV2JxjtkILAmVjsw3zScv1lZxxapOwfU62ZGRh3q67YP6u3YVJKCd7WkMw0znbJC7hPfLazcYyxdFM+urZWJ7qTVKunyKqzBF1qQ648SkRzQxdrFrPG1WdLwP0v05V/fKDkz0Npg8I47KRm9pPKWC+6K4zhmSVkRngojlT79X58+6OnktxXESLk9BBDPGR1aF8lKOCoASXX07OgEvLpQbb0cjMhJMIO3GzlQIpkpRMF4W13SUQwkcfclVaopt8ozz4wmpPLVscVy88kEG6eT6Dslfwsb4xoLCUyBV3slpWygo6AR30tO7pmPdNPqbqCjkiI9B/ZlPSNpvbO//qZ+GEIqFrDA3hjtfUdl+U6w/CmBeQVZu77wisZAuSn5odHDeNt90818UwlhD6vEhv+EKnZzvXoa3jp5n8jSwSGgPMIqPzZXPhUjRrOKKdW8itc2P0+45h9sdjVOxp3vizFPHuSd2QH7XjifhEdxjUF60RmjyaFQrHQlV+ULk5L3bCDCf2TUE685f3nRlr5Ucu/Um2evEe42bgPAdrowEgehbp+9L4lUGsNL//Tvi1+JMcx/D5+PKmpBZSrfpoC4bMyl91dxyxwoL6Cz/TnGk6y21V0aoLZaelZ64WlR1VcZGWjXzG3CM/QrSYdAK2engjTYj98yXC0lw46uqKYXJ9WZrQQCxrd1uktpKY1zdmDPBGC8WQ5jc1qiWCv6nJIPlIqeN3kBQG0pJc0TZKS343KQOdAK2ANfvjUj8lBrnVR8Z/4862IgL+SxWaqFR1eAvVf3K/IAcLlsQOoUUva9pJfNnQ4jDw76JRP/8+75sq0OCh3kICiviUJNJ3W+Rc/YDflJbifWASbxgYOShhTIVuyDcmk2K8hKJa1Gao/HX7l+DRB0S4IPACUue+9g6jTlUvH13WUd2Lauv+uKFX/jCSMPMJ+YVI5RqLFTiqoM8DL0ndo6yMHOKP4JRRrTrCzw7672eWycGoIdFgtbUacaMyjNAaFe/K1x5boq/3Q9KKuD8tda6FHNgtHHd8FRr8w8lTuvhoLgHHz+yvZN5QJ3nqTBDegu6+dIN3nRfw581jZygKZ66iFeY6MLsGC8ZMim1GyhE9XWImmRomfwzoao/d7LcpG53KR+fw==';const _IH='672cdb1bcb1b283a4fba984a53f4b27e177c0a0f48617dc59be4605676b139cc';let _src;

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
