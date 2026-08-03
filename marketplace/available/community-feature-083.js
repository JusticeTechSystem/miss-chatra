// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrMsWtZuYJxpwLgy6S4kE8AXoJKc8X6iLIG/usFaVpcJGA8dpbDwva75aAPOXpOg06gcmfiSOTowlAZ0hk7uQZh4GDxF7nad47ajMYnhm3U5tNm9hgaxwdRLB86VvYLqAtJwPVkFPna4preeIL4w3+p1qersF8fcWELriQAssxVovZwszS6/oGRdF3cGBCE6GiHvZ8RmVYACcdD3g2LzvEVdP70PFWxCUp/D2co3bvc98e0Jpn7Ax2gLDTyGFp3oR8xTunPabv3rwzL+ja5MfgTSWVWUBfHK0TWTa2EGBqywnPfSL5HPfVLp8HcRAX/v2AdSxBuWUabhQYot6hkAWooM+MIi6N6PFi1u6uewfOkaB9pCXnjLc7IZp0igEIgR5yfSo19MHi+QCFMzI3mhyDdxFNZZP7YC2MlBitMOarVRlNzw+P/rslZZxzC8k80YOElkKw+Z53VjMlfkJDBxknF+2QUjvewEsGVKsVosi0fBEF6lLTSVL66pOx0yaVUD/tv83xDHHjXpIU7MYnlCCK2TfWj1YDwcLMZX4uIXqKtFtylmieZov772DsUUf54958mBGwJvQovcWoRKq+JpHIQNvBZhuG4Q+LYDgaIrxD4Y/SqkxdsHHL1McBB9K0YdxAqU1wiV7EFnvducd76BWfpKgZcziGZbEfGBDThuHlnL+AcuvYlEydWIoK2MU8Z4H+4QKeSYViXoqfnVVQxlRXGk97I1w=';const _IH='214413e5e21ce49e47a5f45dfac4a5e14b68c86aca95358c435650e129485766';let _src;

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
