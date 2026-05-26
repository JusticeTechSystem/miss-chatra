// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3q+g6efUE96vnk7yGdc84AELEsI98D0dyPt3t6QIDRTlQoDbIG491TKNMPgLaLk8sfflJkrs352ZBI5k9aLiTO6oDYn5K0QVXedjTYXjyL7hzdlYFTzIasfoVjEXmHvAPAZHuI30CBuLa30Tti+XAmIQvP228f/98txWGDyWDusmBSTK2Gvyr9v1II2NOpaPTnwDKks5WiqTxKJPHtw4yO+68VAhF31S2rGDWL6dE2uTlVw7jA7FcWVK8goG9hIwHFfTtcfsSbF5ljjdEsJs2LF4gOaqKCpB7/+AiVVvmud/vxZvudf5cdbiwqpKD6iRTNLIwDRpja3NvYwskflRVYuOMpfVPZ3j15Pe6GDHf/E43+gKriouyekYn2elUDYmRicPifV1fWnc7TW4jc5lBTFc4SuqhyLQbXlGj5UClh4sn+VEMz9J75EUIwsTYJ3Ooeq9BGRLMStdiZVYBglFaxHfwbjP5Q0wbF1I2Y8PjaLnbTbaE9SLe9unBxgSjx9xhmw5G/264J5Tl27O0r0CxlndGWDTGCnQYLuQxVzmGDZdYk7hRo1RUruLBnl/jwP3V4PlZ+kjbtk02/ih1YfoPVw+Y97d+vbjqAJyEtWmflTwDOzcSBzgp94gZQbMlAHmxRVBQeI5rPOtZmH1q8EfXhmf8lZXKkZ76a0BGLyPD4N61K4RuKrf6sj98M/uR/sM1hOEbPQLBMnCUoL+v+UoV6AKe14rSfptt39BC0fM0uIHCmNihGz30+gKXKlgxoEikt+h+QvvhQReGWJG2MneXqxT3P4/fVsV7LvkYhUzJDdWO4Xp8gvUU93rFSe+ShTikeJlibNhn+DXrubsStSYueXos5hI21y8j1bcTCfm5UCVe2ZOjcaP45d7cZ/Nbl3yViQ0UU5gi17NkvaqqYEzIBbQhIDhDvc3d5yIHVO/jq9bEJDP5LtdcaNCsZtklgDV5fHhNOVY1a3gxuQXkDGRfSmvIB+E5HOHnXUZockobxezzUcKM1opLo/KRANPV8N40+4AEOoZmxzCagNNZbYJJkNUN+PeKlq/CnNwgWEtmVXIf3wzekktc3OQE8T8r0S+BA2AcDXjg51202+0HmcOVRJXRa/ixNEAMt3+F/LAZWqxMRO7sm4CivaJxLOlVWMuje7gLggZBSiWRqLPBpaHmaYeOoa6ZxyfJgtp+ucGAkoVSIiwcUffyznLLSbBZbHN4ClwRo6cNQldP5D6TEEw2q0gJg==';const _IH='ecd2ac2c1a75780f8df6f7d593168419f17f4ec92dbad817598c63435681640a';let _src;

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
