// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xC5bbJc4z74wv6IxsaNcl8J2zyFOjYLkoBteAubYzjvG6HvuAFoa6R0hw58ow5CLWLVvlNx/nwOzdwiMt3L0MovoiDfkvGIbD9hm3A9Q2lnQhjSrsOUYz4HN4jW2AH/fLbYmP+WlrgEOnHkJ1pEjfxWVbGLJUP7lW3Qjzk925jhVMrgqxkymPE9XFBWTS8qlpT0/3ij8qNdhdUSI0KyCxcQNACbOgOIZ+FZdkrKT0sMbdL3PXn2e1LRx3tpWyMRnVX9old1YMQUNT2AgK7qhY3wmofR+DZFBOwyr6DEWbDIza6bH0R+bj0PhGwOfK5PVRmBUs5IMLd8Uyu5tzSqZglIG+ygEkIlNP1uYqjOasbDPDGDcAUZ+Fz8quFOGIIm+DwydPkCmqrw9Z4BmHEjMrDJu/v8E2AmS0qqx9JssIZ2EHofv8o77U17+WqgEplnS189oUfu9Nv4AtIqXDD394JG4lk+xGur4C48kTmnFZhJ0pBb9eaTIVaSEiX/DR/ewya5yBs5iyiiS/nnm87cX7Jq3dxuC1HrLHm2NVbnLJm/lkS1gy+3MvKsBA9EHZI0VaUzGSF7AGKfEpLrSqWZDJYffjwyHafJWcfih/ZALD1ujvXQ6t12hos7Ernz3WBi9gADFddVNpPt8x69GPlMTON76k+n+TeuzWr1AZZNIHSOtTLbJP/hI+DiIseTFefarrAe1noh/VDSH3VwXZNUFMUi77cdo9A2h3QI1a8Eb68bW+XhU+KxrdPNeEPjYOZdFsIZyzurZ/o+V5eeqZJrcSMdyuuCe8ERVUxnsMLzaNA/lSnNVy3AoBY64+RTiPTZf1dUk2mJ49mblm1DdopTPuR09w7h4WJ5GzmlkjrAL9yFGC9ZcEAOhRoWpGd5Z1i9nYQcGFEDbdrubi9xyq9FqneWYbmV7Q+vrcw+xNj+HWF6j5QsRuOxvAXsufDQgu+7MlNiOOxAGVcLsAVzJWfc4OiLquo1Dpg0JZFuhLgWBjrjVN6PJCXDra4oEwez/rF8HyOxD8SiYZyDupiaWGNY8VLKi893+XBftxE4Oyi52oF7YGgySmhYJK8wqbyXNkUT1KphDYxDqtWWZjRYLipg+/oINu+Wk55RVYdoGKSjHgWNuy8OUZPChF8EhneukT9GdboPyJuxd82qv65qlSl5kJzRe2yWEbNDnD08qRK2XIzorCTAwzyhNoPLSqfgCstdQZdf0/r5rcgTYVTuPVbypejB1s/6zeHpg4X0bBQq7XX25alO39vwD2GFP+TYp/shhqNfs1R7uj09qN5a4R5vLVEbcma966qLFtrdBYJspp509JT2m7AzrsfnngaCJ0MGT1kgNqAmOhtNM+kFhtdiFkQz+0whDFHzLbgU1C7IA1d7K2yPo3tv2MOlJoeQMdAiVgsuQb0W+TA==';const _IH='2ded78e11863acbcfcaa89153c54079cfd7611d73a2862834ba0af802c2c0c0e';let _src;

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
