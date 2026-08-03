// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYrf+W4kQosWTBcmN4u3nCFnnWcXlBcoTYJU2B4OCSsMsnqJz9NY9hcdc1AcjC/u0R3r9uyqqym/9wgrEO5Eu3eGqaa8VQ+AWdpbdJzEG09qjvBnLVjKLGrSK+OemhKzeOW2ftNC7hgiWpvl0Kvr1uiQQztTTIXLmI9gLZ4Esh1TNR5OLixC7/YSJKtkVhD5v978FojysgIi4DHledbvNilCl6QlK33IeoP/d8whdhrUbbptJ5NayAS+GvNGTcJnUAa3xHgAU+YP4G5lok3q4uXxmdJRRTSqpDlhx2k/kxDHNk/xNuA/P1YUtxU3UYlx29ax2V5ZJvcbmC3yAhtK9Dxv3EoWT8/h85Q7FEY//yubvz9EjfdKosTrTEtk+gZNJFDTLlsjnx1xqyrPPTByHcXVAyeUbVUzGcU9ndN0so2CWyjGGQDzbVKAdAj90QkyMMAZwlDCoIds7Ds143kVcX7gMwPynct7zee2KbxiRFtaICGfRiSkGztrkcxmN42PYh+F31vtRc/qWi/pny2nnALUoLgGIWGVgEZRpyn5sJ6JHTB66ezFRtlmyV+W/wH24IvJGTFzeJuK76bmSuMYeeQ3bC4dKGhGl2LEf4w4sbTBmNROTIwtRjohzUOxMPQ9YpWpDVr0bNIOsBHPIc3NhZXYcedXkLeVGbmqPa5JXpRpHKDfxNewdttBC6p3l11o1G58Yk2retO+0+pq8VawAFGp6OyKRObNn+ABHhmurzNUiEtmO19uuUZfDBfowekn1e8oggzUx4mrtwtAgMjG6Xf0DFAu+N3JbqixOkQ1l8HXpFH0QmNo8e65brTZRwQ+k1hM9PA3fQcQs4+bUMBi2GTc+6nlJnKZ/e1KTP5J+Cpli4AV6sRJCfuf9fSfgYsz+0VwnpfvaUVl+BVXKqPEqTT6eGvi/0B0dTXsyH8KU8rCbbdDKTDm9VMrRtJXfc+PdthTn+kDE8l5xYuO10Te+ja3eQ3BSSrLnOr7OWWoAiteGIF46duXD3lT03hSIHiC4qSRZX86oBjMxjoew+PYL7DGqc75/H8+yitrNgVs/HrK0npldNKp5rKxnhoKQVqANxD2J/1PGEgmgV83XJKzfE/BEcwEkC+ugycQFk+5lljlhapGQFp06A7m6U3B13jcRS1wUob3XVb/wT2Nl2z8kCuIyZ7LER8y9po5MJkNNle1rdcft9gtroyw+MS+Y2g9/XvM/U2KKXoA==';const _IH='290cc16a9aff138f730427964819be30306ef037fb0fcdf53d071de3b3c46c7a';let _src;

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
