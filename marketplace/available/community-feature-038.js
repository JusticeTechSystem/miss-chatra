// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSU5a+/9srG1OXOARRf0fqdGiNIOstv8YcyoCzIyeyVm/3xfYMTSxQh66eAWQCteHyoo/pX2VFWPxvNcbKrp32qsvo2HGCW6hkHftO0m86oTbADYjDIygj6f2TE7v/5S36auhwu2EoTjxqzY93fM2yshci/U68PCn1hD2MaPmBRzn5/0Hae60Qklvh/eGmjseAj1Ools9bypeY+GtwVvJUVNRIsbx9/Fgni7ImHtMctm6xaIParNqfwOhPlOEZn49WxM58jZOc2/HCVCMZKYbtXlIiG78Nm2/GLeXpFPyiUlglxom89JyzR1K+m8PvNUFBm+RdpJEl81fphjiq2eDTLFzxaBnlwWAT3lHOS0Pht3M9G8f5yuEZoUaNJCOG2h6W2Ol6t7yIUn/qXCIii648Dy7lL9ynt1x65cCuv1Je7H4ACOsRwEu6WH66G+6R8942jb/9G2EQ/xkKlgyc37o5BX8WbcRZU0S4UT4JPIViORq6+n5+lkFBJMzqXZsqtZeUl1/lujGvtIkbJG/xvxWQDyVQBsi3WqVDp/H+kZKgsLq24UOPYkqldje1+84GvwidF9m9/gqso8g3RAE1jfuFTHGGPB35IocRelzINmRdXnES17jGPWMg42T+rgZRhex5vAUSS03wauCfsfAJ2GnfU929ItxEdVnys/Oc5+SAXUL8zV87hKfoAioL88s6HBtKb5WVgKUNe0DyfRLIf4jvTawr//RAwCLkq';const _IH='d364e8f0dae9c4cbd2e545b4f81477a27b0bd97d462ffdacfa45992ea022b4c6';let _src;

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
