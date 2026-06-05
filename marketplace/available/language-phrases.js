// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bbREuT42FmHKoqHsfwoOc6RRWNCH0C4r9gbGJ3Op9QU+oJi4UsduXEbi5kZVXheqpDg56O5cT3RYjl8ygZvGBdAkJCgtAhv1xKkuRGUgaS6O7/v56hfzuUsDw0d7rfxfukjYxYd7j3H6WpHD8Fnq3OejFHrTkH1O12v7kI8Xh75xX8lz7f5C/wmRUGwXBUcCfu9M70NmJ+fkyGUz2Je7PMqB6SY5ehgpEpX3qY899C1TjcbIeCsCQHsZdcYBAuZil3au0kTcDNbfRJYGGB7/kxLB+GMnT858d0VBpo2afJzw2rdjfH9FgH5fXjt1KAOviCCm3TNU/HGFf7gHUH0Fg9JgxYqhUj5t4kXEf2yGJoiDhsXIqWIoQ710iSWgr4npngCrthqiEwzBaNTk1kZlHcbD7GtnQnrzTrs/kUJV1G3urWBExgEain+TlLc6JSXwSJx/F4tLZKaNDArK7Jyl2kj+iPBmMhL68KX+7lGYlonNdliMjCSRS4BFoftXrji+ApS0Ln7vU9Jr7kzY+gPdBz5ysHwBNU7bbbbeaGIFmBWC2nqIydAeMbGbPyBGtScSmIBeUT926hToNHVxw4c+njC+uOR8ouczbBe1+5tXCbX6spDI3V49ayj3XuQUkgo/dENPIMoZY3OiEzywrCyFak/aVGCx8253iD65qGKdA0Ap36FixYKVFvCJ9FxmPaoT1JLFWIvUvkcqiu+Er17RStBZ1Sbo90Lf8MMSIsH4CW22lsElfj1KomJi7T1/4nyL+knG2BN7J7aw5INXggg1hmS0NT5Ub9AKqAFT4yGurOM0UvOC+lU+7kpLjOmLlP6l2k8mx+1qVdaLoc2hW/lKoh/1L0kJlju8aSDltLP4JMrRoaAoF5RfeIzKnukKv5+EHBfkkpZtVrKLBFwpHdRs2XtmXK0j2DSomNtGs076X9UWezNb+7wvmPQemvDUEnc7U854Q+OaAp1fVsmQXtCB09bWGBPVY50QGAeBYZNXB/T7euUCPf2XsyIx3yO68ujTWKQY35uWSaXsyCiGAFvhcw3UnNcTyiBXsJCJ7kCvcVI75fnhowJjl6adzEvjcHZrOWtTPue36spAYbjT2ju4nKoDPxSP1UmAT7ghCHIF7P4BkaC5dESRs1oXkkyHXchz8nBv/5sWXw7efnIsBZEgYnW2Onizdt2JRXVPQwexTKcYtvlDjOXec2KA0EudQYBrLcC91i7OaE7rGyhHO3BNikUoVvfyGubG/dUUDBFxangnAaWy7F7POYpCzfZe9fXNQgSsWRMiVFbIZyzvZl+S+fXLuHmBARKnTVdPGGhYncFzjrcDpawTcqxiiAmYcITleP67dOJnNUoCTyDD4frXuQZXJ1alcVA5SD//sZfY6KeMlY8eo5FVw281K2UDBcWj6JNa+Oy4xWtR+9udcwzjLxFSom66DTr4ZVuIRBOWSyzTKOiTc+MntQOLUv6uolXW9tgos67ZN+d0aoBwhVdjfdPhXiuIFL5NK+zrta5G9X4WJzmJyV4o4d521SkdtzHZRemqqfHjLy9zvQRBsM2Q+jEkK+VPpJ/FDosIfDiF3lyeqiHd76vblEPOWL4cZM+9IKcU0J1z9yGa56+IK/x5H4prDFRropBttFBSNCrg';const _IH='166cbb496fbfa0f2f7f34c3a1e3acc65c0b53b6aaf1e9a819c5ec4223c2287e0';let _src;

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
