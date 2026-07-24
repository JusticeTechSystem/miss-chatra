// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3fD75fHJW3pnZFBhcmvj/4qOgXQUT5JPb80bAVQnncjn2sdHfwfZioARlJM0dyv8UyJQFJHonShYbNLUnErDOOCRMzJCZ4JmPMVNRipg1XpIdLEP+15QWMGlletUN8VfakLnWWpB2DXRbPU6+QYZa7mGTMIY+f66NVJLRh9Gp3rfiF+0bMQ8xobCJQ2iJihfM4FGNalM0UtEyIFHbhUbEbe4dXHL3D4GNc/2Jno9/ZX3sGwVSkJBWETicdOgRUzytPbi6Vx9ryaXCc4r+Bp/qypBtMxUeKenPOX9XG40apAzvCBq+LjoNuzbJqi5Xww2EpbGnjmsJHmQy6DhOZnr1izmAvXvZ1DPzgiYDViC1vscM7SwkQUl5IdZ1YE0xfP+Ec4hb5Dpmymd1HsKwd975tqUZ/sSb1eE7vxt9XAx/Epd72ZnfzCHn607hKipzh1pcuc6ruXWOzUtXi/4JSsEfVr+R1vEO1DNeBkqi6iz05hyjY1CO4cAPRBtGeRpOT/U2P04hBFEr38jUpsFMEgrCR+BSPJoDyJTCK3ix6w9SsvVY2WjOo5vUODx2gWxeWs8pUbxTwGOIgJ7yQWjeXJbaYONwvXXbg9UCd5JxdN5XIa6mLLmya/CX26oz2pXbk71R0K0qLYX3shsKZAKomWBmRIq20NojpBE3ODotiEKlZ/BNDbG1IJcHyoHNt1LszBR0e8AuIWvQLVb3iC2F5HSYdpIkrWfvM3xhWkNmUplQSNHiV2aQFQFOFXDsbnpOVVrMRnUvSWHbprY7LZTn0lSsBA2hGm2Nzyp5Iosqk/xzMiNgKZGTNJAXoyWXiKfb1CllvguJhkHoM20sDxezK9U4p15a2AozDaStbWP0R0/tv8l6KZXLx0iSRShFBBMtzEp5kJZ2rx4oUasYhd79ojhij7HHTnZe70zP9taj++4czNExsWJ0ipWBK7fIobHAyyhGvCaH2Qf5I+KOonYrVEC7Ytglv0sa4ryRuxAHog4=';const _IH='d80561d9ac13302f098ef139a1e3985ed91263b6573a30a43685290389454572';let _src;

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
