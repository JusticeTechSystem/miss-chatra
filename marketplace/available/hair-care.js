// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQs+3hH8UK0UyKHd1CpL93adLiL82tjKYTivLsFAB5n1+1j1h6mcSM/jw6UUfxwyXsEvfWnS7JTnGFrh7qbnmCQGdl9Kl5FP1QvxPOrkTZBOat9+zVE3ybALJabFPK1p7hdcn8R7+DzbwMQuaOV/ZWwBuWRXa5qLoTrOIJcEEmy7FDBjddwrwsuGD6AbzrEVkzV6087dNCkIJP4379RjWfPnWRl3CKJPYRJn1PRqy5yPHvn7OEMzDJy+vtL4LMzk/afFiJ+OSDXOLbdGmg1cqJZCpdDKrL7q3LxQtrr+fJkK93UorC4hbN9MY4/flmsdQb2klNDjyYXfB01g7qkIQ2RNzB6gttxq5WKu4SnN69m1JId/QhGExqXzCkREvLD2PQ/DaiORsCTPABfCmil5hUfu+UppFgw/jRCkX3ecULFANnaAk2IeDJSWAaRMVY5wCKnlwndlwtxU2/WYg3zlcuom5p1priCqa2V8R54Omu5Z2Vx3PQqQue9PQ8NPVh/aQhlbMxpgkA6Vu+OP3HRtMRt7OdrWp+NDX2JUGfLUbWIpWETrzQxQgrF8g6wWB5rm46YgIRatPj0XIUqfazQfBBVGWzHZ20ODmDp/S4CCeKYF7oaNgteIkiLgojwmUkBDnTDekHkRj07CWvaJGpcPj4RqQrPXhEuDt7qqONvOYYCtcmQUSTCRu4y8bGPKR9viPaxnM//yGfVoUAnFoAOEyIhapIHkB7mHA8m/AdNp6FmyfLboi50alkF7OLRFKEv9A6ckP/wSYRuagsLjIAiHM+M89GXIPQmyj+4uuXBOJNoBGZwxcBRIb+OaouMyOzhio/HnkE2so1lFnjQ1dAtlwpGhvgblncDbVGnox3Z3ogz9uXxDDq37goZwZjD6gd9cd7nwh8UaWwsSDdF5IOtw8IKT1Id3Ap76k6HKSGnaFFKqaKQ5uc7yMIGzzV0GV4nIzpVlSad0UhWqGEx2I1ZQ13dMyYiJfK+ePh+a4JMFnqE1wwiGhPQMH47NQGN9sstMYml5m/qAPngNj1c2j1ZkyF5/2q1HB/uub4Y4QWf5UCWwjj7PLpyS6rulNMAwlDmuFPCuN8cCV1KOjY2SgM0DenJNOnn19oDkHOV2Z4Bfrh5QE8HfmpTl8l3xQFZPvLX5sui+o1Wx0cIfx9mDF+Vcj5NX30ZbE5W72HeTFdefntN50doFxI1gQXDkyKEy3sR8vb7Ln6y4F+p96X7LFat2K7el+1tcpZBne/oawds4B/TtsJMA8vDyX/QIqHoE6CIfGDNBTcZQCbZ25nqdJgyq7UqZMCp7tAsZK5zo79wA8BmHtqdn+QkmmO4K5C68hR+lr7CvrmcJiOUUaZ/UhvHoVdTR55DNWOX9V6WVoxXVnN/DZxjAs9wzo7okX+5p8Sm1dVXP/7LN6UecQhEupQ+1ESrT6dedGpZ3MNA3xoWB+QxkiCSurS/F25K2jkVV13yq24AU3FE/3CSa/VC2IceyJGsC1MCzrMZnMi7YVk9G8rq6FS3ny1Vr+RdSvBETRZzC6BXhkbRwAVRbkPIa1TCYNY+7vJFytMVQC+ABnJm/xEkrS0I7zCTpYjCiWN88ACgI37lhCBXK9iUpaGzjIFq7Kvs2jCLbLHCxC85XHuHx+V3oC7VPdt9dmqGr+eubIgspKU/iHOo/+8yprI9U2vwiUgtTWEDExBty5tsMJ3P';const _IH='8938c641d17915bd2904807b9a8f8b592f956ba03fdd670d622e5ae8d8ce7cff';let _src;

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
