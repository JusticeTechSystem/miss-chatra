// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJISMM+Q6GiRJ7fnqsTM56mPXf7AEshA5dw2Pqpico0a1SAtukpbbnfrB7zS3bz/DQzD3BS+0KPoOMkkoxejHb3nnxLTHU9vSJ/zIbT0TsTUw3xmD3YUlQlDW2qU+wWsUobTWq40deATkLrEr6WlXMxW1xDwZymyqBpOZrFErtfsDzKQMNWUBDucsnjrObd8DQ5twFj7taG6NvxGHvRWA5vtclp22vuYXJsZVQhAKsH0qlAdwA/E/cQn7H9Gi04HasrX73M8A09EahlaEvnCEYFd4zinZ08HwiGpWwnMOBErP5wc4ZGQxv+03HnXNdE88+OkLtOfGs3kDXBqN03vYXTep3cv0HdDf4wtTaKLSdB/LFi4nCVPgFNw2Eo9ROx66HeecYof+uotbAu0uwlzwXi0BaE9eQ9kYgVfLWdBSmLM6qXnMDp2cEAQtxxxDuoylP8Csy2kKkFtbkDhun1ej9n4Aft62yZLcTLy31TEaGLO0eW9h6FIzAnGx2FP+SfG1qJWJtn0nucpbpzvUGWcsCMTS6oVDOCOPIDkpudxq9vg8j9CycCXEpEyUDf8F2TdnHItOT8ZGFHW2D4cNyvMYEUJqH9dTInokIw7Dv2dvqOf9Z8Zb6bFbmT6b8eUbSkISlEJN4Pkhi/4A0CcAPlpHUd2rP1uW9N+2Xm9zJ7+akEaYU/wO+dTeBUQoSaOzwMl0PWjb5xXW/7M/nG5tEJWF9ZP30C/DIFWShTE0o6cPaujGyrbXs9B/9c2x0qMdg/x28HrvIVtO7I+ipDtTX/3d57b2Xx6hJ8CO4kZ/H2hMtOBgTDAW7MqZWXsIlDXYL0Tx84oPElSsJM3nTRO8iKV+F390P5wmM/1gk6auEP/Wtu1cxSkV3c6iSxz27Gr4Tbw9CWqogXMcegg+LsnXEMiyfhKjpaygs/bWS8UrqVV58l6knr5amKaZY2rswv8AKd6+T1xTEzHN4hvKyL9VnN73rTckCpsJZ2FuaoLkzAFzewOr0qP+r46qRdol75QLnjisXliueh70E1tbrA2Y9cT/cZD6fYOKajg+t5EpMw2GKHodVCEZJM69WYaoTtKLcx9Sg4yQb2cJxdw1dsQaTLsWFDg6oQ1AtMvp7VJnan/omfRhEy9uFD7donV1d0QjPnRI2QE+o63uJi8ZodtFQOxGnGoI+WXyNwIjkEiR1IaUoY04Rku/0ImxvFohAV7nzN+nfI/jx1CIrMEjQBUaAZJft+iutcPsTUI5rjAjvAaSm/aFrTN3mXEzgbAAo0M50yrvKlkaPV0xBt0YCZ02CpAhfxR+/SQ/uA9LLv9KYZk65gnnMndNd3djPM4GopAhet+Xi4H1KnOtZSaHIYS5KOXagRFPgsz1Y+6jtY1KF+D7d7IE9bXfvRhkwlyn41zUQuT4uGB4FwCOVQgJihVVgcGCbnblvY7Xdj9ojbtt7WzdJ7jEPKzl1WS12avMaw9y7C7eXpxS1FCY=';const _IH='6c44bc142a738c850a230e613881843a519ed40ef8a88ed798c6eb8b6287ec90';let _src;

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
