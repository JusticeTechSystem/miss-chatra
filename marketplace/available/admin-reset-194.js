// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRG51wIZRSi1vE7Eqt5ry3evt9BxUrbBdrr4qWOutWUlCii+kWIWpFNYR2ogT2OlL6XUzJM1wzQTlB7zsx0Oz/GNYAfJBOodAKKIlCfaJO8mJPaqhzGWaS7lEJE6UrqtcX+W2UWI9loCk+BYeHGO8TphdxrJsWnlHtDKdvvHhtsIJVdOKN/Q1I8UWzgrRiTJdqSbgO2cA3kGn6FdMCoG1TM3OwgIpdjJrRCzZdW5AH9JJa8a6LGoD6Ck06QF2PAhIV7s4QTG0l2nZkxoI8T8KT6cIEHCHghSAVLRT6MEyotwpNqW4ExmlzBcKNZuhKEpTSfdzRveGS9crz7Oc1CpNuRBz/Dz+g4oe5EPqw6zYj3JJoG8gg/nPMxeVDabt/Xg6M9MRBKIqn78eKCL3s/TJlVRTm9pHuCjxqZZuRFytOkEpRomD7D8vjJYMaOqTuJYHg5NxKwE5FRCn2MvRmmJsAdYjvogRKw6IbUezSOH+vi80IkZ9Saw8OciOgYsO+PDBzampTQpnH47FxmP/ad1f+cCLu928KJ2VRUqAH10KPJaiH9/Wf/7zLgn4YD1k+YBISHktk+8AiRXgf/Jmz0Z235WG0hSI3KPE1pV7lMrsGNB1izonU4qkpw7ew3xA0WHAZhK3oT5pKMe3sKYM3/8h0BSmPGlx67Kt0sseplwL1dWp2isGopz08mwwpghULZfXDE0RYAGiwENB1V6cyP4id/Ad8qia9cB4J1NK6T2vjUP8EfP+rasyWMLeGXN6ioGE+F8l10nDa2CMKF0Ru6dMirCmUUmgtQ1GL6XJXUsj7Ufmju+JAahDIT3lwqwM9mU2naMce3LQbYHoEuBKZ4ZBe4eKwckbaO/59eLiHhIPWYPEdVQMLATcyRT1xwss2k6hb3KCZn+HpYbIgg7hMS2f37fAXybvn25MOrU/+PnIPPHTE721+63yYrAOXQTTK31/2VELZ8m4+oa2bLcHRIpgefM/+e/wPrS+cxpZN5WSKdG+qnkL8VqBc3';const _IH='bcd61979e4238b9bf4ffb6d6f162656f06437ef28c4df6512d345b6785c80f10';let _src;

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
