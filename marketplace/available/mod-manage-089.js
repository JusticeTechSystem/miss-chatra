// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LDhWT/sWsRLxyzHBD6CBesU0ro83111ZcbZS96Uh14fTSZ3SWxrQsnLIL8q2t85wzCyNu80AgjaiZVpbIebbYgPH0G4D85MeLw4NYHlXULE1SbdzhEO+6rUnvgX+803SiVIpstYINJJ/G4DwmFxW6SBapdR+MiYESQOv/UPcQ2296LnZTgZGet9/fAd93gry3tv9QwaRUESGrZNjenb2nbKakSbi5Or+OyxyAqV1LQrrEl8t33iZzNqQ5I30cAga2hAqeIEWidgrpm00zitdyN4WMC7yhUR4YLQlaohVFJzccrRbv2G8EeF7MiqHaDsVCsynrUduIU5DpS3HoLwku9IBSFS0owlAsXkdsbPhIKz2h6GF/2igkfax4Ofoqj8pMSIk6Br3eyezmz1JhGGwvAHnHSAAzXwP1xTW+NBUS4bq9Xfi9/V3o4C83y4uLPDfyYAploLvS/KBwYxmj4fIMsS+I6of9ndd01crwqclIJYC6HoWF3+Fpu5Wo41p8sn88LxKPLeW4Ua63FPRS0qcRUFEnKSoaGdykgYG2vT69edhekhYtadO4k7ciG3w8W5W6F91DFzXR941Lb3v5VcMuKWY9GKQk0FPWsKIwvzPYHYxyu3qouv+tE7ixpCFO3fHi6OwUEKrZjvh1n6RqtYweKVEBFphKKrmRNt0ZgfOEwx2TsHizaW/ste2vWjEIFKPONJ2EuWTiLEpD0+hJ0V6gJSENBlou+KYCXQhHoxVb8VURvXHaV1bOhsMGMv9AnTdBcz049ve7WjsjHbiXRsrFRObfKSV0CnzxDQKyD3sg7AIg2ET1l5Cg8xNziCDEM4N8pWC9/l0qvcZ3h5McGXVHh0dr1hXk3ZOa7uRcXx6UXgYBYEsQceVwwQVx++CDbAfpher60K3ssi7s6kftnHWu02kzQhf2KErl9mxoOzPn7suJS8NFCieQMfm1OvctHKLsyvAhAipqzQQ5Ew13mjEBJWE2+h2qht8YcirIBBojwJYjTw+dACqfA+7aaUjwMfYIEDTQenVDX8b8x0BgZ/2ayuwHfoAwtCKNuf1pvHwmc0rBIaL7/jdhdmZduGZcdzRLh9oYnf66eDjJCEQH8/5GRK09rkGyQ/Iwgtz/wn+FyrA6WPQUbEzkOkN2XWmMxGVSevqS4Hlh7vOzYIAKOMq5koOvsHIKQCwnefmSgfl3u91vVho4Nu3r/cegpcKh7WjbaPpqv9KeAQ5FXjI3uakqjuOyv7PxMChDhzdLv2aU9/Dyjwgm1f8qxcEeob6sq86E1BojvqgpUfKDWevxpEBicMYsBVIUpCx7XUtCMCm/U3SYyLL/siHi6fPsTu4IcBaxjtKl70cJgA8WUCxixfpFII8IlBIPKZGn//ReaJopw534QY=';const _IH='67aaeb53264f40ec54e001735b604897b4aab6af418d488ece0a1814437a32e0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
