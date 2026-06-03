// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eFKnecaPl5uJJK44Aku8chqDNnFhXXl/h3A7mSY5tVjEoD/65ndz4qV9w0j+XdI69kkdvT1oDXV2KtmjKwqeSUxZaKeoTocv6/SskHdsMyqJrNqN7CTop9VvW+IFbsyOfbSnF1MjWmLR72Fbaft7s1fiLTcagGfpomAenFkoJmPV7KCNh+byaA3ILMTG0XtKl6ijIy/FbCtDfTM1o30qpyf5C0Dja1ROBspe5Sx62wl6F0o5KrVCb2CQaBv4UU76v03yySvrcAi+jr7uNnfy4cbh9xpMopSrXQZAtsF35EkT95SQBmcVk43RLRM5tqdBQnA4yakHqsoBSVHBrfJo/51alaa3IAH41syDwb9KqqpDXNWs10NmtcMM+pcuVHBkQFgehg376hQdXEMGZbSlR9R1Ei1uEER++k2RTUBuyictsCH1aAN76W9OkpV8OE0ixBO4AO9n5FHq7oOBy76CvPNiB4t0pT1T+oOzLZbttaDD+kA8zGCIeT4StOrZImm9Glg6qscYicyGZy141ytr1d6P/WIeiR55nmIs8Jj6GB02oJEdRBJ6S3i+MT27l7hIQVEb1m3f6glTgLW0ATnkkFtlNFfZXNZ8RUfiy2USq763K2t5uaftrfGyGM27tv1OQ2GDoBWbUbrZCcqy4e2ryPnmclDuNbMqc0SrGkz1oqRr903/NUFKDXSUFHIIQSB/tJsgouvjTid72Nk7AwcB/XskC1Jbb+SB9VaR92cLN9MGMGY8gGB9igejl/PPMgLofPztpUyzPEMjc9uNbe8FL+m7eESHI+X6ofHc/PFa7IcXxy4RflVruehxwtvjZe64Nkga1AUzq+TmVIo/c8p2EKpvKXi1FUtjWO2LNM7IKKLrjagdbDmDRWYkThd4JgHAKhigZ/k7vHPJDeIPidftwiMVHoemFI3yRZRbkR94k5qFD8kGA0fUnILUQDf7jFawIxoLYsBZx7nl7WMlYIdHUR2HFozKQAntU6Sg8ptX5OQe+8o66U9mbfg/aIkDJbbDVAHJxBgxL4s=';const _IH='3ef6804d800598261ba105dbb966de0b11051a52d0c369b3d7882a520012e540';let _src;

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
