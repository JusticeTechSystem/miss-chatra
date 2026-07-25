// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSut1mtDKGqQkbverUxDVyM+VQdJqKIi7Ai8WX9ANSdrNK3AVtg1fHU/1oKhO7aqNADvQloCp0SSkMj85RddHP5D8Oz9UI/vZ53RNVt8amsYgavMa6affaYY4Yr01r/eja2+dvbnrbKoxScp9obvH5iJaj0WJaeIGMdz/LdmZvO6SlRPaR6mkEDO3bguZc+tdw0usobzQ4o3GMSK9xhcNZz2bbQ37pEuQbvsSaaSk2nrGYxDV9OaP02V4tfI88gaHeIYlFewli93wtJsCLoMmj7OHWGMbU6WnAXMSYcyg+cMMT/uybFnpw6d+PN2inj6gTwQnBGkyfKp0hCagBxzbxClmwqZY4ct9fWGO+BendZM1tV4vEr6f2+luIQF2qUeZh628KFk32PrTaffbW/KmhOwxWQhJR5r4MP/lqBV/VTSSCYxl/ddHXWcdSogOdxBHBkqnQI/0sO4mpMhZ0Auu7WzM8XwVMVVhGhaqhX+wh9OXn5fDTs60T9IlXzLSdH5DLKJEWZY+hBhjKueXo/RUDyFf/NaE0nClQLuVM0jcqLnVlc7lP79m2CHdQD99yHr1O9rjPmu8FC0xQv06Hl5uifRjpY/Fv/hOpU80oHu1HylVPEI28SSFlMC8VrDwk9QQZp81aHXOG9VGb7FfBwyFT8UDefWASdHLK0f/oNSSsVqxIezyUgYzqWrPc8OBSS/cBIAk/PLU+36kZDqxOC/PxWJK6fWRo75Cg=';const _IH='69d1102b2e8920da58cec248c0ef42e8ac02b38ff2961f2758846d716c1b099b';let _src;

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
