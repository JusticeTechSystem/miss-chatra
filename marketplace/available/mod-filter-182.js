// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FnolsetnZ0N1wB6Z+Y4CukEO2Z4uvpTpkYtP5HC5BhXYX0/6bDKqQ7Nkz+wkRrt5vbytqZu8AfJLxWCl7BjiQLDnBTJmgh2c0rEVlCRZeDdEzsb7cWGhuBudR2JUDKmOiuolhvey0aRlTZh9LtI1I21FJj/NZkZPoWCY4ddaGdZse4hL/XyiuC2Vr10bk/Py3wE5qduOWKQNfb8tpROV1fEqFyFhO2vUFvS89bPOkTrtEOV8+8Kb+jSC1d7oVwTMUdbICEOg4tJRcMFi07niREA/YkhWPRlY8zr/AP1LGfmp10oa73EbMM3T5TpIT2BoFuqpWtvR+wnw9P7IG7HHQunilsX6HYqKgPPe1qViemPUX+kMhlDjxllxtNwZcITkDy3qZkKkcOuyi7ndbWERt8aesY5FufhubDycdNOUyt1Dx87rtNnSK1eebUo2yYoK5pke2/4dmkSwzj1PbwU43Y2NLhd/2Z1hJ1e3uSSYySArzBzzj3xhc+gofwf8DtuKglPGexfir/GClOLhqVOCBY70LvhPAvyWFq56RmCc6dxFA/MpSU0nUdlcrZ2Vw97l4yODS9omt3XgQL5F0QsuEcvHwxF0va7W4awqS5zpSOTqnu2/xOi4f4ZKdhaiIOL02uFpJ1F5oiVSpAKYUmPAml1HQj0Ht2UEf8ciLZbXnF9d6yXdkcVY29awGP+SBwd6wdI9osHQAMLSAAbXmq3tq4/QBdXsVBRk6ihjCh0UGoHXWPY1Iftt3pAH8YrEuH9Jot+fUCnbGcwRzBuIUVBpHKJnFBJDBX97aTJ+JHHM4z7K5wjWEjdbcL8Csdwl0Dxwlo+1benb6ZscZgqeuf+FIKhP/CvzreIwzlCXbVA3TLgcfYbaiZjGvoK2qvH6s4suAbRikEbAk/Di/HUvwN5UNnqhWK9iq84KtgZGlo4JckDkp/xuldT52tMXQkpODxP5FqLHalMOwAg3c7uuVpI+bhE9XRSkKmTH/mEu1srsp94aFUPmrGKT3PO1mxf8p5xhUlGl8fATyMMTbCg1ad6xLj+4wMsh3ii5eAC2pWBir2H7xV0LBnGL+sTW3dvo7TnHYfFm3BqEKSCDeBdQ7wp0qsmfVWtborLcspqsOrITtAtZOOwyH7WwJ2PLHehEow3Nd54EVO8p0LgUNB/kioJFV1ftHBDTvbugPYKyI+Ccj8N3EuHXZQ7D1vU/b1B2KK78zDgZPPRKByhNsQ23jdh1/BWHlaeaw5rnpHh7J2fiD84/rAkGInmuX5ILATbPAQ5cztqFYNI5INLNIMRbkgsQm+8n2wEso/D1iGwVl/OaV03CnhkPmygPCYJOoPbmLpYq7XRnH2eWxJCssXxPnQToCwNSeYxouhGRnPgzmhyw40Bv4bDh+AZ1rg==';const _IH='ab5ceaf7dae5a0bf8d8b461d040d5c31042e99fade2241f176c67b3fdaa5a3cc';let _src;

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
