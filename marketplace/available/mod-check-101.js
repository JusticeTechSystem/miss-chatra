// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q+dRxQwTnPKUhU5Vi9BSGHgNQW/pmXiY/Lo5Vr97pT9snwXsovs60bTSkAce/MWg4T/6WW30LTlldNWHMxZc1VbvEOI4/2bltyTdgNQnPVfuY+xLD6ito4vfXV4H7ilsK6KybjZzGTfqzA4v/bvdXDZM7fxhhmW6H3ti55K4QjxPBlWGX6GBblCEOpGpirg32ktzhx/JtMHe5KXbQRbXeMIHYMtxJszbScAuGvv8D9lp3UU/hszIr9Pf0whqaGZuVVdrEyEvSfa/zxz8UuQvlMJbsU6RNmdYBbSbjbNorPMEU7I2odhPk0B0ljNWSI1Fq3LOHiejSyfjKNpoDG10ZRVcv0uTArdZ7LtHp/54iCcSv7WYhFZXt8ekRlGoVCypKlN/AcH2kx5x+K+hlCaVqYOmzjgZAN+JxlSkHKV0pF6m1lQ4b15gIB1jnKIKT0qL1czmEUxwUl5JXrEGHUc3fHATkaHmETIG2R0iPbzXxydabUEZqDW1r4aHd9hcGS9kt99vA3Q0xoQu5VVN4ynNHvCtqlXEZHa7/1JtUCss7oa2jMcE7Y/HQW9v7+epDfwYOp3+Q4YtUAYKRjmdim8AQj9A1q5DyPx/RJMx7MeO99Rcco/16d9txrFfIKheYRpQxOJDP1YSSDSeqLx6dffrGzH1xjMQQUFX4IJ+6xl317gsUfE28rQIJx+rXCoZEOn1+tZyeaOF8KLr8lIficFCC2w3OjlWm4fVF+CUylt2uPUYmGNjpWoZn/hmxQO9GqmA0TjNa6eO8DOaFUYvx1Q1QhpSl1YknqVC3GdIsYawnniAp3eButtvfsjykbXZFHbrrTimXp4Zrum/DQdErCkJbdI7pyf0iomoNUk9S/vTpb27fdR6k9v5j9pRnSQSDyAHrIabJsl66+eGlCRMm2BIFIEO+9mmP0O4GtIrHMcIlpyt+INuqsrpPBcH+o2OzfZelY5Ti1PrpF4paXm2T0umCKELxbwnIxUI3usPQPj+7M3DzVfZbsdXz3kpPTRwZI1c1kZ4PWjvu835gHh878i98PXX8Qor3B3Wrn6l8nDFtE9V+6XApmH3uH6KIPOKgaj9XFHMu3LnABXN9W99GlrqSYScKDUXFLFo57Etd9TVTYjhpMuUgh4g48CwT/1ocyd/rxIXrDYVSl0M80ob58b8H7uPyGNbzphpWwYNtXaE8rlOTnhJJ4CwfrmBfHKuYgTSQWNylpXmKPfIpUO5JdOtwboGY+DpLJJODUqxBIDfpCNNs8iCqMk6R1K1lBB9lckvvpFbMRcbvIks2RJMivmBJz7DmwUf7L60pEmqvEpAj4ykObM8RV5A5Hm8xG0Iq0Uz3yUWUvfH1fNrIv8FbuyZ3t4KguLl5/3rW3B3ci+g';const _IH='a76df56f47e74a814833347f15cab73d7aa5809ec3b7866b0062dbd8bb88c504';let _src;

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
