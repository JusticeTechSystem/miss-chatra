// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0cEdCtJgIIptu8NLaj7pMxAFdGJlpJyESXg0eRZBSvhBLZr5l1eCDpScPhns3GWnq+yQFuf6/VdUMl7DxAgzzF2t0hMlCanZ938VVn/Im2DHamfDgIlh11UDj+jGlQ0EG0eC/UkZL86OT9RO2uEEevmLCSpNrONtGV8nLwc3v1LM9tw21SlVo7ZzmRRCYFgGbrvEYL6EAoqa+vd4aMjep0JveMZHoY6aukbpYurspiEovCq3sfjHNuSdQKoraEH65BkP/7LyL/W16MbW2b20+87tpVPTJiyzWRyUWvucST3OUIip9V8keQcqUu0N9Erb+ka+NqQ+vQsvNfPOaRBAiVUHiLq9c7oZy7LfJvouo+vze0aGM7zBpC9Jmva+Jo43RPgC7bvgPebJvHpErd45R0/V0K434BF51ofzIgN7xIL6QKa5rqPEGI15oBX26ajy/dzaWsXuMugTlee95ur54YRyJAq5mv4bZJTga4S2bbTRMrbsJWc6Bf1UR7VzNJn4l4RJuMCXTepZiEex8wF8EURPVzD+aKAPT5isjMX0Qck6ZLEesUm42eWHSqOjgBAis+kxjXA2tjTbs6DqzlwDK6bKidyX1NHt2zkli5vPAZbyBbMjITd92uwQWCcE/I8gy4ED80/7PlRpsNb0JWIIm4j559gGPTps7eqzLU/WbIAu4aWxiMMaHN0AH/yzyimBdNy7DsNBda13hSaK9c8AQyMcj2cvPA6FXZnyTis5u7HjSIbeioFS2L626ANTkdXIcy22oMmMWi9tbFfrJD4Ld0+Yqp+r0ynJT3eKkK0Y+UMkCWWcnx8Wg5rqwZwgTWK9GDTnBgBzdAmER0UgBaXDYcC1uFprnm5BVSYz4MaiY2kmiGpeUo7JEJE09Td7pMlqT9/LhHUQSOC+cV3N1avGH5081zianLAR/KRJxtBWhiobDe/Z8E6e7KWz1/7IhoX39J2iBEtI9g+MMDQ71NJhY9VSACzmnOwClbtONURvjal6pRPtI/hCaruF11+ycUQdvvc1VftqaHrN4OySe2BLfeq0YzT8vZIIB35n27uDPe9joxbh55gpwQSa7d4/QdRU5WDNcILav8BvZcco0xoXTNtlbNJgUrHbYJSaoS+LPy9rxlwhuvHxcJ0Eu4q6CaDJuWuWpTH8zeZf+nTnvoljMiT3H15tBXYkFrqQG856fjVk7HFO4DIdhl94gNwnXY5U8Y/uH/ymfGsLj9ECdsrZ18OKgSGEiW+ssGLXdU4lHz88Y2Nh1TBD+St4qTerPdMzVHZDOLSAPJtzk0kerqfbkikwk4XjB28cM6mtYniQjUgqQBFMqGpTvq/DJrTE=';const _IH='8df61ba010c844e4e5dd806f960b235ec7a1f46d7e90be383a53d5d734279051';let _src;

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
