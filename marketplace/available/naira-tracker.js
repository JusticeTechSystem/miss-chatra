// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SKMDL2Hg68XvbstetR/pc1tqKBEquDWpldK1zlrGjaF8pGCQt9EUtJmbq5KIn6FHIje7RG+G1+p9mdVHvEAJMWCRCFQ+4WNOLpWSJNLKPBSvfb00XuqG+nV6kTG1YzATf03+k1Ke6Sk0KkX5Ayus/qDqXfD2gIazhZOktUKxJkKtbSpR+ok3zPEfr0QK5jxaNYRJnYC+YA4poMXSOQNoHTfezhktHpneydYNIHuXkZxb3XmXE1wKDv5DQ6o/knZrV0hxesKbwIpVpaldYEHaDziYYB0BjQ1pLZIWidEcm4mVX7thVRhuuxt9RtFM9nr7P77uwH7SYGOWb+5+8txCUOuAiheUk0hAei/mGPQfHtj9cZ5Vvq38PLILiGfTpXT/vLDRiiaEpoFm7l1Pl9Z+dosI3/dx3VvedKnsG/MkIOxTvvaLI6eg7C9LtI/RnREqaxNNj1Z3EPW10oicotvGhhY5uIUsi3co+J4iKz9HUj9dyAEVUmzliNzhrmJdbch0LaBOr1loe+DtZ85pxo8ot+5MPpb13KGPUeyCZHEbSjGjopkvYU4TJH8CgBUIPHsCKOMX8Soy72wEFA==';const _IH='fce94fc4fd37b342e9c943adedb004924cf099e74f8f52d3672e8fa50cc007ab';let _src;

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
