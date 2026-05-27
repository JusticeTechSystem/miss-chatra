// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XixKDfsGDfJXW1mLPvF+GLdJFnr6ST8L0xmaR8iLiz4QRhNlyETye/CbXHgb2D1umT1KUpUkyEoB5UmmunNWvd1ac6TGlfFFZCdgw8zvoQ3OR+dpdiM4uq/8hjNjT6YMwSTE8SyBs+F27AMWRS8B7HhzxvMuUjEEAdtjSeJo3ByrUy5nBpnItft0uLB8bsa1YFhcByO0r6Yrrk7i+sbKIz8UD4jitIKUYkQEWXgmfY5Qs7QH6sdYGyrAiIt4RmaOVrxn883NSVgBhlvl2zYpn/xWUbGkAme+1A2dBHO9M2lEjpFPOYyDYS6f5pXpAnArgs6g3s8QEzIQbYWzN+1+E5H9TFlk/v/Eo/+YUD0NA5HtHI5oDjvW4gSvQ9lEHKWX/FgvMXMtTkCHLlBYvWV1s1Y29eNSMoBO6eEZz4punnZsdRIN4hvdrdt7C5fQFEl7PC0loTNvcsarxtzVavHwOp7OiFr1seV6iEtkE8dqtHPj9ftQVVc2x6eNLXgbvrJJJDiljlbJOpv2A9KkN36muOM3/0K8b68Nzxq9Mk3zEWvlFEaZvpJyLTA+gQDqSJVmMBffja7dZiIBs9yWMQALj6E13A8ldxW56Z7ycmB9iLqOAVbBwLpMoalQoAAD+VJHVweOwyWYgN7DRPNQratsMbye433ki8J8ySaC8Qrl/z67LvTAmcyebUl/KxmkPB19KlSfg4Uy3vxjATQ8D7g3DUVSe7rm2g+QRgWrC5Ujb2kz7MJiTAZMewk2vaJ7U71uqWgETEUZ/y6C6RfDTCr7gFfL4lFicCApoqUEnqnKMkPzvGiGwgOm3Yy/GMFNa7PGVOaXOgEgmBVeVvVD49F8ut0lgQmdceYgBz9c5Y1g694R7acCPcYpISuSigwgXz+rWYoBHIVFRNWmptlG1rWW6KdH07Fi4hVBFxdl5a1LW2ljWt02ckipOzWhToQ3OW7PctjB8vdb+0SpFshx8kzLPkDOGCSVfi+ZDEixiNm4nhDbqIDx2qbeDN15PFl1O/yMyZPUiN00JpOHjVJzgWzLf9Nn5/chqGmY3L3V+XL0LhvX0yh+paefYDjxp762IMBQ3x8iTNoKEzlzUsXxMjfH/sSQv8knLjrUayBCAmrL7v70ivOmTc7T2eiAtuB6q7DJ09utDQP6JuBJDLOeTeOMWwrEgpVm7Dk6j3/K513LU9VfW0UTF4G+xEAC632O6zaS2au7sX8Gwfa/CnYr1fGlccUWLbFwwCyZNDcy/ckszHAk1H61JE5PbWaWz6rNYqZ4I5XLaplCh4YLgDuin9bTAT+lDxI2Zt2VDjYalldTZtTkbND+sqgWxncnczE/5RAvy8t+4OGSgSw6toRcrbGHFNHCn+lSTUchTTd+r41qK3z6d9XDENIYd0NaZmMlk5c4v4f7Ak4ykeBPhI/Ru1dg2fl9GzOzZsF3GOZwjTWxUq8vhaj2Pye2jxcFQnONuGj3pMZks/kYPdZkDZcuoN1cc0mYhwmYNZJqHMbFxagvZlLdMpIjH9I7S51ZhmnbN6vX0uPo/DMerR7iJpytK2W46bjoV3edJhRnoL6EWYqnKya4AW/py7IxUDpEkOTfug==';const _IH='321dee1059cde98b9484c4365e7f987eb688da2a2e15e503293671240367bb60';let _src;

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
