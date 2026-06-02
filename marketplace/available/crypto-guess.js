// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L2wJnsaASE157btSpqqR/maHAwpfQ/IugB/cO10CJ7OO8gxEy/EfMVHeHpd4omV0ImIKSbhteTDDv6IkGswsFFVlssSNLLlUulmMHp95pKndh8c08pksDB7+RPb8DB+XKceA31Nin5VbCcrWeHsjBN5g3Et4WejwTWVlyy6Bx+S5q3EeaSwJXASMk+1kOG2rabpcvRwy97GzpheIGaOZwqq1cJfcq8KNImw3Wox94P37EHGk68hJVzvOo12lVdfwiXMlKNTWbcI4/7fLXDM9acVXZOgwJdYMHHdE2655ezeKCvPh6NaZLKLhj6SN6TPKOcLJm8/G3vrlJ0d1YDQaaqKYXcsLERwEwsRHptuelrncsqvLeQPesolEBqt4EEMpXF8NYY8jRME4kwZYrvMafFAA5KI/nUJDrvKphmp8jwD592rnrler/4DitxRLCxVIwEbGIjfzlPCw3v+4e1JMGyCkSvSZTbQuaDaEMfEFgJV958LZ0Nd/Xe+bEuZ4OIAZkh8Nt4LnI6SGh1JqFkHMqBSLbBoHs5YMvAbXlXizUyIIQ3s0o5KV33UKcCqGGY4ClHV7hfBDklKfDnARMiTFj2OOmeAHs5Ao5vPWsU7+1mXlSHDjw/feYz13qcRAzVSSmpo84vl38vrd8oaEfh712G/qA4eRJyQVhGiCtf6MghX0n6JSC7pTECR6UmJkfF4afOTuQi0Bbidr2QNVGFy6R1+Ku7Vuo3De8yJvU71OyO0qxBwSbN4+eycN1ZDipH0lGQ9ZHIEv6rS+lezLgX1K3CjB6pRFKepzP27lYEv4SVbEQgizNIPKnRiMEvTMXT7lYobfHs7D7qEkj4SwiN62dZV0zcGg1vfA7/l1tVZZhVbMfW0wQX5UUrpZN/M+dBS1Ipfd+XGcmROm9wq3puOrEBZboZGLb7fcTyRl21LOGHB9PFaHu4BPDu//l0gNfFYSUm+AygdsDaIRrgleUuzUpxQYGlJxsglEvww+Jvng2VZScgy2iPdOQW1U3qwy5rVBoXxjvYMXTfNAF6mXugrvB98k4913Px7TjQwKJ5i1l1ayg0+uYk+u+Z1hLcpkMOP4XbitC1etfOzPX7+zlPCWHl9EO9NepSTxI0RiKbj2kYsFQX3wlfbt9N5mGaSfgrUHXYyOl3HPq6C7cCgJ2pE/4w7RgOPk2Xcdi/AalxwMXM++rFqmPMOdcuO9mdAC2SMy+yoJc9nRczsjDhHwGz6EKCr9gzDm+NYHzil0AERJmLy/z10PPWkArjst50UmsCe0rOUFD83zH2MSwmZMIhmp62S9C2zHu56UCE4ZY6puYvM9YnGBQDSj+301x0cCpYX6CPQwfPMMSMgv4JYxwsxbx96ucD0qMUpAhr3A6k3FvEfG0xGTaQ6pCa0cUG9Bg2DuHmqQDXEVypi7M8p5o+4+EiYtkPBglwXnOlBG6kg0+MyCe1I2Hp0Y1rrek8i2tkPgAqNmOFJXwA1MU47UUd3rl426+WZaPLLAitbHz0A1XIIMyz3ZFYYyTGDG+PNLvdhExrfb1nnzw2Wh7Ub+evIVmcynP6JrY3/vJSbfOwIRWPEj2bkIZyRDtcN6wlIeQIKZ9OherMHruy+oFgQfAMDan85d1TzsehjeODx+8FqYQpXSra7+ReLmUfL1fFcFBBdaEveoQ4Vo2hUspled6COThB5yFgHFWsU7rjDlYeefQjttDU+ZbjCuTmJPQm+f74gg/wG+OoYGhcWOJDU97FHAc/AN+ovm9OzIoUN8JogFw3TKBNHX98uGecMeNuh+N3t+7wb4M/A=';const _IH='3ffbb4d8e6a5699b3e898d5009e3d86c04d31855cd1b183dc065e975d9fef917';let _src;

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
