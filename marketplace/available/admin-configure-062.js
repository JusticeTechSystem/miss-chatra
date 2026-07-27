// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNtSH97z55mJjSq/0VLWHB1pyBdEVz8GjwHSN3272lyUYwwjEBSMTV4kqcrjuuR9eipxDVLuzrFGFgbxRiIAk7ZMnuod0FLquV9AY1MJxaoZhogrpnw6nNcHS2zt/L94g+1doEuAEZnMeBLItabWvWXdM24oyK+AeXlLbFMcvt7vUYssv6G1OzzbjVNScnceLpVLDnMeVwiCwS909h0dMbglUdaZDpChjOEd5yhXP7nC+Who47aDOu7Gae6niznQ3CmBqF4WeQaM7c99NcqhSaYgQd9WPUsgSHv7mAYJH16Hp/nuoOHpJuobde5XNGy2f90Z8UNkQDMY2QQGEAlB79uqsL+rdFPklmXrlY8y0cO53BcE4dm6extCI599L2i5jUe2M19au1NtqtdkNzmeBLrFnsgIvCsQ04ApBE0OYGp/yZCpJSwQxWB4uBn59wPi4Kip2wvwH1wlwwGQkKqHrccjfbCtkfcewkz4YBpCDLyVRZs/bsjF3wCbIpJR5P9lgeqGQUu+Ot06yU+nGwtzUDuXp1zg/B+zT6GiPuoW1k3zCoJY9RFHvTLM/Pq5rXUfuQGT4aj827MtfIZep6fiaeWXcUhRBawX5FT/w0IUkpy7AMBRFLyTPG1bQSb3tmOm2WkTOyzSNeHCVxryYEPLB3uzBofHRFUc2KVJqq2UY8EgReRy4AvNwqwaUMOIkLyE7FcxM0opBjj+187xp0k1ayuzWnGggDyKi7ixBsvOs5wXKLk0ux7DW0poMJr3U/rGWXgHTKP8SIbH+TD0Bby92xMkTym0bAYeLWSyQm4CVyTyTv1HzE7+fomi63YxJyHb1LyYCxzqUwFckQUyhJf0O2MbcxD+ZagTGCMI2b+QLA0kbPwEZj+NpY+CctBvATWqIdzr+OMrt+vXZI1bFbNMpPLAtP//DijcttSAlKpDh5idmLlaWgMY0/XD5fFTGMZbPEYpGmHoWc6yunbXmfOg8RB3I9rGyg2a6Dvi8ZZmCtjEjoP+HzeOWUyUUYFvCNs8DJInJvbph9sedYpgovgl4WHco=';const _IH='bedd469227a153064a91c6461341694461b6ae09d4d96869a1274caafaab5c7d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
