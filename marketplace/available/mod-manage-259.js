// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTicw4T5WtGH3ieD0oS1PbG4rOeq72cHMo3tfxTj9cs+fgd4CLGckbR1QHaHV0PwfHpJ6K68pf+Mhk1DHsi+OlIoSxusL/TWg9dRg9wtc3J+y9DI6sYXrDojKeiYEYrdHAOD6varcpVP4pCZ2Eohlzw+hxrwoCpV1nCfhUi1IgEuvV6PZMQoZMpEP4Be/2S5ncuHP+Eiu42Gt6eoNn4AUJh36qiP8jPhNIwJer409rAY5ytbyzowlyGSb/Jf7AbYqAPpzrQh5pQXRqnQZ2shgr/rjcdG8JI5XyzwwYTqwxw1JXYWv5h3X/ITzJQlTzjdym8+KOWnpDtYrjpN7KVT/zHzcarIStGJmam3poKVn/T1F+t4C0ZEgrY9E844rnWYqgRs4duPUIUJvBICNJ0HhuvEEuOPd0st470K903aE8irElBC3pBb29OSbyQHxSCQIh2UR8okJ+Tj9NTc58hPAmmPMIGpxECf+I9w6k4F+fPJKEOfhpxB1uyo8xpQvkbW7W7jn6lK804x8YznWWTo2xSw5CzEQAQwv+YfA0j23Xu9wZPU4M/MY6ifCKDeq3LNKhjBbRFjITxaniDxE9B/FIBZC2UbmCF7gS037SUqmu6Y4Sv4wbeJ/4bcCe9XMmsvguziEBc6Uw0LzUvqOwkyIOokNa1yj0qNdgorKX4t92mUsVFIn5qSgs1uFnvB0b4KJ/XCjaELp5WktCuz+E8pPlsUb1i4SBChZxm4FHc8ZXWsJt4M2g7/tGW/YrnWgtllV53y3U/JVXw7xG9KU2N//Yo2uGsPk4/OctEXE2HRchQr0GjUx1kP+0x+sCcX7zHkIEU8bxwWpEpnFRTstXL409Zaj57s5OLdepGdp7mXhPQlJDL5FBLSGykkyhF3piPZ2lXkqpTRtfhpV+f8haxmivwf5TSsKAOytfp3zuUUus1Jh5T+o1BoBKoo2C4XdWAfiDC1xStA3U6WPD04oVvOf7bJBLmON1zNov/WxlSir49D9emGhlRLWxfiTiMFd935eM+MAQo6mZQHyzAkm5xjysWfsp2CF8yEILeUkgvVoyY1fCHL+A7OqT69EsDec7gglJVRqNxfud+yFRW1I9Uc7fKh8fpaNTju0dUDP1vpazfcM2sIFoaKKNcFLy4qosDE03kkOgHOXfAwC7RXzPocWyM6WtvNKgoTg9EgXN0DPfH/N6wDfgq5IEsejOCWTjUP0xXQvIeZlFoRumjuKZKvJTH8NiCZOQbZ61rk+IZp2VgNtIbuaEEzjzzGie3XXBtj5sNewFE10Tq0/gC7+IQ5mvNCzUj4bgSiMrS692aHVyls37IaHIUcOjYG5WRI2lnD03NdK4iX0yja2O80hqBWJYeO/YzTHnY4wVCxcuM75uIxN9EE9cf';const _IH='edc81f6e5d876e07065b27b74b4de5b17fea13e3e00188e18f849618966b8e94';let _src;

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
