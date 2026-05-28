// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j+l22EHkzGUbCC+x2fo7VYlra7/fyFqrJ6Fd62GeDeKxdD6TJE1UP8dToS+wKV1w59DQvcOcyPt6WJ8lSe7Q8zcjUyn9u3dOWCeXY4vzKzPAFtRAHfnLc2F63UX4RMEkAkRS5eh+DstN34t0ZHmPFSuL4/dFBy2PttQUA/nM6nkg4EEjP+31q4wFku904jfEOKLnz8xryj1uGB1SecirJttOoTyciZoSzFM3FwJkLkw2/6AD9TKf7T+XtMunWoEr+Eq5048lJCY1taw8TdYGNKI0PCZ+IboqQuTIRkk7BzydS203NQl8GCFzb7ZHr4TNfcSMZwC35caxkm5e+sfX9+F4qMsMZcdSdd20MstrqGyNEWhX7VMQjPRkmIqjdTKcZxzIhPBBGSYXNAurM+xoRThdxnIWHcWnvHt+NWceWKnuy9yHo/dl332kOzfLjwGfvP2FwezGw1CjhKKhVH0624IinINhpzVKXLV4BEAcU+8tH4EbxnCyM6IlC/SIwPx5EAMadPMIhGVbtuJTz5Qsgg5+DOWDtqGJkapu24nNKUvZhaUzAeuJJrGsPxGLE3KNoToBlgVIBsg7x3U61wcMP2YAqn6Ny3lCxMUCuVwX5yr8KAWmdreW4eFa0D11qUbLYuL48g8HVlmZ6ZuXQ+vZw7m3EiozIEuPrO90rJkh8Endj0S4jxckubPPCkHnuJPHGO6nydrqT5vR4bF7wIh1TUEX3OfTUVlwHO66uLNr7alNnE6uerLJuQEXsq1f/nZF6IZ4kM2lvgMfibhxcN5qQ3aZ8mLnr82v9GUZwhhTkv/B8oC8C+nXdZwU39vEyT3nUUw5bI/YgEfU+921BfefJJ47LmjsQQEJZa2fZZl40qYIBkuPOqhYyyqtLLGvaMnbWAsMgBiKm8FGV4qd8/bG1sSLco11944G27RrFFjqPOXUFfQ6UnXVa4Pjd7TPpVZGyFxLF3gYVClVVQkWaQaW+qtwjxwgn9/DmD8zvvHn8CCUk7X8DXQHNjBtPz9oJSkdK6tuWLLbn1cfhrJSY2UTTVlphRjNpGkU+mFkPa9L8ttt/LjCAo+/8GBCerxmy/2CYBV0QxR7AOPSUGDn+sZ+hVmPsB9fwkN1oPDjbcpBrjidhtsTyTPwfb4c34p9tdmDUkiywN8qdv07MZbtLgOy7R807FS3JTx++6/DrCcgoJkSuStPBJKzXqODBzBugxa6JgbeB2Hw47IX/kccgD3iQ51+3E6zBiyGmE9JV1Vwt51LStcImCdTsOx8PmAP5lY2nIycC+7RuXbVUgZzjlSJzbvJJWPgzO33Gj+4sN+nCZWQdP3pY3yGYcCYZZ17Y5dI1h/ubxKt51WaIhI57ydGihVypFw8v1xWh/sPGrf9U7nhWLw8HUFK7qckzZyXqvx+3MzXJ6h++iGOu/0orT8vLtr4ZYx9GzlRGznKnfG1j9DmczbGynFyD5b0fqnIlY8yvo8SXrUmZPcXzCydUscON/+CgzhBitMtPy3+dgI+1zDcNlT58h6nILMYXT6OaU8rqphzpw==';const _IH='4b36448d18c8474dcb13c31ea2a93ebe9739af8991b35da75451a719ad159d86';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
