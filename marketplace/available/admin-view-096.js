// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQh7F2J9grI4GJHj1sU2O4g9RgOruxx3aNatKoTTjLBZniooiHGpq0dNX/B6s9WLKheesbPUjVlhKrMfE+nHwdq9bgVbzOib0P65xtliCYMnFJW2W7GKPK3hfxJkU0THSh3yFWmGySNYQSFpsUXoMJlLYG8pncB7csD5S6k4yk8N037Oe5M7wNh5q/jEcgMqLNTNOYPV3kOFGqqUxiaFiqsXCesekiImNBAGXHOpG0Mk59ffsrC/NOuN0v7KowunosP03U9DfHKNoVgcqY3cTFO2Gidj+F5pQmHeV2qTed5KN0kiHw7Ea0JVUUNBOGLzVjaNYEmQW3YKot7nNa81U8xJ4zlfCtYD19Zqe/Yip3LirWGQpnar50Qe7X7gurxlufpwFxIC/mPJv5QfoHLcKr/fD0XocMpKpESeSgpHLkUmfjrTWropV3kLNzI+ohTtce4sXp5bZFqaMzqMbQZ3k0008e0XO51xrwpanrYmIKgblTRYffj7adrsOQ72+F09ibSxomBOoea/aYc47reXhbICmv6HEpDz2NiO93Gk2iErXKkbEJLu4C6cYRM8AHQsMsya+V0m1Nooe5UR5K5VDl1O7/BoKThnvLQ5ddp8iwd7rvXBa8bU6vbjzNuDw3ga+GKUXDW7Sai3we+n2eolcdHCOiaP7i1Vxw/Sm+nQTWy4S8EilkAnBTCOBU9bax/Kdyq5S4NOyV22LmoWBX4AXoY/yce4OCZ665dElv/1EVwCjwQpRR+6Sl0YNu3WRuWE4ohQTMVSlXsL4wzFf8lN4ez9ykvgZuKaxVqath21rpB/4D8ETry1ApmLVbH75jxgYdobvQSq9v1E5fcCY7Ve2i06bMdjFIQxoj1jFNfV2D1QgmMeh8WxAzfAaAf3bCSCBKFBdotvCBOl/QnFIwLcCOn6cCAGnLsSh/7/R62TaXlu48AHJ2U/E43bYUAowQGeWYXdHuSBftuqhKx++TjpfbUCMtKe69OeUZ/hItP/w==';const _IH='58351ed002006ea33db72d41a7c8b1939e31434306ba96a70502814e450a0103';let _src;

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
