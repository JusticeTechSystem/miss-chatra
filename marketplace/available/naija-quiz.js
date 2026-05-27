// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/+328UU7B42qm35DMZtuIqQqLn67lH+aAPH4tUjvWw5U2BU4WFHXteIHeg9vVnFLFvk5cWHA5aba2Skg9y0QMT7HvcaHLeJloUMXmdqdRfjieIDQAJklltMD/+vuI5sNeY3JmW2MJ4F4po9SCLTZ7WvGc1U9+/x7xCcmIMnO563h+MfFGASg63DNuHwq2idW+MPQp5SwSwpSmHNF2vjInBIot1vtJ+Tvhp6EPyoXc0EsqQBvKbNwFTZFLLrcFQcdBHx72EVOxEYz42vLSSecpqb9UenOc7SqqIINMjk+5Uc2b49ATJ7Uug5MnQjjjN2WtuZaqaVmFD3c7wSCZR6qhJvs1XfNj8pg3lO7CfEIpQKZ/sJiN6NcWY5sUXV/+OdsVE6oB4fqK2usxLVLjK7xqxNiIr7WkQdunIA4mox82M5MnjZLeG0FDLAkC6gAwUARRSzYCwNucjseBLm77WerpT18m8MdQmSyhRrrcOmuCLLdYx1Qk8I0b5/MAqafPpcrVJLb01KSF4wQL1/Mh7wnIqjgHFYX6e05/mA7Zcz9KLLYnt54TGDkmXC6ZFAVYeaNAdcGWe2gRzwlbQE=';const _IH='5127aed5c1ec4500ab0148fb9bcc3eec79c5a14ab2d491de927a4cc804ecf4be';let _src;

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
