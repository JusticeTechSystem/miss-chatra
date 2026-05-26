// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x0TZ8YcyDxuRXLOSMSJOh0as2pssKmb0yNw9cgm9r99X/3Ms4toIOxuErTj61UVWsUS2pAp50MQZNncW4Gs3OdhGF7DuAQdCsseT6Wy5ibvUp2+egoeIynlMjxxJMLlv9CJR4PZwNLa0JR0XuXMIo0dbHA24Cf3N5RhDSq0EvTayOn9hcWiZLihNEU3/weLdciwEui9ydP1T5J9A2q2m/oUB43GW3G+p8nZvhsi7Nl0Jm9uov4hu8557IZz0AomCVSZxc1AbSvoxu5q1ghDZmLiyDcpv4RzCTm30MII5epEtwORt5KrlyNgR5lax21E6Z8r6y3V/u8r+ALiQ2YJ2sFOf3+9d85qVgoeNjrQniNITkEVzPxw2Z0JYPwo9+T9noMIp5bgDr+mB0PvK0YPEmvAXkbVuQowScF5zHD+ef+1ktLQxxUqi43fCgH2I20PsBw6GXucqkUQpC4ZiQCZOv5NLMEOl4s4AcopCBZ7N/LyEa2GVAsZz/Xiw/SX/OUE+XxGXyTQK9qLHsa3DzGkR8TWblP/+lhSabq4nkZaVQ9D+H33dLbvZXGDY2BxHJGHay2RTckFFE62jWw7apZj6VvOpni/6upbbl1XokhBlsvCG9bZt5ZbCsjHDNnO/Z+lAVoguHXoqAjxqbN679YjhPnTcXNNGhADhLqiZoMHWyabhyqsXIkr0TkmxLUiINfJc64w8D+PR/dq2GNNLwNngusZJ+ifvhY/qwVUknh0UdMQHyVHLGJO5W+fn1c0wp5ashbny/4nAsv0YypO15BVs4ioYEaYDjDOHQ4FR2qh+W8DwgE4NXthraAOy4aMiU+VE9P04v0g8sX3n3e2P6FxfYw06vnD3OhMm9N2Sa98pr3w/UUeOPwx8CgOuFKqE53sFaMbej3Vd1MpyTMlJK/qMXTLoz3jI+4UDYZTUlc1A/1FvSIF1ScQDSHh4Tw0/Npas2Ega4WRDmKnQRKxGuR7Pin9wJjgXbi/9uobbvtVY5MpDHZz8Bu8G25aucBP53oHr4/y/O8UkjWpqv9QnyR4fK6gxSd9CXfHIUuR/MnTN4ozZaLoM+U4Kl5m6hYSF3AG4k58pP2+UOKBDAJKAQdScGr6V3dk/la/210Lwhaz45VCEsf2azmJdpA4OC1sDVRkDA+OQr6FSEHWgeNyifirnqJ2HLEx/LbRkXWaj13iDHk5QBz5FWGBJewzarz1Cq8OfeO935KNpYFA5Sc7dJ8IMbDPmyEOiWnrMVnelNoNFHxeiU/7PtmyBrJEInQuD+I+iiOoXMhqUrWdFXVMyWjI6z3eBrM6i1Ac7WOT2ViKlDywAllb0XkES+gRv/KF3kV7dKOxmn2bxgJsoSunzjliKXlxkc6hOWZfqwKM+YeLi';const _IH='f1791cf7209cfc2ffab700c7aba9ebd5d53d341341d9050032273b1a118f74c1';let _src;

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
