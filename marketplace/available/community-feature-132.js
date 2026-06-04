// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IMNIFCI44tB/N3q5tj+jweMIW258hc9/65FMwO/+8ikT7+GMFgU4yRekE10E+lbW3OPBSo1OVfPBo6UNIKsdA/XoffflxYbJHOUGr1NA+UlElMv/iru4ivj7YXPC38vixk2lttnptIxIA9lu5woB1zyu03HBkzLCTSFj5p9M3s0qkMVanD8PKcJ2YbmPfN736hbV6vZK77jr/tREOwF35hzjbtw9h6+8144F3fdJvr8NbzVSFBcOfCwerkL9XJQpIPCf87uX7sqQASY33R57E4dtvPEfd55aQQONz82ozF0CzXfCX4bBVue0O1ZblV7c1i1EeRUe65bU4S0jsobz3JvfKlc4Y3uaFQeqFlMyHFpngI+WQ1QT+yNUSQQmudIb516rl4ZbnMlKNCz46LN63ImaGSvUgV+sod2InLegFz7qNV6NIGhJHQMfb7+az36MjtNPTba42NvQEyoum91jGOTvRGlTaak5mw+wSqchNwCU9oDP7l55vIpwYjf9oBhH2qLDSeApRHEyJII/ogPww3YsEdB1xy4KTvES56UNfdi1bEKSiORmk85QQljO+3YtNWb64JoR7MpPUR9MqUQ+SsXEkgquLUEROKEce1xj24E7J+k05ymvVMTUghG3CRHZZeVXeF6oZPEJiTGYY8/Q1dyAKjV0wCI46RoX14IEXBt4a8ly+1tKbSvKBHmyTmeLkkabxfxo6y1WLqg4LD67ZRanWPLi8l+QX/VK9tBLbGKx7O0=';const _IH='83c809d7d367b5c60b67c5027cebdad2d33d7ee862979ee8006640ab12079d89';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
