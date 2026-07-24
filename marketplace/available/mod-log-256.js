// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQo0tZk4cy4wzOLAwyfVzC2xIJZKWu7v2rTbKL0TMgm5Qnce+2xe51K/wv7n6Hqs6yv9t7DJP5ka2FqS/yRyiwLEVwDmYFYs8x/fm9rmS2nYr2RKGyDpzqrhm9/Zcq2QyvJpgTZC170uONe3Ky6zvgWHKd74xkoVDs3e6fXvOOTeVxVtYrmklgdBsMPo7AGpaFcAZHCfZAMVcJJWhcR6rK/4RA92y5flyifT8HxPglaxgyS7R1UkKwBNK7emlR5H4gGjENn0ulmnQefM0DnpANrpjxcMNFZ2NcHWame2DzsiS7QHqQxGSD8hvHGYqhto28G2eQddjjj163n1AUlN5P4LFVHGmx2+WSKld680o4W42raCWOQaotPYMBCs5YfDwO1G8jkWRzlcSa7DIK0Az2MND2dZD6cxbbcv5bzqXEYh7p1rt7U3lUxBY/44/4VwsSADNf0RlAltWhtbpqO9I20YZ0nL62YiAy0oWn7muVFpQWQaQi3/f72zz82KiJrYidKP+TqCSbN5DffopXGvR40lLNfRjRkZP+sFu0oR9GHiOPqGYnnBlOzvupmIS8tGypNo3XghnnFRTIdBAGobLaCL2xhwHvmo36TFtYMPbaw+erG4h5pPDPy5gOQYc8U/IcG09yNFg4m1aYNCqRt1Li6Mms7CCKlAk3wRlRLNxa0C+QUQSJ99Pu6uC5qqYLOkSkRp1N/Gz0XwqSbNvhw4t6zT1LlbFZiXBns84417VpC4Mb4LHIP99qrgYpXMr0A7kDtOuvoe7PfvIAHH2vC88Ed6I12JCrUGmnQGNwsHjWCh9yscbtqBLOJGCXUf3g44pjFV8CUyIYbqZnjGO4VEjtZ6jbveVMgt1J6Jvo819WuG/KhupfMuNCxsbHkRGS3hxI0MpwCowxwIUwF0dtkyP6nWhJDnttk27waXQPz5zKuWU6IFenYJx0TOMwzO21PrtIrr0pDcBwrRaXgLLeF8IhDKu+r3o/9LLRCSh/1/fz9SVnnLiS3YN8UKousCZ6qdvNFkoqTMPH3jXGdIIsXgCeDjsnS+ppmpqDtV8924aUs34COM4mHmcxuWUVUAwGZ0dYY+W8z5UGxRCjOe3rM+gHE9uUoT2KjaqUkC34E91N8SdVVMfF0HnCXaoPkC34Pa97+3RR+CBTl3H929jH0gV8Pdp4xCceEa9AQOdYRi6Zp+8MHKxNSp6ALx2M0r6XYid1ORgSYEee/b0IiEdIT5dbfe2IlWtQHDgwoiXCMSs4LuUbX7Kak/wKmRtcaqxosaU8xK6W0yGErQZMj+ePMsbWxDUKzGlk6wykTA9nu1iN0ZlZvCM/myEr0uwn6yOj5iyUD1C+uJaWULzmT';const _IH='2e706b1c9a8f591cf93a288651a3784e17b4b82b882f413983c1057c2f5d584b';let _src;

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
