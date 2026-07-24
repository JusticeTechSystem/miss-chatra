// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrjSmPkQhzAExFfHL99JRteRmpSjlVy5DV+JKXpne0Vhgcv3/MNIe7gtE2icUfXQ6c77h2PEampIHkjp1ce9m8l8yLhULyHPVeCiUDhXPWyO2qBuCrYt7IyzD8EeicsQQn33FknGbO7+joR+bEYi4Ot1Zit6WXKCa+iu2FdYaOZJfllMn1qI91qhX9kOkbTMzfyMuxi1zwtwrk/FTK7SUVfVQcSjcw6KIEFd2TBHLOA3hsroLzrBDOrq7tZ3/qrhmrK/1yFotSsEXuaoDe1oMAKSjubdIsVmOxzdP8IOO9pKV14+7UDo7WQR8FxvGqP607mkrjHo6DD2O8Wx5AkyL6w9d18XpxeGJbhucsT0Kam575TJlgodesyfSq1e93v/A5eX/u1LLNevF/n2JmGU6AWsoSKOKeH5imtbSGuEiIDIE1v7sJpjneUJEEDkYXPAlaWlSeVqDpFEO1Z55qYj80CCxnTbsj7GaRGwQ5BtZI1ky/uyO72x+MmuvYgFUJUO3BC0MH6mJSrMSoCfPv+WA1JRGY4A1d3eb7O6a1cyiPeXZtXzlE9y/R23YURI2HPdOGhe067NK07G7wz+a5m0jOXAMCOt4jFS8a0MI8VDCMbHmOBv6c3KEk51OnbcHFKyMecfc9ct20FLYX8oTft7mRFMHmUvne/rcK9A7qplXjRZrf2WYmob9mUJ22lxvoBXE8RIqfFaRrFNhzw0aOolQLACOefqCM/+EkNxw/Zw==';const _IH='5f14e74c8ca02a767abe6ef32d4c304813f80e2d02c3c2e5fe9045751c8f6f1a';let _src;

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
