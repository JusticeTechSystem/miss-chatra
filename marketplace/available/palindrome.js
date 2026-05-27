// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e0PDv0nbwlEMQYPkbVSCTUhznZf1r4g1jcEGanhK8kITbuwv9lW6bEX/QPeefJtrC55SvfIAPM7y0qat1fG8fadMtnna3T1Vb2sCAUJlNNNhS6a1KaitiVFD4AH5Opt8WAbxGiL+ife7ArjqJe+yXlQ9MWWPpJBuufhMxa1Zib6zTeZBFsdoIELdAkI5Bn3H0bY4Fd2z3nYkR1+MITzIb/GtFuqi3ks6K5tzXxUgM6fBmMz6stZKqieebclTr+f7NfdNpe9uJ3qeRoHPlcysXzuOfe3wuln79FPfmBVrsKwTjEc9PkufTKtJ8/QPCAGjeWQk/xBm9p0iwV9brtiq4jV7XrGcJHELNm7CqYD9zlHKmJ09DemSY8V4LHTrhVgH3c6wM2N1Vw7t+JJzGxLvRBHpU4WmaVSkpOJySTXDI+c8uKBX1S/b4cal/a0dPBNGMQ+0mbq7qbtg0ux7MrNtP7X1paWNJZoBR4s62J/i1PSSBQPQ2j+kX6XodvnzJqT6L+of+K62vpApHiYLgq+RDOQKaV6rmqqPPfcop3Hcqih2LufWmHOqSUTCN2p7ydkT/TYdXB3WaNldCmIkVIUMAdnhJEK9HVGF+WbEAe6WXi28cDhWjp3MqRYYOZSNxKboBErZDhoXOAbotHhyQYZrmw2xDZBeePpVLBhfB6XHco5fTFDLOA2AyCazUWOWBXtOQkjPEOjltW+Aq3PsjzsvRy+VzHXw6rfLrf4MyFGKGefBqjlFk1eRekuFNA+XDE1ZN80b/elXiVM8+gu9bIMObEDBHuzhwgBilw1IMWNfIl82qrpQbxLUiw/Ojm20QV2zJNB3Q3dfKA+9NJPFlTmAlcRvxCTQY8DSXdkZ/x05SF5LdNct263ylAxNokCzeSPvyN2KaVgfQC8M4x8ofOe3drDYjr6BQu0r36tnRctgv65yfoyxDVmyb/PLBZm7Bj6LLQ==';const _IH='5fe5b099241e0225e20131f6d4ee4f29b35160d39bd3058d94a3eef9c8c484f8';let _src;

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
