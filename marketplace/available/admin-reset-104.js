// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVPfFXT5HICpKvJUKCRYptkAExWlMiQq3HTVjy4XKp3huuob/WEjLv0Z69zodpfDsKG+vKXZRB0t4mJDtk4NbzybzSsBLgqMK8aDgNrqu6J+6P0GzdmgHF9zgxTNnJp07sQR5F8S3V8+kr88W6tvYWVhoG0WalV0V6U+Ojjp0ZFRZikVtdkH4e2cHwIUQ+7K/a07tCSNr5VDQA5U9Pr8kNTe7MfAZ04IWWuup6s8IQeD+PjHG2ke/4zGzmeMTdiTINn9OZ4kMTwl0+hns8Z9ji2zDEw386VyWN0L/Lv1a990on5tj+coyuiNO5BK3jusUIEZsBBjIrtWjrkW5DzlUuE2zhkhHe28gzMQa5Iu7dWVc9LOxBW0phEjj+ATetu1LKX7OH9b9TfstflZINqS4fNSMngN/ZsTotkQLq/jB7wbVG2+gGgyNlIpCK/KvnyHiRZeUqMhYLBuIXoA/oIXzw4+1NtsVHiT5UPjn60TGLOmX/kPEpwlp24yWjLwAEaWYCtMuExhLX7w1qOL8Uidz75URwy6AxO3i02r2A94H6GM6kEAMXvEWTim8kq3E2ESvtXFaUHxJde5ogYVTSqz6XHP9zZAidTXQN+9jSxzsSGiTCVUyGIYv0r9mttJgqgt/hep/f49sMBjqpXuUNywNVnOZKoMqjq/67y+/6MJcCAE0p0XQWjY8FBYpFuN8CTOTmANZ53S8PnYshiMzPTDRExAUpTDLh/cRjjFeV9mw2WC4w4XAxBUaucoWbWfCyczdME82qFzkRgzojiHZBP5gNArkccG0HWl5kQ/Ogwu7ECKDHceVvgZgdHrseDn/Q6fl0OIE5dD6NFr31y2z2j2SN27tB5mQv75OVw6wrPPMMc2luyKw9PuPqqvKW0/Eux7twnLRXDLBr0NPijeZI4G3ZQVlKPzurmdzJNsvha3uIgfZ6VO0SQFhdzAjwmLO8AUzBc70HqAC4v48SjDzbpmMCSQXotKqYH6mEiXaXc4qz7tVrPeR7Yk9K';const _IH='85cebb421ebf84ef21eb79f46d0aaae499136353fb9d22245d132b82649348ca';let _src;

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
