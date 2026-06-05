// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+OCvAb2qKLQW9yXPezPFWxruk0DodSZdJjVdO9mT6hbfW8BK7BcmiDTivPOFzBBbU5PnISWZuDczH1/fwrqEHGAG7eOHe0CxznC2xb5AdnnTN888hl0aJF/Jf886uccFkvqekapDu9AT1yxSk3z8EAwFkwC1O0JO7E/tsEdRafgUGUnu86vg4kOvnAeLzO14M35w79rBmnNlC7w7tXb9vo765XKjRGZoXhoI9Gi4hNl0vaqleXzk1kEiIwtuqihQUG6bdEBCyPAaA64d1LqP6EZ16ADtTG8cfhtJ5BpzK7MVOgvEAd5cpGgaKod6jmOueCiaq0lcUloAoarTSuQVq4xFhbrj/EZj+36w2k5E4YNgLlAD218LPmIPA6lck6aaLTahIV96z1y0oHF4HDFOQLjgKL6oTqK5bbgLT4MfzDplhVuX7CgmIgq63DSstD/xwbsKPYnNE4B2koTimwAnwgDZGm+4vF52OKuO1g2EoWgrBAOn9sCXVCZ/2PwxR6rdI1GA0Gq9mzlhpFaFLeoBVvZiWtAM3JhKhf7Yyp6/slcxo3q2UdmSVw/YIyh5gHv86IA9umArRfWCVszKZcOH77Pby4dJt/R6gspDwUGT47HZxIPOU37OPe85sKMH43Uu7IH+CZ9Pi7brVS9vsowgfx83kyR1Hd4nQjDEdjpjGNY2GjGxQuE6MC6yGHkYDZ2mfLLDVLA/vGcpuE71uXL0AW4cAPYnMtkr9ek5AhCvZIjEyzY=';const _IH='ddc3d41f23c7c4199f81b7fba20210ca054245117c5a784cbf8b519eecdaa3d1';let _src;

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
