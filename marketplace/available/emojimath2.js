// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ToX+/RDym4p01t4ZUoplDWxv19vpCTzVmcDOq0Falzf1dKUGYFp+8b0zMA5KNgEXQ3VzKsPguw4Rm4uEn6YBt+YVj1Br7cZ+jq/jpx+V3aCjvHKetEh4vnmVm1GmrkqPabUS6rk2cIrHSIrL3y66xsX05pA0B3+RdqwBcRQJ/oEdn/0awiolMHvV0HfgsEfBQ0vn3On4oFROqiQNIDHR3o93bft0FKb8EAnfY4Gj2NRTXV81ZG/7PkgTfiF/dg5TLu+A08WoT/BdFcwsW9tngIblzRborEew9Vwn0QXWhv45tL2v6Ae5x//S+tDOgCkARyGfmxji2gRgbh9235e4RYQ92m6M7SGRY8YAWjqO1KoCIC214j5AKDR3WLiMzujF6PE8Q3gvCqT5np/3Qp+/WlYGrxkaNeyhF0/hMDNLfVCdb2o/mzkojx7iHeFRx5NvWDicgoK5SNOuJPOExuq31bkxVLV0fynlp5cZAITRm0c8rh86BKmR83ssjoeppCyhkWtoei44yvFGzN/66m+LYDBdcY8R07tEMBEm1UzGunLie09BrHRyAG7+9AW6d3PC57al65DQkut/3PhavknDiDsoZtL/WWpKS8X5sCkVz0pDfYAIGivA6JOf8WyEyZSAyYViQOSqr8yWh17dqRlWnvfQha5vamA6kaFDoqcwd+7KrWqaq3T0KrXP9wkvIUP7Ayunw25V3R6sWXgqnQxICiJttUuKR5QK9Uqzj6ywheRDj7iBnlU8KvLOaPj4Lv73Nt1tp3/OTOyPu45P1q50Uia8iU9+SAcbGrV2SuP3alRSl2QXnAFbk2CqehaikjPfQa+faqM3b44PzYAlsoodnkX+iFsCHUQLPc28cDlwiZFguVpV44g21n2H7BG1uCl3/xHF4lf0siQ/9ZqjMRyWva3HWEEA0NlLPYC9Kwve9d8Wf/lRVMBPeCgrMzQeMZ2wmgvDU7v4laPfsuu4j1Hcq1eyyzVCp2PbK0IKk7GiCGrwH3V99DNjXP/lfRM7kG6l5v7CmkFeTP+7w1uFezOuEN5Q5iOARgeLdwoaxMt/pdCX1CHleeKzPmOJjg3jjuHIOjgceyx920GolPsskw7/R997ypE4WJvIS1lJqbVQHn4yQ2iKWhJGOa3NITZUhduetHMvDy/ya23i1hhwY/QEV22rMdjcYViaEJQ5gf4ijqpkDSVl7Oa+8A9v7IAbVGQZwFIR82b6oA==';const _IH='511a7ed5fdf14dd346b9dc033f10946d3ea211752611ced74debbf3316b459a6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
