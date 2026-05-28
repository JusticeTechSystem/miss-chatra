// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bY1q6SVADLXkFsQyWKm09vhYQzzN8x8XIb5DTfyDIToSI4k1m7EBTr+r/TAeMZsZz3WvPjUXdIXHE8tojznJzT9DVDIbVAT9J/N+UZGfnoW9uJCtOvBg78pTEIYooFSsktYt6DMev7B6MJ0LcaTc97N3lnXzDPvrRplTLF99DFR9CO+Zt8YIjJkZVrySxJBS3ajqjV3flaCA10ebjTVAcFSbjkRDGSK6iXqiP1WaTcCcsvuSFA2a+4PoWvcVOhGhr1czst/VeyCIkzIVgANI8PqMOx33m+sSYmuF7YMYwMV4gI5AvBU1bJKkUPlBwaMyl1+/c3Xn13oxmMfDpt9CZOB7wg17Z99iSisIK2LUXql69uaERKIa2drLts+zwV0wAItGG4l0aHw/GQponCumUjqaivrEEkuut1MLF+aWQekPa/aRWEKlEsPOYIewpsit/SOXb65HvvS5PD3+DOQe2hDuN/xxNyLDRcXWjFiM/+f+TCVWUxAmZeKqqVGbrsgKJRe/SJpCPTKXceVSFZN9gJLyV4SaD67bK29lK9KCTXpoWWc/Hv19N9lg1groVBFSh7C5PC2WTuklHXlyXvh64RtBiEHn9bjybMewSZhk4JPwjWd1CrrxTJqGncj3+/SGT+lXSftsqk5OM7VQKBR27NiGQrJX6xnVMIVKVLeXC2aleTh8Bs2A1nQQJOfvGJP5l4X9n91HYpmEKzqfb6avGc757ncQny0tjmzbjW2+DE6Opep4SxMj6T+qqzqUpb2DSjfcOVvSJ1OUgKJTglKWFJJT9SQf8dS+CMc9NOJ2i6x9AWIOVEwVyFeeDQBzCrlby9ZmtnvK9Eyv4NTyIDc4H5Nm4tuUI8akDIJXFHAMMxtKvpYLSvoA/cmmfpODAtgphoYLgjJ+G4jlYnv7EkhBntmIOct1MPoux4teN+MSfR06IqFKbK0oVzQU/z69kA+eb0RSm+yN39Inm5Dlw4y6OARDVsqULBP0zf2MJ5W6sKaviwQCvbOkLwljuo+QmFRNzIEQjN1a4kj9r7HaNWb9rCYZG7LUcyvtIkkRdXbi2Kpy9Q==';const _IH='f7dc72034f734b3d3f5cf39b364622bf6bbdb25d74f7b04ca354c57a1828b3aa';let _src;

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
