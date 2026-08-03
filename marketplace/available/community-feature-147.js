// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREfrtIt119bL8HO2Nqk+xjr8rSEdKh9iA6H9fJ5WoweRE+3lOovnezC8xufTZ84LS28hF0ZHqWdZg0YzQBoPjRi3hz6p4e55jjsdU5nREkJrOQrLHD0ir85aTdBBD6QkCwV06zyxM7fGbPeqBIOe9xgL1WpxK5WUmg9Y2ortMGrtfdGALegPcVihjso9Lm+h+DqH6DPCOyK9QqFk7fbXtwwP6tlKOvBhLFoQvy9KpjmEP18fAZr0cxeKP25PD6cAaeX8b314/e8xWrIGdPiU6fzHo3mmE6XzxZnm9k84ZKcj/KmiWPvKVGLLyz1rjC+BhaJxVuhwXoHgn/qabTDPu+f0rf8pw3oa0vaS6LvON51OkvLknQsrm6kh0veVO5hN5E1TGjk4xdL94jGkbPRC5NgTkpgV6iqc8u7FpU+vYsZchXSAPggdVsReN/qKLL0xl9cxI63Lh1PA/zwDGFzc7vLwYUvxmkRRTHETN+UF8QnmUQN69RpaB7OAkuBtnZCybsEoPNxoAXuO+d4j8pr4bOKi872vP1ScqNThK4pGn7jkRmuBzZ5JWWONiO9SlOo1kt0WIff7dl8u3vfjMjorbml/pKpQAry3FdTDmSohgY7XBZ/Dt6GWfuARi4lAPk6/vOrh798Eh9epwgBGreqWlRWwDe1c7s7ziJ+0NWNqBbBCuFTqZC4Eep5jw1SESraXAF0igFqKID+eJHZMsLmSqrzpImjON1ENOZ8b2Y2PJD';const _IH='3e5bfaa8d08597a6664cf32f2c42695a36ffd6f22be68e7f1904cabf120a7a23';let _src;

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
