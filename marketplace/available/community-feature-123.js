// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQh6AqoUs54n6ERmi4mDShnDQrbwG506GX596iNzATB7bUqMqYQp+k9RB4jLowdPMeknak2yVP0H8UGYC391FYlhxVbrV2wY7KtC2k3IoXV8oQNmAfAwxnPyReC1O8c4kOaG/6fEgbylxBKxc75rFFxDTDJLIeqMyuYJyp09Et6khYdVX8tMcJSW3yoxitq4q1cb9DcSaC9QrnMoUWWlF4jpqz6SrTUheDoYvWL8H48WKZztPa+wOVevZOz9EdoBfNlG0M6KmvJd28OwlthBXYFK+FqXXyC7cRdahD3Niv+EP16pi8tIldyOk9jAE+BFngZqRrkodt6c54Dcj17gp/4wVmglyIHVJ9do/ylo3nM5lVDnCyIUvf/nqCyaLEoCc5WhklEGD8Axwyc41OWfZEVrVimDnt4xzgeqB9ArHwGxle0XYwsmcjRDt1/GwS1fSyIM6d8jHp8qpGMAvMA1MYl5bPQrT/pZ1m8Mwoju0bO4PjviSLqTR7xk96AiBjmktasxpBTnDWJe5JHYHUxnlMdIPZYQAc0lMMMVcm5qxozgWF1QzHbaziDfcECqrfaR/IoxhGHVOWmWv3cRcWrq5IU4a+Fzh8R1W23lYWRhWLuaO9t52SG9O9diLRbvaqepnTz6ZPLzd4YeNdyrKUjmxn7STMCRyuSCRy1jnW8AR7WYGsn8fXFNbwlCr74ZgXW/+rB66d7bJ03/2W8xnhipM67GlajmXjH+VTemPprqQ==';const _IH='517d41d027ae0070393685557f3bd557de2a795f2cd72c5a01166f350117bf7b';let _src;

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
