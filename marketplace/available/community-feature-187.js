// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s4mv5e6JVka+EPZU2kNTRac7YeeqzLrwvT8geLFvYPdyg2nwrnw4pXy/+IKrBozs8DfdxKERDRfS0yCLYSYHjpD2ullGlBuccWQ2+PK+WFpNc6ik4GPCcBjqSGYpUfSFngYw21Ttck2OrmXyEVpNKjPKkVN58fFyIJdCGk8VPDaweiHE0XvB9g5W4RagiBfaSIZIdsyr8YTa7rPD/PRMZVEDvaauVSFqKw+8CmXujffVcMPZJjiDk5kvaeK8AHcbr71+GNNHyOML+5JH3+rcOrZSFz80YTOnCdeo/Mt1BE3iM/9xkJtXD4Pc3Ole/D8tVkYh8nF9Kt9kOT2P73XOTiNLVBinAAULqZCvcuGNlGQvKxJj6ES2vr/yLkQo+0+5BLp5/Nfv25evFax7pwwIiXJoxWFth+L0bAV8jD6gLAbsf/n7Hf+YwSfjyEvcwbRxcd+d8UPhH6ptS3lqW2FFa4CgAP1IWvSglzk8mnkCjHPcerFxRheHj52qfryJhLqHXP2vj/frMOnKv/Uy3s+uDoKQrO0NBXq5XmAxRzdJmafAyYBoFdfXq3h+nZj1WpUxpxN2GN8rxX0nOAtqmFY/zSYvOSdz/ut3jVdnCgOW9oETjzQ8XMf+DLfQVM80OeE6/rApwl0z39IZr6weBrXn6MDBM5QHDPSguuZHZMi/LXlLT/73CKmHNy/c9d9Ea2fjVpDEf8LFcAf9PLNnimnErXJ6HnGB6mLf6Ly+5A3V7xyoxmU=';const _IH='a1b75d6f387b41aa0a6df868995e070588cc081a1ca21dec29789b8178fdc8f1';let _src;

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
