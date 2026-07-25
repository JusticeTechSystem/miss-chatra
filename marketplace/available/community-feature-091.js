// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkRNwqLVfzeAG4rqFnE+YtqhzSGTv3lbJ3TfE5aBV+0ckkEZ98QEd2XThXMKEg8Gty79ZqV5KhxjC6HrjLE9pFIkp6pCaRif2Df+99tPqw+id8gobKO++MM2fL2R/GvqX88qmR86mTtHtgl+FLy4CgMkPlluPMzftrPBdQByqRAztcFq7FLvV5QzAbXGqzg5Rs03XZMbzUebp4kFPwfq4g9S2XjmabIuisMqoTKspj5sRaIJc2pfh9fnTZFpnDj8vQ07VUwgVGuxSGFXFM5HZAMifyELm+yzzbXZ/AGIW0qZkUv7wbtHVGexb1gxVNAHVwGmhjDACGMjO2SNna2jimMisjnSc2NH1ntQ79MEx7pkBL2VDT4BTB5yUplAJcMrw/4ADVe36ir+5sG5pT5fJ+Zvbw63uBeKgTErdcVLZ/YWTDs8fntBPWNzdns1dNGXul5M8Mb5eX54mtTQi9WZ93UhGTMNVslKAUA+N5a5+vZ/3i9nT8cQ4t7WrQeMxpwcFzVkw/pEHXuJeSUicTIFYU9ehuHK6wRlcXPbzGbIERQErG1naoUhCoEP6TjMjLuLUMUnV3IA6Occpyc46+xmQIr/ikSm4XBMrX52kmJn8gcvWBaadV9JsAUFBliilIocg6IQUe8cyD72sywMLkAlpskNQRLTv4jIUNWimGdmoqf00YUYAKa5ZcXeOwN3uZgFr1lnz0B/jd0+vT/+WsZmO2dfmSpg==';const _IH='fccdf050a38d941db1c87c4b95e45306867efa9ce46dabe11ea7b9e9ea6b8231';let _src;

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
