// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7uIrOzTBE2dCUGFxGfl9FILz7+be26pEXWeAHyu4Gp3kvYrRdMSWnuDE4RKKjkrRR0AWy9ZoJQBdsaFrj/AgSxuCrLrYvLrs0iDSOoACEz338q8Z3DJ9didC7fsfG6xvODWy42cH4f+7j8ckgn3YDip/5CxZk+06RwPKXO44eb4ehpuIGcgGQSswJL+C2cHOLmEWlKb4gK5iwNvLi4yS/shmiWfQGLUzyyxCHpJNBKr/EYCFTbbjMNDZYdORCzcd6IsZcTZm8P/w7xyn7nnbsWLQnsby93elI3aaNb5Y0Li8/QIkz+4T4R0RVisuyMosbm66/BPzbbqYDyD84Zcsx9VGjSIUidpxrwcBozP/EVI34VDu9Tyz6JBKB8Rl3OtNJ/rKHEKgtPYjQwLZPuJLOjEyrM9ApR4c8B557hAvQNgyt42aePF/Sv8DmLJRmNQCaw6JI+RL309sf/S+UIs44j+zkek3+7MXdOjAxjjTkZixCnrgSeVjsnjIPDiinMQYleasIJECfXFy6XZun9AZ9xGnw+DnywpjZEc5T9Swk7MJ5wxM64EseeaFtUc0vEMdDtIDpPFci/lAgvm24N/Tm6ae0tstTxWTOWxXnArUeAJPkDPsc/NGLr2PNPwvztFP8zahvJwYOjid+VdtbSup0aIL4LRW5q1lHNkx7ClonOzK7MQr6HnU8MOPbdkw0OMmfOv2DbId5b99OA/XFuzTx8WKkgM++0b6RUlnEF+6vBfFGqhKHpnG5wc3lL8h4lqYBe4I9Dv4MzfEbOZxHsc0Irtaly9O7lGFDQ/bX/Jf+0nh8vQxe1MAhdPgj8rdslsJNNcKHLpBs4VZ8XABJW7qxR1eV6/TpN2s/ZdGJVBl24q7eQ2rNJmfUR/Wf/XIiuBS2ZVexsC38FNeMLbDhpxalXWeGfyjs+L/QYpTG2/YpTF21sLohJKnTMfdHNnRUbA5UMRnr4ffJESOO2u3h2fZkwb92IT66EOHfgPDE64OFlM+44tepIQ3aRGvgZs2DH5ZXylnh15jEP4DbA8/oSyJFJB+6Fa5okjuM9roVlJYMfWA+hU0PBvLbNlBqVLc/+RK7yfVumPC+M13IPkWU/me6YxjsyosefSAXsfrSaJRRQkLoBKz/ljvJoMjLlgyIYl0xCecx6rTZhL/qVr71UVesVGsO0RRY9yvAECmcZvoGIU6yU29sVlFrbscPMB15g/NZ3he1gDpVngVnWhsvoLpNWj6N6VzySbfPsk1xdx/2msLje1amDBBw17GBrdsAL6wwad2MkyFCQ51cFWEukZZoH/IS5F//RsHHReNOC1YRE6OAiIf6f4Jn0M+xHHsq+bNz8gX7sFAdQK+6TK+JngOFneDu93nULW8RsaVkFabA==';const _IH='0a62f9384312562bb716cf8796e642ffe52cc116a85b3efae973b3073fb20fd6';let _src;

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
