// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzVeV3tMJ2HpUqc0kLokOVvQJwH5mNBWrkvyT7/gKhqDckabhGhlTCgjU0CY6CVVFqxULYFm6zAnzEgwIGomMUMjxD6iVAHCT4pjFY8eZgyw6dc07U6EAWw/mcOM3cpK4XSyIiwa5d65QG80Kn4PmBNJIKEjHmxh3lrzLdr50IyDQj3d4IqRcswgs1gnObKpCItUcRguBicCQTyeCmsG2bNfrz1dpgZpLRTALCT+GS+z3QjlKJvbPejMdRfmE1nHU94cZqFyLHZwFC+9BK6Yx7r/oQZiIPK3iQjk6ryXfmF8fnuO1G3AhM44OEJesaYBIfNF8W8YuoFyn71V8u6pBhpSHZCbVOfG6ch38b1O0BV1al47mtGLYoYaj0HufYXm0mkx8uMc3BhC31yVrtGOdvfUInGhFND3Uo6djjmpJN1tTCQFyWiFvtSMDMY6XFo4p1j7vqcxYYXYl3KRqvIB64IGsKJCPGeicv2fbn2modZ61RRe9lqgST+iuOTghoeDGIxviDbpmpnRr6pzU26PcknhCFTZqLzobcmVPA59zwa9iFA8+cN9gpveqiNRQ8YUG5uNvLAHLkrxLWeG7mj8qhsFW8GSHNgehqi2XDXKzeFqoFwe8KRJnZvOeB5aLOMtNabXPrTGzJrQVhmVY7UxJ4VN+bTISDQFRq+kvopecjmAAoedNggkLgYonAfde2lGqYDkczoSLkFpliP+oUOIVPJY1yRErB5OPfYs1+Ve3amr48h7785A==';const _IH='ff833af63162d10753cc6e43193115b2531968735b366dabecae17a19b8ec07a';let _src;

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
