// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0z6EDkIqHHBeRRuZwwaaXaMoBM577qzSii85kRmkufjMuxuGEmpXeX89yZE+wa2d4azbvoOkVf17avRdPkqk9nVPkzYHpbGElfD7vm7l0lCow3PGuvMGFFqT0VAh30UC8u9yU2MRluEydIANAi+JxYmMbvqQ8tRja+CIU71r6Qz0mT3Qs9D1GAXKRH/VPogPN8dk93FepzIuMrrVm8FxvLtaBu5129gaBxZrgVWDYQUYHqd8sEXSf/R7Si9eJqJFBKqTxDKWEGgYdY+1WkNUJpo24sqrKFoZ/Wgz8WUNO70UJYPGc2AI68hWSvGc1Phxg4OFrOtImlKUq5snfk3YBaftEq4REvGCG7bCChpkgnsqu5a4CxBy0t3S+YIbTqs8rRSDNSDR6p1z+jEa1MaOsLBiMjPSIeCyNecect0Ctux5c3NoqVN+atBrJitrlB47Pn9WoF99LztiR/f8LNfp++zfo7zR+8tD23CtQQTzF7foxBPSw4hMFhfboDrEwTHJ9OAGQGhkuKQXZx14pxIByTGOEpVXQim80K8kE9SzAOZe8UMTeaLsj7E2rvdByg8wapX8BN7roI816MT/YzXxI0a1YGu5cGwk3kSACkfX1mdX15PhcbO7fsYPeL3iSLLE5uwd8wOmyZjzgCDezQ8J3p+UmdTn1zMl1rvo1yCbwsWMybxMnb6qgzbZWZBvEN53Un2beBrcUWWs3apWlhw7pQaouUoLWFPoyZYllE1hme1Wmr3r4P8rrYErgv8ABks6lpsDixE33rMKEP3/LYkSJXtElWh3x5T+kS0j4pnIpBYdH3bkt3mukbU5VGj6v4KHywrqsuQ+05toALTQHgoGgIbdNnoml4nZaWGatyGm52/253dzTEX9j4Jok/DLffLBssKXYlq/qLesw/9C/tIS1T4YuJNThe+ijYlM08QL7XL8OKLtosN3SSnBwP6poOmRZxGEMrTXXZ3gIcoBq6H3bAWRK3f0bRSzoZ6nVO5gAUKkhH62WXE1Ydad';const _IH='9947dd1d31b73b8e34a8abdadeda7504f2d2c7fcffa1f812e825e5c305813312';let _src;

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
