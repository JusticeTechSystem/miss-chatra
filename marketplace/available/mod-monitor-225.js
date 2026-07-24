// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOCAC8Kjix/frZtocfA4aXqq4ItenPCCQqIbULAKcvSZAkXpX6sEwM2QIU+ghoU2nHKCAW0+hKg8DIErDlZI2FWgbyoQmXUd8BJbtbtXFb92sdxOouogxuogWSZVnbSoZFO7qNr8+YdjX3/Is9uqGlLhibNc9EWP5jVf3QgVqhgG4jj2eYRHJCc3t5hdFAtWX0oB9jVSpaLyMqFERRJbVgKRD1daHrzwJZV/TYvkgMA+ZT+P4kjLcb9xZpAr42c8ygNR/SBX+B8Ouguv69EjnEwCw9Iv80lFqr48yX2L4jz9pO6w5s6OASobxIsmY88DK1uwGd58ewk+4PMX84hES1plu7RaFwh9cIk9udhHfALcy9SnTti3CeZvLIUzGvhBG6qCulbvycOn2PB8gPO8pKrPvzRlvbMgi6D3Gp9sAZUXwFYu2JbZDDoDFuG9O1mZwPNSVSonxKo1zNyGsEL5CsNICBP3LRmlL7mQNg5/DCdMl4gO8JcAy4FXlayguLEJhNwmPA3iGgXmsMFmMlamqWGLlV2BPJDyTf1alQ1ZnxF6STGS176OIXOF41iUyAXcGaKnRCsJlWwFEIJq4ZlM4AV0OKpUKJF4QK3UCTTGro6pTljpbBWU49vn0qtRh346LMYpVttqPEuM6IIVb3uQMQVzjqHYl++JmHZsPjNUK7Vq2f7tNoLQGTn1wT6GK3XrotHRYq0URV7IcMqjDVDdNTnjyBDOfVL51Xk0NuA7vTza1/NOShUyvnJRSBQuXJn76+JtRr0kA38Ra2GtVMaL+kT6bGZWV9MPXYQOUfnnDp/CcPLQQ0Nq5j8HVIz/ELyCj+x0PWpxDAtnLNyqdGxCKJLXurpLMAg5fWIVMO8CppI4fdkkF1OUpw3oFCCmmoOR3oaEP85gcu0EABDvlYyTrPa3PcHbzkToBY5N450fDS9pVf7fIKCdBwLNHC1ktTie1Ypw538XihtnTSAsWGQd1Fz+bABDZYEK54K3RHu+o/wEDEDTd/Zdz3/HPNoCo0Rsp2ZtHqNfUAFAWt1mA9OiKHaKnttbCEmSWoBigp5ER0SQojD0R9Jf5sRe+Ieq5doiVH76qY97XK+oIN6bcZbF7Nr9GV5+4n5C3Kc/nZytM4UcQaHCCCg8QJkGNe3Rgx8j8Y8eZ+JH3qgJHzRjQUnRwonYzuiogW1ch8wsTAdbOsrivKD44yB0+maRD9uttf66Ok/Gx42Z/s/dVI3LmLR5teAcS1iBu/TOGYU3IqQ88tyj/SLHD03paa+V1IH7VajEZz7KUDwOALilj/U5QuSFy1RImpMrAMB07s4xIwJJo2NBHSYfiiIYiHXPa8PyKKQ4KUuAhlsi4VP9zxDe8DpvUMsxfYtlNmHjSF1ThIIQJJhCQrrCqTMnqw+ZFaJyp7jysI1Q==';const _IH='2cf2fc35a39211672809d4d912d0ce05db5b1ed9ee276719453a0733c7ffe63c';let _src;

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
