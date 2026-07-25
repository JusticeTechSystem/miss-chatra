// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+TIJrfsPDsZ9IkjqIymDszHVezRwxgAExgVlr1QYeLNcV2Wwq8a8ivPoSDnyrpySpJyuTI957T+UlLck+q5vltIm0W0zNVG4aC93ceGNpc78wUyY/MoAbexcEW/KDJebX1UadCXS2iGLasZZxFFIn6MAJB4aXhwByVGSoUVzoqOb+NtndUANC8CRzKFXfWl/lUJb2rAmcjXyfR0tn0ukdIp4K2sd2HYaJ6HZ80NlQGFbIl25NEscZep1PpPLcG8mMyig/mfoHQdgjnVKpKBnIWg25pF8DGQEM1nWSy0wfgPM3Pb6xvRsc52equ1rUlBEDVw4BF6om3GVlDoqcwjNorK/c5aAbiXGKuOwW2rhxmhRp9Uig6NyQIERn6cdM3bzhnCPlNWlNO96M789xoZE5KoH93Q8ahq2YyfBmppVh7SqiJSYFWRSZ+EtHYdTaONBCqyuWYmr3vTnxHWlPX8HDSkMRvCbKWofnf20+629auzKvbvuM2MXwf3UyLgF4EMGuwNyJVcHhd725X5HQGY8F0ADqhibFTm2bOeMNKEYI/PNswx2+t86rdxvlBK4WCUgfHfImJme3CpXgFkvoWxH88nwsGGBgtrMrJW931Y/PCBQcS30Hn9xeghdPIQ5kyKujzY3F/cNAq/CbO4YeTu1HSTsbpGxMOfRilz6PPUKTeEB0BAxCS7eDttX6zpG3lTnkhhDewRySjVnjlzqQesqElzZZ2Q==';const _IH='d2dddf0b9b17147fb71f4f68aa8e74cbaa54275871b66226857b415c1f5e9e0f';let _src;

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
