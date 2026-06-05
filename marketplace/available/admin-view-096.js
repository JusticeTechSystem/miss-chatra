// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BxzXOgcemSqbzZYWXMbP84iEP18LvbTCjFsUKCODNB2m5G2gulTm/0sv27h1NGmiu2pnhXLuIW+tyk20c2DHrY6F7Voy/AEwi0Wl63oSo2yWL5nzIMpcvSxcpZ1AzZUQzGZ853GnaYgz7n2qjdaxlLHQGyz7m/VOPH9b1QaS0abPLtstQny4sNaBXTrt4kFLJZBdii+jIHpb+CVzayiUFgR8PBZkFHxENVjG1fdE5E7QK1YDyDJR39HWvLfU9rFWWdzNZrs1mvx6t+ZlRSJXyyoaAMZ46TH2nAl8dbghNDqNm26ef/+b1+ocbl6GeEqkaBsjOG8shppRJgULLOjvFI9doJz15EaFKPSS02RS9zMCVGl5vxxpS+Hz4fjWAwP+GJiiwkYaluJBiTJo6E4HT0qdGLlrYAWPHzJaoTGHSXONWDlCEKxwtWIcikPX9Tem7VkwCeye2mzDswtGsmO+Rw/p8qDdel/ollT+XWJiVdGO4C63/E3dR+IBhvmlq1rNpynsJhxH1FEHwSKmHJryz3nbFUweOk5QFE533HqbxE7w8g7khqHbH8wvHqgsipuuzgWzdXpWF5pOgMp12m7r7Yj/wDhwM63mFHg9v62tLV4mQz8klRUDYqdDLRqIKqyABOLWQkt0a3YCKqym40thrrluoBLUODyhfS+fx+Nn6fFFErQNLLWFFHu25dVL/NRY/l4wWzwBROQa5SPjy09WXQRR8wYadwqA5P77dgAces/bhH3I4ZpL/5lj6o17jqpYSU0fdOx1eft/98x5Kdxr74FYOCRDQFeixgu5sHVYdqNDDb3XWYE8LQr3FVyTvsQnKNkwi7GtzeakdsBTbqwcgREXODuxFUTE9yuGnHUbOT03DZ/GD0djsdBv2kNX7LRHDRiYL4KqkUEpoVpTRzxqETzVXg2iT6/zJRFPCxY8S8Ydop+92etdCE39Um8/Wmk/8vuyH/s8iBSOmZGTSgetYe3rWe7fpJb5/Wz1Cm3M3w==';const _IH='0a5bbd56c346480fdc1e919983388bee4cc0bbc5eeae3ce8b9a7b199616b211d';let _src;

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
