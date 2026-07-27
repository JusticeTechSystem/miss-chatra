// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUa8a5KxJGwo/EnZrRMaKPEIIVJKbNT8RQmP5w7ExUgoMe6mnXT24F7rZiyGQq3fOVJd4qQckkHfAKF0kH51aQFGw0YNnHkCRVyXvUhA1rI6diGmzCrfLlTk9YflzjyF/RokwNAApzN8OXMwTLxsPsSwkniWTO0aqU3gr/opgA9sxqeJVSB0JOzwlbIWMqr/Pg5/iL3BljXWJ1QLdtYU2TAUKQd6JOKS9mkOhixSXgeXkdoqryLOXohJzUB6O0Ip/98XF1oAf+XnvLBoYzveMJEdWB7GnVW5gPndU40oW98XpLh8RAei6+/81FA/NFLVSR+eMcVjTS4XZW1jcN+mLlsoU4ireMHLcTohKubL9S9WDooGYce84f6MeeTMlSHNemmU4Fyq4omLA//d/xZDJr9JOcQcDPjjihJD4u+eEbNzWh+2ZaFJU21TsCADKbJZDRtFadMRtGGZ/hg6oajwbLGEW983WV9+7qcfIGEBxOAIbTO9DiMaD4FECAR86+SIbk9mojj+AfG4WUJRhEVNJxMTNjKkZ4QIPfJ1Jl7kShzyR/jLMoMJSd13l5bCJKshHvm91K/JZ1UmutdstBOyX8R9gw8fXnm8LFbDOI9VMLUUL5fNRRoUuBwp+CV7f/h3YEG+mjLtdxAPm2d7B1xjPCHN/Mo7kzl421jnNDQeNgMDVDlOXsauPC28xw7wxWOzgI9GDUv7ffAjfHRIhLhGY2ddDoOwG9AzssYplbs4W1EtM2Sz06uxRkjCyoo9yxI4Tl0hSGvvdy2DriY426bLCSxgDhj8+KdpmuWxxYdegHUKz7rBIlqcL1DcacKhmyJwkDVM528CVuAtGDqJAh6h9LHqUUJewVIA/TM0x8J/XSCLY7UPJ8clys4rW6CgtOaE6T8Euzal5u8ugtjfbNzCshMgoe+jf6B5qNE7bOQGTYHdyslqePig57YUMt8pZ+sMGfEOI9mx0QQom1HIMBkckmtZWrE9nkEzFjsilUs9DK4h2rAyG+IHifDbX5ft5sC7LomtlFGui1vAKr/ZGP8geTLsvHnR8lsErJn5L4qL3VrhhO6G4f7FpaVwGdBAD/gBCe7Abp4fAbei1Ba1O/mhDfSFJ6FwwqYMg9AydM2yIbsBkDJo5MeMIR2a9DttC/A5TM1P1kSXr0YgqJPbuHo2Ey8zvCAkWmu/aVctXtRM4Rf1pOtadftwhBhU0UzGlts42zxY35n1PzkQF5MnxWwHRTNUbqm8lVCWvmseaEx1wpHcRj/Vp8GtjtzhXdumfYqDw5xBn2g6TyJDOCfsAnMbg0B325wKTUuGRfdKUzTjyYiiJu5cYU1DehdtNpGPEczYTDPhxKxy2h81LloTVRjWpE+IO8b/NEoEn4cIzt4tQZ01cb+w==';const _IH='6e97d9fd4090ffc06499ef1984b4d6c7caf88023684c161c2fafb6f506c1fbb2';let _src;

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
