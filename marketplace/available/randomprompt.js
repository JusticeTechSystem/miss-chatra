// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P/64gW69Ix9ECrqgy4S8feFFKe5E4LZfZODrhnn872bFuEXdsKpTB9+O5IRTnzZNsDxz8D71VoE/SF/eejney/SsgZs3CIHggIsBIMBAoWFaugExgD5e4j3gi0Udz6iQmMmsIjtpT6jPVc2xXJ1llsx86+RLwFj1B0810wBy6XtTac8V66hantRk1dqGVwQGrcxENeJXhlo0m2vL5mDHwEvFPgpHqgYNrf5b08IknnvzQsGM25Zow7XiV4ImKzrAURVm/n/D74CzNG9xF6WtjiBOs92JhTwW/hqfmfgIQ1y5cI7PCbuYDAeeULxhZXJni31U7wfu2L5a63nmYdwIZjTRp4dTw1fHXjy2zdRrVE9vd3mqWBbU1W/YWi9DR+ku703qMZeZK1bKvts3G1SGom3b9jyV0tVpxw9lkhqbWZX9Im3sn93q8vtXtpuFMI8VEu7aVU3W8nJNVRzgzpWKZEz0oBlEvBrDqe75Rt/OHl9zKnF5iZCyh6UjNiFdT2ciQ3gu7UqH1Q2NXB5HzeKRz/BeGLHxnh23k4k7A1DeOn4EmMsSEqyaillTMEkMJtnjkXdjzlcCBeHKm8oowVIFSU7G6duuna9X3RlW+978k4J6tU8pVGDAPjENU1nuHpaYOVB7oot+x5JOLXUKFoxFnVv82LnWj9E2nvFN0WkjieXadS78dbnDZVG1Oc8i7ReiFCHMsVLUbFXRmoj/gJNWnPFtBoh0OnrF4rx/nRYr1s9eZO9E3zRAmIuEotmbD0fXh2eo6SCsQPnyHEoqB3yeBTIszbr9LSmCWF37Wed+Wz+NzyuIBSjluc6+shPgyXgrH2cvySYh8GT3wxNjfGsam5N7pu6qCgAilZKTlNtPRz87YsxY/gJTqXtZCBSxmpFl72UQbqRYu6repniYM3bTBaaWWTwkuAHbKInYltcMqvnJZB4TLOxjr9PrZB3FcDXnUCjdSYdxTtWO58SXg5O3GIn80hrV8bPGtVNT0HbIbErehTouiGsCuISnLfD+6B5JIyohdre2P5hrfXnjWhJOxU3ORERJ00tEEzDmweaK7niBvYNnt3UHfKkY82Xnl7ZXHPxIB5Mt2d43wjcb8u3T8wlPPI0OlLfHBPCtZWY5YYJTBT7pL2Jx0PMRoJcpLY7chS+avViflGOsjbTyybQokVGv4UAFQekZ9eohiUPk0DJZohFnyr5+QkERMlADkcTAydgOl/0f+rz0DQ==';const _IH='ccd484aa1503a167eae1fde72ec9f9ab10684ea7cc36e3a08d5a043378de386f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
