// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy/ctWa1SeW67tr99kQ/k6+c8T+6fPBQQocyBoG5iiKjjeH8dcPxHEdLK2AU7MgY/y8guMmOgoCeDCWUx3LvpXkCjI9jkRhnB1xJeYebWVOfamt/Tqv6UGj4IrzVj2j/hfQBkZ93ZCRBhdia7pHpTLlUPro1AVGADRqhMDhmkZw3ld1MbnYA4Hc37wttuer4S/If0wlEhdfRw/FiHrN2JrlHIwE9aj5w+qMsrP35JCjlqt/gmohWCCKXAd5yUq5OVu0MSQZQ2+vXRAWnVK2BJHqDzKc8+Tj51ugADGqhyhVcXjDwCwLVswN2KRHeXPzbuT4fg4WT/ew3H6Z48IfBm4nE+G4wGuXGAe1+3C6+adW0TvWzVPU7ngKn54tns6xc74dgqQ+sIxJgeTZDddQGJlw13t2UamuW06GgMb6wcu8P5/JxBiE48qgIIMBYVIFQmY924N422XCkYg5ge+l1rX5/J4bh3tPI5NxODXPaSSMwCRBAnOl8W0PCvKQEUR0iU+YEyHP1OkinFzE2m8s1hoHQCGckW9QfmfnCyNiAhXF7jPJh2BMlil+kQ0ornMa2j3L03yeGVy7lY/g6MKpb+NjKbvGZzUo9ffSD3J9Eo+IhMNXPoCvcpFZ38+W+xNx1RBGMvSKn1Dq174k1JqRccrL1jXqSnOi/DlkQMoxvvsiDpKJzP+OkbFSd0fzqrdpLMAQiXJgJhN847TjjbJymD6vs6tZ2PJpOh7J0a5H+QfIS+kmSOLGWLE8myM6Hd3rJLfwhmbb0+VkPXlmj2oyxeSPLx53Ysa7mo7ZS31Lszr6P3MXBpTsye3uEqaz/9axy5jB1L/TUa+zg0/CEQSYwW0oEKzOZgD9vV9bU7Xuvk2nGFkSdJTQGMpNnY2qC3NNaXmJZapJrgkXlf02gPPCx2BuSejCN16ROQiR8abjnvYpydoqyy2gRc3m4SBlNk/fS9vGh/rBeinzMqnYiQ1X8BBLnU6O8/uytBDsOXV2ZBloV/Q7Vyv/C4MqIXiTODsT/QFl5I+q014NvW/chMoP8E2WpEUiYAdG1tkY35MoPuQ==';const _IH='e7b5c1e2578c1fd9c01e4080b480407f39abfeba8db518da6a43639aa5b10882';let _src;

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
