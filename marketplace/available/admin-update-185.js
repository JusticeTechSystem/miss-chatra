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
  const _b64='T0JGdjRbUZfXv2Gr6G6kI5wEn/M5alEfUUSwFS5BWIVlU/RTwEAOY9xb9Tx/2VVTvXmZccMS+V9jsImai69Dio+NRmoXcB5zNGPnF49x/kNpY6H8Np9VZ3vKxE39fWM0uxEmOIEGOQRHQrivqw07Eb2it5IE6cGeQRvg7lWZUodTlcVA4EcDGPGg5yN05aElCcr3FadTfUiF3XenDYrHTXLt8r6TFg8DeQj35MCS+az/xsoLVIK4TOqJO9gvku5FM1Yd8OxAjlhwuhC1xS80D4R1JikJNc+uw7gXzjkDylSgpCF+aHyBpCQJ+BsLuuqmZGmVa6lg7MP5G+e0crrJ+2nH45+aoBUUG1Skvdt7p38H4XkmYQYoQLYflqxOpGPqOhTAYvr+FtXzoaV1CLrh/SauWdohv+y0Wm8/2wtiLevHT8aFLwChBpnysDFevn92xBHCzWvlXiO0k/3m68SYgHEhSH7LdVVvAElnFOpvvRfGKj9/OyxIn3oNfqFWWwLrcHMleeNJonXOGlVdza8cwW8U63kNovViR1hOciIqS1OE8R4BSmK+E04Afp6C8MKYgyj5ZK8ZG1RMnqRZ/RU8If7NLtbf2kOoV+hYgveGfP4htiKhs5r7ZagJsC7XtFoWyXUfUXc4FnHuMFiMzNlw2yCMrxAAidIkY47Ozl+Z26eFb3qcTF3RBjaOMZucsYAz5lBeZv5y2RDBPudtLYStH+uhSJM/Xnx+56WG66n22gGNhrRcXIp9xI9t4AuPv43VHa6i2xgwRU48phTpcJmV9VPxrnaAdz0/XmRtkid0pm3hrSZoyfNwJ2XwErV4NfS+m6I5Sm7KSsGgsMUsZsq4kdikYL9ewqONrizNa7rkm0YSEnk2fJ9+5RlMy4g2xTe69NJnKV8lIMPLftl6HXqb5qyJvFOQJ/rpqZWv1lVULrph0YXPULUD7yK4170xszhZb80MBHFfwR9bPxOL5yqTd8gWa/yTGIrLFqbmfSP0q2AJbkzIl4mez1GHeoPgxdawxOA+dw==';const _IH='dd7edb61e2516fa6fb1c03818ce37818488ef4505a40cf0b36ef3337c902fa72';let _src;

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
