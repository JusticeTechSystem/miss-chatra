// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSI+ymQwwoNsy9eCqciCo6ioL+N3D9Z/BPh/dTnmS/Cv8DP3iGpv5takoAtvxraoBjAHLOngYbPR/6ex4qL/dNXwcp5mWgXGQGupHcOpUtXJXkQVSOGza3+V6+yrbQ9czC9ZRDh2e209Keo3K645HQpzjEyM+nssSKRsmSNwR7Fz0KgPFX9bRNqSWPfVW+f/reeHVOsCwxsRPel5s00UUAyG3jxAVDMosP8cbF8LJ7LAX10fK5TcQcOxKS0sd4dTx3K6yGBV7PFv0EJeoQh+j2wOotB8GMMRMPv5bmWoSCx4lKUAHihbo3ezlNjbeg+IR03/EnxpZYz5CMa0HdENFQ8LmgImHB6MI4abVqDmAq1ETep/HsLKQQ91LlhoW5PWsoFXvFCUwbJ/hricEADlOCcZBJr77FJbetMTHXJzE+LkWy6HCanpoblWMV+94VIpTbUgdMesRiTOM2sU7F1ZFyiweA4DaDm1i74RAXIaqGFS2Leo8eabWSVZyxFa4uFGInWdrhrsQU8L3IWLpKeMqdygAV9FF3VxGTx78QAC/BWU3kCdzWZG4lPd8p1KUW1De+yj+9kherIoOClCnDwkgHmbs9AradWNrHprniv3DrBfslonWJBwSkhInW8Bn9FfvPWO/GlxMLb5tslWMBReaMQRGt4ndRsCqCr8zdNbT2/F6Q7lAhiwgJmroZamoLmg1NAW1FwpnBbAa9QdP8PNq/1YEZzLLCh6e0IQ13myyBK+u6zU/LmAh7sbsKAKJl8g3S9/ZqfrUNvEnd8Gh6fX9s9AoYBsJEr+hG5x6vMnmKld5bGWO/s/s1SdCuKwD3iQa5XTIr4RmXiSmIOE+zoxNiWr2CT87A7QbuyhCPNtNFEE0k/BzZF4sQedPmW6w/VdxSkt8xmTOc0YjQF7ucBZFXSNi73x3cesZZGlsZZQHpQY2gCXh5o5oIGKpZz21TKqabSEQSpgJpRjoX7pyPCLOh9sZ4tEf2ANClx1xAqGvemSG0wEy7xh6K3O32yfpyoj06Hr+GbYDymKBJGUCySSOiQ5PBX3nytcTkWgFq06T4xCDdFvIqp7QQMsgfRRUSiX9jKyZrdWujvWmM71AIJkRvK/0yQy2b6ODObMW48bDZ1oYix5BHhvv2DT4bRRPsONwD+uYnPZad6bvR+D0vdPY0HhuKmKBHPcpT9giG+AHFfezZhPK+bdgonUU1QeuzceA5zvjgOUp5pmLX+DxaKkrng81KSSGy0dr62P7wMcyFJaII7lSN5dE58L4uNXUQFfBssnMN682J9DQT4juuBi48nKaMoVl5hKfy1wAGddEH5I1X92H6IyKvX06zJ9zmyDK3IKdbqXA==';const _IH='7368b0223ac77ca211fc62b99aabf6949d1ef8486c9be66896590851edac3881';let _src;

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
