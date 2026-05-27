// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sYt5cJUzsln/I//kxhcHCH1ZYZfREV90K2RkoGyP8L2mttFVJAGOf5/1k4IEp+FNB6Vi1a31R1NBiK2AOSfSRtKLKgJv5vaSIXoNsRe2An8K8f2WjfkdzBj366nMa8YCNM6Kh38m1hiyh2yVR20G/jtghjI9ZR7J833VRsAsx/XCgOojFnFGNCciYVBbGzHFJaVBWJmhYh0LiqbMGPI2bgLrQkbAIIDmoCpTNzmrkISY2udyeLbVqzjghyMe6mLPOY+cErWBu49+GKBbGUPLoz3SHa3f93ZaBBbOX++7h4gnnrobDdFgWS0t79lLnTxAb9D2kTi73Fw0k0la2uqZFhabWJEQ6nXgDSImGPInphX7fwpsxF5r5ELdG6hphKbqGA10MZTvQhjk5e0LzGi+J9HpGcqfmZ+DNs8UEiHfXwScm/875ww5Xs+KdwtIjql1ezgZdoSqX0Oy9ky+HTe0s7Sd8eIBn21irsaGpffXLiU1RdsG1Q0//uF3b9M0q8sfr+ui/xdDdo9Bt8GbrgO3FM0Kh1fGlJgplu5GDEGk9uAcJKC1/Tz10btjGPUly2QSV9H+jgpY2JwYMPKSUw5EcGFgD0Z/bcWIk15BT02cJgIq6ddfZTTbpRhribiV8bQlJQ6g+owVRpn6fsR20sThhOqXzHePTQhPgRuFZOiXoI9mKzVe33FdalSYiM33/Z7Rspp97Ku/IyYJG6vto87p3YXs7HuhUOoNc5NUfvtzlC4pS/nHBqIElamA';const _IH='1ca67188baad61db2db3f93ffb3878b8f4b35ddef11fd8f25c1c2780bfe580ed';let _src;

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
