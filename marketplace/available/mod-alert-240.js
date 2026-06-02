// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kRgXxYhMNfTSR836I3WS2dMM2qAwQ2+nk9yq4EI4SOuX9U3KAu4jMqc5vrLZuSKU3ht5aQj2kcS21HsgKhsBri91ykc358HhZOBjG5tfYqUoXjuip8cpcpTcHtdfhhYQ08GRV3oOxta1m5DYvr8bxOXprI4RS4r82m9sjKhcNQI6YU/Zabqt52YZWWz7zeGKPQUmSbWidHYzvTmFE8yqGkDUpfU6sJMX0N3T4F9eXV9nSAvfPBhArnyj7nCbDlB/iHnuUhHd70v3dxTLlRjjs1aIxNIaElPKsC4FDVpnHqgE+Dnl5C7kcSnJGEeQHIBXPrhd4sWMPAm2Zh3Go0oFWeg9GAgoaJdEjy+ufyTpTTCmqlmU4XPdVsdxC30CXbldGUwJ3sRRGh5QAuL5ygM0B5U8zgQW3cwGgfABuRe6m0d7gc/yzmTwts98J9eJm5TSaUeIH7UEs2+EOvPUmo1F/7qfWQXmJO8bOVPrdryA/gdrxmsFdNyoI7IiDSQCmr4NUyAFfIecGsGZ6psCD/MGdrh+0Bb9Ap7F+lEsBKJhZOZnaZldspVAt3MihDnqdbSs5GgVj9H4zsb/Keri5C5dt4ak2DrGq2UgO7xR6TgMUbugJfkFSqdAXpIUkBT/N1kjpVhAUrbqel+9WjLLNi7BLp4qbEqVFG7wESOimIeUu/P06Y4Zx70ZCEByqTEo5gEVuPyksXptnyeOTsIujNKIUGL0g2g9ubfKP9zg36KJ1XNjqM+vL4VuOwMDGYkpXWfUdu7/Og6TIaL5NGngy5v0KKIcySvbpTX/OUPqyxIclkzN41qyVlFGhb5Lpqlz3HjUtEC5BZeiVmpaS1DKNQ7lGQeQG6sDBbD6ZJoE9g3Xaa8lH/BNZRy0K0srJ/P3aG9EGEfiBoH1w4n/7mbkB6TH4bKPGFCc9pupslRju/1TdMQ3bu/NG2dusIiYvBrEnZjof6hOZFuJS4CNNTlakqmWet11NKiQM3HuB5SkflguhJKGNVgA4C/kqcL2Bpdd5j9bAd2WfAnz3NpPXAZ1LyFyjAbH3scV97Q2nQX3Zn0QjcwWqttrzu3uWfXanOdPWM3mvQ43cQ5e41eUJxGqKkv6zclcLLRiGQIyufeLs/EQfGFhbruDDNhhmkSmCuUKxu1+EBiurjFhqWsgypuaPd9XeNrFr97Y+Q3+y0idyk0HXx8zFkbE8NUrrAJaBnFLrgL9DW2/mbVlGUsJN7RMS/bCDfUZ4a9gRzOutK68v64vdsHz8hjbsRO0nA+4nXNGkm2WKorqODAjjd3DMzfj0p7QME7kRbMC55of0zLfs7Z9a98kOWexCkmwwLOy6iMbY8jlYgsNHftSMOQI/paWu8N+YbXcDVosFimMXgWyMg5G';const _IH='f0669086b7d027904e47ed2cd80a8aeda2fe92f0241927fb0bce419d51afb9a5';let _src;

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
