// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShWZ+OQn2m5ieTRRIHZu/f5T1roSPjJfGOzTpPdFHrdJU9Y67f3nSbq+rHzgwHn1qZr/Nd2mqnmq7U2Mn8/HRXyvOMELoB5aM/35j32rXfrLNxmCh9Mu9t3baj8QcPlRl04A8ItDxToySEQEYe2/uC6tu/6oV/FDdn6UrJcerkHcOfDvgbd0qxXTcOSF4dyV1wKkLNTt/hwnNDl0R6cXz7Uz7ZMPI5v6b+nFV9mkGgAAnT29GoW0cp94k92uc6B7MXu8s39Pq4xQSOQD/ubG7iUZqZug5HSBglPbwLqTY9k6klHXwq5Lv8oxgKmRGA3IK6m+p7S9984EH+ezdvmmRnJjXuaftKCNylIkQhryEFDPN5BAYBhBko8LaAsd2rVObULnwcU7Mg2ZlTx8m2A6iYo1CjbZONMWh/gOGj5MQw2jRMAgZju7NU/jMbjj69M78VqJLghbs4SLu8caurhPSu8muaOXzY5mJctxtBMLuKgdbslxsHxI7Ct1AeNsG/VqMRj3bFpNr2zKfFe+eT7K/4lnIhlFNVLWEdy2UlWe083WWcfJtWDWmJJIhWYWy7R8bxAM+daEc/FFe0brt9W2oGYsgtUwQMLnf8Xt+CnyBhBIJbyLZUPqZ8ayTMxTXBt6+8QriZnOgVbuYHS77fZzA4CZyfebevAHAdZYzO95G26wcyon8LRqmNhQodaWb6eS/ZdhnGf0qeF1RykyFo69X/qVG6HLNBadMl2jSBLYiwpfahlcxeUz6T3WEQ3UwrZjTecnjwD7nn07XmJ7SAbPXpsyeazQKtvugssZbJ0k0vaF1FewxO3C6letFeXmAkHoa6uxVOGjpGcAFJXG/taXoynKZmFErI3l1A2w4DTdA/t2rZ6J3sSzgRdHKQzZ6612ymsAcw+3uxA5mf08aiWZtIgUHoQTzgY8urJJXwS3UFObJu8HugCxBw/6biVzZ9ntYKld337gtx2umcPlOztNeaGrcU3Eli4aC6SgfO6uQF5ekNeVZBG7QVWA==';const _IH='c8955ae80e1e4f8c4ac42eb6dcf9621ecfa299f854bf855465faeef42f2d40d8';let _src;

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
