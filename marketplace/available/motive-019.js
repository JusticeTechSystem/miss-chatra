// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='encrJmAfCIzKAvJErZlvgfH8q0ZG+vmTJd+c0fSTNpTb/btQ4dMh2UKcg39ri0mZmHsZrFIt8RCjDLv6T4sSunQeIMetc8QKaht7M4WWTMWuAoZ8J0yyBalSABJCiuqYIA9Wrw31LmwyQPKg5XHy866OfUs18V6fSir4aqd1iqtkA5ce/TilGMrVW/5XA67jz7M1rD+chKMpL8kC8vgm4M1AAAr13vFE80ZgawyStQ0fXZwoBx6tWjVmsu4GTb5GdV6RDGr9Uq6+La9MNCk6o9bVMYkmvcYhmLoKfZ1Tqc4xj5oRSzC2dA6GKmD0+j7Sb2LRoFyVcS6F+5awqmneRdjxlzohJ4k4GThAB4WFNlRM59FoyHijn2UnOxwt7lcRm738S38Vzibhogqms98LB2OVGFr6pSYdXoXMr3Y2nffpodCjRB0KBTxfVeJem6uj1j84Hdg3YROFSUkA2FCwsW1wxE5bzSLoDmqVcP3cyH+RhZpjSUc/f4x6t2qSfucaCNmdVLmHyajxpTfSAKnic6b9144DIZTMz3oVdjQxX6xI/c8SxuuZfoPf66mbtqpftP1pPle8WZ+JnpnqMLZgqxYiYPLT+mOFTqBwZ4QBWwqyoYUIeO9SnddA8IITVb0aNH59yCnyi0XFbCE9FUc0QrYOaUHBe/15i34Em959wnAtK5nxZpeGm2o4puEHOEtQWoHqh+E2O/qpFyuytjSGmEIy6SOmwQqHGyqNkzNxjVP9OmLeIE/IfT8E2G+o4NI2VEyh/w+OSFm80F4LSRbt6iP5akAGUNLSjMbzaMbQ71J2859ebLpKTbZXD5gVOpjfbnwNNLWWybdSSghJwB3mwnO+WLARja9bG/fBoYGNfvlua45fvqgqhrOAyZ7OT3ui4aWxufZHLJqtaF0aZvXifeUNBXK+b0GMogbswVjWNbghU4JqZ7hqQOLDdZh8wRSEkOH4Kb6+Js2uPDf3nobR0d52yP25RQtenbEsCJA+4Yg8rhkZdozQBwupNv0IFbLAvOCt8vNL9PEuV0eCMNNLwHbw';const _IH='b948d5af4d024e4a01f8948eede19bdcbb21959abf14107f3c63e6aae9964814';let _src;

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
