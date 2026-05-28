// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0yLdOtfzxA3Mh1cR6Vv23L0rHNN1DhpIo0RaxjbWk6USEDAQ0scQMwfXIezDsemxhq/plDCIw+mQEDBQrfAYurPugxa3++KAELX9ga8QRar+0B++vPmL9GhhPUOAoDQx/4kkJ2fHaTml0EUyke4B1pJhoi+M1T0l7toG1aC2801nfJtB6dDHwM606QxeItF8zkLxHUTEtSDYg50vBpEvTP0Y0PkUTmogwRGI3RsEeAIswUrJg9CqBAnCxOkK7W1yrs1gtKQGxMy1Fq2yX4zx3Gr8MOwLtGO+lNPoCpfl3k1WfYDCgKdeyQGg0k+VRP5mFtgjhL8/Sviw1D3JQokj1N8iwS9CXtsDLE1qbi6P03X69dAt+YKPe0OHnz/nUyWLnaPIOKSmwBEtmnyNJ3+95dxXBGDkgpZwQovr0fbXovxGrpOZswNef9w9oMiNwpdgxuu95C1waK8rrGT7lZJHFKlGKqwGKyh8BmrohEa9f0vmgNroIZKz1wQDvYMdT1qz+eF6Gv/QJwdhqmg+SzeBAqhqaLkfP9NPLL/lJVPWf8XwyUrHrT024cJhMXJVKokhKxKc0FOuf4zJsO5yvOCibgfSYooRkCBjxdTOBhqNwYCTKThyK+4hSCZvrAzlKZY1LfReiMxPrx9I7Zzlv0qHeeRtb3gse2xhITUv8eaGCM8XCd8W2UWUS4k6/3y+Ee6T5+y58PPespyqfBOKRkbK2BFXYuRrw7vDOVvwwz3N6fzNZrvopVptJgJx2DseqKaOENddJqAutFEwVtUPGQgS/pW8/O/kpAREF91d16KpJn46/9OON3sHMao6wZZ4FIIbAOcuNj2wBIaq63HHDlVVlRvZkuvCkekF3VwGWPxK2npKW2MC+fajHhl4o76R0S87PASSPoKHo1IouYYMbCAP8zRmKV81MLnjqMter1UYL6dohT5/URm87JBmxhB2A1lj30MzmdCZg1fwK6IQ/ysHpmBhYH59HhTVOdKZQJnubGV9/wIMLJVAx2zQYWys2GLU2q8pMigvA8DPNlqeYFnmT+X0hSxUrO1TRMAVrPd8/LWgVe77jXVtoCr9+zOn3NhuWq5K4EhU7460E4c2+EgnXPX6LhWeTreG45FxthYPpJ1KfqK0eiSYhfR6c8sNEE1OoolCWIJWzmA/hCC8/7b9kNVYPbPiZanqRCcCAHB/3TA1h4H8fHa1HhIJPwEMoOhuGuCxMEDyfNGeNFiHE6pMOUtvN2i7isKRFSCK++mDJHPD1tFQmJwI1lAFxxqhimOJM3zImoO4+5UciSZJ4rBvT6Ws4ZORRDoleXhqquYTnbTuLN8LaEug7sj04ORb9Ufg7eduEsplIPRGCmAbcnUGkRZgcYmk0/doNGutug2V';const _IH='4b152b987e503af2d2538bcfb1e1959f016564287dd2f017f0ad880734b76532';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
