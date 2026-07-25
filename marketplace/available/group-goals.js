// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTsxnCqvREas8PlYZgU7FpChW/FZke60wOQer305jb3Tb2nqG3tSPqaDoCnDDyTEo9ir3PsrmluXY9pcknOlNZKG//yEbwK8YtlZKtJeELtEUwC+JmDecNvUkv2+WJnLShAlFzx/+7VAYInW1IjFxew702oSDrxccuBQ09jyy9uGSKQPjeCpID1K6j/7vw+hhdJZbJW9NriVv+8Ie5Z1WzfQTpAY0Khj4TB8vLPO0Kfgf0/lR4kzSPpCHhq2df0QZdenyi0Xwm/TUVNJthu7I4GKQEXBzvL0T4P0huk0R5a/CpvAJAdGJNbFz+l8laiQgqeG+2ngXhcSGhlKieTWLIVY8RvjhUSQ0KHzljFFzO1ETTs4Kp9eK1hfwdHigdLEXgbtb8Gey+YYwirXnSAwWMZlZsXvdbtnokJu/v+msovX3B1ILxB/CJUvxYu5JHdgVC2MdwHrqqrhEbcBi1woakjY+gYYFr9aGr9o+6FrK+jIYlyONk7DFwmSX3eqqVexeOiAa5xLFS1YMOhhtWUa6mBEVGZW00U+qiekeuKDyhAC/35Aq7fjLphJuYPXdQCPmCZ6C801XjJXy4rsiAVTge2iIpYApcCYyN0Byy6sVdseL/gCy9qtSxyVgWqlwftz5HyvvFXhq9kEcJt4LKyHQTVIuTD10V01yOqq+SIApFOBdYtAy6oyyRnjTmkFH0397BD3lHdCvtpEBu6dRMAVmffrRCqa7mjtgwhNFmFlmW5IKztje/wJ1akK+imi7I+TlE2wJ4rqjCY1MT1c4Jkd5OG+tpebaJcABsmIWx1Ru/ifRCu87wQWt90xyUjqhWuQUU5gTU9jgKWd0IL9OHraaHme5kYzs3oWzgJyt5sr6A9v91JsUaIVxDMpb+rmwDWjaR0nezmZ0+xqqFcqKRaLBwpEiczj2UnhKF2Kp00iXRZ5fS6L0gmvcbQsic0d2gqCEcR9hgyeiA4+REBdc4f/2cDEz1UCXW1tfe6QdQysipeDDnapdUqYMM16ELEsaLFcN8nQL+tkDuE+g/4IsBmsjJ9W+6BATWsxoQetCTs8HznWSKBtWUa2eLbu1DW5C+Vuki5B3kKu27c4pHBdVw0UfVNWM2YyPD/BhNaUM1XtsmFoGudQIww8SnensDGM/4BWovvVr0FE1ddkDTPJ+L7qwqPJbivHEo+2Be3lnZPtA/BR0s/8awx0l28YTOg+bPXUaorIuGIVc/NNSZM6hK+d5cabAOWaS2FG39cDocI7ElsgoruFaZbOy3jGMm+41vypidmb0/KbD5STPhJypRFMHhDsezFV2K8/cPRMz04xKtF23ifuw97qXhsR1VD+9xLjh0jULeo2TYMMUQknwdWiVmb33UXvbVDEP3RAK8XY0zu/b5zxUpCqfVQu7fI7IzDvSILHWvONUEbdnjrrRRnkDwY11Idgdd5z41ii222U5RRYry1ax5xnz24vTvUD6meUtvgLEjav3DyXkIYthB99wDszkPWMnTywqtG+Ka56Xwq0OaCg8hzGWbjFOAtf7EfTFElz8p/X3lMmhcWqzk0jWBmBC0/tmDKp9yfKDML9D0cJBGak+zzR6WLeGVClYerH9it/PpYqCltI9lgx89chJWLPSdPEzppjWzHdVwjIQEjdoNI9Rq9iX2b/O3ruBLQRo4Yaxmn3SDJcVA754e1f9oLzl2LG64fSG3Fb8MatvM/qg2uoEJj6JrB5yDw/jyrM8ZB7S96ePhMNF3PPbcWt/NQl/v7Fmj8X5mGm4hSjC/u0T/DQS/Xl/p8QyANXe1VDJNwMA6pT0++yegSu7XJNakzqV/7FQTjVW4MS1Hw4ydf93feARs7Lquz0dpf5OaPqzfgDi47uFvbIP9L25ecZ9sV5dAxoNn6upj48oscY0yuPNwrSz1+6WI5yCjw962jLgKNDJs6ALK/QDEnc5LN+IVQL88/MGgN7dJxiWCJ';const _IH='4bf2a126d1bf00ac37f3d8909d0dd9dea21527b453c137bb4f35265b275d6a6b';let _src;

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
